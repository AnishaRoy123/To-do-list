let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function myfunction(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<button>removed</button>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("button").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
    }
  }
}