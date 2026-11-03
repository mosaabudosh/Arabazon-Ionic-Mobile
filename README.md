# Arabazon Ionic Mobile

**Mobile Application for the Arabazon Multi-Vendor Marketplace**

Arabazon Ionic Mobile is the customer-facing mobile application for **ARABAZON**, a multi-vendor marketplace. It is being developed using Ionic and Angular to provide customers with a mobile shopping experience that complements the Arabazon platform.

> **Project Status:** Under Development

## Technology Stack

- **Ionic Framework** – Mobile user interface and components.
- **Angular** – Application architecture, routing, and component development.
- **TypeScript** – Application logic and type safety.
- **Reactive Forms** – Form management and client-side validation.
- **Capacitor** – Native mobile platform integration, where configured.

The exact framework and package versions are maintained in `package.json`.

## Current Application Scope

The current development scope includes:

- Ionic and Angular mobile application foundation.
- User authentication interface.
- Login screen.
- User registration screen.
- Navigation between Login and Register.
- Arabic Right-to-Left (RTL) interface.
- Responsive mobile-first layouts.
- Shared visual styling across authentication screens.

## ARABAZON Brand Identity

The application follows the ARABAZON visual identity.

### Color Palette

| Color | Hex Code | Usage |
|---|---|---|
| Gold | `#FFB823` | Primary buttons and visual accents |
| White | `#FFFFFF` | Backgrounds and interface surfaces |
| Black | `#000000` | Text, icons, and primary elements |

The design focuses on a clean, modern, and consistent shopping experience.

## Project Structure

The application follows the Ionic and Angular project structure.

```text
src/
└── app/
    └── features/
        └── auth/
            ├── login/
            └── register/
```

The structure is designed to support future marketplace features and additional application modules.

## Prerequisites

Before running the project, make sure you have:

- Node.js compatible with the Angular version used in the project.
- npm.
- Ionic CLI.
- Visual Studio Code or another compatible development environment.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mosaabudosh/Arabazon-Ionic-Mobile.git
```

### 2. Navigate to the Project Directory

```bash
cd Arabazon-Ionic-Mobile
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
ionic serve
```

The application will start in your browser. Open the local URL displayed in the terminal to preview the application.

## Backend Integration

The mobile application is intended to communicate with the Arabazon backend API.

The authentication interface currently includes client-side forms and validation. Login and registration must be connected to the actual backend authentication endpoints and verified end to end.

Planned integration tasks include:

- Configure the backend API base URL.
- Implement authentication services.
- Connect Login and Register forms to the backend.
- Handle API responses and validation errors.
- Implement secure token handling and session management.
- Integrate user authentication and authorization.

## Development Guidelines

- Maintain a consistent Angular component architecture.
- Keep authentication pages and routing organized.
- Use Reactive Forms for form validation.
- Follow the established ARABAZON color palette.
- Maintain RTL support for Arabic interfaces.
- Check Angular and TypeScript compatibility before changing compiler settings.
- Keep API credentials and sensitive configuration outside source control.

## Build and Validation

Before preparing a release, verify the following:

- The application starts without compilation errors.
- Login and Register screens load correctly.
- Navigation between authentication screens works.
- Form validation behaves as expected.
- API integration works correctly.
- The interface renders properly on different mobile screen sizes.
- Android and iOS builds work where native platform configurations are available.

## Project Roadmap

Planned development areas include:

- Completing authentication and backend integration.
- Customer marketplace browsing.
- Product details and categories.
- Shopping cart and checkout.
- Customer orders and order tracking.
- User profile and account management.
- Favorites and wish lists.
- Notifications.
- Android and iOS application builds.

## Project Status

Arabazon Ionic Mobile is currently under active development. Features and integrations are being implemented progressively.

## Repository

**GitHub:** [Arabazon-Ionic-Mobile](https://github.com/mosaabudosh/Arabazon-Ionic-Mobile)

---

**ARABAZON**  
*Multi Vendor Marketplace*
