import { TestBed } from '@angular/core/testing';

import { UserListStore } from './user-list.store';

describe('UserListStore', () => {
  let facade: UserListStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    facade = TestBed.inject(UserListStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
