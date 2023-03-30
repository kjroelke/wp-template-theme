<?php

/**
 * A page Content Section
 */
$content = new ContentSectionComponents();
?>
<?php $content->hero_section(null, true, array(
	'has_background_image' 	=> false,
	'headline' 				=> 'A Headline',
	'subheadline' 			=> 'With a subheadline',
	'has_cta' 				=> true,
	'cta_link' 				=> '/',
	'cta_text' 				=> 'Get Started',
)); ?>
<section class="about">
	<div class="container">
		<div class="row">
			<div class="col">
				<h2 class="headline">Who/What is the Choctaw Nation</h2>
				<p class="text-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
					dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<ul class="job-categories">
					<li class="job-categories__category">Job 1</li>
					<li class="job-categories__category">Job 2</li>
					<li class="job-categories__category">Job 3</li>
					<li class="job-categories__category">Job 4</li>
					<li class="job-categories__category">Job 5</li>
				</ul>
			</div>
		</div>
	</div>
</section>