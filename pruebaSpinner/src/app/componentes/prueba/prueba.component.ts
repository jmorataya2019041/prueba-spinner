import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  showContent: boolean = false;

  constructor(private titleService: Title, private spinnerService: NgxSpinnerService) {
    this.titleService.setTitle("Pestaña de prueba")
  }

  ngOnInit(): void {
    this.spinner();
    console.log("Si funciono");
  }

  spinner(){
    this.spinnerService.show('main')
    setTimeout(() => {this.showContent = true; this.spinnerService.hide('main')}, 2000)
  }

}
