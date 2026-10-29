import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { FooterContent } from '../../../core/models/profile.models';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly content = input.required<FooterContent>();
  readonly name = input.required<string>();
  protected readonly year = new Date().getFullYear();
}
