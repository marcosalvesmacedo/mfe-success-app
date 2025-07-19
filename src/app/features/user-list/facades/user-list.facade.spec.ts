import { TestBed } from '@angular/core/testing';
import { UserListFacade } from './user-list.facade';
import { UserListService } from '../services/user-list.service';
import { UserListStore } from '../stores/user-list.store';
import { UserListAdaptedResponse } from '../models/user-list.model';
import { of } from 'rxjs';

describe('UserListFacade', () => {
  let facade: UserListFacade;
  let userListServiceMock: jasmine.SpyObj<UserListService>;
  let userListStoreMock: jasmine.SpyObj<UserListStore>;

  const userListServiceStub = jasmine.createSpyObj('UserListService', ['getUserList']);
  const UserListStoreStub = jasmine.createSpyObj('UserListStore', ['setUserList']);

  const mockUserList: UserListAdaptedResponse[] = [
    { code: 1, fullName: 'Joao', contact: 'joao@email.com' },
    { code: 2, fullName: 'Maria', contact: 'maria@email.com' },
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        UserListFacade,
        { provide: UserListService, useValue: userListServiceStub },
        { provide: UserListStore, useValue: UserListStoreStub }
      ]
    });

    userListServiceMock = TestBed.inject(UserListService) as jasmine.SpyObj<UserListService>;
    userListStoreMock = TestBed.inject(UserListStore) as jasmine.SpyObj<UserListStore>;
    userListServiceMock.getUserList.and.returnValue(of(mockUserList));

    facade = TestBed.inject(UserListFacade);

  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

});
