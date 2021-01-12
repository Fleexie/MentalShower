import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material/material.module';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { ControlpanelComponent, QrScannerDialogComponent } from './_modules/check-in/controlpanel.component';
import { DialogComponent } from './_components/dialog/dialog.component';
// import {ColdDialogComponent, FanBasicComponent} from './fan-setting/fan-basic/fan-basic.component';

import { HeaderComponent } from './_components/header/header.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
// import { LoginComponent } from './profile/login/login.component';
// import { MyProfileComponent } from './profile/my-profile/my-profile.component';
import { NavComponent } from './_components/nav/nav.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { SignupComponent } from './_modules/profile/signup/signup.component';
import {CheckInModule} from './_modules/check-in/check-in.module';
import {LearningModule} from './_modules/learning/learning.module';
import {ProfileModule} from './_modules/profile/profile.module';
import {FanBasicComponent} from './fan-setting/fan-basic/fan-basic.component';
// import { ZXingScannerModule } from '@zxing/ngx-scanner';
// import { ZoneSelectComponent } from './check-in/zone-select/zone-select.component';
// import { QrComponent } from './check-in/qr/qr.component';
// import { QrResultComponent } from './check-in/qr/qr-result/qr-result.component';
// import { SeatFilterPipe } from './_pipes/seat-filter.pipe';
// import { NewlearningelementsComponent } from './learning/newlearningelements/newlearningelements.component';
// import { QuizComponent } from './learning/quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    DialogComponent,
    InfoComponent,
    FanBasicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FontAwesomeModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    CheckInModule,
    LearningModule,
    ProfileModule
  ],

  providers: [],
  // entryComponents: [
  //   ColdDialogComponent,
  //   QrScannerDialogComponent
  // ],
  bootstrap: [AppComponent],
})
export class AppModule { }
