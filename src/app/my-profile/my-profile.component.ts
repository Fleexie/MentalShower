import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { InMemoryService } from '../_services/in-memory.service';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['../_styles/styles.css', './my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  photoUrl = this.authfire.auth.currentUser.photoURL;

  email = this.authfire.auth.currentUser.email;
  name = this.authfire.auth.currentUser.displayName;
  constructor(private userout: LoginService, private authfire: AngularFireAuth, private ab: InMemoryService) { }

  airflow = 0;
  uid = 0;
  room = 0;
  zone = 0;

  userData: any = {
    airflow: this.airflow,
    uid: this.uid,
    room: this.room,
    zone: this.zone
  };
  ngOnInit(): void {
    const id = this.authfire.auth.currentUser.uid;
    this.PresetsByUid(id);
    console.log(this.userData);
  }
  logout() {
    const result = this.userout.logout();
  }
  PresetsByUid(id) {
    if (this.authfire.auth.currentUser) {
      id = this.authfire.auth.currentUser.uid;
      this.ab.getbyId(id).subscribe(
        (data) => {
          this.userData = data;
          console.log(this.userData);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
