/**
 * Classe que define a lista de "Provider"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 25/06/2012
 */
Ext.define('MBilling.view.provider.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.providerlist',
    store: 'Provider',
    initComponent: function() {
        var me = this;
        me.columns = me.columns || [{
            header: t('Id'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('name'),
            dataIndex: 'provider_name'
        }, {
            header: t('description'),
            dataIndex: 'description'
        }, {
            header: t('credit'),
            dataIndex: 'credit',
            renderer: Helper.Util.formatMoneyDecimal
        }, {
            header: t('creationdate'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'creationdate'
        }];
        me.callParent(arguments);
    }
});