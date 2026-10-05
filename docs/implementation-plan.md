# Personality Baseball Cards — Implementation Plan

Status: M1 complete locally; M2–M5 not started
Last updated: October 4, 2026

## 1. Purpose and scope

Deliver the local, session-only MVP defined in [requirements.md](requirements.md). That document is the authority for product behavior; this plan organizes the implementation and verification work.

Retain the React/TypeScript frontend and ASP.NET Core backend. Use the existing personality and love language reference content. Support one card for yourself or a coworker, with editable descriptions and a sports trading card presentation.

Accounts, persistence, sharing, exports, assessments, additional profile sections, and cloud deployment remain outside this plan.

## 2. Starting point

The repository review on October 4, 2026 found:

- The local checkout was `feature/dataentry` at `9de82f9`. Recheck the current branch and working tree before implementation; preserve existing user changes.
- The frontend production build failed on TypeScript errors in `PulldownMenu.tsx`.
- Frontend lint passed, and the one backend test passed. That test only verifies the personality count.
- `DataEntry.tsx` does not update application state, and `App.tsx` renders a hardcoded sample card.
- Both reference-data builders contain the required content.
- Unknown personality codes throw because the controller uses `First()` without handling a missing match.
- CI does not explicitly build the frontend, and the client project disables its build script.
- Docker Compose maps to port 80 although the container application listens on 5299.

These are historical observations, not proof that current checks pass. Confirm relevant conditions when starting each milestone.

## 3. Delivery sequence

| Milestone | Outcome | Depends on | Requirements |
| --- | --- | --- | --- |
| M1 | Reliable build and validation baseline | None | Section 11 |
| M2 | Create and update a card from valid inputs | M1 | FR-01 through FR-06; sections 8 and 10 |
| M3 | Customize descriptions without accidental loss | M2 | FR-05 and FR-07 |
| M4 | Readable, accessible sports trading card experience | M3 | Section 9; FR-01 and FR-03 |
| M5 | Verified local MVP with setup instructions | M1–M4 | Sections 11 and 12; all functional requirements |

Implement in this order. Build labels, keyboard support, and error feedback into the functional work; M4 verifies and polishes them. Each milestone should leave a buildable application with a concrete outcome to review.

## 4. M1 — Establish the baseline

**Affected areas:** Client package scripts and dependencies, `src/components/PulldownMenu.tsx`, client project configuration, `.github/workflows/ci.yml`, and existing test projects.

Tasks:

- [x] Recheck repository instructions, current branch, working-tree changes, and available runtimes.
- [x] Reproduce the frontend build, lint, and backend test results.
- [x] Remove the unused unfinished dropdown so all included source compiles. Accessible native selection controls will be added with the functional form in M2.
- [x] Add explicit frontend dependency installation, production build, and lint steps to CI, using the client directory and its lockfile.
- [x] Configure CI validation for pushes and pull requests while retaining backend build and test coverage.
- [x] Configure CI with Node 22 and .NET 8.0.x, using repository-relative paths. A remote execution remains unverified until the workflow runs on GitHub.
- [x] Separate development HTTPS certificate generation and reading from production builds and preview. Retain the existing HTTPS setup for the development server.
- [x] Exclude generated build output from lint so lint remains valid after a production build.

Completion check:

- The frontend production build and lint pass, backend tests pass, and CI configuration explicitly runs those checks.
- The documented build failure can no longer be hidden by a successful backend build.

Validation recorded October 4, 2026:

- Reproduced the nine TypeScript errors, then confirmed `npm run build` passes after removing the unreferenced dropdown.
- Confirmed `npm run lint` passes after the build, with generated `dist`, `obj`, and `bin` output excluded.
- Confirmed `dotnet build PersonalityBaseballCards.Server/PersonalityBaseballCards.Server.csproj --no-restore` succeeds, and `dotnet test UnitTests/UnitTests.csproj --no-restore` passes its one existing test.
- Reviewed CI configuration: an independent frontend job installs from the client lockfile, builds, and lints; the backend job retains its builds and tests. Both run on push and pull request.
- Local build checks required sandbox permission to read parent directories and NuGet configuration. No changes were made to user runtime installations.
- Production build emits an existing Vite CommonJS API deprecation warning; it does not fail the build.
- GitHub Actions execution, a fresh dependency installation, and development HTTPS startup were not exercised in this milestone. The local checks used existing dependencies. Full local startup verification remains in M5.

## 5. M2 — Complete card creation and updates

**Affected areas:** `src/App.tsx`, `src/components/DataEntry.tsx`, `src/components/Card.tsx`, shared client types or request helpers as needed, both API controllers, and focused behavioral tests.

Tasks:

- [ ] Define typed reference data and card data shared by the relevant components.
- [ ] Track reference-data loading, success, and failure explicitly. Check HTTP success and reject data that cannot populate valid controls.
- [ ] Provide visible loading and retry states. Keep creation unavailable until both required datasets are ready; preserve entered values during retries.
- [ ] Replace placeholder inputs with a labeled name input and native selectors populated from the API. Start with no selected personality or love language.
- [ ] Add the brief product explanation for work teams, including creating a card for yourself or a coworker and the session-only notice.
- [ ] Keep form edits separate from the last successfully submitted card. Prevent normal form navigation and validate before replacing the displayed card.
- [ ] Reject blank or whitespace-only names and missing or unsupported selections. Associate feedback with its field and preserve other entries.
- [ ] Render the selected codes, names, and existing descriptions. Remove the hardcoded John Doe card, external placeholder image, and empty content lists.
- [ ] Switch from **Create card** to **Update card** after successful creation. Maintain exactly one displayed card.
- [ ] Return HTTP 404 for unknown personality codes while retaining valid case-insensitive lookup behavior. Keep existing list endpoints available.
- [ ] Keep names and card data in browser memory; use the backend only to retrieve reference data.
- [ ] Add focused tests for creation, updates, invalid edits preserving the existing card, reference-data failures and retry, and unknown API lookup values.

Completion check:

- Demonstrate the James / INTJ / Quality Time example from FR-04, then update the name and each selection without reloading the page.
- Invalid submission leaves the last valid card intact. Backend unavailability produces a useful retry state, and unknown API codes return 404.
- Confirm that the selectors contain all 16 personality types and five love languages and that each supported value maps to the correct reference content.

## 6. M3 — Add description customization

**Affected areas:** Client form and card state, description editing controls, card rendering, and behavioral tests.

Implementation approach:

Track each description independently as reference text, custom text, or explicitly removed text. A removed description is an intentional choice, so it must not be refilled during unrelated edits. The submitted card remains separate from pending form edits.

Tasks:

- [ ] Provide controls to edit, remove, and restore each description independently.
- [ ] Show reference descriptions as general guidance and customized descriptions as user-entered text.
- [ ] Apply description changes only when the user selects **Update card**.
- [ ] Omit the description section entirely when its description is removed; retain the selected type or language label.
- [ ] Preserve customization when the name or unrelated selection changes.
- [ ] When a selection change would discard customized or removed content, explain the effect and offer a deliberate replace-or-cancel choice. Cancel keeps the previous selection and text; replace loads the new selection's reference description.
- [ ] Restore the current selection's reference text on explicit request and mark it as reference content again.
- [ ] Render all user text as plain text and keep it in memory only.
- [ ] Test independent edits, removals, restoration, name-only updates, selection changes, cancellation, and invalid submissions.

Completion check:

- Demonstrate editing one description and removing the other, then updating the name without losing either choice.
- Demonstrate both accepting and cancelling replacement when switching a customized selection.
- Restore either default independently. The resulting card has correct content labels and no empty description headings.

## 7. M4 — Apply the trading card design and accessibility

**Affected areas:** `src/components/Card.tsx`, entry and status controls, `src/App.css`, `src/index.css`, and other component styles as needed.

Tasks:

- [ ] Build a recognizable sports trading card layout with a prominent name, clear type labels, and readable description sections.
- [ ] Use semantic page and card markup rather than nested tables for layout. Avoid duplicate heading IDs.
- [ ] Keep the form and card visually related and make the empty, loading, error, and completed states understandable.
- [ ] Make long names and descriptions wrap, including long unbroken text, without overlap or horizontal scrolling.
- [ ] Support narrow phones and desktop screens without requiring fixed sports-card dimensions that truncate content.
- [ ] Verify keyboard operation, visible focus, associated labels and errors, readable contrast, and accessible status feedback.
- [ ] Include description editing, restoration, and replacement choices in the keyboard and responsive-layout checks.

Completion check:

- Review the empty state and completed cards at desktop and narrow phone widths, including customized and removed descriptions.
- Complete creation, update, description replacement, and retry using only the keyboard.
- Confirm that no placeholder photo or deferred profile sections appear.

## 8. M5 — Validate and document local delivery

**Affected areas:** README, local startup and proxy settings if necessary, `compose.yaml`, test configuration, CI, and this checklist.

Tasks:

- [ ] Document runtime prerequisites, dependency installation, backend and frontend startup, expected local addresses, and certificate troubleshooting.
- [ ] Verify that the documented local setup reaches both reference APIs and completes the card journey.
- [ ] Correct the Compose mapping to target application port 5299. Check consistency with the Dockerfile and Kubernetes service without deploying or changing cloud infrastructure.
- [ ] Run the final production build, lint, backend tests, and any added frontend behavioral tests. Add those new test commands to CI and setup documentation.
- [ ] Verify every functional requirement against its acceptance criteria, including failure and retry cases.
- [ ] Confirm that refresh clears in-memory profile data and that the interface communicates this behavior.
- [ ] Confirm that card creation and editing do not send personal input to the backend, use persistent browser storage, or add tracking.
- [ ] Record completed milestones, actual validation results, and any remaining limitations in this plan.

Completion check:

- Someone can follow the README to run the local app and complete the required user journey.
- All required automated checks pass and the manual checks in requirements section 12 are completed.
- Report any unverified environment or container behavior explicitly; do not count it as a successful test.

## 9. Validation strategy

Use the existing NUnit suite for backend behavior and add a small frontend test setup if needed for meaningful user-flow coverage. Prefer component tests that interact with the form and assert rendered results over tests tied to internal state shapes. Choose test tools during implementation based on compatibility with the existing client toolchain.

Initial verification commands, run from their applicable directories:

| Check | Directory | Command |
| --- | --- | --- |
| Frontend production build | `personalitybaseballcards.client` | `npm run build` |
| Frontend lint | `personalitybaseballcards.client` | `npm run lint` |
| Backend tests | Repository root | `dotnet test UnitTests/UnitTests.csproj` |

Add the frontend behavioral test command once its test setup exists. Restore dependencies as necessary before validation. Use automated coverage for state transitions, validation, reference mapping, and API responses; use browser review for layout, keyboard operation, and the full local journey.

## 10. Working rules and completion tracking

- Mark a task complete only when its behavior is implemented and its relevant check has passed.
- Keep product behavior in the requirements document; update both documents when an agreed scope change affects the plan.
- Preserve the existing reference wording. Raise missing source content with the project owner.
- Do not add a database, authentication, exports, or cloud deployment to solve an MVP implementation issue.
- Fix discoveries that prevent the agreed local MVP from working. Discuss discoveries that require a material scope change.
- This document schedules implementation; creating it does not begin implementation or publish any changes.

| Milestone | Status | Validation evidence |
| --- | --- | --- |
| M1 | Complete locally; GitHub run pending | Frontend build and lint pass; server build passes; 1 backend test passes; CI configuration updated |
| M2 | Not started | — |
| M3 | Not started | — |
| M4 | Not started | — |
| M5 | Not started | — |
