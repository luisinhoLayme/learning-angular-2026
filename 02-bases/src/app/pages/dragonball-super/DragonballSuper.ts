import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
  // standalone: true,
  imports: [CharacterList, CharacterAdd]
})
export class DragonballSuper {

  public dragonballService = inject(DragonballService)

}
