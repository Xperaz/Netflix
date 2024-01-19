
const Button = ({children, style, onClick}) => {
  return (
    <button className={style} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button