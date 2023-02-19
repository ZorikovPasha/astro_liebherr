import { NextPage } from 'next'
import React from 'react'
import { useSelector } from 'react-redux'

import BreadCrumbs from '../../components/common/BreadCrumbs'
import CatalogAside from '../../components/pages/catalog/CatalogAside'
import CatalogCard from '../../components/pages/catalog/CatalogCard'
import CatalogTabs from '../../components/pages/catalog/CatalogTabs'
import { ContactsForm } from '../../components/common/ContactsForm'
import FilterControls from '../../components/pages/catalog/FilterControls'
import HelpRequestForm from '../../components/common/HelpRequestForm'
import Pagination from '../../components/pages/catalog/Pagination'
import { Error } from '../../components/common/Error'
import { AppEmpty } from '../../components/common/AppEmpty'
import { MachineryType } from '../../types/dataTypes'
import { ROUTES } from '../../utils/const'
import { selectProducts, selectProductsError } from '../../redux/selectors'
import Head from 'next/head'

interface ICatalogProps {
  items: MachineryType[]
}

const Catalog: NextPage<ICatalogProps> = () => {
  const items = useSelector(selectProducts)
  const [activeView, setActiveView] = React.useState<'grid' | 'list'>('grid')

  const AsideRef = React.useRef(null)

  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: 'Главная' },
    { id: 2, link: ROUTES.CATALOG, text: 'Каталог техники' },
  ]

  const query = React.useRef('')

  const isError = useSelector(selectProductsError)

  const onAsideOpen = React.useRef<null | (() => void)>(null)

  return (
    <>
      <Head>
        <meta name="description" content="Каталог строительной техники компании Liebherr" />
        <title>Каталог</title>
      </Head>

      <BreadCrumbs items={breadCrumbs} />
      <CatalogTabs />

      <div className="catalog-content">
        <div className="container">
          <div className="catalog-content__inner rel flex">
            <CatalogAside ref={AsideRef} query={query} onOpen={onAsideOpen} />
            <div className="catalog-content__body">
              <FilterControls activeView={activeView} setActiveView={setActiveView} onAsideOpen={onAsideOpen} />
              {isError ? (
                <Error />
              ) : items?.length ? (
                <div className={`catalog-content__items ${activeView === 'list' ? 'catalog-content__items--list' : ''}`}>
                  {items?.map(({ id, name, features, imgSrc }) => (
                    <CatalogCard id={id} key={id} name={name} liftingCapacity={features.liftingCapacity.value} arrowLength={features.arrowLength.value} imgSrc={imgSrc} />
                  ))}
                </div>
              ) : (
                <AppEmpty />
              )}
              <Pagination query={query} />
            </div>
          </div>
        </div>
      </div>

      <HelpRequestForm />
      <section className="block-text">
        <div className="container">
          <h2 className="block-text__title">Аренда автокранов LIEBHERR в Москве</h2>
          <p className="block-text__text">
            Аренда автокранов решает разные задачи. Благодаря большой грузоподъемности техника используется при установке и разборке башенных кранов, строительстве мостовых пролетов, монтаже дымовых труб самонесущей конструкции, выполнении
            аварийно-восстановительных работ в Москве.{' '}
          </p>
          <h2 className="block-text__title">Аренда спецтехники Liebherr </h2>
          <p className="block-text__text">
            Liebherr («Либхерр») — известная немецкая машиностроительная компания. Ее автокраны востребованы во всем мире благодаря своим уникальным возможностям. Основополагающие критерии их выбора — скорость и качество работы. Крупные строительные
            компании и частные лица предпочитают арендовать строительные краны «Либхерр». Их выбор обусловлен надежностью, высокой производительностью установок. Срок службы агрегатов исчисляется десятилетиями, на протяжении которых они сохраняют
            свои характеристики и не теряют качества.
          </p>
          <p className="block-text__text">На сегодняшний день мы реализовали сотни успешных проектов. Среди них:</p>
          <ul className="block-text__list">
            <li className="block-text__list-item rel after">Предоставление автокрана Liebherr LR 1750 и автотрейлеров из собственного парка компании «Казметрострой». Техника использовалась для демонтажа и перевозки проходческих щитов.</li>
            <li className="block-text__list-item rel after">Участие автокрана Liebherr LR 1750 и автотрейлеров в демонтаже проходческого щита на участке метрополитена от станции «Выхино» до «Косино-Ухтомской».</li>
            <li className="block-text__list-item rel after">
              Использование Liebherr LTM 1500 в качестве основной мощности для производства работ при возведении Лукомльской ГРЭС. В качестве арендатора выступала китайская машиностроительная инжиниринговая компания.
            </li>
            <li className="block-text__list-item rel after">Аренда низкорамных тралов для транспортировки спецтехники официального дилера ТМ в России, компании ООО «Либхерр-Русланд».</li>
            <li className="block-text__list-item rel after">Установка нового реактора гидрокрекинга на территории завода ОАО «Уфанефтехим».</li>
            <li className="block-text__list-item rel after">Демонтаж старых и монтаж новых чиллеров на крыше здания Mail.ru. Арендатор — строительный холдинг КМТ.</li>
            <li className="block-text__list-item rel after">Монтаж мостовых балок на головном участке автомобильной скоростной дороги Москва-Санкт-Петербург, произведенный с использованием кранов Liebherr.</li>
            <li className="block-text__list-item rel after">Транспортировка и установка проходческого щита из Протвино в Москву для возведения Бутовской линии метрополитена. Заказ выполнен компанией «Транстоннельстрой».</li>
          </ul>
          <p className="block-text__text">
            Условия аренды оговариваются индивидуально. География предоставления услуги — Москва, Санкт-Петербург, Екатеринбург, Нижний Новгород, Пермь, Воронеж, Челябинск, Краснодар, Ярославль, Самара, Уфа и другие города РФ.
          </p>
        </div>
      </section>

      <section className="contacts">
        <div className="container">
          <h2 className="contacts__title">Контакты</h2>
          <div className="contacts__inner flex jcsb">
            <div className="contacts__content">
              <a className="contacts__address rel after" href="#">
                г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул. Куликовская, 12{' '}
              </a>
              <div className="contacts__box flex jcsb">
                <div className="contacts__phones rel after">
                  <a className="contacts__phone" href="tel:+74999299666">
                    +7 (499)929-96-66
                  </a>
                  <a className="contacts__phone" href="tel:+79853645518">
                    +7 (985)364-55-18
                  </a>
                  <a className="contacts__phone" href="tel:+79852262030">
                    +7 (985)226-20-30
                  </a>
                </div>
                <div className="contacts__time">
                  <a className="contacts__mail rel after" href="mailto:evro-k@yandex.ru">
                    evro-k@yandex.ru
                  </a>
                  <p className="contacts__schedule rel after">10:00 - 17:00</p>
                </div>
              </div>
              <div className="contacts__requisite rel">
                <p className="contacts__sub">Реквизиты:</p>
                <p>ООО &quot;Компания Еврокран&quot; </p>
                <div className="contacts__requisite-box">
                  <p>ИНН:</p>
                  <p>7718999293</p>
                  <p>ОГРН:</p>
                  <p>5147746130593</p>
                </div>
              </div>
            </div>

            <ContactsForm />
          </div>
        </div>
      </section>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru"
          width="100%"
          height="548"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  )
}

export default Catalog
