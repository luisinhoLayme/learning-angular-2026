import { Component, input, model, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/dragonball';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  // standalone: true,
  styleUrl: './character-add.css'
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  // characters = model.required<Character[]>()

  newCharacter = output<Character>()

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: crypto.randomUUID(),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter)
    // this.characters.update((list) => [...list, newCharacter]);
    this.resetField();
  }

  resetField() {
    this.name.set('');
    this.power.set(0);
  }
}
