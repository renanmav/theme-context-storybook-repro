# Theme Context Storybook Repro

This repo is a reproduction of the bug described [here](https://github.com/storybookjs/storybook/issues/9300).

## An overview

This repo was mainly inspired by [@necolas](https://github.com/necolas/react-native-web) and [@brunolemos](https://github.com/brunolemos/react-native-web-monorepo) with some tweaks.
It contains:
- React Native Web
- React Navigation
- Typescript
- Storybook
- Styled Components

## The startup

The main scripts are:
- To run the app, either run `yarn ios` or `yarn android`
- To run the browser app, run `yarn web`
- To run storybook server, run `yarn storybook`
- To delete everything and start over, `yarn delete:all`

## Some context

When I was facing the bug, I was working on `packages/components/src/modules/core/*` folder. `theme` object inside 
styled components were empty, soo to avoid being stucked on it, I just ignored the theme colors&metrics and 
used the values themselves, keeping the "right" way to do as a comment, like [here](https://github.com/renanmav/theme-context-storybook-repro/blob/master/packages/components/src/modules/core/Button.tsx#L29-L30), [here](https://github.com/renanmav/theme-context-storybook-repro/blob/master/packages/components/src/modules/core/Button.tsx#L118-L119) and [here](https://github.com/renanmav/theme-context-storybook-repro/blob/master/packages/components/src/modules/core/Typo.tsx#L25-L26). This might help when
debugging it.
