sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sunminjeon123/customermessages/test/integration/FirstJourney',
		'sunminjeon123/customermessages/test/integration/pages/CustomerMessageList',
		'sunminjeon123/customermessages/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sunminjeon123/customermessages') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);