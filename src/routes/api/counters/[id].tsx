import { APIEvent } from "solid-start";
import { Api } from "~/lib/counters";

export function DELETE({ params }: APIEvent) {
    Api.remove(params.id);
    return new Response(null, { status: 204 });
}
