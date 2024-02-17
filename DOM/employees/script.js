
fetch("https://jsonplaceholder.typicode.com/users/").then((res) => res.json()).then(users => displayEmployee(users))



function displayEmployee(users) {
    data = ``
    for (let e of users) {
        data += `
    <div class="col-4" id="main">
        <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name : ${e.name} </li>
                <li class="list-group-item">Email : ${e.email} </li>
                <li class="list-group-item">Website : ${e.website} </li>
            </ul>
            <div class="card-footer">
                ${e.address.city}
            </div>
        </div>
    </div>`
        document.getElementById("main").innerHTML = data
    }
}