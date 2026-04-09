import { Clock } from "lucide-solid";
import { For, Show } from "solid-js";


export default function AppCard(props: { github: string, title: string, description: string, icon?: string, frameworks: Array<string>, time: string }) {
    return (
        <div class="hover-3d hover:cursor-pointer transition duration-300 ease-in-out active:scale-95 bg-base-200">
            <figure class="max-w-100 rounded-2xl border border-zinc-800">
                <div class="card bg-base-200 image-full w-96 shadow-sm">
                    <a target="_blank" href={props.github}>
                        <div class="card-body flex flex-col gap-4">
                            <div class="flex gap-3">
                                <Show when={props.icon}>
                                    <img class="w-12 h-12 rounded-2xl" src={props.icon}  />
                                </Show>
                                <h2 class="card-title font-extrabold text-4xl text-zinc-200 line-clamp-1">{props.title}</h2>
                            </div>
                            <p class="line-clamp-2 text-zinc-500">{props.description}</p>
                            <div class="card-actions justify-end">
                                <For each={props.frameworks}>
                                    {(framework) => (
                                        <div class="badge badge-info font-extrabold">{framework}</div>
                                    )}
                                </For>
                                <div class="badge badge-ghost">
                                    <Clock size={"12px"} />
                                    {props.time}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}