import React from 'react'
import Header from '../components/layout/Header'
import MobMenu from "../components/layout/Mobmenu"

const Menus: React.FC = () => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false)
  const [isMenuBodyOpened, setMenuBodyOpened] = React.useState(false)

  const handleMobMennuCloseClick = React.useCallback(() => {
    setMobMenuOpen(false)
    setMenuBodyOpened(false)
    document.documentElement.classList.remove('lock')
  }, [])

  const handleMobMennuButtonClick = React.useCallback(() => {
    setMobMenuOpen(true)
    document.documentElement.classList.add('lock')
    setTimeout(() => setMenuBodyOpened(true), 200)
  }, [])

  return (
    <>
      <Header 
        handleMobMennuButtonClick={handleMobMennuButtonClick} 
      />
      <MobMenu 
        handleMobMennuCloseClick={handleMobMennuCloseClick} 
        isMobMenuOpen={isMobMenuOpen} 
        isMenuBodyOpened={isMenuBodyOpened} 
      />
    </>
  )
}

export default Menus
