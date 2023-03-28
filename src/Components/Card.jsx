import bulbasaur from '../images/bulbasaur.png'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="pt-10">
      <div className="flex items-center p-5">
        <h2 className="text-3xl font-bold">Pokedex</h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-5 card rounded-[30px] w-full max-w-full max-h-full h-[800px] w-[500px] px-5 py-5 gap-4">
          <Link to='/profile' className="poke-card rounded-[20px] bg-[#4ad0b0] h-full w-full p-4 relative overflow-hidden z-[2]">
            <div className='flex justify-between'>
              <p className="text-white text-lg">Bulbasaur</p>
              <p className="text-white opacity-[0.7]">#002</p>
            </div>
            <div>
              <p className="text-white text-xs p-1 px-2 w-fit rounded-[20px] bg-[#4fd6b8] mb-2">grass</p>
              <p className="text-white text-xs p-1 px-2 w-fit rounded-[20px] bg-[#4fd6b8]">poison</p>
            </div>
            <img src={bulbasaur} alt="" className='absolute right-5 bottom-5 w-[60px] z-10' />
            <div className="pokeball-bg"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
