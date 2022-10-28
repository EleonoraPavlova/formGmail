<template>
	<nav v-if="!isAuth" class="position-reletive center-margin">
		<router-link to="/">Main</router-link> |
		<router-link to="/form">Form</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<NavBar v-else class="m-3" @logout="logout" />
	<SentModal v-if="modal" @close="modal = false"
		>You are logged out of your account</SentModal
	>
	<router-view />
</template>


<script>
import NavBar from "./common/NavBar.vue";
import SentModal from "./components/SentModal.vue";
import { computed } from "vue";

export default {
	components: {
		NavBar,
		SentModal,
	},
	data() {
		return {
			modal: false,
			isAuth: false, //пользователь без авторизации
		};
	},

	methods: {
		login() {
			//пользователь авторизовался
			this.isAuth = true;
			//редирект на страницу залогин пользователя
			this.$router.push("/dashboard");
		},
		logout() {
			this.isAuth = false;
			this.$router.push("/");
			this.modal = true;
		},
	},
	provide() {
		//передаем зависимости потомкам (inject) без цепочки props
		return {
			login: this.login,
			logout: this.logout,
			isAuth: computed(() => this.isAuth),
		};
	},
};
</script>


<style lang="scss">
nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		&.router-link-exact-active {
			color: #42b983;
		}
		&:hover {
			color: #000;
		}
	}
}
.center-margin {
	margin-right: 31%;
	margin-left: 35%;
}
</style>
