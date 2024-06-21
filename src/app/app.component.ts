import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinningWheelComponent } from "./spinning-wheel/spinning-wheel.component";
import { FormsModule } from '@angular/forms';
import { TalkativeDirective } from './talkative.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SpinningWheelComponent, FormsModule,TalkativeDirective]
})
export class AppComponent {
  title = 'ng_assessment';
inputValue: any;
}
