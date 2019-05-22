({
	doInit : function(component, event, helper) {
        var ticker = component.get("v.ticker");
		var action = component.get("c.getStock");
        if(ticker.includes(":")) {
            ticker = tickerSymbol.split(":")[1];
        }
        action.setParams({
            tickerSymbol : ticker
        });
        action.setCallback(this,function(response) {
            var state = response.getState();
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
                console.log("//array");
                console.log(array);
                component.set("v.high", array[2]);
                component.set("v.low", array[3]);
                component.set("v.current", array[4]);
                console.log(response.getReturnValue());
            }
            
        })
        $A.enqueueAction(action);
        
	},
    goToSite:function (component, event, helper) {
        
        //Find the text value of the component with aura:id set to "address"
        var ticker = component.get("v.ticker");
        
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": 'https://finance.yahoo.com/quote/' + ticker
        });
        urlEvent.fire();
	}
})