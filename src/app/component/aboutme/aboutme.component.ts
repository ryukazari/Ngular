import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public title: String;
  public subtitle:String;
  public web: String;

  constructor() {
    this.title="Ryukazari";
    this.subtitle="♦ I'm god ♦";
    this.web="https://ryukazari.github.io/Portafolio/";
   }

  ngOnInit() {
  }

}
