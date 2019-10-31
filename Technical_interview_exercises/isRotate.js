/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
Ol eua juahrk znk yzxotm, eua'rr hk ghrk zu lotj gtuznkx yzxotm otyojk znk juahrkj yzxotm ayotm lgsorogx Yzxotm skznujy.

Juahrkj yzxotm: 'nkrru cuxrjnkrru cuxrj'
Ykgxin c/ot oz: '       uxrjnkrru c    '
*/

function isRotated(actual, rotated) {
  let rotating = '';

  //iterate over the rotated string
  for(let i = 0; i < rotated.length; i++) {
    //rotate by one char and compare to actual
    const firstChar = rotated[0]
    const rest = rotated.slice(1);
    rotated = rest + firstChar;
    if(rotated === actual){
      return true;
    }
  }
  //return boolean
  return false;
}

const input_1 = 'hello world';
const rotated_1 = 'orldhello w'
console.log(isRotated(input_1, rotated_1));//true

const input_2 = 'hello world';
const rotated_2 = 'orldhllo w'
console.log(isRotated(input_2, rotated_2));//false
