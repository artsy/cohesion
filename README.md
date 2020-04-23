# Cohesion [![CircleCI](https://circleci.com/gh/artsy/cohesion.svg?style=svg)](https://circleci.com/gh/artsy/cohesion) [![npm version](https://badge.fury.io/js/%40artsy%2Fcohesion.svg)](https://www.npmjs.com/package/@artsy/2Fcohesion)

### Artsy's analytics schema &amp; event helpers

- **State:** In development
- **GitHub:** https://github.com/artsy/cohesion
- **Docs:** https://cohesion.artsy.net
- **Ci**: https://circleci.com/gh/artsy/cohesion
- **[NPM](https://www.npmjs.com/package/@artsy/2Fcohesion):** Package updates are published automatically on successful merges to master. Canaries are available on PR's from feature branches.
- **Point People**: [@eessex](https://github.com/eessex), [@abhitip](https://github.com/abhitip)

## Contributing

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

## Schema

The `/Schema` directory represents the Artsy's analytics schema, and describes expectations for data consumed by Redshift and Segment.

This schema is maintained by Artsy's data team, engineers should not expect to change these files.

Valid analytics events are described in `/Schema/Event.ts`.

Typings for all allowed values, such as `ContextModule`, are exported for use by engineers in consuming projects.

### Add a new event to the schema (For data analysts)

1. In `Schema/ActionType.ts`, add the name of the new event. This name defines the corresponding downstream table's name in Redshift, and should use the [`lowerCamelCase`](https://wiki.c2.com/?LowerCamelCase) naming convention.

```typescript
// Schema/ActionType.ts

export enum ActionType {
  ...
  myNewEvent = "myNewEvent",
  ...
}

```

2. In `Event.ts`, create an interface describing the shape of the new event, as it is recieved in Segment/Redshift.

The `action` key is required and should match the `ActionType` created in step 1.

```typescript
// Schema/Event.ts

export interface MyNewEvent {
  action: ActionType.myNewEvent
  context_module: ContextModule
  optional_property?: string
  required_property: number
}
```

3. If your event uses values not yet in the schema, such as a new `ContextModule`, add new values to existing enums in the Schema directory.

4. Add descriptive comments with examples to explain the use of your new event. Our documentation is generated automatically from in-code comments, find more information on syntax in the [`typedoc` docs](https://typedoc.org/guides/doccomments/).

5. PR your changes. Once merged, the schema will be updated and your new event and values will be available to consumers of this package.

6. Data analysts should request an engineer to construct a new event helper for the `/Events` directory (see below).

## Events

The `/Events` directory contains javascript helpers that return schema-compliant analytics events, and provide some useful default values. Each helper corresponds to one event from `/Schema/Events.ts`.

Engineers should use these helpers whenever sending analtics data to Segment, for example, when creating and analytics event with `react-tracking`.
