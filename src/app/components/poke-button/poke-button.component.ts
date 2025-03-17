import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { GptPokeApiService } from '@services/gpt-poke-api.service';

@Component({
  selector: 'app-poke-button',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './poke-button.component.html',
  styleUrl: './poke-button.component.css',
})
export class PokeButtonComponent {
  prompt: string = 'Dime un dato curioso sobre Pokemon'; // El texto que el usuario ingresa
  response: string = ''; // La respuesta de ChatGPT

  constructor(private chatgptService: GptPokeApiService) {}

  // Método para enviar el prompt a ChatGPT
  getPokeDato() {
    this.chatgptService.getChatGptResponse(this.prompt).subscribe({
      next: (data) => {
        this.response = data.choices[0].text.trim(); // Mostrar respuesta
      },
      error: (error) => {
        console.error(error);
        this.response = 'Error al obtener la respuesta de ChatGPT';
      },
    });
  }
}
