const characters = {

    kaizen:{

        image: "../assest/kaizen.jpg",

        name:"Kaizen",

        class:"Shadow Assassin",

        ability:"Shadow Step",

        description:"Master of silent assassination.",

        power:95,

        attack:90,

        defense:85,

        speed:98

    },

    rayko:{

        image:"../assest/rayko.jpg",

        name:"Rayko",

        class:"Night Ghost",

        ability:"Dark Slash",

        description:"A ronin who walks only at night.",

        power:92,

        attack:88,

        defense:80,

        speed:84

    },

    azula:{

        image:"../assest/azula.jpg",

        name:"Azula",

        class:"Sword Goddess",

        ability:"Divine Strike",

        description:"Blessed by the ancient spirits.",

        power:97,

        attack:95,

        defense:75,

        speed:91

    },

    akuma:{

        image:"../assest/akuma2.jpg",

        name:"Akuma",

        class:"Blood Master",

        ability:"Blood Rage",

        description:"Feeds on the fear of enemies.",

        power:99,

        attack:99,

        defense:88,

        speed:70

    },

    ryoshi:{

        image: "../assest/ryoshi.jpg" ,

        name:"Ryoshi",

        class:"Energy God",

        ability:"Storm Fury",

        description:"Fastest warrior of the empire.",

        power:90,

        attack:87,

        defense:82,

        speed:100

    }

}

const cards=document.querySelectorAll(".character-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

cards.forEach(c=>c.classList.remove("active"));

card.classList.add("active");

const heroImg = document.getElementById("hero");

heroImg.style.opacity = "0";
heroImg.style.transform = "scale(.95)";

setTimeout(() => {

    heroImg.src = hero.image;

    heroImg.style.opacity = "1";
    heroImg.style.transform = "scale(1)";

}, 250);

const hero=characters[card.dataset.character];

document.getElementById("name").textContent=hero.name;

document.getElementById("class").textContent=hero.class;

document.getElementById("ability").textContent=hero.ability;

document.getElementById("description").textContent=hero.description;

document.getElementById("power").style.width=hero.power+"%";

document.getElementById("attack").style.width=hero.attack+"%";

document.getElementById("defense").style.width=hero.defense+"%";

document.getElementById("speed").style.width=hero.speed+"%";

});

});