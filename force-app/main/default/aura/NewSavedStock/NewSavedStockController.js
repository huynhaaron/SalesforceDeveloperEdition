({
	handleClick : function(component, event, helper) {
        
        var action = component.get("c.createStock");
        action.setParams({
            newStockSymbol : component.get("v.tickerName")
        });
        action.setCallback(this,function(response) {
            var state=response.getState();
            if(state==='SUCCESS') {
                console.log('SAVED');
                component.set("v.savedTickerName", component.get("v.tickerName"));
                component.set("v.tickerName", "");
                component.set("v.recordCreated", "true");
            }
        });
        $A.enqueueAction(action);
        

        
        
	},
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "success",
            "title": "Stock Saved",
        });
    }
})