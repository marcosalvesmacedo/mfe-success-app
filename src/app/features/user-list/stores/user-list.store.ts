import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserListAdaptedResponse } from '../models/user-list.model';

@Injectable()
export class UserListStore {

  private userList = new BehaviorSubject<Array<UserListAdaptedResponse>>([] as Array<UserListAdaptedResponse>);

  public setUserList(userList: Array<UserListAdaptedResponse>): void {
    this.userList.next(userList);
  }

  public getUserList(): Array<UserListAdaptedResponse> {
    return this.userList.getValue();
  }

  public getUserListAsObservable(): Observable<Array<UserListAdaptedResponse>> {
    return this.userList.asObservable();
  }

}
