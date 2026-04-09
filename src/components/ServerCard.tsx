import { createEffect, createSignal, Show, Suspense } from "solid-js";

const getStatus = async (path: string) => {
    "use server"
    try {
        const resp = await fetch(path)

        setTimeout(async () => {
            if (!resp.body)
            return "offline"
        }, 5000)

        return resp.status === 200 ? "online" : "offline"
    } catch (e) {
        return "offline"
    }
}

export default function ServerCard(props: { name: string, icon?: string, path: string }) {

    const [stat, setStat] = createSignal("")

    createEffect(async () => {
        setStat(await getStatus(props.path))
    })

    return (
        <a href={props.path}>
            <div class="card card-md shadow-sm border border-zinc-800 bg-base-200 w-full transition duration-300 ease-in-out hover:cursor-pointer hover:bg-base-300">
                <div class="p-4 flex gap-5">
                    <Show when={stat() === ""}>
                        <span class="loading loading-ring loading-sm"></span>
                    </Show>
                    <Suspense fallback={<span class="loading loading-ring loading-sm"></span>}>
                        <Show when={stat() === "online"}>
                            <span
                                class={`animate-pulse indicator-item indicator-middle indicator-start relative top-3 scale-50 badge ${stat() === "online" ? "badge-success" : "badge-error"}`}
                            ></span>
                        </Show>
                    </Suspense>
                    <Show when={props.icon}>
                        <div>
                            <img class="relative top-2.5 w-8 h-8 object-contain" src={props.icon} alt="" />
                        </div>
                    </Show>
                    <div>
                        <h2 class="card-titl">{props.name}</h2>
                        <p class="text-zinc-500">{props.path}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}