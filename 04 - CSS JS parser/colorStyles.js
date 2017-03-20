const styles = [{ "class": "red", "params": [{ "name": "color", "value": "red" }] }, { "class": "green", "params": [{ "name": "background-color", "value": "green" }] }, { "class": "blue", "params": [{ "name": "position", "value": "absolute" }, { "name": "right", "value": "0" }, { "name": "top", "value": "10px" }] }];
const root = document.body;

function toCamelCase(nameCss) {
  for (let i = 0; i < nameCss.length; i++) {
    if (nameCss[i] === "-") {
      let start = nameCss.substring(0, i);
      let end = nameCss.substring(i + 2);
      let up = nameCss[i + 1].toUpperCase();
      nameCss = start + up + end;
    }
  }
}

function addStyle(styleCss, el) {
  for (l = 0; l < styleCss.length; l++) {
    toCamelCase(styleCss[l].name);
    let valueCss = styleCss[l].value;
    el.style[styleCss[l].name] = valueCss;
  }
}

function testDepth(el, depth) {
  for (var i = 0; el.children.length > i; i++) {
    testDepth(el.children[i], depth + 1);
    for (var j = 0; j < styles.length; j++) {
      var colorEl = styles[j].class;
      if (el.children[i].classList.contains(colorEl)) {
        addStyle(styles[j].params, el.children[i]);
      }
    }
  }
}

testDepth(document.body, 0);
