import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ExperienceContent } from '../../core/models/profile.models';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { TechBadge } from '../../shared/components/tech-badge/tech-badge';

@Component({
  imports: [NgTemplateOutlet, SectionHeader, TechBadge],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  readonly content = input.required<ExperienceContent>();
  readonly sectionId = input.required<string>();
  protected readonly recent = computed(() => this.content().items.slice(0, 2));
  protected readonly earlier = computed(() => this.content().items.slice(2));
}
