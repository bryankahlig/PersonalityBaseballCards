# Personality Baseball Cards — Product Requirements

Status: MVP requirements updated from project owner decisions
Last updated: October 4, 2026

## 1. Purpose

Create a compact, approachable profile that helps people understand one another and work together more effectively. Present the profile as a baseball trading card: a familiar, easy-to-scan snapshot of a person's preferences and tendencies.

The starting lenses are Myers-Briggs personality type and love language. The project is inspired by Ray Dalio's employee baseball cards.

This document defines desired product behavior. The existing prototype is a starting point, not a specification of what the finished product must do.

## 2. Decision status

The project owner has confirmed the audience, primary workflows, content sources, visual direction, session-only scope, and local delivery target recorded below. Acceptance criteria translate those decisions into observable behavior.

Routine implementation choices can follow these requirements. Changes that materially expand scope or change the meaning of a card should be discussed with the project owner before implementation.

## 3. Audience and use cases

**Initial audience:** Work teams and coworkers who want a practical conversation aid for understanding each other's communication and collaboration preferences.

Primary use cases:

- A person creates a card about themselves and uses it to introduce their preferences to others.
- Teammates discuss their cards to identify ways to communicate and collaborate more effectively.
- Someone creates a draft about another person using information that person has shared, then reviews the card with them.

## 4. Product principles

- Make the card useful at a glance, with readable language and a clear visual hierarchy.
- Give the person control over how they are represented.
- Distinguish information entered about a person from general guidance inferred from a selected type.
- Present inferred guidance as possible tendencies, not established facts about the individual.
- Use familiar language instead of assessment or implementation jargon.
- Keep the first release small enough to deliver and validate end to end.

## 5. MVP scope

The first release should support creating and editing one card during a browser session.

### Included

- Enter a person's display name.
- Select one of the 16 supported Myers-Briggs personality types.
- Select one of the five supported love languages.
- Generate a card showing the entered name, selected types, and matching descriptions.
- Allow the user to edit or remove either description when it does not fit the person.
- Edit the inputs and update the same card without reloading the page.
- Distinguish general reference descriptions from user-entered descriptions.
- Show understandable loading, validation, and service error states.
- Make the entry form and card usable on desktop and mobile screens.
- Use a sports trading card visual style.
- Deliver a working local app.

### Deferred Features

- Accounts, authentication, and team administration.
- Saving cards across browser sessions or storing profiles on the server.
- Public profiles, shareable links, and a searchable people directory.
- Printing, image export, PDF export, and card collections.
- Photo uploads and custom artwork.
- Personality assessments or automatic determination of a person's type.
- AI-generated individual profiles or compatibility scores.
- Additional assessment frameworks.

Cards exist only in the current browser session. Refresh may clear the card; the interface should make this behavior clear. Saving, printing, and sharing are deferred.

## 6. Main user journey

1. The user opens the app and sees a brief explanation of its purpose.
2. The app loads the available personality types and love languages.
3. The user enters a display name and chooses both types.
4. The user selects **Create card**.
5. The app validates the entries and displays a sports trading card using the existing reference descriptions.
6. The user changes one or more entries, optionally edits or removes descriptions that do not fit, and selects **Update card**.
7. The same card reflects the new values without a page reload.

**Starting state:** Show an empty entry form and a short prompt to create a card. If a sample card is shown, label it explicitly as an example. Do not present a placeholder person as a completed user card.

## 7. Functional requirements and acceptance criteria

### FR-01: Explain the product

The app should briefly explain what a card contains and how someone can use it.

Acceptance criteria:

- A first-time visitor can identify that the app creates a personal profile from a name and two selected lenses.
- The explanation states that type descriptions are general tendencies and can be discussed or questioned.
- The explanation supports creating a card for yourself or a coworker and retains the term **Love language**.

### FR-02: Load reference data

The app should use the backend's supported personality types and love languages to populate selection controls.

Acceptance criteria:

- The personality selector offers all 16 types, each identified by code and name.
- The love language selector offers all five languages by name.
- Loading is visible and card creation is unavailable until the required data is ready.
- If loading fails, the user sees a clear message and can retry.

### FR-03: Collect valid inputs

The form should collect a display name, one personality type, and one love language.

Acceptance criteria:

- Each control has a visible, associated label.
- A blank or whitespace-only name cannot create a card.
- Both selections are required; neither is silently assigned to represent the person.
- Selection controls accept only supported values.
- Validation identifies the affected field and preserves the user's other entries.
- Names render as text, including names containing punctuation or non-English characters.

### FR-04: Create a card

Submitting valid inputs should display a card based on those inputs and the loaded reference data.

Acceptance criteria:

- The card shows the entered display name.
- The initial card shows the selected personality code, name, and matching reference description.
- The initial card shows the selected love language and matching reference description.
- The card identifies reference descriptions as general guidance associated with the selections. Later edits or removals follow FR-07.
- The card contains no placeholder descriptions or empty strengths, weaknesses, or opportunities lists.
- Creating the card does not reload or navigate away from the page.

Example: Entering **James**, selecting **INTJ — Architect**, and selecting **Quality Time** produces a James card with the Architect description and the Quality Time description. Selecting a different personality type and updating the card replaces both the personality label and its default description, subject to the customization behavior in FR-07.

### FR-05: Edit the current card

The user should be able to revise the inputs and deliberately update the displayed card.

Acceptance criteria:

- After creation, the form retains the values used to create the card.
- Selecting **Update card** replaces the displayed values with valid revised inputs.
- Invalid edits leave the previously created card intact and show validation feedback.
- Updating does not create duplicate cards.

### FR-06: Handle unavailable or unknown data

The app and API should handle failures without showing an indefinite loading message or an unhandled error.

Acceptance criteria:

- Reference-data request failures produce a visible error state and retry action.
- The frontend checks unsuccessful HTTP responses before treating them as reference data.
- An unknown personality code requested through the API returns a defined not-found response rather than an unhandled server error.
- Error messages use language useful to the user and do not expose internal diagnostics.

### FR-07: Customize descriptions

The user can edit or remove the personality and love language descriptions independently while retaining the selected types.

Acceptance criteria:

- Each description begins with the existing reference text for its selected type.
- The user can replace either description with their own text or clear it entirely.
- Selecting **Update card** applies these changes without changing the selected type or language.
- A removed description leaves no empty placeholder or orphaned description heading on the card.
- Edited descriptions are identified as user-entered text; unedited reference descriptions remain identified as general guidance.
- Updating a name or the other selection does not overwrite an unrelated customized description.
- Changing a selection loads its matching default description. If this would discard edited or removed content, the interface makes that consequence clear and requires a deliberate choice before discarding it.
- The user can restore the reference description for the current selection.
- Customized text renders as plain text and remains session-only.

## 8. Card content

### Required for the MVP

| Field | Source | Presentation |
| --- | --- | --- |
| Display name | User entry | Prominent card title |
| Personality code and name | Selected reference data | For example, INTJ — Architect |
| Personality description | Existing reference data, optionally edited or removed by the user | General type description or identified user-entered text; omitted when removed |
| Love language name | Selected reference data | Clear label |
| Love language description | Existing reference data, optionally edited or removed by the user | General preference description or identified user-entered text; omitted when removed |

### Reference content sources

Use the descriptions already present in the code:

- `PersonalityBaseballCards.Models/PersonalitiesBuilder.cs` contains the 16 personality codes, names, and descriptions.
- `PersonalityBaseballCards.Models/LoveLanguagesBuilder.cs` contains the five love language names and descriptions.

Both sources were located and contain the required information. No external research or replacement wording is required for the MVP. If required reference content is missing during implementation, report it to the project owner rather than inventing it.

### Deferred card content

The existing descriptions are sufficient for the first release. Additional communication-preference fields, practical guidance, and strengths, weaknesses, or opportunities sections are deferred. Remove the prototype's empty lists from the MVP presentation. Users can customize the two descriptions under FR-07 without adding new content sections.

## 9. Design and accessibility requirements

- Use a traditional sports trading card visual direction while prioritizing readable content.
- Keep the creation form and resulting card clearly related on the page.
- Support a narrow phone screen without horizontal scrolling in the main flow.
- Support keyboard operation for entry, selection, submission, and retry.
- Provide visible keyboard focus and sufficient text contrast.
- Associate validation feedback with the relevant controls.
- Allow long names and descriptions to wrap without overlapping or hiding content.
- Keep a photo optional in the future design; no external placeholder image is required for the MVP.

Specific colors, typography, and layout can be chosen during implementation within the sports trading card direction. The existing table layout is not a required design constraint.

## 10. Data and privacy expectations

**MVP:** Profile inputs, including customized descriptions, remain in the current browser session. The backend supplies reference data and does not store personal cards.

- Do not send names or completed cards to a server as part of card creation in this scope.
- Do not add profile tracking or analytics without an explicit product decision.
- State whether the card is saved and what happens on refresh.
- Revisit consent, visibility, retention, and deletion requirements before implementing stored or shared profiles.

## 11. Technical delivery requirements

Continue with the existing React/TypeScript frontend and ASP.NET Core backend unless a separate decision changes the architecture.

- The frontend must pass its production build and configured lint checks.
- Backend tests must pass.
- Automated validation must explicitly check the frontend build so backend-only success cannot hide frontend failures.
- Reference APIs must return the expected data and handle unknown lookup values predictably.
- Local setup instructions must describe the steps needed to run the app.
- Container port configuration must be consistent wherever the application is exposed.

The first milestone is a working local app. Public deployment and changes to Azure infrastructure are outside the MVP scope.

## 12. Validation of the MVP

A release is ready for review when its acceptance criteria can be demonstrated and the relevant automated checks pass.

At minimum, verify:

- A card can be created from each supported personality type and love language.
- Editing the name or either selection updates the correct card content.
- Editing, removing, and restoring either description works independently and preserves unrelated customizations.
- Changing a selection does not silently discard customized or removed content.
- Blank names and missing selections produce useful validation.
- Loading failures and retries work without losing entered information unnecessarily.
- Unknown personality lookup values receive the defined API response.
- Keyboard users can complete the primary journey.
- Long names and descriptions remain readable on desktop and phone layouts.
- The frontend production build, lint checks, and backend tests succeed.

Prefer tests of observable behavior over tests that merely duplicate implementation details. The existing test that counts personality types is useful but insufficient to establish that card creation works.

## 13. Recorded project owner decisions

| Topic | Decision |
| --- | --- |
| Audience | Work teams and coworkers |
| Ownership | Support creating your own card and one about someone else |
| Initial usefulness | The two existing reference descriptions are sufficient |
| Terminology | Keep “Love language” |
| Description customization | Allow descriptions to be edited or removed |
| Saving and sharing | Session-only cards are sufficient for the MVP |
| Visual direction | Sports trading card |
| Delivery target | Working local app |
| Content sources | Use existing code; raise missing content with the project owner |

The original nine product questions are resolved. Additional fields, persistence, and deployment require later scope decisions.

## 14. Next step

Create an implementation plan that maps these requirements to small milestones, acceptance checks, and the existing code. Include the known frontend build failure, form-to-card wiring, description customization, API error handling, and frontend CI validation. Keep this document updated when product decisions change.
