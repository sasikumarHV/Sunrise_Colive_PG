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
      firstName: new FormControl("",{ validators : [Validators.required,Validators.minLength(2),Validators.maxLength(30),Validators.pattern("[a-zA-Z].*")]}),
      lastName: new FormControl("",{ validators : [Validators.required ,Validators.minLength(1),Validators.maxLength(30),Validators.pattern("[a-zA-Z].*")]}),
      mobile: new FormControl("",{ validators : [Validators.required,Validators.pattern('[0-9].*'),Validators.minLength(10),Validators.maxLength(10)]}),
      email: new FormControl("",{ validators : [Validators.required,Validators.email]}),
      dateOfBirth: new FormControl("",{ validators : [Validators.required]}),
      age: new FormControl("",{ validators : [Validators.required,Validators.pattern('[0-9].*'),Validators.maxLength(3),Validators.min(1)]}),
      city: new FormControl("",{ validators : [Validators.required,Validators.pattern('[a-zA-Z].*'),Validators.minLength(3)]}),
      state: new FormControl("",{ validators : [Validators.required,Validators.pattern('[a-zA-Z].*'),Validators.minLength(3)]}),
      country: new FormControl("",{ validators : [Validators.required]}),
      pincode: new FormControl("",{ validators : [Validators.required,Validators.pattern('^[0-9]{6}$'),Validators.minLength(6),Validators.maxLength(6)]}),
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
      this.toastService.success({detail:"success",summary:"Submitted Successfully",duration:2000});
      this.registerForm.reset();
      this.registerForm.markAsUntouched();
      this.registerForm.markAsPristine();

      }) ;
  }
  update(){
    this.api.updateRegisterUser(this.registerForm.value, this.userIdToUpdate)
    .subscribe(res=>{
      this.toastService.success({detail:"success",summary:"Updated Successfully",duration:3000});
      this.router.navigate(['register']);
      //this.registerForm.reset();
  });
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

get DateOfBirth(): FormControl{
  return this.registerForm.get('dateOfBirth') as FormControl;
}

get Age(): FormControl{
  return this.registerForm.get('age') as FormControl;
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
