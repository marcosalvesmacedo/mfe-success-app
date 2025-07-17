import { Injectable } from '@angular/core';
import { UserListAdaptedResponse } from '../models/user-list.model';
import { UserListService } from '../services/user-list.service';
import { UserListStore } from '../stores/user-list.store';

@Injectable()
export class UserListFacade {

  public displayedColumns: string[] = ['code', 'fullName', 'contact'];
  public dataSource: Array<UserListAdaptedResponse> = new Array<UserListAdaptedResponse>();

  constructor(
    private userListService: UserListService,
    private userListStore: UserListStore
  ) {
    this.initUserList();
  }

  public initUserList(): void {

    this.userListService.getUserList()
        .subscribe((usersList: Array<UserListAdaptedResponse>) => {
          this.userListStore.setUserList(usersList);
          this.dataSource = usersList;
      });

  }

}
