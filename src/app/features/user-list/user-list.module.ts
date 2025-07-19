import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { UserListAdapter } from './adapters/user-list.adapter';
import { UserListFacade } from './facades/user-list.facade';
import { UserListService } from './services/user-list.service';
import { UserListStore } from './stores/user-list.store';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserListRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
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
