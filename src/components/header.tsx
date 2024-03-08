import { Logo } from "@/logo";
import { ToggleTheme } from "./theme/toggletheme";
import { SidebarCart } from "./cart/sidebarcart";


export  function Header() {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-3" >
        <Logo />
        <ToggleTheme />
      </div>
      <div className="flex items-center gap-3">
        <SidebarCart />
      </div>
      
    </header>
  )
}
