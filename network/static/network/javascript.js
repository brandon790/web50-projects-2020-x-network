
document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector("#save_edit").addEventListener('click', function() {
        var x = document.getElementById('edited_content').value;
        var y = document.getElementById('edited_content').parentElement.id.replace('post_','');
        console.log(y);
        fetch(`/spec_post/${y}`, {
            method: 'PATCH',
            headers : {
                "content_type" : "application/json"
            },
            body: JSON.stringify(
            )
          })
          .then(response => response.json())
          .then(result => {
              // Print result
              console.log(result);
          })
    });


    document.querySelector('#all-posts').addEventListener('click', function() { 
    document.querySelector('#profile').style.display = 'none'; 
    document.querySelector('#following').style.display = 'none';                        
    document.querySelector('#all-posts-head').style.display = 'block';
    
    })
    document.querySelector('#following').addEventListener('click', function() {                          
        document.querySelector('#all-posts-head').style.display = 'none';
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#following').style.display = 'block';

    })
    document.querySelector('#username').addEventListener('click', function() {                          
        document.querySelector('#all-posts-head').style.display = 'none';
        document.querySelector('#following').style.display = 'none';
        document.querySelector('#profile').style.display = 'block';

    })

    

});
