//toggling the new post div

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#all-posts').addEventListener('click', function() {                          
    document.querySelector('#all-posts-head').style.display = 'block';
    })
    document.querySelector('#following').addEventListener('click', function() {                          
        document.querySelector('#all-posts-head').style.display = 'none';
})});
