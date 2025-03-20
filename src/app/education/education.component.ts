import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Education } from '../models/education.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() educationList: any[] = [];
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
      next: (data: Education[]) => {
        this.educationList = data;
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
      this.apiService.addEducation(this.newEducation).subscribe({
        next: (response) => {
          this.newEducation = { school: '', degree: '', year: '' }; // clear form
          this.successMessage = ' Learning data has been successfully added!!';
          this.loadEducationData(); // Reload Data
        },
        error: (error) => {
          this.errorMessage = error.message; // store error to show
        }
      });
    }
  }

  validateEducation(education: any): boolean {
    if (!education.school || !education.degree || !education.year) {
      this.errorMessage = ' Please fill out all fields!';
      return false;
    }
    return true;
  }
}
