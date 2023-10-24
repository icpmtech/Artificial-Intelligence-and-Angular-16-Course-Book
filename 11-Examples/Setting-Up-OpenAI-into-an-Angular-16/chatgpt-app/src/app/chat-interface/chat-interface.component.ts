import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../openai.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.less']
})
export class ChatInterfaceComponent implements OnInit {
 userMessage: any;
chatGPTForm = this.formBuilder.group({
  question: ''
});
  constructor(private formBuilder: FormBuilder,private openaiService: OpenaiService) { }

  ngOnInit(): void { }

  sendMessage() {
   const  message= this.chatGPTForm.value.question;
    this.openaiService.askGPT(message).then(response => {
      console.log(response);
      // Handle the response from GPT here, e.g., display it in the chat interface.
      this.userMessage=response;
      this.chatGPTForm.reset();
    });
  }
}
