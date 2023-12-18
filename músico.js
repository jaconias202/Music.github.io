let icone = document.getElementById('icone');
let boxCard = document.getElementById('boxCard')
let imfo= document.getElementById('informacoes')
let icon2 = document.getElementById('Icon2')
let boxMenur = document.getElementById('Box-mneu')
let iconMen = document.getElementById('IconMen')

let liRmv = document.getElementById('LiPraSair')
let removeLi =document.getElementById('LiPraSair')

 //_______________________________________________________//
let btnP = document.getElementById('btnP');
let btnFecharCantor = document.getElementById('btnFecharCantor');
let descriCantor =document.getElementById('descriCantor');
 //_______________________________________________________//


 //_______________menu_____________________________//
icon2.addEventListener('click',function(){
   boxMenur.classList.add('adicionada');
   removeLi.classList.remove('removidaUl');
   boxMenur.classList.remove('removida');
   icon2.name="close-outline"
});
liRmv.addEventListener('click',function(){
   boxMenur.classList.add('removida')
   icon2.name="menu-outline"
  removeLi.classList.add('removidaUl')
})
//_______________________________________________________//



//_____________sobreMe_____________________________//
btnP.addEventListener('click', function(){
    descriCantor.classList.add('fechouCantou')
    btnFecharCantor.addEventListener('click', function(){
    descriCantor.classList.remove('fechouCantou');
    })
})
//_______________________________________________________//

//_______descricao_mukic1_____________________________//
let saber_1 = document.getElementById('saber_1');
let descricaoMusic = document.getElementById('descricaoMusic')
let btnDes = document.getElementById('btnDes')
saber_1.addEventListener('click',function(){
    descricaoMusic.classList.add('addMusick1');
    btnDes.addEventListener('click', function(){
    descricaoMusic.classList.remove('addMusick1');
    })
})
//_______________________________________________________//

//_______descricao_mukic2____________________________//
let saber_2 = document.getElementById('saber_2')
let descricaoMusic2 = document.getElementById('descricaoMusic2');
let btnDes2 = document.getElementById('btnDes2')
saber_2.addEventListener('click', function(){
    descricaoMusic2.classList.add('addMusick2');
    btnDes2.addEventListener('click',function(){
    descricaoMusic2.classList.remove('addMusick2')
    })
}) 
//_______________________________________________________//


//____________descricao_mukic3____________________________//
let saber_3 = document.getElementById('saber_3');
let descricaoMusic3 = document.getElementById('DescricaoMusic3')
let btnDes3 = document.getElementById('btnDess3');
saber_3.addEventListener('click', function(){
    descricaoMusic3.classList.add('addMusick3')
    btnDes3.addEventListener('click',function(){
    descricaoMusic3.classList.remove('addMusick3');
    })
})
 //_______________________________________________________//


//____________________descrisao muskic4_________________//
let saber_4 = document.getElementById('saber_4')
let descricaoMusic4=document.getElementById('descricaoMusic4');
let btnDes4 = document.getElementById('btnDes4')
saber_4.addEventListener('click',function(){
    descricaoMusic4.classList.add('addMusick4')
    btnDes4.addEventListener('click', function(){
    descricaoMusic4.classList.remove('addMusick4')
    })
})
  //_______________________________________________________//



//_____________descricao_mukic5____________________________//
let saber_5 = document.getElementById('saber_5')
let descricaoMusic5 = document.getElementById('descricaoMusic5')
let btnDes5 = document.getElementById('btnDes5')
saber_5.addEventListener('click', function(){
    descricaoMusic5.classList.add('addMusick5');
    btnDes5.addEventListener('click', function(){
    descricaoMusic5.classList.remove('addMusick5');
    })
})
//_______________________________________________________//