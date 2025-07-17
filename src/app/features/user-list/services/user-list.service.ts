import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserListAdapter } from '../adapters/user-list.adapter';
import { USERLIST_URLS } from '../constants/commons.constants';
import { UserListAdaptedResponse, UserListResponse } from '../models/user-list.model';

@Injectable()
export class UserListService {

  constructor(
    private http: HttpClient,
    private userListAdapter: UserListAdapter
  ) { }

  public getUserList(): Observable<Array<UserListAdaptedResponse>> {
    return this.http.get(USERLIST_URLS.LIST_USER)
    .pipe(
      map((response) => {
        return this.userListAdapter.adaptUserList(response as Array<UserListResponse>);
      })
    );
  }

}
