import { TestBed } from '@angular/core/testing';

import { UserListAdapter } from './user-list.adapter';

describe('UserListAdapter', () => {
  let adapter: UserListAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    adapter = TestBed.inject(UserListAdapter);
  });

  it('should be created', () => {
    expect(adapter).toBeTruthy();
  });
});
