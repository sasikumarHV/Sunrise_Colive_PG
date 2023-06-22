import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule } from '@angular/material/form-field';
import {CreateComponentComponent } from './create-component/create-component.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupComponent } from './signup/signup.component';
import { AgePipe } from './age.pipe';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AmenitiesComponent } from './aminities/amenities.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PackagesComponent } from './packages/packages.component';
import { ChunkPipe } from './chunk.pipe';
import { CallrequestComponent } from './callrequest/callrequest.component';


@NgModule({
  declarations: [
    CreateComponentComponent,
    AppComponent,
    RegistrationListComponent,
    UserDetailsComponent,
    LoginComponent,
    SignupComponent,
    AgePipe,
    HomeComponent,
    ContactusComponent,
    GalleryComponent,
    AmenitiesComponent,
    AboutusComponent,
    PackagesComponent,
    ChunkPipe,
    CallrequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgToastModule,
    NgConfirmModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    FlexLayoutModule,
    CommonModule,
    MatMenuModule,
  
  ],
  providers: [AgePipe, CurrencyPipe,ChunkPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
