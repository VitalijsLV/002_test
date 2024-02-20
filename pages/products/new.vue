<script setup>
	const url = useRequestURL()
</script>

<template>
	<div>
		<p>URL is: {{ url }}</p>
		<p>Path is: {{ url.pathname }}</p>
		<p><a href="/about">About-page</a></p>
		<p><a href="/products">Products-page</a></p>
	</div>
</template>