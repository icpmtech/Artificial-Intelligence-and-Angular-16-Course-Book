import { Component } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  public messages : any[] = [];
  public userInput = '';
  public user=false
  constructor(private http: HttpClient) { }

  sendMessage() {
    const httpOptions = {
      headers: new HttpHeaders({
                   'Content-Type': 'application/json',
                   'Access-Control-Allow-Origin': '*',
                   'Access-Control-Allow-Credentials': 'true'
      })
    };
    this.messages.push({ text: this.userInput, user: true });
    this.http.post('http://localhost:3000/getChatbotResponse', { message: this.userInput }, httpOptions)
      .subscribe((response: any) => {
        this.messages.push({ text: response.text, user: false });
        this.userInput = '';
      });
  }
}