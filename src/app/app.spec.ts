import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render Spanish at the root route', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('html')).toBeNull();
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'José Enrique Reyes',
    );
    expect(compiled.querySelector('.role')?.textContent).toContain(
      'Ingeniero de Sistemas',
    );
  });

  it('should render English at /en', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.navigateByUrl('/en');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.role')?.textContent).toContain(
      'Systems Engineer',
    );
  });
});
