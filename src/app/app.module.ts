import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../environments/environment';
import { MaterialModule } from '../material/material.module';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { DialogComponent } from './dialog/dialog.component';
import { FanAdvancedComponent } from './fan-setting/fan-advanced/fan-advanced.component';
import { FanBasicComponent } from './fan-setting/fan-basic/fan-basic.component';
import { FanContainerComponent } from './fan-setting/fan-container/fan-container.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LearningElementComponent } from './learning-element/learning-element.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ZoneSelectComponent } from './controlpanel/zone-select/zone-select.component';
import { QrComponent } from './controlpanel/qr/qr.component';

import { SignupComponent } from './signup/signup.component';
import { QrResultComponent } from './controlpanel/qr/qr-result/qr-result.component';
import { FanSettingComponent } from './fan-setting/fan-setting.component';
import { SeatFilterPipe } from './_pipes/seat-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    NavComponent,
    ControlpanelComponent,
    FanContainerComponent,
    FanBasicComponent,
    FanAdvancedComponent,
    HomeComponent,
    PageNotFoundComponent,
    LearningElementComponent,
    ZoneSelectComponent,
    QrComponent,
    DialogComponent,
    LoginComponent,
    SignupComponent,
    MyProfileComponent,
    QrResultComponent,
    FanSettingComponent,
    SeatFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FontAwesomeModule,
    MaterialModule,
    HttpClientModule,
    ZXingScannerModule,
    FormsModule,
    // AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
