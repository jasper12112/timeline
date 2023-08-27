const f_q = "When I'm with you, all my pain would just <span class='gaze'>erase</span>.<br>Days left me thinking about you, leaving my mind like a <span class='gaze'>maze</span>.<br>Remebered you starring at me, having that lovely <span class='gaze'>gaze</span>.<br>By looking at you I found myself at full <span class='gaze'>amaze</span>.<br>Thats when I knew, I knew my heart had found its <span class='gaze'>place</span>"
const f_e = "Love is blinding...<br>But when Im with you,<br>I see that nothing else matters"
const f_r = "Your <span class='smile'>smile</span> that brightens up my day.<br>Your <span class='laugh'>laugh</span> that made me forget and <span class='smile'>smile</span>.<br>Your happines that made me <span class='laugh'>laugh</span>"
const f_w = "Before I knew you, I thought I knew love.<br>Your eyes, bright as day.<br>Smile as mesmerizing as the ocean.<br>That's when I knew..."
const f_t = "Your face never left my <span class='mind'>mind</span>.<br>Conversations that kept flowing in my <span class='mind'>mind</span>.<br>For you, you just never left my <span class='mind'>mind...</span>"

const quotes = [f_q, f_e, f_r, f_w, f_t];

let current_quote = 0;

const quote_element = document.getElementById("quote");

const initialize_quote = () => {
    quote_element.onclick = () => {
        console.log('test');
        setNewQuote();
    }
    quote_element.innerHTML = quotes[current_quote];
}

const setNewQuote = () => {
    current_quote = current_quote == quotes.length - 1 ? 0 : current_quote + 1;
    quote_element.innerHTML = quotes[current_quote];
}

initialize_quote();