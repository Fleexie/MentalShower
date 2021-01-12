import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ControlpanelComponent } from './_modules/check-in/controlpanel.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { FanBasicComponent } from './fan-setting/fan-basic/fan-basic.component';
import { LoginComponent } from './_modules/profile/login/login.component';
import { SignupComponent } from './_modules/profile/signup/signup.component';
import { MyProfileComponent } from './_modules/profile/my-profile/my-profile.component';
import { NewlearningelementsComponent } from './_modules/learning/newlearningelements/newlearningelements.component';
import { InfoComponent } from './info/info.component';
import { QuizComponent } from './_modules/learning/quiz/quiz.component';

export const routing = RouterModule.forRoot([
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'cp', component: ControlpanelComponent },
  // TODO This needs to be changed
  { path: 'cp/fanSetting', component: FanBasicComponent},
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'login/:invalidLoginMessage', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/:invalidLoginMessage', component: SignupComponent },
  { path: 'learningelement', component: NewlearningelementsComponent },
  { path: 'learningelement/info', component: InfoComponent },
  { path: '**', component: PageNotFoundComponent },

]);


