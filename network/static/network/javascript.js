
document.addEventListener('DOMContentLoaded', function() {
    
    docuement.querySelector('#edit_post').onclick=document.getElementById("post_{{ item.id }}").innerHTML = "Hello JavaScript!";

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
