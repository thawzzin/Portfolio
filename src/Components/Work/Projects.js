import dota2 from '../../Assets/Video/Dota2.mp4'
import shopit from '../../Assets/Video/shopit.mp4'
import filmverse from '../../Assets/Video/Filmverse.mp4'
import juggernaut from '../../Assets/Image/juggernaut.png'
import shoppingcart from '../../Assets/Image/Shoppingcart.png'
import film from '../../Assets/Image/film.png'

export const projects = [
    {
        title: 'Dota 2',
        description: 'A website for Dota 2, the best and most exciting moba game!, using opendota api. Intended to learn more about dota2 and know some details. You can go take a look for hero details and lores and details of your favourite pro team if you interested.',
        video: dota2,
        url: 'https://zett1e.github.io/Dota2-Landing-Page/',
        githubUrl: 'https://github.com/Zett1e/Dota2-Landing-Page',
        img: juggernaut
    },
    {
        title: 'Shopit',
        description: 'A responsive e-commerce shopping website with dummyjson api. Developed to enhance my skill in developing online stores and e-commerce platforms.',
        video: shopit,
        url: 'https://zett1e.github.io/shopit',
        githubUrl: 'https://github.com/Zett1e/shopit',
        img: shoppingcart
    },
    {
        title: 'Filmverse',
        description: 'A movie project with the movie database api. Wanna know what are popular now? Wanna know details of your favourite movie? Dont know what to watch? Wanna find and watch trailers? Just go there take a look.',
        video: filmverse,
        url: 'https://zett1e.github.io/Filmverse/',
        githubUrl: 'https://github.com/Zett1e/Filmverse',
        img: film
    }
]