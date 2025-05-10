import type { SkipType } from "./types";

const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"

export async function getSkips(): Promise<SkipType[]> {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error(`Failed to fetch skips: ${res.statusText}`);
    }

    return await res.json();
}