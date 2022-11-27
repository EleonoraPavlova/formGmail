<template>
	<FormsTemplate>
		<template #header>
			<h3 class="mb-0 text-start">Create a new task</h3>
		</template>
		<form class="mb-2 text-start">
			<label for="title" class="mb-0 ms-2"><strong>Title task</strong> </label>
			<AppInput v-model.trim="title" name="title" id="title" />
			<div class="div">
				<div v-show="title.length < 3 && title.length !== 0">
					<p class="dangerous fw-lighter ms-2">Title is too short</p>
				</div>
				<div v-show="title.length > 40">
					<p class="dangerous fw-lighter ms-2">
						Title is too long, write shorter please
					</p>
				</div>
			</div>
		</form>
		<form class="mb-2 text-start">
			<label for="date" class="mb-0 ms-2"><strong>Deadline date</strong></label>
			<AppInput v-model="date" type="date" name="date" id="date" />
			<div class="div">
				<div v-show="!date && isVisible">
					<p class="dangerous fw-lighter ms-2">Enter date!</p>
				</div>
			</div>
		</form>
		<form class="mb-2 text-start d-flex flex-column">
			<label for="description" class="mb-0 ms-2"
				><strong>Description</strong></label
			>
			<textarea
				id="description"
				name="description"
				v-model.trim="description"
				rows="4"
				cols="50"
				class="textarea"
				@keypress.enter="createFormTask"
			></textarea>
		</form>
		<div class="d-flex align-items-start">
			<AppButtons
				type="button"
				size="sm"
				color="outline-success"
				class="m-2 addHover"
				:disabled="title.length < 3 || !date || description.length < 3"
				@click="createFormTask"
				>Create</AppButtons
			>
			<AppButtons
				type="button"
				size="sm"
				color="outline-danger"
				class="m-2"
				@click="$router.push('/task')"
				>Close</AppButtons
			>
		</div>
	</FormsTemplate>
</template>

<script>
import AppInput from "../common/AppInput.vue";
import FormsTemplate from "../common/FormsTemplate.vue";
import AppButtons from "../common/AppButtons.vue";

export default {
	name: "CreateView",
	components: {
		AppInput,
		FormsTemplate,
		AppButtons,
	},
	data() {
		return {
			title: "",
			date: "",
			description: "",
			isVisible: false,
		};
	},
	methods: {
		createFormTask() {
			//проверяет введена ли дата или стоит дефолтная строка
			if (!isNaN(this.date)) {
				this.isVisible = true;
				return;
			} else {
				this.isVisible = false;
			}

			this.$store.commit("tasks/addTask", {
				title: this.title,
				date: this.date,
				description: this.description,
			});

			const today = new Date();
			today.setHours(0);
			today.setMinutes(0);
			today.setSeconds(0);
			today.setMilliseconds(0);
			if (new Date(this.date) >= today) {
				this.date;
			} else {
				this.date = "";
				this.$toast.error("Enter a valid date");
				return;
			}
			this.$router.push("/task");
		},
	},
};
</script>

<style>
.textarea {
	border-color: rgba(0, 0, 0, 0.175) !important;
}
</style>