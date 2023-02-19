import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { publicApi } from '../../api'
import BreadCrumbs from '../../components/common/BreadCrumbs'
import HelpRequestForm from '../../components/common/HelpRequestForm'
import ProductTabs from '../../components/pages/product/ProductTabs'
import ProductView from '../../components/pages/product/ProductView'
import SimilarOnesSlider from '../../components/pages/product/SimilarOnesSlider'
import { MachineryType } from '../../types/dataTypes'
import { ROUTES } from '../../utils/const'

interface IProductProps {
  machinery: MachineryType
  similarOnes: MachineryType[]
}

const Product: NextPage<IProductProps> = ({ machinery, similarOnes }) => {
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: 'Главная' },
    { id: 2, link: ROUTES.CATALOG, text: 'Каталог техники' },
    { id: 3, link: '', text: machinery.name ?? 'Страница товара' },
  ]

  return (
    <>
      <Head>
        <meta name="description" content="Строительная компания Liebherr" />
        <title>{machinery.name}</title>
      </Head>

      <BreadCrumbs items={breadCrumbs} />
      <ProductView info={machinery} />

      <ProductTabs />

      <section className="product-text block-text">
        <div className="container">
          <h2 className="block-text__title">Заголовок</h2>
          <p className="block-text__text">Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
          <p className="block-text__text">
            Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или
            балластировочной тележкой.
          </p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.</p>
          <p className="block-text__text">Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.</p>
          <p className="block-text__text">
            Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или
            балластировочной тележкой.
          </p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">
            Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.Гусеничный кран LR 1750 находит свое применение в
            строительстве электростанций, нефтеперерабатывающих заводов, на строительных площадках мостов и при монтаже ветросиловых установок.
          </p>
          <p className="block-text__text">
            Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или
            балластировочной тележкой.
          </p>
          <p className="block-text__text">Компактные габариты компонентов подъемного крана и их умеренный индивидуальный вес позволяют обеспечить экономичную транспортировку этого подъемного крана к строительной площадке.</p>
          <p className="block-text__text">Этот 750-тонный кран может также использоваться с выдвижными опорами, имеющими опорную базу 13 x 13 м. Результирующая грузоподъемность в этом случае может быть увеличена до 370 %.</p>
        </div>
      </section>

      <HelpRequestForm />

      <SimilarOnesSlider items={similarOnes} />
    </>
  )
}

export default Product

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { machinery, similarOnes } = await publicApi.getSingleMachinery(Number(query.id))

  return {
    props: { machinery, similarOnes },
  }
}
