let innerslider = document.getElementById('inner-slider');
let title = document.getElementById('title');
let image_holder = document.getElementById('image-holder');
// background: linear-gradient(.25turn, #FF9B9B 0 20%, #D9D9D9 20% 100%);

const t_q = "Her gaze"
const t_e = "Blinding love"
const t_r = "Its you"
const t_w = "What is love"
const t_t = "Eternal way"
const t_y = "She is everything"

const f_q = "When I'm with you, all my pain would just <span class='gaze'>erase</span>.<br>Days left me thinking about you, leaving my mind like a <span class='gaze'>maze</span>.<br>Remebered you starring at me, having that lovely <span class='gaze'>gaze</span>.<br>The moment I knew I would walk for you through all the <span class='gaze'>flames</span>.<br>Thats when I knew, I knew my heart had found its <span class='gaze'>place</span>"
const f_e = "They say that love is <span class='seeing'>blinding</span>...<br>But the moment I met you,<br>I <span class='seeing'>saw</span> that nothing else matters"
const f_r = "Your <span class='smile'>smile</span> that made adore<br>Your <span class='laugh'>laugh</span> that made me forget and <span class='smile'>smile</span><br>Your <span class='happines'>happines</span> that made me <span class='laugh'>laugh</span><br>Our time together, that gave me <span class='happines'>happines</span>"
const f_w = "Before I knew you, I thought I knew love.<br>Your eyes, bright as day.<br>Smile as mesmerizing as the ocean.<br>That's when I knew..."
const f_t = "For when all seemed dark, her eyes shined bright<br>When it seemed like there was no way, you were my light<br>For even death can't stop us, I know we will reunite"
const f_y = "You are the star that guides me through night,<br>You are the light that brightens my day,<br>You are the path leads my way"

const f_t_old = "Your face never left my <span class='mind'>mind</span>.<br>Conversations that kept flowing in my <span class='mind'>mind</span>.<br>For you, you just never left my <span class='mind'>mind...</span>"

const quotes_title = [t_q, t_y, t_r, t_w, t_t, t_e];
const quotes = [f_q, f_y, f_r, f_w, f_t, f_e];

let current_quote = 0;
const quote_element = document.getElementById("quote");
const quote_title_element = document.getElementById("quote-title");

function buttonclick(index)
{
    add_active(index);
    switch(index){
        case 1:
            hidden(1);
            title.innerText = "July 2022";
            innerslider.style.width = "5%";
            break;
        case 2:
            hidden(2);
            title.innerText = "August 2022";
            innerslider.style.width = "20%";
            break;
        case 3:
            hidden(3);
            title.innerText = "September 2022";
            innerslider.style.width = "40%";
            break;
        case 4:
            hidden(4);
            title.innerText = "October 2022";
            innerslider.style.width = "60%";
            break;
        case 5:
            hidden(5);
            title.innerText = "November 2022";
            innerslider.style.width = "80%";
            break;
        case 6:
            hidden(6);
            title.innerText = "December 2022";
            innerslider.style.width = "100.1%";
            break;
    }
    setNewQuote(index - 1);
}

function hidden(index)
{
    for(let i = 1; i <= 6; i++)
    {
        let img = document.getElementById('image-holder' + i);
        if(!img.classList.contains('hidden'))
        {
            img.classList.add('hidden');
        }
    }

    let img = document.getElementById('image-holder' + index);
    img.classList.remove('hidden');
}

function add_active(index)
{
    for(let i = 1; i <= 6; i++)
    {
        let button = document.getElementById('button-' + i);
        button.classList.remove('active');
    }

    for(let i = 1; i <= index; i++)
    {
        let button = document.getElementById('button-' + i);
        button.classList.add('active');
    }
}

const initialize_quote = () => {
    // quote_element.onclick = () => {
    //     setNewQuote();
    // }
    quote_element.innerHTML = quotes[current_quote];
    quote_title_element.innerHTML = "** " + quotes_title[current_quote] + " **";
}

const setNewQuote = (index) => {
    current_quote = index > quotes.length ? quotes.length : index;
    quote_element.innerHTML = quotes[index];
    quote_title_element.innerHTML = "** " + quotes_title[index] + " **";
}

initialize_quote();