import { createRouteAction } from "solid-start";
import { Counter } from "~/lib/counters";
import { useCounterContext } from "./CounterContext";

const apiUrl = "http://localhost:3000/api/counters";

export type CounterCardProps = {
    counter: Counter;
};

export function CounterCard(props: CounterCardProps) {
    const [_, remove] = createRouteAction(async (id: string, { fetch }) => {
        // TODO call the API
        await fetch(apiUrl + "/" + id, { method: "DELETE" });
    });

    return (
        <div>
            <span>value: {props.counter.value}</span>
            <button onclick={(_) => remove(props.counter.id)}>rm</button>
        </div>
    );
}
