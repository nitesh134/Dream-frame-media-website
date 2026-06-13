import { BRAND_NAME } from '@/constants/brand'
import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <Link
            to="/"
            className="flex items-center gap-3 mb-2 group inline-flex"
        >
            <div className="w-5 h-5 rounded-[2px]">
                <img src="/logos/dfmlogo.png" alt={BRAND_NAME} width={20} height={20} />
            </div>
            <span className="font-bold text-lg tracking-wide">{BRAND_NAME}</span>
        </Link>
    )
}