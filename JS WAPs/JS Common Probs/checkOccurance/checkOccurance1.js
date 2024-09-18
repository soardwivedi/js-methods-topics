function countCharacterOccurrences(str) {
    const charCounts = str.split('').reduce((counts, char) => {
      counts[char] = (counts[char] || 0) + 1;
      return counts;
    }, {});
  
    for (let char in charCounts) {
      console.log(`Character '${char}' occurs ${charCounts[char]} time(s)`);
    }
  }
  
  // Example usage
  const string = "Hello, World!";
  countCharacterOccurrences(string);