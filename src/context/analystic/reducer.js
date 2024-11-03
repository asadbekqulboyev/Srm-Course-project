export const initialState = {
    name: 'Asad',
    length: 134
}
export const reducer = (state, action) => {
    const type = action?.type?.tolowerCase() || ''
    switch (type) {
        case 'get': return action?.payload || {};
        case 'delete': return {};
    }
}
