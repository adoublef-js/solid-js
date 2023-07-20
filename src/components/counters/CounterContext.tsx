import { JSX, createContext, useContext } from "solid-js";
import { createRouteAction } from "solid-start";

const apiUrl = "http://localhost:3000/api/counters";

const CounterContext = createContext<unknown>();

type CounterContextProps = JSX.HTMLAttributes<HTMLElement> & {};

export function CounterProvider(props: CounterContextProps) {
    // const [_, { Form }] = createRouteAction(
    //     async (formData: FormData, { ...rest }) => {
    //         console.log("called");
    //         const { counter } = Object.fromEntries(formData.entries());
    //         await fetch(apiUrl + "/", {
    //             method: "POST",
    //             body: JSON.stringify({ value: +counter }),
    //         });
    //     }
    //     // { invalidate: "counters" }
    // );

    // const [__, remove] = createRouteAction(async (id: string, { fetch }) => {
    //     // TODO call the API
    //     await fetch(apiUrl + "/" + id, { method: "DELETE" });
    // });

    //{{ Form, remove }}>
    return (
        <CounterContext.Provider value={{}}>
            {props.children}
        </CounterContext.Provider>
    );
}

export function useCounterContext() {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("context must be provided");
    }
    return context as { remove: any; Form: any };
}
