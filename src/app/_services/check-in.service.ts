import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const roomUrl = 'http://localhost:8080/api/rooms';
const zoneByRoomUrl = 'http://localhost:8080/api/climateZoneByRoomId';
const seatByZoneUrl = 'http://localhost:8080/api/seatsByClimateZoneId';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  constructor(private conn: HttpClient) { }

  /** Rooms */
  getRooms() {
    return this.conn.get(roomUrl);
  }
  /** Zones */
  getZones(roomID) {
    return this.conn.get(`${zoneByRoomUrl}/${roomID}`, roomID);
  }
  /** Chairs */
  getSeats(zoneID) {
    return this.conn.get(`${seatByZoneUrl}/${zoneID}`, zoneID);
  }
  /** User */
  getUser() {
    return 'guest';
  }
  /** Preset */
  getPreset() {
    return 'preset';
  }

}
