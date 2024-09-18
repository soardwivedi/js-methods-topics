
function countOccurrences(str) {
  if (str.length === 0) {
    console.log("Invalid string");
    return;
  }

  const charCounts = str.split('').reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});

  for (let char in charCounts) {
    console.log(`${char} occurs ${charCounts[char]} times`);
  }
}

// Example usage
const test_str = "gfghello";
countOccurrences(test_str);