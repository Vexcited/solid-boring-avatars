import type { VoidComponent } from "solid-js";
import type { AvatarComponentProps } from ".";

import { Show, createMemo } from "solid-js";
import { hashCode, getRandomColor } from '@/core/utils';

const ELEMENTS = 4;
const SIZE = 80;

const generateColors = (name: string, colors: string[]) => {
  const numFromName = hashCode(name);
  const range = colors && colors.length;

  return Array.from({ length: ELEMENTS }, (_, i) =>
    getRandomColor(numFromName + i, colors, range)
  );
}

const AvatarSunset: VoidComponent<AvatarComponentProps> = (props) => {
  const sunsetColors = createMemo(() => generateColors(props.name, props.colors));
  const name = props.name.replace(/\s/g, '');

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      height={props.size}
      width={props.size}
      fill="none"
      role="img"
    >
      <Show when={props.title}>
        <title>{props.name}</title>
      </Show>

      <mask id="mask__sunset" maskUnits="userSpaceOnUse" x={0} y={0} width={SIZE} height={SIZE}>
        <rect width={SIZE} height={SIZE} rx={props.square ? undefined : SIZE * 2} fill="#FFFFFF" />
      </mask>

      <g mask="url(#mask__sunset)">
        <path fill={`url(#gradient_paint0_linear_${name})`} d="M0 0h80v40H0z" />
        <path fill={`url(#gradient_paint1_linear_${name})`} d="M0 40h80v40H0z" />
      </g>
      
      <defs>
        <linearGradient
          id={`gradient_paint0_linear_${name}`}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={sunsetColors()[0]} />
          <stop offset={1} stop-color={sunsetColors()[1]} />
        </linearGradient>
        <linearGradient
          id={`gradient_paint1_linear_${name}`}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={sunsetColors()[2]} />
          <stop offset={1} stop-color={sunsetColors()[3]} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AvatarSunset;
