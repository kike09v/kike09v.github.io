import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { StackContent } from '../../core/models/profile.models';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { TechBadge } from '../../shared/components/tech-badge/tech-badge';

@Component({
  imports: [SectionHeader, TechBadge],
  selector: 'app-stack',
  styleUrl: './stack.scss',
  templateUrl: './stack.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stack {
  readonly content = input.required<StackContent>();
  readonly sectionId = input.required<string>();
}
