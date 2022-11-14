<template>
	<div class="container d-flex align-items-start">
		<!-- HomePage -->
		<AppButtons size="sm" @click="back" color="outline-secondary">
			Back</AppButtons
		>
		<div class="form-control p-4 width70 m-auto">
			<h3>Vue Composition</h3>
			<small>data,methods,computed,watch</small>
			<hr />
			<h6>
				Name:
				<strong> {{ name }}</strong>
			</h6>
			<p>
				Version: <strong> {{ version }} ({{ doubleVersion }})</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center mb-5">
				<div class="me-3">
					<!-- <input type="text" ref="textInput" @keyup.enter="change" /> -->
					<input type="text" v-model="firstName" @keyup.enter="change" />
				</div>
				<AppButtons size="sm" @click="change" color="outline-success"
					>Change</AppButtons
				>
			</div>
			<VueInfo
				:name="name"
				:version="version"
				@change-version="changeVersion"
			/>
		</div>
	</div>
</template>

<script>
import AppButtons from "../common/AppButtons.vue";
import VueInfo from "../components/VueInfo.vue";
import { useRouter } from "vue-router";
import {
	ref,
	reactive,
	toRefs,
	isRef,
	isReactive,
	computed,
	watch,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
} from "vue";
export default {
	name: "ApproachView",
	components: {
		AppButtons,
		VueInfo,
	},
	setup() {
		//объединяет data,methods,computed,watch
		const name = ref("VueJs");
		const version = ref(3);
		const textInput = ref(null);
		const firstName = ref("");
		const router = useRouter();

		const back = () => {
			router.push("/composition");
		};

		const doubleVersion = computed(() => {
			return version.value * 2;
		});

		console.log("created");

		onBeforeMount(() => {
			console.log("onBeforeMount");
		});

		onMounted(() => {
			console.log("onMounted");
		});

		onBeforeUpdate(() => {
			console.log("onBeforeUpdate");
		});
		onBeforeUnmount(() => {
			console.log("onBeforeUnmount");
		});

		onUpdated(() => {
			console.log("onUpdated");
		});

		watch([doubleVersion, name], (newValues, oldValues) => {
			console.log("new version", newValues[0]);
			console.log("new name", newValues[1]);
			console.log("old version", oldValues[0]);
			console.log("old name", oldValues[1]);
		});

		function changeInfo() {
			name.value = "VUE JS!";
			version.value = 5;
			firstName.value = "";
			console.log(firstName.value);
		}

		function changeVersion(num) {
			version.value = num;
		}

		return {
			name: name,
			version: version,
			change: changeInfo,
			doubleVersion,
			textInput,
			firstName,
			changeVersion,
			back,
		};
	},
};
</script>

<style>
.width70 {
	width: 70% !important;
}
</style>