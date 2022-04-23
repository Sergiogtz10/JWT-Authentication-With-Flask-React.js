const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {logged: false,},
		actions: {
		setLogged: (log) => {
			const store = getStore();
			setStore({ ...store, logged: log });
		},
		}
	}
};

export default getState;
