window.onload=function(){
   
    const dropArea= document.querySelector(".droparea");
    const uploadInput= document.querySelector(".upload");
    const imgBox= document.querySelector(".imgBox");
    const videoBox=document.querySelector(".videoBox");
    const audioBox=document.querySelector(".audioBox")
    const uploadIcon=document.querySelector(".uploadIcon");
   
    uploadIcon.onclick=function(e){
        this.nextElementSibling.click();
       
    }
    uploadInput.onchange=function A(e){
       
        [...e.target.files].forEach(file=>{
            if(file.type.match("image/*")){
                
                let reader= new FileReader();
                reader.onloadend=function(event){
                    const ImageDiv=document.createElement("div");
                    ImageDiv.className= "imageDiv";
                    const image=document.createElement("img");
                    image.src= event.target.result;
                    let imgSize=document.createElement("span");
                    imgSize.innerText = parseInt(file.size/1024)+"kb";
                    

                    ImageDiv.appendChild(image);
                    imgBox.appendChild(ImageDiv);
                    imgBox.appendChild(imgSize);
                }


                reader.readAsDataURL(file);
                
            }
            if(file.type.match("video/*")){
                let reader= new FileReader();
                reader.onloadend=function(){
                    const videoDiv=document.createElement("div");
                    videoDiv.className="videoDiv"
                    const videoIcon=document.createElement("i");
                    videoIcon.className="fas fa-play";
                    let videoSize=document.createElement("span");
                    videoSize.innerText = parseInt(file.size/1024)+"kb";
                    videoDiv.appendChild(videoIcon);
                    videoBox.appendChild(videoDiv);
                    videoBox.appendChild(videoSize);
                }
                reader.readAsDataURL(file);
            }
            if(file.type.match("audio/*")){
                let reader= new FileReader();
                reader.onloadend=function(){
                    const audioDiv=document.createElement("div");
                    audioDiv.className="audioDiv"
                    const audioIcon=document.createElement("i");
                    audioIcon.className="fas fa-file-audio";
                    let audioSize=document.createElement("span");
                    audioSize.innerText = parseInt(file.size/1024)+"kb";
                    audioDiv.appendChild(audioIcon);
                    audioBox.appendChild(audioDiv);
                    audioBox.appendChild(audioSize);
                }
                reader.readAsDataURL(file);
            }
        })

    }
  
}

