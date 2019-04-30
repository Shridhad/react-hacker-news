const HN_API = "https://api.hnpwa.com/v0/";
export function fetchItems(type: string, page = 1) {
    return fetch(`${HN_API}${type}/${page}.json`)
        .then((res => res.json()));
}

export function fetchItem(id: string) {
    return fetch(`${HN_API}/item/${id}.json`)
        .then(res => res.json());
}