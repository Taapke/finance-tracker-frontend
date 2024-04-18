import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
