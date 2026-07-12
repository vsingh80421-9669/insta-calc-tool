const followersInput = document.getElementById('followers-input');
const likesInput = document.getElementById('likes-input');
const calcBtn = document.getElementById('calc-btn');

calcBtn.addEventListener('click' ,function() {
   const followers = Number(followersInput.value);
   const like = Number(likesInput.value);

   if (followers <= 0) {
       alert("Bhai, sahi followers daalo!");
       return;
   }    

    const engagement = (like / followers) * 100;
        alert("Aapka Engagement Rate hai: " + engagement + "%");
    // bhai sahi likes and followers daalo!
});
                         
