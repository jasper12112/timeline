let innerslider = document.getElementById('inner-slider');
let title = document.getElementById('title');
let image_holder = document.getElementById('image-holder');
// background: linear-gradient(.25turn, #FF9B9B 0 20%, #D9D9D9 20% 100%);

function buttonclick(index)
{
    add_active(index);

    switch(index){
        case 1:
            image_holder.style.backgroundImage = "url(images/image1.jpg)";
            title.innerText = "July 2022";
            innerslider.style.width = "5%";
            break;
        case 2:
            image_holder.style.backgroundImage = "url(images/image2.jpg)";
            title.innerText = "August 2022";
            innerslider.style.width = "20%";
            break;
        case 3:
            image_holder.style.backgroundImage = "url(images/image3.jpg)";
            title.innerText = "September 2022";
            innerslider.style.width = "40%";
            break;
        case 4:
            image_holder.style.backgroundImage = "url(images/image4.jpg)";
            title.innerText = "October 2022";
            innerslider.style.width = "60%";
            break;
        case 5:
            image_holder.style.backgroundImage = "url(images/image5.jpg)";
            title.innerText = "November 2022";
            innerslider.style.width = "80%";
            break;
        case 6:
            image_holder.style.backgroundImage = "url(images/image6.jpg)";
            title.innerText = "December 2022";
            innerslider.style.width = "100.1%";
            break;
    }
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