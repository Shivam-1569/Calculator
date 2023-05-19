let buttons=document.getElementsByClassName("box");
let screen=document.querySelector("input")
let ans="";
for(item of buttons){
    item.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
                ans=  eval(ans);
        }
        else if(e.target.innerHTML == 'C'){
            ans="";
        }
        else if(e.target.innerHTML == 'DEL'){
            ans = ans.substring(0, ans.length-1)
        }
        else{
            let x=e.target.innerHTML;
            
            ans=ans+e.target.innerHTML;
        }
        screen.value=ans;
        
    });
}
