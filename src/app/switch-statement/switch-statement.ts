import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-switch-statement',
  imports: [],
  templateUrl: './switch-statement.html',
  styleUrl: './switch-statement.css',
})
export class SwitchStatement {
  status = signal("notStarted");

  handleStatus(event: Event) {
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }
}
