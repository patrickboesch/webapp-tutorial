import {Component} from '@angular/core';
import {User} from './user';
import {UsersService} from './users.service';


@Component({
    selector: 'chat-messages',
    templateUrl: 'users.component.html',
    providers: [UsersService],
})
export class UsersComponent {
    private users: User[];

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        // add userService subscribtion here
    }
}
