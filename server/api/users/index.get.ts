export default defineEventHandler(async(event) =>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(
				{
					myEname: [
						"Vitaaliys",
						"1: server/api/users/index.get.ts"
					],
					myEname2: [
						"Vitaliy",
						"2: server/api/users/index.get.ts"
					],
					myEname3: [
						"Vitaliy Lavrinovich",
						"3: server/api/users/index.get.ts"
					],
					myEname4: [
						"Vitaliy Lavrinovich ?",
						"4: server/api/users/index.get.ts"
					]
				}
			)
		},2000)
	})
})