import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Education } from './models/education.model'; // Import the interface

@Injectable({
  providedIn: 'root' // Робимо сервіс доступним у всьому додатку
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Базовий URL для JSONPlaceholder

  constructor(private http: HttpClient) { }

  // Метод для отримання даних про освіту з API
  getEducationData(): Observable<Education[]> {
    return this.http.get<any[]>(`${this.apiUrl}/todos`).pipe(
      retry(2), // Повторюємо запит 2 рази, якщо виникла помилка
      map(todos => this.transformTodosToEducation(todos)), // Перетворюємо дані з JSONPlaceholder у формат Education
      catchError(this.handleError) // Обробляємо помилки
    );
  }

  addEducation(education: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.apiUrl}/todos`, JSON.stringify(education), httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // Метод для перетворення даних з JSONPlaceholder у формат Education
  private transformTodosToEducation(todos: any[]): Education[] {
    return todos.map(todo => ({
      school: `School ${todo.userId}`, // Генеруємо фейкову назву школи
      degree: todo.title, // Використовуємо заголовок todo як ступінь
      year: `Year ${todo.id}` // Генеруємо фейковий рік
    }));
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
