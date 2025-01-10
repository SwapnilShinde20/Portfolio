import React, { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { calculateSizes } from '../constants/index.js';

import { useMediaQuery } from 'react-responsive';
// import {Leva, useControls} from 'leva'
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Rings from '../components/Rings.jsx';
import Cube from '../components/Cube.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const x = useControls('HackerRoom',{
  //   positionX:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   positionY:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   positionZ:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },  
  //   rotationX:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationY:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   rotationZ:{
  //     value:0,
  //     min:-10,
  //     max:10
  //   },
  //   scale:{
  //     value:0.02,
  //     min:-10,
  //     max:10
  //   }
  // })
  return (
    <section className='min-h-screen w-full relative flex flex-col'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl font-medium text-center font-generalsans text-2xl text-white'>Hi, I am Swapnil <span className='waving-hand'>👋</span></p>
        <p className='hero_tag text-gray_gradient'>Building products & brands</p>
      </div>
      <div className='w-full h-full absolute inset-0'>
          {/* <Leva/> */}
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader/>}>
          <perspectiveCamera makeDefault position={[0,0,30]} />
          <HeroCamera isMobile={isMobile}>
          <HackerRoom 
          rotation={[-0.01,-Math.PI,0]} 
          scale={sizes.deskScale}
          position={sizes.deskPosition}
          // scale={x.scale}
          // position={[x.positionX,x.positionY,x.positionZ]}
          // rotation={[x.rotationX,x.rotationY,x.rotationZ]}
           />
          </HeroCamera>
           <group>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <Rings position={sizes.ringPosition} />
            <Cube position={sizes.cubePosition} />
           </group>

          <ambientLight intensity={1}/>
          <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href="#contact" className='w-fit'>
        <Button isBeam name="Let's work together" containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section> 
  )
}

export default Hero
 