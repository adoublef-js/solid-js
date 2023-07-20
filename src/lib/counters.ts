import { createStore } from "solid-js/store";

function api() {
    const [counters, setCounters] = createStore<Counter[]>([
        { id: createId(), value: 0 },
    ]);

    return {
        list() {
            return counters;
        },
        create(value = 0) {
            const counter: Counter = { id: createId(), value };
            setCounters([...counters, counter]);
            return counter.id;
        },
        remove(id: string) {
            setCounters((list) => list.filter((it) => it.id !== id));
        },
    };
}

export const Api = api();

export type Counter = {
    id: string;
    value: number;
};

export function createId() {
    return Math.floor(Math.random() * Date.now()).toString(16);
}
