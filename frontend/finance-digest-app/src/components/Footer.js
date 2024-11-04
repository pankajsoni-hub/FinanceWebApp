import React from "react";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
	footer: {
	 width:'100%',
	 backgroundColor:"#000",
	 color:'white',
	 textAlign:'center',
	 padding:'20px 0px'
	},
  }));
  
const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<p>
			Finance Digest is a Online Portal providing in-depth coverage and analysis of the global financial community covering a wide range of topics from Business, Finance, Banking, Technology, Insurance, Investments, Lifestyle and more. Copyright © 2015 - 2024. FinanceDigest.com All Rights Reserved.
			</p>
		</div>
	);
};

export default Footer;