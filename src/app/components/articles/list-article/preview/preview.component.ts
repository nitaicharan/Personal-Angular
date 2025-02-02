import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  imports: [DatePipe],
})
export class PreviewComponent {
  @Input() authorUsername!: string;
  @Input() profileImage!: string;
  @Input() profileLink!: string;
  @Input() articleSlug!: string;
  @Input() articleDescription!: string;
  @Input() articleTitle!: string;
  @Input() articleDate!: Date;
  @Input() articleLikes!: string;
  @Input() tags!: string[];
}
