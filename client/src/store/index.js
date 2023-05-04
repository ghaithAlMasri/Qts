import { proxy } from "valtio";


const state = proxy({
    intro: true,
    color: "",
    isLogoTexture: true,
    isFullPage: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
})

export default state