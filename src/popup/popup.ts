interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form') as HTMLFormElement;
  const input = document.getElementById('search-input') as HTMLInputElement;
  const results = document.getElementById('search-result') as HTMLUListElement;

  const API_URL =
    import.meta.env.VITE_API_URL || 'https://beta.vanmaram.com/api';

  function clearResults() {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }
  }

  function createListItem(
    text: string,
    isLink = false,
    href = ''
  ): HTMLLIElement {
    const li = document.createElement('li');
    if (isLink) {
      const a = document.createElement('a');
      a.textContent = text;
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      li.appendChild(a);
    } else {
      li.textContent = text;
    }
    return li;
  }

  function displayResults(meanings: string[], sourceUrl?: string) {
    clearResults();

    meanings.forEach((meaning) => {
      results.appendChild(createListItem(meaning));
    });

    if (sourceUrl) {
      results.appendChild(createListItem('കൂടുതല്‍ >>', true, sourceUrl));
    }
  }

  function displayError(message: string) {
    clearResults();
    results.appendChild(createListItem(`Error: ${message}`));
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (!query) {
      clearResults();
      results.appendChild(createListItem('Please enter a search term.'));
      return;
    }

    const isEnglish = /^[a-zA-Z0-9\s]+$/.test(query);

    try {
      const response = await fetch(
        `${API_URL}/meaning/${isEnglish ? 'en' : 'ml'}/${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No meaning found for this word.');
        } else {
          throw new Error('Something went wrong. Please try again.');
        }
      }

      const data = await response.json();
      displayResults(data.meaning, data.source);
    } catch (error: any) {
      displayError(error.message);
    }
  });
});
