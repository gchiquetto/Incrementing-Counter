const twitterCount = document.getElementById('twitter');
const youtubeCount = document.getElementById('youtube');
const facebookCount = document.getElementById('facebook');

setTimeout(counter, 2000);

function counter(){
    const twitterfollowers = +twitterCount.getAttribute('data-counter');
    const youtubefollowers = +youtubeCount.getAttribute('data-counter');
    const facebookfollowers = +facebookCount.getAttribute('data-counter');
    const maxNumber = Math.max(twitterfollowers, youtubefollowers, facebookfollowers);
    let counter =0;

    interval = setInterval(()=>{
        counter++;
        twitterCount.textContent = counter < twitterfollowers ? counter : twitterfollowers;
        youtubeCount.textContent = counter < youtubefollowers ? counter : youtubefollowers;
        facebookCount.textContent = counter < facebookfollowers ? counter : facebookfollowers;
    }, .01);

    counter >= maxNumber && clearInterval(interval);
}