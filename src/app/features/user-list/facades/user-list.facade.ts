import { Injectable } from '@angular/core';
import { UserListAdaptedResponse } from '../models/user-list.model';
import { UserListService } from '../services/user-list.service';
import { UserListStore } from '../stores/user-list.store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakbarComponent } from 'src/app/core/components/snakbar/snakbar.component';
import { USER_LIST_MESSAGES } from '../constants/commons.constants';

@Injectable()
export class UserListFacade {

  public messages = USER_LIST_MESSAGES
  public displayedColumns: string[] = ['code', 'fullName', 'contact', 'actions'];
  public dataSource: Array<UserListAdaptedResponse> = new Array<UserListAdaptedResponse>();

  constructor(
    private userListService: UserListService,
    private userListStore: UserListStore,
    private matSnackBar: MatSnackBar
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

  public deleteUser(id: number): void {
    this.userListService.deleteUser(id)
        .subscribe(() => {
          const userListStore =  this.userListStore.getUserList();
          const newUserList = userListStore.filter(user => user.code !== id);
           this.userListStore.setUserList(newUserList);
           this.dataSource = newUserList;
           this.snakbarDeleteOpen();
    })
  }

  private snakbarDeleteOpen(): void {
    this.matSnackBar.openFromComponent(SnakbarComponent, {
        data: {
            message: this.messages.SNAKBAR_MESSAGE_DELETE
        },
        duration: 3000,
    });
  }
}
