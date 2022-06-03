window.addEventListener("load", () => {
    if (screen.width > 768) {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl
            .from(".project_card3", { y: 250, opacity: 0, duration: 0.5 })
            .from(".project_card2", { y: 275, opacity: 0, duration: 0.5 })
            .from(".project_card1", { y: 300, opacity: 0, duration: 0.5 });
        ScrollTrigger.create({
            animation: tl,
            trigger: ".project_card3",
            start: "top 80%",
            end: "top top",
            toggleActions: "restart none resume none",
            // markers: true,
        });
        gsap.to(".para1", {
            scrollTrigger: {
                trigger: ".para1",
                start: "top center",
                end: "top top",
                scrub: true,
            },
            y: 100,
        });
        gsap.to(".para2", {
            scrollTrigger: {
                trigger: ".para1",
                start: "top center",
                end: "top top",
                scrub: true,
            },
            y: 80,
        });
        gsap.to(".para3", {
            scrollTrigger: {
                trigger: ".para1",
                start: "top center",
                end: "top top",
                scrub: true,
            },
            y: 60,
        });
        gsap.to(".para4", {
            scrollTrigger: {
                trigger: ".para1",
                start: "top center",
                end: "top top",
                scrub: true,
                //   markers: true,
            },
            y: 20,
        });
    }
},
    false
);