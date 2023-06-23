import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  callRequestForm!: FormGroup;
  displayedColumns: string[] = ['branch', 'name', 'mobile', 'email', 'message'];
  public branches = ['Marathalli, Bangalore', 'Whitefeild, Bangalore', 'Electronic City, Bangalore','Hopefarm, Bangalore'] ;
  dataSource = new MatTableDataSource<any>();

  constructor(
    private apiService: ApiService,
    private toastService: NgToastService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.callRequestForm = this.fb.group({
      branch: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
 

  submit() {
    if (this.callRequestForm.valid) {
      const requestData = {
        id:this.callRequestForm.get('id')?.value,
        branch: this.callRequestForm.get('branch')?.value,
        name: this.callRequestForm.get('name')?.value,
        mobile: this.callRequestForm.get('mobile')?.value,
        email: this.callRequestForm.get('email')?.value,
        message: this.callRequestForm.get('message')?.value
      };

      // Call the API service to perform the call request
      this.apiService.callRequests(requestData).subscribe(
        (response: any) => {
          console.log('Call Request Successful', response);

          // Update the table data source with the response
          this.dataSource.data.push(response);
          this.dataSource._updateChangeSubscription();

          // Reset the form
          this.callRequestForm.reset();
        },
        (error: any) => {
          console.error('Call Request Error:', error);
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




  
  
  
  
  
