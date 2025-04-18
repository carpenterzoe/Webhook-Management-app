# Webhook Management app

## Key Features
- **Core Functionality**
  - Webhook creation/editing
  - Search-filtered list view
  - Form validation (required fields + URL format)
- **UI/UX Enhancements**
  - Theme switching (light/dark modes)
  - Responsive layout via Element UI
- **Technical Implementation**
  
  - Component-driven design pattern
  
  - Centralized state management (Pinia)
  
  - Core TypeScript definitions for key data structures
  
    

## Tech Stack

[![Vue 3](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vuedotjs)](https://vuejs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev/) [![Pinia](https://img.shields.io/badge/Pinia-3-FFD02F?logo=vue.js)](https://pinia.vuejs.org/)

- **Vue 3**: Reactive components via Composition API, optimized render performance.

- **Pinia**: Lightweight Vue-optimized state management.

- **TypeScript**: Type-safe development with strict validation‌.

- **Vite**: Instant Hot Module Replacement for rapid iteration.

  


## Quick Start

   ```bash
   git clone https://github.com/carpenterzoe/Webhook-Management-app.git
   cd Webhook-Management-app

   npm install
   npm run dev
   ```


## Project Structure

```markdown

└── src/
    ├── components/    # Reusable Vue components (Menu, Theme Toggle, Dialogs)
    ├── stores/        # Pinia state management (webhookStore.ts)
    ├── views/         # Route-level components (Webhooks List, Create Action)
    ├── types/         # TypeScript definitions (webhook.d.ts)
    └── router.ts      # Vue Router configuration

```
