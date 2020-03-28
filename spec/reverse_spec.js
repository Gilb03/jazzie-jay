var reverse = require('../lib/reverse')

describe("#reverse", function (){
    it("reverses the given string", function(){
        expect(reverse("hello")).toEqual("olleh")
    })
})