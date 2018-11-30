import { Component, OnInit } from '@angular/core';
import {InitializingService} from '../../_services/data/local-storage/initializing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private initService: InitializingService
  ) { }

  ngOnInit() {
    this.initService.initAppData().subscribe(
      resp => console.log(resp)
    );
  }

}
