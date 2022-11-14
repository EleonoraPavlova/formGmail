<template>
	<div class="container">
		<AppAlert
			v-if="simpleAlert"
			class="width70 m-auto mb-4"
			title="Composition"
			color="success"
			text="Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
			@close="closeAlert"
		/>
		<!-- @click="close" нужно заемитить на странице алерта: emits: ["close"] -->
		<div class="form-control p-3">
			<h5>Reusable</h5>
			<AppButtons size="sm" color="outline-success" @click="toggle">{{
				simpleAlert ? "Close" : "Show message"
			}}</AppButtons>
			<AppButtons size="sm" color="outline-success" @click="navigate"
				>To main</AppButtons
			>
		</div>
	</div>
</template>

<script>
import AppAlert from "../components/AppAlert.vue";
import AppButtons from "../common/AppButtons.vue";
import { useRouter } from "vue-router";
import useAlert from "../use/alert";
import { reactive } from "@vue/reactivity";

export default {
	name: "ReusableView",
	components: {
		AppAlert,
		AppButtons,
	},
	setup() {
		const alert = reactive({
			type: "warning",
			title: "Reactive alert",
		});
		const { alert: simpleAlert, close: closeAlert, toggle } = useAlert();
		//если кортеж: const [simpleAlert,closeAlert, toggelAlert ] = useAlert()

		const router = useRouter();

		const navigate = () => {
			router.push("/composition");
		};

		return {
			navigate,
			alert,
			simpleAlert, //это если нужно переименовать переменную в отдельном файле
			closeAlert, //изменение нейминга
			toggle,
			close,
		};
	},
};
</script>

<style>
</style>