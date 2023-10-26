// @ts-nocheck
import { Component } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
// @ts-nocheck
@Component({
  selector: 'app-recurrent-neural-network',
  templateUrl: './recurrent-neural-network.component.html',
  styleUrls: ['./recurrent-neural-network.component.css']
})
export class RecurrentNeuralNetworkComponent implements OnInit {
  ngOnInit() {
    runAdditionRNNDemo();
  }
}
