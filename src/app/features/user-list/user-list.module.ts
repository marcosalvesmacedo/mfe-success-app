import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { UserListFacade } from './facades/user-list.facade';
import { UserListAdapter } from './adapters/user-list.adapter';
import { UserListService } from './services/user-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserListStore } from './stores/user-list.store';

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    UserListRoutingModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    UserListFacade,
    UserListAdapter,
    UserListService,
    UserListStore
  ],
  bootstrap: [UserListComponent]
})
export class UserListModule { }
