# 📁 Estructura de Carpetas - TeacherAI

Inspirado en el modelo de **Learn AI with Hugo**, la plataforma está organizada para facilitar navegación y escalabilidad.

```
APP-CON-SKILLS/
│
├── 📄 index.html                    ← Landing page principal
├── 📄 README.md                     ← Documentación general
├── 📄 .gitignore                    ← Git ignore
│
├── 🎨 css/
│   └── styles.css                   ← Estilos completos (paleta Ana)
│
├── ⚙️ js/
│   └── main.js                      ← JavaScript interactivo
│
├── 🖼️ assets/
│   ├── images/                      ← Fotos de clase (calorosas)
│   ├── icons/                       ← Iconografía
│   └── fonts/                       ← Tipografías (IBM Plex)
│
├── 📚 docs/
│   ├── PLAN_MAESTRO.md              ← Visión estratégica
│   ├── GUIA_RAPIDA.md              ← Inicio en 5 minutos
│   ├── ROADMAP.md                   ← Features futuras
│   ├── API.md                       ← Referencia API
│   ├── ESTRUCTURA.md                ← Este archivo
│   └── examples/                    ← Casos de uso
│       ├── curso-biologia-2eso/
│       ├── juego-matematicas/
│       └── debate-cambio-climatico/
│
├── 📋 resources/                    ← Recursos organizados (como Learn AI)
│   ├── README.md                    ← Índice de recursos
│   ├── guides/                      ← Guías de uso
│   │   ├── INICIO-RAPIDO.md
│   │   ├── profesor-ia-virtual.md
│   │   ├── game-builder.md
│   │   ├── english-coach.md
│   │   ├── eduprompt.md
│   │   ├── critical-thinking.md
│   │   ├── writing-coach.md
│   │   └── mejores-practicas.md
│   │
│   ├── interactive-tools/           ← Herramientas interactivas
│   │   ├── interactive-learning-module-builder.md
│   │   ├── aulaflix-library-builder.md
│   │   ├── intelligent-app-builder.md
│   │   ├── multiple-choice-builder.md
│   │   └── fill-blank-builder.md
│   │
│   ├── pedagogical-tools/           ← Herramientas pedagógicas
│   │   ├── eduprompt-specialist.md
│   │   ├── critical-thinking-advocate.md
│   │   ├── english-conversation-coach.md
│   │   ├── game-builder.md
│   │   ├── profesor-ia-virtual.md
│   │   └── writing-coach.md
│   │
│   └── design-inspiration/          ← Inspiración visual
│       ├── websites.md              ← 50+ sitios de referencia
│       ├── paletas.md               ← Colores educativos
│       ├── tipografias.md           ← Fuentes recomendadas
│       └── componentes.md           ← UI patterns
│
├── 🛠️ tools/                        ← Herramientas individuales
│   ├── profesor-ia-virtual/
│   │   ├── index.html              ← Interfaz de la herramienta
│   │   ├── css/
│   │   ├── js/
│   │   └── README.md
│   │
│   ├── game-builder/
│   │   ├── index.html
│   │   ├── css/
│   │   ├── js/
│   │   └── README.md
│   │
│   ├── english-coach/
│   │   ├── index.html
│   │   ├── css/
│   │   ├── js/
│   │   └── README.md
│   │
│   ├── eduprompt/
│   │   ├── index.html
│   │   ├── css/
│   │   ├── js/
│   │   └── README.md
│   │
│   ├── critical-thinking/
│   │   ├── index.html
│   │   ├── css/
│   │   ├── js/
│   │   └── README.md
│   │
│   └── writing-coach/
│       ├── index.html
│       ├── css/
│       ├── js/
│       └── README.md
│
├── 🤖 agents/                       ← Especificaciones de agentes
│   ├── rubrics-agent.md
│   ├── writing-corrector-agent.md
│   ├── presentation-agent.md
│   ├── prompt-engineer-agent.md
│   ├── lesson-planner-agent.md
│   ├── quiz-generator-agent.md
│   ├── simulator-agent.md
│   ├── language-reader-agent.md
│   ├── interactive-exercise-agent.md
│   └── scorm-agent.md
│
├── ⚡ skills/                       ← Especificaciones de skills
│   ├── interactive-tools/
│   │   ├── interactive-learning-module-builder.md (19,725 líneas)
│   │   ├── aulaflix-library-builder.md (22,583 líneas)
│   │   ├── intelligent-app-builder.md (16,588 líneas)
│   │   ├── multiple-choice-builder.md (8,532 líneas)
│   │   └── fill-blank-builder.md (3,963 líneas)
│   │
│   └── pedagogical-tools/
│       ├── eduprompt-specialist.md (12,257 líneas)
│       ├── critical-thinking-advocate.md (14,755 líneas)
│       ├── english-conversation-coach.md (13,027 líneas)
│       ├── game-builder.md (13,766 líneas)
│       └── profesor-ia-virtual.md (18,313 líneas)
│
└── 📖 examples/                     ← Ejemplos y plantillas
    ├── course-templates/           ← Plantillas de cursos
    │   ├── nivel-basico.json
    │   ├── nivel-intermedio.json
    │   └── nivel-avanzado.json
    │
    ├── game-examples/              ← Ejemplos de juegos
    │   ├── pasapalabra-educativo.html
    │   ├── escape-room-digital.html
    │   └── trivia-multinivel.html
    │
    └── exercise-examples/          ← Ejemplos de ejercicios
        ├── multiple-choice.html
        ├── fill-blank.html
        └── interactive-simulation.html
```

---

## 🗂️ Convenciones de Carpetas

| Carpeta | Propósito | Contenido |
|---------|----------|----------|
| **css/** | Estilos visuales | CSS de toda la plataforma |
| **js/** | Lógica interactiva | JavaScript vanilla |
| **assets/** | Recursos multimedia | Imágenes, iconos, fuentes |
| **docs/** | Documentación | Guías, especificaciones, roadmap |
| **resources/** | Centro de recursos | Guías, herramientas, inspiración |
| **tools/** | Herramientas individuales | 6 herramientas principales |
| **agents/** | Agentes IA | Especificaciones de expertos |
| **skills/** | Skills especializadas | 15+ módulos funcionales |
| **examples/** | Ejemplos reales | Casos de uso, plantillas |

---

## 🎯 Por Qué Esta Estructura

✅ **Inspirada en Learn AI** - Fácil de navegar  
✅ **Escalable** - Crece con nuevas herramientas  
✅ **Modular** - Cada herramienta es independiente  
✅ **Documentada** - Guías claras para cada sección  
✅ **Accesible** - Fácil de encontrar lo que buscas  

---

## 📌 Próximas Adiciones

- [ ] Sistema de búsqueda de recursos
- [ ] Filtros por categoría (tipo Learn AI)
- [ ] Galería de ejemplos completos
- [ ] Integración con API de Gemini
- [ ] Sistema de caché de proyectos
- [ ] Generador de PDFs completo
- [ ] Exportador SCORM automático

---

**Última actualización:** Noviembre 2024
