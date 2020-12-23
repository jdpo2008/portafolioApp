import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initMessageForm();
  }

  initMessageForm() {
    this.messageForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(100)]],
      phoneNumber: ['', Validators.pattern(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/)],
      message: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    alert("form enviado")
  }

}
