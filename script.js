// Your code goes here
document.getElementById('user-form').addEventListener('submit', fuction (e) {
    e.preventDefault();

    const userName = document.getElementById('user-input').value.trim();
    if (userName.toLocaleLowerCase() === 'enemy'){
        document.getElementById('computer-reponse').textContent = 'Please go away!!';
    } else{
        document.location.href = `/greeting.html?name=${encodeURIComponent(userName)}`;
    }

});









