/**
 * A Bee Books
 * 
 * Include functions
 * (c) Alpha Magnus Studios
 * https://www.alphamstudios.com
 */

function header(page = '') {
    document.write(`
  <!-- HEADER -->
  <header role="banner" class="position-absolute">    
    <!-- Top Navigation -->
    <nav class="background-transparent background-transparent-hightlight full-width sticky">
      <div class="s-12 l-2">
        <a href="index.html" class="logo">
          <!-- Logo White Version -->
          <img class="logo-white" src="img/logo.png" alt="">
          <!-- Logo Dark Version -->
          <img class="logo-dark" src="img/logo-dark.png" alt="">
        </a>
      </div>
      <div class="top-nav s-12 l-10">
        <p class="nav-text"></p>
        <ul class="right chevron">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
    `);
}

function footer() {
    document.write(`
    <!-- FOOTER -->
    <footer>
      <!-- Contact Us -->
      <div class="background-primary padding text-center">
        <p class="h1">Contact Us: <a href="tel:+91 9906682525">+91 9906 682 525</a></p>                                                                        
      </div>
      
      <!-- Main Footer -->
      <section class="background-dark full-width">
        <!-- Map -->
        <div class="s-12 m-12 l-6 margin-m-bottom-2x">
          <div class="s-12 grayscale center">  	  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105805.94604334072!2d74.73887387421695!3d34.03269014466877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18e4385555555%3A0xf2b0265b7dbe44af!2sA+Bee+Books!5e0!3m2!1sen!2sin!4v1509813728357" width="100%" height="450" frameborder="0" style="border:0"></iframe>
            
            </div>
        </div>
        
        <!-- Collumn 2 -->
        <div class="s-12 m-12 l-6 margin-m-bottom-2x">
          <div class="padding-2x">
            <div class="line">              
              <div class="float-left">
                  <i class="icon-sli-location-pin text-primary icon3x"></i>
                </div>
                <div class="margin-left-70 margin-bottom-30">
                  <h3 class="margin-bottom-0">A Bee Books</h3>
                  <p>Lalnagar, Chanpora,<br>Srinagar, Jammu and Kashmir 190015
                  </p>               
                </div>
                <div class="float-left">
                  <i class="icon-sli-envelope text-primary icon3x"></i>
                </div>
                <div class="margin-left-70 margin-bottom-30">
                  <h3 class="margin-bottom-0">E-mail</h3>
                  <p>info@alphamstudios.com<br>
                     info@alphamstudios.com
                  </p>              
                </div>
                <div class="float-left">
                  <i class="icon-sli-phone text-primary icon3x"></i>
                </div>
                <div class="margin-left-70">
                  <h3 class="margin-bottom-0">Phone Numbers</h3>
                  <p><a href="tel:+91 9906682525">+91 9906 682 525</a><br>
                  <a href="tel:+91 9906682525">+91 9906 682 525</a><br>
                  <a href="tel:+91 9906682525">+91 9906 682 525</a>
                  </p>             
                </div>
            </div>
          </div>
        </div>  
      </section>
      <hr class="break margin-top-bottom-0" style="border-color: rgba(0, 38, 51, 0.80);">
      
      <!-- Bottom Footer -->
      <section class="padding background-dark full-width">
        <div class="s-12 l-6">
          <p class="text-size-12">Copyright &copy; 2017 A Bee Books.</p>
        </div>
        <div class="s-12 l-6">
          <a class="right text-size-12" href="https://www.alphamstudios.com" target="_blank" title="Designed and Developed by Alpha Magnus Studios">Designed and Developed by Alpha Magnus Studios</a>
        </div>
      </section>
    </footer>
    `);
}
