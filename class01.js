/**
 * 1
 * 判断一组字符串是否为回文
 * 是 返回true，不是 返回false
 */
// {
//     function testReverse(str) {
//         let newStr = str.split('').reverse().join('');
//         return newStr === str;
//     }
//     let str = 'abcdcba';
//     console.log(testReverse(str));
// }

/**
 * 2
 * 去重
 */
// {
//   function unique(arr) {  
//         let hashTable = {};
//         let data = [];debugger
//         for(let i=0,l=arr.length;i<l;i++) {
//         if(!hashTable[arr[i]]) {
//             hashTable[arr[i]] = true;
//             data.push(arr[i]);
//         }
//         }
//         return data
//     }
//     let arr=[0,2,4,6,8,4,5,0];
//     console.log(unique(arr));
// }
    
/**
 * 3
 * 找出出现次数最多的字符
 */
// {
//   function findMaxDuplicateChar(str){
//     if(str.length==1){
//       return str;
//     }
//     let tempObj = {};
//     for(let i=0;i<str.length;i++){
//       if(!tempObj[str.charAt(i)]){
//         tempObj[str.charAt(i)] = 1;
//       }else{
//         tempObj[str.charAt(i)] += 1;
//       }
//     }

//     let maxChar = '';
//     let maxValue = 1;
//     for(x in tempObj){
//       if(tempObj[x]>maxValue){
//         maxValue = tempObj[x];
//         maxChar = x;
//       }
//     }
//     return maxChar;
//   }

//   let dupStr = '112235487651231111';
//   console.log(findMaxDuplicateChar(dupStr));
// }

/**
 * 4
 * 数组冒泡排序-从小到大
 */
// {
//   function bubbleSotr(arr){
//     let tempVal = '';
//     for(let i=0;i<arr.length-1;i++){
//       for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//           tempVal = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tempVal;
//         }
//       }
//     }
//     return arr;
//   }

//   let randomArr = [2,4,9,7,3,1,6,5,8,5];
//   console.log(bubbleSotr(randomArr));
// }
