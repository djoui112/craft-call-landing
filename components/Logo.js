import Image from 'next/image'

export default function Logo({ variant = 'default', className = '' }) {
  const src =
    variant === 'light' ? '/craftcall-logo-light.svg' : '/craftcall-logo.svg'

  return (
    <Image
      src={src}
      alt="CraftCall"
      width={160}
      height={38}
      priority={variant === 'default'}
      className={`h-8 w-auto ${className}`}
    />
  )
}
