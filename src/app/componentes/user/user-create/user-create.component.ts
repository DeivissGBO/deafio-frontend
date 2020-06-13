import { User } from './../user.model';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user: User = {
    nome: '',
    telefone: '',
    idade: null,
  }
  ngOnInit(): void {

  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Usuário criado!')
      this.router.navigate(['/users'])
    })


  }

  cancel(): void {
    this.router.navigate(['/users'])

  }


}
