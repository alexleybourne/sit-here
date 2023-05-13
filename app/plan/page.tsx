import CSVUploader from '@/components/dashboard/csvuploader';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import Illustration from '@/public/images/hero-illustration.svg';
import Image from 'next/image';
import Link from 'next/link';
import LogoDisney from '@/public/images/logo-disney.svg';
import LogoFacebook from '@/public/images/logo-facebook.svg';
import LogoNike from '@/public/images/logo-nike.svg';
import LogoSamsung from '@/public/images/logo-samsung.svg';
import{ DownloadButton} from '@/components/dashboard/DownloadButton';

export const metadata = {
  title: 'Sit Here - Dashboard',
  description: 'Sit Here seating builder dashboard',
  icons: {
    icon: '/favicon/favicon-32x32.png',
  },
  openGraph: {
    title: 'Sit Here - Dashboard',
    description: 'Sit Here seating builder dashboard',
    url: 'https://sit-here.vercel.app/dashboard',
    siteName: 'Sit Here - Dashboard',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 628,
      },
    ],
    locale: 'en-AU',
    type: 'website',
  },
};

export default function Dashboard() {


  type ButtonProp = {
    text: string;
    svg: JSX.Element;
  }




const Button = ({text, svg}: ButtonProp): JSX.Element => <Link href="/dashboard"> <label className='h-fit flex items-center gap-1 justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white'>
{svg}
<span className='text-base leading-normal' >{text}</span>
</label>
</Link>


const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>

const GenerateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>


const BackButtonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>







  return (
    <>
      <Header hideButton solid title='Plan' />
      <div className='flex flex-col min-h-screen items-center justify-center pt-2'>
    
     <Image
      src="/floorplan.png"
      width={843}
      height={596}
      alt="Picture of the author"
    />
      <div className="flex gap-2"> 
      
      <Button text="" svg={BackButtonIcon()}/>
      <Button text="Generate Again" svg={GenerateIcon()} />
      <Button text="Share" svg={ShareIcon()}/>
      <DownloadButton />


        </div>   

      </div>
    </>
  );
}
