({
    loadUserSavedStocks : function(component) {
        var action = component.get("c.getUserSavedStocks");
        action.setCallback(this,function(response) {
            var state=response.getState();
            if(state==='SUCCESS') {
                console.log(response.getReturnValue());
                component.set("v.UserSavedStocks", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
        
    }
})