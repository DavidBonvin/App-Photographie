# Vercel Deployment Configuration

## ⚠️ IMPORTANTE: Configuración de Branch

**El proyecto DEBE desplegarse desde la rama `main`, NO desde `gh-pages`**

### 📋 Pasos para configurar en Vercel:

1. **Ir a Vercel Dashboard**
   - Visita: https://vercel.com/dashboard
   - Selecciona tu proyecto o importa el repositorio

2. **Configurar la rama correcta:**
   - Ve a Settings → Git
   - Cambia "Production Branch" de `gh-pages` a `main`
   - Guarda los cambios

3. **Variables de entorno (opcional):**
   ```
   VERCEL=true
   NODE_ENV=production
   ```

4. **Configuración de Build:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## 🔧 Troubleshooting

### Error: "vite: command not found"
- Solución: El proyecto usa `npx vite build` en lugar de `vite build`
- El `package.json` ya está configurado correctamente

### Error: "Building from gh-pages branch"
- Problema: Vercel está usando la rama incorrecta
- Solución: Cambiar en Vercel Settings → Git → Production Branch: `main`

### Error: "Module not found"
- Solución: Ejecutar `npm install` completamente
- Asegurar que todas las dependencias están en `package.json`

## 🚀 Performance Optimizations

- Automatic HTTPS
- Edge Network CDN  
- Image Optimization
- Gzip/Brotli Compression
- Cache Headers for Assets
- Manual chunk splitting for better caching

## 📊 Expected Build Output

```
✓ 268 modules transformed.
dist/assets/vendor-*.js        11.60 kB │ gzip: 4.08 kB
dist/assets/ionic-*.js        567.95 kB │ gzip: 128.18 kB
dist/assets/index-*.js        241.50 kB │ gzip: 76.12 kB
dist/assets/index-*.css        85.42 kB │ gzip: 14.08 kB
dist/index.html                 6.47 kB │ gzip: 2.25 kB
```