import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
  //styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Strictly Shirts';

  //For Login Need to see if we have a customer id
  //If we do set this to their name
  //And when they click on their name it should bring them to there name
  //Else bring them to the login or create account screen
  login = 'Login';
  check = true;
}
