import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfStatements } from './if-statements/if-statements';
import { ForLoop } from './for-loop/for-loop';
import { SwitchStatement } from './switch-statement/switch-statement';
import { TwoWayDataBinding } from './two-way-data-binding/two-way-data-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IfStatements, ForLoop, SwitchStatement, TwoWayDataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('control-statements');
}
