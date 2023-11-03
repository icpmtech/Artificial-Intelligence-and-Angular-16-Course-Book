import { Component } from '@angular/core';
import { SentimentAnalysisService } from '../sentiment-analysis.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  currentMessage = '';
  suggestedEmojis: string[] = [];
  constructor(private sentimentService: SentimentAnalysisService) {}

  onMessageInput(message: string) {
    this.currentMessage = message;
    if (message.trim()) {
      this.sentimentService.analyzeSentiment(message)
        .subscribe((data: any) => {
          this.suggestedEmojis = data.emojis;
        });
    } else {
      this.suggestedEmojis = [];
    }
  }
  addToMessage(message: string) {
    this.currentMessage = message;
    if (message.trim()) {
      this.sentimentService.analyzeSentiment(message)
        .subscribe((data: any) => {
          this.suggestedEmojis = data.emojis;
        });
    } else {
      this.suggestedEmojis = [];
    }
  }

}
