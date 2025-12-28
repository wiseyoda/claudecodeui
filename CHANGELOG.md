# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Enhanced permission response handling with dual-handler approach for SDK compatibility
- Improved logging for permission responses to include full JSON data

### Added
- Documentation comment for `handlePermissionResponse()` return value
- Trigger approval workflow for permission requests
- Enhanced permission UI with real-time approval notifications

## [1.12.0] - 2024-12-XX

### Fixed
- Wrap permission-request data in data field for iOS compatibility
- Remove duplicate crypto import from merge
- Fix default port for shell on vite config
- Fix deprecated apple-mobile-web-app-capable meta tag
- Fix Claude and Cursor login defaulting to previously opened shell
- Fix project paths containing hyphens with smartDecodeProjectPath
- Fix broken pasted image upload
- Apply originalPath config to auto-detected projects

### Added
- Syntax highlighting improvements in chat interface
- Interactive permission approval via canUseTool callback
- Introducing OpenAI Codex to the Claude Code UI project
- Model selection for Claude with latest Claude Agent SDK and Cursor CLI versions
- Plan approval system with inline UI and session persistence
- Persistent permission request state across page refreshes and sessions
- WebFetch and WebSearch to plan mode tools
- Code block syntax highlighting in ChatInterface
- RTL (Right-to-Left) direction detection for internationalization
- Base URL support for WebSocket connection paths in shell component
- Sub-directory deployment support and base path configuration
- Docker deployment support with compose configuration
- Control script (ccui) for development servers

### Changed
- Update Claude Agent SDK to 0.1.76
- Add requirements documentation
- Improve Settings and Onboarding UX to accommodate multiple agents
- Bump Opus version and make Opus default model
- Replace `t` with `translate` in i18n hook usage across components
- Address security and performance vulnerabilities in permission management
- Fix timeout constant and remove unused analytics code
- Prevent environment variable leakage between requests

### Security
- Address multiple security vulnerabilities in permission management
- Fix memory leak issues from code review
- Prevent environment variable leakage between requests

## [1.11.0] and earlier

For changes prior to version 1.12.0, please refer to the git commit history:
```bash
git log --oneline --reverse
```

[Unreleased]: https://github.com/wiseyoda/claudecodeui/compare/v1.12.0...HEAD
[1.12.0]: https://github.com/wiseyoda/claudecodeui/releases/tag/v1.12.0
