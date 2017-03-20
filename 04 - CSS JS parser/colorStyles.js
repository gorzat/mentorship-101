const styles = [{ "class": "red", "params": [{ "name": "color", "value": "red" }] }, { "class": "green", "params": [{ "name": "background-color", "value": "green" }] }, { "class": "blue", "params": [{ "name": "position", "value": "absolute" }, { "name": "right", "value": "0" }, { "name": "top", "value": "10px" }] }];
const root = document.body;

function toCamelCase(nameTest) {
  for (let i = 0; i < nameTest.length; i++) {
    if (nameTest[i] === "-") {
      const start = nameTest.substring(0, i);
      const end = nameTest.substring(i + 2);
      const up = nameTest[i + 1].toUpperCase();
      let camelName = start + up + end;
      return camelName;
    }
  }
}

function addStyle(styleCss, el) {
  for (l = 0; l < styleCss.length; l++) {
    let nameCss = styleCss[l].name;
    let nameCssCamel = toCamelCase(styleCss[l].name);
    let valueCss = styleCss[l].value;
    if (nameCssCamel != null) {
      el.style[nameCssCamel] = valueCss;
    } else {
      el.style[nameCss] = valueCss;
    }
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
