import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './layout/layout-with-score/game/game.component';
import {GameListComponent} from './layout/game-list/game-list.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';
import { LayoutWithScoreComponent } from './layout/layout-with-score/layout-with-score.component';

@NgModule({
  declarations: [
    GameComponent,
    GameListComponent,
    LayoutComponent,
    LayoutWithScoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GameModule { }
