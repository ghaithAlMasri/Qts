import { proxy } from "valtio";






const myColors = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) }


const state = proxy({
    intro: true,
    color: `rgba(${myColors.red},${myColors.green},${myColors.blue},1)`,
    isLogoTexture: true,
    isFullPage: false,
    logoDecal: './logo.png',
    fullDecal: './threejs.png',
})

export default state
