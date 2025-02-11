import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Nav from "./Nav"
import ContentTab from "./ContentTab"

export default function Main(){
    return(
        <div className="drawer w-screen">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

  <div className="navbar px-12 py-4 border-b border-zinc-700 bg-base-100">
  <div className="flex-1 gap-4">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><FontAwesomeIcon icon={faBars} /></label>
    <a className="btn btn-ghost text-xl">GENCON</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    <ContentTab/>
  </div>
  <Nav className="drawer-side"/>
</div>
    )
}