# Agent Guidelines

`@artsy/cohesion` is **Artsy's analytics schema** — a published TypeScript package of
interfaces and enums that describe every analytics event sent to Segment/Redshift.
There is no runtime logic: each event is a typed shape, and each event name maps to a
downstream Redshift table. Consuming apps (web + iOS) import these types to fire events.

## Tech Stack

- **TypeScript** (strict) — the entire schema is type definitions; no runtime code
- **Babel** — compiles `src/**/*.ts` → `dist/` (`@babel/preset-typescript`)
- **tsc** — type-checking and `.d.ts` emission only (not used for transpiling)
- **Jest** — tests assert each event interface serializes to its expected JSON shape
- **ESLint + Prettier** — `simple-import-sort` and `sort-keys-fix` are enforced
- **TypeDoc** — public docs at https://cohesion.artsy.net are generated from doc comments
- **Auto / CircleCI** — versioning and npm publish on merge to `main`

## Common Commands

- `yarn test` — run the Jest suite (`<file>` or `-t <name>` to scope)
- `yarn type-check` — `tsc --noEmit` (also runs on pre-push)
- `yarn lint` — `eslint . --ext .ts --fix` (import + key sorting)
- `yarn docs` — regenerate TypeDoc output into `doc/`

## Pre-Commit Verification

Before every commit, verify on pending files:

```sh
yarn type-check
yarn test
yarn lint
```

`husky` runs `lint-staged` on pre-commit and `yarn type-check` on pre-push. Never commit
code that fails these checks.

## Code Style & Common Patterns

These are enforced by lint/test or are established conventions — follow them verbatim:

- **One interface per event.** Name it `UpperCamelCase`; its `action` literal and the
  matching `ActionType`/`OsActionType` enum member are `lowerCamelCase`. The enum member
  value **is** the Redshift table name, so it must not change casually.
- **`action` is always a literal type**, e.g. `action: ActionType.commercialFilterParamsChanged`
  (not the bare `ActionType`).
- **Sort keys alphabetically.** `sort-keys-fix` lints interface members, enum members, and
  object literals (including test fixtures) into alphabetical order. Run `yarn lint` to fix.
- **Sort imports.** `simple-import-sort` orders imports; let `--fix` handle it.
- **Every event needs a context module and an owner type.** Use `context_module`
  (`ContextModule`/`OsContextModule`) for the component, and an owner-type field for the
  page/screen: `context_owner_type` (`OwnerType`), or `context_page_owner_type` /
  `context_screen_owner_type` for the page/screen-scoped subtypes.
- **Document every event with a TypeDoc block** containing a prose description and an
  `@example` code fence showing the emitted JSON. This is the public documentation — see
  `src/Schema/Events/FilterAndSort.ts` for the canonical style.
- **Aggregate interfaces into a union** (e.g. `OsSubmitEvent`, `OsEvent`) and re-export
  every new file from the relevant `index.ts` and `src/Schema/index.ts`.
- **Prettier:** no semicolons, double quotes, trailing commas, 2-space indent.

To add a CMS or core event, follow the step-by-step guide in [README.md](README.md#schema).

## ArtOS Events (`src/Schema/os/`)

ArtOS events have their **own** schema and conventions — do **not** reuse CMS or core
events for ArtOS. When adding ArtOS tracking, follow these principles (from the
[ArtOS tracking guidelines](https://app.notion.com/p/373cab0764a080fca7e7d5a984ec17c7) and
[Filter/Sort/Search doc](https://app.notion.com/p/37bcab0764a081a2b22dc0f6434e44fa)):

1. **Live under `src/Schema/os/`** with its own `Events/` and `Values/` folders. ArtOS has
   dedicated `OsActionType`, `OsContextModule`, and `OsOwnerType` — never the shared ones.
2. **Never reuse CMS events** for ArtOS surfaces, and vice versa.
3. **Name events `VerbNoun`, past tense** — `ClickedFilterDrawer`, `CreatedStudioContent`,
   `BulkEditedArtworks`. (The older `NounVerb` names like `ListCreated` were flipped.)
4. **No generic action events.** Avoid `InventoryClicked` / `Clicked` / `Toggled` /
   `Impression`; events must name the specific intent (`ClickedActionsDropdown`,
   not a catch-all click). Events should be **reusable across surfaces** by intent — e.g.
   `ClickedFilterDrawer` can fire on any page that has a filter component.
5. **Differentiate surfaces via owner type, not a module field.** Do not add an `OSModule`
   field; use `context_page_owner_type` (`inventory`, `collection`, `studioInstagram`, …)
   to distinguish ArtOS surfaces. The URL itself changes (`/catalog` → `/lists` → …).
6. **Group reusable events by interaction in shared files** (`Click.ts`, `Impression.ts`,
   `Toggle.ts`). A set of events that is 100% non-reusable and scoped to one surface may get
   its own file (e.g. `InstagramEditor.ts`, `MultiAddFlow.ts`).
7. **Backend-tied, flow-completion events go in `Submit.ts`** — events that fire on
   successful completion of a flow and depend on a backend change (`BulkEditedArtworks`,
   `DeletedArtwork`, `DistributedArtworks`). These are platform-agnostic (web + future app),
   so they stay out of the web-only `Click.ts`.
8. **Avoid name collisions with existing events** — the OS list events drop the "Artwork"
   qualifier (`CreatedList`, not `CreatedArtworkList`) so they don't clash with the existing
   CMS saved-artwork-list events.

## File Organization

```
src/
├── index.ts              # Top-level package entry (re-exports Schema + DeprecatedHelpers)
├── Schema/
│   ├── index.ts          # Re-exports every event + value file (web/iOS, CMS, ArtOS)
│   ├── Events/           # Core web + iOS events (FilterAndSort, Search, Click, Tap, …)
│   ├── Values/           # Shared enums: ContextModule, OwnerType, Intent, Tab, …
│   ├── CMS/              # CMS (gallery partner CMS) schema — Events/ + Values/
│   └── os/               # ArtOS schema — see "ArtOS Events" above
│       ├── Events/       # Click, Submit, InstagramEditor, MultiAddFlow, … (+ __tests__/)
│       └── Values/       # OsContextModule, OsOwnerType
├── DeprecatedSchema/     # Frozen legacy schema — do not extend
└── DeprecatedHelpers/    # Frozen legacy helpers — do not extend
```

## Workflow

- Branch off `main`; open a PR using `pull_request_template.md`.
- Merging to `main` auto-publishes a new npm version via Auto; **PRs from feature branches
  publish canary versions** consumers can test before merge.
- Commit messages follow Conventional Commits (e.g. `chore:`, `feat:`) — used by Auto to
  decide the version bump.

## Gotchas

- **Adding a file is not enough** — it must be re-exported from `src/Schema/index.ts` (and
  any folder `index.ts` union) or consumers can't import it.
- **The enum value is a contract.** An `ActionType`/`OsActionType` value names a Redshift
  table; renaming it breaks the downstream data pipeline.
- **`DeprecatedSchema` / `DeprecatedHelpers` are frozen** — add new events to `Schema`.
- **Doc comments are shipped docs**, not just hints — keep `@example` blocks accurate.
- The data team owns the core `Schema`; coordinate before changing shared `Values`.

## Further Documentation

- [README.md](README.md) — setup, and the canonical "add a new event" walkthrough
- ArtOS tracking guidelines: [event list & principles](https://app.notion.com/p/373cab0764a080fca7e7d5a984ec17c7), [Filter/Sort/Search](https://app.notion.com/p/37bcab0764a081a2b22dc0f6434e44fa)
- Generated API docs: https://cohesion.artsy.net
