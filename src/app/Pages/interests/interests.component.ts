import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  animations: [
    trigger('imgAnimation', [
      state('initial', style({
        top: '34.3%',
        right: '33.1%'
      })),
      state('final', style({
        top: '49.5%',
        right: '20.7%'
      })),
      transition('initial => final', animate('500ms')),
      transition('final => initial', animate('500ms'))
    ])
  ]
})
export class InterestsComponent implements OnInit {

  animationState: string = 'initial';
  displayModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimationState() {
    this.animationState = this.animationState === 'initial' ? 'final' : 'initial';
    setTimeout(() => {
      this.toggleModalDisplay();
    }, 1200);
  }

  toggleModalDisplay = () => this.displayModal = !this.displayModal;

}
