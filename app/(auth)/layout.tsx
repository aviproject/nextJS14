"use client"; //this is a client side component

import { Inter } from 'next/font/google';
import React, { useState } from 'react'
const inter = Inter({ subsets: ["latin"] });

const AuthLayout = ({children,}: {children: React.ReactNode}) => {

  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}   

export default AuthLayout;