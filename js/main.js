// $(document).ready(function () {
//     let tabsItem = $('.tabs-item')

//     tabsItem.on ('click', function (event) {
//         event.preventDefault();
//         let activeContent = $(this).attr('href');
//         $('.visible').toggleClass('visible')
//         $(activeContent).toggleClass('visible')
//         $('.tabs-item-active').toggleClass('tabs-item-active')
//         $(this).toggleClass('tabs-item-active')
//     });
// })

document.addEventListener("DOMContentLoaded", function() {
    Fancybox.bind("[data-fancybox]", {
        //
      }) 
      
    const tabs = document.querySelectorAll(".tabs-item");
    console.log(tabs);
    tabs.forEach(tabsItem => {
        tabsItem.addEventListener('click', (event) => {
            event.preventDefault();
            const currentTab = document.querySelector('.tabs-item-active');
            const currentContent = document.querySelector('.tabs-content.visible');
            currentTab.classList.remove('tabs-item-active')
            currentContent.classList.remove('visible')


            const activeContent = event.target.dataset.tab;
            const content = document.getElementById(activeContent);
            event.target.classList.add('tabs-item-active');
            content.classList.add('visible')
        })
    });
})