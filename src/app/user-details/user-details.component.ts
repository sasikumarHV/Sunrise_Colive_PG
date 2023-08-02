import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  public userID! : number;
  UserDetail!: User ;
  constructor(private activatedRoute : ActivatedRoute, private api : ApiService,private location : Location, ){
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.userID = val['id'];
      this.fetchUserDetails(this.userID);
    })
    
  }

  


  fetchUserDetails(userID: number) {
    console.log('Fetching user details for ID:', userID);
    this.api.getRegisteredUserId(userID)
      .subscribe(
        res => {
          this.UserDetail = res;
          console.log('User details:', this.UserDetail);
        },
        error => {
          console.log('Error fetching user details:', error);
        }
      );
  }
  goBack(): void {
    this.location.back();
  }
}    

