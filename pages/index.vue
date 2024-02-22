<script setup>
	const url = useRequestURL()
</script>

<template>
	<div>
		<NuxtLink to="/">Main-page-X</NuxtLink>
		<p>URL is: {{ url }}</p>
		<p>Path is: {{ url.pathname }}</p>
		<br/>
		<div class="learnDiv">
			<p>Nuxt3</p>
			<p>Docker</p>
			<p>Kubernetes</p>
			<p>Database/Postgres</p>
			<p>Deploy</p>
			<p>Git</p>
			<p>other</p>
			<p>other...</p>
		</div>
	</div>
</template>

<style scoped>
	.learnDiv{
		display:inline-flex;
	}
	.learnDiv p{
		margin:5px 20px 5px 0;
	}
</style>