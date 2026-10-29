import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { Footer } from '../../shared/components/footer/footer';
import { Navbar } from '../../shared/components/navbar/navbar';

@Component({
  imports: [Navbar, RouterOutlet, Footer],
  selector: 'app-main-layout',
  styleUrl: './main-layout.scss',
  templateUrl: './main-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {
  protected readonly languageService = inject(LanguageService);
}
