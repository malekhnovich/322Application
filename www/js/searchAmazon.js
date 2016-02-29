/**
 * Created by maxrenet on 2/27/16.
 */
amazon = require('amazon-product-api');

var util = require('util'),
    OperationHelper = require('apac').OperationHelper;

var opHelper = new OperationHelper({
    awsId:     '[AKIAJYFONCHRZDHPYF2A]',
    awsSecret: '[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]',
    assocId:   '[322appcom-20]',
});

opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': 'harry potter',
    'ResponseGroup': 'ItemAttributes,Offers'
}, function(error, results) {
    if (error) { console.log('Error: ' + error + "\n"); }
    console.log("Results:\n" + util.inspect(results) + "\n");
});
opHelper.execute('ItemLookup', {
    'ItemId': '[ASIN GOES HERE]',
    'MechantId': 'All',
    'Condition': 'All',
    'ResponseGroup': 'Medium'
}, function(error, results) {
    if (error) { console.log('Error: ' + error + "\n"); }
    console.log("Results:\n" + util.inspect(results) + "\n");
});
