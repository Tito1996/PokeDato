
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GptPokeApiService {
  private apiUrl = 'https://api.openai.com/v1/completions'; // URL de la API de OpenAI
  private apiKey = 'YOUR_API_KEY'; // Aquí debes poner tu clave de API

  constructor(private http: HttpClient) {}

  // Método para enviar el mensaje a ChatGPT
  getChatGptResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'text-davinci-003', // El modelo de GPT-3 o GPT-4
      prompt: prompt,
      max_tokens: 100, // Número de tokens (palabras) en la respuesta
      temperature: 0.7, // Nivel de aleatoriedad en las respuestas
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
