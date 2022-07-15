var topbar = Handlebars.templates["hbs/moduletopband.hbs"];
var html = topbar();
$("#topnav").append(html);

var topbar = Handlebars.templates["hbs/rightband.hbs"];
var html = topbar();
$("#rgtnav").append(html);

var lmenu = Handlebars.templates["hbs/leftmenu.hbs"];
var html = lmenu();
$(".zpl_lmnu").append(html);

// Topband
var topband = Handlebars.templates["hbs/moduletopmenu.hbs"];

// Home
var html = topband(moduletopmenu.homelanding); //Home
$("#homelanding .zpl_topmnu").append(html);

var html = topband(moduletopmenu.leavelanding);
$("#leavelanding .zpl_topmnu").append(html);

var html = topband(moduletopmenu.attModLanding);
$("#attModLanding .zpl_topmnu").append(html);

var html = topband(moduletopmenu.timshtlanding);
$("#timshtlanding .zpl_topmnu").append(html);

var html = topband(moduletopmenu.lmsmdllanding);
$("#lmsmdllanding .zpl_topmnu").append(html);

var html = topband(moduletopmenu.pmsLanding);
$("#pmsLanding .zpl_topmnu").append(html);

//Home
var admoprtslanding = Handlebars.templates["hbs/dash.hbs"];
var html = admoprtslanding();
$("#homelanding").append(html);

var admoprtslanding = Handlebars.templates["hbs/self_service.hbs"];
var html = admoprtslanding();
$("#homelanding").append(html);

var admoprtslanding = Handlebars.templates["hbs/team.hbs"];
var html = admoprtslanding();
$("#homelanding").append(html);

var admoprtslanding = Handlebars.templates["hbs/organization.hbs"];
var html = admoprtslanding();
$("#homelanding").append(html);

//Leave
var leavelanding = Handlebars.templates["hbs/todo_me.hbs"];
var html = leavelanding();
$("#leavelanding").append(html);

var leavelanding = Handlebars.templates["hbs/todo_team.hbs"];
var html = leavelanding();
$("#leavelanding").append(html);

var leavelanding = Handlebars.templates["hbs/todo_org.hbs"];
var html = leavelanding();
$("#leavelanding").append(html);



// Ask

var asklanding = Handlebars.templates["hbs/ask.hbs"];
var html = asklanding();
$("#asklanding").append(html);


// Customize

var custlanding = Handlebars.templates["hbs/customize.hbs"];
var html = custlanding();
$("#customlanding").append(html);


//Attendance
var attModLanding = Handlebars.templates["hbs/myattendance.hbs"];
var html = attModLanding();
$("#attModLanding").append(html);

var attModLanding = Handlebars.templates["hbs/teamattendance.hbs"];
var html = attModLanding();
$("#attModLanding").append(html);

//Timetracker
var timshtlanding = Handlebars.templates["hbs/mylog.hbs"];
var html = timshtlanding();
$("#timshtlanding").append(html);

//LMS
var lmsmdllanding = Handlebars.templates["hbs/myspace.hbs"];
var html = lmsmdllanding();
$("#lmsmdllanding").append(html);

//PERFORMANCE
var pmsLanding = Handlebars.templates["hbs/overview.hbs"];
var html = pmsLanding();
$("#pmsLanding").append(html);