export interface PortfolioItem {
  id: string;
  title: string;
  subTitle: string;
  category: string;
  img: string;
  alt: string;
  images: string[];
  client: string;
  startDate: string;
  designer: string;
  challenge: {
    title: string;
    desc: string;
    description: string;
  };
  solution: {
    title: string;
    desc: string;
  };
}

export interface PortfolioData {
  portfolio: {
    items: PortfolioItem[];
    showcaseIds: string[];
  };
}

export interface PortfolioDetailProps {
  data: PortfolioItem;
}

export interface PortfolioNavigationProps {
  nextProject: PortfolioItem;
  prevProject: PortfolioItem;
}
