import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { ProjectsContent } from '../../core/models/profile.models';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { TechBadge } from '../../shared/components/tech-badge/tech-badge';

@Component({
  imports: [SectionHeader, TechBadge],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly content = input.required<ProjectsContent>();
  readonly sectionId = input.required<string>();
}
