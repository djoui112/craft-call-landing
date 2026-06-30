export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-block font-semibold rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-teal hover:bg-teal-dark text-white focus:ring-teal',
    secondary: 'bg-navy hover:bg-navy-light text-white focus:ring-navy',
    outline:
      'border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white focus:ring-navy',
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
