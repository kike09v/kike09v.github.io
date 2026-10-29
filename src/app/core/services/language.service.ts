import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { profiles } from '../data/profile';
import { Language } from '../models/profile.models';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter(
        (event): event is NavigationEnd => event instanceof NavigationEnd,
      ),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: '/' },
  );

  readonly language = computed<Language>(() =>
    this.currentUrl().split(/[?#]/)[0] === '/en' ? 'en' : 'es',
  );
  readonly content = computed(() => profiles[this.language()]);
  readonly alternateLanguage = computed<Language>(() =>
    this.language() === 'es' ? 'en' : 'es',
  );
  readonly alternateRoute = computed(() =>
    this.alternateLanguage() === 'en' ? '/en' : '/',
  );

  constructor() {
    effect(() => this.updateDocumentMetadata());
  }

  private updateDocumentMetadata(): void {
    const content = this.content();
    const canonicalUrl =
      content.language === 'en'
        ? 'https://kike09v.github.io/en'
        : 'https://kike09v.github.io/';

    this.titleService.setTitle(content.seo.title);
    this.document.documentElement.lang = content.language;
    this.updateCanonical(canonicalUrl);

    const tags: MetaDefinition[] = [
      { name: 'description', content: content.seo.description },
      { property: 'og:title', content: content.seo.title },
      { property: 'og:description', content: content.seo.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:locale', content: content.locale },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: content.seo.title },
      { name: 'twitter:description', content: content.seo.description },
    ];

    for (const tag of tags) {
      this.meta.updateTag(tag);
    }
  }

  private updateCanonical(url: string): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = url;
  }
}
