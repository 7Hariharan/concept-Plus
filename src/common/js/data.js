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
var moduletopmenu = {
    homelanding: [{
        //modulename: "home",
        list: [{
            title: "Dashboard",
            click: "showtabs('home_dash',this)",
            name: "Dashboard",
            class: "zpl_act",
        }, {
            title: "Me",
            click: "showtabs('home_me',this)",
            name: "Me",
            // class: "zpl_act",
        }, {
            title: "Team",
            click: "showtabs('home_team',this)",
            name: "Team",
        }, {
            title: "Organization",
            click: "showtabs('home_organization',this)",
            name: "Organization",
        }, ],
    }],

    leavelanding: [{
        //modulename: "home",
        list: [{
            title: "Me",
            click: "showtabs('todo_me',this)",
            name: "Me",
            class: "zpl_act",
        }, {
            title: "Team",
            click: "showtabs('todo_team',this)",
            name: "Team",
            clas: 'notfiy numb',
            class: "mangvw"
        }, {
            title: "Organization",
            click: "showtabs('todo_org',this)",
            name: "Organization",
            class: "admnvw"
        }, ],
    }],
    timshtlanding: [{
        list: [{
            title: "Me",
            click: "showtabs('home_me',this)",
            name: "Me",
            class: "zpl_act",
        }, {
            title: "Team",
            click: "showtabs('home_team',this)",
            name: "Team",
            class: ""
        }, {
            title: "Organization",
            click: "showtabs('home_organization',this)",
            name: "Organization",
            class: ""
        }, ],
    }],

};
var topMenu = {
    assessment: [{
        modulename: "Assessment Settings",
        list: [{
            title: "Module Configuration",
            click: "showtabs('assess_Config',this)",
            name: "Module Configuration",
            class: "zpl_act",
        }, {
            title: "Forms",
            click: "showtabs('assforms',this)",
            name: "Forms",
        }, {
            title: "Permission",
            click: "showtabs('assesspermission',this)",
            name: "Permission",
        }],
    }],
    attendance: [{
        modulename: "Attendance Settings",
        list: [
            //   {
            //   title: "General",
            //   click: "showtabs('attendancegeneral',this)",
            //   name: "General",
            //   class: "zpl_act",
            // },
            {
                title: "Module Configuration",
                click: "showtabs('attconfiguration',this)",
                name: "Module Configuration",
                class: "zpl_act",
            }, {
                title: "Forms",
                click: "showtabs('attforms',this)",
                name: "Forms",
            }, {
                title: "Permission",
                click: "showtabs('attendancepermission',this)",
                name: "Permission",
            }, {
                title: "Automation",
                click: "showtabs('attendanceautomation',this)",
                name: "Automation",
            }
        ],
    }],
    shifts: [{
        modulename: "Shift Settings",
        list: [{
            title: "Module Configuration",
            click: "showtabs('shiftconfiguration',this)",
            name: "Module Configuration",
            class: "zpl_act",
        }, {
            title: "Forms",
            click: "showtabs('shiftforms',this)",
            name: "Forms",
        }, {
            title: "Automation",
            click: "showtabs('shiftautomation',this)",
            name: "Automation",
        }],
    }],

    leave: [{
        modulename: "Leave Settings",
        list: [
            //   {
            //   title: "General",
            //   click: "showtabs('leavegeneral',this)",
            //   name: "General",
            //   class: "zpl_act",
            // },
            {
                title: "Module Configuration",
                click: "showtabs('leaveconfiguration',this)",
                name: "Module Configuration",
                class: "zpl_act",
            }, {
                title: "Forms",
                click: "showtabs('leaveforms',this)",
                name: "Forms",
            }, {
                title: "Permission",
                click: "showtabs('leavepermission',this)",
                name: "Permission",
            }, {
                title: "Automation",
                click: "showtabs('leaveautomation',this)",
                name: "Automation",
            },
        ],
    }],
    lms: [{
        modulename: "LMS Settings",
        list: [
            //   {
            //   title: "General",
            //   click: "showtabs('lmsgeneral',this)",
            //   name: "General",
            //   class: "zpl_act",
            // },
            {
                title: "Module Configuration",
                click: "showtabs('lms_configuration',this)",
                name: "Module Configuration",
                class: "zpl_act",
            }, {
                title: "Forms",
                click: "showtabs('lmsforms',this)",
                name: "Forms",
            }, {
                title: "Permission",
                click: "showtabs('lmspermission',this)",
                name: "Permission",
            }, {
                title: "Notification",
                click: "showtabs('lms_notification',this)",
                name: "Notification",
            },
        ],
    }],
    files: [{
        modulename: "Files Settings",
        list: [
            //   {
            //   title: "General",
            //   click: "showtabs('files_general',this)",
            //   name: "General",
            //   class: "zpl_act",
            // },
            {
                title: "Module Configuration",
                click: "showtabs('files_general',this)",
                name: "Module Configuration",
                class: "zpl_act",
            },
            {
                title: "Forms",
                click: "showtabs('fileforms',this)",
                name: "Forms",
            }, {
                title: "Permission",
                click: "showtabs('filespermission',this)",
                name: "Permission",
            }
        ],
    }],
    pa: [{
        modulename: "Performance Settings",
        list: [
            //   {
            //   title: "General",
            //   click: "showtabs('pageneral',this)",
            //   name: "General",
            //   class: "zpl_act",
            // },
            {
                title: "Module Configuration",
                click: "showtabs('paconfig',this)",
                name: "Module Configuration",
                class: "zpl_act",
            }, {
                title: "Forms",
                click: "showtabs('paforms',this)",
                name: "Forms",
            }, {
                title: "Permission",
                click: "showtabs('papermission',this)",
                name: "Permission",
            }, {
                title: "Automation",
                click: "showtabs('paautomation',this)",
                name: "Automation",
            },
        ],
    }],
    cases: [{
        modulename: "Cases Settings",
        list: [{
                title: "Module Configuration",
                click: "showtabs('casescategory',this)",
                name: "Module Configuration",
                listid: "casescategory",
                class: "zpl_act",
            },
            {
                title: "Forms",
                click: "showtabs('caseforms',this)",
                name: "Forms",
            },
            {
                title: "Automation",
                click: "showtabs('casesautomation',this)",
                name: "Automation",
                listid: "casesautomation",
            },
            {
                title: "Customization",
                click: "showtabs('casescustomize',this)",
                name: "Customizations",
                listid: "casescustomize",
            }
        ],
    }],
    employee: [{
        modulename: "Employee Settings",
        list: [
            //   {
            //   title: "General",
            //   click: "showtabs('empgeneral',this)",
            //   name: "General",
            //   class: "zpl_act",
            // },
            {
                title: "Module Configuration",
                click: "showtabs('emp_config',this)",
                name: "Module Configuration",
                class: "zpl_act",
            },
            {
                title: "Forms",
                click: "showtabs('empforms',this)",
                name: "Forms",
            },
            {
                title: "Permission",
                click: "showtabs('emppermission',this)",
                name: "Permission",
            },
            {
                title: "Automation",
                click: "showtabs('empautomation',this)",
                name: "Automation",
            }
        ],
    }],
    compensation: [{
        modulename: "Compensation Settings",
        list: [{
            title: "General",
            click: "showtabs('comp_general',this)",
            name: "General",
            class: "zpl_act",
        }, {
            title: "Administrator",
            click: "showtabs('compadmin',this)",
            name: "Administrator",
        }, {
            title: "Permissions",
            click: "showtabs('compperm',this)",
            name: "Permissions",
        }, {
            title: "Utilities",
            click: "showtabs('computility',this)",
            name: "Utilities",
        }],
    }],
    timetracker: [{
        modulename: "Timesheet Settings",
        list: [
            //   {
            //   title: "General",
            //   click: "showtabs('ttgeneral',this)",
            //   name: "General",
            //   class: "zpl_act",
            // },
            {
                title: "Module Configuration",
                click: "showtabs('ttconfiguration',this)",
                name: "Module Configuration",
                class: "zpl_act",
            },
            {
                title: "Forms",
                click: "showtabs('ttforms',this)",
                name: "Forms",
            }, {
                title: "Permission",
                click: "showtabs('ttpermission',this)",
                name: "Permission",
            }, {
                title: "Automation",
                click: "showtabs('ttautomation',this)",
                name: "Automation",
            },
        ],
    }],

    dataadmin: [{
        modulename: "Data Administration",
        list: [{
                title: "Logs",
                click: "showtabs('da_logs',this)",
                name: "Logs",
                class: "zpl_act",
                listid: "da_logs"
            }, {
                title: "Usage",
                click: "showtabs('da_usage',this)",
                name: "Usage",
                listid: "da_usage"
            },
            {
                title: "Copy Customization",
                click: "showtabs('da_copyCustomization',this)",
                name: "Copy Customizationage",
                listid: "da_copyCustomization"
            }
        ],
    }],
    integration: [{
        modulename: "Integration",
        list: [{
                title: "Marketplace",
                click: "showtabs('marketplace',this)",
                name: "Marketplace",
                listid: "marketplace",
            }, {
                title: "Zoho",
                click: "showtabs('zoho',this)",
                name: "Zoho",
                class: "zpl_act",
                listid: "zoho",
            }, {
                title: "Others",
                click: "showtabs('others',this)",
                name: "Others",
                listid: "others",
            }, {
                title: "Connections",
                click: "showtabs('connections',this)",
                name: "Connections",
                listid: "connections",
            },
            {
                title: "Rest API",
                click: "showtabs('rest_api',this)",
                name: "Rest API",
                listid: "rest_api",
            }
        ],
    }],

    adminoprshift: [{
        modulename: "Shift Schedule",
        list: [{
                title: "Shifts",
                click: "showtabs('adminshifts',this)",
                name: "Manage Shifts",
                listid: "adminshifts",
            }, {
                title: "Employee shift mapping",
                click: "showtabs('empshiftmapping',this)",
                name: "Employee shift mapping",
                class: "zpl_act",
                listid: "empshiftmapping",
            },
            // {
            //   title: "Shift Calendart",
            //   click: "showtabs('shftcalndr',this)",
            //   name: "Shift Calendar",
            //   listid: "shftcalndr",
            // }, 
            {
                title: "Shifts change request",
                click: "showtabs('shftchngereq',this)",
                name: "Shift change requests",
                listid: "shftchngereq",
            }
        ],
    }],

    adminoprfiles: [{
        modulename: "Files",
        list: [{
            title: "Organisation Files",
            click: "showtabs('adminfileOrg',this)",
            name: "Organisation File",
            class: "zpl_act",
            listid: "adminfileOrg",
        }, {
            title: "Employee Files",
            click: "showtabs('adminEmp',this)",
            name: "Employee Files",
            listid: "adminsEmp",
        }, {
            title: "HR Forms & Templates",
            click: "showtabs('adminHR',this)",
            name: "HR Forms & Templates",
            listid: "adminHR",
        }, {
            title: "E-Sign Documents",
            click: "showtabs('adminEsign',this)",
            name: "E-Sign Documents",
            listid: "adminEsign",
        }, {
            title: "Folders",
            click: "showtabs('adminFoldr',this)",
            name: "Folders",
            listid: "adminFoldr",
        }],
    }],

    adminoprattendance: [{
        modulename: "Attendance",
        list: [{
            title: "Check in/out",
            click: "showtabs('adcheckinout',this)",
            name: "Punch Import/Export",
            class: "zpl_act",
            listid: "adcheckinout",
        }, {
            title: "Regularization",
            click: "showtabs('adregularisation',this)",
            name: "Regularization",
            listid: "adrsegularisation",
        }, {
            title: "On Duty",
            click: "showtabs('adonduty',this)",
            name: "On Duty",
            listid: "adonduty",
        }, {
            title: "Permissions",
            click: "showtabs('adpermission',this)",
            name: "Permissions",
            listid: "adpermission",
        }, {
            title: "Biometric ID mapping",
            click: "showtabs('adidmapping',this)",
            name: "Biometric ID mapping",
            listid: "adidmapping",
        }],
    }],

    adminoprtimesheet: [{
        modulename: "Timesheet",
        list: [{
                title: "Timelogs",
                click: "showtabs('adtimelogs',this)",
                name: "Timelog import/export",
                class: "zpl_act",
                listid: "adtimelogs",
            }, {
                title: "Clients",
                click: "showtabs('adclients',this)",
                name: "Add Clients",
                listid: "adclients",
            }, {
                title: "Projects",
                click: "showtabs('adprojects',this)",
                name: "Manage Projects",
                listid: "adprojects",
            }, {
                title: "Add Jobs",
                click: "showtabs('adjobs',this)",
                name: "Add Jobs",
                listid: "adjobs",
            }, {
                title: "Schedule Jobs",
                click: "showtabs('adschjobs',this)",
                name: "Schedule Jobs",
                listid: "adschjobs",
            }, {
                title: "Generate and view bills",
                click: "showtabs('adviewbills',this)",
                name: "Generate and view bills",
                listid: "adviewbills",
            },
            // {
            //   title: "Employee RPH definition",
            //   click: "showtabs('adrphdefinition',this)",
            //   name: "Employee RPH definition",
            //   listid: "adrphdefinition",
            // },
            {
                title: "Integrations",
                click: "showtabs('adintegration',this)",
                name: "Integrations ",
                listid: "adintegration",
            }
        ],
        elips: "PI_more",
        adlist: [{
            adtitle: "Integrations",
            adclick: "showtabs('adintegration',this)",
            adname: "Integrations ",
            adlistid: "adintegration",
        }],

    }],

    adminoprlms: [{
        modulename: "Talent tab",
        list: [{
                title: "Rooms",
                click: "showtabs('admin_rooms',this)",
                name: "Rooms",
                listid: "admin_rooms",
                class: "zpl_act",
            }, {
                title: "Trainers",
                click: "showtabs('admin_trainers',this)",
                name: "Trainers",
                listid: "admin_trainers",
            },
            // {
            //     title: "Categories",
            //     click: "showtabs('admin_categories',this)",
            //     name: "Categories",
            //     listid: "admin_categories",
            // },
            // {
            //     title: "Content Management",
            //     click: "showtabs('admin_content',this)",
            //     name: "Content Management",
            //     listid: "admin_content",
            // }
        ],
    }],

    adminoprassessment: [{
        modulename: "Assessment",
        list: [{
            title: "Question Bank",
            click: "showtabs('admopr_qbank',this)",
            name: "Question Bank",
            class: "zpl_act",
            listid: "admopr_qbank",
        }, {
            title: "Import/Export",
            click: "showtabs('admopr_assessIE',this)",
            name: "Import/Export",
            listid: "admopr_assessIE",
        }, {
            title: "Add Question",
            click: "showtabs('questionType',this)",
            name: "Add Question",
            listid: "questionType",
        }],
    }],

    adminoprperformance: [{
        modulename: "Performance",
        list: [{
                title: "Modules",
                click: "showtabs('admopr_pamodules',this)",
                name: "Modules",
                class: "zpl_act",
                listid: "admopr_pamodules",
            }, {
                title: "Appraisal Cycles",
                click: "showtabs('admopr_paappraisalcycles',this)",
                name: "Appraisal Cycles",
                listid: "admopr_paappraisalcycles",
            }, {
                title: "Appraisal Activities",
                click: "showtabs('admopr_paapprausalactivities',this)",
                name: "Appraisal Activities",
                listid: "admopr_paapprausalactivities",
            },
            {
                title: "Continuous Review",
                click: "showtabs('admopr_pacontinuousreview',this)",
                name: "Continuous Review",
                listid: "admopr_pacontinuousreview",
            }, {
                title: "Import/Export",
                click: "showtabs('admopr_paimportexport',this)",
                name: "Import/Export",
                listid: "admopr_paimportexport",
            }
        ],
    }],
    adminopremp: [{
        modulename: "Employee",
        list: [{
            title: "User",
            click: "showtabs('admin_emp_user',this)",
            name: "User",
            class: "zpl_act",
            listid: "admin_emp_user",
        }, {
            title: "Department",
            click: "showtabs('admin_emp_department',this)",
            name: "Department",
            listid: "admin_emp_department",
        }, {
            title: "Designation",
            click: "showtabs('admin_emp_designation',this)",
            name: "Designation",
            listid: "admin_emp_designation",
        }, {
            title: "Profile Pic Upload",
            click: "showtabs('admin_emp_pic',this)",
            name: "Profile Pic Upload",
            listid: "admin_emp_pic",
        }, ],
    }],
    adminoprLeave: [{
        modulename: "Leave",
        list: [{
                title: "Leave Applications",
                click: "showtabs('adoprlvappln',this)",
                name: "Leave Applications",
                listid: "adoprlvappln",
            }, {
                title: "Compensatory Off",
                click: "showtabs('adoprcompoff',this)",
                name: "Compensatory Off",
                listid: "adoprcompoff",
            },
            {
                title: "Leave grant",
                click: "showtabs('adlvgrant',this)",
                name: "Leave Grant",
                listid: "adlvgrant",
            }, {
                title: "Customize Balance",
                click: "showtabs('custbalance',this)",
                name: "Customize Balance",
                class: "zpl_act",
                listid: "custbalance",
            }, {
                title: "Holidays",
                click: "showtabs('adoprholiday',this)",
                name: "Holiday",
                listid: "adoprholiday",
            }, {
                title: "Exceptional Leave",
                click: "showtabs('adoprexcepwork',this)",
                name: "Exceptional working days",
                listid: "adoprexcepwork",
            }
        ],
    }],

    admioprcases: [{
        modulename: "Cases",
        list: [{
            title: "Faq's",
            click: "showtabs('casesfaq',this)",
            name: "Faq's",
            class: "zpl_act",
            listid: "casesfaq",
        }],
    }],
    admiopremphs: [{
        modulename: "Employee Health",
        list: [{
            title: "Emplyee Health Status",
            click: "showtabs('adminaprhealthsts',this)",
            name: "Employee Health Status",
            class: "zpl_act",
            listid: "adminaprhealthsts",
        }, {
            title: "Vaccination Status",
            click: "showtabs('adminaprvccists',this)",
            name: "Vaccination Status",
            listid: "adminaprvccists",
        }],
    }],
    adminofficereadiness: [{
        modulename: "Office Readiness",
        list: [{
            title: "Work from office",
            click: "showtabs('adminaprwfo',this)",
            name: "Work from office",
            class: "zpl_act",
            listid: "adminaprwfo",
        }, {
            title: "Visitor at office",
            click: "showtabs('adminaprvato',this)",
            name: "Visitor at office",
            listid: "adminaprvato",
        }],
    }],
    admopronboarding: [{
        modulename: "Onboarding",
        list: [{
            title: "Candidate Database",
            click: "showtabs('adminobdata',this)",
            name: "Candidate Database",
            class: "zpl_act",
            listid: "adminobdata",
        }, {
            title: "Track Onboarding",
            click: "showtabs('admintrackob',this)",
            name: "Track Onboarding",
            listid: "admintrackob",
        }],
    }],
    officereadiness: [{
        modulename: "Office Readiness",
        list: [{
            title: "General",
            click: "showtabs('officereadigeneral',this)",
            name: "General",
            class: "zpl_act",
            listid: "officereadigeneral",
        }, {
            title: "Automation",
            click: "showtabs('officereadiautomation',this)",
            name: "Automation",
            listid: "officereadiautomation",
        }],
    }],

    orgsetup: [{
        modulename: "Organisation",
        list: [{
                title: "Users",
                click: "showtabs('orgusers',this)",
                name: "Users",
                class: "zpl_act",
                listid: "orgusers",
            }, {
                title: "Company Setup",
                click: "showtabs('compsetup',this)",
                name: "Company Setup",
                listid: "compsetup",
            }, {
                title: "Organisation Structure",
                click: "showtabs('orgstructure',this)",
                name: "Organisation Structure",
                listid: "orgstructure",
            }, //{
            // title: "Service Settings",
            // click: "showtabs('sersettings',this)",
            // name: "Service Settings",
            // listid: "sersettings",
            //},
            {
                title: "Subscription",
                click: "showtabs('subscription',this)",
                name: "Subscription",
                listid: "subscription",
            },
            // {
            //   title: "Career",
            //   click: "showtabs('career',this)",
            //   name: "Career",
            //   listid: "career",
            // }
        ],
    }],

    obsettings: [{
        modulename: "Onboarding",
        list: [{
            title: "Service Configuration",
            click: "showtabs('obconfig',this)",
            name: "Service Configuration",
            class: "zpl_act",
            listid: "ongeneral",
        }, {
            title: "Forms",
            click: "showtabs('obfrmscust',this)",
            name: "Forms",
            listid: "obfrmcust",
        }, {
            title: "Permission",
            click: "showtabs('obpermission',this)",
            name: "Permission",
            listid: "obpermission",
        }, {
            title: "Automation",
            click: "showtabs('obautomation',this)",
            name: "Automation",
            listid: "obautomation",
        }, {
            title: "Utilities",
            click: "showtabs('obutility',this)",
            name: "Utilities",
            listid: "obutility",
        }],
    }],
    offsettings: [{
        modulename: "Offboarding",
        list: [{
            title: "Exit Flow",
            click: "showtabs('offexitflow',this)",
            name: "Exit Flow",
            class: "zpl_act",
            listid: "offexitflow",
        }, {
            title: "General",
            click: "showtabs('offgeneral',this)",
            name: "General",
            listid: "offgeneral",
        }, {
            title: "Permission",
            click: "showtabs('offpermission',this)",
            name: "Permission",
            listid: "offpermission",
        }, {
            title: "Automation",
            click: "showtabs('offautomation',this)",
            name: "Automation",
            listid: "offautomation",
        }],
    }],

    ehs: [{
        modulename: "Employee Health Status",
        list: [{
            title: "General",
            click: "showtabs('ehsgeneral',this)",
            name: "General",
            class: "zpl_act",
            listid: "ehsgeneral",
        }],
    }],
    vaccination: [{
        modulename: "Vaccination Status and Health Record",
        list: [{
            title: "General",
            click: "showtabs('vaccinationgeneral',this)",
            name: "General",
            class: "zpl_act",
            listid: "vaccinationgeneral",
        }],
    }],
    permission: [{
        modulename: "Permission",
        list: [{
                title: "Role",
                click: "showtabs('rolepermission',this)",
                name: "Role",
                class: "zpl_act",
                listid: "rolepermission",
            }, {
                title: "Role Permission",
                click: "showtabs('rolepermissionshow',this)",
                name: "Role Permission",
                // class: "zpl_act",
                listid: "rolepermissionshow",
            },
            {
                title: "Form Permission",
                click: "showtabs('formpermission',this)",
                name: "Form Permission",
                listid: "formpermission",
            }, {
                title: "Global Permissions",
                click: "showtabs('globalpermissions',this)",
                name: "Global Permissions",
                listid: "globalpermissions",
            }, {
                title: "Specific Role Assignment",
                click: "showtabs('specificroleassignment',this)",
                name: "Specific Role Assignment",
                listid: "specificroleassignment",
            }
        ],
    }],
    servicesettings: [{
        modulename: "Service Settings",
        list: [{
            title: "Service",
            click: "showtabs('servicesettings',this)",
            name: "Service",
            class: "zpl_act",
            listid: "servicesettings",
        }, {
            title: "Admin(s)",
            click: "showtabs('serviceadminsettings',this)",
            name: "Admin(s)",
            // class: "zpl_act",
            listid: "serviceadminsettings",
        }],
    }],
    groups: [{
        modulename: "Groups",
        list: [{
            title: "Groups",
            click: "showtabs('groupsettings',this)",
            name: "Groups",
            listid: "groupsettings",
        }],
    }],
    delegation: [{
        modulename: "Delegations",
        list: [{
            title: "Delegation",
            click: "showtabs('delegationsettings',this)",
            name: "Delegation",
            listid: "delegationsettings",
        }],
    }],

    enps: [{
        modulename: "Employee Engagement Settings",
        list: [{
            title: "Module Configuration",
            click: "showtabs('enpsgeneral',this)",
            name: "Module Configuration",
            class: "zpl_act",
            listid: "enpsgeneral",
        },{
            title: "Permission",
            click: "showtabs('enpsPermission',this)",
            name: "Permission",
            listid: "enpsPermission",
        },{
            title: "Notification",
            click: "showtabs('enpsNotification',this)",
            name: "Notification",
            listid: "enpsNotification",
        }],
    }],

    adminoprenps: [{
        modulename: "Employee Engagement",
        list: [{
            title: "Surveys",
            click: "showtabs('admopr_surveys',this)",
            name: "Surveys",
            class: "zpl_act",
            listid: "admopr_surveys",
        }, {
            title: "Categories",
            click: "showtabs('admopr_categories',this)",
            name: "Categories",
            listid: "admopr_categories",
        }, {
            title: "Templates",
            click: "showtabs('admopr_templates',this)",
            name: "Templates",
            listid: "admopr_templates",
        }],
    }],
};

var bottomwidgets = {
    bottomtitles: [{
        modulename: "Integration",
        icons: "PI_pin ylw",
        list: [{
            title: "Marketplace",
            click: "setswitch('settings/integration', 'marketplace', 'settings')",
        }, {
            title: "Zoho",
            click: "setswitch('settings/integration' ,'zoho', 'settings')",
        }, {
            title: "Others",
            click: "setswitch('settings/integration' ,'others', 'settings')",
        }, {
            title: "Connections",
            click: "setswitch('settings/integration' ,'connections', 'settings')",
        }],
    }, {
        modulename: "Configurations",
        icons: "PI_star blu",
        list: [{
            title: "Invite User",
            click: "",
        }, {
            title: "Permission",
            click: "setswitch('settings/permission', 'rolepermission', 'settings')",
        }, {
            title: "Data Administration",
            click: "setswitch('settings/data-administration', 'da_logs', 'settings')",
        }, {
            title: "Data Migration",
            click: "setswitch('settings/data-administration', 'da_usage', 'settings')",
        }, {
            title: "Group",
            click: "setswitch('settings/groups', 'groupsettings', 'settings')",
        }, {
            title: "Delegation",
            click: "setswitch('settings/delegation', 'delegationsettings', 'settings')",
        }],
    }, {
        modulename: "Tools",
        icons: "PI_tool grn",
        list: [{
            title: "Import data",
            click: "setswitch('settings/import')",
        }, {
            title: "Audit Logs",
            click: "",
        }],
    }, {
        modulename: "Help",
        icons: "PI_help2 red",
        list: [{
            title: "Resources",
            click: "",
        }, {
            title: "FAQ's",
            click: "",
        }, {
            title: "How to video",
            click: "",
        }],
    }]
};
var trainercard = {
    card: [{
        image: "/images/users/zp-11.jpg",
        empid: "0001",
        empnm: "Olivia Victoria",
        star: "5.0",
        popup: "trainerinfopopup"
    }, {
        image: "/images/users/zp-12.jpg",
        empid: "0002",
        empnm: "Emma Camila",
        star: "4.0"
    }, {
        image: "/images/users/zp-13.jpg",
        empid: "0003",
        empnm: "Charlotte",
        star: "5.0"
    }, {
        image: "/images/users/zp-15.jpg",
        empid: "0004",
        empnm: "George",
        star: "5.0"
    }, {
        image: "/images/users/zp-16.jpg",
        empid: "0005",
        empnm: "Fernando Emerson",
        star: "3.0"
    }, {
        image: "/images/users/zp-17.jpg",
        empid: "0006",
        empnm: "Muhammad",
        star: "2.0"
    }, {
        image: "/images/users/zp-18.jpg",
        empid: "0007",
        empnm: "Harrison",
        star: "2.0"
    }, {
        image: "/images/users/zp-19.jpg",
        empid: "0008",
        empnm: "Jonathan",
        star: "4.0"
    }, {
        image: "/images/users/zp-22.jpg",
        empid: "0009",
        empnm: "Amelia George",
        star: "5.0"
    }, {
        image: "/images/users/zp-23.jpg",
        empid: "0010",
        empnm: "Sophia",
        star: "3.0"
    }, {
        image: "/images/users/zp-24.jpg",
        empid: "0011",
        empnm: "Leonardo Randolph",
        star: "5.0"
    }, {
        image: "/images/users/zp-27.jpg",
        empid: "0012",
        empnm: "Sebastian",
        star: "3.0"
    }, {
        image: "/images/users/zp-28.jpg",
        empid: "0013",
        empnm: "Roderick Guillermo Nicholson",
        star: "1.0"
    }]
};
var topMenu1 = {
    service: [{
        modulename: "Travel",
        list: [{
            title: "Travel Request",
            click: "showtabs('service_request',this)",
            name: "Travel Request",
            class: "zpl_act",
        }, {
            title: "Expense",
            click: "showtabs('service_expense',this)",
            name: "Expense",
        }, {
            title: "Reimbursement",
            click: "showtabs('service_imburse',this)",
            name: "Reimbursement",
        }],
    }],

};