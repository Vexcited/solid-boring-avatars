import type { Component } from 'solid-js';
import Avatar from "solid-boring-avatars";

import { createSignal } from "solid-js";

const App: Component = () => {
 

  return (
    <div class="flex flex-col items-center justify-center gap-4 min-h-screen">
      <h1 class="mb-4 font-medium text-xl">SolidJS, boring-avatars</h1>

      <Avatar variant="beam" />
      <Avatar variant="bauhaus" />
    </div>
  );
};

export default App;
