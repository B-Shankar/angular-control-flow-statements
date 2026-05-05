import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css',
})
export class TwoWayDataBinding {
  name = signal("Vijay Thalapathy");

  age = signal(20);
  age1 = signal(30);
  age2 = signal(40);


  userData = signal({
    name: "Kumar",
    age: "20",
    email: "kumar@jiosphere.com",
  });


  handleInput(key: string, value: string) {
    this.userData.update((data) => (
      {
        ...data,
        [key]: value
      }
    ));
  }
}
