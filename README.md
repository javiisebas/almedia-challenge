# Almedia Backend Coding Challenge

Welcome to the Almedia Backend Coding Challenge!

This project is a demonstration of transforming and validating data from multiple offer providers into a unified format.

## Getting Started

### Prerequisites

Ensure you have the following software installed on your machine:

-   Node.js (v14 or later)
-   NestJS CLI

### Installation

1. Clone the repository:

```bash
git clone git@github.com:javiisebas/almedia-challenge.git
```

2. Change into the project directory:

```bash
cd Almedia
```

3. Install the dependencies:

```bash
pnpm install
```

4. Start the application:

```bash
pnpm run start:debug
```

## Features

-   **Fetch Offers**: The application simulates fetching offers from different providers.
-   **Transform and Validate**: The fetched data is then transformed and validated to conform to a unified format.
-   **Error Handling**: Offers that don't pass validation are skipped, with a warning logged.

## Testing

To run the tests:

```bash
pnpm test
```

## Acknowledgments

Thanks to Almedia for providing this interesting challenge!
