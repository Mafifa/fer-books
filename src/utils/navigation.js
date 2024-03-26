function checkIsNavigationSupported () {
  return Boolean(document.startViewTransition);
}

async function fetchPage (url) {
  const response = await fetch(url);
  const text = await response.text();
  return text;
}

export function startViewTransition () {
  if (!checkIsNavigationSupported()) {
    return;
  }

  window.navigation.addEventListener('navigate', async (event) => {
    const toURL = new URL(event.destination.url);
    if (location.origin !== toURL.origin) {
      return;
    }

    event.intercept({
      async handler () {
        const data = await fetchPage(toURL.href);

        // Inicia la transición
        document.startViewTransition();

        // Reemplaza el contenido del cuerpo después de que la transición haya comenzado
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        const newBodyContent = tempDiv.querySelector('body').innerHTML;
        document.body.innerHTML = newBodyContent;

        // Finaliza la transición después de actualizar el contenido
        document.endViewTransition();

        // Ajusta el desplazamiento de la página
        document.documentElement.scrollTop = 0;
      }
    });
  });
}
