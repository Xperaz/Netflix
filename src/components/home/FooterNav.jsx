import { Link } from 'react-router-dom'

const FooterNav = ({ nav, index }) => {
  return (
    <ul className='flex flex-col gap-4'>
        {nav.map((item, i) => (
            <Link to='/' key={i + '_' + item} 
            className='text-[#B3B3B3] w-fit border-b border-[#B3B3B3] leading-[1rem]'
            >
                {item}
            </Link>
        ))}

        { index === 0 ? (<span className='text-[#B3B3B3]'>Netflix Morocco</span>) : (null) }
    </ul>
  )
}

export default FooterNav 