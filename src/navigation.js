import { createSharedPathnamesNavigation } from 'next-intl/navigation';
    
    export const locales = ['en', 'ar', 'ku'];
    export const localePrefix = 'always'; 
    
    const { Link: OriginalLink, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales, localePrefix });

export const LocalizedLink = OriginalLink; 
export { redirect, usePathname, useRouter };