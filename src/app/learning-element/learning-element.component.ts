import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
@Component({
  selector: 'app-learning-element',
  templateUrl: './learning-element.component.html',
  styleUrls: ['../_styles/styles.css', './learning-element.component.css']
})
export class LearningElementComponent {
  ifMatched;
  matchFail;
  items = [
    'Login/Register to make fan setting',
    'Select room and Zone',
    'Save and Preview your value',
    'Within controlpanel chose either given options or set your own value',
    'Welcome to Ventk2 app'
  ];

  basket = [];
  constructor(private router: Router) { }

  drop(event: CdkDragDrop<string[]>) {
    const correctorder = [
      'Welcome to Ventk2 app',
      'Select room and Zone',
      'Within controlpanel chose either given options or set your own value',
      'Login/Register to make fan setting',
      'Save and Preview your value'
    ];
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    const dropData = JSON.stringify(event.container.data);
    const originalData = JSON.stringify(correctorder);
    if (dropData === originalData) {
      return this.ifMatched = true;
    }

    if ((dropData !== originalData && event.previousContainer.data.length === 0)) {
      return this.matchFail = true;
    }
  }
}
