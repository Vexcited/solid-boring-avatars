import type { VoidComponent } from "solid-js";
import type { AvatarComponentProps } from ".";

import { Show, createMemo } from "solid-js";
import { hashCode, getUnit, getRandomColor, getBoolean, join } from '@/core/utils';

const ELEMENTS = 4;
const SIZE = 80;

const generateColors = (name: string, colors: string[]) => {
  const numFromName = hashCode(name);
  const range = colors && colors.length;

  return Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 1),
    translateY: getUnit(numFromName * (i + 1), SIZE / 2 - (i + 17), 2),
    rotate: getUnit(numFromName * (i + 1), 360),
    isSquare: getBoolean(numFromName, 2)
  }));
};

const AvatarBauhaus: VoidComponent<AvatarComponentProps> = (props) => {
  const properties = createMemo(() => generateColors(props.name, props.colors));

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

      <mask id="mask__bauhaus"
        maskUnits="userSpaceOnUse"
        height={SIZE}
        width={SIZE}
        x={0} y={0}
      >
        <rect
          width={SIZE}
          height={SIZE}
          fill="#FFFFFF"
          rx={props.square ? undefined : SIZE * 2}
        />
      </mask>

      <g mask="url(#mask__bauhaus)">
        <rect
          width={SIZE}
          height={SIZE}
          fill={properties()[0].color}
        />
        <rect
          x={(SIZE - 60) / 2}
          y={(SIZE - 20) / 2}
          width={SIZE}
          height={properties()[1].isSquare ? SIZE : SIZE / 8}
          fill={properties()[1].color}
          transform={join(
            `translate(${properties()[1].translateX} ${properties()[1].translateY})`,
            `rotate(${properties()[1].rotate} ${SIZE / 2} ${SIZE / 2})`
          )}
        />
        <circle
          r={SIZE / 5}
          cx={SIZE / 2}
          cy={SIZE / 2}
          fill={properties()[2].color}
          transform={`translate(${properties()[2].translateX} ${properties()[2].translateY})`}
        />
        <line
          x1={0}
          y1={SIZE / 2}
          x2={SIZE}
          y2={SIZE / 2}
          stroke-width={2}
          stroke={properties()[3].color}
          transform={join(
            `translate(${properties()[3].translateX} ${properties()[3].translateY})`,
            `rotate(${properties()[3].rotate} ${SIZE / 2} ${SIZE / 2})`
          )}
        />
      </g>
    </svg>
  );
};

export default AvatarBauhaus;
