let links = document.querySelectorAll(".sidebar nav ul li a"),
    pages = document.querySelectorAll(".content .sections .page"),
    direction = document.querySelector(".content .second-bar .direction"),
    sectionName = document.querySelector(".content .second-bar .direction .section-name");

links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        links.forEach((l) => l.classList.remove("active"));
        pages.forEach((page) => page.classList.remove("active"));

        this.classList.add("active");

        const targetPageClass = this.getAttribute("href").replace("#", "");
        const targetPage = document.querySelector(`.content .sections .${targetPageClass}`);

        if (targetPage) {
            targetPage.classList.add("active");
        }

        let nameSection = this.textContent;
        sectionName.textContent = ` > ${nameSection}`;
    });
});