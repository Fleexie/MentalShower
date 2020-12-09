import { Component, OnInit, Inject } from '@angular/core';
import { faSnowflake, faSun, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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

  currentFan;
  constructor(public dialog: MatDialog) { }

  /* Dialog method */
  coldClicked(parameter): void{
    this.currentFan = parameter;
    let settingType;
    /* Switch to determine what setting has been clicked */
    switch (this.currentFan) {
      case 'coldSetting':
        settingType = 'Cold';
        break;
        case 'goodSetting':
          settingType = 'Good';
          break;
          case 'warmSetting':
            settingType = 'Warm';
            break;
      }
      /* Refer to the dialog */
    const dialogRef = this.dialog.open(ColdDialogComponent, {
          width: '80%',
          height: 'fit-content',
          hasBackdrop: true,
          panelClass: ['dialogClass'],
          data: { settings: settingType }
      });

    dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });
  }

  ngOnInit(): void {
  }

}


/* Dialog component */
@Component({
    selector: 'app-dialog-cold',
    template: `<h2>You clicked that you are feeling <span class="{{data.settings}}">{{data.settings}}</span>.</h2>
    <p>The system will take care of any changes to the ventilation unit.</p>
    <p>You may not feel a change immediately</p>
`,
    styleUrls: ['fan-basic.component.css']
})
export class ColdDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<FanBasicComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {settings: string}) {

    }
    onNoClick(): void {
        this.dialogRef.close();
    }

}
