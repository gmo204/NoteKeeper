import { Component } from '@angular/core';
import { ShellComponent } from './core/components/shell/shell.component';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
