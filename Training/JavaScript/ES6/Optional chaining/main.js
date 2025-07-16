    var obj = {
      name : 'Huy',
      cat1:{
         name : 'Huy1',
         cat2  :{
           name : 'Huy2',
   
           cat3 :
           {
             name : 'Huy 3'
           }
         }
      }
    }

    if(obj?.cat1?.cat2?.cat3)
    {
        console.log(obj.cat1.cat2.cat3.name);
    }