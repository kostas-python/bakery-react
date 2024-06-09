
import Head from 'next/head'; 
import RootLayout from './layout';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';


export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the home page" />
      </Head>
      <html className="h-full bg-white">
      <body className="h-full">
      <Navbar />
      
        
      <Footer />
      
      

      </body>
      </html>
    </RootLayout>
  );
}