## Getting Started

## How to start a new project using the Seed:

### Using the cli (recommended)

The "new" command of the [dbp-seed-nextjs-cli](https://github.com/dualboot-partners/dbp-seed-nextjs-cli) can be used to bootstrap a new project using the seed. It makes the process faster by downloading the latest version and cleaning up all git references to this repo so you can start developing a new app. 

Just run `dbp-cli new` and follow the instructions and everything should be ready to start working. 

![install_seed.webp](public%2Finstall_seed.webp)
---

### Downloading latest release (fallback method)

This is the fallback option. Just go to [releases page](https://github.com/dualboot-partners/dbp-seed-nextjs/releases) and download the latest. 

Extra steps with this approach:

#### 1. Run `pnpm install` to install all needed packages
#### 2. Get a clean git history
```bash
rm -rf .git
git init
git add .
git commit -am 'initial commit'
```

---

## Running the app

### Running dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Documentation

## Tech Stack

- React over [Nextjs](https://nextjs.org/)
- State Management: [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/), [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- Styles: [Tailwind CSS](https://tailwindcss.com/)
- Unit testing: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Jest](https://jestjs.io/)
- Code Quality: [Prettier](https://prettier.io/), [husky](https://www.npmjs.com/package/husky), [lint-staged](https://github.com/okonet/lint-staged), [eslint](https://eslint.org/)
- Other:
  - [Volta](https://volta.sh/)
  - [Next Auth](https://next-auth.js.org/)
  - [pnpm](https://pnpm.io/)

---

## Store and Services

For store management we are using [Redux Toolkit](https://redux-toolkit.js.org/) with [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for handling api requests and caching. In this context a file inside the **services** folders should be a slice that interacts with the api using RTQ; and a file inside **slices** folder should be a more general slice that doesn't use RTQ. Both services and slices should be correctly imported to the store.ts file.

## Routes

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Code quality tools

- prettier
- eslint
- git hooks

#### Git pre-commit hook:

Before every commit we run prettier to ensure correct code style and eslint to check for syntax errors or improvements. If there's an error the commit will not go through. If for any reason you need to cheat and force the commit without doing this checks, you can always pass the flag "--no-verify" to the git commit command. (This will void your warranty!)

#### Git pre-push hook:

Before every commit we run the build to ensure nothing would break. This way we avoid loosing time on CI pipelines when we know the build is going to fail.

## Removing example files

There are several example files in the starter project, some components and some pages, you can run ```yarn cli remove``` and select the ExampleFiles option to cleanup the codebase and start working on your new awesome app, without having to manually delete every file you don't need. This command will also uninstall some unneeded npm packages. 

## Disabling Next 13 app directory.

If you don't want to use the new app directory, which is still in beta, you can remove the /app folder and the lines on the next.config file that enables support for this feature:

```
  experimental: {
    appDir: true,
  },
```

## Command Line Tool (v1.4.2)

The command line tool accomplishes two purposes:

1. Speeding up development of common parts of the application like creating components, pages, slices, etc.
2. Stabilising a pattern to follow when extending the app by determining the location and name conventions of new files.

Please check you have an updated version of the cli by running `yarn cli up`

### Commands

`yarn cli help` Display help

`yarn cli new` Clones a new seed

`yarn cli up` Updates the cli to the latest version. 

`yarn cli create` Creates a new resource [component, route, service, slice]

`yarn cli remove` Very useful to remove initial project example files like the publication-example or todos pages without the need to do it manually. At the current version the only option is to remove example. 


## Nextjs Documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
