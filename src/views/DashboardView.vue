<template>
	<div class="container">
		<div class="bg-success p-2 bg-opacity-75 card p-3">
			<div class="d-flex justify-content-between align-items-center">
				<h6 class="text-start text-white">You have successfully logged in</h6>
			</div>
			<router-link :to="{ name: 'mail' }"><strong>To mail</strong></router-link>
		</div>
	</div>
</template>



<script>
export default {
	//вопрос во время редиректа
	beforeRouteLeave(to, from, next) {
		const answer = confirm("Are you sure you want to switch?");
		if (answer) {
			next();
		} else {
			next(false);
		}
	},
};
</script>