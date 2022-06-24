<?php get_header(); ?>
<!-- slideshow -->
<section class="hp-slideshow">
  <div class="region-slideshow-container">
    <h2 class="hidden">Slideshow</h2>
    <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar("Hp Slideshow") ) : ?>
    <?php endif ?>
  </div>
</section>
<!-- slideshow end -->
<!-- quick-search -->
<section class="hp-quick-search">
  <div class="region-quick-search-container">
  </div>
</section>
<!-- quick-search end -->
<!-- welcome -->
<section class="hp-welcome">
  <div class="region-welcome-container">
  </div>
</section>
<!-- welcome end -->
<!-- properties -->
<section class="hp-properties">
  <div class="region-properties-container">
  </div>
</section>
<!-- properties end -->
<!-- communities -->
<section class="hp-communities">
  <div class="region-communities-container">
  </div>
</section>
<!-- communities end -->
<!-- cta -->
<section class="hp-cta">
  <div class="region-cta-container">
  </div>
</section>
<!-- cta end -->
<!-- videos -->
<section class="hp-videos">
  <div class="region-videos-container">
  </div>
</section>
<!-- videos end -->
<!-- testimonials -->
<section class="hp-testimonials">
  <div class="region-testimonials-container">
  </div>
</section>
<!-- testimonials end -->
<!-- contact -->
<section class="hp-contact">
  <div class="region-contact-container">
  </div>
</section>
<!-- contact end -->
<!-- social -->
<section class="hp-social">
  <div class="region-social-container">
  </div>
</section>
<!-- social end -->
<!-- media -->
<section class="hp-media">
  <div class="region-media-container">
  </div>
</section>
<!-- media end -->
<div class="hp-sidebar">
  <div id="scroll-down">
    <ul class="aios-section-nav"></ul>
    <ul class="comp-social-sidebar">
      <li class="side-smi"> <a href="[ai_client_facebook]" target="_blank" aria-label="facebook"> <span
            class="ai-font-facebook"></span> </a> </li>
      <li class="side-smi"> <a href="[ai_client_linkedin]" target="_blank" aria-label="linkedin"> <span
            class="ai-font-linkedin"></span> </a> </li>
      <li class="side-smi"> <a href="[ai_client_twitter]" target="_blank" aria-label="twitter"> <span
            class="ai-font-twitter"></span> </a> </li>
      <li class="side-smi"> <a href="[ai_client_youtube]" target="_blank" aria-label="youtube"> <span
            class="ai-font-youtube"></span> </a> </li>
      <li class="side-smi"> <a href="[ai_client_instagram]" target="_blank" aria-label="instagram"> <span
            class="ai-font-instagram"></span> </a> </li>
    </ul>
  </div>
</div>
<?php get_footer(); ?>