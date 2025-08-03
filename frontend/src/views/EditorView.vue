<template>
	<div>
		<h1>Editors Page</h1>
		<p>Welcome {{ username }}!</p>
	</div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

const username = ref("")
const store = useStore();

username.value = store.getters.currentUser
</script>

<script>
export default {
	beforeRouteEnter(to, from) {
		const store = useStore();
		const hasAccess =
			(store.getters.roles.length && store.getters.roles.filter((role) => role === 'Admin' || role === 'Editor')).length

			return !!hasAccess
	}
}
</script>