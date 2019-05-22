({
	getStockInfo: function(component) {
        var recordId = component.get("v.recordId");
        //console.log(recordId);
        var action = component.get("c.getStock");
        action.setParams({
            tickerSymbol : component.get("v.account.TickerSymbol")
        });
        action.setCallback(this,function(response) {
            var state=response.getState();
            if(state==='SUCCESS') {
                
                var obj = response.getReturnValue()["Global Quote"];
                var parsedObj = {};
                var array = [];
                var count = 1;
                Object.entries(obj).forEach(entry => {
                    var key = entry[0];
                    var value = entry[1];
                    parsedObj[count] = value;
                    console.log(value);
                    array.push(value);
                    count += 1;
                });
                console.log("//parsedObj");
                console.log(parsedObj);
                //console.log(JSON.parse(response.getReturnValue()));
                //console.log(response.getReturnValue());
                //console.log(response.getReturnValue()[0].Name);
                //component.set('v.price',response.getReturnValue());
                component.set('v.price',array);

            }
        });
        $A.enqueueAction(action); 
	}
})