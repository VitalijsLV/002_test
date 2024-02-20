<script setup>
	import { ref, onMounted } from 'vue'
	
	let url = ref({})
	let cv = ref()
	let styleObject = ref()
	
	onMounted(() => {
		setTimeout(()=>{ 
			url.value = useRequestURL()
		},4000)
		
		let timedFunction1 = () => {
			setTimeout(()=>{
				styleObject.value = {
					color:'orange',
					border:'1px solid orange'
				}
				cv.value = 'servant of Christ'
			},7000)
		
			setTimeout(()=>{ 
				styleObject.value = {
					color:'green',
					border:'1px solid green'
				}
				cv.value = 'christian Vitaliys'
			},14000)
		
		 
			setTimeout(()=>{ 
				styleObject.value = {
					color:'red',
					border:'1px solid red'
				}
				cv.value = 'Vitaliys'
			},21000)
		
			
			setTimeout(()=>{
				timedFunction1()
			},21000)
		}
		timedFunction1()
	})	
</script>

<template>
	<div>
		<p>URL is: {{ url }}</p>
		<p>Path is: {{ url.pathname }}</p>
		<p><a href="/">Main-page</a></p>
		<p><a href="/products">Products-page</a></p>
		
		<p 
			class="christian-v"
			:style="styleObject"
		>
			{{ cv ? cv : 'Vitaliys' }}
		</p>
	</div>
</template>

<style scoped>
	.christian-v{
		font-weight:bold;
		font-size:20px;
		color:red;
		margin:25px 0;
		padding:10px 15px;
		border:1px solid red;
		border-radius:10px;
		max-width:max-content;
		background-color:white;
	}
</style>