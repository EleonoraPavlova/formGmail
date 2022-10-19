<template>
	<Form @submit="onSubmit">
		<div class="mb-3 d-flex flex-column">
			<label for="email" class="text-start"><strong>Email</strong></label>
			<Field
				v-model.trim="inputEmail"
				type="text"
				id="email"
				name="email"
				class="mb-1"
				:rules="validateEmail"
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
				type="text"
				name="password"
				id="password"
				class="mb-1"
			/>
		</div>
	</Form>
</template>



<script>
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
	name: "InputLogin",
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		return {
			inputEmail: "",
			inputPassword: "",
			isValidation: false,
		};
	},
	methods: {
		onSubmit(values) {
			console.log(JSON.stringify(values, null, 2));
		},
		validateEmail(value) {
			// if the field is empty
			if (!value) {
				return "This field is empty";
			}
			// if the field is not a valid email
			const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
			if (!regex.test(value)) {
				return "This field must be a valid email";
			}
			// All is good
			return true;
		},
	},
};
</script>

<style lang="scss">
</style>