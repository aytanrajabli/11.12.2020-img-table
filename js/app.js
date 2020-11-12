const dropDiv=document.querySelector("#DropArea .drop-content")
dropDiv.addEventListener("dragover", function(e){
    e.preventDefault()
    dropDiv.classList.add("active")
})
dropDiv.addEventListener("drop", function(e){
    e.preventDefault()
    dropDiv.classList.remove("active")
    let img=e.dataTransfer.files
    for(i=0; i<img.length;i++){
        if(img[i].type.match(image*)){
var reader=new FileReader();
const tr=document.createElement("tr")
reader.onload=function(ilkin){
    const td=document.createElement("td")
    const myImg=document.createElement("img")
    myImg.src=ilkin.target.result
    myImg.width=200;
    myImg.height=200;
    td.appendChild(myImg)
    tr.insertBefore(td,tr.firstChild);
    document.querySelector("".mainTable tbody").appendChild(tr)

}
reader.readAsDataURL(img[i])
        }
        else{
            alert("Please,select image type");
            return;
        }
    }
})
dropDiv.Div.addEventListener("dragleave",function(){
    dropDiv.classList.remove("active")
})