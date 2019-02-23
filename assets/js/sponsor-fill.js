var sponsor_data = [
    {
        name: "reecetech",
        logo: "reecetech-logo.png",
        level: "platinum",
        description: ["Reece is an Australian story of innovation, growth and success. ",
        "You probably know us as Australia’s largest supplier of plumbing and bathroom products. ",
        "We have been around for almost 100 years, and building on our success in Australia we have recently planted our flag in the USA. ",
        "As of today we employ over 8,000 people across 800 locations in Australia, New Zealand and the US. ",
        "reecetech is the technology group within Reece, with over 180 team members working on everything from digital products for our customers and staff, to core transaction systems that process billions of dollars a year in sales, to data engineering and infrastructure. ",
        "Our aim is to have a world-class, in-house technology capability that will underpin the next chapter of our success over the next 15 years. And you can be a part of it!",
        ].join("")
    },
    {
        name: "IMC",
        logo: "imc-logo.png",
        level: "gold",
    },
    {
        name: "Coles Digital",
        logo: "coles-logo.png",
        level: "gold",
    },
    {
        name: "REA Group",
        logo: "rea-group-logo.png",
        level: "gold",
    },
    {
        name: "carsales.com.au",
        logo: "carsales-logo.jpg",
        level: "gold",
    },
    {
        name: "ReadyGrad",
        logo: "readygrad-logo.svg",
        level: "silver",
    },
    {
        name: "Jane Street",
        logo: "jane-street-logo.png",
        level: "silver",
    },
    {
        name: "Atlassian",
        logo: "atlassian-logo.png",
        level: "silver",
    },
    {
        name: "Accenture",
        logo: "accenture-logo.png",
        level: "silver",
    },
    {
        name: "Microsoft",
        logo: "ms-logo.png",
        level: "bronze",
    },
    {
        name: "Facebook",
        logo: "facebook-logo.png",
        level: "bronze",
    },
    {
        name: "Bosch",
        logo: "bosch-logo.png",
        level: "bronze",
    },
    {
        name: "BCG",
        logo: "bcg-logo.png",
        level: "bronze",
    },
]


sponsor_data.forEach( sponsor => {
    var logo_image = $("<img>")
        .addClass("padd")
        .attr("src", "/assets/img/sponsor/" + sponsor.logo)
        .attr("alt", sponsor.name);
    if (sponsor.level == "platinum"){

        $('<div class="col-sm-3">')
            .append(logo_image)
            .appendTo(
                $("."+sponsor.level).find(".row")
            );
        $('<div class="col-sm-9">')
            .append(
                $('<h4>').text(sponsor.name)
            )
            .append(
                $('<p>').text(sponsor.description)
            )
            .appendTo(
                $("."+sponsor.level).find(".row")
            );
    }
    else {
        $("."+sponsor.level).find(".row")
            .append(logo_image);
    }
})
