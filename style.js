window.addEventListener('DOMContentLoaded', function() {
    adjustContentHeight();
  });
  
  window.addEventListener('resize', function() {
    adjustContentHeight();
  });
  
  function adjustContentHeight() {
    var windowHeight = window.innerHeight;
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var content = document.querySelector('.content');
  
    if (header && footer && content) {
      var headerHeight = header.offsetHeight;
      var footerHeight = footer.offsetHeight;
  
      var contentHeight = windowHeight - headerHeight - footerHeight;
      content.style.height = contentHeight + 'px';
    }
  }
  
