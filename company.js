/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 * List Projects
 * - bdorf
 * - eichler
 * - schützernverein
 * - hausrock
 * - bedorf2
 * - wilke spine
 * - module base
 * - moodle
 * - theresienstadt
 * - iwrm
 * - owl
 * - 
 */

i18next.init({
    lng: 'de',
    debug: true,
    resources: {
        en: {
            translation: {
                "claim": "concerted machines for human collaboration",
                "section-dev": "Development",
                "section-training": "Training",
                "section-consulting": "Consulting",
                "section-ref": "References",
                "section-stats": "A few stats about us",
                "section-contact": "Contact us today",
                "contact": "Contact",
                "dev-short": "",
                "training-short": "",
                "consulting-short": "",
                "dev-desc": "",
                "training-desc": "",
                "consulting-desc": "",
                "more": "more",
                "form-send": "send",
                "ceo": "CEO: ",
                "phone": "Phone: ",
                "email": "eMail: ",
                "stat-experience": "Years of experience",
                "stat-clients": "Clients served",
                "stat-developer": "Experienced developers",
                "stat-projects": "Projects delivered",
                "ref-moodle": "Vi moodle is the first video database that can be integrated into the world leading open source learning environment. Further more, Vi-Moodle provides capabilities for video annotations such as commenting, tagging, and hyperlinking.",
                "ref-iwrm": "",
                "ref-scrivico": "Scripted Video Collaboration (SCRIVICO) is an advanced digital learning environment for collaborative video-based learning. SCRIVICO is dedicated for teachers with high demands in activating students for learning in groups online. Complex tasks will be broken down and structured into meaningful learning activities: <ul><li>individual and peer assessment</li><li>video analysis and in-video annotations</li><li>comments and disscussions</li></ul>",
                "ref-terezin": "The project Theresienstadt explained aims to make the Nazi propaganda film \"Theresienstadt: Eine Dokumentation aus dem Jüdischen Siedlungsgebiet\" accessible for learning purposes. Therefore we  identified people, places and the intrinsic propaganda and augmented time-related background information to the film. As a result we could yield learning results for those who were not familiar with the depicted information and their hidden meanings. For educational purposes we aim at three use cases: (1) supporting interactive live screenings by navigational aids and augmented data (e.g.at the memorial state or at the volunteer - led Youth Centre in Terezin); (2) individual self regulated learning in the web for an international audience; (3) scripted collaborative learning in small groups by analysing and discussing the film at school.",
                "ref-module": "The module base is an analytics instrument for universities and highschools. The tool aims to make semantical relation between courses and lectures visible. On the one side the Module Base supports teachers to identify overlapping learning contents and to collaborate with colleagues. Students on the otherside, can use the Module Base as a planing tool for developing skills and competencies through analysing course relations."
            }
        },
        de: {
            translation: {
                "claim": "concerted machines for human collaboration",
                "section-dev": "Entwicklung",
                "section-training": "Training",
                "section-consulting": "Beratung",
                "section-ref": "Referenzen",
                "section-stats": "Zahlen",
                "section-contact": "Kontaktieren Sie uns",
                "contact": "Kontakt",
                "more": "mehr",
                "form-send": "absenden",
                "ceo": "Geschäftsführer: ",
                "phone": "Telefon: ",
                "email": "E-Mail: ",
                "dev-short": "Wir entwickeln Ihnen maßgeschneiderte und nutzerzentrierte Software-Lösungen für kollaborative Anwendungenszenarien im Web und im Internet of Things.",
                "training-short": "Wir verfügen über langjährige Erfahrung mit digitalen Bildungsangeboten und der Aufbereitung ansprechender Lernmedien. Wir bieten Ihnen oder Ihren Kunden individuelle, Online- oder Präsenzlerneinheiten, um Kenntnisse zu vermitteln, Wissen zu vertiefen und Gelerntes praxisnah auf Ihr konkretes Vorhaben anzuwenden.",
                "consulting-short": "Egal wie weit Ihr IT Projekt gediehen ist, wir können Ihnen helfen Anforderungen zu identifizieren, Design Entscheidungen zu treffen, die Software Architektur zu optimieren oder die Usability den Bedürfnissen Ihrer Zielgruppe anzupassen.",
                "dev-desc": "",
                "training-desc": "",
                "consulting-desc": "",
                "stat-experience": "Jahre Erfahrung",
                "stat-clients": "Kunden",
                "stat-developer": "Erfahrene Entwickler",
                "stat-projects": "Abgeschlossene Projekte",
                "ref-moodle": "Vi moodle is the first video database that can be integrated into the world leading open source learning environment. Further more, Vi-Moodle provides capabilities for video annotations such as commenting, tagging, and hyperlinking.",
                "ref-iwrm": "",
                "ref-scrivico": 'Scripted Video Collaboration (SCRIVICO) is an advanced digital learning environment for collaborativ video-based learning.',
                "ref-terezin": "The project Theresienstadt explained aims to make the Nazi propaganda film \"Theresienstadt: Eine Dokumentation aus dem Jüdischen Siedlungsgebiet\" accessible for learning purposes. Therefore we  identified people, places and the intrinsic propaganda and augmented time-related background information to the film. As a result we could yield learning results for those who were not familiar with the depicted information and their hidden meanings. For educational purposes we aim at three use cases: (1) supporting interactive live screenings by navigational aids and augmented data (e.g.at the memorial state or at the volunteer - led Youth Centre in Terezin); (2) individual self regulated learning in the web for an international audience; (3) scripted collaborative learning in small groups by analysing and discussing the film at school.",
                "ref-module": "The module base is an analytics instrument for universities and highschools. The tool aims to make semantical relation between courses and lectures visible. On the one side the Module Base supports teachers to identify overlapping learning contents and to collaborate with colleagues. Students on the otherside, can use the Module Base as a planing tool for developing skills and competencies through analysing course relations."
            }
        }
    }
}, function (err, t) {
    // init set content
    updateContent();
});

function updateContent() {
    for (i = 0; i < document.querySelectorAll('[data-i18n]').length; i++) {
        document.querySelectorAll('[data-i18n]')[i].innerHTML = i18next.t(document.querySelectorAll('[data-i18n]')[i].getAttribute("data-i18n"));
    }
}

function changeLng() {
    $('#changeLanguage').text(i18next.language);
    var lang = i18next.language === 'de' ? 'en' : 'de';
    i18next.changeLanguage(lang);
}

i18next.on('languageChanged', () => {
    updateContent();
});

(function ($) {
    $(document).ready(function () {
        i18next.changeLanguage('en');
        $('#lang_de').hide();
    });
})(jQuery);

/**/
(function ($) {

    $.fn.parallax = function (options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed: 0.15
        }, options);

        // Iterate over each object in collection
        return this.each(function () {

            // Save a reference to the element
            var $this = $(this);

            // Set up Scroll Handler
            $(document).scroll(function () {

                var scrollTop = $(window).scrollTop();
                var offset = $this.offset().top;
                var height = $this.outerHeight();

                // Check if above or below viewport
                if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                    return;
                }

                var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                // Apply the Y Background Position to Set the Parallax Effect
                $this.css('background-position', 'center ' + yBgPosition + 'px');

            });
        });
    }
}(jQuery));

//$('.bg-1,.bg-3').parallax({ speed: 0.15 });

//$('.bg-2').parallax({ speed: 0.25 });


