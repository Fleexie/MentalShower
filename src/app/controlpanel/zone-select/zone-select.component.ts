import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckInService } from '../../_services/check-in.service';
import { InMemoryService } from '../../_services/in-memory.service';
import {PresetService} from '../../_services/preset.service';

@Component({
  selector: 'app-zone-select',
  templateUrl: './zone-select.component.html',
  styleUrls: ['./zone-select.component.css']
})
export class ZoneSelectComponent implements OnInit {
  /** Two Way Properties */
  @Input() position: any;
  @Output() positionChange = new EventEmitter<object>();

  /** Properties */
  panelOpenState = false;
  rooms: any;
  zones: any;
  seats: any;
  currentZone: any;
  currentRoom: any;
  currentZoneId: any;

  constructor(
    private checkIn: CheckInService,
    private presetService: PresetService,
    private inmemory: InMemoryService
  ) { }

  ngOnInit(): void {
    this.getRooms();
  }
  /** Methods */
  getRooms() {
    this.checkIn.getRooms()
      .subscribe(
        data => {
          this.rooms = data;
          console.log(this.rooms);
        },
        error => {
        });
  }
  setRoom(id) {
    this.currentRoom = id;
    this.inmemory.room = id;
    console.log(this.currentRoom, 'set as current room');
    this.getZones();
    this.getSeats();
  }
  getZones() {
    this.checkIn.getZones(this.currentRoom)
      .subscribe(
        data => {
          this.zones = data;
          console.log(this.zones);
        },
        error => {
        });
  }
  getSeats() {
    this.checkIn.getSeats(this.currentRoom).subscribe(data => {
      this.seats = data;
      console.log(this.seats);
    },
      error => {
      console.log('fail at getSeat');
      });
  }
  setLocalZone(i) {
    this.currentZoneId = i;
    console.log(this.currentZoneId, 'set as local current Zone');

  }
  setZone(id, localId) {
    this.currentZone = id;
    this.inmemory.zone = id;
    this.currentZoneId = localId;
    this.position.currentRoom = this.currentRoom;
    this.position.currentZone = (localId + 1);
    console.log(this.currentZone, 'set as current Zone');
    this.positionChange.emit(this.position);

    this.updatePreset(1, this.currentZone, 3, 12);
  }

  updatePreset(presetID, climateID, userID, airflowID){
    const data = {
      FK_Climate_Zone: climateID,
      FK_User: userID,
      airflow: airflowID
    };
    this.presetService.putPresets(presetID, data).subscribe(response => { console.log(data); });
  }
}
