import { For } from "solid-js";
import { Counter } from "~/lib/counters";
import { CounterCard } from "./CounterCard";

export type CounterListProps = {
    data?: Counter[];
};

export function CounterList(props: CounterListProps) {
    return (
        <ul>
            <For each={props.data}>
                {(counter) => (
                    <li>
                        <CounterCard counter={counter} />
                    </li>
                )}
            </For>
        </ul>
    );
}
