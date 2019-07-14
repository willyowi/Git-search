import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
import { Users } from "../users";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [ProfileService]
})
export class DisplayComponent implements OnInit {

  public users: {};
  public username: string;

  constructor(private profileService: ProfileService) {
    
  }

  getProfile() {
    this.profileService.GetUserName(this.username);
    this.users = this.profileService.getUsers();
  }



  ngOnInit() {
    
  }
};
