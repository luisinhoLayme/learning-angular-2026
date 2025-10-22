import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/dragonball';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {
  listName = input.required<string>()
  characters = input.required<Character[]>()
}
