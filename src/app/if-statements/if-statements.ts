import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-if-statements',
  imports: [],
  templateUrl: './if-statements.html',
  styleUrl: './if-statements.css',
})

export class IfStatements {

  isLogin = signal(false);
  show = signal(false);
  status = signal("notStarted");

  toggelLogin() {
    this.isLogin.update(value => !value);
  }

  handleStatusChange(event: Event) {
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }
}
