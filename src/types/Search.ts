export interface Search {
  updateSearch: (value: string) => void;
  resultWasCleared: boolean;
  setResultWasCleared: (value: boolean) => void;
}