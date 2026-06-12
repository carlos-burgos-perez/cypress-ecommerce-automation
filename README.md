# Cypress E2E Automation Framework

A scalable End-to-End (E2E) test automation framework built with Cypress, following industry-standard QA Automation practices.

This project demonstrates the implementation of a maintainable, reusable, and CI/CD-ready automation framework using Page Object Model (POM), Custom Commands, Fixtures, Environment Variables, ESLint, Mochawesome Reporting, and GitHub Actions.

---

## Project Goals

The main objective of this repository is to showcase practical QA Automation skills through the development of a real-world testing framework.

Key goals include:

* Building maintainable automated tests.
* Applying industry-standard automation patterns.
* Implementing scalable project architecture.
* Integrating automated testing into CI/CD pipelines.
* Generating execution reports.
* Following clean code and quality standards.

---

## Technology Stack

| Tool           | Purpose             |
| -------------- | ------------------- |
| Cypress        | End-to-End Testing  |
| JavaScript     | Test Development    |
| Node.js        | Runtime Environment |
| ESLint         | Code Quality        |
| Mochawesome    | Test Reporting      |
| GitHub Actions | CI/CD               |
| Git            | Version Control     |

---

## Framework Architecture

The framework follows the Page Object Model (POM) design pattern to improve maintainability and reduce code duplication.

```text
cypress-ecommerce-automation/

├── cypress/
│
├── e2e/
│   ├── login/
│   ├── products/
│   ├── cart/
│   └── checkout/
│
├── fixtures/
├── pages/
├── support/
│
├── reports/
├── screenshots/
├── videos/
│
├── .github/
│   └── workflows/
│
├── cypress.config.js
├── cypress.env.json
├── eslint.config.mjs
├── package.json
├── README.md
└── README.es.md
```

---

## Features

### Page Object Model (POM)

Encapsulates page interactions and selectors to improve maintainability.

### Custom Commands

Reusable Cypress commands reduce duplication and improve readability.

### Fixtures

Externalized test data allows separation between test logic and test information.

### Environment Variables

Sensitive data and credentials are managed through Cypress environment variables.

### ESLint Integration

Static code analysis ensures code consistency and quality across the project.

### Mochawesome Reporting

Generates execution reports containing:

* Test Results
* Pass/Fail Statistics
* Execution Duration
* Test Suites Overview

### GitHub Actions

Automated test execution on:

* Push Events
* Pull Requests

---

## Test Coverage

### Authentication

* Successful Login
* Failed Login

### Products

* Product List Validation
* Product Visibility Validation
* Product Sorting Validation

### Shopping Cart

* Add Product to Cart
* Cart Validation

### Checkout

* Complete Purchase Flow
* Order Confirmation Validation

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

---

## Running Tests

Open Cypress Test Runner:

```bash
npm run cy:open
```

Execute all tests:

```bash
npm run cy:run
```

Run ESLint:

```bash
npm run lint
```

---

## Reporting

Generate execution reports:

```bash
npm run report
```

Generated files:

```text
reports/

├── report.html
├── report.json
└── assets/
```

Open:

```text
reports/report.html
```

to review execution results.

---

## Continuous Integration

GitHub Actions automatically executes:

1. Dependency Installation
2. ESLint Validation
3. Cypress Test Execution
4. Report Generation

This ensures continuous quality verification on every code change.

---

## Best Practices Applied

* Page Object Model
* Custom Commands
* Environment Variables
* Data-Driven Testing
* Clean Code Principles
* CI/CD Integration
* Static Code Analysis
* Automated Reporting

---

## Future Improvements

Planned enhancements:

* API Testing
* Allure Reports
* Docker Integration
* Parallel Execution
* Cross-Browser Testing
* Visual Testing
* Performance Testing

---

## Author

An end-to-end test automation framwork using Cypress, developed as a portfolio project. It features a scalable architecture, utilises the Page Object Model, incorporates reporting via Mochawesome, and focuses on QA best practices.
