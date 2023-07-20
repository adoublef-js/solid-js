import { createRouteData, createRouteAction, useRouteData } from "solid-start";
import { For } from "solid-js";
import { Api, Counter } from "~/lib/counters";

const apiUrl = "http://localhost:3000/api/counters";

export function routeData() {
    return createRouteData(
        async (_, { fetch }) => {
            const counters = await (
                await fetch(apiUrl, {
                    method: "GET",
                })
            ).json();
            return counters;
        }
        // { key: "counters" }
    );
}

export default function Home() {
    const data = useRouteData<typeof routeData>();

    return (
        <main>
            <CounterForm />
            <span>{"-".padStart(15, "-")}</span>
            <CounterList data={data()} />
        </main>
    );
}

type CounterCardProps = {
    counter: Counter;
};

function CounterCard(props: CounterCardProps) {
    const [_, rm] = createRouteAction(async (id: string, { fetch }) => {
        // TODO call the API
        await fetch(apiUrl + "/" + id, { method: "DELETE" });
    });

    return (
        <div>
            <span>value: {props.counter.value}</span>
            <button onclick={(_) => rm(props.counter.id)}>rm</button>
        </div>
    );
}

type CounterFormProps = {};

function CounterForm(props: CounterFormProps) {
    const [_, { Form }] = createRouteAction(
        async (formData: FormData, _) => {
            const { counter } = Object.fromEntries(formData.entries());
            await fetch(apiUrl + "/", {
                method: "POST",
                body: JSON.stringify({ value: +counter }),
            });
        }
        // { invalidate: "counters" }
    );

    return (
        <Form>
            <input type="number" name="counter" required />
            <button type="submit">create</button>
        </Form>
    );
}

type CounterListProps = {
    data?: Counter[];
};

function CounterList(props: CounterListProps) {
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
