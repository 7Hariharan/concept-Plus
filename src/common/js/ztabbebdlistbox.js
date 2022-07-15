(function(ZC) {
    let $ = ZC.DOMUtil;
    class ZTabbebdListBox extends ZC.ZTabPanel {
        //name is mandatory for the extended component.
        get name() {
            return 'ztabbebdlistbox';   //No I18N
        }
        //additional properties are provided here.
        get attrs() {
            return {
                tabPosition: "left" //No I18N
            }
        }
        //Listen the LI event to handle category switch.
        _loadPane(tabData){
            let actualTabData = tabData.actualData;
            let pane = super._loadPane(...arguments);
            let listId = actualTabData.panelId+"list";  //No I18N
            let panelList = this.container.find("#"+listId);    //No I18N
            if(!panelList.length){
                ZC.createListBox({
                    id: listId,
                    appendTo: pane,
                    dataMapping: this._opts.dataMapping,
                    multiple: true,
                    showSearchField: true,
                    multiSelectInterfacePattern: "checkbox",    //No I18N
                    items: actualTabData.items
                });
            }
            console.log(actualTabData.panelId);
            return pane;
        }
    }
    ZC.tagNames.ztabbebdlistbox = [ 'div', 'z-tabbebdlistbox' ];    //No I18N
    ZC.registerComponent('ZTabbebdListBox', ZC.ZTabPanel, ZTabbebdListBox); //No I18N
}(ZComponents));