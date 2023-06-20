import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  pickedSkill: string = "none";

  constructor() { }

  ngOnInit(): void {
  }

  pickSkill(skill: string): void {
    this.pickedSkill = skill;
  }
}
