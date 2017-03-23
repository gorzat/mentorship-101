function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeDuplicateBrTags(str) {
  return str.replace(/(<br ?\/?>){2,}/gi, '<br />');
}

function sliceText(text = '', from = 0, to = 90) {
  if (text.length <= to) {
    return text;
  }

  text = text
    .substring(from, to)
    .split(/\s/)
    .slice(0, -1)
    .join(' ');

  return `${text}&hellip;`;
}

function createGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;

    return v.toString(16);
  });
}

/**
 * How to use it:
 * function go(callback) { callback(); }
 * promisifyFunction(go).then(() => console.log('success')).catch(error => console.log(error))
 * 
 * @param {*} func 
 */
function promisifyFunction(func) {
    const p = new Promise((resolve, reject) => {
        func(error => {
            if(error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });

    return p;
}

module.exports = {
  capitalizeFirstLetter,
  removeDuplicateBrTags,
  sliceText,
  createGuid,
  promisifyFunction
};
