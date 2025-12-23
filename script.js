
document.querySelectorAll('.golliryu').forEach(img => {
  img.addEventListener('click', function() {
    // Добавляем класс для анимации
    this.classList.add('clicked');
    
    // Убираем класс после завершения анимации
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 600);
    
    // Показываем модальное окно с задержкой
    setTimeout(() => {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      
      // Анимация появления модального окна
      modal.style.transform = 'scale(0.8)';
      modal.style.opacity = '0';
      modal.style.transition = 'all 0.4s ease';
      
      requestAnimationFrame(() => {
        modal.style.transform = 'scale(1)';
        modal.style.opacity = '1';
      });
    }, 200);
  });
});

const hiddenImg = document.querySelector('.hidden-img');
function openImg(){
  if(hiddenImg.style.display == "block"){
    hiddenImg.style.display = "none";
  }else{
    hiddenImg.style.display = "block";
  }
}


