sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sunminjeon123/productfaqapp/test/integration/FirstJourney',
		'sunminjeon123/productfaqapp/test/integration/pages/ProductFAQList',
		'sunminjeon123/productfaqapp/test/integration/pages/ProductFAQObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductFAQList, ProductFAQObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sunminjeon123/productfaqapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductFAQList: ProductFAQList,
					onTheProductFAQObjectPage: ProductFAQObjectPage
                }
            },
            opaJourney.run
        );
    }
);