let jsondata ={}
fetch("./assets/data.json").then(res=>{
    return res.json()
}).then(data=>{
    jsondata=data
    console.log(jsondata)

    let selecteddate=null
    let calender=document.querySelector("#date")
    calender.onchange=function(e){
        selecteddate=e.target.value
        console.log(selecteddate)

        let arr=[]
        jsondata.forEach(ele => {
            arr.push(ele)
        });
        console.log("array",arr)
    }
})