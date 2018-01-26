function storeSettings() {
  if ('localStorage' in window && 
  window['localStorage'] !== null) {
  try { var time1 = $('#time1').val();
  localStorage.setItem('time1', time1);
  location.href = 'RSetup.html';
  } catch (e) { alert('An error occured');
  }
  } else {
  alert('Sorry, your browser must have localStorage support');
  } }