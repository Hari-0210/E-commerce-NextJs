import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import storeCheck from '@/actions/get-store'


const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default async function StoreLayout({children, params}: any) {
    const isStore = await storeCheck(params.store);    
    if (isStore === false) {
        return null
    }
    
    return (
      <div className={font.className}>
        <Navbar store={params?.store} />
        {children}
        <Footer/>
      </div>
    
  )
}
