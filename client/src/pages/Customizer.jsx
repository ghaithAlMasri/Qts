import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  FilePicker,
  Tabs,
  CustomButton,
} from "../components";
import { useSnapshot } from "valtio";

const Customizer = () => {


const snap = useSnapshot(state)
const [prompt, setPrompt] = useState('')
const [file, setFile] = useState('')
const [generatingImg, setGeneratingImg] = useState(false)
const [activeEditorTab, setActiveEditorTab] = useState('')
const [activeFilterTab, setActiveFilterTab] = useState({logo: true, stylishShirt: false})



const generateTabContent = () => {
  const theTab = {
    "aipicker" : <AIPicker/>,
    "colorpicker" : <ColorPicker/>,
    "filepicker" : <FilePicker
    file = {file}
    setFile = {setFile}
    />
  }


  const handleDecals = (type, result) => {

    const decalType = DecalTypes[type]


    state[decalType.stateProperty] = result


    if(!activeFilterTab[decalType.FilterTab]) handleActiveFilterTab(decalType.filterTab)



  }


 const handleActiveFilterTab = (tabName) => {
  switch (tabName) {
    case 'logoShirt':
      state.isLogoTexture = !activeFilterTab[tabName]
      
      break;
  
    default:
      break;
  }
 }


  const readFile = (type) => {
    reader(file)
    .then((result)=>{
      handleDecals(type,result)
      setActiveEditorTab("")


    })
  }

  return theTab[activeEditorTab] || false
}


  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div key="custom"
        className="absolute top-0 left-0 z-10"
        {...slideAnimation("left")}>
          <div className="flex items-center min-h-screen">
            <div className="editortabs-container tabs">
            {EditorTabs.map((tab)=>(
            
            
            <Tabs
            key={tab.name}
            tab={tab}
            handleClick = {()=>{activeEditorTab !== tab.name ? setActiveEditorTab(tab.name) : setActiveEditorTab("")}}
            />
            
            
            ))}

            {generateTabContent()}
            </div>
          </div>

        </motion.div>
        <motion.div className="absolute z-10 top-5 right-5"
        {...fadeAnimation}
        >
          <CustomButton
          type="filled"
          title="Go Back"
          handleClick={()=>{state.intro = true 
            setActiveEditorTab('')}}
          customStyles={'w-fit px-4 py-2.5 font-bold text-sm'}/>
        </motion.div>

        <motion.div className="filtertabs-container"
        {...slideAnimation("up")}>
           {FilterTabs.map((tab)=>(
            
            
            <Tabs
            key={tab.name}
            tab={tab}
            isFilterTab
            isActiveTab = ""
            handleClick = {()=>{}}
            />
            
            
            ))}

        </motion.div>
        </>
      )}
    </AnimatePresence>
    )



};
export default Customizer;
