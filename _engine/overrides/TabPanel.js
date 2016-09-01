Ext.define('MyFixesTabPanel', {
        override: 'Ext.tab.Panel',

        onItemAdd: function(card) {
            var me = this;
            if (!card.isInnerItem()) {
                return me.callParent(arguments);
            }
            var tabBar = me.getTabBar(),
                initialConfig = card.getInitialConfig(),
                tabConfig = initialConfig.tab || {},
                tabTitle = (card.getTitle) ? card.getTitle() : initialConfig.title,
                tabIconCls = (card.getIconCls) ? card.getIconCls() : initialConfig.iconCls,
                tabHidden = (card.getHidden) ? card.getHidden() : initialConfig.hidden,
                tabDisabled = (card.getDisabled) ? card.getDisabled() : initialConfig.disabled,
                tabBadgeText = (card.getBadgeText) ? card.getBadgeText() : initialConfig.badgeText,
                innerItems = me.getInnerItems(),
                index = innerItems.indexOf(card),
                header = card.isPanel && card.getHeader(),
                tabInstance;
    
            //THIS IS THE FIX
            if(tabBar) {
                var tabs = tabBar.getItems();
                var activeTab = tabBar.getActiveTab();
                var currentTabInstance = (tabs.length >= innerItems.length) && tabs.getAt(index);
            }

            if (tabTitle && !tabConfig.title) {
                tabConfig.title = tabTitle;
            }
            if (tabIconCls && !tabConfig.iconCls) {
                tabConfig.iconCls = tabIconCls;
            }
            if (tabHidden && !tabConfig.hidden) {
                tabConfig.hidden = tabHidden;
            }
            if (tabDisabled && !tabConfig.disabled) {
                tabConfig.disabled = tabDisabled;
            }
            if (tabBadgeText && !tabConfig.badgeText) {
                tabConfig.badgeText = tabBadgeText;
            }
            
            if (!currentTabInstance && !tabConfig.title && !tabConfig.iconCls) {
                if (!tabConfig.title && !tabConfig.iconCls) {  //THIS IS THE FIX
                    Ext.Logger.error('Adding a card to a tab container without specifying any tab configuration');
                }
            }
            
            tabInstance = Ext.factory(tabConfig, Ext.tab.Tab, currentTabInstance);
            if (!currentTabInstance) {
                if(tabBar) tabBar.insert(index, tabInstance);  //THIS IS THE FIX
            }
            card.tab = tabInstance;
            if (header) {
                header.setHidden(true);
            }

            if (!activeTab && activeTab !== 0) { 
                if(tabBar) tabBar.setActiveTab(tabBar.getActiveItem());  //THIS IS THE FIX
            }
        },

        updateActiveItem: function(newActiveItem, oldActiveItem) {
            if (newActiveItem) {
                var items = this.getInnerItems(),
                    oldIndex = items.indexOf(oldActiveItem),
                    newIndex = items.indexOf(newActiveItem),
                    reverse = oldIndex > newIndex,
                    animation = this.getLayout().getAnimation(),
                    tabBar = this.getTabBar();
                    if(tabBar){ //FIX
                        oldTab = tabBar.parseActiveTab(oldIndex),
                        newTab = tabBar.parseActiveTab(newIndex);
                    }

                if (animation && animation.setReverse) {
                    animation.setReverse(reverse);
                }
 
                if (newIndex != -1) {
                    this.forcedChange = true;
                    if(tabBar) tabBar.setActiveTab(newIndex); //FIX
                    this.forcedChange = false;
                    if (oldTab) {
                        oldTab.setActive(false);
                    }
                    if (newTab) {
                        newTab.setActive(true);
                    }
                }
            }
        },
    });