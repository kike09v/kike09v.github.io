import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section-header',
  styleUrl: './section-header.scss',
  templateUrl: './section-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeader {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly description = input<string>();
  readonly light = input(false);
}
