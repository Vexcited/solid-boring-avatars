import type { Component } from 'solid-js';
import Avatar from "solid-boring-avatars";

const App: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center gap-4 min-h-screen">
      <h1 class="mb-4 font-medium text-xl">SolidJS, boring-avatars</h1>

      <div class="flex gap-2">
        <div class="flex flex-col gap-2">
          <Avatar variant="beam" name="SolidJS" />
          <Avatar variant="pixel" name="SolidJS" />
          <Avatar variant="marble" name="SolidJS" />
          <Avatar variant="sunset" name="SolidJS" />
          <Avatar variant="ring" name="SolidJS" />
          <Avatar variant="beam" name="SolidJS" />
          <Avatar variant="bauhaus" name="SolidJS" />
        </div>
        <div class="flex flex-col gap-2">
          <Avatar variant="beam" square={true} name="SolidJS" />
          <Avatar variant="pixel" square={true} name="SolidJS" />
          <Avatar variant="marble" square={true} name="SolidJS" />
          <Avatar variant="sunset" square={true} name="SolidJS" />
          <Avatar variant="ring" square={true} name="SolidJS" />
          <Avatar variant="beam" square={true} name="SolidJS" />
          <Avatar variant="bauhaus" square={true} name="SolidJS" />
        </div>
        <div class="flex flex-col gap-2">
          <Avatar variant="beam" title={true} name="SolidJS" />
          <Avatar variant="pixel" title={true} name="SolidJS" />
          <Avatar variant="marble" title={true} name="SolidJS" />
          <Avatar variant="sunset" title={true} name="SolidJS" />
          <Avatar variant="ring" title={true} name="SolidJS" />
          <Avatar variant="beam" title={true} name="SolidJS" />
          <Avatar variant="bauhaus" title={true} name="SolidJS" />
        </div>
      </div>
    </div>
  );
};

export default App;
