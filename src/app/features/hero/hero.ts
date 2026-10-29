import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { HeroContent } from '../../core/models/profile.models';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly content = input.required<HeroContent>();
  readonly experienceSectionId = input.required<string>();
  readonly email = input.required<string>();
  readonly github = input.required<string>();
  readonly linkedIn = input.required<string>();
  readonly externalLink = input.required<string>();
}
