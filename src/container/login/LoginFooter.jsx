import FooterNav from "../../components/home/FooterNav"

const navs = [
    ["Questions? Contact us.", "FAQ", "Cookie Preferences"],
    ["Help Center", "Corporate Information"],
    ["Terms of Use"],
    ["Privacy"],
]

const LoginFooter = () => {
  return (
    <section className="flex justify-evenly items-center h-[20vh]
         bg-black/75 absolute bottom-0 w-full">
        {navs.map((item, i) => (
            <FooterNav key={i + '_' + item[0]}  nav={item} index={i} />
        ))}
    </section>
  )
}

export default LoginFooter