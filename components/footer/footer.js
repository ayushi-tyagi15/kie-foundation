const footer = `
<!-- Footer -->
    <footer id = "footer-container">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <h5>KiE Foundation</h5>
                  
                    <div class="footer-social mt-3">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/kie-foundation-kf/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 mb-4">
                    <!-- <h5>Links</h5> -->
                    <div class="footer-links">
                        <a href="../">Home</a>
                        <a href="#">About Us</a>
                        <a href="#work">Our Work</a>

                    </div>
                </div>
                <div class="col-lg-2 col-md-6 mb-4">
                    <!-- <h5>Support</h5> -->
                    <div class="footer-links">
                        
                        <a href="#">Our Volunteer</a>
                        <a href="../contact-us"> Contact Us</a>

                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <h5>Newsletter</h5>
                    <p>Subscribe to stay updated on our initiatives and impact.</p>
                    <form class="d-flex">
                        <input type="email" class="form-control me-2" placeholder="Your Email">
                        <!-- <input type="button" class="btn btn-danger mb-3" placeholder="Your Email"> -->
                        <button class="btn btn-primary subscribe-btn" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="copyright">
                <div class="row d-flex justify-content-between align-items-end">
                    <div class="col-md-6">
                        <p>&copy; 2025 KiE Foundation. All Rights Reserved.</p>
                    </div>
                    <div class="col-md-6 text-md-end text-start mb-3">
                        <a href="privacy-policy.html" class="text-decoration-none text-light">Privacy Policy</a>
                    </div>

                </div>

            </div>
        </div>
    </footer>
`;

const footerStyle = document.createElement("style");
footerStyle.textContent = `
 /* Footer */
        footer {
            background-color: var(--dark-color);
            color: white;
            padding: 50px 0 20px;
        }

        .footer-links a {
            color: white;
            display: block;
            margin-bottom: 10px;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--secondary-color);
            padding-left: 5px;
        }

        .footer-social a {
            color: white;
            font-size: 1.5rem;
            margin-right: 15px;
            transition: all 0.3s ease;
        }

        .footer-social a:hover {
            color: var(--secondary-color);
            transform: translateY(-3px);
        }

        .copyright {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 20px;
            margin-top: 30px;
        }



`;
document.getElementById("footer-container").innerHTML = footer;
document.head.appendChild(footerStyle);
