import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  intro = "who are you?";
  allowReset=false;
  
  getIntro(){
  this.intro = (this.username =='') ? "who are you?": "Hello ";
  this.allowReset=(this.username =='') ? false:true;
  return this.intro; 
  }
  onClickReset(){
    this.username='';
  }

}

