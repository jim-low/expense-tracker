import { Flex, Text } from "@radix-ui/themes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { faBell, faChartBar, faGear, faMoneyBill } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    return (
        <Flex id="navbar" direction="column" p="3">
            <h1 className="logo-text uppercase text-3xl font-bold text-center">Extrack</h1>
            <Flex className="page-selection mt-10 pl-10" direction="column" justify="center" gap="5">
                {
                    [
                        {
                            label: "Dashboard",
                            icon: faChartBar,
                            link: "/dashboard",
                        },
                        {
                            label: "Transactions",
                            icon: faMoneyBill,
                            link: "/transactions",
                        },
                        {
                            label: "Notifications",
                            icon: faBell,
                            link: "/notifications",
                        },
                        {
                            label: "Settings",
                            icon: faGear,
                            link: "/settings",
                        },
                    ].map(item => {
                        return (
                            <Flex gap="3" align="center" className="text-xl cursor-pointer">
                                <FontAwesomeIcon icon={item.icon} />
                                <Text as="p" m="0" className="uppercase font-thin">
                                    {item.label}
                                </Text>
                            </Flex>
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}

export default NavBar
