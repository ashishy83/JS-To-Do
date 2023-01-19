var open_model_3= document.getElementById('open_model_3');
var back_btn= document.querySelector('.back_btn');
var new_page_title= document.querySelector('.new_page_title');
var new_page_Add_Btn= document.querySelector('.new_page_Add_Btn');

open_model_3.style.display='none';

new_page_Add_Btn.addEventListener('click',add_element);


back_btn.addEventListener('click',(argu)=>{
  open_model_3.style.display="none";
  document.querySelector('.container').classList.remove('hidden');
  var temp=document.getElementsByClassName('index_box');
  for(let i of temp){
    i.classList.remove('hidden');
  }
  document.querySelector('.hidden_page_element').classList.remove('hidden_page_element');
});

var modal = document.querySelector(".hidden");
var overlay = document.querySelector(".overlay");
var input_data = document.querySelector(".input_task_Data");
var con_box = document.getElementById("container_box");
var object_arry = [];
var count = 0;
var add_icon01 = [];
var delete_icon01 = [];

var module2 = document.querySelector(".hidden2");
var inputItem_Data = document.querySelector(".input_Item_Data");
var iteam_btn = document.querySelector(".close_Item_List");
var temp_id;

function Obj_Create(unique_id, title) {
  this.unique_id = unique_id;
  this.title = title;
  task_obj = {};
}
function add_element() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function add_element2() {
  module2.classList.remove("hidden2");
  overlay.classList.remove("hidden");
}

var task_plus1 = document.querySelector('.index_plus');
task_plus1.addEventListener('click', add_element);

function closeBtn() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  input_data.value = "";
}

function closeBtn2() {
  module2.classList.add("hidden2");
  // overlay.classList.add("hidden");
  inputItem_Data.value = "";
}

function add_icon2(id) {
  temp_id = id;
  add_element2();
  iteam_btn.addEventListener('click', function () {
    if (inputItem_Data.value == "") {
      closeBtn2();
    }
    else {
      var temp_task = document.getElementsByClassName('task_box');
      for (let k = 0; k < temp_task.length; k++) {
        if (temp_task[k].classList[1] == temp_id) {
          var p_tag = document.createElement('p');
          p_tag.classList.add('tasks');
          let donebtn = document.createElement('button');
          donebtn.textContent = 'Done';
          donebtn.classList.add('task');
          donebtn.id= 'done-btn';
          p_tag.textContent = inputItem_Data.value;
          temp_task[k].appendChild(p_tag);
          p_tag.append(donebtn);
          donebtn.addEventListener('click', function (){

            p_tag.style.textDecoration="line-through";
            donebtn.style.display = 'none'
          });
        }
      }
     
      closeBtn2();
    }
  });
}

function delete_icon2(id) {
  var temp_box = document.getElementsByClassName('index_box');
  for (let i of temp_box) {
    if (i.classList[1] == id) {
      con_box.removeChild(i);
      count--;
    }
  }
  if(con_box.children.length==0){
    document.querySelector('.no_item').classList.remove('hidden');
  }
}

function new_page_fun(para){
  document.querySelector('.container').classList.add('hidden');
  var temp=document.getElementsByClassName('index_box');
  for(let i of temp){
    if(i.classList[1]!=para.target.classList[1]){
      i.classList.add('hidden');
    }
    else{
      i.classList.add('hidden_page_element');
      open_model_3.style.display='flex';
      new_page_title.textContent= `${i.childNodes[0].textContent}`;
      console.log();
    }
  }
}

document.querySelector(".add_button").addEventListener("click", () => {
  if (input_data.value == "") {
    closeBtn();
  } else {
    var unique_id = new Date().valueOf();
    var box_obj = input_data.value; 
    var temp_title = box_obj;
    box_obj = new Obj_Create(unique_id, temp_title); 
    object_arry.push(box_obj); 

    var box_div = document.createElement("div"); 
    box_div.classList.add("index_box", unique_id); 

    var p_tag = document.createElement("p"); 
    p_tag.classList.add("title", unique_id); 
    p_tag.textContent = input_data.value; 
    p_tag.addEventListener('click', function (obj_new_page){
      new_page_fun(obj_new_page);
    });

    box_div.append(p_tag); 
    
    box_div.append(document.createElement("hr")); 

    var task_box = document.createElement("div"); 
    task_box.classList.add("task_box", unique_id); 
    box_div.append(task_box); 
    
    var task_icon1 = document.createElement("div"); 
    task_icon1.classList.add("task_icon");
    
    var task_plus1 = document.createElement("i"); 
    task_plus1.classList.add("fas", "fa-plus-circle", "task_plus", unique_id);
    task_icon1.append(task_plus1); 

    var task_delete1 = document.createElement("i"); 
    task_delete1.classList.add("fas", "fa-trash", "task_delete", unique_id);
    task_icon1.append(task_delete1); 
    box_div.append(task_icon1); 

    con_box.append(box_div); 

    add_icon01 = document.getElementsByClassName("task_plus");
    add_icon01[count].addEventListener('click', function (count) {
      add_icon2(count.target.classList[3]);
    });

    delete_icon01 = document.getElementsByClassName("task_delete");
    delete_icon01[count].addEventListener('click', function (count) {
      delete_icon2(count.target.classList[3]);
    });
    count++;
    if(con_box.children.length>=0){
      document.querySelector('.no_item').classList.add('hidden');
    }
    closeBtn(); 
  }
});