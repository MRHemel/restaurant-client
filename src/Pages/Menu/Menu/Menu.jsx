import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss||Menu</title>

            </Helmet>
            <Cover img={menuImg} title={"Our menu"}></Cover>
            <SectionTitle subheading={"don't miss "}
                heading={"Today's Offer"}>

            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={deserts} title={'desserts'}
                img={menuImg}></MenuCategory>
            <MenuCategory items={pizza}
                title={'pizza'}
                img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup}
                title={'soup'}
                img={soupImg}></MenuCategory>
            <MenuCategory items={salad}
                title={'salads'}
                img={saladImg}></MenuCategory>


        </div>
    );
};

export default Menu;