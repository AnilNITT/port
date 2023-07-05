import React from "react";
import styles from "./Footer.module.css";
import Icon from "../icon/Icon";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<h1 className={styles.tagline}>Based in INDORE, working Worldwide</h1>
				<div className={styles.social}>
					<Icon url="https://www.behance.net" icon="instagram" />
					<Icon
						url="https://www.linkedin.com/in/thomasmwaka/"
						icon="linkedin"
					/>
					<Icon url="https://twitter.com/" icon="twitter" />
				</div>
			</div>
			<div className={styles.copyright}>
				<p>Design By Sahil ©{new Date().getFullYear()}  </p>
			</div>
		</footer>
	);
};

export default Footer;
