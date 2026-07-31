'use client'

import { useSiteIdentity } from '@/hooks/useSiteIdentity'
import { Link } from '@/i18n/navigation'

interface HeaderLogoProps {
  labelSuffix?: string
}

export default function HeaderLogo({ labelSuffix }: HeaderLogoProps) {
  const site = useSiteIdentity()
  const label = labelSuffix ? `${site.name} ${labelSuffix}` : site.name

  return (
    <Link
      href="/"
      aria-label={label}
      className="flex h-10 shrink-0 items-center text-2xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
    >
      <span aria-hidden="true" className="flex items-center">
        <span>K</span>
        <svg
          viewBox="0 0 200 232"
          className="mx-[0.045em] h-[0.8em] w-auto translate-y-[0.05em]"
          fill="currentColor"
        >
          <rect x="46" y="2" width="108" height="22" rx="11" />
          <path
            fillRule="evenodd"
            d="M100 56a88 88 0 1 0 0 176a88 88 0 1 0 0-176zM40.3 104.3a69.2 69.2 0 0 1 66-44a69.2 69.2 0 0 0-47.2 66a69.2 69.2 0 0 1-18.8-22z"
          />
        </svg>
        <span>INI</span>
        <span className="font-normal text-muted-foreground">predictions</span>
        {labelSuffix ? <span className="ml-2 font-normal text-muted-foreground">{labelSuffix}</span> : null}
      </span>
    </Link>
  )
}
