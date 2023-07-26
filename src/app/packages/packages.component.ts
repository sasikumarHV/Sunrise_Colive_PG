import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservenowComponent } from '../reservenow/reservenow.component';
import { VisitComponent } from '../visit/visit.component';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  showReserveNowButton: boolean = true;
  showScheduleVisitButton: boolean = true;
 
  constructor(
    private matDialog: MatDialog
  ) {}


  openReserveNowForm() {
    const dialogRef = this.matDialog.open(ReservenowComponent, {
      width: '360px',
    });
  }

  
  openScheduleVisitForm() {
    const dialogRef = this.matDialog.open(VisitComponent, {
      width: '360px',
    });
  }
}

