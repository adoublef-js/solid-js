import { APIEvent, json } from "solid-start";
import { Api } from "~/lib/counters";

export function GET() {
    // Api.list()
    return json(Api.list());
}

export async function POST({ request }: APIEvent) {
    const { value } = await request.json();
    const id = Api.create(value);
    return new Response(null, {
        status: 201,
        headers: {
            Location: "http://localhost:3000/api/counters/" + id,
        },
    });
}
