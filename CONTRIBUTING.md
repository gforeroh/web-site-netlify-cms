# CONTRIBUYENDO

Las contribuciones son siempre bienvenidas, no importa cuán grandes o pequeñas sean. Antes de contribuir,
lea el [código de conducta] (CODE_OF_CONDUCT.md).

## Preparar

> Instale hilo en su sistema: [https://yarnpkg.com/en/docs/installfont>(https://yarnpkg.com/en/docs/install)

### Instalar dependencias

> Solo se requiere en la primera ejecución, las siguientes ejecuciones pueden usar 'hilo' para ambos
arranque y ejecute el servidor de desarrollo usando `yarn desarrollo`.
Dado que este iniciador que usa [netlify-dev] (https://www.netlify.com/products/dev/#how-it-works), podría haber más problemas, consulte el [netlify-dev] (https : //github.com/netlify/netlify-dev) para obtener más información y configurar preguntas.

`` sh
$ git clone https://github.com/netlify-templates/gatsby-starter-netlify-cms
$ hilo
`` `

## Scripts disponibles


### `build`

Construya los archivos estáticos en la carpeta `public`, convierte las funciones lambda en un formulario desplegable.

#### Uso

`` sh
$ construcción de hilo
`` `

### `limpio`

Ejecuta el comando `gatsby clean`.

#### Uso

`` sh
hilo limpio
`` `

### `netlify dev`

Inicia el entorno de desarrollo de netlify, incluido el entorno de desarrollo de gatsby.
Para obtener más información, consulte los [Netlify Dev Docs] (https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)

`` sh
netlify dev
`` `

### `desarrollo` o` inicio`

Ejecuta el script `clean` e inicia el servidor de desarrollo gatsby usando el comando` gatsby desarrollo`. Recomendamos usar este comando cuando no necesite funciones específicas de Netlify

#### Uso

`` sh
desarrollar hilo
`` `
### `prueba`

Aún no está implícito

#### Uso

`` sh
prueba de hilo
`` `

### `formato`

Formatea el código y los documentos de acuerdo con nuestras pautas de estilo usando `prettier`

#### Uso

`` sh
formato de hilo
`` `


## Solicitudes de extracción

¡Recibimos activamente sus solicitudes de extracción!

Si necesita ayuda con Git o nuestro flujo de trabajo, consulte [Gitter.im] (https://gitter.im/netlify/NetlifyCMS). Queremos sus contribuciones incluso si solo está aprendiendo Git. ¡Nuestros mantenedores están felices de ayudar!

Netlify CMS utiliza el [Flujo de trabajo de bifurcación] (https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) + [Ramas de funciones] (https://www.atlassian.com/git/tutorials / comparating-workflows / feature-branch-workflow). Además, las relaciones públicas se deben [rebase] (https://www.atlassian.com/git/tutorials/merging-vs-rebasing) en master cuando se abre, y nuevamente antes de fusionar.

1. Bifurca el repositorio.
2. Cree una rama desde `master`. Si está abordando un problema específico, prefije el nombre de su sucursal con el número del problema.
2. Si ha agregado código que debería probarse, agregue pruebas.
3. Si ha cambiado las API, actualice la documentación.
4. Ejecute la 'prueba de hilo' y asegúrese de que el conjunto de pruebas pase. (No aplicable todavía)
5. Use `yarn format` para formatear y unir su código.
6. Las relaciones públicas deben ser modificadas antes de fusionarse (no dude en pedir ayuda).
7. Las relaciones públicas deben ser revisadas por dos mantenedores antes de la fusión.

## Licencia

Al contribuir al iniciador de Gatsby - Netlify CMS, acepta que sus contribuciones tendrán licencia
bajo su [licencia MIT] (LICENCIA).