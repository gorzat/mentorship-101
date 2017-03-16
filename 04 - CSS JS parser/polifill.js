function gosiaClosest(el, selector) {
  var parent = el.parentElement;
  do{
      parent = parent.parentElement;
  } while (parent.matches(selector));
  //el.parenElement
  //el.match
  return parent;
}

const sp = document.getElementById('starting-point');
const closest = gosiaClosest(sp, '.test123');

if (!document.body.closest) {
  HTMLElement.prtotype.closest = gosiaClosest;
}

console.log(closest);
