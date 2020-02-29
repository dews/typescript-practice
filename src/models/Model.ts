interface ModelAttributes<T> {
  set(value: T): void
  getAll(): T
  get<K extends keyof T>(key: K): T[K]
}
interface Sync<T> {
  fetch(id: number): Promise<Response>
  save(data: T): Promise<Response>
}

interface Events {
  on(eventName: string, callBack: () => void): void
  trigger(eventName: string): void
}

interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  on = this.events.on
  trigger = this.events.trigger
  get = this.attributes.get

  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.get('id')

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id')
    }
    this.sync.fetch(id).then((res): void => {
      this.attributes.set(res)
    })
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(() => {
        this.trigger('save')
      })
      .catch(error => {
        console.error('error: ', error)
        this.trigger('error')
      })
  }
}
