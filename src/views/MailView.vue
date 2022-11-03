<template>
	<div class="container mt-5 mb-4">
		<div class="form-control p-4 position-relative">
			<h4 class="text-start ps-3 mb-3 margin-left">
				<strong>All letters</strong>
			</h4>

			<div
				v-for="(letter, index) in letters"
				:key="index"
				class="mail-box mb-2"
				@click="selectLetter(index)"
			>
				<router-link
					:to="'/mail/' + (index + 1)"
					class="form-control text-start d-flex align-items-center"
				>
					<AppIcon
						class="position-absolute top-0 end-0"
						name="bookmark"
						size="sm"
						:color="index === selectedLetterIndex ? 'success' : null"
					/>
					<p class="mb-0 p-3 black router-hover">
						<strong> {{ letter.title }}</strong>
					</p>
				</router-link>
				<div class="descriptions-right p-2">
					<!-- 	v-if="this.selectedLetterIndex !== index" иконка закрыть конкретного письма, остальные в цикле не выводятся -->
					<AppIcon
						v-if="selectedLetterIndex === index || isVisible"
						class="position-absolute top-0 end-0 icon-hover"
						@click="closeLetter"
					/>
					<div v-if="index === selectedLetterIndex">
						<h4>{{ index + 1 }}. {{ letter.title }}</h4>
						<hr class="width" />
						<p>
							{{ letter.descriptions }}
						</p>
					</div>
					<div
						v-if="
							!selectedLetterIndex && selectedLetterIndex !== 0 && index === 0
						"
						class="alert alert-warning"
						role="alert"
					>
						<h6>There is nothing, choose letter</h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppIcon from "../common/AppIcon.vue";
export default {
	name: "MailView",
	components: {
		AppIcon,
	},

	data() {
		return {
			selectedLetterIndex: 0, //переменная, куда ложим выбранный индекс индекс, 0 по дефолту( 1 письмо первое)
			isVisible: false,
			letters: [
				{
					title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
					descriptions:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,\
						exercitationem? Corrupti ab modi vero sequi consequatur cumqu\
						expedita ducimus quidem dolor!",
				},
				{
					title: "Donec vitae tincidunt nisi",
					descriptions:
						"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo. Phasellus vel ex at turpis finibus dictum eget eget dolor. Nulla efficitur at nisl vel elementum",
				},
				{
					title: "Integer nec pellentesque sapien",
					descriptions:
						"Integer nec pellentesque sapien. Proin ut quam dapibus, mollis purus quis, fermentum est. Maecenas eu mollis erat. Integer fermentum turpis quis rhoncus suscipit. Nam ultricies erat in mauris consequat lobortis. Nullam rutrum, dolor eu tempor euismod, nibh libero lacinia diam, non rhoncus enim lorem nec enim. Sed a interdum augue. Quisque sed malesuada nulla.",
				},
				{
					title:
						"Vestibulum at eros scelerisque, elementum leo nec, porta libero",
					descriptions:
						"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo.",
				},
				{
					title: "Sed libero enim",
					descriptions:
						"Sed libero enim, cursus sed vulputate sed, egestas nec velit. Nullam ante nunc, finibus sed euismod quis, congue rutrum elit. Sed purus arcu, congue eu mi eu, ornare ultricies ante. Aliquam vitae ligula elit. Phasellus varius massa vel auctor molestie. Aenean convallis lacus sed tristique elementum. Nulla sed rutrum lacus. Pellentesque quis consectetur erat, a condimentum magna. Cras facilisis venenatis ante, eget cursus sapien pulvinar in. Sed placerat sed lacus at ultrices. Aliquam bibendum mauris nec suscipit feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas efficitur risus enim. Nam dapibus mi id quam sagittis, ac auctor augue suscipit. Aenean a ullamcorper nisl. Duis hendrerit libero sit amet ligula luctus, in placerat ante tristique",
				},
				{
					title: "Aliquam vitae ligula elit",
					descriptions:
						"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
				},
				{
					title: "Phasellus vel ex at turpis finibus dictum eget eget dolor",
					descriptions:
						"Nullam rutrum, dolor eu tempor euismod, nibh libero lacinia diam, non rhoncus enim lorem nec enim. Sed a interdum augue. Quisque sed malesuada nulla",
				},
				{
					title: "Nullam nulla erat",
					descriptions:
						"Etiam porttitor molestie ipsum, sed rutrum nibh tempor eget. Praesent fringilla efficitur faucibus",
				},
				{
					title: "Nullam rutrum, dolor eu tempor euismod",
					descriptions:
						"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo",
				},
			],
		};
	},
	methods: {
		closeLetter() {
			this.selectedLetterIndex = null;
			this.isVisible = !this.isVisible;
		},
		selectLetter(index) {
			if (this.selectedLetterIndex != index) {
				this.selectedLetterIndex = index;
				this.letters.find((letter) => letter.id === this.$route.params.mailId);
			} else {
				this.selectedLetterIndex = null;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.mail-box {
	display: grid !important;
	grid-template-columns: 1fr 2fr;
	gap: 20px;
}
.margin-left {
	margin-left: 7%;
}
.icon-hover {
	&:hover {
		color: red;
	}
}
.width {
	margin-left: 12%;
	margin-right: 12%;
}
.router-hover {
	&:hover {
		color: black;
	}
}
.form-control {
	&:focus {
		border-color: #ced4da;
		box-shadow: none;
	}
	&:hover {
		color: black;
	}
}
</style>