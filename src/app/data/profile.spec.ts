import { profiles } from '../core/data/profile';

describe('profile content', () => {
  it('contains both supported languages', () => {
    expect(profiles.es.language).toBe('es');
    expect(profiles.en.language).toBe('en');
  });

  it('contains the authorized experience timeline and projects', () => {
    for (const profile of Object.values(profiles)) {
      expect(profile.experience.items).toHaveLength(7);
      expect(profile.projects.items).toHaveLength(2);
    }
  });

  it('does not contain prohibited content', () => {
    const serializedProfiles = JSON.stringify(profiles).toLocaleLowerCase();
    const prohibitedTerms = [
      'wallet rune',
      'lorem ipsum',
    ];

    for (const term of prohibitedTerms) {
      expect(serializedProfiles).not.toContain(term);
    }

    expect(profiles.es.projects.items[0].name).toBe(
      'Sistema de gestión financiera',
    );
    expect(profiles.en.projects.items[0].name).toBe(
      'Financial Management System',
    );
  });

  it('contains only the approved technology stack', () => {
    const approvedStack = [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Angular',
      'SAP',
      'NetSuite',
      'Linux',
      'Nginx',
      'Gunicorn',
    ];

    expect(profiles.es.stack.items).toEqual(approvedStack);
    expect(profiles.en.stack.items).toEqual(approvedStack);
  });
});
