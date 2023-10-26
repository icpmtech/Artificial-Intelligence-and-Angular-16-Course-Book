import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatbotService } from '../dialogflow.service';
@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.less']
})
export class ChatInterfaceComponent implements OnInit {
 chatMessage: any;
 chatForm: any;
  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      question: new FormControl (['']),
    });
   }

  sendQuestion() {
   const  message= this.chatForm.value.question;
    
   this.chatbotService.getResponse(message).subscribe((response: any) => {
    console.log(response);
    // Handle the response from  here, e.g., display it in the chat interface.
    this.chatMessage=response;
    this.chatForm.reset();
  });
      this.chatForm.reset();
   
  }
}
