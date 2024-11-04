import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
	root: {
	  backgroundColor: '#3b5998',
	  display:"flex",
	  height:'100%',
	  justifyContent:'center',
	  paddingBottom: '30px',
	},
	navbar: {
    backgroundColor: 'white',
	display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: '16px' 
  },
 navList: {
    listStyle: 'none', 
    display: 'flex', 
    margin: 0, 
    padding: 0,
  },
  navItem: {
    marginLeft: 2,
    '& a': {
      color: 'black',
      textDecoration: 'none', 
      padding: '8px 12px', 
      transition: 'background-color 0.3s', 
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
      },
      '&.active': {
        fontWeight: 'bold', 
        borderBottom: '2px solid white',
      },},},}
  );
const NavBar = () => {
	const classes = useStyles();
	return (
		<>
		<div className={classes.root}>
			<img  src="https://www.financedigest.com/wp-content/uploads/2016/11/fdigestlogo2-1.png" alt="logoimage"  className="items-baseline text-base"/>
		</div>
		<nav className={classes.navbar}>
			<div>
				<ul className={classes.navList}>
					<li className={classes.navItem}>
						<NavLink
							to="/"
							exact
							activeClassName="active-link"
						>
							Home
						</NavLink>
					</li>
					<li className={classes.navItem}>
						<NavLink
							to="/business"
							activeClassName="active-link"
						>
							Business
						</NavLink>
					</li>
					<li className={classes.navItem}>
						<NavLink
							to="/finance"
							activeClassName="active-link"
						>
							Finance
						</NavLink>
					</li>
					<li className={classes.navItem}>
						<NavLink
							to="/lifestyle"
							activeClassName="active-link"
						>
							LifeStyle
						</NavLink>
					</li>
					<li className={classes.navItem}>
						<NavLink
							to="/news"
							activeClassName="active-link"
						>
							News
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
		</>
	);
};

export default NavBar;