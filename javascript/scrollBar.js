window.addEventListener('scroll', function() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  
  const scrollbarThumb = document.querySelector('::-webkit-scrollbar-thumb');
  
  if (scrollTop === 0 || scrollTop === scrollableHeight) {
      scrollbarThumb.style.transform = 'scale(1.2) translateY(5px)';
  } else {
      scrollbarThumb.style.transform = 'scale(0.5) translateY(0)';
  }
  
  scrollbarThumb.style.transition = 'transform 0.75s ease-out';
});