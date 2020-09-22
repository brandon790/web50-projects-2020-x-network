
document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector("#save_edit").addEventListener('click', function() {
        var x = document.getElementById('edited_content').value;
        alert(x);
    });

/*     function save_edit() {
        alert("yes");
        var x = document.getElementById("post_{{ item.id }}").value;
                var update_save = {
                    user = "{{ item.user }}",
                    content = x,
                    timestamp = "{{ item.timestamp }}",
                    likes = "{{ item.likes }}"};
                    update_save.save();
                } */

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
