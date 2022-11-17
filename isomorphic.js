const isIsomorphic = () => {
   if (str1.length !== str2.length) {
      return false;
   };
   for (let i = 0;
   i < str1.length; i++) {
      const a = str1.indexOf(str1[i]);
      const b = str2.indexOf(str2[i]);
      if (str2[a] !== str2[i] || str1[b] !== str1[i]) {
         return false;
      };
   };
   return true;
}
const str1 = 'ab';
const str2 = 'aa';

console.log(isIsomorphic( str1, str2 ));