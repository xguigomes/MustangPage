let prevButtom = document.getElementById('prev')
let nextButtom = document.getElementById('next')
nextButtom.onclick = () => {
   

    active = active +1 . lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add('active');
 
 }
 
 prevButtom.onclick = () => {
     
  
     active = active -1 < fistPosition ? lastPosition : active - 1;
     setSlider();
     items[active].classList.add('active');
     
 }