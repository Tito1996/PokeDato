import { Component } from '@angular/core';
import { PokeButtonComponent } from '@components/poke-button/poke-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
