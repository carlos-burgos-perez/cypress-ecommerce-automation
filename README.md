# Cypress E2E Automation Framework

A scalable End-to-End (E2E) test automation framework built with Cypress, designed following industry-standard automation practices.

This project demonstrates the implementation of maintainable and reusable test automation architecture, including Page Object Model (POM), custom commands, fixtures, test reporting, and CI/CD integration.

---

## Objectives

The main goals of this project are:

* Automate critical user journeys of a web application.
* Apply automation best practices.
* Create a scalable and maintainable testing framework.
* Integrate automated tests into CI/CD pipelines.
* Generate test execution reports.

---

## Tech Stack

* Cypress
* JavaScript
* Node.js
* GitHub Actions
* Mochawesome Reports

---

## Project Structure

```text
cypress-e2e-framework/

├── cypress
│   ├── e2e
│   ├── fixtures
│   ├── pages
│   ├── support
│   └── downloads
│
├── reports
├── screenshots
├── videos
│
├── .github
│   └── workflows
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Features

### Page Object Model (POM)

The framework uses the Page Object Model design pattern to improve test maintainability and reduce code duplication.

### Custom Commands

Reusable Cypress commands are centralized in the support layer.

### Test Data Management

Fixtures are used to separate test data from test logic.

### Reporting

Automated execution reports are generated after each test run.

### CI/CD Ready

Tests can be executed automatically through GitHub Actions pipelines.

---

## Test Coverage

Current automated scenarios include:

### Authentication

* Valid login
* Invalid login
* Logout functionality

### Product Management

* Product search
* Product filtering
* Product details validation

### Shopping Cart

* Add product to cart
* Remove product from cart
* Cart validation

### Checkout

* Complete checkout process
* Order confirmation validation

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

Run all tests:

```bash
npx cypress run
```

Open Cypress Test Runner:

```bash
npx cypress open
```

Run a specific test:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## Reporting

Generate reports after execution:

```bash
npm run report
```

Reports will be available inside the reports directory.

---

## CI/CD

The project includes GitHub Actions integration to automatically execute test suites on:

* Push events
* Pull Requests

---

## Best Practices Applied

* Page Object Model (POM)
* Reusable components
* Data-driven testing
* Separation of concerns
* Clean code principles
* CI/CD integration
* Scalable folder structure

---

## Future Improvements

* API testing integration
* Cross-browser execution
* Docker support
* Visual testing
* Allure reporting
* Parallel execution

---

## Author

QA Automation Portfolio Project

Built to demonstrate Cypress automation skills, framework architecture, and software testing best practices.
