/**
 * Created by Zhichao Liu on 2015/10/29.
 */
window.onload = function () {
    var PI = Math.PI;
    var symFuncOne = ['sin','cos','tan','ln','sinh','cosh','tanh','e^x'],
        symFuncTwo = ['sin^-1','cos^-1','tan^-1','log2','sinh^-1','cosh^-1','tanh^-1','2^x'];

    var powAttr = '',
        sqrtAttr = '',
        EEAttr = '';

    var tmpStr = '',
        tmpExp = '',
        tmpEqual = 0,
        memoryEqual = 0;

    var hasMEM = false,
        hasDot = false,
        has2nd = false,
        hasXPowY = false,
        hasSQRT = false,
        hasEE = false;


    var statusBar = document.getElementsByClassName('status-bar'),
        nums = document.getElementsByClassName('shuzi'),
        symbol = document.getElementsByClassName('fuhao'),
        symbol1 = document.getElementsByClassName('fuhao1'),
        symbol2 = document.getElementsByClassName('fuhao2'),
        screenL1 =document.getElementsByClassName('line1'),
        screenL2 =document.getElementsByClassName('line2'),
        equalBtn = document.getElementsByClassName('equal'),
        twoNd = document.getElementsByClassName('nd'),
        radBtn = document.getElementsByClassName('rad')[0];


    document.onselectstart  = function(){
        return false;
    };


    var getTime = function(){
        var date = new Date();
        for(i=0;i<statusBar.length;i++){
            var hour = (date.getHours()<10)?'0'+date.getHours():date.getHours();
            var min = (date.getMinutes()<10)?'0'+date.getMinutes():date.getMinutes();
            statusBar[i].innerHTML = hour +':'+ min;
        }
    }
    getTime();
    var t = setInterval(getTime,5000);



    for(i=0;i<nums.length;i++){
        nums[i].onclick = function(){
            if(hasXPowY||hasSQRT||hasEE){
                if(hasXPowY){
                    powAttr += this.innerHTML;
                    tmpStr += "^"+powAttr;
                }else if(hasSQRT){
                    sqrtAttr += this.innerHTML;
                    tmpStr += 'yroot'+sqrtAttr;
                }else{
                    EEAttr+=this.innerHTML;
                    tmpStr+="EE"+EEAttr;
                }
            }else{
                if(this.innerHTML == '.'){
                    if(hasDot == false){
                        tmpStr+=this.innerHTML;
                        tmpExp+=this.innerHTML;
                        hasDot = true;
                    }
                }else{
                    tmpStr+=this.innerHTML;
                    tmpExp+=this.innerHTML;
                }
            }
            showLine1(tmpStr);
        }
    }


    for(i=0;i<symbol.length;i++){
        symbol[i].onclick = function(){
            hasDot = false;
            switch (this.innerHTML){
                case '×':
                    tmpExp+='*';
                    tmpStr+=this.innerHTML;
                    showLine1(tmpStr);
                    break;
                case '÷':
                    tmpExp+='/';
                    tmpStr+=this.innerHTML;
                    showLine1(tmpStr);
                    break;
                case '+/-':
                    tmpStr = eval(tmpStr)*(-1);
                    tmpExp = eval(tmpExp)*(-1);
                    showLine1(tmpStr);
                    showLine2(tmpExp);
                    break;
                case 'AC':
                    tmpExp = '';
                    tmpEqual = 0;
                    tmpStr = '';
                    showLine1(0);
                    showLine2(0);
                    hasDot = false;
                    hasXPowY = false;
                    powAttr = '';
                    hasSQRT = false;
                    sqrtAttr = '';
                    hasEE = false;
                    EEAttr = '';
                    break;
                default :
                    tmpExp+=this.innerHTML;
                    tmpStr+=this.innerHTML;
                    showLine1(tmpStr);
            }
        }
    }


    for(i=0;i<symbol1.length;i++){
        symbol1[i].onclick = function(){
            switch (this.innerHTML){
                case 'MC':
                    hasMEM = false;
                    memoryEqual = 0;
                    tmpStr = 'MEM CLEAR';
                    showLine1(tmpStr);
                    break;
                case 'M+':
                    if(hasMEM){
                        tmpExp = tmpEqual += memoryEqual;
                        tmpStr = 'MEM+';
                        showLine1(tmpStr);
                        showLine2(tmpEqual);
                    }
                    break;
                case 'M-':
                    if(hasMEM){
                        tmpExp = tmpEqual -= memoryEqual;
                        tmpStr = 'MEM-';
                        showLine1(tmpStr);
                        showLine2(tmpEqual);
                    }
                    break;
                case 'MR':
                    hasMEM = true;
                    tmpStr = "MEM REC";
                    memoryEqual = eval(tmpExp);
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
            }
        }
    }


    for(i=0;i<symbol2.length;i++){
        symbol2[i].onclick = function(){
            switch (this.innerHTML){
                case '2nd':
                    if(!has2nd){
                        this.style.background = "#C83232";
                        for(i=0;i<twoNd.length;i++){
                            twoNd[i].innerHTML = symFuncTwo[i];
                            twoNd[i].style.background = 'rgb(120,212,178)';
                        }
                        has2nd = true;
                    }else{
                        this.style.background = '#eee';
                        for(i=0;i<twoNd.length;i++){
                            twoNd[i].innerHTML = symFuncOne[i];
                            twoNd[i].style.background = '#eee';
                        }
                        has2nd = false;
                    }
                    break;
                case '(':
                    tmpExp+=this.innerHTML;
                    tmpStr+=this.innerHTML;
                    showLine1(tmpStr);
                    break;
                case ')':
                    tmpExp+=this.innerHTML;
                    tmpStr+=this.innerHTML;
                    showLine1(tmpStr);
                    break;
                case '%':
                    tmpEqual = eval(tmpExp)/100;
                    tmpStr = String(tmpEqual);
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpStr);
                    break;
                case 'x^-1':
                    tmpEqual = Math.pow(eval(tmpExp),-1);
                    tmpStr = '('+tmpStr+')^-1';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'x^2':
                    tmpEqual = Math.pow(eval(tmpExp),2);
                    tmpStr = '('+tmpStr+')^2';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'x^3':
                    tmpEqual = Math.pow(eval(tmpExp),3);
                    tmpStr = '('+tmpStr+')^3';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'x^y':
                    hasXPowY = true;
                    break;
                case 'x!':
                    if(eval(tmpExp)==0||eval(tmpExp)==1||tmpExp == ''){
                        tmpEqual = 1;
                    }else{
                        tmpEqual = eval(tmpExp);
                        for(i=eval(tmpExp)-1;i>1;i--){
                            tmpEqual*=i;
                        }
                    }
                    tmpStr = tmpStr + '!';
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case '√':
                    tmpStr = 'sqrt('+tmpStr+')';
                    tmpEqual = Math.sqrt(eval(tmpExp));
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    tmpStr = tmpEqual;
                    break;
                case 'x√y':
                    hasSQRT = true;
                    break;
                case 'log':
                    tmpEqual = Math.log10(eval(tmpExp));
                    tmpStr = 'log('+tmpStr+')';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'sin':
                    if(radBtn.innerHTML == 'Deg'){
                        tmpEqual = Math.sin(2*PI*eval(tmpExp)/360);
                    }else{
                        tmpEqual = Math.sin(eval(tmpExp));
                    }
                    tmpStr = 'sin('+tmpStr+radBtn.innerHTML+')';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'cos':
                    if(radBtn.innerHTML == 'Deg'){
                        tmpEqual = Math.cos(2*PI*eval(tmpExp)/360);
                    }else{
                        tmpEqual = Math.cos(eval(tmpExp));
                    }
                    tmpStr = 'cos('+tmpStr+radBtn.innerHTML+')';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'tan':
                    if(radBtn.innerHTML == 'Deg'){
                        tmpEqual = Math.tan(2*PI*eval(tmpExp)/360);
                    }else{
                        tmpEqual = Math.tan(eval(tmpExp));
                    }
                    tmpStr = 'tan('+tmpStr+radBtn.innerHTML+')';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'ln':
                    tmpEqual = Math.log(eval(tmpExp));
                    tmpStr = 'ln('+tmpStr+')';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'sinh':
                    tmpEqual = Math.sinh(eval(tmpExp));
                    tmpStr = 'sinh('+tmpStr+')';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'cosh':
                    tmpEqual = Math.cosh(eval(tmpExp));
                    tmpStr = 'cosh('+tmpStr+')';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'tanh':
                    tmpEqual = Math.tanh(eval(tmpExp));
                    tmpStr = 'tanh('+tmpStr+')';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'e^x':
                    alert('先告诉我怎么算-_-。sorry！');
                    break;
                case 'π':
                    tmpEqual = PI;
                    tmpStr = 'π';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
                case 'EE':
                    hasEE = true;
                    break;
                case 'Rand':
                    tmpEqual = Math.random();
                    tmpStr = 'Rand';
                    tmpExp = tmpEqual;
                    showLine1(tmpStr);
                    showLine2(tmpEqual);
                    break;
            }
        }
    }

    radBtn.onclick = function () {
        if(this.innerHTML == 'Rad'){
            this.innerHTML = 'Deg';
        }else{
            this.innerHTML = 'Rad';
        }
    };

    for(i=0;i<equalBtn.length;i++){
        equalBtn[i].onclick = function(){
            if(tmpEqual==""&&tmpStr==""){
                for(i=0;i<screenL1.length;i++){
                    screenL1[i].innerHTML = 0;
                }
                for(i=0;i<screenL2.length;i++){
                    screenL2[i].innerHTML = 0;
                }
            }else{
                if(hasXPowY||hasSQRT||hasEE){
                    if(hasXPowY){
                        tmpEqual = Math.pow(eval(tmpExp),powAttr);
                        hasXPowY = false;
                    }else if(hasSQRT){
                        alert('先告诉我怎么算-_-。sorry！');
                        hasSQRT = false;
                    }else{
                        tmpEqual = eval(tmpExp)*Math.pow(10,EEAttr);
                        hasEE = false;
                    }
                }else{
                    tmpEqual = eval(tmpExp);

                }
                powAttr = '';
                sqrtAttr = '';
                tmpStr = String(tmpEqual);
                tmpExp = tmpEqual;
                memoryEqual = tmpEqual;
                for(i=0;i<screenL1.length;i++){
                    screenL1[i].innerHTML = tmpStr;
                }
                for(i=0;i<screenL2.length;i++){
                    screenL2[i].innerHTML = tmpEqual;
                }
            }
        }
    }


    function showLine1(request){
        for(i=0;i<screenL1.length;i++){
            screenL1[i].innerHTML = request;
        }
    }
    function showLine2(request){
        for(i=0;i<screenL2.length;i++){
            screenL2[i].innerHTML = request;
        }
    }
};