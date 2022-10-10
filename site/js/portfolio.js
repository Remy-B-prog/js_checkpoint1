const avatarImg = document.querySelector('.avatarImg');

avatarImg.addEventListener("click", function(){
    avatarImg.style.backgroundImage = "site/image/avatar.svg";
});

const presentation = document.querySelector('.description pink-bg');

const button = document.createElement("button");
button.textContent = "change name";
presentation.appendChild(button);