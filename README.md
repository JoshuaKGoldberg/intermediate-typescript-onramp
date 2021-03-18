# Intermediate TypeScript

Hi!
This repository contains code samples for my Introduction to TypeScript talk for onramp.io.

[See the slides online here.](https://1drv.ms/p/s!AvUc1cvPrJnWvtE872I9orq06967mw?e=EnqBOk)

## Local Setup

First clone the repository locally, install packages, and open it in your favorite editor:

```shell
git clone https://github.com/JoshuaKGoldberg/intermediate-typescript-onramp
cd intermediate-typescript-onramp
npm i
code .
```

### Global TypeScript

The easiest way to run TypeScript on the code is to first install it globally:

```
npm i -g typescript
```

Then you can run TypeScript on a particular file with the global `tsc` command:

```shell
tsc src/1.ts
```

To run TypeScript in watch mode, so it stays open and updates the output as you save files, add `-w`:

```shell
tsc src/1.ts -w
```

### Local TypeScript

If you'd prefer not to install globally for some reason or can't, you can keep the installation to this package:

```shell
npm i
```

Then you can `npm run build` instead to run `tsc`, or `npm run watch` to run `tsc -w`.

```shell
npm run build -- src/1.ts
npm run watch -- src/1.ts
```
