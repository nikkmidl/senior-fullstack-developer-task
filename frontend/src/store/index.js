import { createStore } from "vuex"

export default createStore({
	state: {
		error: undefined,
		currentUser: undefined,
		roles: []
	},
	getters: {
		state(state) { return state },
		roles(state) { return state.roles },
		currentUser(state) { return state.currentUser },
		error(state) { return state.error }
	},
	mutations: {
		setCurrentUser(state, username) { state.currentUser = username },
		setRoles(state, roles) { state.roles = roles },
		setError(state, error) { state.error = error },
	},
	actions: {
		// Define your actions here
	},
	modules: {
		// Define your modules here
	},
})
