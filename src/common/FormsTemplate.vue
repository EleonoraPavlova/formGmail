<template>
	<div class="container mt-5">
		<div class="d-flex justify-content-center">
			<div class="card p-3 width55 mb-4">
				<slot name="header">Title</slot>
				<hr class="mt-1 mb-4" />
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FormsTemplate",
};
</script>

<style lang="scss">
@import "../assets/mixins.scss";
.width55 {
	width: 55%;
}
</style>
