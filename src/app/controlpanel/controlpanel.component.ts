import { Component, OnInit } from '@angular/core';
import {faQrcode, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

import { CheckInService } from '../_services/check-in.service';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css',
  '../_styles/styles.css']
})
export class ControlpanelComponent implements OnInit {
    qrCode = faQrcode;
    question = faQuestionCircle;

  /** Properties */
  currentPosition = {
    currentZone: null,
    currentRoom: null
  };

  /** Constructor */
  constructor(
    private checkIn: CheckInService
  ) {
  }
  /** OnInit */
  ngOnInit(): void {
  }

}
