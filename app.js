function solution(str){
    var splitSol = str.split("");
    var reverseArr = splitSol.reverse();
    var joinArr = reverseArr.join("");
    return joinArr;
  }