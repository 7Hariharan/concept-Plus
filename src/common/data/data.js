let layoutData = {
    ppl_logo: "../images/People-logo.png",

    navList: [{
            icn: "IC-home",
            txt: "Home",
            onclick: "../home/",
        },
        {
            icn: "PI_org",
            txt: "Org",
            onclick: "../org/",
        },
        {
            icn: "IC-timely",
            txt: "Timely",
            active: "active",
            onclick: "../timely/",
        },
        {
            icn: "IC-Pms",
            txt: "PMS",
            onclick: "../pms/",
        },
        {
            icn: "IC-Lms",
            txt: "LMS",
            onclick: "../lms/",
        },
        {
            icn: "IC-Setng2",
            txt: "Services",
            onclick: "../services/",
        },
        {
            icn: "IC-Rprt",
            txt: "Reports",
            pl_rep: "pl_rep",
            onclick: "../reports/",
        }
        // {
        //     icn : "IC-Setng1",
        //     txt : "Settings",
        //     pl_rep : "pl_setng"
        // }
    ],
    searchNav: [{
        clss: 'pl_pic pl_psz30',
        img: '../images/users/zp-02.jpg'
    }]
}
let topmenudata = {
    htopSecNav: [{
            txt: "Dashboard",
            icn: 'IC-attandance',
            active: "active",
            onc: "secnav('dshbrd',this)"
        },
        {
            txt: "Self-Service",
            icn: 'PI_timetracker',
            span: {
                clss: "",
                txt: 7
            },
            onc: "secnav('slfSrvc', this)"
        },
        {
            txt: "People",
            icn: "IC-leave",
            onc: "secnav('pplId', this)"
        },
        {
            txt: "ToDo's",
            icn: "IC-trail",
            span: {
                clss: "pl_mrc",
                txt: 4
            },
            onc: "secnav('todoHme', this)"
        },
        {
            txt: "My Requests",
            icn: "IC-formcustom",
            onc: "secnav('myReqHme', this)"
        }
    ],
    ttopSecNav: [{
            txt: "My Data",
            // icn: 'IC-attandance',
            active: "active"
        },
        {
            txt: "My Team",
            span: {
                clss: "",
                txt: 7
            }
            // icn: 'PI_timetracker',
        },
        {
            txt: "Todo's"
                // icn: "IC-leave"
        },
        {
            txt: "My Requests",
            span: {
                clss: "pl_mrc",
                txt: 4
            }
            // icn: "IC-trail",
        }
    ],
    otopSecNav: [{
            txt: "Announcement",
            icn: 'PI_timetracker',
            active: "active",
            onc: "secnav('orgAnnounce', this)"
        },
        {
            txt: "Org",
            icn: 'IC-attandance',
            onc: "secnav('orgTree',this)"
        },
        {
            txt: "Files",
            icn: "IC-trail",
            onc: "secnav('orgFiles', this)"
        },
        {
            txt: "Cases",
            icn: "IC-leave",
            onc: "secnav('orgCases', this)"
        },
        {
            txt: "Assessment",
            icn: "IC-formcustom",
            onc: "secnav('orgAssmt', this)"
        }
    ],
    ptopSecNav: [{
            txt: "My Data",
            icn: 'IC-attandance',
            active: "active"
        },
        {
            txt: "My Team",
            icn: 'PI_timetracker',
            span: {
                clss: "",
                txt: 7
            }
        },
        {
            txt: "Appraisal",
            icn: "IC-leave"
        },
        {
            txt: "Continous Review",
            icn: "IC-trail",
            span: {
                clss: "pl_mrc",
                txt: 4
            }
        }
    ],
    rtopSecNav: [{
            txt: "My Reports",
            icn: 'IC-attandance',
            active: "active"
        },
        {
            txt: "Team Reports",
            icn: 'PI_timetracker',
            span: {
                clss: "",
                txt: 7
            }
        },
        {
            txt: "Admin Reports",
            icn: "IC-leave"
        },
        {
            txt: "Ex Employee Reports",
            icn: "IC-trail",
            span: {
                clss: "pl_mrc",
                txt: 4
            }
        }
    ],

    topSecNavTest: [{
            txt: "My data",
            icn: 'IC-formcustom',
            active: "active",
            onc: "showmenu('expmydata',this)"
        },
        {
            txt: "My Team",
            icn: 'IC-team',
            hid: 'nop pl_DN',
            onc: "showmenu('expteam',this)"
        },
        {
            txt: "Todo's",
            icn: "IC-today",
            hid: 'nop pl_DN',
            onc: "showmenu('exptodos',this)"
        },
        {
            txt: "My Requests",
            icn: "PI_timetracker",
            onc: "showmenu('exprequest',this)"
        }
    ],
}