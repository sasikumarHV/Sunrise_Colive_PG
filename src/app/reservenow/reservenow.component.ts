import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-reservenow',
  templateUrl: './reservenow.component.html',
  styleUrls: ['./reservenow.component.css']
})
export class ReservenowComponent implements OnInit {

  reserveNowForm: FormGroup;
  public branches = ['Marathalli, Bangalore', 'Whitefeild, Bangalore', 'Electronic City, Bangalore', 'Hopefarm, Bangalore'];
  dataSource!: MatTableDataSource<any>;
  public genders =["Male","Female","Others"];
  public sharings =["Single Sharing","2 Sharing","3 Sharing"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<ReservenowComponent>
  ) {
    this.reserveNowForm = this.formBuilder.group({
      branch: ['', Validators.required],
      sharing: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      gender:["",Validators.required],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.getReserveList();
  }

 
  openReserveNowForm() {
    const dialogRef = this.matDialog.open(ReservenowComponent, {
      width: '360px',
    });
  }

  submitReserveNow() {
    if (this.reserveNowForm.valid) {
      this.apiService.postReserveNow(this.reserveNowForm.value).subscribe({
        next: (value: any) => {
          alert('Reservation Successful');
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

  getReserveList() {
    this.apiService.getReserveNow().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

