import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;

  onNameChange(event: any) {
    let value = event?.target.value;
    this.name = value;
  }

  onDateChange(event: any) {
    let value = event?.target.value;
    this.date = value;
  }

  onAmountChange(event: any) {
    let value = event?.target.value;
    this.amount = parseFloat(value);
  }
}
