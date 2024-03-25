function checkIsNavigationSupported (): boolean {
  return Boolean(document.startViewTransition)
}

async function fetchPage (url: string): Promise<string> {
  // vamos a cargar la pagia de destino
  // usamos un fetch para obtener el HTML
  const response = await fetch(url)
  const text = await response.text()
  // quedarnos con el contenido de la etiqueta HTML dentro de la etiqueta body
  // usamos regex para extraerlo
  const [, data] = text.match(/<body[^>]*>([\s\S]*)<\/body>/i) ?? ''
  return data
}

export function startViewTransition (): void {
  if (!checkIsNavigationSupported()) {
    return // Para que no retorne nada
  }

  window.navigation.addEventListener('navigate', (event) => {
    const toURL = new URL(event.destination.url)
    // Es una pagina externa?
    if (location.origin !== toURL.origin) {
      return
    }

    // Si no es una pagina externa
    event.intercept({
      async handler () {
        const data = await fetchPage(toURL.pathname)

        // Utilizar la API the view Transition API
        document.startViewTransition(() => {
          // Como tiene que actualizar la vista
          document.body.innerHTML = data
          document.documentElement.scrollTop = 0
        })
      }
    })
  })
}
