const suggestionsList: Array<string> = [];

export const useSuggestionsFinder = () => {
  const setSuggestions = (suggestions: Array<string>): void => {
    console.log("useSuggestionsFinder.setSuggestions", suggestions);
    suggestionsList.splice(0, Infinity, ...suggestions);
    console.log("useSuggestionsFinder.getSuggestions.suggestionsList=", suggestionsList);
  }

  const getSuggestions = (partialTitle: string, maxOccurrences: number = 3): Array<string> => {
    console.log("useSuggestionsFinder.getSuggestions.suggestionsList=", suggestionsList);
    const result = suggestionsList.filter(e => e.toLowerCase().includes(partialTitle.toLowerCase()));
    return result.slice(0, maxOccurrences);
  };

  return {
    suggestionsList,
    setSuggestions,
    getSuggestions
  }
}
