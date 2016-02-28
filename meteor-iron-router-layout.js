if (Meteor.isClient) {
    Session.setDefault('counter', 0);

    Template.home.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.home.events({
        'click button': function () {
            Session.set('counter', Session.get('counter') + 1);
        }
    });

    Template.navItems.helpers({
        activeIfTemplateIs: function (template) {
            var currentRoute = Router.current();
            if (!currentRoute) return '';
            return template && template.toUpperCase() === currentRoute.lookupTemplate().toUpperCase() ? 'active' : '';
        }
    });
}

Router.configure({
    layoutTemplate: 'applicationLayout'
});

Router.route('/about', function () {
    /* Set layout only on '/about' route: */
    // this.layout('applicationLayout');
    this.render('about');
}, {
    name: 'about'
});

Router.route('/highScores', function () {
    this.render('highScores');
}, {
    name: 'highScores'
});

Router.route('/wiki', function () {
    this.render('wiki');
}, {
    name: 'wiki'
});

Router.route('/faq', function () {
    this.render('faq');
}, {
    name: 'faq'
});

Router.route('/', function () {
    this.render('home');
}, {
    name: 'home'
});
