const remoteURL = "http://localhost:8088";

export default {
    get(id) {
        return fetch(`${remoteURL}/ownersFromAPI/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/ownersFromAPI`).then(e => e.json())
    },
    search(input) {
        return fetch(`${remoteURL}/ownersFromAPI?name_like=${input}`)
            .then(e => e.json())
    }
}