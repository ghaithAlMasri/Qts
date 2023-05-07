import { proxy } from "valtio";


const state = proxy({
    intro: true,
    color: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
    isLogoTexture: true,
    isFullPage: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
})

export default state