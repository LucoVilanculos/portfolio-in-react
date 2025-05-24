//All Props

export interface HeaderProps {
    title: string;
};

export interface FooterProps {
    name: string;
    date: Date;
};

export interface ReposiProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
};