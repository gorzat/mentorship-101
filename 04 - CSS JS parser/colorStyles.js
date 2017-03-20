const styles = [{ "class": "red", "params": [{ "name": "color", "value": "red" }] }, { "class": "green", "params": [{ "name": "background-color", "value": "green" }] }, { "class": "blue", "params": [{ "name": "position", "value": "absolute" }, { "name": "right", "value": "0" }, { "name": "top", "value": "10px" }] }];
const root = document.body;

function toCamelCase(nameTest) {
  let camelName = nameTest;
  for (let i = 0; i < camelName.length; i++) {
    if (camelName[i] === "-") {
      const start = camelName.substring(0, i);
      const end = camelName.substring(i + 2);
      const up = camelName[i + 1].toUpperCase();
      camelName = start + up + end;
    }
  }
  return camelName;
}

function addStyle(styleCss, el) {
  for (l = 0; l < styleCss.length; l++) {
    let nameCss = toCamelCase(styleCss[l].name);
    let valueCss = styleCss[l].value;
    el.style[nameCss] = valueCss;
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
