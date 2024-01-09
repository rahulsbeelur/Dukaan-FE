import Image from 'next/image';
import Home from '../../public/home.svg';
import Orders from '../../public/orders.svg';
import Products from '../../public/products.svg';
import Delivery from '../../public/delivery.svg';
import Marketing from '../../public/marketing.svg';
import Analytics from '../../public/analytics.svg';
import Payments from '../../public/payments.svg';
import Tools from '../../public/tools.svg';
import Discounts from '../../public/discounts.svg';
import Audience from '../../public/audience.svg';
import Appearance from '../../public/appearance.svg';
import Plugins from '../../public/plugins.svg';

const NavBarButton = [
    { icon: Home, alt: 'Home' },
    { icon: Orders, alt: 'Orders' },
    { icon: Products, alt: 'Products' },
    { icon: Delivery, alt: 'Delivery' },
    { icon: Marketing, alt: 'Marketing' },
    { icon: Analytics, alt: 'Analytics' },
    { icon: Payments, alt: 'Payments' },
    { icon: Tools, alt: 'Tools' },
    { icon: Discounts, alt: 'Discounts' },
    { icon: Audience, alt: 'Audience' },
    { icon: Appearance, alt: 'Appearance' },
    { icon: Plugins, alt: 'Plugins' }
];

const NavButton = () => {
    return (
        <>
            <div className="flex flex-col gap-1">
                {NavBarButton.map((button) => (
                    <div
                        className={
                            `flex gap-3 px-4 py-2 w-[208px] ml-[-2px] ` +
                            (button.alt === 'Payments' ? 'bg-[#FFFFFF] bg-opacity-10 rounded' : '')
                        }
                        key={button.alt}>
                        <div>
                            <Image
                                width={100}
                                height={100}
                                className="w-5 h-5"
                                src={button.icon}
                                alt={button.alt + ' icon'}
                            />
                        </div>
                        <div className={`text-[#FFFFFF] font-[500] leading-5 text-[14px] ` + (button.alt !== 'Payments' ? 'opacity-[80%]' : '')}>
                            {button.alt} {/* Display button.alt as text content */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default NavButton;
