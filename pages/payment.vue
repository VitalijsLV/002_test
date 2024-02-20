<script setup>
	const url = useRequestURL()
</script>

<template>
	<div>
		<div class="flexWrapper">
			<div>
				<p>URL is: {{ url }}</p>
				<p>Path is: {{ url.pathname }}</p>
				<p><a href="/">Main-page</a></p>
			</div>
			<div>
				<label>
					Apmaksa:
					<br />
					<input type="text" placeholder="Vārds Uzvārds" />
					<br />
					<input type="text" placeholder="tālrunis" />
					<br />
					<input type="text" placeholder="preces nosaukums" />
					<br />
					<input type="text" placeholder="preces cena" />
				</label>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.flexWrapper{
		display:flex;
		flex-direction:row;
		justify-content:space-between;
	}
	.flexWrapper div{
		margin: 0 50px;
	}
</style>