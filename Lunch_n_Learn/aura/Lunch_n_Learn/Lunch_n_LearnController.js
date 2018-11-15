({
    doInit : function(component, event, helper) {
        var action = component.get("c.temp");
        action.setCallback(this, function(response) {
            component.set("v.tempMessage", response.getReturnValue());
        });
        $A.enqueueAction(action);
    }, 
    handleClick : function(component, event, helper) {
        var urlNav = $A.get("e.force:navigateToURL");
        urlNav.setParams({
            "url" : "https://developer.salesforce.com/tools/extension_vscode"
        });
        urlNav.fire();
	}
})