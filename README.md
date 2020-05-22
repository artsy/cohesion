## Cohesion [![CircleCI][circle_badge]][circleci] [![npm version][npm_badge]][npm]

### Artsy's analytics schema &amp; event helpers

- **State:** In development
- **GitHub:** https://github.com/artsy/cohesion
- **Docs:** https://cohesion.artsy.net
- **Ci**: https://circleci.com/gh/artsy/cohesion
- **[NPM](https://www.npmjs.com/package/@artsy/cohesion):** Package updates are published automatically on successful merges to master. Canaries are available on PR's from feature branches.
- **Point People**: [@eessex][], [@abhitip][]

## Contributing

Requirements: [Yarn][]

#### Set up:

```
yarn install
```

#### Run tests:

```
yarn test
```

#### Generate docs:

```
yarn docs
```

To view docs locally, visit the full filepath of `docs/index.html` in your browser, i.e, `file:///Users/<MY_USER>/<MY_LOCAL_DIRECTORY>/cohesion/doc/index.html`

## Schema

The `/Schema` directory represents the Artsy's analytics schema, and describes expectations for data consumed by Redshift and Segment.

This schema is maintained by Artsy's data team, engineers should not expect to change these files.

Valid analytics events are described in `/Schema/Event.ts`, and individual event schemas live in the `Schema/Events` directory, divided by concern.

Typings for all allowed values, such as `ContextModule`, are exported for use by engineers in consuming projects.

### Add a new event to the schema (For data analysts)

1. In `Schema/Event.ts`, add the name of the new event. This name defines the corresponding downstream table's name in Redshift, and should use the [`lowerCamelCase`][lowerCamelCase] naming convention.

```typescript
// Schema/ActionType.ts

export enum ActionType {
  ...
  myNewEvent = "myNewEvent",
  ...
}

```

2. In `Schema/Events` directory, create a new interface describing the shape of the new event, as it is received in Segment/Redshift.

- The name of the interface should match the `ActionType` created in step 1, but use the [`UpperCamelCase`][UpperCamelCase] naming convention.
- The `action` key is required and should match the `ActionType` created in step 1.
- If your event uses values not yet in the schema, such as a new `ContextModule`, add new values to the existing typings in the Schema directory.

```typescript
// Schema/Events/MyNewEvent.ts

export interface MyNewEvent {
  action: ActionType.myNewEvent
  context_module: ContextModule
  optional_property?: string
  required_property: number
}
```

3. In `Schema/Event.ts`, add the new interface to the valid events master list, `Event`

4. Add descriptive comments with examples to explain the use of your new event. Our documentation is generated automatically from in-code comments, find more information on syntax in the [`typedoc` docs][typedoc_docs].

5. If you have created any new files, add an export statement to `Schema/index.ts` like so:

```typescript
// Schema/index.ts

export * from "./Events/MyNewEvent"
```

6. PR your changes. Once merged, the schema will be updated and your new event and values will be available to consumers of this package.

7. Data analysts should request an engineer to construct a new event helper for the `/Events` directory (see below).

## Events

The `/Events` directory contains javascript helpers that return schema-compliant analytics events, and provide some useful default values. Each helper corresponds to one event from `/Schema/Events.ts`.

Engineers should use these helpers whenever sending analytics data to Segment, for example, when creating an analytics event with `react-tracking`.

[circle_badge]: https://circleci.com/gh/artsy/cohesion.svg?style=svg
[circleci]: https://circleci.com/gh/artsy/cohesion
[npm_badge]: https://badge.fury.io/js/%40artsy%2Fcohesion.svg
[npm]: https://www.npmjs.com/package/@artsy/2Fcohesion
[@eessex]: https://github.com/eessex
[@abhitip]: https://github.com/abhitip
[Yarn]: https://classic.yarnpkg.com/en/docs/install/#mac-stable
[lowerCamelCase]: https://wiki.c2.com/?LowerCamelCase
[UpperCamelCase]: https://wiki.c2.com/?UpperCamelCase
[typedoc_docs]: https://typedoc.org/guides/doccomments
