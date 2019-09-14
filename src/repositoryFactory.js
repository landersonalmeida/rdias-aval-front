import UserRepository from './repositories/UserRepository'

const repositories = {
    usuario: UserRepository
}

export default {
    get: name => repositories[name]
}
