import { TestBed } from '@angular/core/testing';
import { UserListService } from './user-list.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserListAdapter } from '../adapters/user-list.adapter';
import { USERLIST_URLS } from '../constants/commons.constants';
import { UserListResponse, UserListAdaptedResponse } from '../models/user-list.model';

describe('UserListService', () => {
  let service: UserListService;
  let httpMock: HttpTestingController;
  let userListAdapterMock: jasmine.SpyObj<UserListAdapter>;
  const userListAdapterStub = jasmine.createSpyObj('UserListAdapter', ['adaptUserList']);

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserListService,
        { provide: UserListAdapter, useValue: userListAdapterStub }
      ]
    });

    service = TestBed.inject(UserListService);
    httpMock = TestBed.inject(HttpTestingController);
    userListAdapterMock = TestBed.inject(UserListAdapter) as jasmine.SpyObj<UserListAdapter>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUserList', () => {
    const userListResponseMock: UserListResponse[] = [
      { id: 1, name: 'Joao', email: 'joao@email.com' }
    ];

    const userListAdaptedResponseMock: UserListAdaptedResponse[] = [
      { code: 1, fullName: 'John Doe', contact: 'john@example.com' }
    ];

    userListAdapterMock.adaptUserList.and.returnValue(userListAdaptedResponseMock);

    service.getUserList().subscribe(result => {
      expect(result).toEqual(userListAdaptedResponseMock);
      expect(userListAdapterMock.adaptUserList).toHaveBeenCalledWith(userListResponseMock);
    });

    const req = httpMock.expectOne(USERLIST_URLS.LIST_USER);
    expect(req.request.method).toBe('GET');
    req.flush(userListResponseMock);

  });

  it('should call deleteUser', () => {
    const mockUserId = 1;
    service.deleteUser(mockUserId).subscribe(result => {
      expect(result).toEqual({});
    });

    const req = httpMock.expectOne(`${USERLIST_URLS.DELETE_USER}${mockUserId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});

  });

});
