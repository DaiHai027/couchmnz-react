/*
jQWidgets v5.4.0 (2017-Oct)
Copyright (c) 2011-2017 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxScheduler extends React.Component {
    componentDidMount() {

        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['appointmentOpacity','appointmentsMinHeight','appointmentDataFields','appointmentTooltips','columnsHeight','contextMenu','contextMenuOpen','contextMenuClose','contextMenuItemClick','contextMenuCreate','changedAppointments','disabled','date','dayNameFormat','enableHover','editDialog','editDialogDateTimeFormatString','editDialogDateFormatString','editDialogOpen','editDialogCreate','editDialogKeyDown','editDialogClose','exportSettings','height','legendPosition','legendHeight','localization','min','max','ready','renderAppointment','rendering','rendered','rtl','resources','rowsHeight','showToolbar','showLegend','scrollBarSize','source','statuses','touchRowsHeight','theme','touchAppointmentsMinHeight','touchScrollBarSize','timeZone','touchDayNameFormat','toolBarRangeFormat','toolBarRangeFormatAbbr','toolbarHeight','views','view','width'];
        let options = {};
        for(let item in this.props) {
              if(item === 'settings') {
                  for(let itemTwo in this.props[item]) {
                      options[itemTwo] = this.props[item][itemTwo];
                      }
                } else {
                      if(properties.indexOf(item) !== -1) {
                        options[item] = this.props[item];
                      }
                }
          }
          return options;
      };
    createComponent(options) {
        if(!this.style) {
              for (let style in this.props.style) {
                  window.JQXLite(this.componentSelector).css(style, this.props.style[style]);
              }
        }
        if(this.props.className !== undefined) {
            let classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                window.JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
              window.JQXLite(this.componentSelector).html(this.props.template);
        }
        window.JQXLite(this.componentSelector).jqxScheduler(options);
    };
    setOptions(options) {
        window.JQXLite(this.componentSelector).jqxScheduler('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = window.JQXLite(this.componentSelector).jqxScheduler(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        window.JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        window.JQXLite(this.componentSelector).off(name);
    };
    appointmentOpacity(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('appointmentOpacity', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('appointmentOpacity');
        }
    };
    appointmentsMinHeight(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('appointmentsMinHeight', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('appointmentsMinHeight');
        }
    };
    appointmentDataFields(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('appointmentDataFields', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('appointmentDataFields');
        }
    };
    appointmentTooltips(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('appointmentTooltips', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('appointmentTooltips');
        }
    };
    columnsHeight(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('columnsHeight', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('columnsHeight');
        }
    };
    contextMenu(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('contextMenu', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('contextMenu');
        }
    };
    contextMenuOpen(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('contextMenuOpen', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('contextMenuOpen');
        }
    };
    contextMenuClose(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('contextMenuClose', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('contextMenuClose');
        }
    };
    contextMenuItemClick(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('contextMenuItemClick', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('contextMenuItemClick');
        }
    };
    contextMenuCreate(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('contextMenuCreate', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('contextMenuCreate');
        }
    };
    changedAppointments(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('changedAppointments', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('changedAppointments');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('disabled', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('disabled');
        }
    };
    date(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('date', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('date');
        }
    };
    dayNameFormat(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('dayNameFormat', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('dayNameFormat');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('enableHover', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('enableHover');
        }
    };
    editDialog(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('editDialog', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('editDialog');
        }
    };
    editDialogDateTimeFormatString(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('editDialogDateTimeFormatString', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('editDialogDateTimeFormatString');
        }
    };
    editDialogDateFormatString(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('editDialogDateFormatString', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('editDialogDateFormatString');
        }
    };
    editDialogOpen(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('editDialogOpen', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('editDialogOpen');
        }
    };
    editDialogCreate(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('editDialogCreate', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('editDialogCreate');
        }
    };
    editDialogKeyDown(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('editDialogKeyDown', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('editDialogKeyDown');
        }
    };
    editDialogClose(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('editDialogClose', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('editDialogClose');
        }
    };
    exportSettings(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('exportSettings', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('exportSettings');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('height', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('height');
        }
    };
    legendPosition(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('legendPosition', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('legendPosition');
        }
    };
    legendHeight(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('legendHeight', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('legendHeight');
        }
    };
    localization(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('localization', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('localization');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('min', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('min');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('max', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('max');
        }
    };
    ready(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('ready', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('ready');
        }
    };
    renderAppointment(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('renderAppointment', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('renderAppointment');
        }
    };
    rendering(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('rendering', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('rendering');
        }
    };
    rendered(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('rendered', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('rendered');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('rtl', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('rtl');
        }
    };
    resources(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('resources', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('resources');
        }
    };
    rowsHeight(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('rowsHeight', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('rowsHeight');
        }
    };
    showToolbar(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('showToolbar', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('showToolbar');
        }
    };
    showLegend(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('showLegend', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('showLegend');
        }
    };
    scrollBarSize(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('scrollBarSize', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('scrollBarSize');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('source', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('source');
        }
    };
    statuses(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('statuses', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('statuses');
        }
    };
    touchRowsHeight(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('touchRowsHeight', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('touchRowsHeight');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('theme', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('theme');
        }
    };
    touchAppointmentsMinHeight(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('touchAppointmentsMinHeight', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('touchAppointmentsMinHeight');
        }
    };
    touchScrollBarSize(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('touchScrollBarSize', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('touchScrollBarSize');
        }
    };
    timeZone(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('timeZone', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('timeZone');
        }
    };
    touchDayNameFormat(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('touchDayNameFormat', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('touchDayNameFormat');
        }
    };
    toolBarRangeFormat(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('toolBarRangeFormat', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('toolBarRangeFormat');
        }
    };
    toolBarRangeFormatAbbr(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('toolBarRangeFormatAbbr', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('toolBarRangeFormatAbbr');
        }
    };
    toolbarHeight(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('toolbarHeight', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('toolbarHeight');
        }
    };
    views(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('views', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('views');
        }
    };
    view(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('view', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('view');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            window.JQXLite(this.componentSelector).jqxScheduler('width', arg)
        } else {
            return window.JQXLite(this.componentSelector).jqxScheduler('width');
        }
    };
    addAppointment(item) {
        window.JQXLite(this.componentSelector).jqxScheduler('addAppointment', item);
    };
    beginAppointmentsUpdate() {
        window.JQXLite(this.componentSelector).jqxScheduler('beginAppointmentsUpdate');
    };
    clearAppointmentsSelection() {
        window.JQXLite(this.componentSelector).jqxScheduler('clearAppointmentsSelection');
    };
    clearSelection() {
        window.JQXLite(this.componentSelector).jqxScheduler('clearSelection');
    };
    closeMenu() {
        window.JQXLite(this.componentSelector).jqxScheduler('closeMenu');
    };
    closeDialog() {
        window.JQXLite(this.componentSelector).jqxScheduler('closeDialog');
    };
    deleteAppointment(appointmenId) {
        window.JQXLite(this.componentSelector).jqxScheduler('deleteAppointment', appointmenId);
    };
    destroy() {
        window.JQXLite(this.componentSelector).jqxScheduler('destroy');
    };
    endAppointmentsUpdate() {
        window.JQXLite(this.componentSelector).jqxScheduler('endAppointmentsUpdate');
    };
    ensureAppointmentVisible(id) {
        window.JQXLite(this.componentSelector).jqxScheduler('ensureAppointmentVisible', id);
    };
    ensureVisible(item, resourceId) {
        window.JQXLite(this.componentSelector).jqxScheduler('ensureVisible', item, resourceId);
    };
    exportData(format) {
        return window.JQXLite(this.componentSelector).jqxScheduler('exportData', format);
    };
    focus() {
        window.JQXLite(this.componentSelector).jqxScheduler('focus');
    };
    getAppointmentProperty(appointmentId, name) {
        return window.JQXLite(this.componentSelector).jqxScheduler('getAppointmentProperty', appointmentId, name);
    };
    getSelection() {
        return window.JQXLite(this.componentSelector).jqxScheduler('getSelection');
    };
    getAppointments() {
        return window.JQXLite(this.componentSelector).jqxScheduler('getAppointments');
    };
    getDataAppointments() {
        return window.JQXLite(this.componentSelector).jqxScheduler('getDataAppointments');
    };
    hideAppointmentsByResource(resourcesId) {
        window.JQXLite(this.componentSelector).jqxScheduler('hideAppointmentsByResource', resourcesId);
    };
    openMenu(left, top) {
        window.JQXLite(this.componentSelector).jqxScheduler('openMenu', left, top);
    };
    openDialog(left, top) {
        window.JQXLite(this.componentSelector).jqxScheduler('openDialog', left, top);
    };
    selectAppointment(appointmentId) {
        window.JQXLite(this.componentSelector).jqxScheduler('selectAppointment', appointmentId);
    };
    setAppointmentProperty(appointmentId, name, value) {
        window.JQXLite(this.componentSelector).jqxScheduler('setAppointmentProperty', appointmentId, name, value);
    };
    selectCell(date, allday, resourceId) {
        window.JQXLite(this.componentSelector).jqxScheduler('selectCell', date, allday, resourceId);
    };
    showAppointmentsByResource(resourceId) {
        window.JQXLite(this.componentSelector).jqxScheduler('showAppointmentsByResource', resourceId);
    };
    scrollWidth() {
        return window.JQXLite(this.componentSelector).jqxScheduler('scrollWidth');
    };
    scrollHeight() {
        return window.JQXLite(this.componentSelector).jqxScheduler('scrollHeight');
    };
    scrollLeft(left) {
        window.JQXLite(this.componentSelector).jqxScheduler('scrollLeft', left);
    };
    scrollTop(top) {
        window.JQXLite(this.componentSelector).jqxScheduler('scrollTop', top);
    };
    render() {
        let id = 'jqxScheduler' + window.JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

