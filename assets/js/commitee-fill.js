var commitee_data = [
    {
        pic_name: "prince-dlamini.jpg",
        name: "Prince Dlamini",
        role: "President",
    },
    {
        pic_name: "white.jpg",
        name: "Paul Papadopoulos",
        role: "Vice President",
    },
    {
        pic_name: "grace-han.jpg",
        name: "Grace Han",
        role: "Treasurer",
    },
    {
        pic_name: "sean-budd.jpg",
        name: "Sean Budd",
        role: "Secretary",
    },
    {
        pic_name: "ishan-joshi.png",
        name: "Ishan Joshi",
        role: "Education Officer",
    },
    {
        pic_name: "surayez-rahman.jpg",
        name: "Surayez Rahman",
        role: "Industry Officer",
    },
    {
        pic_name: "amber-layton.jpg",
        name: "Amber Layton",
        role: "Marketing Officer",
    },
    {
        pic_name: "lachlan-jacob.jpg",
        name: "Lachlan Jacob",
        role: "Activities Officer",
    },
    {
        pic_name: "white.jpg",
        name: "Bridgitte Buhler",
        role: "Activities Officer",
    },
    {
        pic_name: "jord-gui.jpg",
        name: "Jord Gui",
        role: "Activities Officer",
    },
    {
        pic_name: "white.jpg",
        name: "Tahera Shorna",
        role: "Volunteers Lead",
    },
    {
        pic_name: "mariusz-skoneczko.jpg",
        name: "Mariusz Skoneczko",
        role: "First Year Representative",
    },
    {
        pic_name: "james-bathgate.jpg",
        name: "James Bathgate",
        role: "First Year Representative",
    },
    {
        pic_name: "eric-jiang.jpg",
        name: "Eric Jiang",
        role: "Graduate Representative",
    },
    {
        pic_name: "nancy-lu.jpg",
        name: "Nancy Lu",
        role: "General Representative",
    },
    {
        pic_name: "april-chi.png",
        name: "April Chi",
        role: "General Representative",
    },
    {
        pic_name: "shachar-harim.jpg",
        name: "Shachar Harim",
        role: "General Representative",
    },
]


commitee_data.forEach( person => {
    $('<div class="col-md-3 col-xs-6">')
        .append(
            $("<img>")
            .addClass("img-circle")
            .attr("src", "/assets/img/person/" + person.pic_name)
        )
        .append(
            $('<p class="name">').text(person.name)
        )
        .append(
            $('<p class="role">').text(person.role)
        )
        .appendTo(
            $("#our-committee").find(".row")
        );
})
