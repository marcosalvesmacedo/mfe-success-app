import { TestBed } from '@angular/core/testing';
import { UserListFacade } from './user-list.facade';
import { UserListService } from '../services/user-list.service';
import { UserListStore } from '../stores/user-list.store';
import { UserListAdaptedResponse } from '../models/user-list.model';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('UserListFacade', () => {
  let facade: UserListFacade;
  let userListServiceMock: jasmine.SpyObj<UserListService>;
  let userListStoreMock: jasmine.SpyObj<UserListStore>;

  const userListServiceStub = jasmine.createSpyObj('UserListService', ['getUserList', 'deleteUser']);
  const UserListStoreStub = jasmine.createSpyObj('UserListStore', ['setUserList', 'getUserList']);
  const matSnakBarStub = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);

  const mockUserList: UserListAdaptedResponse[] = [
    { code: 1, fullName: 'Joao', contact: 'joao@email.com' },
    { code: 2, fullName: 'Maria', contact: 'maria@email.com' },
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        UserListFacade,
        { provide: UserListService, useValue: userListServiceStub },
        { provide: UserListStore, useValue: UserListStoreStub },
        { provide: MatSnackBar, useValue: matSnakBarStub }
      ]
    });

    userListServiceMock = TestBed.inject(UserListService) as jasmine.SpyObj<UserListService>;
    userListStoreMock = TestBed.inject(UserListStore) as jasmine.SpyObj<UserListStore>;
    userListServiceMock.getUserList.and.returnValue(of(mockUserList));
    userListServiceMock.deleteUser.and.returnValue(of({}));
    userListStoreMock.getUserList.and.returnValue(mockUserList);

    facade = TestBed.inject(UserListFacade);

  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be call deleteUser', () => {
    facade.deleteUser(1);
  });

});
