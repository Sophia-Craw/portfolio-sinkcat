
import { Bubbles, Diamond, Mail, Text, Video } from "lucide-solid"
import Icon from "../img/cat.png"
import { A } from "@solidjs/router"

export default function Footer() {
    return (
        <footer class="footer sm:footer-horizontal bg-base-200 text-neutral-content p-10 border-t border-zinc-700 animate-fade">
            <aside>
                <img class="w-20 h-20" src={Icon} alt="" />
                <p class="font-extrabold text-center w-full">
                    sink.cat
                </p>
            </aside>
            <nav>
                <h6 class="footer-title">Contact</h6>
                <div class="grid grid-flow-col gap-4">
                    <a class="flex gap-2 hover:underline" href="mailto:sophie@sink.cat"><Mail class="relative top-[2.7px]" size={"16px"}/> sophie@sink.cat</a>
                </div>
                <div class="grid grid-flow-col gap-4">
                    <a class="flex gap-2 hover:underline" href="mailto:sinkcat0113@proton.me"><Mail class="relative top-[2.7px]" size={"16px"}/> sinkcat0113@proton.me</a>
                </div>
            </nav>
            <nav>
                <h6 class="footer-title">Socials</h6>
                <div class="grid grid-flow-col gap-4">
                    <a class="flex gap-2 hover:underline" href="https://youtube.com/@sinkcat0"><Video class="relative top-[2.7px]" size={"16px"}/> YouTube</a>
                </div>
            </nav>
            <nav>
                <h6 class="footer-title">More</h6>
                <div class="grid grid-flow-col gap-4">
                    <a class="flex gap-2 hover:underline" href="sophonic.sink.cat"><Diamond stroke={"white"} fill={"white"} class="relative top-[2.7px]" size={"16px"}/> Sophonic</a>
                </div>
                <div class="grid grid-flow-col gap-4">
                    <A class="flex gap-2 hover:underline" href="/about">About me</A>
                </div>
            </nav>
        </footer>
    )
}