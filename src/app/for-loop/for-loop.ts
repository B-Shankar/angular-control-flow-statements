import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {

  users = signal(["Alex", "Bob", "Maya", "Suzi"]);

  userDetails = signal([
    { id: 1, name: "Vijay", surname: "Thalapathy", email: "vijay@tvk.com", party: "TVK" },
    { id: 2, name: "M K", surname: "Stalin", email: "stalin@dmk.com", party: "DMK" },
    { id: 3, name: "C J", surname: "Surya", email: "surya@aiadmk.com", party: "AIADMK" },
    { id: 4, name: "Yuvaneedhi", surname: "Stalin", email: "y.stalin@dmk.com", party: "DMK" },
  ]);
}
