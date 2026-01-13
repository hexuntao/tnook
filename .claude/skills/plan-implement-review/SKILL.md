---
name: Plan, Implement, Review (ScaffoldOS)
summary: Plan-first development workflow for this Next.js service.
version: 1.0.0
scaffoldosPack: acme/planning-pack
license: Apache-2.0
compatibility:
  claude: '^3.5'
  opencode: '>=0.5.0'
  scaffoldos: '>=0.5.0'
author: ScaffoldOS Team
homepage: https://example.com/scaffoldos/packs/planning-pack
repository: https://github.com/acme/scaffoldos-planning-pack
tags: [planning, workflow, nextjs, scaffoldos]
---

## When to use this skill

Use this skill whenever you are asked to:
- Add or modify a feature
- Fix a non-trivial bug  
- Refactor a non-trivial area of the codebase

## How to use this skill

### 1. Plan
- Read `AGENTS.md` and the relevant files
- Restate the task in your own words
- Identify impacted modules, components, and tests
- Propose a step-by-step plan with small, safe checkpoints

### 2. Implement
- Apply changes in small, reviewable steps
- Keep the plan updated if you discover new constraints

### 3. Review & Test
- Run the project test command (`pnpm test`) when appropriate
- Summarize the diff in natural language, including risks and follow-ups

## Project-specific details

- **Framework**: Next.js (TypeScript)
- **Build**: `pnpm build`
- **Test**: `pnpm test`
- **Production Config**: Treat `config/prod/**` as production-only and read-only