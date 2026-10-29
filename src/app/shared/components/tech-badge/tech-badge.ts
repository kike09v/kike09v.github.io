import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { getTechnologyVisual } from '../../../core/data/technology-catalog';

@Component({
  imports: [],
  selector: 'app-tech-badge',
  styleUrl: './tech-badge.scss',
  templateUrl: './tech-badge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechBadge {
  readonly name = input.required<string>();
  readonly compact = input(false);
  readonly iconOnly = input(false);
  protected readonly visual = computed(() =>
    getTechnologyVisual(this.name()),
  );
}
