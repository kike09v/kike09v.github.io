import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import {
  AccessibilityContent,
  ContactContent,
} from '../../core/models/profile.models';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  readonly content = input.required<ContactContent>();
  readonly accessibility = input.required<AccessibilityContent>();
  readonly sectionId = input.required<string>();
  readonly email = input.required<string>();
  readonly github = input.required<string>();
  readonly linkedIn = input.required<string>();
}
