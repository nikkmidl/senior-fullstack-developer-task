<template>
	<div>
		<h1>Admins Page</h1>
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
		const hasAccess = store.getters.roles.length && store.getters.roles.includes('Admin')

		return hasAccess
	}
}
</script>