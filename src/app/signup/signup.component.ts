import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  public signupForm !: FormGroup;
  signUpData: any;
 
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router,private apiService :ApiService){ }
  
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9].*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')]
      ],
      isActiveUser:this.formBuilder.control(false)
    })
  }
  signUp(signUpData:void){
    if (this.signupForm.valid) {
      const signUpData = {
        name: this.signupForm.get('name')?.value,
        mobile: this.signupForm.get('mobile')?.value,
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value
      };

      // Call the API service to perform the sign-up
      this.apiService.signUp(signUpData).subscribe(
        (response: any) => {
       
          console.log('Sign-up successful:', response);
          this.signupForm.reset();
          this.router.navigate(['/login']);
        },
        (error: any) => {
          // Handle the error response
          console.error('Sign-up error:', error);
        }
      );
    }
  }
  url:string="./assets/img/loginpage.jpg" ;alt="First Image";

  }

