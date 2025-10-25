import { Component } from '@angular/core';
import { GifsSideMenuHeader } from '../gifs-side-menu-header/gifs-side-menu-header';
import { SideMenuOptions } from '../side-menu-options/side-menu-options';

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {

}
