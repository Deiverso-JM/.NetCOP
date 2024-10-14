# .NetCOP

Este repositorio aloja el blog .netCOP el cual tiene como objetivo formar una comunidad colombiana o global compartiendo diferentes documentos con informacion de utilidad

## 🛠️ Tools

- <img src="https://nextjs.org/static/favicon/favicon.ico" alt="Next.js" width="20" height="20"> Next.js
- <img src="https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20161105/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png" alt="ShadCN" width="20" height="20"> ShadCN
- <img src="https://reactrouter.com/favicon.ico" alt="React Router" width="20" height="20"> React Router
- <img src="https://cdn-icons-png.flaticon.com/512/17134/17134132.png" alt="Yup" width="20" height="20"> Yup

## 📂 Estructura del Proyecto

```
📦 App
├─📂 node_modules
├─📂 .next
├─📂 src
    ├── 📂 app
    ├── 📂 components
    ├── 📂 lib
├─📜 _.eslintrc.json
├─📜 _.gitignore
├─📜 _components.json
├─📜 _next-env.d.ts
├─📜 _next.config.mjs
├─📜 _package-lock.jsons
├─📜 _package.json
├─📜 _postcss.config.mjs
├─📜 _tailwind.config.ts
├─📜 tsconfig.json
```

## 📖 Convenciones

### Guía de Conventional Commits

Los **Conventional Commits** son una convención para escribir mensajes de commit que facilitan la comprensión del historial del proyecto. Utilizar esta convención ayuda a los desarrolladores a entender rápidamente qué cambios se han realizado y por qué. A continuación se presentan las principales reglas:

#### Estructura del Mensaje de Commit

Cada mensaje de commit debe tener la siguiente estructura:

- **tipo**: El tipo de cambio que se está realizando. Ejemplos comunes incluyen:

  - `feat`: Una nueva funcionalidad
  - `fix`: Corrección de un bug
  - `docs`: Cambios en la documentación
  - `style`: Cambios que no afectan el significado del código (espacios en blanco, formato, etc.)
  - `refactor`: Cambios en el código que no añaden funcionalidad ni corrigen bugs
  - `test`: Añadir pruebas faltantes o corregir pruebas existentes
  - `chore`: Cambios en el proceso de construcción o herramientas auxiliares

- **alcance**: (opcional) Un contexto que indica qué parte del código afecta el cambio. Por ejemplo: `ui`, `api`, `build`.
- **descripción**: Una breve descripción del cambio. Se recomienda que sea en tiempo presente y en imperativo. Ejemplo: "Añadir botón de inicio de sesión".

### 🌿 Estructura de Ramas

Las ramas deben seguir la siguiente convención de nomenclatura:

- **NombreGithubUsuario**: Tu nombre de usuario en GitHub.
- **tipo**: El tipo de cambio que estás realizando (ejemplo: `feature`, `bug`, `etc`).
- **codigotarea**: Código o nombre del área relacionada con el cambio.
- **titulo-de-la-rama**: Breve descripción de la tarea en minúsculas y palabras separadas por guiones.

#### Ejemplo de Nombres de Ramas

- `juanperez/feature/4343/login-button`
- `maria123/fix/3213/api-endpoint`
- `alexgarcia/bug/3421/authentication-error`

## 🚀 Getting Started Project

Para comenzar a trabajar en el proyecto .NetCOP, sigue estos pasos:

1. **Clona el repositorio** a partir de la rama `main`:

   ```bash
   git clone https://github.com/{NombreGithubUsuario}/.NetCOP.git
   ```

2. **Cambia al directorio del proyecto**:

   ```
   cd .NetCOP
   ```

3. **Instala las dependencias**:

   ```
   npm ci
   ```

4. **Corre el proyecto**:

   ```
   npm run dev
   ```

## 🔄 Flujo de Trabajo

1. **🗂️ Revisar las Issues** disponibles.

2. **📋 Tomar una** según su criterio.

3. **🌳 Crear la rama** con su convención.

4. **🔄 Montar pull request** con etiqueta.

5. **📝 Documentar el pull request**.

6. **👀 Esperar revisión**.
