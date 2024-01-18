import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ForgotPwdComponent} from './Components/forgot-pwd/forgot-pwd.component';
import {ResetPwdComponent} from './Components/reset-pwd/reset-pwd.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import {MatCardModule} from '@angular/material/card';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { IconsComponent } from './Components/icons/icons.component';
import {MatMenuModule} from '@angular/material/menu';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArchivedNotesComponent } from './Components/archived-notes/archived-notes.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPwdComponent,
    ResetPwdComponent,
    DashboardComponent,
    CreateNotesComponent,
    DisplayNotesComponent,
    GetNotesComponent,
    UpdateNoteComponent,
    IconsComponent,
    TrashNotesComponent,
    ArchivedNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
