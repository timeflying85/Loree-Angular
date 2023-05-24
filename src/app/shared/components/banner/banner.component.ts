import { Component, ElementRef, OnInit } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private _myservice: MyServiceService) { }

  ngOnInit(): void {

  }

}

