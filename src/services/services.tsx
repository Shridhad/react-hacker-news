const HN_API = "https://api.hnpwa.com/v0/";


export async function fetchItems(type: string, page = 1) {
    const res = await fetch(`${HN_API}${type}/${page}.json`);
    return await res.json();
}

export async function fetchItem(id: string) {
    const res = await fetch(`${HN_API}/item/${id}.json`);
    return await res.json();
}