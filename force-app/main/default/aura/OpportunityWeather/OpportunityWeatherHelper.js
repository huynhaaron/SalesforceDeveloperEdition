({
    getWeather : function(component) {
        var recordId = component.get("v.recordId");
        //console.log(recordId);
        var action = component.get("c.getWeather");
        action.setParams({
            recordId : component.get("v.recordId")
        });
        action.setCallback(this,function(response) {
            var state=response.getState();
            if(state==='SUCCESS') {
                console.log(response.getReturnValue());
                component.set('v.weather',response.getReturnValue());
            }
        });
         $A.enqueueAction(action);  
    }
})