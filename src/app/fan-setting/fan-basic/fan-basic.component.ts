import { Component, OnInit } from '@angular/core';
import { faSnowflake, faSun, faThumbsUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fan-basic',
  templateUrl: './fan-basic.component.html',
  styleUrls: ['../../_styles/styles.css',
      './fan-basic.component.css'
  ]
})
export class FanBasicComponent implements OnInit {
  cold = faSnowflake;
  warm = faSun;
  good = faThumbsUp;
  constructor() { }

  ngOnInit(): void {
  }

}
