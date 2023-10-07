import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="relative flex h-[70vh] lg:h-screen overflow-hidden w-full max-h-screen place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial
       before:from-white before:to-transparent before:blur-2xl before:content-[''] 
       after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 
       after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10
        after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="absolute top-1/2 left-1/2 -translate-y-1/2 z-10 -translate-x-1/2 w-full dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:text-white text-2xl lg:text-6xl text-center font-semibold">Rathina Boopathi Sundarraj</p>
        <Image 
        className='w-full h-full object-cover brightness-75'
        src={'https://portfolio-srb.s3.ap-south-1.amazonaws.com/me.jpg'} 
        alt={'image'}
        // layout='responsive'
        loading='lazy' 
        width='100' 
        height='100'/>
      </div>
    </main>
  )
}

