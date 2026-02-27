# TalkScript 📚

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)](LICENSE)

**TalkScript** es una guía interactiva para aprender inglés desde cero diseñada específicamente para desarrolladores y personas familiarizadas con programación. Utilizamos metáforas de JavaScript para explicar conceptos gramaticales del inglés, haciendo que el aprendizaje sea más intuitivo y visual para quienes ya piensan en código.

> 💡 **Nota importante**: Los ejemplos de código JavaScript en este proyecto son **representaciones visuales** de patrones gramaticales, no código funcional ejecutable. El objetivo es aprovechar estructuras familiares (objetos, arrays, funciones) para visualizar y comprender mejor las reglas del inglés.

## 🎯 Características

- **Aprendizaje progresivo**: Contenido organizado según el Marco Común Europeo de Referencia (CEFR) desde A1 hasta C2
- **Metáforas de código**: Explicaciones gramaticales usando conceptos de JavaScript que ya conoces
- **Contenido en español**: Todo el contenido educativo está en español para hispanohablantes
- **Interfaz moderna**: Diseño limpio y responsive con modo claro/oscuro
- **Ejemplos prácticos**: Cada concepto incluye ejemplos del mundo real con traducciones

## 🛠️ Tecnologías

- **[Astro](https://astro.build)** - Framework web moderno y rápido
- **[Starlight](https://starlight.astro.build)** - Framework de documentación para Astro
- **[Tailwind CSS](https://tailwindcss.com)** - Framework de CSS utility-first
- **[Ion Theme](https://louisescher.github.io/starlight-ion-theme/)** - Tema personalizado para Starlight
- **MDX** - Markdown con componentes React/Astro

## 🤝 Colaboradores

Este proyecto es posible gracias a:

- **[Jordy Castro](https://github.com/jordy756)** - Creador y mantenedor principal
- **[Kenneth Torres](https://github.com/KennethTorres)** - Colaborador
- **[Ernesto Vega](https://github.com/ErnestoVegaRodriguez)** - Colaborador

## 💬 Contribuir

¡Tu aporte es valioso! TalkScript es un proyecto educativo en constante evolución y apreciamos todo tipo de contribuciones: desde correcciones de errores tipográficos hasta nuevas lecciones completas. A continuación te explicamos cómo puedes participar.

### 🐛 Reportar Errores o Problemas

Si encuentras algo que no funciona correctamente:

- **Errores de contenido**: Errores gramaticales, traducciones incorrectas, o explicaciones confusas
- **Errores técnicos**: Links rotos, problemas de visualización, bugs en el sitio
- **Problemas de código**: Ejemplos de JavaScript incorrectos o que no ilustran bien el concepto

**Cómo reportar:**

1. Ve a la [sección de Issues](https://github.com/Jordy756/english-learning-guide/issues)
2. Revisa si el problema ya fue reportado
3. Si no existe, crea un nuevo Issue con:
   - Descripción clara del problema
   - Ubicación exacta (link a la página o sección)
   - Capturas de pantalla si aplica
   - Sugerencia de corrección si la tienes

### 💡 Sugerir Nuevo Contenido

¿Quieres que agreguemos un tema específico o expandamos una sección?

1. Abre un **Issue** con la etiqueta `contenido` o `sugerencia`
2. Describe qué tema te gustaría ver y por qué sería útil
3. Si tienes referencias o ejemplos de cómo abordarlo, compártelos

### ✍️ Contribuir con Contenido

Si deseas escribir o mejorar lecciones, sigue estos pasos:

#### Configuración del Entorno de Desarrollo

```bash
# 1. Fork el repositorio en GitHub

# 2. Clonar tu fork
git clone https://github.com/TU_USUARIO/english-learning-guide.git
cd english-learning-guide

# 3. Instalar dependencias (requiere Node.js 18+)
pnpm install

# 4. Iniciar servidor de desarrollo
pnpm dev
# El sitio estará disponible en http://localhost:4321
```

#### Guías de Escritura

**Antes de empezar a escribir**, lee atentamente nuestras [guías de estilo y convenciones](.github/skills/talkscript-content/SKILL.md). Estas reglas aseguran consistencia y calidad en todo el contenido.

**Puntos clave:**

- Todo el contenido educativo debe estar en **español**
- Los ejemplos de código son **visuales**, no funcionales
- Usa metáforas de JavaScript solo cuando clarifiquen el concepto
- Mantén las lecciones breves (lectura de 3-5 minutos)
- Incluye ejemplos prácticos con traducciones
- Sigue la estructura de componentes MDX establecida

#### Proceso de Contribución

1. **Crea una rama** desde `main`:

   ```bash
   git checkout -b contenido/nombre-del-tema
   ```

2. **Escribe tu contenido** siguiendo las guías de estilo

3. **Prueba localmente** que todo se vea bien:

   ```bash
   pnpm dev
   ```

4. **Commit** con mensajes descriptivos:

   ```bash
   git commit -m "Añade lección: [Nombre del Tema]"
   ```

5. **Push** a tu fork:

   ```bash
   git push origin contenido/nombre-del-tema
   ```

6. **Abre una Pull Request** en GitHub:
   - Describe qué contenido añades o mejoras
   - Menciona si cierra algún Issue existente
   - Espera feedback del equipo

### 🔧 Contribuir con Código

Si deseas mejorar la funcionalidad del sitio, componentes, o diseño:

1. Sigue el mismo proceso de fork y configuración
2. Crea una rama descriptiva: `feature/nombre-funcionalidad` o `fix/nombre-bug`
3. Asegúrate de que el build funcione: `pnpm build`
4. Abre una Pull Request con descripción detallada de los cambios

### 📋 Checklist para Pull Requests

Antes de enviar tu PR, verifica:

- [ ] El contenido sigue las [guías de estilo](.github/skills/talkscript-content/SKILL.md)
- [ ] No hay errores de compilación (`pnpm build` funciona)
- [ ] Los links internos funcionan correctamente
- [ ] Las traducciones son precisas
- [ ] Los ejemplos de código son claros y apropiados
- [ ] La ortografía y gramática están correctas

### ❓ ¿Necesitas Ayuda?

Si tienes dudas sobre cómo contribuir o necesitas orientación:

- Abre un Issue con la etiqueta `pregunta`
- Consulta las guías de estilo existentes
- Revisa Pull Requests anteriores como referencia

## 📄 Licencia

Copyright © 2026 TalkScript. Todos los derechos reservados.

Este proyecto y su contenido están protegidos por derechos de autor. No está permitido copiar, distribuir, modificar o usar este proyecto sin autorización explícita de los autores. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

**¿Listo para aprender inglés pensando en código?** 🚀 Visita [TalkScript](https://talkscript.vercel.app) y comienza tu viaje.
