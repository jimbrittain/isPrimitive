"use strict";
var __imns = function(){ return window; }
describe("isPrimitive Test Suite", function(){
    adr = __imns();
    var obj = {}, arr = [];
    it("isPrimitive is a function", function(){ expect(typeof adr.isPrimitive === 'function').toBe(true); });
    it("isPrimitive: {Number} (float) = true", function(){ expect(adr.isPrimitive(1.2345)).toBe(true); });
    it("isPrimitive: {Number} (int) = true", function(){ expect(adr.isPrimitive(1)).toBe(true); });
    it("isPrimitive: {Number} -(float) = true", function(){ expect(adr.isPrimitive(-1.2345)).toBe(true); });
    it("isPrimitive: {Number} -(int) = true", function(){ expect(adr.isPrimitive(-1)).toBe(true); });
    it("isPrimitive: null = true", function(){ expect(adr.isPrimitive(null)).toBe(true); });
    it("isPrimitive: {Number} 0 = true", function(){ expect(adr.isPrimitive(0)).toBe(true); });
    it("isPrimitive: {String} = true", function(){ expect(adr.isPrimitive('zero')).toBe(true); });
    it("isPrimitive: {Boolean} = true", function(){ expect(adr.isPrimitive(false)).toBe(true); });
    it("isPrimitive: {Object} = false", function(){ expect(adr.isPrimitive(obj)).toBe(false); });
    it("isPrimitive: {Array} = false", function(){ expect(adr.isPrimitive(arr)).toBe(false); });
    it("isPrimitive: {Function} = false", function(){ expect(adr.isPrimitive(function(){})).toBe(false); });
    it("isPrimitive: NaN = true", function(){ 
        var n = Math.sqrt(-1);
        expect(adr.isPrimitive(n)).toBe(true); });
    it("isPrimitive: undefined = false", function(){ expect(adr.isPrimitive(undefined)).toBe(true); });
});

