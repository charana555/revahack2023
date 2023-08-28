function isInViewport(element) {
    var elementTop = element.offsetTop;
    var elementBottom = elementTop + element.offsetHeight;
  
    var viewportTop = window.scrollY;
    var viewportBottom = viewportTop + (window.innerHeight / 2);
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }
  
  function handleScroll() {
    var timelineItems = document.querySelectorAll('.timeline-main ul li');
    timelineItems.forEach(function(item) {
      if (isInViewport(item)) {
        item.classList.add('adding');
      } else {
        item.classList.remove('adding');
      }
    });
  }
  
  window.addEventListener('resize', handleScroll);
  window.addEventListener('scroll', handleScroll);
  
  window.addEventListener('load', function() {
    var winHeight = window.innerHeight;
    var element = document.querySelector('.timeline-main');
    var elementTop = element.offsetTop - winHeight;
    var elementHeight = element.offsetHeight;
  
    var scrollPos = window.scrollY;
  
    console.log('elementTop ', elementTop, ' elementHeight ', elementHeight, ' scrollPos ', scrollPos);
  
    window.addEventListener('scroll', function() {
      scrollPos = window.scrollY - window.innerHeight / 2;
      var r = scrollPos - elementTop;
      console.log('r ' + r);
      if (scrollPos >= elementTop) {
        console.log('inn');
        if (elementHeight >= r) {
          document.querySelector('.pogress').style.height = r + 'px';
        }
      }
      if (r < 0) {
        console.log('0 inn');
        document.querySelector('.pogress').style.height = 0;
      }
  
      if (elementHeight < r) {
        document.querySelector('.pogress').style.height = elementHeight + 'px';
      }
    });
  });
  