import '../styles/index.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from 'components/navbar';
import "styles/app.css"

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <div className="bg-gray-800 text-white flex">
      <noscript>Please enable Javascript to view this page</noscript>
      <Navbar />
      <div className='mt-20 y
      rounded-lg p-12 w-full'>
        <div className="flex-no-shrink mb-8">

        <img style={{minWidth: "4rem"}} className='h-16 w-16 lg:h-24 lg:w-24 rounded-full mx-auto lg:mx-0 lg:mr-6'
          src='/static/images/banana.jpg'
          />
        <div className='text-center lg:text-left lg:flex-auto lg:flex-shrink-0'>
          <h2 className='text-lg lg:text-xl'>Josselin Francois-Downey</h2>
          <div className='text-green-400'>Curious and enthusiastic developer</div>
          <div className='text-gray-400 flex flex-col lg:flex-row'>
            <a className="lg:mr-5" href="https://www.linkedin.com/in/josselin-francois-downey/">
              LinkedIn
            </a>
            <a className="lg:mr-5" href="https://github.com/Jojofoulk">
              GitHub
            </a>
          </div>
          <p className="text-justify py-10">
            I'm a young Developer based in Melbourne with more than 2 years of industry experience as a FullStack Developer.
            I have experience with a wide range of programming languages and technologies, including: Angular, SCSS, Express.js, React, Python, C#, Git, SQL.
            I have a passion for developing and learning new things while doing so. I also recently started taking
            interest at hardware concepts such as PC building and phone and computer repair.
            I love experimenting and sharing my work with others.
          </p>
          </div>
           </div>
          <Head>
            <meta charSet="utf-8" />
            {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#1F2937" />
            <meta name="description" content="Josselin Francois-Downey's Portfolio, displaying his experience and passion for development" />
            <meta name="author" content="Josselin Francois-Downey" />

            <meta property="og:title" content="Josselin Francois-Downey" />
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" content="" /> */}
            <meta property="og:image" content="/static/images/banana.jpg" />
            <meta property="og:description" content="Josselin Francois-Downey's Portfolio, displaying his experience and passion for development" />

            <title>Josselin Francois-Downey</title>
            <link rel="manifest" href="/manifest.json" />

          </Head>
          <Component {...pageProps} />


       
      </div>
    </div>
  )
}