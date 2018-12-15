import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public user: User;
  public formSubmited: boolean;

  constructor() { }

  ngOnInit() {
    this.formSubmited = false;
    this.user = {
      id: 1,
      firstname: 'Кот',
      lastname: 'Матроскин'
    }
  }

  public onCleanButtonClick() {
    this.user = new User();
  }

  public onSubmit() {
    // todo: submit data
    this.formSubmited = true;
  }

}
