import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { HeroPage } from './pages/hero/hero-page';
import { Dragonball } from './pages/dragonball/Dragonball';
import { DragonballSuper } from './pages/dragonball-super/DragonballSuper';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage
  },
  {
    path: 'hero',
    component: HeroPage
  },
  {
    path: 'dragonball',
    component: Dragonball
  },
  {
    path: 'dragonball-super',
    component: DragonballSuper
  },
  {
    path: '**',
    redirectTo: ''
  }
];
