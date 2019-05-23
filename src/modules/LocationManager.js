const remoteURL = "http://localhost:8088";

export default {
    get(id) {
        return fetch(`${remoteURL}/locationsFromAPI/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/locationsFromAPI`).then(e => e.json())
    },
    search(input) {
        return fetch(`${remoteURL}/locationsFromAPI?name_like=${input}`)
            .then(e => e.json())
    }
}