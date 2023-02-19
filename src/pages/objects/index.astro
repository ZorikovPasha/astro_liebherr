import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { publicApi } from '../../api'
import BreadCrumbs from '../../components/common/BreadCrumbs'
import ObjectCard from '../../components/pages/objects/ObjectCard'
import { ConstructionType } from '../../types/dataTypes'
import { ROUTES } from '../../utils/const'

interface IObjectsProps {
  constructions: { constructions: ConstructionType[]; hasMore: boolean }
}

const Objects: NextPage<IObjectsProps> = ({ constructions }) => {
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: 'Главная' },
    { id: 2, link: '', text: 'Объекты' },
  ]

  const onLoadMore = () => {}

  return (
    <>
      <Head>
        <meta name="description" content="Объекты строительства компании Liebherr" />
        <title>Объекты Liebherr</title>
      </Head>

      <BreadCrumbs items={breadCrumbs} />
      <section className="objects">
        <div className="container">
          <h1 className="objects__title">Работа спецтехники от Компании Еврокран</h1>
          <div className="objects__items">
            {constructions?.constructions?.map(({ id, preview, title }) => (
              <ObjectCard id={id} key={id} title={title} preview={preview} />
            ))}
          </div>
          {constructions.hasMore && (
            <div className="objects__btn-wrapper">
              <button className="objects__btn" onClick={onLoadMore}>
                Загрузить ещё
              </button>
            </div>
          )}
        </div>
      </section>
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
    </>
  )
}

export default Objects

export const getStaticProps: GetStaticProps = async () => {
  const constructions = await publicApi.getConstructions()
  return { props: { constructions } }
}
