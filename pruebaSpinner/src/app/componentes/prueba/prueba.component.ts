import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Pestaña de prueba")
  }

  ngOnInit(): void {
  }

}
