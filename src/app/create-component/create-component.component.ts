import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../services/api.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  public countries=["USA","UK","Australia","Japan","India","China","Rusia"];
  public genders=["Male","Female"];

  public registerForm!: FormGroup
  private userIdToUpdate!: number;
  public isUpdateActive: boolean = false;

  constructor(private fb : FormBuilder ,
    private api:ApiService,
    private toastService: NgToastService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router){
  }
  ngOnInit(): void{
    this.registerForm=this.fb.group({
      firstName: new FormControl("",{ validators : [Validators.required]}),
      lastName: new FormControl("",{ validators : [Validators.required]}),
      mobile: new FormControl("",{ validators : [Validators.required]}),
      email: new FormControl("",{ validators : [Validators.required]}),
      dateOfBirth: new FormControl("",{ validators : [Validators.required]}),
      age: new FormControl("",{ validators : [Validators.required]}),
      city: new FormControl("",{ validators : [Validators.required]}),
      state: new FormControl("",{ validators : [Validators.required]}),
      country: new FormControl("",{ validators : [Validators.required]}),
      pincode: new FormControl("",{ validators : [Validators.required]}),
      gender: new FormControl("",{ validators : [Validators.required]}),

    });

    this.activatedRoute.params.subscribe(val=>{
      this.userIdToUpdate = val['id'];
      if (this.userIdToUpdate){
        this.isUpdateActive=true;
        this.api.getRegisteredUserId(this.userIdToUpdate)
          .subscribe({
            next : (res)=>{
            this.fillFormToUpdate(res);
            
          },
          error: (err:any) => {
            console.log(err);
          }
         } )
        } 
    })
  }
  fillFormToUpdate(user: User) {
    this.registerForm.setValue({
      firstName:user.firstName,
      lastName:user.lastName,
      mobile:user.mobile,
      email:user.email,
      age:user.age,
      city:user.city,
      state:user.state,
      pincode:user.pincode,
      country:user.country,
      gender:user.gender,
    }) ;
  }

  submit(){
    this.api.postRegistration(this.registerForm.value).subscribe(res=>{
      this.toastService.success({detail:"success",summary:"Submitted Successfully",duration:3000});
      this.registerForm.reset();

      }) ;
  }
  update(){
    this.api.updateRegisterUser(this.registerForm.value, this.userIdToUpdate)
    .subscribe(res=>{
      this.toastService.success({detail:"success",summary:"Updated Successfully",duration:3000});
      this.router.navigate(['register']);
      this.registerForm.reset();
  });
}

}
