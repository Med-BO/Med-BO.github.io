import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playGuitar() {
    window.alert("Den den den ♩ ♪ ♫ ♬ - You didn't really think I was gonna code a guitar now did ya ?");
  }

}
