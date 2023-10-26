import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrentNeuralNetworkComponent } from './recurrent-neural-network.component';

describe('RecurrentNeuralNetworkComponent', () => {
  let component: RecurrentNeuralNetworkComponent;
  let fixture: ComponentFixture<RecurrentNeuralNetworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecurrentNeuralNetworkComponent]
    });
    fixture = TestBed.createComponent(RecurrentNeuralNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
