import type { Component } from 'solid-js';
import type { AvatarProps } from "solid-boring-avatars";

import { createStore } from 'solid-js/store';
import { For } from 'solid-js';

import Avatar from "solid-boring-avatars";

const Item: Component<Partial<AvatarProps>> = (props) => (
  <div class="flex gap-2 items-center">
    <Avatar {...props} />
    <p>{props.variant}</p>
  </div>
);

const App: Component = () => {
  const [state, setState] = createStore({
    square: false,
    name: "SolidJS",
    size: 32,
    appendTitleTag: false,

    colors: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']
  });
  
  return (
    <div class="flex flex-col items-center justify-center gap-4 min-h-screen">
      <h1 class="font-medium text-xl">SolidJS, boring-avatars</h1>
      <a class="mb-4 underline" href="https://github.com/Vexcited/solid-boring-avatars">GitHub</a>

      <div class="flex gap-2">
        <label class="flex items-center gap-1">
          <input
            type="checkbox"
            checked={state.square}
            onChange={(e) => setState("square", e.currentTarget.checked)}
          />
          Use square icons
        </label>

        <label class="flex items-center gap-1">
          <input
            type="checkbox"
            checked={state.appendTitleTag}
            onChange={(e) => setState("appendTitleTag", e.currentTarget.checked)}
          />
          Append `title` tag to SVGs
        </label>

      </div>

      <label class="flex items-center gap-1">
        Username:
        <input
          type="text"
          value={state.name}
          onInput={(e) => setState("name", e.currentTarget.value)}
        />
      </label>

      <div class="flex gap-2">
        <For each={state.colors}>
          {color => (
            <div class="w-8 h-8 rounded-full" style={{ background: color }} />
          )}
        </For>
      </div>

      <label class="flex items-center gap-1">
        <input
          type="range"
          min={2}
          max={128}
          step={1}
          value={state.size}
          onInput={(e) => setState("size", parseInt(e.currentTarget.value))}
        />
        Size ({state.size}px)
      </label>

      <div class="flex flex-col gap-2">
        <Item variant="beam" size={state.size} title={state.appendTitleTag} square={state.square} name={state.name} colors={state.colors} />
        <Item variant="pixel" size={state.size} title={state.appendTitleTag} square={state.square} name={state.name} colors={state.colors} />
        <Item variant="marble" size={state.size} title={state.appendTitleTag} square={state.square} name={state.name} colors={state.colors} />
        <Item variant="sunset" size={state.size} title={state.appendTitleTag} square={state.square} name={state.name} colors={state.colors} />
        <Item variant="ring" size={state.size} title={state.appendTitleTag} square={state.square} name={state.name} colors={state.colors} />
        <Item variant="beam" size={state.size} title={state.appendTitleTag} square={state.square} name={state.name} colors={state.colors} />
        <Item variant="bauhaus" size={state.size} title={state.appendTitleTag} square={state.square} name={state.name} colors={state.colors} />
      </div>
    </div>
  );
};

export default App;
