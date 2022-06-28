const twitterCount = document.getElementById('twitter');
const youtubeCount = document.getElementById('youtube');
const facebookCount = document.getElementById('facebook');

setTimeout(counter, 2000);

function counter(){
    const twitterfollowers = 20000;
    const youtubefollowers = 10000;
    const facebookfollowers = 7000;
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