class Calc{
    constructor(prev, curr){ //op
        this.prev = prev;
        this.curr = curr;
        //this.op = op;
        this.clear();
    }
    
clear(){
    console.log("clear")
    this.previ = '';
    this.curre = '';
    this.op = undefined;
}
del(){
    console.log("del")
    this.curre = this.curre.toString().slice(0, -1);
}
append(num){
    console.log("append")
    if (num === "." && this.curre.includes(".")) return 
    this.curre = this.curre.toString() + num.toString()
}
operate(op){
    console.log("operate")
if (this.curre === '') return
if (this.previ !== '') {
    this.comp();
  }
  this.op = op
  this.previ = this.curre
  this.curre = ''
}

comp(){
    console.log("Comp")
    let outcome;
    const previous = parseFloat(this.previ);
    const current = parseFloat(this.curre);
    if (isNaN(previous) || isNaN(current)) return
    switch (this.op){
        case  '+':
            outcome = previous + current;
            break;
        case  'x':
            outcome = previous * current;
            break;
        case  '-':
            outcome = previous - current;
            break;
        case '÷':
            outcome = previous / current;
            break;
        
        //     calc.clear();
        //     calc.dis();
        // case 'bk':
        //     calc.del();
        //     calc.dis();
            // break;
        default:
            return;
    }
    this.curre = outcome;
    this.op = undefined;
    this.previ = ''
    }

disCurrNum(num){
    console.log("disCurrNum")
    const strNum = num.toString();
    const intNum = parseFloat(strNum.split('.')[0]);
    const decNum = strNum.split('.')[1];
    let disNums;
    if (isNaN(intNum)){
        disNums = '';
        }
    else{
        disNums = intNum.toLocaleString('en' , { maximumFractionDigits : 0});
        }
    if (decNum != null){
        return `${disNums}.${decNum}`;
        }
    else{
        return disNums;
        }
    }

    upDis(){
        console.log("updis")
        this.curr.innerText = 
        this.disCurrNum(this.curre);
        if (this.op != null){
        this.prev.innerText = 
        `${this.disCurrNum(this.previ)} ${this.op}`
        
        console.log(this.prev.innerText)
        }
        else{
            this.prev.innerText = '';
        }
    }
    question(){
       this.curr.innerText = "I love you"
       q.innerText =":)"
       nums.forEach(btn=>{
        btn.innerText = ":)"
       })
       syms.forEach(btn=>{
        btn.innerText = ":)"
       })
    }
}
   

const readOut = document.getElementById('screen');
const syms = document.querySelectorAll('.symbols');
const eq = document.getElementById('equal');
const c = document.getElementById('clear');
const b = document.getElementById('bk');
const nums = document.querySelectorAll(".numbers");
const op = document.querySelector('[op]');
const prev = document.querySelector('[previousNum]');
const curr= document.querySelector('[currentNum]');
const q = document.getElementById('question')

const calc = new Calc(prev, curr);

nums.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        console.log(btn)
        calc.append(btn.innerText)
        calc.upDis()
    })
})

syms.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        console.log(btn)
        calc.operate(btn.innerText)
        calc.upDis()
    })
})

//9or8    0or1    8or7
//==
eq.addEventListener("click", btn =>{
   // calc.operate(btn.innerText)
calc.comp();
calc.upDis();
})
q.addEventListener("click", btn=>{
    calc.clear();
    calc.question();
})

c.addEventListener('click', btn => {
    calc.operate(btn.innerText)
    calc.clear()
    calc.upDis()
  })
  
  b.addEventListener('click', btn => {
    calc.operate(btn.innerText)
    calc.del()
    calc.upDis()
  })

  document.addEventListener('keydown', function (event) {
    let numPatts = /[0-9]/g;
    let opPatts = /[+\-*\/]/g
    if (event.key.match(numPatts)) {
      event.preventDefault();
      calc.append(event.key)
      calc.upDis()
    }
    if (event.key === '.') {
      event.preventDefault();
      calc.append(event.key)
      calc.upDis()
    }
    if (event.key.match(opPatts)) {
      event.preventDefault();
      calc.operate(event.key)
      calc.upDis()
    }
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      calc.comp()
      calc.upDis()
    }
    if (event.key === "Backspace") {
      event.preventDefault();
      calc.del()
      calc.upDis()
    }
    if (event.key == 'Delete') {
      event.preventDefault();
      calc.clear()
      calc.upDis()
    }
  
  });






    // if (new nums[idx] != nums[idx])
    // {
    //     new idx === currIdx;
    //     }
        // return problem.push(nums[idx].value);
        // console.log(nums[idx].value)
       
        //return (nums[idx].value); //&& nums[currIdx].value);




//         let currNum = nums.length-1; 
// let currIdx;
// nums.forEach(function (num, idx){
// num.onclick = function(){
//     if (currNum >= idx){
//         currNum++;

//     return ([nums[idx].value]);
//     }
//  };
// });


// let currSym = syms.length-1; 
// syms.forEach(function (sym, sidx){
// sym.onclick = function(){
//     if (currSym >= sidx){
//         currSym++;
//     //    return problem.push(syms[sidx].value);
    
//         return ([syms[sidx].value]);
//     }
//  };
// });