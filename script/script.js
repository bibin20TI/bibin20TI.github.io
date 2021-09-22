const gambar = document.querySelector('#gambar');
 
 gambar.addEventListener('mouseenter',function(){

                
              gambar.classList.toggle('gambar');
 });

 gambar.addEventListener('mouseleave',function(){

 	   gambar.classList.remove('gambar');
 });

 const container = document.querySelector('#container');

 const gede =document.querySelector('.gede');

 container.addEventListener('click',function(event){

 	//cek apakah yang di klik class thumb
 	if(event.target.className == 'box'){
          gede.src =event.target.src;

 	}

 });