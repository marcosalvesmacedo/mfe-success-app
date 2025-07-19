import { Component } from '@angular/core';
import { USER_LIST_MESSAGES } from './constants/commons.constants';
import { UserListFacade } from './facades/user-list.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public labels = USER_LIST_MESSAGES

  constructor(
    public userListFacade: UserListFacade
  ) {}

  public ngOnInit(): void {
     this.userListFacade.initUserList();
  }

}
