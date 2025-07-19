import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserListComponent } from './user-list.component';
import { UserListFacade } from './facades/user-list.facade';

describe('UserListComponent', () => {
  let component: UserListComponent;
  const userListFacadeStub = jasmine.createSpyObj('UserListFacade', ['initUserList']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserListComponent
      ],
      providers: [
        UserListComponent,
        { provide: UserListFacade, useValue: userListFacadeStub }
      ],
    }).compileComponents();

    component = TestBed.inject(UserListComponent)
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

});
