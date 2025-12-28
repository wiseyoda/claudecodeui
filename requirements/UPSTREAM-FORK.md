# Fork Management

This repository is a fork of [siteboon/claudecodeui](https://github.com/siteboon/claudecodeui).

## Fork Strategy

**Goal**: Make enhancements while remaining mergeable with upstream.

### Guidelines for Changes

1. **Prefer additive changes** - Add new features without modifying existing code paths when possible
2. **Keep core files unchanged** - Avoid extensive refactoring of:
   - `server/index.js` (main entry point)
   - `server/projects.js` (project discovery)
   - `src/App.jsx` (main React app)
3. **Use feature flags** - When adding features that might conflict, use environment variables
4. **Document divergences** - Track any breaking changes in this file

### Merging Upstream

```bash
# Add upstream remote (once)
git remote add upstream https://github.com/siteboon/claudecodeui.git

# Fetch upstream changes
git fetch upstream

# Merge upstream main into our main
git checkout main
git merge upstream/main

# Resolve conflicts, test, and commit
```

## Downstream Consumer

This backend serves the **Coding Bridge** iOS app (formerly ClaudeCodeApp):
- Location: `/home/dev/workspace/ClaudeCodeApp`
- Connection: HTTP API + WebSocket (port 8080 via Tailscale)
- Auth: JWT tokens (username/password)
- Additional: SSH for file operations

## Divergences from Upstream

Track any changes that might cause merge conflicts:

| File | Change | Reason |
|------|--------|--------|
| (none yet) | | |

## PR Review Process

See `projects/` folder for PR assessments from upstream.
