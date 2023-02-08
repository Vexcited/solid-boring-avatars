import type { Component } from 'solid-js';
import Avatar from "solid-boring-avatars";

const App: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center gap-4 min-h-screen">
      <Avatar variant="beam" />
    </div>
  );
};

export default App;
