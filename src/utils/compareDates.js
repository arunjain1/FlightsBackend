 function compareDate(date1,date2){
   const d1 = new Date(date1);
   const d2 = new Date(date2);

   if(d1>d2){
     return false;
   }
   return true;

}

module.exports=compareDate;