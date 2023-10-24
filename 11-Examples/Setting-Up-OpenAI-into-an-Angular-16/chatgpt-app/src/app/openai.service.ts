import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  private apiKey = 'YOUR_OPENAI_API_KEY';  // Replace with your API key

  constructor() { }

  async askGPT(question: string): Promise<string> {
    const response = await axios.post(this.endpoint, {
      prompt: question,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].text.trim();
  }
}

