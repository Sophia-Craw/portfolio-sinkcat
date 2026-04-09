import Hero from "~/components/Hero";
import JfinIcon from "../img/jfin_logo_smaller.png"
import BGSIcon from "../img/bgs_logo.png"
import { Clock, Wrench } from "lucide-solid";
import AppCard from "~/components/AppCard";
import ServerCard from "~/components/ServerCard";
import { For } from "solid-js";
import Footer from "~/components/Footer";


export default function Home() {

  const serverUrls = [
    {name: "Jellyfin", icon: "https://imgs.search.brave.com/re_9T6Onpob3x1wsQ6iD_mIAIkG9cq0hfGTWBMOklmg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9qZWxseWZp/bi1pY29uLnBuZw", path: "https://jellyfin.sink.cat"},
    {name: "SearXNG", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/searxng.png", path: "https://search.sink.cat"},
    {name: "Open WebUI", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/open-webui.svg", path: "https://llm.sink.cat"},
  ]

  return (
    <>
    
      <main class="pb-10 bg-base-100 flex flex-col justify-center w-full">
        <Hero />
        <div class="divider"></div>
        <div class="flex flex-col gap-5 pr-12 pl-12 mt-12">
          <h1 class="font-extrabold text-3xl text-zinc-300">Apps, Utilities & Tools</h1>
          <p class="font-extralight text-zinc-400">I have developed some apps and utilties in my spare time, all of which are free and open source.</p>
          <div class="flex flex-wrap gap-4 mt-8 justify-center">
            <AppCard github="https://github.com/Sophia-Craw/jfin" title="Jfin" description="Jfin is an interactive music player that is compatiable with Jellyfin." icon={JfinIcon} frameworks={["SvelteKit"]} time="1 Week" />
            <AppCard github="https://github.com/Sophia-Craw/boardgamescanner" title="BGS" description="Board Game Scanner is an app that lets you scan the bar codes of your board games and save them in the app as your collection." icon={BGSIcon} frameworks={["SvelteKit", "Capacitor"]} time="1 Week" />
            <AppCard github="https://github.com/Sophia-Craw/spipper" title="Spipper" description="Spipper is a tool that lets you take ownsership of your Spotify music for those seeking refuge from Spotify." frameworks={["Python"]} time="2 Weeks" />
          </div>
          <h1 class="font-extrabold text-3xl text-zinc-300 mt-12">Self-hosting & Admin</h1>
          <p class="font-extralight text-zinc-400">I self-host and manage my own server infrustructure. I utilize a lot of open source tools to make my experience the best for me. You can find the status of these services below:</p>
          <div class="flex flex-col gap-5">
            <For each={serverUrls}>
              {(service) => (
                <ServerCard name={service.name} icon={service.icon} path={service.path} />
              )}
            </For>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
