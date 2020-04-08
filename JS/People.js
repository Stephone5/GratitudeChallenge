window.onclick = function(e)
    {   var id =  e.target.id;
       if (id === 'sent')
       { var txtbox = document.getElementById('example');
         var txt = txtbox.value;
         $( "#para" ).append( txt + '<br>');
         $( txtbox ).val('');
       }
    }
