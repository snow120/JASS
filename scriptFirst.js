const ans = document.getElementById('ans');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const calculate = document.getElementById('calculate')
const clear = document.getElementById('clear')

const e = document.getElementById('formulas');
const unit = document.getElementById('unit')

e.addEventListener('change', () =>{
    const equation = e.options[e.selectedIndex].text;
    // ans.innerText = equation;   
    if(e.selectedIndex == 0){
        value1.placeholder = ''
        value2.placeholder = ''
    }
    if(e.selectedIndex == 1){
        value1.placeholder = 'Enter distance'
        value2.placeholder = 'Enter time'
    }

    if(e.selectedIndex == 2){
        value1.placeholder = 'Enter displacement'
        value2.placeholder = 'Enter time'
    }

    if(e.selectedIndex == 3){
        value1.placeholder = 'Enter velocity'
        value2.placeholder = 'Enter time'
    }

    if(e.selectedIndex == 4){
        value1.placeholder = 'Enter mass'
        value2.placeholder = 'Enter velocity'
    }
     
})
function calculate_SI(){
  let distance = value1.value;
   let time = value2.value;

    return (distance/time).toFixed(2);

}
function calculate_CGS(){
    return (calculate_SI()*100).toFixed(2);
}
function kinetic_SI(){
    let mass = value1.value;
     let velocity = value2.value;
  
      return ((mass*velocity*velocity)/2).toFixed(2);
  
  }
function kinetic_CGS(){
    return (kinetic_SI()*Math.pow(10,7)).toFixed(2);
}
clear.addEventListener('click',()=>{
    value1.value = ""
    value2.value = ""
    ans.innerHTML = ""
})

calculate.addEventListener('click',()=>{
   if(e.selectedIndex ==0)
   ans.innerText = "Invalid equation"

if(e.selectedIndex == 1){
    if(value1.value == "" || value2.value == "" )
    ans.innerHTML = "Invalid input";
    else{
        if(unit.selectedIndex == 0)
        ans.innerHTML = calculate_SI()+' ' +'m/s';
        else
        ans.innerHTML = calculate_CGS()+' ' +'cm/s';
    }
}
if(e.selectedIndex == 2){
    if(value1.value == "" || value2.value == "" )
    ans.innerHTML = "Invalid input"
    else{
        if(unit.selectedIndex == 0)
        ans.innerHTML = calculate_SI()+' ' +'m/s';
        else
        ans.innerHTML = calculate_CGS()+' ' + 'cm/s'
    }
}
if(e.selectedIndex == 3){
    if(value1.value == "" || value2.value == "" )
    ans.innerHTML = "Invalid input"
    else{
        if(unit.selectedIndex == 0)
        ans.innerHTML = calculate_SI()+' ' +'m/s²';
        else
        ans.innerHTML = calculate_CGS()+' ' + 'cm/s²'
    }
}
if(e.selectedIndex == 4){
    if(value1.value == "" || value2.value == "" )
    ans.innerHTML = "Invalid input"
    else{
        if(unit.selectedIndex == 0)
        ans.innerHTML = kinetic_SI()+' ' +'J';
        else
        ans.innerHTML = kinetic_CGS()+' ' + 'ergs'
    }
}
})

unit.addEventListener('change',()=>{
    if(unit.selectedIndex ==1)
    if(e.selectedIndex >=1 && e.selectedIndex<=3){
      if(e.selectedIndex==3)
      ans.innerHTML = calculate_CGS()+' ' + 'cm/s²'
      else
      ans.innerHTML = calculate_CGS()+' ' + 'cm/s'
    }else{
        ans.innerHTML = kinetic_CGS()+' ' + 'ergs'
    }
})





