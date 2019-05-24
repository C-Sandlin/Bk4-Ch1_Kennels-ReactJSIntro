const remoteURL = "http://localhost:8088";

export default {
    get(id) {
        return fetch(`${remoteURL}/animalsFromAPI/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/animalsFromAPI`).then(e => e.json())
    },
    deleteAnimal(animalId) {
        return fetch(`${remoteURL}/animalsFromAPI/${animalId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then(e => e.json())
    },
    search(input) {
        return fetch(`${remoteURL}/animalsFromAPI?name_like=${input}`)
            .then(e => e.json())
    },
    addAn(newAnimalObj) {
        return fetch(`${remoteURL}/animalsFromAPI`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newAnimalObj)
        }).then(e => e.json())
    },
    edit(editedAnimal) {
        return fetch(`${remoteURL}/animalsFromAPI/${editedAnimal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAnimal)
        }).then(e => e.json());
    }
}