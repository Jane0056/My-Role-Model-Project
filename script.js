var swiper = new Swiper(".swiper-panorama", {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            loopAddBlankSlides: true,
            speed: 600,
            spaceBetween: 0,
            mousewheel: false,
            effect: "coverflow",
            coverflowEffect: {
                stretch: -5,
                rotate: 10,
                depth: -65,
                modifier: 2,
                slideShadows: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 2000, // Time in milliseconds between slides
                disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes, clicks, etc.)
            },
            breakpoints: {
                // When window width is >= 576px
                576: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // When window width is >= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                // When window width is >= 992px
                992: {
                    slidesPerView: 4,
                    spaceBetween: 10
                }
                // Add more breakpoints as needed
            }
        });

        const navbar = document.getElementById('navbar');

        // Function to handle scroll event
        function handleScroll() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            // Add or remove the "active" class based on scroll position
            if (scrollPosition >= 160) {
                navbar.classList.add('navactive');
            } else {
                navbar.classList.remove('navactive');
            }
        }

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check on page load
        handleScroll();


        (function ($) {
            $(function () {


                $('.js-timeline-carousel_nav').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToScroll: 1,
                    arrows: false,
                    variableWidth: true,
                    centerMode: true,
                    asNavFor: '.js-timeline-carousel',
                    focusOnSelect: true,
                    mobileFirst: true,
                    responsive: [

                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 8
                            }
                        },
                        {
                            breakpoint: 0,
                            settings: {
                                centerMode: false
                            }
                        }
                    ]
                });

                $('.js-timeline-carousel').slick({
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    prevArrow: '.js-ag-timeline-carousel-arrow_prev',
                    nextArrow: '.js-ag-timeline-carousel-arrow_next',

                    asNavFor: '.js-timeline-carousel_nav',
                    speed: 1500,
                    responsive: [
                        {
                            breakpoint: 0,
                            settings: {
                                centerMode: false
                            }
                        }
                    ]
                });
            });
        })(jQuery);

        //   gsap.fromTo(".tween", {stagger: 0.9, y:18,  yoyo: true}, {x:18 ,   repeat:-1,  duration:1.2, yoyo: true});

        // gsap.to(".tweena" , {stagger: 0.5, y:18, fill:"yellow",  duration:0.8, repeat:-1, yoyo: true});

        // gsap.to(".image-stack", {y:-6, repeat:-1, duration:1,  yoyo: true, stagger:{
        //     amount:1.2, from:"edges", ease:"bounce"
        //   }})

        var text = "Mary Teresa Bojaxhiu MC, better known as Mother Teresa, was a Roman Catholic nun and the daughter of an ethnic Albanian bussinessman. Mother Teresa profoundly inspires me through her remarkable achievements, unwavering character, and resilience in overcoming challenges. Her humility, empathy, and ability to see the divine in everyone resonate deeply with me. Her legacy continues to inspire me, reminding us that even small acts of kindness can ignite profound change. Mother Teresa's life is a testament to the power of selfless service and love, making her an enduring source of inspiration in my life.";

        // Typewriter effect function
        function typeWriter(text, i, subtextElement) {
            if (i < text.length) {
                subtextElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(function () {
                    typeWriter(text, i, subtextElement);
                }, 50); // Adjust typing speed here (milliseconds)
            }
        }

        // Trigger typewriter effect when page loads


        window.addEventListener('load', function () {
            const progressBar = document.getElementById('progress-bar');
            const mainContent = document.getElementById('main-content');

            let progress = 0;
            const interval = setInterval(function () {
                progress += 5; // Incrementing by 2% instead of 1%
                progressBar.style.width = progress + '%';

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(function () {
                        progressBar.parentElement.parentElement.style.transition = '1s';
                        progressBar.parentElement.parentElement.style.transform = 'translateY(-100%)';
                        var subtextElement = document.getElementById('subtext');
                        typeWriter(text, 0, subtextElement);
                        setTimeout(function () {
                            mainContent.style.display = 'block';
                        }, 1000);
                    }, 1000);
                }
            }, 5); // Decreased interval to 5 milliseconds
        });

        var cursor = document.querySelector('.blob');

        document.addEventListener('mousemove', function (e) {
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
        });

        const timelineEvents = [
            {
                year: "1910",
                date: "August 26",
                event: "Agnes was born on Aug 26 in Macedonia.",
                img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/731/original/mother-teresa-memorial-house.jpg?1718942139'
            },
            {
                year: "1928",
                event: "Made her first vow with loreto sisters in Dublin",
                img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/732/original/Mother-Teressa-as-a-Loreto-nun-banner.jpg?1718942294'
            },

            {
                year: "1934",
                event: "Named principal of girls school in kolkata",
                img: "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/733/original/images.png?1718942372"
            },
            {
                year: "1946",
                event: "Received inner call to serve the poor"
                , img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/734/original/images_%284%29.jfif?1718942438'
            },
            {
                year: "1950",
                event: "Established missionary of charity"
                , img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/735/original/ezgif.com-webp-to-jpg-converter.jpg?1718942544'
            },
            {
                year: "1952",
                event: "Opened home for dying destitute in kolkata"
                , img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/736/original/mother-teresas-home-for-the-dying-destitute-nirmal-hriday-EH6HE6.jpg?1718942595'
            },
            {
                year: "1965",
                event: "Received pontificial approval for her order"
                , img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/738/original/Pontincal_Call.jpg?1718942764'
            },
            {
                year: "1971",
                event: "Receiveed first pope John XXIII Peace Price established first U.S foundation of her order"
                , img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/740/original/pope-awards-peace-prize-to-mother-teresa-bettmann.jpg?1718942819'
            },
            {
                year: "1979",
                event: "Mother Teresa was awarded the Nobel Peace Prize for her tireless efforts to alleviate the suffering of the poor and marginalized.",
                img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/742/original/20231210100102_art.jpg?1718942876'
            },
            {
                year: "1980s - 1990s",
                event: "Resigned as head of order, but reelected in unanimous vote",
                img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/732/original/Mother-Teressa-as-a-Loreto-nun-banner.jpg?1718942294'
            },
            {
                year: "1997",
                event: "Turned over leadership of the order to Sister Nirmala. She died in Kolkata on September 5. "
                , img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/744/original/Turns_over_Leadership.jpg?1718943581'
            },

            {
                year: "2003",
                event: "Beautified by Pope John Paul II."
                , img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/746/original/mother_teresa_cc_img.jpg?1718944274'
            },
            {
                year: "2016",
                event: "Elevated to sainthood.",
                img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/129/747/original/Elevated_to_sainthood.jpg?1718944561'
            }
        ];

        const timelineContainer = document.getElementById("ag-timeline-carousel");

        // Populate the timeline
        timelineEvents.forEach(event => {
            // Create the list item
            const listItem = document.createElement("li");

            // Create the year div
            const yearDiv = document.createElement("div");
            yearDiv.classList.add("ag-timeline_year");
            yearDiv.textContent = event.year;

            // Create the text div
            const textDiv = document.createElement("div");
            textDiv.classList.add("ag-timeline_text");
            textDiv.innerHTML = `
    <p>${event.event}</p>
    <div class="immc">
      <div class="imgcar">
        <div class="carflex">

        <div class="imgcarthree">
        ${event.img ?
                    (
                        `<img src="${event.img}" alt="" loading="lazy"></img>`
                    )
                    :
                    ('')
      