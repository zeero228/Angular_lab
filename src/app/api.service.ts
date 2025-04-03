import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000'; // Базовий URL для JSONPlaceholder
  private authStatus = new BehaviorSubject<boolean>(false); // Початковий статус - не ввійшли
  public authStatus$ = this.authStatus.asObservable();

  constructor(private http: HttpClient) {
    // При ініціалізації сервісу перевіряємо наявність токена в sessionStorage
    const token = sessionStorage.getItem('token');
    if (token) {
      this.setAuthStatus(true); // Якщо токен є, вважаємо, що користувач увійшов
    }
  }

  // Метод для отримання даних про освіту з API
  getEducationData(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/educations`).pipe(
      retry(2), // Повторюємо запит 2 рази, якщо виникла помилка
      catchError(this.handleError) // Обробляємо помилки
    );
  }

  addEducation(education: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.apiUrl}/educations`, JSON.stringify(education), httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // Метод для логіну (робить POST запит)
  login(username: string, password: string): Observable<any> {
    const body = { username: username, password: password };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(`${this.apiUrl}/login`, JSON.stringify(body), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Метод для зміни статусу аутентифікації
  setAuthStatus(status: boolean): void {
    this.authStatus.next(status);
  }

  // Метод для обробки помилок HTTP-запитів
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Виникла невідома помилка!'; // Повідомлення за замовчуванням
    if (error.error instanceof ErrorEvent) {
      // Помилки на стороні клієнта
      errorMessage = `Помилка: ${error.error.message}`;
    } else {
      // Помилки на стороні сервера
      errorMessage = `Код помилки: ${error.status}\nПовідомлення: ${error.message}`;
    }
    console.error(errorMessage); // Виводимо помилку в консоль
    return throwError(() => new Error(errorMessage)); // Повертаємо Observable з помилкою
  }
}
