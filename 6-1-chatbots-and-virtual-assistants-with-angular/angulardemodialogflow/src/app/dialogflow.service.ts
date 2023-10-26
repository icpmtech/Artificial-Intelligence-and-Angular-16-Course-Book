import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private baseUrl = 'https://dialogflow.googleapis.com/v2/{your-project-id}/sessions/{session-id}:detectIntent';
  private token = 'YOUR_DIALOGFLOW_TOKEN'; // Ideally, this should be secured on the server-side
  constructor(private http: HttpClient) { }

  getResponse(query: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
    const body = {
      queryInput: {
        text: {
          text: query,
          languageCode: 'en-US'
        }
      }
    };

    return this.http.post(this.baseUrl, body, { headers: headers });
  }
}
