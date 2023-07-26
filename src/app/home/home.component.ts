import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  callRequestForm!: FormGroup;
  displayedColumns: string[] = ['branch', 'name', 'mobile', 'email', 'message'];
  public branches = ['Marathalli, Bangalore', 'Whitefeild, Bangalore', 'Electronic City, Bangalore', 'Hopefarm, Bangalore'];
  dataSource = new MatTableDataSource<any>();
  showFeedbackButton: boolean = true;
  feedbacks: any[] = []; // Array to store the feedbacks
  currentFeedbackIndex: number = 0; // Variable to store the current feedback index

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.callRequestForm = this.fb.group({
      branch: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    this.apiService.getFeedback().subscribe(
      (feedbacks: any) => {
        this.feedbacks = feedbacks;
        console.log('Fetched Feedbacks:', this.feedbacks);
        this.startRotatingFeedbacks();
      },
      (error: any) => {
        console.error('Error fetching feedbacks:', error);
      }
    );
  }

  submit() {
    if (this.callRequestForm.valid) {
      const requestData = {
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

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showFeedbackButton = scrollOffset < 10000; // Adjust the scrollOffset value as needed
  }

  openFeedbackForm() {
    const dialogRef = this.matDialog.open(FeedbackComponent, {
      width: '360px',
    });

    dialogRef.afterClosed().subscribe((feedbackData: any) => {
      if (feedbackData) {
        console.log('Feedback Data:', feedbackData);
        // You can now pass this feedback data to the ApiService to post it to the server.
        this.apiService.postFeedback(feedbackData).subscribe(
          (response: any) => {
            console.log('Feedback Submitted Successfully', response);
          },
          (error: any) => {
            console.error('Error while submitting feedback:', error);
          }
        );
      }
    });
  }
   // Function to get the current feedback based on the currentFeedbackIndex
   getCurrentFeedback(): any {
    return this.feedbacks[this.currentFeedbackIndex];
  }

  // Function to change the current feedback index every 3 seconds
  startRotatingFeedbacks(): void {
    setInterval(() => {
      this.currentFeedbackIndex = (this.currentFeedbackIndex + 1) % this.feedbacks.length;
    }, 3000);
  }
  
}





  
  
  
  
  
