<script setup>
	const url = useRequestURL()
	const randomPage = (Math.random() * (200 - 100) + 100).toFixed(0)
	console.log(randomPage)
	const url5 = 'products/' + randomPage
</script>

<template>
	<div>
		<p>URL is: {{ url }}</p>
		<p>Path is: {{ url.pathname }}</p>
		<p><a href="/about">About-page</a></p>
		<p><a href="/products/new">new products page</a></p>
		<p><a :href=url5>random page</a></p>
	</div>
</template>