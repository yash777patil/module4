(function (window) {

  var names = ["mark", "sam", "Jen", "Jason", "yash", "Frank", "jatin", "Paula", "jaya", "Jim"];

  for (var i = 0; i < names.length; i++) {
     var firstLetter = ((names[i]).charAt(0)).toLowerCase();
     if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
     else {
      helloSpeaker.speak(names[i]);
     }
   }

})(window);
