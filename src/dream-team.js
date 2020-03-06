module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let str='';
  members.forEach(element => {
    if(typeof(element)=='string')
    {let j=0;
      while(element[j]==' ')
      j++;
      str += element[j];
    }
  });
  return str.toUpperCase().split('').sort().join('');
};