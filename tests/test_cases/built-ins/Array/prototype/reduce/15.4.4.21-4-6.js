// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.21-4-6
description: Array.prototype.reduce throws TypeError if callbackfn is string
includes: [runTestCase.js]
---*/

function testcase() {

  var arr = new Array(10);
  try {
    arr.reduce("abc");    
  }
  catch(e) {
    if(e instanceof TypeError)
      return true;  
  }

 }
runTestCase(testcase);
