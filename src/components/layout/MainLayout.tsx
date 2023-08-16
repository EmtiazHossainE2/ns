import FooterBottom from '@/components/Shared/Footer/FooterBottom'
import FooterTop from '@/components/Shared/Footer/FooterTop'
import HeaderMain from '@/components/Shared/Header/HeaderMain'
import HeaderTop from '@/components/Shared/Header/HeaderTop'
import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <HeaderTop />
      <HeaderMain />
      <main>{children}</main>
      <FooterTop />
      <FooterBottom />
    </>
  )
}

export default MainLayout
