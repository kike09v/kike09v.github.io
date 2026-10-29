export type Language = 'es' | 'en';

export interface NavigationItem {
  label: string;
  sectionId: string;
}

export interface Experience {
  role: string;
  organization?: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  name: string;
  label: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface ProfileContent {
  language: Language;
  locale: string;
  seo: {
    title: string;
    description: string;
  };
  accessibility: {
    skipToContent: string;
    openNavigation: string;
    closeNavigation: string;
    primaryNavigation: string;
    languageSelector: string;
    currentLanguage: string;
    externalLink: string;
  };
  navigation: NavigationItem[];
  hero: {
    availability: string;
    name: string;
    role: string;
    introduction: string;
    primaryAction: string;
    secondaryAction: string;
    experienceLabel: string;
    experienceValue: string;
    locationLabel: string;
    locationValue: string;
  };
  profile: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    focusTitle: string;
    focusAreas: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    recentLabel: string;
    earlierLabel: string;
    items: Experience[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    technologyLabel: string;
    items: Project[];
  };
  stack: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  education: {
    eyebrow: string;
    title: string;
    item: Education;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
    linksLabel: string;
  };
  footer: {
    statement: string;
    backToTop: string;
  };
}

export type HeroContent = ProfileContent['hero'];
export type ProfileSectionContent = ProfileContent['profile'];
export type ExperienceContent = ProfileContent['experience'];
export type ProjectsContent = ProfileContent['projects'];
export type StackContent = ProfileContent['stack'];
export type EducationContent = ProfileContent['education'];
export type ContactContent = ProfileContent['contact'];
export type FooterContent = ProfileContent['footer'];
export type AccessibilityContent = ProfileContent['accessibility'];
