import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Toggle } from "@radix-ui/react-toggle";
import { RxHamburgerMenu } from "react-icons/rx";

type NavItem = {
    label: string;
    href: string;
};

type NavbarProps = {
    items?: NavItem[];
};

const defaultItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact-us" },
];

const Navbar = (props: NavbarProps) => {
    const { items = defaultItems } = props;

    return (
        <NavigationMenu viewport={false}>
            <Toggle aria-label="Navigation Collapse">
                <RxHamburgerMenu className="size-6" />
            </Toggle>
            <NavigationMenuList className="navbar-list">
                {items.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link to={item.href}>{item.label}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navbar;
