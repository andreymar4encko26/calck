let mod1 ="подстолья  модер1"
let mod2 =" подстолья модер2"
let mod3 =" подстолья круглые"
let mod1cb ="столы модерн 1"
let mod2cb ="столы модерн 2"
let mod3cb ="столы круглые"
let su,su2,su3,su4,su5,su6,sumTsargi


mod1Text = 'всего c сделано  модерн1',
mod1sum ='всего заработана на модерн1',
mod2Text = 'всего c сделано  модерн2',
mod2sum ='всего заработана на модерн3',
mod3Text = 'всего c сделано  круглых',
mod3sum ='всего заработана на круглых',
mod4Text = 'всего c сделано  моедрн1 столов',
mod4sum ='всего заработана на столах модерн1',
mod5Text = 'всего c сделано  моедрн2 столов',
mod5sum ='всего заработана на столах модерн2',
mod6Text = 'всего c сделано  круглых столов',
mod6sum ='всего заработана на столах круглых'

let m1out = document.querySelector('.m1')
let arrModer1 = []
let arrModer1Date = []
let arrModer2 = []
let arrModer2Date = []
let arrModer3 = []
let arrModer3Date = []
let arrModer1cb = []
let arrModer1Datecb = []
let arrModer2cb = []
let arrModer2Datecb = []
let arrModer3cb = []
let arrModer3Datecb = []
let sum1,
summ2,
summ3,
summ1cb,
summ2cb,
summ3cb,
mresault
let wrapper2 = document.querySelector('.moderns1')
let wrapper3 = document.querySelector('.moderns2')
let wrapper4 = document.querySelector('.moderns3')
let wrapper5 = document.querySelector('.moderns4')
let wrapper6 = document.querySelector('.moderns5')
let wrapper7= document.querySelector('.moderns6')


let title1 = "модер1"
let title2 = "модер2"
let title3 = "круглые"

let title4 = " столы модер1"
let title5 = " столы модер2"
let title6 = " столы круглые"

 function rendertcargi( out,a,b){
    out.insertAdjacentHTML('beforeend', `
        <li>
        <div>$ всего царг ${a}</div>
        <div> всего заработано на царгах${b}</div>
        
        </li>
       
    `)
 }
function renderSum (a ,mod1Text,sum ,mod1Sum,su,title){
    a.insertAdjacentHTML('beforeend', `
        <h3 class=mtitle>${title}</h3>
        <li class="br">
        <div>${mod1Text} ${sum}</div>
        <div>${mod1Sum} ${su}</div>
        
        </li>
       
    `)
    
    }


    function renderM1 (i,render){


        render.insertAdjacentHTML('beforeend', `
          <li class="mli"><span class="m1date">${i.date}-</span>
              <span class="count">${i.name}</span></li>
      `)
      
      };
    
function start( a){
  
    fetch(a)
    .then((response) => response.json())
    .then((data) => {

        data.modrnn.forEach(item => {
            item.moder1.forEach(i => {
                arrModer1Date.push(i.date)

                arrModer1.push(i.name)
                renderM1 (i,wrapper2)
            });

            

            


        });
        data.modrnn.forEach(item => {
            item.moder2.forEach(i => {
                arrModer2Date.push(i.date)

                arrModer2.push(i.name)
                renderM1 (i,wrapper3)
            });






        });

        data.modrnn.forEach(item => {
            item.moder3.forEach(i => {
                arrModer3Date.push(i.date)

                arrModer3.push(i.name)
                renderM1 (i,wrapper4)
            });






        });

        data.modrnn.forEach(item => {
            item.moderm1cb.forEach(i => {
                arrModer1Datecb.push(i.date)

                arrModer1cb.push(i.name)
                renderM1 (i,wrapper5)

            });






        });
        data.modrnn.forEach(item => {
            item.moderm2cb.forEach(i => {
                arrModer2Datecb.push(i.date)

                arrModer2cb.push(i.name)
                renderM1 (i,wrapper6)
            });






        });
        data.modrnn.forEach(item => {
            item.moderm3cb.forEach(i => {
                arrModer3Datecb.push(i.date)

                arrModer3cb.push(i.name)
                renderM1 (i,wrapper7)
            });






        });
        
        
        
    
    
    

    })
    setTimeout(m1, 100);
    setTimeout(m2, 100);
    setTimeout(m3, 100);
    setTimeout(m1cb, 100);
    setTimeout(m2cb, 100);
    setTimeout(m3cb, 100);
    setTimeout(getSumM1, 150)
    setTimeout ( getSumPrise,200)


}




function m1(){
    sum1 = arrModer1.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`количество собранных модерн 1 подстолья; ${sum1}`)
}

function m2(){
    summ2 = arrModer2.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`количество собранных модерн 2 подстолья; ${summ2}`)
}
function m3(){
    summ3 = arrModer3.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`количество собранных круглых  подстолья; ${summ3}`)
}




function m1cb(){
    summ1cb = arrModer1cb.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`количество собранных столов модерн1; ${summ1cb}`)
}
function m2cb(){
    summ2cb = arrModer2cb.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`количество собранных столов модерн 2 ${summ2cb}`)
}
function m3cb(){
    summ3cb =  arrModer3cb.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`количество собранных столов круглые ${summ3cb}`)
}



function getSumM(a,b,prise,su){
    console.log(`Всего заработтано на  ${b} ${a*prise}`)
    su =a*prise
}




function getSumtsargi() {
    tsargi =mresault *4;
    sumTsargi = tsargi*5
    console.log(`всего царг замазано ${tsargi}`)
    console.log(`всего царг всего полученно ${sumTsargi}`)
    console.log(`всего царг всего полученно ${sumTsargi}`)
    rendertcargi( m1out,tsargi,sumTsargi)

}

function getSumM1(){
    mresault = sum1+summ2+summ3

    
    console.log(`всего сделано подстолий ${mresault}`)
    
    getSumtsargi()
    sumM1()
    sumM2()
    sum3()
    sum4()
    sum5()
    sum6()



}



function sumM1(){
     su =sum1*69
    console.log("моденах1 "+su)
    renderSum (m1out,mod1Text,sum1,mod1sum,su, title1)

    return su
}
function sumM2(){
     su2 =summ2*69
    console.log("моденах2 "+su2)
    
    renderSum (m1out,mod2Text,summ2,mod2sum,su2, title2)
}

function sum3(){
     su3 =summ3*69
    console.log("круглых "+su3)
    renderSum (m1out,mod3Text,summ3,mod2sum,su3,title3)
    return su3
}

function sum4(){
     su4=summ1cb*40
    console.log("столы модер1 "+su4)
    renderSum (m1out,mod4Text,summ1cb,mod4sum,su4, title4)
    return su4
}
function sum5(){
     su5=summ2cb*40
    console.log("столы модерн2 "+su5)
    renderSum (m1out,mod5Text,summ2cb,mod4sum,su5, title5)
    return su5
}
function sum6(){
     su6=summ3cb*40
    console.log("столы круглые "+su6)
    renderSum (m1out,mod6Text,summ3cb,mod6sum,su6, title6)
    return su6
}




function getSumPrise(){
let suPrise =su+su2+su3+su4+su5+su6+sumTsargi
console.log('всего заработанно'+suPrise)
document.querySelector('.divsumItog').insertAdjacentHTML('beforeend', `
 
    
   <span class="a">общяя сумма ${suPrise}</span>
   
`)
return suPrise
}

let bt1m = document.querySelector('.btn')
 
bt1m.addEventListener('click',()=>{
   
   start('/db.json')

  
  
   bt1m.disabled =true
   
 
})