import { Component } from '@angular/core';
import { UserListFacade } from './facades/user-list.facade';
import { USER_LIST_MESSAGES } from './constants/commons.constants';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public labels = USER_LIST_MESSAGES

  constructor(
    public userListFacade: UserListFacade
  ) {
    this.userListFacade.initUserList();
  }
}
