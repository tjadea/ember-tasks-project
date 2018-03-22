import Route from '@ember/routing/route';

let actions = [{
    id: 1,
    name: "Twitter",
    icon: "fab fa-twitter-square",
    colour: "rgb(0,171,236)",
}, {
    id: 2,
    name: "SMS",
    icon: "fas fa-clock",
    colour: "rgb(41,191,18)",
}, {
    id: 3,
    name: "Evernote",
    icon: "fas fa-sticky-note",
    colour: "rgb(45,190,96)",
}, {
    id: 4,
    name: "Pocket",
    icon: "fab fa-get-pocket",
    colour: "rgb(239,62,86)"
}, {
    id: 5,
    name: "Email",
    icon: "fas fa-envelope",
    colour: "rgb(36,104,255)",
    link: "if-email.html",
    data: [{
        key: "send-new-email",
        title: "Send me an email",
        info: "This action will send you an HTML based email. Images and links are supported.",
        link: "if-feed-then.html",
    }],
},{
    id: 6,
    name: "Delicious",
    icon: "fab fa-delicious",
    colour: "rgb(50,116,208)",
},{
    id: 7,
    name: "Facebook",
    icon: "fab fa-facebook-square",
    colour: "rgb(59,87,157)",
},{
    id: 8,
    name: "Tumblr",
    icon: "fab fa-tumblr-square",
    colour: "rgb(53,70,92)",
},{
    id: 9,
    name: "Pinboard",
    icon: "fas fa-thumbtack",
    colour: "rgb(0,0,230)",
},{
    id: 10,
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    colour: "rgb(0,123,182)",
}];

export default Route.extend({
    model() {
        return actions;
    }
});
