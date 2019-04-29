const HN_API = "https://api.hnpwa.com/v0/";
export function fetchItems(type: string, page = 1) {
    return fetch(`${HN_API}${type}/${page}.json`)
        .then(((response) => response.json()));
}