function checkIsNavigationSupported () {
  return Boolean(document.startViewTransition);
}

async function fetchPage (url) {
  const response = await fetch(url);
  const text = await response.text();
  const data = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
  return data;
}

export function startViewTransition () {
  if (!checkIsNavigationSupported()) {
    return; // No hace nada si la navegación no es compatible
  }

  window.navigation.addEventListener('navigate', async (event) => {
    const toURL = new URL(event.destination.url);
    if (location.origin !== toURL.origin) {
      return;
    }

    event.intercept({
      async handler () {
        const data = await fetchPage(toURL.href);

        document.startViewTransition(() => {
          document.body.innerHTML = data;
          document.documentElement.scrollTop = 0; // Volvemos al principio de la página
        });
      }
    });
  });
}
