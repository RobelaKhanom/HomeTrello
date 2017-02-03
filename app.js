function ConnectToTrello()
{
    var authenticationSuccess = function() { 
        console.log('Successful authentication'); 
    };

    var authenticationFailure = function() { 
        console.log('Failed authentication'); 
    };

    Trello.authorize({
        type: 'popup',
        name: 'Getting Started Application',
        scope: {
            read: 'true',
            write: 'true' },
        expiration: 'never',
        success: authenticationSuccess,
        error: authenticationFailure
    });    
}

function CreateCard() {
    var myList = '581c5e3ae94f5ba03dc92353';
    var creationSuccess = function(data) {
        console.log('Card created successfully. Data returned:' + JSON.stringify(data));
    };
    var newCard = {
    name: 'New Test Card', 
    desc: 'This is the description of our new card.',
    // Place this card at the top of our list 
    idList: myList,
    pos: 'top'
    };
    Trello.post('/cards/', newCard, creationSuccess);
}

ConnectToTrello();
CreateCard();

