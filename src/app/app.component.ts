import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  namesource: string[] = ['pratik', 'jaydip', 'dharmik'];
  title = 'practice';
  users = [
    {
      name: 'pratik',
      address: 'ambika',
    },
  ];
  hadding: string = 'pratik';

  greet(event: string) {
    alert('hello' + event);
    console.log('my name is pratik');
  }
}
