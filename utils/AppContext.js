"use client"

import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AppProvider = ({ children }) => {
    const ls = typeof window !== "undefined" ? window.localStorage : null;

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
};