import Container from '@/components/Container'

const Hero = () => {
  return (
    <section className="hero h-[540px] w-full relative">
      <div className="opacity-70 bg-gradient-to-l from-emerald-400 to-sky-800 absolute top-0 left-0 h-full w-full"></div>
      <Container
        parentClassName="h-full"
        className="relative z-10 flex flex-col justify-center items-center h-full gap-6"
      >
        <h1 className="text-center text-white text-[32px] font-bold">
          Pilih Game Favorite Kalian
        </h1>
        <p className="text-center text-white text-base font-normal leading-normal md:w-[366px]">
          Shortbread cookie tootsie roll sugar plum cheesecake pudding croissant
          apple pie. Lollipop macaroon lollipop croissant chocolate cake
          croissant fruitcake brownie jelly-o.
        </p>
        <button className="h-12 px-5 py-3 bg-sky-500 rounded-lg justify-center items-center gap-2.5 inline-flex text-white text-base font-semibold">
          Sign Up For Free Account
        </button>
      </Container>
    </section>
  )
}

export default Hero
