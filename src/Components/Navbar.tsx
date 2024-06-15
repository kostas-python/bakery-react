'use client'

import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import '/src/app/globals.css';



const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Bread', href: '#bread' },
  { name: 'Contact', href: '#contact' },
];



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, section: string) => {
    e.preventDefault();
    const targetSection = document.querySelector(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <header className="bg-[#93763c]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Bakery</span>
            <img className="h-40 w-auto" src="bakerylogo1.png" alt="" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-2xl font-semibold leading-6 text-orange-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#6B1985]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#E3B04B] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#6B1985]/10">
          <div className="flex items-center gap-x-6">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Bakery</span>
              <img className="h-20 w-auto" src="bakerylogo1.png" alt="" />
            </a>
            <a
              href="#"
              className="ml-auto rounded-md bg-[#8C1AAF] px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-[#6B1985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B1985]"
            >
              Menu
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#6B1985]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[#6B1985]/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-[#6B1985] hover:bg-[#F0D8A8]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-semibold leading-7 text-[#6B1985] hover:bg-[#F0D8A8]"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
