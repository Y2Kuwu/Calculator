const readOut = document.getElementById('screen');

const problem = [];

let syms = document.querySelectorAll(".symbols")
let currSym = syms.length-1; 
syms.forEach(function (sym, sidx){
sym.onclick = function(){
    if (currSym >= sidx){
        currSym++;
    //    return problem.push(syms[sidx].value);
    
        return (syms[sidx].value);
    }
 };
});

let nums = document.querySelectorAll(".numbers")
let currNum = nums.length-1; 
let currIdx;
nums.forEach(function (num, idx){
num.onclick = function(){
    if (currNum >= idx){
        currNum++;
    // if (new nums[idx] != nums[idx])
    // {
    //     new idx === currIdx;
    //     }
        // return problem.push(nums[idx].value);
        return (nums[idx].value); //&& nums[currIdx].value);
    }
 };
});

class Calc{
    constructor(prev, curr){
        this.prev = prev;
        this.op = op;
        this.curr = curr;
        this.clear();
    }
    calc = new Calc(prev, curr);
clear(){
    this.prev = '';
    this.op = '';
    this.curr = '';
    this.op = undefined;
  
}

dec(num){
    if (num === "." &&this.curr.includes("."))
    return this.curr = this.curr.toString() + num.toString()
}
operate(op){
if (this.curr !== '') return
if (this.prev !== '') {
    this.comp()
  }
  this.op = op
  this.prev = this.prev
  this.curr = ''
}



comp(){
    let outcome
    const previous = parseFloat(this.prev)
    const current = parseFloat(this.current)
    if (prev != Number || curr != Number){
    switch (this.op){
        case syms[sidx].value = '+':
            outcome = previous + current;
            break;
        case syms[sidx].value = 'x':
            outcome = previous * current;
            break;
        case syms[sidx].value = '-':
            outcome = previous - current;
            break;
        case syms[sidx].value = '/':
            outcome = previous / current;
            break;
        case syms[sidx].value = 'c':
            calc.clear();
            calc.dis();
        case syms[sidx].value = 'bk':
            calc.del();
            calc.dis();
            break;
        default:
            return;
    } 
    this.curr = outcome;
    this.op = undefined;
    this. prev = '';
    }
}
equals(){
    calc.comp();
    calc.dis();
}

del(){
    this.curr = this.curr.toString().slice(0, -1);
}
dis(){
    this.curr.innerText = this.disNum(this.curr);
    if (this.op != null){
    this.prev.innerText = `${this.currNum(this.prev)} ${this.op}`
    }
    else{
        this.prev.innerText = '';
    }
}
currNum(num_){
    const strNum = num_.toString();
    const intNum = parseFloat(strNum.split('.')[0]);
    const decNum = strNum.split('.')[1];
    var disNums;
    if (intNum != Number){
        disNums = '';
    }
    else{
        disNums = intNum.toLocaleString('en' , { maximumFractionDigits : 0});
    }
    if (decNum != null){
        return `${disNums}${decNum}`;
    }
    else{
        return intNum;
    }
}
}


const num = nums;
const op = syms;
const equals = syms[11]//Calc.equals(syms[sidx].value == '=');
const del= syms[10];
const allClearButton = document.querySelector('[data-all-clear]')
const prev = nums.value//nums[idx].value;
const curr = nums.value//nums[currIdx].value;

