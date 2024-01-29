function showMessage(response) {
    if (response === 'No') {
        const noButton = document.getElementById('no-button');
        const container = document.querySelector('.container');
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;
        noButton.style.position = 'absolute';
        const image = document.getElementsByClassName('image');
        image[0].src = "gun.gif";
        
        // Generate random coordinates within the visible container
        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
        
        //Apply new coordinates to the button
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
        
        const yesMessage = document.getElementById('peepee');
        yesMessage.textContent = "I knew you'd select no for a laugh you petty lil one. The no button is just for visuals only, keep trying 😉";
        const nameMessage = document.getElementById('name');
        nameMessage.style.display = "none";
        
    }
    if (response === 'Yes') {
        const nameMessage = document.getElementById('name');
        nameMessage.remove();
        const noButton = document.getElementById('no-button');
        noButton.remove();
        const yesMessage = document.getElementById('peepee');
        yesMessage.textContent = "LESGGOOOOOOOO see you on the 14th of February Janam <33";
        yesMessage.style.display = 'block';
        yesMessage.style.fontStyle = 'normal';
        const image = document.getElementsByClassName('image');
        image[0].src = 'dance.gif';
        const yesButton = document.getElementById("goob");
        goob.remove()
    }
}
