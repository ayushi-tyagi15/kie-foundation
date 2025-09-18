const logoPath =
  window.location.protocol === "file:"
    ? "../assets/images/KiE Foundation second logo.png"
    : "/assets/images/KiE Foundation second logo.png";
const header = `<header class="header" id="header-container">  
    <nav class="navbar navbar-expand-lg navbar-dark  fixed-top">
        <div class="container">
              <a href="../../"><img src="${logoPath}" alt="logo" class="img-fluid" width="240"
            height="65"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#work">Our Work</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#Volunteer">Our Volunteer</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="../contact-us">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>`;

const headerStyle = document.createElement("style");
headerStyle.textContent = `/* Navbar */
        .navbar {
            /* background-color: var(--primary-color); */
            background-color:#f8f9fa;
            transition: all 0.3s ease;
            padding: 12px 0;
        }

        .navbar.scrolled {
            padding: 10px 0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand {
            font-weight: 700;
            font-size: 1.8rem;
            color: black !important;
        }

        .nav-link {
            color: black !important;
            margin: 0 10px;
            font-weight: 500 !important;
            position: relative;
             white-space: nowrap;
             font-size: 17px !important;
        }

        .nav-link:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background: var(--secondary-color);
            bottom: 0;
            left: 0;
            transition: width 0.3s ease;
        }

        .nav-link:hover:after {
            width: 100%;
        }
            @media (max-width: 992px) {
            .navbar-brand {
                font-size: 1.5rem;
            }
              .hamburger {
          cursor: pointer;
        }

        .bar {
          display: block;
          background-color: #101010;
          width: 24px;
          height: 2px;
          margin: 6px auto;
          transition: all 300ms ease-in-out;
        }

        .hamburger.active .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
        }
`;
document.getElementById("header-container").innerHTML = header;
document.head.appendChild(headerStyle);
