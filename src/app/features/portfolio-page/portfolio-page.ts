import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { contactLinks } from '../../core/data/profile';
import { LanguageService } from '../../core/services/language.service';
import { Contact } from '../contact/contact';
import { Education } from '../education/education';
import { Experience } from '../experience/experience';
import { Hero } from '../hero/hero';
import { Profile } from '../profile/profile';
import { Projects } from '../projects/projects';
import { Stack } from '../stack/stack';

@Component({
  imports: [
    Hero,
    Profile,
    Experience,
    Projects,
    Stack,
    Education,
    Contact,
  ],
  selector: 'app-portfolio-page',
  styleUrl: './portfolio-page.scss',
  templateUrl: './portfolio-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPage {
  protected readonly languageService = inject(LanguageService);
  protected readonly links = contactLinks;
}
