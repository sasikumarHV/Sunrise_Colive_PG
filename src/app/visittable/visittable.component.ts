import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-visittable',
  templateUrl: './visittable.component.html',
  styleUrls: ['./visittable.component.css']
})
export class VisittableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'branch', 'firstName', 'lastName', 'mobile', 'email', 'visitingDate', 'timeSlot', 'message'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getVisitList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getVisitList() {
    this.apiService.getVisiting().subscribe({
      next: (res) => {
        if (res && Array.isArray(res)) {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } 
      },
      error: (err) => {
        console.error(err);
        
      }
    });
  }
}





  
