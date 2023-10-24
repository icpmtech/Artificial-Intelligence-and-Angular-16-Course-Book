import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../openai.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.less']
})
export class ChatInterfaceComponent implements OnInit {
 chatGPTMessage: any;
 chatGPTForm: any;
  constructor(private openaiService: OpenaiService) { }

  ngOnInit(): void {
    this.chatGPTForm = new FormGroup({
      question: new FormControl (['', Validators.required]),
    });
   }

  sendQuestion() {
   const  message= this.chatGPTForm.value.question;
    this.openaiService.askGPT(message).then((response: any) => {
      console.log(response);
      // Handle the response from GPT here, e.g., display it in the chat interface.
      this.chatGPTMessage=response;
      this.chatGPTForm.reset();
    });
  }
}
