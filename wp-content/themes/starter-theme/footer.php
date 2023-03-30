<?php

/**
 * Basic Footer Template
 * 
 * @since 1.0
 * 
 */

$current_year = date("Y");
?>
<footer class="footer bg-primary py-5 container-fluid gx-5 text-white text-center d-flex flex-column align-items-center">
	<?php wp_nav_menu(
        array(
            'theme_location' => 'footer_menu',
            'menu_class' => 'navbar__menu p-0 m-0 d-inline-flex',
            'container' => 'nav',
            'container_class' => 'footer-nav navbar',
        )
    );
    ?>
	<a href="<?php esc_url(site_url()) ?>" class="logo">
		<figure class="logo-img d-inline-block">
			<span aria-label="to Home Page">
				<?php echo bloginfo('name') ?>
			</span>
		</figure>
	</a>
	<div id="copyright">
		<?php echo "&copy;&nbsp; {$current_year} Choctaw Nation of Oklahoma. All Rights Reserved."; ?>
	</div>
</footer>
<? wp_footer(); ?>
</body>

</html>