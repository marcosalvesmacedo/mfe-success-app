import { Injectable } from "@angular/core";
import { UserListAdaptedResponse, UserListResponse } from "../models/user-list.model";

@Injectable()
export class UserListAdapter {

    public adaptUserList(userList: Array<UserListResponse>): Array<UserListAdaptedResponse> {

        return userList.map((user) => {
            return {
                code: user.id,
                fullName: user.name,
                contact: user.email
            } as UserListAdaptedResponse;
        });
        
    }

}
