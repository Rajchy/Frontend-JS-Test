var obj = [
    { "id": 4, "name": "abc" },
    { "id": 10, "name": "abc2" },
    { "id": 5, "name": "abc3" },
    { "id": 6, "name": "abc4" },
];
    

function sortByProperty(property){  
   return function(a,b){  
      if(a[property] > b[property])  
         return 1;  
      else if(a[property] < b[property])  
         return -1;  
  
      return 0;  
   }  
}

obj.sort(sortByProperty("id"));
for (var item in obj) {    
    console.log( obj[item].id);    
}    
 