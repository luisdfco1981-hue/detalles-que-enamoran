# Fotos y vídeos de la web

Esta es la lista de todo el material que usa la página, con el nombre exacto que
tiene que tener cada archivo, para qué sirve y qué tamaño conviene.

**Regla de oro:** si mandas una foto nueva con **exactamente el mismo nombre** que
la que quieres reemplazar, la web se actualiza sola y no hay que tocar nada más.

Todas las fotos van dentro de la carpeta `assets/img/`
y todos los vídeos dentro de `assets/video/`.

---

## Cómo se leen los tamaños

- **Proporción** es la *forma* de la foto: si es más alta que ancha, cuadrada, etc.
  - **4:5** → vertical, la típica del Instagram.
  - **3:4** → vertical un poco menos alargada.
  - **9:16** → vertical entera, como un estado de WhatsApp.
  - **3:2** → horizontal, como una foto normal del celular acostado.
- **Tamaño recomendado** son los puntos de ancho y alto. Cualquier foto que saques
  con el celular ya es más grande que eso, así que sirve perfecto.
- **Peso**: intenta que cada foto no pase de **400 KB** y cada vídeo de **5 MB**,
  para que la página cargue rápido en datos móviles.

---

## 1. Fotos que ya están puestas

Estas son las que mandaste. Si algún día tienes una mejor, mándala con el mismo
nombre y listo.

| Archivo | Dónde sale | Proporción | Tamaño recomendado |
|---|---|---|---|
| `deco-corazon-san-valentin.jpg` | Portada (foto grande) + galería | 9:16 vertical | 1080 × 1920 |
| `deco-titulacion-ufro.jpg` | Portada (foto chica) + galería + tarjeta "Graduaciones" | 4:5 vertical | 1080 × 1350 |
| `deco-graduacion-negro-dorado.jpg` | Portada (foto chica) + galería | 9:16 vertical | 1080 × 1920 |
| `deco-negro-dorado-plata.jpg` | Galería | 9:16 vertical | 1080 × 1920 |
| `deco-cumpleanos-dorado-mesa.jpg` | Sección "Sobre mí" + galería + tarjeta "Cumpleaños" | 4:5 vertical | 1080 × 1350 |
| `deco-cumpleanos-futbol.jpg` | Galería | 9:16 vertical | 1080 × 1920 |

> **Nota sobre `deco-cumpleanos-futbol.jpg`:** la que mandaste es una captura de
> pantalla y trae encima la marca de agua de la cámara y el adhesivo de la música.
> Si tienes la foto original sin esos textos encima, cámbiala: se verá bastante mejor.

---

## 2. Vídeos que ya están puestos

| Archivo | Dónde sale | Proporción | Tamaño recomendado |
|---|---|---|---|
| `deco-video-1.mp4` | Galería | 9:16 vertical | 1080 × 1920, máx. 30 segundos |
| `deco-video-2.mp4` | Galería | 9:16 vertical | 1080 × 1920, máx. 30 segundos |
| `deco-video-3.mp4` | Galería | 9:16 vertical | 1080 × 1920, máx. 30 segundos |

Los tres vídeos actuales vienen de WhatsApp y por eso se ven un poco borrosos
(WhatsApp los achica mucho al enviarlos). **Si todavía tienes los originales en el
celular, pásalos por Google Drive, WeTransfer o correo en vez de por WhatsApp**
y se verán muchísimo mejor.

Los vídeos **no necesitan** una imagen de portada: la página muestra sola el primer
segundo del vídeo. Si aun así quieres elegir tú qué fotograma se ve antes de darle
al play, guarda una foto con el mismo nombre acabada en `-poster.jpg`
(por ejemplo `deco-video-1-poster.jpg`) y avísale a quien te lleve la web para que
la añada en `js/galeria.js`.

También conviene:
- Grabar **sujetando el celular en vertical** (así se ve a pantalla completa).
- Que duren **entre 8 y 20 segundos**. Más largo, la gente no lo termina.
- Sin música: en la web los vídeos empiezan siempre en silencio.

---

## 3. Tarjetas de "Ocasiones" · imágenes de muestra pendientes de sustituir

Las siete tarjetas de abajo llevan **imágenes generadas por ordenador**, no fotos
de montajes reales tuyos. Están puestas para que la web se vea completa mientras
juntas fotos de verdad de esas celebraciones.

> ⚠️ **Esto conviene cambiarlo cuanto antes.** Una clienta que vea la tarjeta de
> "Bautizos" va a dar por hecho que ese montaje lo hiciste tú. En cuanto tengas
> una foto real de cada tipo de celebración, súbela con el mismo nombre de
> archivo y la muestra desaparece sola.

Todas van en **proporción 4:5 vertical, 1080 × 1350**.

| Archivo a sustituir | Tarjeta | Qué foto tuya iría bien |
|---|---|---|
| `ocasion-dia-de-la-madre.jpg` | Día de la Madre | Montaje en rosas, con torta o flores |
| `ocasion-dia-del-padre.jpg` | Día del Padre | Montaje en azul y dorado |
| `ocasion-aniversario.jpg` | Aniversarios | Montaje en rojos, con velas |
| `ocasion-jubilacion.jpg` | Jubilaciones | Montaje en negro, dorado y plata |
| `ocasion-baby-shower.jpg` | Baby shower y revelación | Montaje en rosa y celeste |
| `ocasion-bautizo.jpg` | Bautizos y primeras comuniones | Montaje en celeste y crema, con cruz |
| `ocasion-empresa.jpg` | Eventos de empresa | Montaje sobrio con los colores de la empresa |

Como los nombres de archivo ya coinciden, **basta con subir tu foto encima**:
no hay que tocar ningún código.

### Y la galería, ¿cómo va?

La sección "Mira lo que hemos armado" solo tiene fotos y vídeos **reales tuyos**
(9 en total) y así debería seguir. No metas ahí las imágenes de muestra: esa
sección es la prueba de tu trabajo y es la que mira la gente antes de escribirte.

Cuando montes algo nuevo, sácale foto y añádelo siguiendo el apartado B del README.

---

## 4. Foto para cuando compartes el enlace

| Archivo | Para qué | Proporción | Tamaño recomendado |
|---|---|---|---|
| `og-portada.jpg` | La imagen que aparece cuando pegas el enlace de tu web en WhatsApp, Instagram o Facebook | 1.91:1 horizontal | 1200 × 630 |

Ahora mismo hay un dibujo provisional (`og-portada.svg`). Lo ideal es una foto
horizontal de tu mejor montaje, porque es lo primero que ve la gente antes de
entrar. Cuando la tengas, se cambia en el archivo `index.html` (una línea marcada
con el comentario `TU DIRECCIÓN`).

---

## 5. Consejos rápidos para que las fotos queden bien

1. **Foto vertical y con luz.** De día y con la luz natural entrando, sin flash.
2. **Limpia el fondo.** Saca las bolsas, las sillas de más y los cables del suelo
   antes de disparar. Es lo que más diferencia hace.
3. **Un paso atrás.** Que se vea el montaje completo, no solo un trozo.
4. **Saca varias del mismo montaje**: una entera, una del detalle y un vídeo corto.
5. **Sin marcas de agua ni adhesivos** de la aplicación de la cámara.
6. **No pases las fotos por WhatsApp** si puedes evitarlo: las achica y pierden
   calidad. Mejor por Drive, WeTransfer o correo.

---

## 6. Nombres de archivo: lo que sí y lo que no

Los nombres tienen que ir **en minúsculas, sin tildes, sin ñ y sin espacios**.
Usa guiones para separar las palabras.

- Bien: `ocasion-bautizo.jpg`, `deco-cumpleanos-futbol.jpg`
- Mal: `Ocasión Bautizo.JPG`, `foto cumpleaños (1).jpg`, `IMG_20250412.jpg`
