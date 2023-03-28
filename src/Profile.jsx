import React from 'react'
import { useState } from 'react';
import bulbasaur from './images/bulbasaur.png'

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className='p-5 pt-10 bg-[#4ad0b0] h-[50vh] z-[1] overflow-hidden'>
        <div className='flex justify-between'>
          <h2 className='text-white text-[42px] font-bold pt-10'>Bulbasaur</h2>
        </div>
        <div className='flex flex-ros justify-between'>
          <div className='flex gap-3'>
            <p className="text-white text-xlg p-1 px-2 w-fit px-5 rounded-[20px] bg-[#4fd6b8]">Grass</p>
            <p className="text-white text-xlg p-1 px-2 w-fit px-5 rounded-[20px] bg-[#4fd6b8]">Poison</p>
          </div>
          <p className='text-white opacity=[.7] font-bold'>#002</p>
        </div>
        <div className='w-full h-full flex relative'>
          <img src={bulbasaur} alt="" className='w-[40%] absolute bottom-[8.5rem] right-[30%] z-10' />
          <div className='pokeball-bg-profile z-[2] relative'><div className="circle z-[20]"></div></div>
        </div>
      </div>
      <div className='bg-white rounded-[40px] mt-[-50px] z-[5] p-7 pt-20'>
        <ul className="flex flex-row justify-between items-center pb-5">
          <li className={`text-black font-bold pb-2 cursor-pointer ${activeTab === 0 ? 'c-border-bottom opacity-[.7]' : 'opacity-[0.3]'}`} onClick={() => setActiveTab(0)}>About</li>
          <li className={`text-black font-bold pb-2 cursor-pointer ${activeTab === 1 ? 'c-border-bottom opacity-[.7]' : 'opacity-[0.3]'}`} onClick={() => setActiveTab(1)}>Base Stats</li>
          <li className={`text-black font-bold pb-2 cursor-pointer ${activeTab === 2 ? 'c-border-bottom opacity-[.7]' : 'opacity-[0.3]'}`} onClick={() => setActiveTab(2)}>Evolution</li>
          <li className={`text-black font-bold pb-2 cursor-pointer ${activeTab === 3 ? 'c-border-bottom opacity-[.7]' : 'opacity-[0.3]'}`} onClick={() => setActiveTab(3)}>Moves</li>
        </ul>
        <div>
          {activeTab === 0 && (
            <>
              <div className="species flex gap-10 mb-3">
                <p className='text-black opacity-[0.5]'>Species</p>
                <p className='text-black'>Seed</p>
              </div>
              <div className="species flex gap-10 mb-3">
                <p className='text-black opacity-[0.5]'>Height</p>
                <p className='text-black'>2`3.6"(0.70 cm)</p>
              </div>
              <div className="species flex gap-10 mb-3">
                <p className='text-black opacity-[0.5]'>Weight</p>
                <p className='text-black'>15.2 lbs(6.9 kg)</p>
              </div>
              <div className="species flex gap-10 mb-3">
                <p className='text-black opacity-[0.5]'>Abilities</p>
                <p className='text-black'>Overgrow, Chlorophyl</p>
              </div>
              <h2 className='font-bold text-black my-5'>Breading</h2>
              <div className="species flex gap-10 mb-3">
                <p className='text-black opacity-[0.5]'>Gender</p>
                <p className='text-black'>87.5% 12.5%</p>
              </div>
              <div className="species flex gap-10 mb-3">
                <p className='text-black opacity-[0.5]'>Egg Groups</p>
                <p className='text-black'>Monster</p>
              </div>
              <div className="species flex gap-10 mb-3">
                <p className='text-black opacity-[0.5]'>Egg Cycle</p>
                <p className='text-black'>Grass</p>
              </div>
            </>
          )}
          {activeTab === 1 && (
            <div className='flex w-full gap-3'>
              <div className='w-[20%] pr-5'>
                <div className="species flex items-center gap-10 mb-3">
                  <p className='text-black opacity-[0.5]'>HP</p>
                </div>
                <div className="species flex items-center gap-10 mb-3">
                  <p className='text-black opacity-[0.5]'>ATTACK</p>
                </div>
                <div className="species flex items-center gap-10 mb-3">
                  <p className='text-black opacity-[0.5]'>DEFENSE</p>
                </div>
                <div className="species flex items-center gap-10 mb-3">
                  <p className='text-black opacity-[0.5]'>Sp.Atk</p>
                </div>
                <div className="species flex items-center gap-10 mb-3">
                  <p className='text-black opacity-[0.5]'>Sp.Def</p>
                </div>
                <div className="species flex items-center gap-10 mb-3">
                  <p className='text-black opacity-[0.5]'>Speed</p>
                </div>
                <div className="species flex items-center gap-10 mb-3">
                  <p className='text-black opacity-[0.5]'>Total</p>
                </div>
              </div>
              <div className='w-[75%] flex flex-col gap-3'>
                <div className='flex items-center gap-5'>
                  <p className='text-black pr-5'>45</p>
                  <div className='w-full h-[5px] rounded-md overflow-hidden bg-neutral-100'>
                    <div className='w-[45%] h-[5px] py-[2px] bg-error'></div>
                  </div>
                </div>
                <div className='flex items-center gap-5'>
                  <p className='text-black pr-5'>60</p>
                  <div className='w-full rounded-md overflow-hidden bg-neutral-100'>
                    <div className='w-[60%] h-[5px] py-[2px] bg-success'></div>
                  </div>
                </div>
                <div className='flex items-center gap-5'>
                  <p className='text-black pr-5'>48</p>
                  <div className='w-full rounded-md overflow-hidden bg-neutral-100'>
                    <div className='w-[48%] h-[5px] py-[2px] bg-error'></div>
                  </div>
                </div>
                <div className='flex items-center gap-5'>
                  <p className='text-black pr-5'>65</p>
                  <div className='w-full rounded-md overflow-hidden bg-neutral-100'>
                    <div className='w-[65%] h-[5px] py-[2px] bg-success'></div>
                  </div>
                </div>
                <div className='flex items-center gap-5'>
                  <p className='text-black pr-5'>65</p>
                  <div className='w-full rounded-md overflow-hidden bg-neutral-100'>
                    <div className='w-[65%] h-[5px] py-[2px] bg-success'></div>
                  </div>
                </div>
                <div className='flex items-center gap-5'>
                  <p className='text-black pr-5'>45</p>
                  <div className='w-full rounded-md overflow-hidden bg-neutral-100'>
                    <div className='w-[45%] h-[5px] py-[2px] bg-error'></div>
                  </div>
                </div>
                <div className='flex items-center gap-5'>
                  <p className='text-black pr-5'>317</p>
                  <div className='w-full rounded-md overflow-hidden bg-neutral-100'>
                    <div className='w-[47%] h-[5px] py-[2px] bg-error'></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <>
              Evolution
            </>
          )}
          {activeTab === 3 && (
            <>
              Moves
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile