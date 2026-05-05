import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-getter-setter',
  imports: [FormsModule],
  templateUrl: './signal-getter-setter.html',
  styleUrl: './signal-getter-setter.css',
})
export class SignalGetterSetter {

  userName = signal("Stalin");

  collegeData = signal({
    name: "CGI College",
    email: "cgi@col.com"
  });

  get getName() {
    return this.userName();
  }

  set setName(name: string) {
    this.userName.set(name);
  }

  get userCollege() {
    return this.collegeData().name;
  }

  set userCollege(val: string) {
    this.collegeData.update((data) => ({
      ...data,
      name: val
    }));
  }
}
