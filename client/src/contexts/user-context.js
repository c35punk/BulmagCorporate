import { createContext } from 'react';

const defaultState = {
    roles: [],
    username: '',
    companyImage: '',
    companyName: '',
    contactPerson: '',
    vatNumber: '',
    address: '',
    isAdmin: false,
    isLoggedIn: false,
    contracts: [],
    _id: '',
    updateUser() { }
};
const { Consumer: UserConsumer, Provider: UserProvider } = createContext(defaultState);

export {
    UserConsumer,
    UserProvider,
    defaultState
}