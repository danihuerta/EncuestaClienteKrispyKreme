let btnComenzar = document.getElementById('btnComenzar');
let siBtn = document.getElementById('siBtn');

btnComenzar.addEventListener('click', (e)=>{
  document.getElementById('formContainer').style.display = 'block';
  btnComenzar.style.display = 'none';
});

siBtn.addEventListener('click', (e)=>{  
  let modalTxt = document.getElementById('modalText');
  let noBtn = document.getElementById('noBtn');
  let title = document.getElementById('staticBackdropLabel');
  title.innerHTML = 'Yujuuuu!! 😊';
  noBtn.innerHTML = 'Te quiero en gris';
  modalTxt.innerHTML = '¡Felicidades! Te has ganado un kit que incluye: <br> 1. Una relación bonita y estable ❤ <br> 2. Mucho cariño, atención, besos y apapachos <br> 3. Y un ramo de tulipanes porque sé que son tus favoritos 😘<br><i>Ahora porfa márcame o mándame whats porque no sé qué respondiste</i>😂';
  siBtn.innerHTML = 'Te quiero pero en azul';
  siBtn.addEventListener('click', ()=>{
    window.location.reload();
  })
})