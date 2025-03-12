import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experiences: any[] = [];
  @Output() experienceClicked = new EventEmitter<number>();

  expandedIndices: Set<number> = new Set<number>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDescription(index: number): void {
    if (this.expandedIndices.has(index)) {
      this.expandedIndices.delete(index);
    } else {
      this.expandedIndices.add(index);
    }
    this.experienceClicked.emit(index);
  }

  isExpanded(index: number): boolean {
    return this.expandedIndices.has(index); // Check if the current index is expanded
  }
}
