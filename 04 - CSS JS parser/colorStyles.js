const styles = [{"class":"red","params":[{"name":"color","value":"red"}]},{"class":"green","params":[{"name":"background-color","value":"green"}]},{"class":"blue","params":[{"name":"position","value":"absolute"},{"name":"right","value":"0"},{"name":"top","value":"10px"}]}];
const root = document.body;


//root.children.length root.children[i]
//root.parentElement
//elem.classList.add/remove/contains
//elem.style.backgroundColor 
//$0.style[name] = value;


for (i=0; i<styles.length; i++){
    var colorEl = styles[i].class;
    console.log(colorEl);
    for (k=0; k<temp; k++){
        document.getElementByClassName[k].backgroundColor = colorEl;
    }

    for (let j=0; j<root.children.length; j++){
        if (root.children[j].classList.contains(colorEl)){
            let temp = document.getElementsByClassName(colorEl);
            for (k=0; k<temp; k++){
                document.getElementByClassName[k].backgroundColor = colorEl;
            }
        }
    }
}
