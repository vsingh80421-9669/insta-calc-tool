const followersInput = document.getElementById('followers-input');
const likesInput = document.getElementById('likes-input');
const calcBtn = document.getElementById('calc-btn');
const resText = document.getElementById('res-text');
const healthText = document.getElementById('health-text');

calcBtn.addEventListener('click' ,function() {
   const followers = Number(followersInput.value);
   const like = Number(likesInput.value);

   if (followers <= 0) {
       alert("Bhai, sahi followers daalo!");
       return;
   }    

    const engagement = (like / followers) * 100;
        alert("Aapka Engagement Rate hai: " + engagement.toFixed(2) + "%");
    resText.innerText = engagement.toFixed(2) + "%";

   if (engagement < 3) {
      healthText.innerText = "Low";
   } else if (engagement <= 6) {
      healthText.innerText = "Good"; 
   } else {
      healthText.innerText = "Excellent";
   }
});
                         
