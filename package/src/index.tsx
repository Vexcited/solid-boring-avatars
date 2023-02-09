import type { VoidComponent } from "solid-js";
import type { AvatarProps } from "@/avatars";

import AvatarBeam from "@/avatars/Beam";
import AvatarBauhaus from "@/avatars/Bauhaus";
import AvatarMarble from "@/avatars/Marble";

import { Switch, Match, mergeProps } from "solid-js";

const variants = [
  "pixel",
  "bauhaus",
  "ring",
  "beam",
  "sunset",
  "marble"
] as const;

const Avatar: VoidComponent<Partial<AvatarProps> & {
  variant:
    | "beam"
    | "bauhaus"
    | "marble"
}> = (props) => {
  // Default values taken from <https://github.com/boringdesigners/boring-avatars/blob/master/src/lib/components/avatar.js#L13-L21>.
  const merged = mergeProps({
    variant: "marble",
    colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
    name: 'Clara Barton',
    square: false,
    title: false,
    size: 40,
  }, props);

  const variant = () => {
    if (variants.includes(merged.variant)) {
      return merged.variant;
    }

    return "marble";
  };

  const avatarProps = (): AvatarProps => ({
    name: merged.name,
    square: merged.square,
    size: merged.size,
    colors: merged.colors
  })

  return (
    <Switch>
      <Match when={variant() === "beam"}>
        <AvatarBeam {...avatarProps()} />
      </Match>
      <Match when={variant() === "bauhaus"}>
        <AvatarBauhaus {...avatarProps()} />
      </Match>
      <Match when={variant() === "marble"}>
        <AvatarMarble {...avatarProps()} />
      </Match>
    </Switch>
  );
}

export default Avatar;

