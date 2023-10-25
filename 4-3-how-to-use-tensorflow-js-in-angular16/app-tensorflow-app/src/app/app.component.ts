// @ts-nocheck
import { Component } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
// @ts-nocheck/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-tensorflow-app';
  async loadModel() {
    const model = await tf.loadLayersModel('path/to/model.json');
    // Perform operations with the loaded model
  }

  ngOnInit() {
    runAdditionRNNDemo();
  }
}
