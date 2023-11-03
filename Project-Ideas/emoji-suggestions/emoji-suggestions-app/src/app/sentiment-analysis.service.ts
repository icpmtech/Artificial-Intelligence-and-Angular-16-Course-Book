import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {
  private apiUrl = 'http://localhost:3000/analyze-sentiment';

  constructor(private http: HttpClient) {}

  analyzeSentiment(text: string) {
    return this.http.post(this.apiUrl, { text });
  }
}
