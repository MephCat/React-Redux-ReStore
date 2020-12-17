
const booksLoaded = (newUsers) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newUsers
    };
};

export {
    booksLoaded
};
