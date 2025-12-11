// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const trimmyNeutron = title.trim()
  const bannedCharacters = ["!", "#", "?"]

  for (let char of bannedCharacters) {
    if (trimmyNeutron.includes(char)) {
      return null
    }
  }
  const lowerCaseTitle = trimmyNeutron.toLowerCase()
  const slug = lowerCaseTitle.split(" ").join("-")
  return slug
};

module.exports = {
  createSlug,
};
