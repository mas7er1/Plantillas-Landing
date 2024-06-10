<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$from = 'Contact Form'; 
		$to = 'example@example.com'; 
		$subject = $_POST['subject']; 
		
		$body = "From: $name\n E-Mail: $email\n Subject: $subject\n Message:\n $message";
	

	mail($to, $subject, $body, $from);

	
	}
	
?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Your Mail Has Been Send Successfully.</title>
	<!-- Google Font -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"> 
	<!-- Bootstrap -->
	<link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.min.css" />	

	<!-- Fontawesome -->
	<link href="assets/fontawesome/css/fontawesome.css" rel="stylesheet">
	<link href="assets/fontawesome/css/brands.css" rel="stylesheet">
	<link href="assets/fontawesome/css/solid.css" rel="stylesheet">
	<!-- slicknav -->
	<link rel="stylesheet" type="text/css" href="assets/css/slicknav.css" />	
	<!-- YouTubePopUp -->
	<link rel="stylesheet" type="text/css" href="assets/css/YouTubePopUp.css" />	
	<!-- Slick -->
	<link rel="stylesheet" type="text/css" href="assets/css/slick.css" />	
	<link rel="stylesheet" type="text/css" href="assets/css/slick-theme.css" />	
	<!-- Style -->
	<link rel="stylesheet" type="text/css" href="assets/css/style.css" />		
	<!-- Responsive -->
	<link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />

</head>

<body>

	<!-- START PRELOADER -->
	<div class="preloader">
		<div class="status">
			<div class="status-mes"></div>
		</div>
	</div>
	 <!--  PRELOADER -->
	 
	<!-- Start Header -->
	<header id="header-area">
		<div class="container">
			<div class="row d-flex align-items-center">
				<div class="col-xl-3 col-lg-3 col-4">
					<div class="site-logo">
						<a href="index.html"><img src="assets/img/logo.svg" alt="robotix" /></a>
					</div>
				</div><!-- End Col -->				
				
				<div class="col-xl-6 col-lg-6 col-8 text-center">
					<nav class="navigation">
						<ul>
							<li><a href="index.html">Home <i class="fas fa-chevron-down"></i></a>
								<ul>
									<li><a href="index.html">Home Dark 1</a></li>
									<li><a href="index-2.html">Home Dark 2</a></li>
									<li><a href="index-3.html">Home Light 1</a></li>
									<li><a href="index-4.html">Home Light 2</a></li>
								</ul>
							</li>
							<li><a href="#about">About</a></li>
							<li><a href="#services">Services</a></li>
							<li><a href="#pricing">Pricing</a></li>
							<li><a href="#team">Team</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>
					<div id="mobile_menu"></div>
				</div><!-- End Col -->				
				
				<div class="col-xl-3 col-lg-3 col-12 text-end d-none  d-lg-block">
					<a href="#" class="login_btn">Get Started</a>
				</div><!-- End Col -->
			</div>
		</div>
	</header>
	<!-- End Header -->
	
	<!-- Start Main Banner Area -->
	<section class="main-banner-area" style="background-image: url('assets/img/slider/sl_bg_1.jpg');">
		<div class="container">
			<div class="banner-content">
				<h2>Thank You</h2>
			</div>
		</div>
	</section>
	<!-- End Main Banner Area -->

	<section class="thankyou-text section-padding">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 text-center">
					<div class="hero-text">
						<h2>Your Mail Has Been Send Successfully.</h2>
						<a class="main_btn" href="index.html">Back To Home</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- End Footer -->
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-xl-3 col-lg-3 col-md-6 col-12">
					<div class="single-footer">
						<div class="footer-about">
							<a href="index.html" class="site-logo"><img src="assets/img/logo.svg" alt="robotix"/></a>
							<p>							
								Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nullam posuere vehicula 
							</p>
						</div>
					</div>
				</div><!-- End Col -->					
				
				<div class="col-xl-3 col-lg-3 col-md-6 col-12">
					<div class="single-footer">
						<h3>Company</h3>
						<ul>
							<li><a href="#">About</a></li>
							<li><a href="#">Service</a></li>
							<li><a href="#">Team</a></li>
							<li><a href="#">Shop</a></li>
							<li><a href="#">Contact</a></li>

						</ul>
					</div>
				</div><!-- End Col -->					
				
				<div class="col-xl-3 col-lg-3 col-md-6 col-12">
					<div class="single-footer">
						<h3>Support</h3>
						<ul>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms of Service</a></li>
							<li><a href="#">Cookie Policy</a></li>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">HelpDesk</a></li>

						</ul>
					</div>
				</div><!-- End Col -->				

				<div class="col-xl-3 col-lg-3 col-md-6 col-12">
					<div class="single-footer">
						<h3>Newsletter</h3>
						<p>
						Subscribe Our Newsletter to get our
						Latest update & news
						</p>
						<div class="newsletter-area">
							<form action="#" method="get">
								<input type="email" class="form-control" placeholder="Your Email Address" name="EMAIL" />
								<button type="submit"><img src="assets/img/icons/rocket.svg" alt="icon" /></button>
							</form>
						</div>
					</div>
				</div><!-- End Col -->

				<div class="col-12">
					<div class="copyright text-center">
						<p>
							@ <span id="curyear"></span>. All Rights Reserved by Robotix
						</p>
					</div>
				</div><!-- End Col -->
			</div>
		</div>
	</footer>
	<!-- End Footer -->

	<!-- Start progress-wrap -->
	<div class="progress-wrap">
		<svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
			<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
		</svg>
	</div>
	<!-- End progress-wrap -->
	
	<!-- Latest jQuery -->
	<script src='assets/js/jquery.js'></script>
	<script src='assets/bootstrap/js/bootstrap.min.js'></script>
	<script src='assets/js/jquery.slicknav.js'></script>
	<script src='assets/js/slick.min.js'></script>
	<script src='assets/js/YouTubePopUp.jquery.js'></script>
	<script src="assets/js/script.js"></script>
	
</body>
</html>