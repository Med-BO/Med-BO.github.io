import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  play(mp3_file: string) {
    var audio = new Audio(mp3_file);
    audio.play();
  }
}
