const input = document.getElementById('button');
function addingEventListener(button) {
    input.addEventListener('click', clickAlert);
    function clickAlert() {
        alert('Click!');
    }
}
