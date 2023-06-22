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
  public genders=["Male","Female","Others"];
  public roomNos=["101","102","103","104","105","201","202","203","204","205","301","302","303","304","305","401","402","403","404","405"]

  public registerForm!: FormGroup
  private userIdToUpdate!: number;
  public isUpdateActive: boolean = false;
  confirm: any;
  toast: any;

  constructor(private fb : FormBuilder ,
    private api:ApiService,
    private toastService: NgToastService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router){
  }
  ngOnInit(): void{
    this.registerForm=this.fb.group({
      firstName: new FormControl("",{ validators : [Validators.required,Validators.minLength(2),Validators.maxLength(30),Validators.pattern("[a-zA-Z].*")]}),
      lastName: new FormControl("",{ validators : [Validators.required ,Validators.minLength(1),Validators.maxLength(30),Validators.pattern("[a-zA-Z].*")]}),
      mobile: new FormControl("",{ validators : [Validators.required,Validators.pattern('[0-9].*'),Validators.minLength(10),Validators.maxLength(10)]}),
      email: new FormControl("",{ validators : [Validators.required,Validators.email]}),
      joiningDate: new FormControl("",{ validators : [Validators.required]}),
      leavingDate: new FormControl("",{ validators : [Validators.required]}),
      workplaceLocation:new FormControl("",{ validators:[Validators.required]}),
      roomNo: new FormControl("",{ validators : [Validators.required]}),
      //age: new FormControl("",{ validators : [Validators.required,Validators.pattern('[0-9].*'),Validators.maxLength(3),Validators.min(1)]}),
      city: new FormControl("",{ validators : [Validators.required,Validators.pattern('[a-zA-Z].*'),Validators.minLength(3)]}),
      state: new FormControl("",{ validators : [Validators.required,Validators.pattern('[a-zA-Z].*'),Validators.minLength(3)]}),
      country: new FormControl("",{ validators : [Validators.required]}),
      pincode: new FormControl("",{ validators : [Validators.required,Validators.pattern('^[0-9]{6}$'),Validators.minLength(6),Validators.maxLength(6)]}),
      gender: new FormControl("",{ validators : [Validators.required]}),

    });

    this.activatedRoute.params.subscribe((val: { [x: string]: number; })=>{
      this.userIdToUpdate = val['id'];
        this.api.getRegisteredUserId(this.userIdToUpdate)
          .subscribe((res: User) =>{
            this.isUpdateActive = true;
            this.fillFormToUpdate(res);
          })     
    })
  }
  fillFormToUpdate(user: User) {
    this.registerForm.patchValue({
      firstName:user.firstName,
      lastName:user.lastName,
      mobile:user.mobile,
      email:user.email,
      joiningDate : user.joiningDate,
      leavingDate : user.leavingDate,
      workplaceLocation:user.workplaceLocation,
      roomNo : user.roomNo,
      city:user.city,
      state:user.state,
      pincode:user.pincode,
      country:user.country,
      gender:user.gender,
    }) ;
  }

  submit(){
    this.api.postRegistration(this.registerForm.value).subscribe((res: any)=>{
      this.toastService.success({detail:"Success",summary:"Submitted Successfully",duration:1000});
      this.registerForm.reset();
      this.router.navigate(['list']);
      this.registerForm.markAsUntouched();
      this.registerForm.markAsPristine();
      }) ;
  }
 
  update(){
    this.api.updateRegisterUser(this.registerForm.value, this.userIdToUpdate)
    .subscribe((res: any)=>{
      this.toastService.success({detail:"success",summary:"Updated Successfully",duration:1000});
      this.router.navigate(['list']);
      this.registerForm.reset();
    });
  }

  cancel(){
    this.registerForm.reset();
  }
  registerSubmitted(){
    console.log(this.registerForm.get('firstName'))
  }

get FirstName(): FormControl{
  return this.registerForm.get('firstName') as FormControl;
}
get LastName(): FormControl{
  return this.registerForm.get('lastName') as FormControl;
}

get Mobile(): FormControl{
  return this.registerForm.get('mobile') as FormControl;
}

get Email(): FormControl{
  return this.registerForm.get('email') as FormControl;
}

get JoiningDate(): FormControl{
  return this.registerForm.get('joiningDate') as FormControl;
}

get LeavingDate(): FormControl{
  return this.registerForm.get('leavingDate') as FormControl;
}

get WorkPlaceLocation(): FormControl{
  return this.registerForm.get('workplaceLocation') as FormControl;
}
get RoomNo(): FormControl{
  return this.registerForm.get('roomNo') as FormControl;
}
get City(): FormControl{
  return this.registerForm.get('city') as FormControl;
}

get State(): FormControl{
  return this.registerForm.get('state') as FormControl;
}

get Country(): FormControl{
  return this.registerForm.get('country') as FormControl;
}

get Pincode(): FormControl{
  return this.registerForm.get('pincode') as FormControl;
}

get Gender(): FormControl{
  return this.registerForm.get('gender') as FormControl;
}


}
