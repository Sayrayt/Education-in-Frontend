function Avatar() {
    return (
        <img src={defaults.src} alt={defaults.alt} className={defaults.className} width="150" height="150"/>
    )
}

const defaults = {
    src: 'https://th.bing.com/th/id/OIG.KJsjU7pXyVqSnfRod6vF?pid=ImgGn',
    alt: 'Avatar',
    className: 'Avatar'
}

export default Avatar;