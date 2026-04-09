import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="pt-[25dvh]">
      <h1 class="text-9xl text-center font-extrabold">404</h1>
      <p class="text-center">Couldn't find that page.</p>
      <div class="flex justify-center mt-20"> 
        <A href="/">
          <button class="btn">Go Home</button>
        </A>
      </div>
    </main>
  );
}
