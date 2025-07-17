import { TestBed } from '@angular/core/testing';

import { UserListFacade } from './user-list.facade';

describe('UserListFacade', () => {
  let facade: UserListFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    facade = TestBed.inject(UserListFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});
