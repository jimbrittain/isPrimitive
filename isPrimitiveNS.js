"use strict";
/* global window, IMDebugger, $, __imns */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isPrimitive' in adr)){
    /**
     * @function isPrimitive
     * @param v {all}
     * @return Boolean
     * @requires __imns
     * @description determine if passed param is a primitive value
     **/
    adr.isPrimitive = function(v){
        var t = typeof v;
       return (v === undefined || v === null || (t !== 'object' && t !== 'function')); };
}
