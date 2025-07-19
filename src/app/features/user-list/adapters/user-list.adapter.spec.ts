import { TestBed } from '@angular/core/testing';

import { UserListAdapter } from './user-list.adapter';
import { UserListAdaptedResponse, UserListResponse } from '../models/user-list.model';

describe('UserListAdapter', () => {
  let adapter: UserListAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        UserListAdapter
      ]
    });
    adapter = TestBed.inject(UserListAdapter);

  });

  it('should be created', () => {
    expect(adapter).toBeTruthy();
  });

  it('should call adaptUserList', () => {
    const mockUserListResponse: UserListResponse[] = [
      { id: 1, name: 'Joao', email: 'joao@email.com' },
      { id: 2, name: 'Maria', email: 'maria@email.com' },
    ];

    const mockUserListAdaptedResponse: UserListAdaptedResponse[] = [
      { code: 1, fullName: 'Joao', contact: 'joao@email.com' },
      { code: 2, fullName: 'Maria', contact: 'maria@email.com' },
    ];
    expect(adapter.adaptUserList(mockUserListResponse)).toEqual(mockUserListAdaptedResponse);

  });

});
