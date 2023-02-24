
let fakeDb = [{ name: 'alberto' }, { name: 'juancito' }]

let getAllUsers = () => {
    return fakeDb
}

let getDetailUser = (name) => {
    return fakeDb.filter(user => user.name === name)
}

module.exports = { getAllUsers, getDetailUser }