
import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
})
export class RegistrationListComponent implements OnInit {
  public dataSource!: MatTableDataSource<User>;
  public users!: User[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    'id',
    'branch',
    'roomNo',
    'firstName',
    'lastName',
    'mobile',
    // 'email',
    'joiningDate',
    'leavingDate',
    // 'workplaceLocation',
    'city',
    'state',
    'country',
    'gender',
    'action',
  ];
  toastService: any;
  Users: User[] | undefined;
  constructor(
    private api: ApiService,
    private router: Router,
    private confirm: NgConfirmService,
    private toast: NgToastService,
    private renderer: Renderer2,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
   
  openUserDetails(){
    this.dialog.open(UserDetailsComponent)
  } 
  

  getUsers(): void {
    this.api.getRegisteredUser().subscribe((res: User[]) => {
      this.users = res;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  edit(id: number): void {
    this.router.navigate(['update', id]);
  }

  delete(id: number): void {
    this.confirm.showConfirm(
      'Are you sure you want to delete?',
      () => {
        this.api.deleteRegistered(id).subscribe(
          (res: any) => {
            this.toast.success({
              detail: 'SUCCESS',
              summary: 'Deleted Successfully',
              duration: 3000,
            });
            this.getUsers();
          },
          () => {}
        );
      },
      () => {}
    );
  }
}








