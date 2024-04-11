import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finance-tracker-frontend';
}
