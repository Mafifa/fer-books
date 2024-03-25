function checkIsNavigationSupported () {
  return Boolean(document.startViewTransition);
}

async function fetchPage (url) {
  // Cargamos la página de destino usando fetch para obtener el HTML
  const response = await fetch(url);
  const text = await response.text();
  // Extraemos el contenido de la etiqueta HTML dentro de la etiqueta body usando regex
  const [, data] = text.match(/<body[^>]*>([\s\S]*)<\/body>/i) ?? ['', ''];
  return data;
}

export function startViewTransition () {
  if (!checkIsNavigationSupported()) {
    return; // No hace nada si la navegación no es compatible
  }

  window.navigation.addEventListener('navigate', async (event) => {
    const toURL = new URL(event.destination.url);
    // ¿Es una página externa?
    if (location.origin !== toURL.origin) {
      return;
    }

    // Si no es una página externa, interceptamos la navegación y cargamos la nueva página
    event.intercept({
      async handler () {
        const data = await fetchPage(toURL.href);

        // Utilizamos la API de View Transition
        document.startViewTransition(() => {
          // Actualizamos la vista con el nuevo contenido
          document.body.innerHTML = data;
          document.documentElement.scrollTop = 0; // Volvemos al principio de la página
        });
      }
    });
  });
}
