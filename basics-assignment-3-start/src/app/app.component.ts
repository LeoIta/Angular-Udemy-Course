import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secret ='Secret Password = RandomPsw';
  display = 'show';
  infos = [];
  allow = "info provided at ";
  index=0;

  onClick(){
      if (this.display==='show'){
        this.display='hide';
        let a = this.allow + new Date().toLocaleTimeString();
        this.infos.push(a);
        this.index = this.infos.indexOf(a);
        this.allow=this.index<3? "info provided at ":"4 daily requests limit exceeded!! info request failed at ";
    }else {this.display ='show';}
  }
}
