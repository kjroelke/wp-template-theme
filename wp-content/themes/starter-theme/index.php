<?php

/**
 * Standard Page Output
 */
get_header();
?>
<main <?php echo "class='site-content {$post->post_name}'" ?>>
	<?php if ($post->post_name === 'sample-page') : ?>
	<?php get_template_part('templates/page', 'sample-page'); ?>
	<?php else : $content->hero_section($post->ID); ?>
	<?php endif; ?>
	<article>
		<? the_content(); ?>
	</article>
</main>

<?php
get_footer();