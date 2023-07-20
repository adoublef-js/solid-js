import { createRouteAction, redirect, refetchRouteData } from "solid-start";

const apiUrl = "http://localhost:3000/api/counters";

export type CounterFormProps = {};

export function CounterForm(props: CounterFormProps) {
    const [_, { Form }] = createRouteAction(
        async (formData: FormData, { ...rest }) => {
            const { counter } = Object.fromEntries(formData.entries());
            await fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify({ value: +counter }),
            });
            alert("clicked");
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
