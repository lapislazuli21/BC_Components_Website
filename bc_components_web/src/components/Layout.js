const Layout = ({ children, className = "" }) => {
  return (
    <div className={` w-full h-full flex-row z-0 bg-light p-32 ${className}`}>
      {children}
    </div>
  )
}

export default Layout