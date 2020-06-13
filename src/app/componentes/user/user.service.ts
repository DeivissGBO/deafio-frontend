import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://desafio-backend-cienciaemacao.herokuapp.com/';
  createUrl = 'https://desafio-backend-cienciaemacao.herokuapp.com/user';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",

    })
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.createUrl, user);
  }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }
}
