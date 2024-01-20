import FooterNav from "../../components/home/FooterNav"
import { navs } from "../../constants/navItems"

const Footer = () => {
 
  return (
    <section className="py-12 flex justify-evenly items-center">
         { navs.map((item, i) => (
          <FooterNav key={i + '_' + item[0]} nav={item} index={i} />
         ))
         }
    </section>
  )
}

export default Footer