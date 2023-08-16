import type { ReactElement } from 'react'
import { Banner, TodaysDeal, TooltipButtons } from '@/components/Homepage'
import MainLayout from '@/components/layout/MainLayout'
import Head from 'next/head'
import type { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      {/* For SEO Purpose  */}
      <Head>
        <title>Nicho Shop</title>
        <meta name="Nicho Shop" content="Nicho Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NSLogo.svg" />
      </Head>

      {/* Main Components Start */}
      <Banner />
      <TodaysDeal />
      <TooltipButtons />
      {/* Main Components End */}
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default HomePage
