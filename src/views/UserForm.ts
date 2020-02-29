import { View } from './View'
import { User, UserProps } from '../models/User'

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.set-model': this.onSaveClick
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }
  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')

    if (input) {
      const name = input.value
      this.model.set({ name })
    }
  }

  onSetAgeClick = (): void => {
    console.log('set randomage')
    this.model.setRandomAge()
  }

  template(): string {
    return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Click Name</button>
                <button class="set-age">Set Rnadom Age</button>
                <button class="set-model">Save Model</button>
						</div>
        `
  }
}
