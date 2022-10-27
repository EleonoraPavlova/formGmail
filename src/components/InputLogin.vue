<template>
	<Form @submit="onSubmit" :validation-schema="schema">
		<div class="mb-3 d-flex flex-column">
			<label for="email" class="text-start"><strong>Email</strong></label>
			<Field
				v-model.trim="inputEmail"
				type="text"
				id="email"
				name="email"
				class="mb-1"
			/>
			<ErrorMessage
				name="email"
				class="dangerous text-start lh-1 fontsizeSmall"
			/>
		</div>
		<div class="mb-3 d-flex flex-column">
			<label for="password" class="text-start"
				><strong>Password</strong>
			</label>

			<Field
				v-model.trim="inputPassword"
				type="password"
				name="password"
				id="password"
				class="mb-1"
				autocomplete="true"
			/>
			<ErrorMessage
				name="password"
				class="dangerous text-start lh-1 fontsizeSmall"
			/>
		</div>
		<div class="d-flex justify-content-start align-items-center">
			<AppButtons color="success" size="sm" class="rounded-pill" type="submit"
				>Sign In</AppButtons
			>
			<router-link to="/forget" v-slot="{ navigate }">
				<AppButtons
					color="danger"
					size="sm"
					class="rounded-pill"
					@click="navigate"
					>Forgot password?</AppButtons
				>
			</router-link>
		</div>
	</Form>
</template>



<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import AppButtons from "../common/AppButtons.vue";
import * as Yup from "yup";

export default {
	name: "InputLogin",
	components: {
		Form,
		Field,
		ErrorMessage,
		AppButtons,
	},
	data() {
		return {
			inputEmail: "",
			inputPassword: "",
		};
	},
	computed: {
		schema() {
			return Yup.object({
				email: Yup.string().required().email(),
				password: Yup.string().min(8),
			});
		},
	},
	inject: ["login"],
	methods: {
		onSubmit(values) {
			// выводит логин пароль в консоль в формате строки
			// console.log(JSON.stringify(values, null, 2));
			// this.$router.push("/dashboard"); //это если без inject
			this.login();
		},
	},
};
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
	color: white;
	&:hover {
		color: white;
	}
}
</style>