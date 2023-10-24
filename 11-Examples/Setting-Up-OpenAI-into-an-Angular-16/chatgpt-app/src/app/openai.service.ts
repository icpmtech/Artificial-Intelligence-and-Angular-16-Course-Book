import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
 
  private endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  private apiKey ="OPENAI_API_KEY";// process.env['OPENAI_API_KEY'];  // Replace with your API key https://plainenglish.io/blog/setup-dotenv-to-access-environment-variables-in-angular-9-f06c6ffb86c0

  constructor() { }

  async askGPT(question: any): Promise<string> {
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

