import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/dragonball';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters')

  return characters ? JSON.parse(characters) : []
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorege = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(newCharacter: Character) {
    this.characters.update(list => [...list, newCharacter])
  }
}
