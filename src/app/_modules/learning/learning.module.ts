import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizComponent} from './quiz/quiz.component';
import {NewlearningelementsComponent} from './newlearningelements/newlearningelements.component';



@NgModule({
  declarations: [
    QuizComponent,
    NewlearningelementsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LearningModule { }
