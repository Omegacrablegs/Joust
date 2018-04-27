
//var t1 = document.getElementById("t1");
var array = [["Willy","Pro","40000"],
                       ["Cathal","Intermidate","39985"],
                       ["Veena","Pro","38657"],
                       ["Patrick","Beginner","37807"],
                       ["Satinder","Beginner","34665"],
                       ["Ryan","Pro","35764"],
                       ["Eoin","Beginner","27085"],
                       ["Sean","Intermidate","17385"],
                       ["Mark","Pro","16684"],
                       ["Lynn","Intermidate","2"]],
                 t1 = document.getElementById("t1");


      // rows

      for(var i = 1; i < t1.rows.length; i++){
        // cells
        for(var j = 0; j < t1.rows[i].cells.length; j++)
        {
            t1.rows[i].cells[j].innerHTML = array[i - 1][j];
        }
      }


         // Method 2

         for(var i = 0; i < array.length; i++){
             // create a new row
             var newRow = t1.insertRow(t1.length);
             for(var j = 0; j < array[i].length; j++)
             {
                 // create a new cell
                 var cell = newRow.insertCell(j);

                 // add value to the cell
                 cell.innerHTML = array[i-1][j];
             }
         }
