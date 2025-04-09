import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  // localEducationList: any[] = []; // Дані, введені вручну
  @Input() loadedEducationList: any[] = []; // Дані, завантажені з сервера
  newEducation: any = { school: '', degree: '', year: '' };
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadEducationData();
  }

  loadEducationData(): void {
    this.isLoading = true;
    this.apiService.getEducationData().subscribe({
      next: (data) => {
        this.loadedEducationList = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    });
  }

  addEducation(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.validateEducation(this.newEducation)) {
      // const newEducationWithId = { ...this.newEducation};

      this.apiService.addEducation(this.newEducation).subscribe({
        next: (response) => {
          // Додаємо до локального списку
          // this.localEducationList = [...this.localEducationList, newEducationWithId];
          this.newEducation = { school: '', degree: '', year: '' }; // Очищаємо форму
          this.successMessage = 'Learning data has been successfully added!!';
        },
        error: (error) => {
          this.errorMessage = error.message;
        }
      });
      this.loadEducationData();
    }
  }

  onSubmit(): void { }

  validateEducation(education: any): boolean {
    if (!education.school || !education.degree || !education.year) {
      this.errorMessage = 'Please fill out all fields!';
      return false;
    }
    return true;
  }

}
