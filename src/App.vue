<template>
	<nav v-if="!isAuth" class="position-reletive center-margin">
		<router-link
			to="/"
			class="p-2 border border-success p-2 border-opacity-10 rounded-pill me-3"
			>Main</router-link
		>
		<router-link
			to="/form"
			class="p-2 border border-success p-2 border-opacity-10 rounded-pill me-3"
			>Form</router-link
		>

		<router-link
			to="/about"
			class="p-2 border border-success p-2 border-opacity-10 rounded-pill me-3"
			>About
			<span
				class="
					position-absolute
					top-0
					start-100
					translate-middle
					badge
					rounded-pill
					bg-success
				"
				>{{ $store.state.count }}
				<span class="visually-hidden">unread messages</span>
			</span></router-link
		>
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
		const isAuthenticated = localStorage.getItem("authorization");
		//из локалстор беру значение(navbar авториз пользователя всегда работает)
		return {
			modal: false,
			isAuth: isAuthenticated, //пользователь без авторизации
		};
	},

	methods: {
		login() {
			//пользователь авторизовался
			this.isAuth = true;
			//редирект на страницу залогин пользователя
			localStorage.setItem("authorization", this.isAuth);
			const last = localStorage.getItem("lastPage");
			this.$router.push(last || "/dashboard");
			//записываем локалстор
		},
		logout() {
			this.isAuth = false;
			localStorage.setItem("lastPage", this.$route.path);
			//this.$route.path - это страница на которой я в момент logout
			//local страницы, с кот я выхожу
			this.$router.push("/");
			this.modal = true;
			localStorage.removeItem("authorization");
			//удалить
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
