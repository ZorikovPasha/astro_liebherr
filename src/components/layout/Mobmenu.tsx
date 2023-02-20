import { ROUTES } from '../../utils/const'

interface IMobMenuProps {
  handleMobMennuCloseClick: React.MouseEventHandler<HTMLButtonElement | HTMLLIElement>
  isMobMenuOpen: boolean
  isMenuBodyOpened: boolean
}

const MobMenu: React.FC<IMobMenuProps> = ({ 
  handleMobMennuCloseClick, 
  isMobMenuOpen, 
  isMenuBodyOpened 
}) => {
  const menuItems = [
    { link: ROUTES.CATALOG, text: 'Каталог' },
    { link: ROUTES.OBJECTS, text: 'Услуги' },
    { link: ROUTES.ABOUT, text: 'О компании' },
    { link: ROUTES.OBJECTS, text: 'Объекты' },
    { link: ROUTES.CONTACTS, text: 'Цены' },
    { link: ROUTES.ARTICLES, text: 'Блог' },
    { link: ROUTES.CONTACTS, text: 'Контакты' },
  ]

  return isMobMenuOpen ? (
    <div className="mob-menu opened">
      <div className={`mob-menu__body ${isMenuBodyOpened ? 'opened' : ''}`}>
        <button 
          className="mob-menu__close" 
          onClick={handleMobMennuCloseClick}
        >
          <span></span>
          <span></span>
        </button>
        <ul className="mob-menu__list flex">
          {menuItems.map(({ link, text }) => 
            <li 
              className="mob-menu__list-item" 
              key={text} 
              onClick={handleMobMennuCloseClick}
            >
              <a 
                className="mob-menu__list-link rel"
                href={link}
              >
                {text}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  ) : null
}

export default MobMenu
