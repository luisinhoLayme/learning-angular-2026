import {Component, computed, signal} from '@angular/core';
import { Character } from '../../interfaces/dragonball';


@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css'
})
export class Dragonball {
  name = signal('Gohan')
  power = signal(100)

  characters = signal<Character[]>([
    {id: 'lfksjfs', name: 'Goku', power: 991},
    {id: 'lskdfjs', name: 'Vegeta', power: 800},
    // { id: 3, name: 'Yamcha', power: 500},
    // { id: 4, name: 'Piccolo', power: 891},
  ])

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return
    }

    const newCharacter: Character = {
      id: crypto.randomUUID(),
      name: this.name(),
      power: this.power()
    }

    this.characters.update(
      (list) => [...list, newCharacter]
    )
    this.resetField()
  }

  resetField() {
    this.name.set('')
    this.power.set(0)
  }


  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  })
}
