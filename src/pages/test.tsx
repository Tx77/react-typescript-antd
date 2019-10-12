import React, { useEffect, useState } from 'react';

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);

function Test() {
  return (
    <div>
      123
    </div>
  );
}

export default Test;