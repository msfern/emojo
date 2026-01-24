export interface Search {
  updateSearch: (value: string) => void;
  isLoading: boolean;
  resultWasCleared: boolean;
  setResultWasCleared: (value: boolean) => void;
}