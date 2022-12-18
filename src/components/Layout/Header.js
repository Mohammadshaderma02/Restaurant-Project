import { Fragment } from 'react';
import Logo from '../../assets/kisspng-logo-restaurant-food-retro-food-labels-vector-image-5a6a00957cfc89.489852961516896405512.png'
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    
  
    
    <Fragment>
        {/*This is Navbar */}
      <header className={classes.header}>
         <h1>Restaurant</h1> 
      
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={'https://png.pngtree.com/thumb_back/fh260/20170803/pngtree-Food-Menu-Fare-Meal-background-photo-869492.jpg'} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
