<template>
	<FormsTemplate>
		<template #header>
			<h3 class="mb-0 text-start">Form gmail</h3>
		</template>
		<InputLogin />
	</FormsTemplate>
</template>

<script>
import InputLogin from "../components/InputLogin.vue";
import FormsTemplate from "../common/FormsTemplate.vue";

export default {
	name: "FormView",
	components: {
		InputLogin,
		FormsTemplate,
	},
};
</script>


