<script setup lang="ts">
	const { data } = await useLazyFetch('/api/users')
	//const { data } = await useFetch('/api/users')
	
	const pDynamicStyles = ref(0)
	pDynamicStyles.value = [
		'lightblue',
		'lightgreen'
	]
</script>


<template>
	<div>
	
		<NuxtLink to="/">Main-page-X</NuxtLink>
		<div class="divWrapper">
			<div class="divWrapCenterElements">
				<IconsArrowDownPlus />
				<div class="divWrapForData">
					<p 
						class="pM"
						v-for="d,k,i in data" :key="d"
						:style="{ color: pDynamicStyles[i] }"
					>
						key : {{ k }}
						<br/>
						value : {{ d[0] }}
						<br/>
						from : {{ d[1] }}
					</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<style scoped>
	.divWrapper{
		border:3px dotted lightblue;
		padding:5px 10px;
		width:max-content;
		height:max-content;
		background-color:white;
	}
		.divWrapCenterElements{
			display:flex;
			flex-flow:wrap column;
			align-items:center;
			justify-content:center;
		}
		.divWrapForData{
			width:max-content;
			height:max-content;
			margin:20px;
			padding: 5px 10px;
			border:2px dotted gold;
		}
			.pM{
				margin:0;
				padding:0;
			}
			.p1{
				color:lightblue;
			}
			.p2{
				color:lightgreen;
			}
			.p3{
				color:#433443;
			}
</style>