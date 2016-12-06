FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeRouter.render('home');
    }
});

FlowRouter.route('/tournament/:tournamentId', {
    action: function(params, queryParams) {
        BlazeRouter.render('tournament', {tournamentId: params.tournamentId});
    }
});

FlowRouter.route('/tournament/edit/:tournamentId', {
    action: function(params, queryParams) {
        BlazeRouter.render('editTournament', {tournamentId: params.tournamentId});
    }
});

FlowRouter.route('/tournament/:tournamentId/:playerName', { // playerName must be a nickname lacking spaces, slashes, and/or weird characters
    action: function(params, queryParams) {
        BlazeRouter.render('playerPage', {tournamentId: params.tournamentId, playerName: params.playerName});
    }
});
