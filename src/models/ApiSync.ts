interface HasId {
  id?: number
}

export class ApiSync<T extends HasId> {
  constructor(private rootUrl: string) {
    this.rootUrl = rootUrl
  }

  fetch(id: number): Promise<Response> {
    return fetch(`${this.rootUrl}/users/${id}`)
      .then(res => res.json())
      .then(json => json)
  }

  save(data: T): Promise<Response> {
    const { id } = data
    if (id) {
      return fetch(`${this.rootUrl}/users/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
    }
    return fetch(`${this.rootUrl}/users`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }
}
