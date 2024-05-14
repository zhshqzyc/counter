import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CounterComponent]
})
export class AppComponent {
      counter: number = 0;
      min: number = 0;
      max: number = Number.MAX_SAFE_INTEGER;
}
