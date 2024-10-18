# Playwright Test Automation Project

This project automates API and mobile testing for different environments using [Playwright](https://playwright.dev/). It supports testing multiple configurations and includes data-driven testing with CSV files.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Configuration](#project-configuration)
- [Running Tests](#running-tests)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)

## Prerequisites
W
Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (installed with Node.js)

## Installation

1. Clone the repository:
```bash
    git clone https://github.com/yourusername/yourrepository.git
```
2. Navigate to the project directory:
```bash
    cd yourrepository
```
3. Install the project dependencies:
```bash
    npm install
```

## Project Configuration

### Playwright Configuration

This project uses Playwright’s multiple project configuration, allowing you to run tests with different environments.

The `playwright.config.ts` file defines two projects:
- `mobile-test`: Used for testing on `appetize.io` (mobile simulation).
- `api-test`: Used for testing API endpoints on the `https://lapor.folkatech.com` environment.

## Running Tests

The following custom npm scripts are available:
- To run tests for the API Test configuration:
```bash
npm run api-test
```
- To run tests for the Mobile Test configuration:
```bash
npm run mobile-test
```

## Environment Variables

This project uses the dotenv package to manage environment variables. Make sure to create a `.env` file in the root directory.

Here is an example `.env` file:
```makefile
APPETIZE_KEY=b_mov7whlcpcx7qm22rzrqiw6m3i
DEVICE=pixel7
OS_VERSION=13.0
```

Playwright will automatically load these environment variables at runtime.

## Folder Structure

```bash
├── pages/                   # Page object models for API requests
│   └── api/
│       ├── postlogin.ts     # API helper for creating reports
│       └── postReport.ts    # API helper for creating reports
├── test-data/
│   └── reportData.csv       # CSV file containing data for tests
├── tests/
│   ├── apiReport.spec.ts    # The main test file for API project
│   └── laporFolka.spec.ts   # The main test file for mobile project
├── utils/                   # Utility files like API helpers and interfaces
│   ├── apiHelpers.ts
│   └── interfaces.ts
├── playwright.config.ts     # Playwright configuration file with multiple projects
├── package.json             # npm scripts and project metadata
├── .env                     # Environment variables (not included in version control)
└── README.md                # Documentation for the project
```

### Explanation of Key Files:

- `apiReport.spec.ts`: Contains the test that hits the "Create Ticket" API using data from a CSV file.
- `laporFolka.spec.ts`: Contains the test that using Mobile apps
- `playwright.config.ts`: Defines the Playwright project settings for multiple environments.
- `test-data/reportData.csv`: CSV file with test data for generating reports.
- `utils/apiHelpers.ts`: Helper function for login and getting an authentication token.
- `pages/*/*.ts`: Logic for sending reports using the Playwright request object.