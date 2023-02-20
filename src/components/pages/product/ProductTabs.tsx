import React from 'react'

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  const info = {
    liftingCapacity: { text: 'Максимальная грузоподъемность', value: 750 },
    arrowLength: { text: 'При вылете стрелы', value: 7 },
    mainArrowLength: { text: 'Главная стрела', value: 140 },
    maxHeight: { text: 'Максимальная высота подъема', value: 191 },
    maxRadius: { text: 'Максимальный вылет стрелы', value: 156 },
    speed: { text: 'Скорость передвижения', value: 1.65 },
    extension: { text: 'Решетчатый удлинитель', value: 14.105 },
  }

  const tabs = ['Описание', 'Характеристики', 'Документация']

  const handleTabClick = (param: number) => () => setActiveTab(param)

  return (
    <section className="tabs">
      <div className="container">
        <div className="tabs__toggle rel">
          <div className="tabs__toggle-box after">
            {tabs.map((t, idx) => (
              <span key={idx} className={`tabs__toggle-item ${idx === activeTab ? 'tabs__toggle-item--pressed rel after' : ''}`} onClick={handleTabClick(idx)}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="tabs__content rel">
          {activeTab === 0 && 
            <div className="tabs__content-item tabs__content-item--shown item-content">
              <h2 className="item-content__title">Аренда гусеничного крана Liebherr LR 1750</h2>
              <p className="item-content__text block-text__text">Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
              <p className="item-content__text block-text__text">
                Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или
                балластировочной тележкой.
              </p>
              <p className="item-content__text block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
              <p className="item-content__text block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.</p>

              <div className="item-content__images">
                <div className="item-content__img">
                  <img src="/images/depict-1.jpg" alt="" width="100%" height="100%" />
                </div>
                <div className="item-content__img">
                  <img src="/images/depict-2.jpg" alt="" width="100%" height="100%" />
                </div>
                <div className="item-content__img">
                  <img src="/images/depict-3.jpg" alt="" width="100%" height="100%" />
                </div>
              </div>
            </div>
          }
          {activeTab === 1 && 
            <div className="tabs__content-item">
              <ul className="product__info-list product-list">
                {Object.entries(info).map((arr) => 
                  <li className="product-list__item flex aic" key={arr[1].value}>
                    <p className="product-list__text">{arr[1].text}:</p>
                    <p className="product-list__text">{arr[1].value}</p>
                  </li>
                )}
              </ul>
            </div>
          }
          {activeTab === 2 && 
            <div className="tabs__content-item item-specs">
              <div className="item-specs__box flex jcsb">
                <div className="item-specs__item">
                  <div className="item-specs__images">
                    <img className="guarantee__item-img" src="/images/specifications/1.jpg" alt="Спецификация" width="100%" height="100%" />
                  </div>
                  <a className="item-specs__link" href="#">
                    скачать
                  </a>
                </div>
                <div className="item-specs__item">
                  <div className="item-specs__images">
                    <img src="/images/specifications/1.jpg" alt="Спецификация" width="100%" height="100%" />
                  </div>
                  <a className="item-specs__link" href="#">
                    скачать
                  </a>
                </div>
                <div className="item-specs__item">
                  <div className="item-specs__images">
                    <img src="/images/specifications/1.jpg" alt="Спецификация" width="100%" height="100%" />
                  </div>
                  <a className="item-specs__link" href="#">
                    скачать
                  </a>
                </div>
                <div className="item-specs__item">
                  <div className="item-specs__images">
                    <img src="/images/specifications/1.jpg" alt="Спецификация" width="100%" height="100%" />
                  </div>
                  <a className="item-specs__link" href="#">
                    скачать
                  </a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default ProductTabs
