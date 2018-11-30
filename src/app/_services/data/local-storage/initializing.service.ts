import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '../../../_models/game';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitializingService {

  constructor(
    private http: HttpClient
  ) { }

  public initAppData(): Observable<Game> {
    return this.http.get<Game>('assets/temp/initGame.json');
  }
}
