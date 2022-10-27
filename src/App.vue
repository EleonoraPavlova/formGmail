<template>
	<nav>
		<router-link to="/">Main</router-link> |
		<router-link to="/form">Form</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/forget">Forget</router-link>
	</nav>
	<router-view />
</template>


<script>
export default {
	data() {
		return {
			isVisible: false,
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
			this.$router.push("/form");
		},
	},
	provide() {
		//передаем зависимости потомкам (inject) без цепочки props
		return {
			login: this.login,
			logout: this.logout,
		};
	},
};
</script>


<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
