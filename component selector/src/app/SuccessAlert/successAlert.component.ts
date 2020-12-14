import { Component } from '@angular/core';

@Component({
    selector :'app-successAlert',
    templateUrl:'./successAlert.component.html',
    styleUrls: ['./successAlert.component.css']
})
export class SuccessAlert{
    onClick(){
        alert("Congratulation you finish your second task!!")
    }
}