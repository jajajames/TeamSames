$( document ).ready(function() {
  var el = $("#gleet_body");
  var la = $("#char-count");
  var el2 = $("#new_gleet");


  function loquaciousnessDisplay(quant) {
    la.text(`${ quant + 1 }/170 characters.`);
  }

  function testOverLoquaciousness(text) {
    if (text.length > 170)
      return true;
    else
      return false;
  }

  function dissuade(tex) {
    if (testOverLoquaciousness(tex))
      la.css("color", "red");
    else
      la.css("color", "mediumpurple");
  }

  function gleetCheck() {
    loquaciousnessDisplay(el.val().length);
    dissuade(el.val());
  }

  el.on('keypress', function(){ gleetCheck(); });

  el2.submit(function(event) {
    if (testOverLoquaciousness(el.val())) {
      event.preventDefault();
      return false;
    }
  });
});
