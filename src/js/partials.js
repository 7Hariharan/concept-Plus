const formstab = Handlebars.templates["hbs/forms.hbs"];
const filtertab = Handlebars.templates["hbs/filter.hbs"];
const filtertabview = Handlebars.templates["hbs/filterview.hbs"];
const applicability = Handlebars.templates["hbs/applicablity.hbs"];
const attachment = Handlebars.templates["hbs/attachment.hbs"];
const agents = Handlebars.templates["hbs/agents.hbs"];
const faqs = Handlebars.templates["hbs/faq.hbs"];
const criteria = Handlebars.templates["hbs/criteria.hbs"];
const actions = Handlebars.templates["hbs/action.hbs"];
const messages = Handlebars.templates["hbs/message.hbs"];
const approvals = Handlebars.templates["hbs/approval.hbs"];
const roleschange = Handlebars.templates["hbs/roleschange.hbs"];
const autosave = Handlebars.templates["hbs/autosave.hbs"];
const buttonsave = Handlebars.templates["hbs/buttonsave.hbs"];

Handlebars.registerPartial({
    "filter": filtertab,
    "filterview": filtertabview,
    "formscontainer": formstab,
    "applicablecontainer": applicability,
    "attachmentdiv": attachment,
    "agentdiv": agents,
    "faqdiv": faqs,
    "criteriadiv": criteria,
    "actionsdiv": actions,
    "messagediv": messages,
    "approvalsdiv": approvals,
    "rolesdiv": roleschange,
    "autosave": autosave,
    "buttonsave": buttonsave,
});