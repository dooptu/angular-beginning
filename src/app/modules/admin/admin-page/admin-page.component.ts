import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

  menuOptionChoice: string = 'DASHBOARD'
  constructor(){}

  getMenuOptionChoice(choice: string){
    this.menuOptionChoice = choice;
  }
}
