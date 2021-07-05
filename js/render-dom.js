var agency = document.getElementById("agency");
//键盘回车事件
document.addEventListener("keyup", function(e){
    const input = document.getElementById("event_input").value;
    var evt = window.event || e; 
    var agency = document.getElementById("agency");
    var completed = document.getElementById("completed");
    let agency_iput = agency.getElementsByTagName("input");
      //回车事件, 向未完成列表中添加事项
    if (evt.keyCode == 13 && document.getElementById("event_input").value != ""){
        //新建 LI 用于 存放 input p button
        let node = document.createElement("LI");
        let node_inpt = document.createElement("input");
        let node_p = document.createElement("p");
        let node_btu = document.createElement("button");
        // 设置新建 元素 属性
        node_p.innerText = input;
        node_inpt.type = "checkbox";
        node_btu.value = "-";
        //将其添加至 新建列表中
        node.appendChild(node_inpt);
        node.appendChild(node_p);
        node.appendChild(node_btu);
        agency.appendChild(node);
        document.getElementById("event_input").value = "";
        document.getElementById("conduct").innerText = agency_iput.length;
    }
});
//鼠标点击事件
document.addEventListener("click",function(){
    add_oncli();
});

//判断复选框
function add_oncli(){
    //正在进行属性
    let agency = document.getElementById("agency");
    let agency_iput = agency.getElementsByTagName("input");
    //已经完成属性
    let completed = document.getElementById("completed");
    let completed_iput = completed.getElementsByTagName("input");
    for(let i = 0; i < agency_iput.length; i++){
        if(agency_iput[i].checked == true){
            completed.appendChild(agency.getElementsByTagName("li")[i]);
        }
    }
    if(completed_iput[0] != undefined){
        for(let j = 0 ; j < completed_iput.length;j++){
            if(completed_iput[j].checked == false){
                agency.appendChild(completed.getElementsByTagName("li")[j]);
            }
        }
    }  
    document.getElementById("conduct").innerText = agency_iput.length;
    document.getElementById("complete").innerText = completed_iput.length;
}
