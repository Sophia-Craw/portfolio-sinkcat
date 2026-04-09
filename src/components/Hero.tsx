import { ArrowBigDown, ArrowDown, ArrowDown10, ArrowDownIcon, GitBranch, Mail } from "lucide-solid"
import Icon from "../img/cat.png"

export default function Hero() {
    return (
        <>
            <div class="bg-[url(/grid.png)] flex flex-col gap-12 lg:p-30 pt-30 pb-20 mask-b-from-80% mask-radial-[100%_90%] mask-radial-from-800%">
                <div>
                    <img class="block mr-auto ml-auto w-50 h-50 animate-fade-up" src={Icon} alt="" />
                </div>
                <div class="text-center animate-fade-up animate-delay-200">
                    <h1 class="text-7xl font-extrabold">
                        Making
                        <span class="text-rotate text-7xl font-extralight">
                            <span class="lg:ml-4">
                                <span>Software.</span>
                                <span>Tools.</span>
                                <span>Projects.</span>
                                <span>Utilities.</span>
                                <span>Music.</span>
                                <span>Art.</span>
                            </span>
                        </span>
                    </h1>
                </div>
                <div class="flex gap-2 justify-center">
                    <a href="mailto:sophie@sink.cat">
                        <button class="btn animate-fade-right animate-delay-300"><Mail size={"16px"} /> Contact</button>
                    </a>
                    <a target="_blank" href="https://github.com/Sophia-Craw">
                        <button class="btn btn-info animate-fade-left animate-delay-400"><GitBranch size={"16px"} /> GitHub</button>
                    </a>
                </div>
                <div class="flex justify-center animate-bounce">
                    <ArrowDownIcon />
                </div>
            </div>
        </>
    )
}