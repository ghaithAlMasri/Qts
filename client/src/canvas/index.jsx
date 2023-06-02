/* eslint-disable react/no-unknown-property */
import {Canvas} from '@react-three/fiber'
import {Environment,Center} from '@react-three/drei'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'



const CanvasModel = () => {
  return (


    <Canvas
    shadows
    camera={{position: [0,0,0], fov:25}}
    gl = {{preserveDrawingBuffer:true}}
    className="w-full max-w-full h-full transition-all ease-in overflow-scroll"
    >

      <ambientLight intensity={0.3}/>
      <Environment preset='sunset'/>
      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>

    </Canvas>
  )
}

export default CanvasModel