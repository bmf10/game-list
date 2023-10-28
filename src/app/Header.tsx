import Container from '@/components/Container'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <Container className="flex justify-between py-[17px]">
        <Image src="/tlab-logo.svg" width={40} height={40} alt="logo" />
        <div className="flex gap-3 items-center">
          <a href="#">
            <Image src="/youtube.svg" width={24} height={24} alt="youtube" />
          </a>
          <a href="#">
            <Image src="/whatsapp.svg" width={24} height={24} alt="whatsapp" />
          </a>
          <a href="#">
            <Image src="/twitter.svg" width={24} height={24} alt="twitter" />
          </a>
          <a href="#">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="instagram"
            />
          </a>
        </div>
      </Container>
    </header>
  )
}

export default Header
