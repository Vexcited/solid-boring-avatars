import type { VoidComponent } from "solid-js";
import type { AvatarComponentProps } from "@/avatars";

import { Switch, Match, mergeProps } from "solid-js";

import AvatarBeam from "@/avatars/Beam";
import AvatarRing from "@/avatars/Ring";
import AvatarPixel from "@/avatars/Pixel";
import AvatarMarble from "@/avatars/Marble";
import AvatarSunset from "@/avatars/Sunset";
import AvatarBauhaus from "@/avatars/Bauhaus";

const VARIANTS = [
  "pixel",
  "bauhaus",
  "ring",
  "beam",
  "sunset",
  "marble"
] as const;

export type AvatarProps = AvatarComponentProps & {
  variant: typeof VARIANTS[number]
}

const DEFAULT_PROPS: AvatarProps = {
  variant: "marble",
  colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name: 'Clara Barton',
  square: false,
  title: false,
  size: 40,
};

const Avatar: VoidComponent<Partial<AvatarProps>> = (raw_props) => {
  // Default values taken from <https://github.com/boringdesigners/boring-avatars/blob/master/src/lib/components/avatar.js#L13-L21>.
  const props = mergeProps(DEFAULT_PROPS, raw_props);

  /** Checked variant to prevent not existing variant. */
  const variant = (): typeof VARIANTS[number] => {
    if (VARIANTS.includes(props.variant)) {
      return props.variant;
    }

    return "marble";
  };

  /** Props for avatar components. */
  const avatarProps = (): AvatarComponentProps => ({
    name: props.name,
    size: props.size,
    title: props.title,
    colors: props.colors,
    square: props.square
  })

  return (
    <Switch fallback={<AvatarMarble {...avatarProps()} />}>
      <Match when={variant() === "beam"}>
        <AvatarBeam {...avatarProps()} />
      </Match>
      <Match when={variant() === "bauhaus"}>
        <AvatarBauhaus {...avatarProps()} />
      </Match>
      <Match when={variant() === "marble"}>
        <AvatarMarble {...avatarProps()} />
      </Match>
      <Match when={variant() === "pixel"}>
        <AvatarPixel {...avatarProps()} />
      </Match>
      <Match when={variant() === "ring"}>
        <AvatarRing {...avatarProps()} />
      </Match>
      <Match when={variant() === "sunset"}>
        <AvatarSunset {...avatarProps()} />
      </Match>
    </Switch>
  );
};

export default Avatar;
