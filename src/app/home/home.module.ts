import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {GameListComponent} from './game-list/game-list.component';

@NgModule({
  declarations: [HomeComponent, GameListComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
