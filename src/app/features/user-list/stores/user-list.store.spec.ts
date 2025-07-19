import { TestBed } from '@angular/core/testing';

import { UserListStore } from './user-list.store';
import { UserListAdaptedResponse } from '../models/user-list.model';
import { of } from 'rxjs';

describe('UserListStore', () => {
  let facade: UserListStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [],
          providers: [
            UserListStore
          ]
        });
    
    facade = TestBed.inject(UserListStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should call setUserList', () => {
    const mockUserList: UserListAdaptedResponse[] = [
      { code: 1, fullName: 'Joao', contact: 'joao@email.com' },
      { code: 1, fullName: 'Maria', contact: 'maria@email.com' },
    ];
    facade.setUserList(mockUserList);

    facade['userList'].asObservable().subscribe((userList) => {
      expect(userList).toEqual(mockUserList);
    });

  });

  it('should call getUserList', () => {
    const mockUserList: UserListAdaptedResponse[] = [
      { code: 1, fullName: 'Joao', contact: 'joao@email.com' },
      { code: 1, fullName: 'Maria', contact: 'maria@email.com' },
    ];
    facade.setUserList(mockUserList);

    expect(facade.getUserList()).toEqual(mockUserList);

  });

  it('should call getUserListAsObservable', () => {
    const mockUserList: UserListAdaptedResponse[] = [
      { code: 1, fullName: 'Joao', contact: 'joao@email.com' },
      { code: 1, fullName: 'Maria', contact: 'maria@email.com' },
    ];
    facade.setUserList(mockUserList);

    facade.getUserListAsObservable().subscribe((userList) => {
      expect(userList).toEqual(mockUserList);
    });

  });

});
