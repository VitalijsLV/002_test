<script setup>
	//const nuxt = useNuxtApp()
	//console.log(nuxt)
	
	const route = useRoute()
	console.log(route.params.id)
	
	const url = useRequestURL()
</script>

<template>
	<div>
		<p>URL is: {{ url }}</p>
		<p>Path is: {{ url.pathname }}</p>
		<p><a href="/about">About-page</a></p>
		<p><a href="/products">Products page</a></p>
		<p>{{ $route.params.id }}</p>
	</div>
</template>