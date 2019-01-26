import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() CancelRegister = new EventEmitter;
  model: any = {};
  constructor(private service: AuthService) { }

  ngOnInit() {
    console.log('Values Come from Parent' + this.valuesFromHome);
  }

  register() {
    this.service.register(this.model).subscribe(() => {
        console.log('Registration Successful');
    }, error => {
        console.log(error);
    });
  }

  cancel() {
    this.CancelRegister.emit(false);
  }

}
