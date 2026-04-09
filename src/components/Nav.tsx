import { A, useLocation } from "@solidjs/router";
import { ArrowRightIcon, CarIcon, CatIcon, Check, Circle, DiamondIcon, Dot, GitBranch, Mail, MoveRight } from "lucide-solid";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "bg-base-300" : "";
  return (
    <div class="max-lg:collapse bg-base-100 lg:mb-48 shadow-sm w-full rounded-md fixed left-0 right-0 too-0 z-20 pr-2 pl-0 border-b border-b-zinc-800 animate-fade-down">
      <input id="navbar-1-toggle" class="peer hidden" type="checkbox" />
      <label for="navbar-1-toggle" class="fixed inset-0 hidden max-lg:peer-checked:block"></label>
      <div class="collapse-title navbar">
        <div class="navbar-start">
          <label for="navbar-1-toggle" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary class="font-extrabold">
                    <Circle size={"8px"} class="relative top-[1.2px]" fill={"limegreen"} stroke={"limegreen"} />
                    sink.cat
                  </summary>
                  <ul class="p-2 w-40 z-1 bg-base-200 top-5">
                    <A href="/">
                      <li><button><CatIcon size={"12px"} fill="white" stroke="white" />sink.cat</button></li>
                    </A>
                    <li><button><DiamondIcon size={"12px"} fill="white" stroke="white" /> Sophonic</button></li>
                  </ul>
                </details>
              </li>
              <div class="flex gap-2 ml-5">
                <A href="/">
                  <li><button class={active("/")}>Home</button></li>
                </A>
                <A href="/about">
                  <li><button class={active("/about")}>About</button></li>
                </A>
              </div>
            </ul>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            {/* <li>
              <details>
              <summary>Parent</summary>
              <ul class="p-2 bg-base-100 w-40 z-1">
              <li><button>Submenu 1</button></li>
              <li><button>Submenu 2</button></li>
              </ul>
              </details>
              </li> */}
          </ul>
        </div>
        <div class="navbar-end flex gap-2">
          <a href="mailto:sophie@sink.cat">
            <button class="btn"><Mail size={"16px"} /> Contact</button>
          </a>
          <a target="_blank" href="https://github.com/Sophia-Craw">
            <button class="btn btn-info"><GitBranch size={"16px"} /> GitHub</button>
          </a>
        </div>
      </div>

      <div class="collapse-content lg:hidden z-1">
        <ul class="menu flex flex-col gap-2">
          <A href="/">
            <li><button class={active("/")}>Home</button></li>
          </A>
          <A href="/about">
            <li><button class={active("/about")}>About</button></li>
          </A>
        </ul>
      </div>
    </div>
  );
}
