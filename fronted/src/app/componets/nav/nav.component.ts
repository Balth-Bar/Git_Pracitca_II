import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/crud/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() titulo: string;

  public username: string;

  constructor(
    private userService: UserService
  ) {
    this.userService.currentUser.subscribe((user: User) => {
      this.username = user.username;
    });
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();

  }

}
