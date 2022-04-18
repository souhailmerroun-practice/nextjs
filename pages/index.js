import Head from 'next/head'

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <div className='flex'>
        <h2 className='flex-auto bg-black'>first</h2>
        <h2 className='flex-auto bg-black'>third</h2>
      </div>
    </>
  )
}
