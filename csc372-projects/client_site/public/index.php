<!-- Selena Cabral, 2/6/2026
This is the HTML file for the overall website. The code below currently includes the CSS and JS files, some images, subpage links/buttons, a footer, etc
This file will be updated along the way 
-->

<!-- Notes from meeting of things to add: (some are still WIP)
   move header up more and then move the about and socials buttons below that internally centered above horizontal line (done)
   remove "page" from the ASA and PGA buttons (done)
   make the text on buttons bolder/bigger (done)
   insta API for the socials/QR code for groupme/handle for tiktok (find tiktok api???) (done)
   get images of eboard to put in about us page (done)
   get images of pga leaders (WIP)
   get an event calendar to put in ASA page (done)
   media and pics on the ASA page (the beacon) (done)
   enhance lighting of ASA group photo on homepage
   test blue as bg color (done)
   find other patterns for bg (done)
   custom loader (koi fish rotating) (done)
   get more imgs to scroll through some photos on homepage (done)
-->
<?php 
// classes & objects here
class StudentOrg {
   public string $name;
   public string $abbrev;
   public string $link;
   public string $email;
   protected array $imgs;

   public function __construct(string $name, string $abbrev, string $link, string $email, array $imgs = []) {
      $this->name = $name;
      $this->abbrev = $abbrev;
      $this->link = $link;
      $this->email = $email;
      $this->imgs = $imgs;
   }
   
   // get the number of images
   public function getImgCt(): int {
      return count($this->imgs);
   }

   public function renderSlider(): string {
      $id     = strtolower($this->abbrev);
      $folder = $this->abbrev . "-pics";
      $html   = "";

      $html .= "<div class='slider-container'>";
      $html .= "  <div class='slider-section'>";
      $html .= "  <a href='{$this->link}' class='page-button'>{$this->abbrev}</a>";
      $html .= "  <button class='slider-button prev' onclick=\"changeSlide('{$id}', -1)\">&#8249;</button>";
      $html .= "  <div class='slider' id='{$id}-slider'>";
      foreach ($this->imgs as $img) {
         $html .= "<img src='images/{$folder}/{$img}' alt='{$this->name} photo'>";
      }
      $html .= "  </div>";
      $html .= "  <button class='slider-button next' onclick=\"changeSlide('{$id}', 1)\">&#8250;</button>";
      $html .= "  </div>";
      $html .= "</div>";

      return $html;
   }
}

// add ASA as a new org object
$asa = new StudentOrg(
   name: "Asian Students Association",
   abbrev: "ASA",
   link: "subpages/ASA.html",
   email: "asa@rhodysenate.org",
   imgs: [
         "ASA_group_photo.jpg",
         "asa-dance.jpg",
         "asa-floor.jpg",
         "asa-outside.jpeg",
         "dirt-lol.JPG",
         "meeting-pic.jpg",
         "new-eboard.JPG",
         "ryry.jpg",
         "spookyyy.JPG",
         "stargazing.JPG",
         "alex-fran.jpg"
   ]
);

// add PGA as a new org object
$pga = new StudentOrg(
   name: "People Generally Asian",
   abbrev: "PGA",
   link: "subpages/PGA.html",
   email: "asa@rhodysenate.org",
   imgs: [
      "PGA_group_photo.png",
      "ending.JPG",
      "fake-love.JPG",
      "heart.jpg",
      "kings-and-queens.JPG",
      "lullaby-group.JPG",
      "lullaby.JPG",
      "pga-tate.jpg",
      "puppet-show.JPG",
      "signal.jpg",
      "slayers.JPG",
      "TWICE.JPG"
   ]
);
?>

<!DOCTYPE html>

<!-- Title for the website-->
 <head>
    <title> ASA Website </title>
    <!-- Link CSS files here-->
   <link rel="stylesheet" href="css/homepage.css">
 </head>

 <body>
    <!-- Logo for the website-->
    <img src="images/ASA-pics/ASA_2_FRONT.png" alt = "ASA logo" width="100" height="100" onclick="goHome()"> 

   <div class = "content-wrapper" style="padding-top: 50px;">
    <!-- website header-->
    <div style = "text-align: center">
      <h1 id="welcome-header"></h1>
    </div>

    <!-- Main navigation menu-->
     <nav class = "first">
        <ul>
            <li><a href = "subpages/about.html"> About </a></li>
            <li><a href = "subpages/socials.html"> Socials </a></li>
        </ul>
     </nav>

     <!-- a horizontal line to split the header and the navigation menu-->
    <hr>

     <!-- Secondary navigation menu-->
     <nav class = "second">
      <!-- ASA slider -->
         <?php echo $asa->renderSlider(); ?>

      <!-- PGA slider -->
         <?php echo $pga->renderSlider(); ?>
     </nav>

     <p style="text-align:center; font-size:0.85em; color:gray;">
            <?php echo $asa->name; ?> has <?php echo $asa->getImgCt(); ?> photos
            &nbsp;|&nbsp;
            <?php echo $pga->name; ?> has <?php echo $pga->getImgCt(); ?> photos
     </p>

   </div>

   <footer> 
      <p> 
         <?php echo date("Y"); ?> Asian Student Association | Contact us: <?php echo $asa->email; ?>
      </p>
   </footer>

   <script src="js/homepage.js"></script>
 </body>
