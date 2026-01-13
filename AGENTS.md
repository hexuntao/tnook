## How we want agents to work in this repo

This repository follows a **planning-first** workflow for significant changes.

1. Always start with a `/plan` step to understand the task, affected areas, and risks.
2. Then use `/implement` to apply changes in small, reviewable steps.
3. After implementation, run tests and use `/review` to summarize the diff and potential regressions.
4. For non-trivial work, update relevant documentation and link PRs/issues.

Build command: `pnpm build`  
Test command: `pnpm test`

Security notes:
- Treat `config/prod/**` as production-only configuration. Do not read or modify secrets or production-only values.
- Treat `infra/**` as read-only infrastructure configuration.