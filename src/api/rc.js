const base_url = "https://api.dictionaryapi.dev/api/v2/entries";

export default (word, language = "en") => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`http://localhost:9000/dictionary?lan=${language}&txt=${word}`)
        .then((r) => r.json())
        .then((r) => resolve(r));
    } catch (e) {
      reject(e);
    }
  });
};
