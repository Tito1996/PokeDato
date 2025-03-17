import { Component } from '@angular/core';
import { InitButtonComponent } from '@components/init-button/init-button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [InitButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
