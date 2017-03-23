const assert = require('assert');
const {capitalizeFirstLetter, removeDuplicateBrTags, sliceText, createGuid, promisifyFunction} = require('../main.js');

describe('capitalizeFirstLetter', function() {
    it("should capitalize first letter", function() {
        assert.equal(capitalizeFirstLetter('konrad'), 'Konrad');
    });

    it("shouldn't change word if it already starts with a capital letter", function() {
        assert.equal(capitalizeFirstLetter('Konrad'), 'Konrad');
    });
    
    it("should work with polish letters", function() {
        assert.equal(capitalizeFirstLetter('ślad'), 'Ślad');
    });
    
    it("shouldn't do anything when first char is not a letter", function() {
        assert.equal(capitalizeFirstLetter('99top'), '99top');
    });

    it("shouldn't do anything if stirng is empty", function() {
        assert.equal(capitalizeFirstLetter(''), '');
    });
});

//TODO others

describe('createGuid', function() {
    it("should generate string of random characters, separated with '-', in following format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", function() {
        const reg = /^[a-zA-Z0-9]{8}\-[a-zA-Z0-9]{4}\-4[a-zA-Z0-9]{3}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{12}$/gi
        createGuid().match(reg);
    });

    it("shouldn't generate characters other than numbers, letters or character '-'", function() {
        const reg = /^[^a-zA-z0-9\-]$/ig;
        createGuid().match(reg) === false;
    });

    it("shouldn't be longer than 36 characters", function() {
        createGuid().length < 36 === false;
    });
});

describe('sliceText', function() {
    it("shouldn't do anything if string is shorter than 91 char", function() {
        assert.equal(sliceText('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'),
        'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    });

    it("should slice string when it's longer than 91 characters and add '...' on the end of the string", function() {
        assert.equal(sliceText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise'),
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum&hellip;');
    });

});

//TODO harder one
describe('promisifyFunction', function() {
   // it("should return a promise", function(done) {});

    it('callback should be called', function(done) {
        function go(callback) {
            callback();
        }

        promisifyFunction(go)
            .then(() => done());
    });

    //TODO it("reject should be called if callback returns error", function(done) {});
});
