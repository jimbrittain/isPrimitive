"use strict";
/**
 * @function isPrimitive
 * @param v {all}
 * @return Boolean
 * @description determine if passed param is a primitive value
 **/
var isPrimitive = function(v){
    var t = typeof v;
   return (v === undefined || v === null || (t !== 'object' && t !== 'function')); };

