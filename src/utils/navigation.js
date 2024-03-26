function checkIsNavigationSupported () {
  return Boolean(document.startViewTransition);
}

async function fetchPage (url) {
  const response = await fetch(url);
  const text = await response.text();
  return text; // Devolver el contenido completo de la página
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
          // Reemplazar solo el contenido del cuerpo
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = data;
          const newBodyContent = tempDiv.querySelector('body').innerHTML;
          document.body.innerHTML = newBodyContent;

          // También podrías considerar mover otros elementos importantes, como scripts y estilos
          // Pero asegúrate de manejar adecuadamente cualquier evento asociado a estos elementos

          document.documentElement.scrollTop = 0; // Volvemos al principio de la página
        });
      }
    });
  });
}
