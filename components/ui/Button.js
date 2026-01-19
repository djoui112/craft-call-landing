export function Button({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-block font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary',
    secondary: 'bg-accent hover:bg-accent-dark text-white focus:ring-accent',
    outline: 'border-2 border-gray-800 text-gray-800 bg-transparent hover:bg-white hover:border-gray-800 hover:text-gray-800 focus:ring-gray-800',
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
