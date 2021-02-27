import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login: string = '';
  passwd: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.login != "" && this.passwd != "") {
      this.userService.getTokenAccess(this.login, this.passwd);

    }


  }
}
