import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlpanelComponent, QrScannerDialogComponent} from './controlpanel.component';
import {QrComponent} from './qr/qr.component';
import {ZoneSelectComponent} from './zone-select/zone-select.component';
import {DialogComponent} from '../../_components/dialog/dialog.component';
import {SeatFilterPipe} from '../../_pipes/seat-filter.pipe';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import { HttpClientModule} from '@angular/common/http';
import {ColdDialogComponent} from '../../fan-setting/fan-basic/fan-basic.component';
import {QrResultComponent} from './qr/qr-result/qr-result.component';



@NgModule({
  declarations: [
    ControlpanelComponent,
    QrComponent,
    QrResultComponent,
    ZoneSelectComponent,
    DialogComponent,
    SeatFilterPipe
  ],
  imports: [
    CommonModule,
    ZXingScannerModule,
    HttpClientModule
  ],
  entryComponents: [
    ColdDialogComponent,
    QrScannerDialogComponent
  ]
})
export class CheckInModule { }
