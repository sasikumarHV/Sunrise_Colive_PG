import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; // Remove DialogRef from here
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent {
  visitingForm: FormGroup; // Define the form group
  public timeSlots = ["9-12 AM", "12-3 PM", "3-6 PM", "6-9 PM"];
  public branches = ['Marathalli, Bangalore', 'Whitefeild, Bangalore', 'Electronic City, Bangalore', 'Hopefarm, Bangalore'];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    // Initialize the form group with form controls
    this.visitingForm = this.formBuilder.group({
      branch: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      visitingDate: ['', [Validators.required]],
      timeSlot: ['', [Validators.required]],
      message: ['']
    });
  }

  submitVisiting() {
    if (this.visitingForm.valid) {
      this.apiService.postVisiting(this.visitingForm.value).subscribe({
        next: (value: any) => {
          alert('Visit scheduled successfully');
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }
}




