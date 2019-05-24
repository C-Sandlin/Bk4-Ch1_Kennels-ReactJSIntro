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
    },
    addOwner(newOwnerObj) {
        return fetch(`${remoteURL}/ownersFromAPI`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newOwnerObj)
        }).then(e => e.json())
    },
    deleteOwner(id) {
        return fetch(`${remoteURL}/ownersFromAPI/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then(e => e.json())
    }
}