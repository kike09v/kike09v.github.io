import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { EducationContent } from '../../core/models/profile.models';
import { SectionHeader } from '../../shared/components/section-header/section-header';

@Component({
  imports: [SectionHeader],
  selector: 'app-education',
  styleUrl: './education.scss',
  templateUrl: './education.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  readonly content = input.required<EducationContent>();
  readonly sectionId = input.required<string>();
}
