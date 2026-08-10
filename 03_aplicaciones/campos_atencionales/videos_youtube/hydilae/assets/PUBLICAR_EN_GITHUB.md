# Cómo publicar este proyecto como un repositorio nuevo en GitHub

Esta carpeta ya está inicializada como repositorio Git local sobre la rama `main`. Los PDF están excluidos mediante `.gitignore`.

## 1. Abrir PowerShell en la carpeta del proyecto

```powershell
Set-Location -LiteralPath 'C:\Users\rodri\OneDrive\Escritorio\video-5'
```

## 2. Revisar qué se publicará

```powershell
git status --short --ignored
```

Los documentos PDF deben aparecer con `!!`, lo que significa que Git los está ignorando.

También puede comprobarse la regla aplicada a un archivo concreto:

```powershell
git check-ignore -v -- EC06.pdf
```

Antes de continuar, conviene revisar que ningún documento contenga contraseñas, claves, tokens, datos personales o enlaces privados que no deban publicarse.

## 3. Preparar el primer commit

```powershell
git add .
git status --short
```

En esta segunda revisión no debe aparecer ningún PDF. Para realizar una comprobación adicional:

```powershell
git diff --cached --name-only
```

Crear el primer commit:

```powershell
git commit -m "Initial commit: estructura y materiales del video 5"
```

Si Git solicita configurar identidad, usar:

```powershell
git config --global user.name "TU NOMBRE"
git config --global user.email "TU_CORREO_ASOCIADO_A_GITHUB"
```

Después, repetir el comando `git commit`.

## 4. Crear el repositorio vacío en GitHub

1. Iniciar sesión en GitHub.
2. Abrir <https://github.com/new>.
3. Elegir el propietario y escribir un nombre, por ejemplo `video-5-traicion`.
4. Elegir visibilidad pública o privada.
5. No marcar las opciones para crear `README`, `.gitignore` o licencia, porque la carpeta local ya contiene los dos primeros y el repositorio debe crearse vacío.
6. Seleccionar **Create repository**.

## 5. Conectar el repositorio local con GitHub

Copiar la URL HTTPS mostrada por GitHub. Tendrá una forma similar a:

```text
https://github.com/USUARIO/video-5-traicion.git
```

Agregarla como remoto, sustituyendo la URL del ejemplo:

```powershell
git remote add origin https://github.com/USUARIO/video-5-traicion.git
git remote -v
```

Si se agregó una URL incorrecta, puede corregirse sin eliminar el repositorio:

```powershell
git remote set-url origin https://github.com/USUARIO/video-5-traicion.git
```

## 6. Subir la rama principal

```powershell
git push -u origin main
```

GitHub puede abrir una ventana del navegador o solicitar autenticación mediante el administrador de credenciales. Para operaciones HTTPS, no debe utilizarse la contraseña normal de GitHub como contraseña de Git; si el sistema solicita una credencial manual, debe emplearse un token de acceso personal.

## 7. Verificación final

Después de terminar la subida:

```powershell
git status
git remote -v
```

En GitHub, comprobar:

- que `README.md` aparece en la página principal;
- que la carpeta de materializaciones contiene los ocho movimientos;
- que no aparece ningún archivo `.pdf`;
- que la rama predeterminada es `main`;
- que la visibilidad del repositorio es la deseada.

## Flujo para cambios posteriores

```powershell
git add .
git commit -m "Describe aquí el cambio realizado"
git push
```

## Problema posible: `dubious ownership`

Si Git muestra un error de propiedad dudosa para esta carpeta, puede registrarse explícitamente como directorio seguro:

```powershell
git config --global --add safe.directory 'C:/Users/rodri/OneDrive/Escritorio/video-5'
```

Después debe repetirse el comando que produjo el error.

## Licencia

No se añadió una licencia automáticamente. Si el repositorio será público y se desea permitir que otras personas reutilicen el material, conviene elegir y añadir una licencia de forma consciente antes o después de publicarlo.
