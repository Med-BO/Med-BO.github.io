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

  downloadResume() {
    const pdfUrl = 'assets/Resume_Mohamed_Ben_Othman.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume-mohamed-ben-othman.pdf';
    link.click();
  }
}
