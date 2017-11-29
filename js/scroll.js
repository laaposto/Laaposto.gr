$(document).ready(function ($) {
    var chart;
    var waypoint = new Waypoint({
        element: $('#trigger1'),
        handler: function (direction) {
            if (direction === "down") {

                var skills = [
                    {
                        key: "Skills",
                        values: [
                            {
                                "label": "JS",
                                "value": 5
                            }
                        ]
                    }
                ];
                var left;
                if ($('.imagine').css('font-size') === "25px") {
                    left = 65;
                }
                else {
                    left = 135;
                }

                nv.addGraph(function () {
                    chart = nv.models.discreteBarChart()
                        .x(function (d) {
                            return d.label
                        })
                        .y(function (d) {
                            return d.value
                        })
                        .staggerLabels(true)
                        //.staggerLabels(historicalBarChart[0].values.length > 22)
                        .tooltips(false)
                        .showValues(false)
                        .forceY([1, 5])
                        .margin({"left": left, "top": 50})
                        .duration(1000)
                        .color(["#4285f4"]);

                    chart.yAxis
                        .tickValues([1, 2, 3, 4, 5])
                        .tickFormat(function (d) {
                            var name;
                            switch (d) {
                                case 1:
                                    name = "";
                                    break;
                                case 2:
                                    name = "FAMILIAR";
                                    break;
                                case 3:
                                    name = "PROFICIENT";
                                    break;
                                case 4:
                                    name = "EXPERT";
                                    break;
                                case 5:
                                    name = "NINJA";
                                    break;
                            }
                            return name;
                        });

                    d3.select('#chart1 svg')
                        .datum(skills)
                        .call(chart);

                    nv.utils.windowResize(function () {
                        if ($('.imagine').css('font-size') === "25px") {
                            chart.margin({"left": 65, "top": 50});
                        }
                        else {
                            chart.margin({"left": 135, "top": 50});
                        }
                        chart.update();
                    });

                    return chart;
                });

                setTimeout(function () {
                    skills[0].values.push({"label": "CSS3", "value": 4});

                    d3.select('#chart1 svg')
                        .datum(skills)
                        .call(chart);


                }, 700);
                setTimeout(function () {
                    skills[0].values.push({"label": "HTML5", "value": 4});

                    d3.select('#chart1 svg')
                        .datum(skills)
                        .call(chart);


                }, 1400);
                setTimeout(function () {
                    skills[0].values.push({"label": "jQuery", "value": 5});

                    d3.select('#chart1 svg')
                        .datum(skills)
                        .call(chart);


                }, 2100);
                setTimeout(function () {
                    skills[0].values.push({"label": "D3", "value": 3});

                    d3.select('#chart1 svg')
                        .datum(skills)
                        .call(chart);


                }, 2800);
                setTimeout(function () {
                    skills[0].values.push({"label": "JAVA", "value": 4});

                    d3.select('#chart1 svg')
                        .datum(skills)
                        .call(chart);


                }, 3500);
                setTimeout(function () {
                    skills[0].values.push({"label": "SQL", "value": 3});

                    d3.select('#chart1 svg')
                        .datum(skills)
                        .call(chart);


                }, 4200);
                if (waypoint) {
                    waypoint.disable();
                }
            }
        },
        offset: -100
    });

    var waypoint2 = new Waypoint({
        element: $('#chart1'),
        handler: function (direction) {
            if (direction === "down") {
                $('.fourth-section .img-3d1').animate({left: 0}, 1000);
                if (waypoint2) {
                    waypoint2.disable();
                }
            }
        },
        offset: -100
    });

    var waypoint3 = new Waypoint({
        element: $('.fourth-section'),
        handler: function (direction) {
            if (direction === "down") {
                $('.fifth-section .img-3d2').animate({right: 0}, 1000);
                if (waypoint3) {
                    waypoint3.disable();
                }
            }
        },
        offset: -100
    });

    var waypoint4 = new Waypoint({
        element: $('.fifth-section'),
        handler: function (direction) {
            if (direction === "down") {
                $('.sixth-section .img-3d1').animate({left: 0}, 1000);
                if (waypoint4) {
                    waypoint4.disable();
                }
            }
        },
        offset: -100
    });

    var waypoint5 = new Waypoint({
        element: $('.sixth-section'),
        handler: function (direction) {
            if (direction === "down") {
                $('.seventh-section .img-3d2').animate({right: 0}, 1000);
                if (waypoint5) {
                    waypoint5.disable();
                }
            }
        },
        offset: -100
    });


    if ($('.first-section').innerHeight() + 120 > $(window).innerHeight()) {
        $("#trigger1").css({top: 'auto', 'margin-top': '-150px'});
        $(".name").css({'padding-top': 0});
        $(".undername").css({'padding': '10px 0px 20px 0px'});
        $(".large-text").css({'margin-bottom': 0});
        $(".navbar").css({'margin-bottom': '10px'});
        $("#icon").css({'padding': '15px 0 10px 0'});
    }
    else {
        $("#trigger1").css({top: '50%', 'margin-top': '0px'});
        $(".name").css({'padding-top': '90px'});
        $(".undername").css({'padding': '10px 0px 50px 0px'});
        $(".large-text").css({'margin-bottom': '15px'});
        $("#icon").css({'padding': '30px 0 15px 0'});
        $(".navbar").css({'margin-bottom': '16px'});
    }
    if ($('.imagine').css('font-size') === '25px') {
        $('.img-3d2').addClass('unmargin');
    }
    if ($(window).width() < 870) {
        $('.cd-timeline-img').addClass('toped');
        $('.copyright li').addClass('block');
    }


    // init controller
    var controller = new ScrollMagic();

    // build tween
    var tween = TweenMax.to(".scroll", 1, {opacity: 0});
    //var tween2 = TweenMax.to(".relative", 1, {opacity: 0,top: 420});


    // build scene and supply getWindowHeight function as duration
    var scene = new ScrollScene({triggerElement: "#trigger1", duration: $('.first-section').innerHeight()})
        .setTween(tween)
        .addTo(controller);

    var doit;
    $(window).on("resize", function () {
        clearTimeout(doit);
        doit = setTimeout(resizedw, 200);
    });

    $(window).scroll(function (e) {

        var scrolled = $(window).scrollTop();
        if ($('.first-section').innerHeight() > $(window).innerHeight()) {
            scrolled = 0;
        }
        $('.scroll').css('top', scrolled + 'px');

    });
    function resizedw() {
        if ($('.first-section').innerHeight() + 150 > $(window).innerHeight()) {
            $("#trigger1").css({top: 'auto', 'margin-top': '-150px'});
            $(".name").css({'padding-top': 0});
            $(".undername").css({'padding': '10px 0px 20px 0px'});
            $(".large-text").css({'margin-bottom': 0});
            $(".navbar").css({'margin-bottom': '10px'});
            $("#icon").css({'padding': '15px 0 10px 0'});
        }
        else {
            $("#trigger1").css({top: '50%', 'margin-top': '0px'});
            $(".name").css({'padding-top': '90px'});
            $(".undername").css({'padding': '10px 0px 50px 0px'});
            $(".large-text").css({'margin-bottom': '15px'});
            $("#icon").css({'padding': '30px 0 15px 0'});
            $(".navbar").css({'margin-bottom': '16px'});
        }
        if ($('.imagine').css('font-size') === '25px') {
            $('.img-3d2').addClass('unmargin');
        }
        else {
            $('.img-3d2').removeClass('unmargin');
        }
        if ($(window).width() < 870) {
            $('.cd-timeline-img').addClass('toped');
            $('.copyright li').addClass('block');
        }
        else {
            $('.cd-timeline-img').removeClass('toped');
            $('.copyright li').removeClass('block');
        }
        scene.refresh();
    }

    $(".navbar li").click(function () {

        switch ($(this).text()) {
            case "SKILLS":
                $('html,body').animate({scrollTop: $(".upper-line").offset().top});
                break;
            case "WORK":
                $('html,body').animate({scrollTop: $(".fourth-section").offset().top});
                break;
            case "RESUME":
                $('html,body').animate({scrollTop: $("#cd-timeline").offset().top});
                break;
        }


    });


});