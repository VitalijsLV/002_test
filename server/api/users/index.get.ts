export default defineEventHandler(async(event) =>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(
				{
					myEname: "Vitaaliys"
				}
			)
		},2000)
	})
})