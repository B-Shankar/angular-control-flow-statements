import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  imports: [CommonModule],
  templateUrl: './ng-directives.html',
  styleUrl: './ng-directives.css',
})
export class NgDirectives {
  isLogin = signal(true);

  users = signal([
    "Test", "Re-test", "UAT", "SIT"
  ]);

  pColor = "red";

  status = signal("success");

  students = signal(["Bruce", "Bobster", "Bobby", "Bob", "Broomy"]);

  studentsData = signal([
    {
      name: "Bruce",
      email: "bruce@gmail.com",
      age: 20
    },
    {
      name: "Peter",
      email: "peter@gmail.com",
      age: 30
    },
    {
      name: "Noster",
      email: "noster@gmail.com",
      age: 27
    },
    {
      name: "Dolsk",
      email: "dolsk@gmail.com",
      age: 25
    },
  ]);

  show = true;

  userLogin = (false);

}
