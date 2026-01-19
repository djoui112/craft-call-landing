export function Input({ error, className = '', ...props }) {
  const baseStyles = 'w-full border-2 rounded-lg px-4 py-3 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  const normalStyles = 'border-gray-300 focus:border-primary focus:ring-primary'
  const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500'
  
  const inputClasses = `${baseStyles} ${error ? errorStyles : normalStyles} ${className}`
  
  return (
    <div className="w-full">
      <input className={inputClasses} {...props} />
      {error && typeof error === 'string' && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
