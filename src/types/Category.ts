export interface Category {
  details: {
    slug: string;
    emoji: string;
  };
  loadCategory: (slug: string) => void;
}

export interface CategoryList {
  categories: Category[];
  isLoading: boolean;
  loadCategory: (slug: string) => void;
}