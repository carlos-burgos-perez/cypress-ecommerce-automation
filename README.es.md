# Framework de Automatización E2E con Cypress

Framework de automatización End-to-End (E2E) desarrollado con Cypress siguiendo buenas prácticas utilizadas en entornos profesionales de QA Automation.

Este proyecto tiene como objetivo demostrar conocimientos prácticos en automatización de pruebas mediante la implementación de una arquitectura escalable, mantenible y preparada para integrarse en procesos de CI/CD.

---

## Objetivos del Proyecto

Este repositorio busca demostrar:

* Diseño de frameworks de automatización mantenibles.
* Aplicación de patrones de automatización utilizados en la industria.
* Implementación de una arquitectura escalable.
* Integración con pipelines de integración continua.
* Generación automática de reportes de ejecución.
* Aplicación de estándares de calidad de código.

---

## Stack Tecnológico

| Herramienta    | Propósito            |
| -------------- | -------------------- |
| Cypress        | Pruebas E2E          |
| JavaScript     | Desarrollo de Tests  |
| Node.js        | Entorno de Ejecución |
| ESLint         | Calidad de Código    |
| Mochawesome    | Reportes             |
| GitHub Actions | CI/CD                |
| Git            | Control de Versiones |

---

## Arquitectura del Proyecto

La arquitectura sigue el patrón Page Object Model (POM), ampliamente utilizado en proyectos de automatización para mejorar la mantenibilidad y reutilización del código.

```text
cypress-ecommerce-automation/

├── e2e/
├── fixtures/
├── pages/
├── support/
├── reports/
├── screenshots/
├── videos/
├── .github/workflows/
├── cypress.config.js
├── cypress.env.json
├── eslint.config.mjs
└── package.json
```

---

## Funcionalidades Implementadas

### Page Object Model

Centralización de selectores y acciones de usuario.

### Custom Commands

Comandos reutilizables para reducir duplicación de código.

### Fixtures

Separación entre datos de prueba y lógica de automatización.

### Variables de Entorno

Gestión centralizada de credenciales y configuración.

### ESLint

Validación automática de calidad y consistencia del código.

### Mochawesome Reports

Generación automática de reportes HTML con:

* Resultados de ejecución
* Estadísticas de éxito/error
* Tiempo de ejecución
* Resumen de suites

### GitHub Actions

Ejecución automática de pruebas en cada Push y Pull Request.

---

## Cobertura Actual

### Login

* Login correcto
* Login incorrecto

### Productos

* Validación del listado
* Validación de visibilidad
* Ordenación de productos

### Carrito

* Añadir producto al carrito
* Validación del carrito

### Checkout

* Flujo completo de compra
* Confirmación de pedido

---

## Instalación

Clonar el repositorio:

```bash
git clone <repository-url>
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecución de Pruebas

Abrir Cypress:

```bash
npm run cy:open
```

Ejecutar todas las pruebas:

```bash
npm run cy:run
```

Ejecutar ESLint:

```bash
npm run lint
```

---

## Generación de Reportes

```bash
npm run report
```

Los reportes se generan en:

```text
reports/
```

y permiten analizar visualmente los resultados de la ejecución.

---

## Integración Continua

El proyecto está preparado para ejecutarse automáticamente mediante GitHub Actions, incluyendo:

1. Instalación de dependencias.
2. Validación con ESLint.
3. Ejecución de pruebas Cypress.
4. Generación de reportes.

---

## Buenas Prácticas Aplicadas

* Page Object Model (POM)
* Custom Commands
* Variables de Entorno
* Data Driven Testing
* Clean Code
* CI/CD
* Análisis Estático
* Reportes Automatizados

---

## Mejoras Futuras

* Pruebas API
* Allure Reports
* Docker
* Ejecución Paralela
* Cross Browser Testing
* Visual Testing
* Performance Testing

---

## Autor

Proyecto de Portfolio para QA Automation.

Desarrollado para demostrar habilidades en automatización de pruebas, diseño de frameworks y buenas prácticas de ingeniería de calidad de software.
