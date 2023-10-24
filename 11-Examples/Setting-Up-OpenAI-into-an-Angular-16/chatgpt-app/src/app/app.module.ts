import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule    } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInterfaceComponent } from './chat-interface/chat-interface.component';
import { OpenaiService } from './openai.service';
@NgModule({
  declarations: [
    AppComponent,
    ChatInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule   
  ],
  providers: [OpenaiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
