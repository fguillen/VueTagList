import { suggestionsList } from "@/data/SuggestionsList";

// const suggestionListLowercase = suggestionsList.map(e => e.toLowerCase());

export const useSuggestionsFinder = () => {
  const getSuggestions = (partialTitle: string, maxOccurrences: number = 3) => {
    const result = suggestionsList.filter(e => e.toLowerCase().includes(partialTitle.toLowerCase()));
    return result.slice(0, maxOccurrences);
  };

  return {
    suggestionsList,
    getSuggestions
  }
}
