import { Injectable } from '@angular/core';
import axios from 'axios';
import OpenAI from "openai";
@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
 
  private endpoint = 'https://api.openai.com/v1/chat/completions';
  private apiKey ="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";// process.env['OPENAI_API_KEY'];  // Replace with your API key https://plainenglish.io/blog/setup-dotenv-to-access-environment-variables-in-angular-9-f06c6ffb86c0
  
  constructor() { }

  async askGPT(question: any): Promise<any> {
    const openai = new OpenAI({
      apiKey: this.apiKey,dangerouslyAllowBrowser: true
    });
    return await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "user",
          "content": question
        }
      ],
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }).then((value)=> {
      debugger;
      return value.choices[0].message.content
     });
    
  }
}

