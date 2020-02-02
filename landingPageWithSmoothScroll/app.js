document.querySelector('.container').addEventListener('scroll', function(event) {
  var currentScrollTop = document.querySelector('.container').scrollTop;
  var currentSectionHeight = document.querySelectorAll('.story')[0].scrollHeight;
  var currentSection = Math.round(currentScrollTop / currentSectionHeight);

  console.log('currentSection', currentSection);

  initToggle(currentSection);

  var totalHeight =
    document.querySelector('.story').scrollHeight *
    (document.querySelectorAll('.story').length - 1);

  console.log('계산 :', totalHeight - currentSectionHeight / 2);
  // show end
  if (currentScrollTop > totalHeight) {
    document.querySelectorAll('#story9 div')[0].classList.remove('show');
    document.querySelectorAll('#story9 div')[1].classList.add('show');
  } else if (currentScrollTop < totalHeight - currentSectionHeight / 2) {
    // hide end
    document.querySelectorAll('#story9 div')[0].classList.add('show');
    document.querySelectorAll('#story9 div')[1].classList.remove('show');
  }
});

function clearToggle() {
  // document.querySelectorAll('[data-toggle]').forEach(function(arg) {
  //   arg.style.color = 'white';
  // });

  let list = document.querySelectorAll('[data-toggle]');

  for (var i = 0; i < list.length; i++) {
    list[i].style.color = 'white';
  }
}

function initToggle(current) {
  clearToggle();
  // document.querySelectorAll(`[data-toggle="story${current + 1}"]`).forEach(function(el) {
  //   el.style.color = 'skyblue';
  //   el.classList.add('add');
  //   el.classList.remove('add2');
  // });

  let list = document.querySelectorAll('[data-toggle="story' + (current + 1) + '"]');

  for (var i = 0; i < list.length; i++) {
    list[i].style.color = 'skyblue';
  }
}
