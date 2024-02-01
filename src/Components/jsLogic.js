import imageComingSoon from '../images/imageComingSoon.jpg'


export function imageNotFoundHandler(e){
    e.currentTarget.setAttribute('src', imageComingSoon)
}