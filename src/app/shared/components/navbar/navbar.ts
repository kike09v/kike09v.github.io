import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Language,
  ProfileContent,
} from '../../../core/models/profile.models';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  readonly content = input.required<ProfileContent>();
  readonly alternateLanguage = input.required<Language>();
  readonly alternateRoute = input.required<string>();
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected currentRoute(): string {
    return this.content().language === 'en' ? '/en' : '/';
  }

  @HostListener('document:keydown.escape')
  protected closeMenuOnEscape(): void {
    this.closeMenu();
  }
}
