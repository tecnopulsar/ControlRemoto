(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return (root.DigitalData = factory());
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = root.DigitalData = factory();
    } else {
        root.DigitalData = factory();
    }
})
(this, function() {
    const DigitalData = {};

    interaction = {};
    user = {};
    session = {};
    page = {};

    eventType = {
        click: "Click",
        slide: "Slide",
        scroll: "Scroll",
        search: "Search",
        starForm: "StarForm",
        sendForm: "SendForm",
        videos: "Videos"
    };

    test = function() {
        alert(JSON.stringify(interaction));
    };

    getAction = function(v) {
        if (v.hasClass("ant-button") || v.hasClass("ant-link") || v.hasClass("ant-select") || v.hasClass("ant-menu")) {
            return "Click";
        }
    };

    getCategory = function(v) {
        if (v.hasClass("ant-button")) {
            return "Button";
        }

        if (v.hasClass("ant-link")) {
            return "Link";
        }

        if (v.hasClass("ant-select")) {
            return "DropDown";
        }

        if (v.hasClass("ant-menu")) {
            return "Menu";
        }
    };

    setInteraction = function(eventCategory, eventAction, eventLabel, eventValue, customDimension) {
        interaction = {
            timeStamp: $.now(),
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel,
            eventValue: eventValue,
            customDimension: customDimension
        };

        $.event.trigger({
            type: 'interactionChange',
            message: interaction
        });
    };

    setUser = function(id, account) {
        user = {
            userId: id,
            account: account
        };

        $.event.trigger({
            type: 'userChange',
            message: user
        });
    };

    setSession = function() {
        session = {
            sessionID: 0,
            isUserLogged: false,
            sessionLandingPage: "",
            sessionExitPage: "",
            sessionTimestamp: "",
            lastSession: "",
            deviceCategory: "",
            city: "",
            country: "",
            numberPagesSeen: 0,
            numberEventsDone: 0,
            timeZone: "",
            browser: "",
            weekday: "",
            hourOfTheDay: "",
            operativeSystem: "",
            language: ""
        };

        $.event.trigger({
            type: 'sessionChange',
            message: session
        });
    };

    setPage = function() {
        page = {
            pageName: "",
            url: "",
            timeStamp: "",
            pageType: "",
            pageDomain: "",
            hasForms: false,
            hasVideos: false,
            hasChat: false,
            hasDownloads: false
        };

        $.event.trigger({
            type: 'pageChange',
            message: page
        });
    };

    DigitalData.setActionInteraction = function(c, t) {
        values = [];

        let price = 0;

        try {
            price = c.find('.ant-price')[0].innerText.match(/\d+/g).join("");
        } catch (exception) {
            price = 0;
        }

        let label = "";

        if (t.hasClass("ant-external")) {
            label = t.context.href;
        } else {
            label = t.text().trim() + setValueLevels(c, t);
        }

        label = label.replace(/\n. |\r/g, "");
        label = label.replace(/ {1,}/g," ");

        interaction.customDimension = setCustomDimensions(c, t);

        setInteraction(getAction(t), getCategory(t), label, price, interaction.customDimension);
    };

    setValueLevels = function (c, t) {
        const level = (t.attr("class").split(' ')).filter((el) => el.indexOf('ant-level') !== -1);
        let values = "";

        if (level.length > 0) {
            const numLevel = level[0].split('ant-level').pop();

            for (let i = numLevel-1; i > 0; i--) {
                let find = false;

                while (!find) {
                    t = t.parent();
                    find = t.hasClass('ant-level'+i) ? true : false;

                    if (find && t.find('.ant-value').length > 0 && t.find('.ant-value')[0].innerText !== undefined && t.find('.ant-value')[0].innerText !== null) {
                        values += "|" + t.find('.ant-value')[0].innerText.replace(/ $/, "");
                    }
                }
            }
        }

        return values;
    };

    setCustomDimensions = function(c, t) {
        const customMetrics = {};

        // isPrepaid
        customMetrics.isPrepaid = t.hasClass("ant-prepago") || t.hasClass("ant-prepaid");

        // AdvertContent
        let hasOffer = false;

        if(t.hasClass('ant-offer')){
            hasOffer = true;
        }
        else{
            hasOffer = c.find('.ant-offer-container').size() > 0 ? true : false;
        }

        customMetrics.advertContent = hasOffer;

        // Return the custom Dimensions procesed
        return customMetrics;
    };

    function getDocHeight() {
        const D = document;

        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    function amountScrolled() {
        const winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
        const docheight = getDocHeight();
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        const trackLength = docheight - winheight;

        return Math.floor(scrollTop/trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    }

    const _bp = [];

    window.addEventListener("scroll", function() {
        const scroll = amountScrolled();

        if (!_bp.includes(scroll)) {
            _bp.push(scroll);
            registerScrollPosition(scroll);
        }
    }, false);

    const _arr = [ 10, 25, 50, 75, 100 ];

    function registerScrollPosition(y) {
        if ( _arr.includes(y)) {
            const customDimension = { 'advertContent': "", 'isPrepaid': "" };

            setInteraction("Scroll", page.pageName, y, 0, customDimension);
        }
    }

    DigitalData.buildAntInRichEdit = function(id) {
        if($(id) !== undefined){
            //TODO!!!!!!!!!!!!!!!!!
            $(id +" a").addClass("ant-action ant-link")
        }
    }

    DigitalData.fillPageValues = function() {
        const path = window.location.pathname;

        page.pageName = (path.split("/").pop()).split(".")[0]; // Capitalizar esto
        page.url = window.location.origin + path;
        page.timeStamp = Date.now();
        page.pageType = true; // is a public site?

        const domain = path.split("/");

        domain.pop();
        page.pageDomain = window.location.origin + domain.join("/"); // Concatenar esto

        page.hasForms = document.querySelectorAll('form') > 0 || document.querySelectorAll('input') > 0;
        page.hasVideos = document.querySelectorAll('video') > 0;
        page.hasChat = false;
        page.hasDownload = false; // ??????
    };

    DigitalData.fillUserValues = function() {
        let cookie = undefined
        if(cookie !== undefined){
            let account = {
                accountNumber : "",
                subscriberCountry : "",
                subscriberType : cookie.d5,
                subscriberAge : "",
                subscriberGender : "",
                hasHBO : cookie.d7,
                hasMovieCityPack : cookie.d8,
                hasMoviePackage : cookie.d9,
                hasAdult : cookie.d10,
                typeDeco : "",
                namePackage : ""
            };

            userId = "";

            session.isUserLogged = true;

            setUser(userId, account);
        }
    }

    DigitalData.fillSessionValues = function () {
        session.sessionId = 0; // Este es un numero aleatorio que es unico para identificar la sesion
        session.isUserLogged = false;

        if (session.sessionLandingPage == undefined) {
            session.sessionLandingPage = page.url;
        }

        session.sessionExitPage = ""; // Como puedo saber por donde salio de la web
        session.sessionTimestamp = Date.now();

        if (localStorage.lastSession == undefined) {
            localStorage.lastSession = lastSession = Date.now();
        } else {
            session.lastSession = localStorage.lastSession;
        }

        session.deviceCategory = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) ? "Mobile" : "Desktop";
        session.city = ""; // Pendiente de revisar con OTT
        session.country = ""; // Se captura de la URL

        if (localStorage.numberPagesSeen == undefined) {
            session.numberPagesSeen = 0;
            // Adicionalmente a esto tenemos que ir llevando el conteo cada que cambie de pagina
        }

        if (localStorage.numberEventsDone == undefined) {
            session.numberEventsDone = 0;
            // Adicionalmente a esto tenemos que ir llevando el conteo cada que ejecute un evento
        }

        session.timeZone = ""; // Utilizar momentz.js para obtener la zona horaria
        session.browser = getBrowser();
        session.weekday = getWeekDay(new Date()); 
        session.hourOfTheDay = ""; // Separar la hora del dia
        session.operativeSystem = navigator.platform;
    };

    function getBrowser() {
        let browser = "";

        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
            browser = 'Opera';
        } else if (navigator.userAgent.indexOf("Chrome") != -1 ) {
            browser = 'Chrome';
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            browser = 'Safari';
        } else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
            browser = 'Firefox';
        } else if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) // IF IE > 10
        {
            browser = 'IE';
        } else {
            browser = 'unknown';
        }

        return browser;
    }

    function getWeekDay(date){
        var weekdays = new Array(
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        );
        var day = date.getDay();
        return weekdays[day];
    }

    return DigitalData;
});
