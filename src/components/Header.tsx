import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-gray-950">
        <div className="mx-auto container px-4 py-6">
            <div className="flex justify-between items-center">

                <img src="/logo.svg" alt="" className="w-16"/>

                <nav className="flex px-4 gap-6">
                    <NavLink 
                        to='/'
                        className={({isActive}) =>
                        isActive ? 'text-orange-500 font-bold uppercase' : 'text-white font-bold uppercase'}
                    >Home
                    </NavLink>
                    <NavLink
                        to='/favorites'
                        className={({isActive}) =>
                        isActive ? 'text-orange-500 font-bold uppercase' : 'text-white font-bold uppercase'}  
                    >Favorites</NavLink>
                </nav>
            </div>

        </div>
      </div>
    </>
  )
}
