# Detalles que enamoran · página web

Página web de **Detalles que enamoran**, decoración artesanal para celebraciones.
Claudia · +56 9 5656 9190 · silvaclauzv80@gmail.com

Es una web estática: no necesita servidor, ni programas, ni pagar mensualidades.
Se puede publicar gratis en GitHub Pages.

---

# PARTE 1 · Cómo subirla a internet (GitHub Pages)

Esto se hace **una sola vez**. Después, cada cambio se sube en dos clics.

Necesitas: un computador, un navegador y un correo electrónico. Nada más.

### Paso 1 · Crea tu cuenta de GitHub

1. Entra en **github.com**.
2. Pincha en **Sign up** (arriba a la derecha).
3. Pon tu correo, inventa una contraseña y elige un nombre de usuario.
   Ese nombre saldrá en la dirección de tu web, así que elige algo simple
   y sin tildes, por ejemplo `detallesqueenamoran`.
4. Confirma el correo que te llega.

### Paso 2 · Crea el repositorio (la "carpeta" de tu web)

1. Ya dentro de GitHub, pincha el botón verde **New** (o el `+` de arriba a la
   derecha → **New repository**).
2. En **Repository name** escribe: `detalles-que-enamoran`
3. Deja marcada la opción **Public**.
4. **No marques** ninguna de las casillas de abajo (README, .gitignore, license).
5. Pincha **Create repository**.

### Paso 3 · Sube los archivos

1. En la página que aparece, busca el enlace **uploading an existing file**
   (está en el texto del medio). Pínchalo.
2. Abre en tu computador la carpeta `detalles-que-enamoran` y **selecciona todo
   lo que hay dentro**: `index.html`, `README.md`, `MEDIA.md` y las carpetas
   `css`, `js` y `assets`.
3. Arrástralo todo a la zona que dice **Drag files here**.

   > Importante: tienes que arrastrar **el contenido** de la carpeta, no la
   > carpeta entera. Dentro de GitHub, el archivo `index.html` tiene que quedar
   > arriba del todo, no dentro de otra carpeta.

4. Espera a que termine de subir (sale una barrita de progreso).
5. Abajo pincha el botón verde **Commit changes**.

### Paso 4 · Enciende GitHub Pages

1. Arriba, en el menú del repositorio, pincha **Settings** (el engranaje).
2. En la columna de la izquierda, pincha **Pages**.
3. Donde dice **Source**, elige **Deploy from a branch**.
4. Justo debajo, en **Branch**, elige `main` y a la derecha deja `/ (root)`.
5. Pincha **Save**.

### Paso 5 · Espera y abre tu web

Espera **entre 1 y 3 minutos**. Recarga la página de *Settings → Pages* y
aparecerá arriba un recuadro con tu dirección, algo así:

```
https://detallesqueenamoran.github.io/detalles-que-enamoran/
```

Esa es tu web. Ya está publicada y la puedes pegar en tu Instagram, en tu estado
de WhatsApp o donde quieras.

### Paso 6 (recomendado) · Pon tu dirección en el archivo

Para que al compartir el enlace salga bonito con foto y título:

1. En GitHub, pincha el archivo `index.html`.
2. Pincha el lápiz ✏️ de arriba a la derecha.
3. Busca las dos líneas que tienen el comentario `TU DIRECCIÓN`.
4. En la que dice `og:url`, escribe tu dirección completa entre las comillas:
   `content="https://detallesqueenamoran.github.io/detalles-que-enamoran/"`
5. En la que dice `og:image`, pon tu dirección completa **más** la ruta de la
   imagen: `content="https://detallesqueenamoran.github.io/detalles-que-enamoran/assets/img/og-portada.svg"`
6. Baja del todo y pincha **Commit changes**.

---

# PARTE 2 · Cómo cambiar cosas tú misma

Todos los cambios se hacen igual: entras a GitHub, abres el archivo, pinchas el
lápiz ✏️, cambias lo que quieras y pinchas **Commit changes**. En un minuto se ve
actualizado en la web.

> **Truco:** antes de guardar, lee lo que escribiste. Si borras sin querer una
> coma o una comilla, esa parte de la web puede dejar de verse. Si pasa, no te
> asustes: en GitHub puedes volver atrás desde la pestaña **Commits**.

---

## A · Cambiar un texto de la página

Casi todos los textos (la portada, "Cómo trabajo", "Sobre mí", las preguntas
frecuentes) están en el archivo **`index.html`**.

1. En GitHub pincha `index.html` y luego el lápiz ✏️.
2. Usa `Ctrl + F` (o `Cmd + F` en Mac) para buscar el texto que quieres cambiar.
3. Cambia **solo** las palabras. No toques nada que esté entre `<` y `>`.

**Ejemplo.** Si quieres cambiar esta frase:

```html
<h3>Me escribes</h3>
```

lo único que se toca es lo del medio:

```html
<h3>Me mandas un mensajito</h3>
```

Los textos de las **tarjetas de ocasiones** y los **testimonios** no están aquí,
están en `js/galeria.js` (más abajo se explica).

---

## B · Añadir una foto nueva a la galería

Son dos pasos: subir la foto y luego decirle a la web que existe.

### B.1 · Subir la foto

1. Antes de nada, ponle un nombre correcto al archivo en tu computador:
   **todo en minúsculas, sin tildes, sin ñ y sin espacios**.
   Por ejemplo: `bautizo-celeste-marzo.jpg`
2. En GitHub, entra a la carpeta `assets` y luego a `img`.
3. Arriba a la derecha pincha **Add file** → **Upload files**.
4. Arrastra tu foto y pincha **Commit changes**.

### B.2 · Decirle a la web que existe

1. Vuelve al inicio del repositorio y entra en la carpeta `js`.
2. Pincha `galeria.js` y luego el lápiz ✏️.
3. Baja hasta donde dice `window.GALERIA = [`.
4. Copia uno de los bloques que ya hay (**desde la llave `{` hasta la `},`**) y
   pégalo justo debajo.
5. Cambia los datos de tu copia:

```js
  {
    tipo: 'foto',
    archivo: 'assets/img/bautizo-celeste-marzo.jpg',
    ocasion: 'bautizos',
    titulo: 'Bautizo en celeste',
    alt: 'Arco de globos celestes y blancos junto a una mesa con una cruz de flores.',
    alto: 'normal'
  },
```

Qué significa cada línea:

| Línea | Qué poner |
|---|---|
| `tipo` | `'foto'` si es una foto, `'video'` si es un vídeo |
| `archivo` | `assets/img/` + el nombre exacto de tu archivo |
| `ocasion` | Una de estas: `cumpleanos`, `graduaciones`, `san-valentin`, `dia-de-la-madre`, `dia-del-padre`, `aniversarios`, `jubilaciones`, `baby-shower`, `bautizos`, `empresa` |
| `titulo` | Un título corto que se ve encima de la foto |
| `alt` | Una descripción de lo que se ve. **Es obligatoria**: la leen las personas ciegas y también Google |
| `alto` | `'normal'` o `'alta'`. Las `'alta'` salen más grandes en el mosaico. Usa `'alta'` solo en tus 2 o 3 mejores fotos |

6. Revisa que no te falte ninguna coma y pincha **Commit changes**.

### Para añadir un **vídeo** es igual, con dos diferencias

- El archivo se sube a `assets/video/` en vez de a `assets/img/`.
- En el bloque pones `tipo: 'video'` y `archivo: 'assets/video/loquesea.mp4'`.

---

## C · Cambiar una foto que ya está (lo más fácil)

Si quieres reemplazar una foto por otra mejor:

1. En tu computador, renombra la foto nueva **con el mismo nombre exacto** que la
   vieja (por ejemplo `deco-titulacion-ufro.jpg`).
2. En GitHub entra a `assets/img/`, pincha **Add file → Upload files**, arrastra
   la foto nueva y pincha **Commit changes**.
3. Listo. GitHub reemplaza la vieja y **no hay que tocar nada más**.

Si en la web sigues viendo la foto vieja, es tu navegador que la tenía guardada:
recarga con `Ctrl + Shift + R`.

---

## D · Cambiar las imágenes de muestra de "Ocasiones"

Siete tarjetas de la sección "Ocasiones" (Día de la Madre, Día del Padre,
aniversarios, jubilaciones, baby shower, bautizos y empresa) llevan **imágenes
de muestra generadas por ordenador**, no montajes reales tuyos. Conviene
cambiarlas por fotos de verdad en cuanto las tengas.

Es el caso más fácil de todos:

1. Ponle a tu foto **exactamente el mismo nombre** que la que quieres sustituir,
   por ejemplo `ocasion-bautizo.jpg` (la lista completa está en `MEDIA.md`).
2. En GitHub entra a `assets/img/`, pincha **Add file → Upload files**, arrastra
   la foto y pincha **Commit changes**.
3. Listo. **No hay que tocar ningún código.**

Aprovecha y mejora también la descripción: abre `js/galeria.js`, busca esa
ocasión y cambia su línea `alt:` para que describa tu foto de verdad.

---

## E · Cambiar los testimonios

Ahora hay tres testimonios a nombre de **Made, Pilar y María**.

> ⚠️ **La redacción está escrita por encargo, no copiada de un mensaje real.**
> Antes de enseñar la web por ahí, pásaselos a ellas y déjalos con las palabras
> que usaron de verdad. Un testimonio real siempre convence más que uno
> bien escrito, y además evita malentendidos.

Para cambiarlos:

1. Abre `js/galeria.js` y baja hasta `window.TESTIMONIOS = [`.
2. En cada bloque cambia el `texto`, la `autora` y el `detalle`.

```js
  {
    texto: 'Quedó todo precioso, mi mamá lloró cuando entró al living.',
    autora: 'Camila R.',
    detalle: 'Día de la Madre · Temuco'
  },
```

Si prefieres no mostrar testimonios todavía, borra los tres bloques enteros y la
sección desaparece sola de la web.

---

## F · Cambiar el teléfono o el correo

Están en **un solo sitio** y desde ahí se actualizan en toda la web (botones,
formulario, pie de página y ficha de Google).

1. Abre `js/galeria.js`.
2. Arriba del todo, en `window.CONTACTO`, cambia lo que necesites:

```js
  telefonoVisible: '+56 9 5656 9190',   // como se LEE en la web
  telefonoEnlace: '+56956569190',       // el mismo, sin espacios
  whatsapp: '56956569190',              // el mismo, sin + y sin espacios
  correo: 'silvaclauzv80@gmail.com',
```

Las tres líneas del teléfono tienen que llevar **el mismo número**, solo cambia
cómo está escrito.

---

## G · Cambiar los colores del fondo

1. Abre `css/styles.css` con el lápiz ✏️.
2. Arriba del todo hay un bloque que dice `COLORES`. Cambia los códigos que
   empiezan por `#`:

```css
  --terracota:      #B4593A;   /* botones y acentos */
  --rosa:           #E3AFAC;   /* rosa empolvado */
  --crema:          #FDF2E4;   /* fondo principal de la web */
  --durazno:        #FCE6DC;   /* fondo de las secciones alternas y del pie */
  --dorado:         #C99A46;   /* acento dorado */
```

El fondo lleva además unas manchas de color muy suaves en las esquinas para que
no se vea plano. Si lo prefieres liso, busca en `css/styles.css` el bloque `body`
y borra las líneas que empiezan por `background-image:` y `background-attachment:`,
dejando solo `background-color: var(--crema);`.

Para buscar códigos de colores puedes usar **coolors.co** o buscar en Google
"selector de color" y copiar el código que empieza con `#`.

---

## H · Quitar una foto o una sección

- **Quitar una foto de la galería:** en `js/galeria.js`, borra su bloque entero
  (desde la `{` hasta la `},` incluidas).
- **Quitar una ocasión:** igual, pero en la lista `window.OCASIONES`.
  Ojo: si borras una ocasión, borra también las fotos que la tenían asignada.
- **Quitar una pregunta frecuente:** en `index.html`, borra el bloque completo
  desde `<details class="faq__item reveal">` hasta `</details>`.

---

# PARTE 3 · Cosas útiles que conviene saber

### Ver la web en tu computador antes de subir nada

Haz doble clic en `index.html`. Se abre en el navegador y funciona igual que
publicada. Es la forma más segura de probar un cambio.

### Cómo está organizada la carpeta

```
detalles-que-enamoran/
├── index.html          ← todos los textos de la página
├── css/styles.css      ← los colores y el diseño
├── js/galeria.js       ← FOTOS, VÍDEOS, CONTACTO Y TESTIMONIOS (lo que más se toca)
├── js/main.js          ← el funcionamiento. Mejor no tocarlo
├── assets/img/         ← las fotos
├── assets/video/       ← los vídeos
├── MEDIA.md            ← la lista de fotos que faltan y sus tamaños
└── README.md           ← este archivo
```

### Qué hace el formulario de contacto

**No manda correos.** Cuando alguien lo rellena y le da al botón, se le abre su
propio WhatsApp con el mensaje ya escrito y tu número puesto. Solo tiene que darle
a enviar. Así te llega directo al teléfono y puedes responder al tiro.

### Si algo se rompe

En GitHub, entra a la pestaña **Commits** (arriba, donde sale el reloj con el
número de cambios). Ahí está el historial completo. Puedes ver qué cambió cada vez
y volver a una versión anterior.

### Detalles técnicos (por si alguien te ayuda con esto)

- HTML, CSS y JavaScript puros. Sin frameworks, sin `npm install`, sin compilar.
- Todas las rutas son relativas, así que funciona igual en la raíz de un dominio
  o dentro de un subdirectorio de GitHub Pages.
- Diseñada primero para móvil. Probada a 360, 768 y 1440 píxeles de ancho.
- Imágenes con `loading="lazy"`, vídeos sin descargar hasta que se piden,
  tipografías con `display=swap`.
- Incluye `meta description`, Open Graph, favicon y datos estructurados
  JSON-LD de tipo `LocalBusiness`.
- Accesibilidad: textos alternativos en todas las imágenes, navegación completa
  por teclado, foco visible, contraste comprobado y respeto por la opción
  "reducir movimiento" del sistema.
