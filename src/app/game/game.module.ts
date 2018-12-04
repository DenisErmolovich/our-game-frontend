import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './layout/game/game.component';
import {GameListComponent} from './layout/game-list/game-list.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    GameComponent,
    GameListComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GameModule { }
