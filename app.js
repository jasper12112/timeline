let innerslider = document.getElementById('inner-slider');
let title = document.getElementById('title');
let image_holder = document.getElementById('image-holder');
// background: linear-gradient(.25turn, #FF9B9B 0 20%, #D9D9D9 20% 100%);

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