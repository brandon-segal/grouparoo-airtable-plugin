# grouparoo-airtable-plugin

[![status](https://tingle-api.spotify.net/v1/badge/di-amer/grouparoo-airtable-plugin/status)](https://backstage.spotify.net/tingle/di-amer/grouparoo-airtable-plugin#builds)
[![version](https://tingle-api.spotify.net/v1/badge/di-amer/grouparoo-airtable-plugin/version)](https://backstage.spotify.net/tingle/di-amer/grouparoo-airtable-plugin#builds)


## Description

Plugin for Grouparoo to add Airtable as a destination

What do records map to in Airtable?
- Records map to rows in tables in Airtable
- The primary key is an internal ID in Airtable
- There is an API that allows us to update, insert and read these rows knowing this internal ID

What do we call the fields in Airtable
- Fields in Airtable are just called fields
- These fields can be a collection of different types
  - String
  - Internal ID of record in other table
  - URL to other resource
  - Number
  - boolean
  - Lookup(Array of numbers, strings, booleans, or objects)

What does Group Membership map to?
- Group membership would map to a tags field in the table
- Group membership would be updated using the update method

Do the APIs exist to do things in bulk?
- Create and Update can accept up to 10 items per request

What do rate limits look like?
- The rate limit for Airtable is 5 requests per second with a 30 second penalty for exceeding that
- 429 status is returned if the rate limit is exceeded

Is there a supported/maintained Node API client?
- Yes there is the Airtable API client [Airtable API](https://github.com/Airtable/airtable.js)

Where is the Airtable icon from?
- [CleanPNG.com](https://www.cleanpng.com/png-airtable-database-spreadsheet-logo-application-sof-6054986/)

Where do we get credentials for Airtable?
- This can be accessed from the [user page on airtable](https://airtable.com/account)
## Usage

```sh
yarn add @bsegal/grouparoo-airtable-plugin
```

## Contributing

```sh
yarn install
```

```sh
yarn commit
```


### Scripts

- `yarn build`: CommonJS Modules (`/cjs`), and ESModule (`/esm`) from the source using the [TypeScript Compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
- `yarn format`: Format source code files via [Prettier].
- `yarn lint`: Lint all source files via [ESLint].
- `yarn test`: Run all tests via [Jest].
- `yarn commit`: Create a commit, correctly formatted using [commitizen].


### Continuous Integration / Publishing

CI is enabled via [build-info.yaml], using [Tingle].

[commitizen], [semantic-release], and [conventional-changelog] are all enabled by default. If you use `yarn commit` to format your commit messages, semantic-release will figure out what the next release of your library should be and will publish it to npm on every merge to master.

If you would rather directly control which versions are published on merge, you can replace the `"Release"` stage with the commented-out `"Attempt Publish"` stage within [build-info.yaml]. For more information, see the [npm-publish-if-not] action container.

---

_This project is based on the template [web/web-library-skeleton](https://ghe.spotify.net/web/web-library-skeleton)_

[build-info.yaml]: ./build-info.yaml
[commitizen]: https://github.com/commitizen/cz-cli
[conventional-changelog]: https://github.com/conventional-changelog/conventional-changelog
[ESLint]: https://eslint.org/
[Jest]: http://jestjs.io/
[npm-publish-if-not]: https://ghe.spotify.net/action-containers/npm-publish-if-not
[Prettier]: https://prettier.io/
[semantic-release]: https://github.com/semantic-release/semantic-release
