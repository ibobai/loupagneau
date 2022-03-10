import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  @Input() name?: string;
email?: string;
message?: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    const message=`Mon prenom est ${this.name}.mon E-mail est ${this.email}.
    Mon message est ${this.message}`;
    alert(message);
  

  }
}
