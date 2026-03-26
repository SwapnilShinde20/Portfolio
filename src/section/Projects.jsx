import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants';
import { Canvas } from '@react-three/fiber';
import { Center ,OrbitControls} from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer.jsx';

const projectsLength = myProjects.length;

function Projects() {
  const [currentProjectIndex,setCurrentProjectIndex] = useState(0);
  const currentProject = myProjects[currentProjectIndex];
  const handleNavigation = (direction)=>{
    setCurrentProjectIndex((prevIndex) =>{
      if(direction === 'previous'){
        return prevIndex === 0 ? projectsLength -1 : prevIndex - 1
      }else{
        return prevIndex === projectsLength -1 ? 0 : prevIndex +1
      }
    })
  }
  return (
    <section id='work' className='c-space my-20'>
      <p className='head-text'>My Work</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl'/>
          </div>
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
          </div>
          <div className='text-white-600 flex flex-col gap-5 my-5'>
              <p className='text-white text-2xl animatedText font-semibold'>{currentProject.title}</p>
              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className='flex justify-between flex-wrap gap-5 items-center'>
              <div className='flex gap-3 items-center'>
                {
                  currentProject.tags.map((tag,index)=>(
                    <div key={index} className='tech-logo'>
                      <img src={tag.path} alt={tag.name} />
                    </div>
                  ))
                }
              </div>
              <a href={currentProject.href} className='flex gap-2 cursor-pointer items-center text-white-600' target='_blank' rel='noreferrer'>
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3'/>
              </a>
          </div>
          <div className='flex justify-between items-center mt-7'>
            <button onClick={()=> handleNavigation('previous')} className='arrow-btn'>
              <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4' />
            </button>
            <button className='arrow-btn' onClick={()=> handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4'/>
            </button>

          </div>
        </div>
        <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                <Canvas>
                  <ambientLight intensity={Math.PI}/>
                  <directionalLight position={[10,10,5]}/>
                  <Center>
                    <Suspense fallback={<CanvasLoader/>}>
                      <group scale={1.8} position={[0,-2.5,0]} rotation={[0,-0.1,0]}>
                        <DemoComputer texture={currentProject.texture}/>
                      </group>
                    </Suspense>
                  </Center>
                  <OrbitControls maxPolarAngle={Math.PI /2} enableZoom={false}/>
                </Canvas>
        </div>
      </div>

    </section>
  )
}

export default Projects
