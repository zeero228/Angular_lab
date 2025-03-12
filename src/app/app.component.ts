import { Component } from '@angular/core';
import { EducationComponent } from './education/education.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { LanguagesComponent } from './languages/languages.component';
import { CommonModule } from '@angular/common';
import { SkillListComponent } from './skill-list/skill-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Required for *ngIf, *ngFor
    EducationComponent,
    ProfileComponent,
    ExperienceComponent,
    LanguagesComponent,
    SkillListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  experiences: any[] = [
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
      location: 'United Kingdom',
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

  educationList: any[] = [
    { school: 'Stanford University', degree: 'Master Degree', year: '2021-2023' },
    { school: 'Chicago University', degree: 'Bachelor\'s Degree', year: '2007-2010' }
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

  languages: any[] = [
    { name: 'English', level: 95 },
    { name: 'German', level: 60 },
    { name: 'Spanish', level: 45 }
  ];

  onExperienceClicked(index: number) {
    console.log(`Experience ${index} clicked in App Component! Index: ${index}`);
    // Тут можна додати логіку реагування на подію кліку
  }
}
