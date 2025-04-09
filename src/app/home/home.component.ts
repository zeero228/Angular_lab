import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { EducationComponent } from "../education/education.component";
import { ProfileComponent } from "../profile/profile.component";
import { ExperienceComponent } from "../experience/experience.component";
import { LanguagesComponent } from "../languages/languages.component";
import { SkillListComponent } from "../skill-list/skill-list.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // Вказуємо шлях до шаблону
  styleUrls: ['./home.component.scss'], // Вказуємо шлях до стилів
  standalone: true,
  imports: [RouterModule, CommonModule, ProfileComponent, EducationComponent, ExperienceComponent, LanguagesComponent, SkillListComponent],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {
  name: string = 'GARY T. WALTON';
  title: string = 'Graphic & Web Designer';
  aboutMeMain: string = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  aboutMeSecondary: string = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";
  phoneNumber: string = '+1-718-310-5588';
  website: string = 'www.yourwebsite.com';
  address: string = '796 Prudence Street, Lincoln Park, MI 48146';
  showReferences: boolean = true;
  references: any[] = [
    {
      name: 'DARWIN B. MAGANA',
      address: '2813 Shobe Lane Mancos, CO.',
      phone: '+1-970-533-3393',
      website: 'www.yourwebsite.com'
    },
    {
      name: 'ROBERT J. BELVIN',
      address: '2119 Fairfax Drive Newark, NJ.',
      phone: '+1-908-987-5103',
      website: 'www.yourwebsite.com'
    }
  ];

  public experiences: any[] = [
    {
      workPlace: 'Creative Agency',
      location: 'Chicago',
      position: 'Senior Web Designer',
      year: '2021-Present',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      workPlace: 'Creative Market',
      location: 'United Kingdom',
      position: 'Graphic Designer',
      year: '2018-2021',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      workPlace: 'Marketing Agency',
      location: 'Chicago',
      position: 'Marketing Manager',
      year: '2015-2018',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      workPlace: 'Creative Market',
      location: 'Chicago',
      position: 'Junior Web Designer',
      year: '2010-2015',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ];

  skills: any[] = [
    { name: 'Adobe Photoshop', level: 80 },
    { name: 'Adobe Illustrator', level: 60 },
    { name: 'Microsoft Word', level: 78 }
  ];

  hobbies: any[] = [
    { name: 'Book Reading', level: 80 },
    { name: 'Traveling', level: 60 }
  ];

  public languages: any[] = [
    { name: 'English', level: 95 },
    { name: 'German', level: 60 },
    { name: 'Spanish', level: 45 }
  ];

  public educationList: any[] = [];
  isLoggedIn: boolean = false; // Початковий стан - не ввійшли

  constructor(private router: Router,    private apiService: ApiService,) {
  }

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }

    this.apiService.getEducationData().subscribe((data) => {
      this.educationList = data;
    });
  }
}
