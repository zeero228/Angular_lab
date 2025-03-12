import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() aboutMeMain: string = '';
  @Input() aboutMeSecondary: string = '';
  @Input() phoneNumber: string = '';
  @Input() website: string = '';
  @Input() address: string = '';
  @Input() showReferences: boolean = false;
  @Input() references: any[] = [];

  expandedIndices: Set<number> = new Set<number>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleReference(index: number): void {
    if (this.expandedIndices.has(index)) {
      this.expandedIndices.delete(index);
    } else {
      this.expandedIndices.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedIndices.has(index);
  }
}
