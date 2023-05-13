import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/hero-illustration.svg'
import LogoFacebook from '@/public/images/logo-facebook.svg'
import LogoNike from '@/public/images/logo-nike.svg'
import LogoSamsung from '@/public/images/logo-samsung.svg'
import LogoDisney from '@/public/images/logo-disney.svg'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import CSVUploader from '@/components/dashboard/csvuploader'

export const metadata = {
  title: 'Apply - FinTech',
  description: 'Page description',
}

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/6 bg-gray-200 p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Option 1
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Option 2
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Option 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-5/6 bg-gray-100 p-4">
        <h1 className="text-xl font-bold">Main Dashboard</h1>
        {/* Add your main dashboard content here */}
        <CSVUploader />
      </div>
    </div>
  )
}
