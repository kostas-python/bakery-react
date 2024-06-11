import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Head from 'next/head'; 
import RootLayout from './layout';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Block1 from '@/Components/Block1';
import Block2 from '@/Components/Block2';
import Block3 from '@/Components/Block3';


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
      <Block1 />
      <Block2 />
      <Block3 />
        
      <Footer />
      
      

      </body>
      </html>
    </RootLayout>
  );
}