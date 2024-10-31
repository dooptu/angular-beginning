import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrl: './nav-bar-menu.component.scss'
})
export class NavBarMenuComponent {

  @Output() menuOptionChoiceProps = new EventEmitter<string>();
  isCollapsed = false;
  menuOptionClick: string = 'MANAGE_USER'

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  setMenuOptionChoice(choice: string){
    this.menuOptionClick = choice;
    this.menuOptionChoiceProps.emit(choice);
  }
}
