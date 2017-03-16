const css = '.test { color: red; }';
let cssClass = '';
let paramName = '';
let paramValue = '';
let inStatement = false;

for(var i=0; i<css.length; i++) {

  if (!inStatement && css[i] === '.') {
    var j = i+1;
    do {
      j = j+1;
    } while  (css[j] != ' '); 
    cssClass = css.slice(i+1, j);
    console.log('cssClass = ' + cssClass);
  }

  if(css[i] === '{') {
    inStatement = true;
  }
  
  if(css[i] === '}') {
    inStatement = false;
  }
  
  if(inStatement && /[a-z]/.test(css[i])) {
    console.log('inStatement! letter found! ' + css[i]);
  }
}
