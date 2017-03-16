const styles = [{ "class": "red", "params": [{ "name": "color", "value": "red" }] }, { "class": "green", "params": [{ "name": "background-color", "value": "green" }] }, { "class": "blue", "params": [{ "name": "position", "value": "absolute" }, { "name": "right", "value": "0" }, { "name": "top", "value": "10px" }] }];
const root = document.body;

function addStyle(styleCss, el, colorEl) {
  for (k = 0; k < styleCss.length; k++) {
    if (styleCss[k].class === colorEl) {
      for (l = 0; l < styleCss[k].params.length; l++) {
        let nameCss = styleCss[k].params[l].name;
        if (nameCss === "background-color") {
          nameCss = "backgroundColor";
        }
        let valueCss = styleCss[k].params[l].value;
        el.style[nameCss] = valueCss;
      }
    }
  }
}

function testDepth(el, depth) {
  for (var i = 0; el.children.length > i; i++) {
    testDepth(el.children[i], depth + 1);
    for (var j = 0; j < styles.length; j++) {
      var colorEl = styles[j].class;
      if (el.children[i].classList.contains(colorEl)) {
        addStyle(styles, el.children[i], colorEl);
      }
    }
  }
}

testDepth(document.body, 0);
