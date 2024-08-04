<script setup>
	import { ref, watch } from 'vue'
	
	const { status, data, close } = useEventSource('http://localhost:3000/api/sse', [], {
		autoReconnect: true,
	}) 
	
	const dataSSE = ref('')
	const sseDate = ref('--')
	const sseTime = ref('--')
	const sseTestManyPages = ref('--')
	
	watch(data, (newData, oldData) => {
		
		dataSSE.value = JSON.parse(newData)
		sseDate.value = dataSSE.value.date
		sseTime.value = dataSSE.value.time
		sseTestManyPages.value = dataSSE.value.testManyPages
	})
	
	
	const blocksApix1 = ref([1, 2, 3, 4, 5, '', ':)', 'pre'].length)
	
	//if Skaits:null? don't show word 'Skaits'
	//database, bilde, apraksts, stāvoklis, skaits, cena.
	const fakeApiDatax1 = ref({
		Apraksts: 'Lācis uz zelta bumbas(Rīgas porcelāns), ļoti labā stāvoklī. Lācis uz zelta bumbas(Rīgas porcelāns), ir lietošanas pazīmes. Lācis uz oranžās bumbas(Rīgas porcelāns), ar defektu pie pamatnes. Lācis uz zilās bumbas(Rīgas porcelāns), labā stāvoklī. Lācis uz zaļās bumbas(Rīgas porcelāns), labā stāvoklī. Lācis uz sarkanās bumbas(Kuzņecovs), labā stāvoklī.', 
		Stāvoklis: 'Labā stāvoklī.',
		Skaits: null,
		Cena: null,
	})
	
	const fakeApiDatax2 = ref({
		'lacis':50,
		'tautasdeja':160,
		'zirdzins':15
	})
	
	//console.log(dataSSE)
</script>

<template>
	<div>
		<div style="display:flex; align-items:center; justify-content:center; margin:500px 200px; background-color:rgba(50,140,40,0.3); color:#233da1; border:1px solid blue; display:none;">
			<p style="border:none; font-size:50px; padding:30px;">
				Bez maksas palīdzēšu novērtēt dažādas senas porcelāna figūriņas, tās kuras daudziem stāv sekcijās un bija veidotas Latvijā. 
				Par noteiktu summu vai procentiem varu palīdzēt Jums tās realizēt par augstu cenu.
			</p>
		</div>
		
		
		<div style="display:flex; flex-flow:wrap row; align-items:center; justify-content:space-between;">
			<div class="div-wrapper--sse_data__date">
				<p>sseDate: {{ sseDate }}</p>
			</div>
			<div class="div-wrapper--sse_data__time">
				<p>sseTime: {{ sseTime }}</p>
			</div>
			
			<div class="div-wrapper--sse_data__price">
				<!--<p>ssePrice: {{ ssePrice }}</p>-->
				<p 
					v-for="(value, key, index) in fakeApiDatax2" 
					:key="index"
					class="pp"
				>
					{{ value ? value + ' Eur' : '--'}}
				</p>
			</div>
			
			<div class="div-wrapper--sse_data__sseTestManyPages">
				<p>sseTestManyPages: {{ sseTestManyPages }} /tested=work</p>
			</div>
		</div>
		
		
		<!--<SseDateComponent />-->
		
		<!--<SseTimeComponent />-->
		
		<!-- <div style="display:inline-flex;">
		&nbsp;&nbsp;&nbsp;
		<NuxtLink to="/">Main-page-X</NuxtLink>
		&nbsp;&nbsp;&nbsp;
		<p>URL is: {{ url }}</p>
		&nbsp;&nbsp;&nbsp;
		<p>Path is: {{ url.pathname }}</p>
		&nbsp;&nbsp;&nbsp;
		<p>is : {{ blocksApix1 }}</p>
		</div> -->
		
		<br/>
		
		<div class="sseWrapper">
			<div class="leftSideMenu">
				<p>::A::</p>
				<p>::B::</p>
				<p>::C::</p>
				<p>::D::</p>
				<p>::D::</p>
				<p>::D::</p>
				<p>::D::</p>
				<p>::D::</p>
				<p>::D::</p>
				<p>::D::</p>
				<p>::D::</p>
				<p>::D::</p>
			</div>
			
			<div class="blocksPhotoAndInfoWrapper">
				<div class="blockPhotoAndInfoWrapper">
					<div class="photo">
						img
					</div>
					<div class="info">
						<p 
							v-for="(value, key, index) in fakeApiDatax1" 
							:key="index"
							class="pp"
						>
							<span style="color:#666;">{{ key }}</span>: &nbsp;&nbsp; {{ value ? value : '--'}}
						</p>
					</div>
				</div>
				
				<div class="blockPhotoAndInfoWrapper">
					<div class="photo">
						img
					</div>
					<div class="info">
						<p 
							v-for="(value, key, index) in fakeApiDatax1" 
							:key="index"
							class="pp"
						>
							<span style="color:#666;">{{ key }}</span>: &nbsp;&nbsp; {{ value ? value : '--'}}
						</p>
					</div>
				</div>
			</div>
			
		</div>
		
		<br/>
		
		<div class="myProgressDiv">
			<div class="learnDiv a">
				<p>MySql</p>
				<p>HTML5</p>
				<p>CSS3</p>
				<p>JavaScript</p>
				<p>Vue</p>
				<p>PSD to HTML5</p>
				<p>Pinia</p>
				<p>Git</p>
				<p>GitHub</p>
				<p>JSON</p>
				<p>server-sent-events</p>
				<p>other</p>
			</div>
			<div class="learnDiv b">
				<p>Nuxt3</p>
				<p>Docker</p>
				<p>MySql</p>
				<p>Git</p>
				<p>GitHub</p>
				<p>SCSS</p>
				<p>JWT</p>
				<p>Websocket</p>
				<p>server-sent-events</p>
				<p>Node</p>
				<p>Pinia</p>
				<p>other</p>
			</div>
			<div class="learnDiv c">
				<p>Nuxt3</p>
				<p>Docker</p>
				<p>Kubernetes</p>
				<p>Postgres</p>
				<p>Deploy</p>
				<p>JWT</p>
				<p>PaymentSystem</p>
				<p>other</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.div-wrapper--sse_data__date{
		display:flex;
		flex-flow:wrap row;
		align-items:center;
		justify-content:center;
		width:max-content;
		height:max-content;
		margin:10px;
		padding:15px;
		border:1px solid rgba(40,90,50,0.8);
		background-color:rgba(170,40,20,0.1);
	}
	.div-wrapper--sse_data__date p{
		padding: 12px 10px;
		color: #fff;
		background-color:rgba(40,90,50,0.8);
	}
	
	.div-wrapper--sse_data__time{
		display:flex;
		flex-flow:wrap row;
		align-items:center;
		justify-content:center;
		width:max-content;
		height:max-content;
		margin:10px;
		padding:15px;
		border:1px solid rgba(40,90,50,0.8);
		background-color:rgba(170,40,20,0.1);
	}
	.div-wrapper--sse_data__time p{
		padding: 12px 10px;
		color: #fff;
		background-color:rgba(40,90,50,0.8);
	}
	
	.div-wrapper--sse_data__price{
		display:flex;
		flex-flow:wrap row;
		align-items:center;
		justify-content:center;
		width:max-content;
		height:max-content;
		margin:10px;
		padding:15px;
		border:1px solid rgba(40,90,50,0.8);
		background-color:rgba(170,40,20,0.1);
	}
	.div-wrapper--sse_data__price p{
		padding: 12px 10px;
		color: #fff;
		background-color:rgba(40,90,50,0.8);
	}
	
	.div-wrapper--sse_data__sseTestManyPages{
		display:flex;
		flex-flow:wrap row;
		align-items:center;
		justify-content:center;
		width:max-content;
		height:max-content;
		margin:10px;
		padding:15px;
		border:1px solid rgba(40,90,50,0.8);
		background-color:rgba(170,40,20,0.1);
	}
	.div-wrapper--sse_data__sseTestManyPages p{
		padding: 12px 10px;
		color: #fff;
		background-color:rgba(40,90,50,0.8);
	}


	.sseWrapper{
		display:flex;
		align-items:center;
		justify-content:space-around;
		box-sizing:border-box;
	}
	.leftSideMenu{
		display:flex;
		flex-flow:wrap column;
		align-items:center;
		justify-content:center;
		box-sizing:border-box;
		width:260px;
		.background-color:rgba(250,110,50,0.15);
		background-color:#fff;
		.border:1px solid purple;
		outline: 1px solid #55a;
		.box-shadow:inset 0 0 2px purple;
	}
	.blocksPhotoAndInfoWrapper{
		display:flex;
		flex-flow:wrap column;
		align-items:center;
		justify-content:center;
		align-self:start;
		box-sizing:border-box;
		width:max-content;
	}
	.blockPhotoAndInfoWrapper{
		display:inline-flex;
		align-self:start;
		align-items:center;
		justify-content:center;
		margin-bottom:30px;
		box-shadow:0 0 2px blue;
		box-sizing:border-box;
	}.blockPhotoAndInfoWrapper:last-child{
		margin-bottom:0;
	}
	.photo{
		display:flex;
		align-items:center;
		justify-content:center;
		width:220px;
		height:220px;
		/*margin:20px;*/
		box-sizing:border-box;
		.background-color:rgba(200,100,10,0.1);
		background-color:#fff;
		overflow:hidden;
	}
	.info{
		display:flex;
		flex-flow:wrap column;
		width:700px;
		height:220px;
		/*margin:20px;*/
		padding:2px;
		box-sizing:border-box;
		.background-color:rgba(200,150,150,0.4);
		background-color:#fff;
		overflow:hidden;
	}
	
	
	.sseWrapper, 
	.leftSideMenu, 
	.blocksPhotoAndInfoWrapper, 
	.blockPhotoAndInfoWrapper, 
	.photo, 
	.info
	{
		.border-radius:14px;
	}
	.photo{
		.border-radius:14px 0 0 14px;
	} 
	.info{
		.border-radius:0 14px 14px 0;
	}
	
		.info .pp{
			font-size:17px;
			font-family:Arial;
			margin:2px;
			padding:4px 7px;
			background-color:rgba(250,250,250,0.2);
			border:none;
			border-radius:7px;
		}
	
	
	.myProgressDiv{
		display:flex;
		flex-flow:wrap row; 
		align-items:center;
		justify-content:center;
		margin:50px;
		box-sizing:border-box;
		background-color:rgba(30,30,30,0.05);
		border:1px dotted yellow;
	}
	.learnDiv{
		display:flex;
		flex-flow:wrap row; 
		align-items:center; 
		justify-content:center;
		margin: 20px; 
		padding: 20px;
		border:1px solid green; 
		width: 330px;
	}
	.learnDiv p{
		margin: 5px 20px 5px 0;
		padding:3px 5px;
		color:black;
		background-color: rgba(100,50,20,0.1);
		background-color:white;
		border:none;
		/*outline: 1px solid black;*/		
	}
	.a{
		background-color:rgba(100,200,100,0.5);
	}
	.b{
		background-color:rgba(100,100,200,0.5);
	}
	.c{
		background-color:rgba(200,100,100,0.5);
	}
</style>