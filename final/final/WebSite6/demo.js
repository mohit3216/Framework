
var handleSetMessageStatus = function() {
        "use strict";
        $('[data-click="set-message-status"]').on("click", function(e) {
            e.stopPropagation(), e.preventDefault();
            var t = $(this).attr("data-status"),
                a = "Mark as Read";
            "read" == t ? ($(this).removeClass("read"), $(this).attr("data-status", "unread")) : ($(this).addClass("read"), $(this).attr("data-status", "read"), a = "Mark as Unread"), $(this).tooltip("hide").attr("data-original-title", a).tooltip("fixTitle")
        })
    },
    handleNotificationClicked = function() {
        "use strict";
        $('[data-click="toggle-notify"]').on("click", function() {
            $(this).addClass("read")
        })
    },
    handleScheduleCalendar = function() {
        "use strict";
        var e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            t = ["S", "M", "T", "W", "T", "F", "S"],
            a = new Date,
            i = a.getMonth() + 1,
            s = a.getFullYear(),
            r = [
                ["4/" + i + "/" + s, "Client Meeting", "#", "#17B6A4", '<address class="m-b-0 text-inverse f-s-12">   <strong>Twitter, Inc.</strong><br />   795 Folsom Ave, Suite 600<br />   San Francisco, CA 94107 <br />   P: (123) 456-7890</address>'],
                ["7/" + i + "/" + s, "Bootstrap.com", "http://www.getbootstrap.com", "#30373e"],
                ["18/" + i + "/" + s, "Popover with HTML Content", "#", "#30373e", 'Some contents here <div class="text-right"><a href="http://www.google.com">view more >>></a></div>'],
                ["28/" + i + "/" + s, "Source Admin Launched", "http://www.seantheme.com/source-admin-v1.0/", "#30373e"]
            ],
            l = $("#schedule-calendar");
        $(l).calendar({
            months: e,
            days: t,
            events: r,
            tooltip_options: {
                placement: "top",
                html: !0,
                container: "body"
            },
            popover_options: {
                placement: "top",
                html: !0,
                container: "body"
            }
        })
    },
    handleThemePanel = function() {
        "use strict";
        $('[data-click="header-theme-selector"]').click(function(e) {
            e.preventDefault();
            var t = $(this).attr("data-value"),
                a = "#header",
                i = $(a).attr("data-current-theme");
            i || (i = "navbar-default"), "navbar-inverse" == t ? $(a).find(".logo").attr("src", "assets/img/logo-white.png") : $(a).find(".logo").attr("src", "assets/img/logo.png"), $('[data-click="header-theme-selector"]').not(this).closest("li").removeClass("active"), $(this).closest("li").addClass("active"), $(a).removeClass(i), $(a).addClass(t), $(a).attr("data-current-theme", t), $.cookie("header-theme", t)
        }), $('[data-click="sidebar-highlight-selector"]').click(function(e) {
            e.preventDefault();
            var t = $(this).attr("data-value"),
                a = ".sidebar",
                i = $(a).attr("data-current-highlight");
            $('[data-click="sidebar-highlight-selector"]').not(this).closest("li").removeClass("active"), $(this).closest("li").addClass("active"), $(a).removeClass(i), $(a).addClass(t), $(a).attr("data-current-highlight", t), $.cookie("sidebar-highlight", t)
        }), $('[data-click="sidebar-theme-selector"]').click(function(e) {
            e.preventDefault();
            var t = $(this).attr("data-value"),
                a = ".sidebar, .sidebar-bg",
                i = $(a).attr("data-current-theme");
            $('[data-click="sidebar-theme-selector"]').not(this).closest("li").removeClass("active"), $(this).closest("li").addClass("active"), $(a).removeClass(i), $(a).addClass(t), $(a).attr("data-current-theme", t), $.cookie("sidebar-theme", t)
        }), $('[data-click="body-font-family"]').click(function(e) {
            e.preventDefault();
            var t = $(this).attr("data-value"),
                a = "body",
                i = $(this).attr("data-src"),
                s = $(a).attr("data-current-font-family");
            $('[data-click="body-font-family"]').not(this).removeClass("active"), $(this).addClass("active"), $(a).removeClass(s), $(a).addClass(t), $(a).attr("data-current-font-family", t), $("#fontFamilySrc").attr("href", i), $.cookie("body-font-family", t)
        }), $('[data-click="theme-panel-expand"]').click(function(e) {
            e.preventDefault(), $(".theme-panel").hasClass("expand") ? $(".theme-panel").removeClass("expand") : $(".theme-panel").addClass("expand")
        })
    },
    handlePageLoadThemeSelect = function() {
        "use strict";
        if ($.cookie && $.cookie("header-theme") && 0 !== $(".header").length) {
            var e = $.cookie("header-theme"),
                t = ".header",
                a = $(t).attr("data-current-theme"),
                i = '[data-click="header-theme-selector"][data-value="' + e + '"]';
            a || (a = "navbar-default"), "navbar-inverse" == e ? $(t).find(".logo").attr("src", "assets/img/logo-white.png") : $(t).find(".logo").attr("src", "assets/img/logo.png"), $('[data-click="header-theme-selector"]').not(i).closest("li").removeClass("active"), $(i).closest("li").addClass("active"), $(t).removeClass(a), $(t).addClass(e), $(t).attr("data-current-theme", e)
        }
        if ($.cookie && $.cookie("sidebar-highlight") && 0 !== $(".sidebar").length) {
            var e = $.cookie("sidebar-highlight"),
                t = ".sidebar",
                a = $(t).attr("data-current-highlight"),
                i = '[data-click="sidebar-highlight-selector"][data-value="' + e + '"]';
            $('[data-click="sidebar-highlight-selector"]').not(i).closest("li").removeClass("active"), $(i).closest("li").addClass("active"), $(t).removeClass(a), $(t).addClass(e), $(t).attr("data-current-highlight", e)
        }
        if ($.cookie && $.cookie("sidebar-theme") && 0 !== $(".sidebar").length) {
            var e = $.cookie("sidebar-theme"),
                t = ".sidebar",
                a = $(t).attr("data-current-theme"),
                i = '[data-click="sidebar-theme-selector"][data-value="' + e + '"]';
            $('[data-click="sidebar-theme-selector"]').not(i).closest("li").removeClass("active"), $(i).closest("li").addClass("active"), $(t).removeClass(a), $(t).addClass(e), $(t).attr("data-current-theme", e)
        }
        if ($.cookie && $.cookie("body-font-family") && 0 !== $("body").length) {
            var e = $.cookie("body-font-family"),
                t = "body",
                a = $(t).attr("data-current-font-family"),
                s = '[data-click="body-font-family"][data-value="' + e + '"]',
                r = $(s).attr("data-src");
            $('[data-click="body-font-family"]').not(s).removeClass("active"), $(s).addClass("active"), $(t).removeClass(a), $(t).addClass(e), $(t).attr("data-current-font-family", e), $("#fontFamilySrc").attr("href", r)
        }
    },
    Demo = function() {
        "use strict";
        return {
            init: function() {
                handleSetMessageStatus(), handleNotificationClicked(), handleScheduleCalendar(), handleThemePanel(), handlePageLoadThemeSelect()
            },
            initThemePanel: function() {
                handleThemePanel(), handlePageLoadThemeSelect()
            },
            initRightSidebar: function() {
                handleScheduleCalendar()
            },
            initTopMenu: function() {
                handleSetMessageStatus(), handleNotificationClicked()
            }
        }
    }();