# Boring Avatars for SolidJS

Tiny SolidJS library that generates custom, SVG-based avatars from any username and color palette.

> Port of [`boring-avatars`](https://github.com/boringdesigners/boring-avatars) for Solid.

## Installation

```bash
npm install --save solid-boring-avatars
yarn add solid-boring-avatars
pnpm add solid-boring-avatars
```

## Simple Usage

```typescript
import type { AvatarProps } from "solid-boring-avatars";
import Avatar from "solid-boring-avatars";

// You can use `AvatarProps` type to get
// Avatar component's props.
const props: AvatarProps = {
  size: 40,
  name: "Vexcited",
  variant: "marble",
  colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]
};

export const Component = () => (
  <Avatar {...props} />
);
```

## API

| Prop    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| size    | number or string, `40px` (default)                           |
| square  | boolean: `false` (default)                                   |
| title   | boolean: `false` (default)                                   |
| name    | string                                                       |
| variant | oneOf: `marble` (default), `beam`, `pixel`,`sunset`, `ring`, `bauhaus` |
| colors  | array of colors                                              |

