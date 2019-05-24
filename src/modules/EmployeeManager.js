const remoteURL = "http://localhost:8088";

export default {
    get(id) {
        return fetch(`${remoteURL}/employeesFromAPI/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/employeesFromAPI`).then(e => e.json())
    },
    search(input) {
        return fetch(`${remoteURL}/employeesFromAPI?name_like=${input}`)
            .then(e => e.json())
    },
    deleteEmployee(employeeId) {
        return fetch(`${remoteURL}/employeesFromAPI/${employeeId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then(e => e.json())
    }
}