import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { ProfileSectionContent } from '../../core/models/profile.models';
import { SectionHeader } from '../../shared/components/section-header/section-header';

@Component({
  imports: [SectionHeader],
  selector: 'app-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile {
  readonly content = input.required<ProfileSectionContent>();
  readonly sectionId = input.required<string>();
}
