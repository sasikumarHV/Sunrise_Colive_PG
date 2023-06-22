
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'app-callrequest',
//   templateUrl: './callrequest.component.html',
//   styleUrls: ['./callrequest.component.css']
// })
// export class CallrequestComponent implements OnInit {
//   apiService: any;
//   ngOnInit(): void {
//     callRequest(callRequestData:void){
//       if (this.callRequestForm.valid) {
//         const signUpData = {
//           branch : this.callRequestForm.get('branch')?.value,
//           name: this.callRequestForm.get('name')?.value,
//           mobile: this.callRequestForm.get('mobile')?.value,
//           email: this.signupForm.get('email')?.value,
//           message: this.signupForm.get('message')?.value
//         };
  
//         // Call the API service to perform the sign-up
//         this.apiService.signUp(signUpData).subscribe(
//           (response: any) => {
         
//             console.log('Sign-up successful:', response);
//             this.signupForm.reset();
//             this.router.navigate(['/login']);
//           },
//           (error: any) => {
//             // Handle the error response
//             console.error('Sign-up error:', error);
//           }
//         );
//       }
//     }
//   }

//   displayedColumns: string[] = ['branch', 'name', 'mobile', 'email', 'message'];
//   dataSource = new MatTableDataSource();
//   callRequestForm!: FormGroup;

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }
//   get branch(): FormControl {
//     return this.callRequestForm.get('branch') as FormControl;
//   }

//   get name(): FormControl {
//     return this.callRequestForm.get('name') as FormControl;
//   }

//   get mobile(): FormControl {
//     return this.callRequestForm.get('mobile') as FormControl;
//   }

//   get email(): FormControl {
//     return this.callRequestForm.get('email') as FormControl;
//   }

//   get message(): FormControl {
//     return this.callRequestForm.get('message') as FormControl;
//   }
// }




import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../services/api.service';
import { callRequests } from '../models/requests.model';

@Component({
  selector: 'app-callrequest',
  templateUrl: './callrequest.component.html',
  styleUrls: ['./callrequest.component.css']
})
export class CallrequestComponent implements OnInit {
  displayedColumns: string[] = ['id', 'branch', 'name', 'mobile', 'email', 'message'];
  dataSource = new MatTableDataSource<callRequests>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public requests: callRequests[] | undefined ;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCallRequestUsers();
    
  }

  getCallRequestUsers(): void {
    this.apiService.getCallRequestUser().subscribe(
      (res: callRequests[]) => {
        this.requests = res;
        this.dataSource.data = this.requests;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        console.error('Failed to fetch call requests:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




