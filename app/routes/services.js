import Route from '@ember/routing/route';

let services = [{
    id: 1,
    name: "Twitter",
    icon: "fab fa-twitter-square",
    description: "Hi this is",
    colour: "#FF0000",
    link: "#"
}, {
    id: 2,
    name: "Date &amp; Time",
    icon: "fas fa-clock",
    description: "As well as..",
    colour: "rgb(51,51,51)",
    link: "#"
}, {
    id: 3,
    name: "RSS Feed",
    icon: "fas fa-rss",
    description: "As well as..",
    colour: "rgb(237,117,5)",
    link: "if-feed.html",
    data: [{
        key: "new-feed-item",
        title: "New Feed Item",
        info: "This Trigger fires every time a new item is added to the feed you specify.",
        link: "if-feed-then.html",
    }, {
        key: "new-feed-matches",
        title: "New Feed Item Matches",
        info: "This Trigger fires every time a new item in the feed you specify contains a particular keyword or simple phrase.",
    }],
}, {
    id: 4,
    name: "SMS",
    icon: "fas fa-comment-alt",
    description: "As well as..",
    colour: "rgb(41,191,18)",
    link: "#"
}, {
    id: 5,
    name: "Email",
    icon: "fas fa-envelope",
    description: "As well as..",
    colour: "rgb(36,104,255)",
    link: "#"
},{
    id: 6,
    name: "Delicious",
    icon: "fab fa-delicious",
    description: "As well as..",
    colour: "rgb(50,116,208)",
    link: "#"
},{
    id: 7,
    name: "Facebook",
    icon: "fab fa-facebook-square",
    description: "As well as..",
    colour: "rgb(59,87,157)",
    link: "#"
},{
    id: 8,
    name: "Tumblr",
    icon: "fab fa-tumblr-square",
    description: "As well as..",
    colour: "rgb(53,70,92)",
    link: "#"
},{
    id: 9,
    name: "Pinboard",
    icon: "fas fa-thumbtack",
    description: "As well as..",
    colour: "rgb(0,0,230)",
    link: "#"
},{
    id: 10,
    name: "Instagram",
    icon: "fab fa-instagram",
    description: "As well as..",
    colour: "rgb(228,64,95)",
    link: "trigger.html"
}];

export default Route.extend({
    model() {
    return services;
    }
});
