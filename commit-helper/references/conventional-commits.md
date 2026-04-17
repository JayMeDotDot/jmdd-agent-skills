# Conventional Commits Specification

## Format

Format: `<type>[scope]: <description>`

## Type

Must be one of the following:
- **`feat`**: A new feature
- **`fix`**: A bug fix
- **`docs`**: Documentation only changes
- **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **`refactor`**: A code change that neither fixes a bug nor adds a feature
- **`perf`**: A code change that improves performance
- **`test`**: Adding missing tests or correcting existing tests
- **`build`**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **`ci`**: Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **`chore`**: Other changes that don't modify src or test files
- **`revert`**: Reverts a previous commit

## Scopes

### Frontend

- **`components`**: UI component changes
- **`store`**: State management
- **`styles`**: CSS, styled-components, theme
- **`utils`**: Utility functions
- **`forms`**: Form-related changes
- **`routing`**: Route configuration

### Backend

- **`api`**: API endpoints, controllers
- **`models`**: Data models, schemas
- **`services`**: Business logic services
- **`database`**: Database queries, migrations
- **`auth`**: Authentication, authorization
- **`middleware`**: Express/HTTP middleware
- **`validators`**: Input validation

### DevOps

- **`ci`**: Continuous Integration (GitHub Actions, Jenkins)
- **`cd`**: Continuous Deployment
- **`docker`**: Dockerfile, docker-compose
- **`k8s`**: Kubernetes manifests
- **`terraform`**: Infrastructure as Code

### General

- **`config`**: Configuration changes
- **`deps`**: Dependency updates
- **`tests`**: Test files (use `test` type for test code changes)
- **`types`**: TypeScript type definitions
- **`assets`**: Images, fonts, static files

## Description

The description contains a short description of the change:

- Must be less than 100 characters
- No period (.) at the end