export function Card({ children, className = '', padding = true }) {
  const baseStyles = 'bg-white rounded-lg shadow-md'
  const paddingStyles = padding ? 'p-6 lg:p-8' : ''
  
  return (
    <div className={`${baseStyles} ${paddingStyles} ${className}`}>
      {children}
    </div>
  )
}
