document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form') as HTMLFormElement;
  const input = document.getElementById('search-input') as HTMLInputElement;
  const results = document.getElementById('search-result') as HTMLUListElement;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
      results.innerHTML = '<li>Please enter a search term.</li>';
      return;
    }
    const isEnglish = /^[a-zA-Z0-9\s]+$/.test(query);

    try {
      const response = await fetch(
        `https://beta.vanmaram.com/api/meaning/${isEnglish ? 'en' : 'ml'}/${encodeURIComponent(query)}`
      );
      console.log(response);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No meaning found for this word.');
        } else {
          throw new Error('Something went wrong. Please try again.');
        }
      }

      const data = await response.json();

      results.innerHTML = [
        ...data.meaning.map((meaning: string) => `<li>${meaning}</li>`),
        `<li><a href="${data.source}" target="_blank" rel="noopener noreferrer">കൂടുതല്‍ &gt;&gt;</a></li>`,
      ].join('');
    } catch (error: any) {
      results.innerHTML = `<li>Error: ${error.message}</li>`;
    }
  });
});
