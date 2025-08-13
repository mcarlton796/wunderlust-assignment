function toggle(a){
    let b = document.querySelector("nav");

    if(b.classList.contains("unchecked")){
        b.classList.add("checked");
        b.classList.remove("unchecked");
    }else{
        b.classList.add("unchecked");
        b.classList.remove("checked");
    }
}