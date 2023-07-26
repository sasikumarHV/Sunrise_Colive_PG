import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service'; // Import the necessary ApiService

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbackForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private feedback: ApiService, // Inject the ApiService
    private dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitFeedback() {
    if (this.feedbackForm.valid) {
      this.feedback.postFeedback(this.feedbackForm.value).subscribe({
        next: (value: any) => {
          alert('Thank you for providing the feedback');
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }
}

