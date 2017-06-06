/*
 *	jQuery FullCalendar Extendable Plugin
 *	An Ajax (PHP - Mysql - jquery) script that extends the functionalities of the fullcalendar plugin
 *  Dependencies: 
 *   - jquery
 *   - jquery Ui
 * 	 - jquery spectrum (since 2.0)
 *   - jquery timepicker (since 1.6.4)
 *   - jquery Fullcalendar
 *   - Twitter Bootstrap
 *  Author: Paulo Regina
 *  Website: www.pauloreg.com
 *  Contributions: Patrik Iden, Jan-Paul Kleemans, Bob Mulder
 *	Version 2.3, May - 2015 
 *  Fullcalendar 2.3.1
 *	Released Under Envato Regular or Extended Licenses
 */
 
!function(e,t){e.fn.extend({FullCalendarExt:function(a){function o(){value=e(d.formSearchSelector+" input").val(),construct="search="+encodeURIComponent(value),e.post("includes/loader.php",construct,function(){e(d.calendarSelector).fullCalendar("refetchEvents")})}var n="token="+e("#cal_token").val(),l={calendarSelector:"#calendar",lang:"en",token:"",ajaxJsonFetch:"includes/cal_events.php?"+n,ajaxUiUpdate:"includes/cal_update.php?"+n,ajaxEventSave:"includes/cal_save.php?"+n,ajaxEventQuickSave:"includes/cal_quicksave.php?"+n,ajaxEventDelete:"includes/cal_delete.php?"+n,ajaxEventEdit:"includes/cal_edit_update.php?"+n,ajaxEventExport:"includes/cal_export.php?"+n,ajaxRepeatCheck:"includes/cal_check_rep_events.php?"+n,ajaxRetrieveDescription:"includes/cal_description.php?"+n,ajaxImport:"importer.php?"+n,modalSelector:"#calendarModal",modalPromptSelector:"#cal_prompt",modalEditPromptSelector:"#cal_edit_prompt_save",formSearchSelector:"form#search",formAddEventSelector:"form#add_event",formFilterSelector:"form#filter-category select",formEditEventSelector:"form#edit_event",formSearchSelector:"form#search",newEventText:"Add New Event",successAddEventMessage:"Successfully Added Event",successDeleteEventMessage:"Successfully Deleted Event",successUpdateEventMessage:"Successfully Updated Event",failureAddEventMessage:"Failed To Add Event",failureDeleteEventMessage:"Failed To Delete Event",failureUpdateEventMessage:"Failed To Update Event",generalFailureMessage:"Failed To Execute Action",ajaxError:"Failed to load content",emptyForm:"Form cannot be empty",eventText:"Event: ",repetitiveEventActionText:"This is a repetitive event, what do you want to do?",isRTL:!1,weekNumberTitle:"W",defaultColor:"#587ca3",weekType:"agendaWeek",dayType:"agendaDay",editable:!0,ignoreTimezone:!0,lazyFetching:!0,filter:!0,quickSave:!0,firstDay:0,gcal:!1,version:"modal",defaultView:"month",aspectRatio:1.35,weekends:!0,weekNumbers:!1,weekNumberCalculation:"iso",hiddenDays:[],theme:!1,themePrev:"circle-triangle-w",themeNext:"circle-triangle-e",titleFormatMonth:"",titleFormatWeek:"",titleFormatDay:"",columnFormatMonth:"",columnFormatWeek:"",columnFormatDay:"",timeFormat:"H:mm",weekMode:"fixed",allDaySlot:!0,axisFormat:"h(:mm)a",slotDuration:"00:30:00",minTime:"00:00:00",maxTime:"24:00:00",slotEventOverlap:!0,savedRedirect:"index.php",removedRedirect:"index.php",updatedRedirect:"index.php",ajaxLoaderMarkup:'<div class="loadingDiv"></div>',prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow",otherSource:"",eventLimit:!0,palette:[["#0b57a4","#8bbdeb","#000000","#2a82d7","#148aa5","#3714a4","#587ca3","#a50516"],["#fb3c8f","#1b4f15","#1b4f15","#686868","#3aa03a","#ff0080","#fee233","#fc1cad"],["#7f2b14","#000066","#2b4726","#fd7222","#fc331c","#af31f2","#fc0d1b","#2b8a6d"],["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"]]},r=e.extend(l,a),d=r;1==d.gcal&&(d.weekType="",d.dayType=""),e(d.calendarSelector).fullCalendar({lang:d.lang,editable:d.editable,eventLimit:d.eventLimit,defaultView:d.defaultView,aspectRatio:d.aspectRatio,weekends:d.weekends,weekNumbers:d.weekNumbers,weekNumberCalculation:d.weekNumberCalculation,weekNumberTitle:d.weekNumberTitle,titleFormat:{month:d.titleFormatMonth,week:d.titleFormatWeek,day:d.titleFormatDay},columnFormat:{month:d.columnFormatMonth,week:d.columnFormatWeek,day:d.columnFormatDay},isRTL:d.isRTL,hiddenDays:d.hiddenDays,theme:d.theme,buttonIcons:{prev:d.prev,next:d.next,prevYear:d.prevYear,nextYear:d.nextYear},themeButtonIcons:{prev:d.themePrev,next:d.themeNext},weekMode:d.weekMode,allDaySlot:d.allDaySlot,allDayText:d.allDayText,axisFormat:d.axisFormat,slotDuration:d.slotDuration,minTime:d.minTime,maxTime:d.maxTime,slotEventOverlap:d.slotEventOverlap,timeFormat:d.timeFormat,header:{left:"prev,next",center:"title",right:"month,"+d.weekType+","+d.dayType},monthNames:d.monthNames,monthNamesShort:d.monthNamesShort,dayNames:d.dayNames,dayNamesShort:d.dayNamesShort,buttonText:{today:d.today,month:d.month,week:d.week,day:d.day},ignoreTimezone:d.ignoreTimezone,firstDay:d.firstDay,lazyFetching:d.lazyFetching,selectable:d.quickSave,selectHelper:d.quickSave,select:function(t,a,o,n){calendar.view=n.name,"modal"==d.version&&(calendar.quickModal(t,a,o),e(d.calendarSelector).fullCalendar("unselect"))},eventSources:[d.otherSource,{url:d.ajaxJsonFetch}],eventDrop:function(t){var a=moment(t.start).format("YYYY-MM-DD"),o=moment(t.start).format("HH:mm"),n=moment(t.end).format("YYYY-MM-DD"),l=moment(t.end).format("HH:mm"),r=moment(t.end).isValid();null===t.end||"null"===t.end||0==r?(Eend=a+" "+o,EaD=t.allDay):(Eend=n+" "+l,EaD=t.allDay);var i="start="+a+" "+o+"&end="+Eend+"&id="+t.id+"&allDay="+EaD+"&original_id="+t.original_id;e.post(d.ajaxUiUpdate,i,function(){e(d.calendarSelector).fullCalendar("refetchEvents")})},eventResize:function(t){var a=moment(t.start).format("YYYY-MM-DD"),o=moment(t.start).format("HH:mm"),n=moment(t.end).format("YYYY-MM-DD"),l=moment(t.end).format("HH:mm"),r=moment(t.end).isValid();null===t.end||"null"===t.end||0==r?(Eend=a+" "+o,EaD="false"):(Eend=n+" "+l,EaD=t.allDay);var i="start="+a+" "+o+"&end="+Eend+"&id="+t.id+"&allDay="+EaD+"&original_id="+t.original_id;e.post(d.ajaxUiUpdate,i,function(){e(d.calendarSelector).fullCalendar("refetchEvents")})},eventRender:function(e,t,a){var o=e.color,n=moment(e.start).format("YYYY-MM-DD"),l=moment(e.start).format("HH:mm"),r=moment(e.end).format("YYYY-MM-DD"),i=moment(e.end).format("HH:mm"),c=moment(e.end).isValid();if(0==c)var r=n,i=l;null!==e.end&&"month"==a.name&&(timeformat=e.start.format("H:mm")+" - "+e.end.format("H:mm"),t.find(".fc-time").html(timeformat)),"modal"==d.version&&(t.attr("data-toggle","modal"),t.attr("href","javascript:void(0)"),t.attr("onclick",'calendar.openModal("'+e.title+'","'+e.url+'","'+e.original_id+'","'+e.id+'","'+e.start+'","'+e.end+'","'+o+'","'+n+'","'+l+'","'+r+'","'+i+'");'))}}),calendar.openModal=function(t,a,o,n,l,r,i,c,m,s,v){e("#quicksave-form-body").hide(),e("#edit-form-body").hide(),e("#details-body").show(),calendar.title=t,calendar.id=o,calendar.rep_id=n,calendar.eventStart=l,calendar.eventEnd=r,ExpS=c+" "+m,ExpE=s+" "+v,e.ajax({type:"POST",url:d.ajaxRetrieveDescription,data:{id:calendar.id,mode:"edit"},cache:!1,beforeSend:function(){e(".loadingDiv").show(),e(".modal-footer").hide()},error:function(){e(".loadingDiv").hide(),alert(d.ajaxError)},success:function(a){e(".loadingDiv").hide();var o=e.parseJSON(a),n=o.description.replace("$null",""),l=o.color.replace("$null",""),r=o.category.replace("$null","");calendar.description_editable=o.description_editable.replace("&","&"),calendar.description=n.replace("&","&"),calendar.category=r.replace("&","&"),calendar.color=l,e("#details-body-title").html(t),e("#details-body-content").html(n),e("#export-event").show(),e("#delete-event").show(),e("#edit-event").show(),e("#save-changes").hide(),e("#add-event").hide(),e(".modal-footer").show(),e(d.modalSelector).modal("show")}}),e("#delete-event").off().on("click",function(e){calendar.remove(calendar.id),e.preventDefault()}),e("#export-event").off().on("click",function(e){calendar.exportIcal(calendar.id,calendar.title,calendar.description,ExpS,ExpE),e.preventDefault()}),e("#edit-event").off().on("click",function(){document.getElementById("edit-form-body").reset(),e("#export-event").hide(),e("#delete-event").hide(),e("#edit-event").hide(),e("#add-event").hide(),e("#save-changes").show(),e("#save-changes").css("width","100%"),e("#quicksave-form-body").hide(),e("#details-body").hide(),e("#edit-form-body").show(),e(d.modalSelector).modal("show"),e("#edit_title").val(t),e("#edit_description").val(calendar.description_editable),e("select#edit_categorie option").each(function(){this.selected=this.text==calendar.category}),e("#edit_color").spectrum("set",i),e("#startDate_edit").val(c),e("input#startTime_edit").val(m),e("#endDate_edit").val(s),e("input#endTime_edit").val(v),e("#save-changes").off().on("click",function(t){if(0==e("input[name=edit_title]").val().length)alert(d.emptyForm);else{var a=e("#edit-form-body").serialize();calendar.update(o,a)}t.preventDefault()})})},calendar.quickModal=function(t,a){document.getElementById("quicksave-form-body").reset();var o=moment(t).format("YYYY-MM-DD"),n=moment(t).format("HH:mm"),l=moment(a).format("YYYY-MM-DD"),r=moment(a).format("HH:mm"),i=moment(a).isValid();if(0==i)var l=o,r=n;e("#startDate").val(o),e("#startTime").val(n),e("#endDate").val(l),e("#endTime").val(r),e("#details-body").hide(),e("#edit-form-body").hide(),e("#event-type-select").show(),e("#event-type-selected").hide(),e("#repeat-type-select").show(),e("#repeat-type-selected").hide(),e("#export-event").hide(),e("#delete-event").hide(),e("#edit-event").hide(),e("#save-changes").hide(),e("#add-event").show(),e("#add-event").css("width","100%"),e(".modal-footer").show(),e("#quicksave-form-body").show(),e("#details-body-title").html(d.newEventText),e(d.modalSelector).modal("show"),e("#event-type").on("change",function(){var t=e(this).val();"false"==t?(e("#event-type-select").show(),e("#event-type-selected").show()):"true"==t&&(e("#event-type-select").show(),e("#event-type-selected").hide())}),e("#repeat_select").on("change",function(){var t=e(this).val();"no"!==t?(e("#repeat-type-select").show(),e("#repeat-type-selected").show()):"no"==t&&(e("#repeat-type-select").show(),e("#repeat-type-selected").hide())}),e("#add-event").off().on("click",function(t){if(0==e("input[name=title]").val().length)alert(d.emptyForm);else{var a=e("#quicksave-form-body").serialize();calendar.quickSave(a)}t.preventDefault()})},calendar.quickSave=function(t){e.ajax({type:"POST",url:d.ajaxEventQuickSave,data:t,cache:!1,beforeSend:function(){e(".loadingDiv").show(),e(".modal-footer").hide()},error:function(){e(".loadingDiv").hide(),alert(d.ajaxError)},success:function(t){e(".loadingDiv").hide(),1==t?(e(d.modalSelector).modal("hide"),e(d.calendarSelector).fullCalendar("refetchEvents")):(alert(d.failureAddEventMessage),e(".modal-footer").show())}})},calendar.update=function(t,a){var o="id="+t;e.ajax({type:"POST",url:d.ajaxRepeatCheck,data:o,cache:!1,beforeSend:function(){e(".loadingDiv").show()},error:function(){e(".loadingDiv").hide(),alert(d.ajaxError)},success:function(o){e(".loadingDiv").hide(),"REP_FOUND"==o?(e(d.modalSelector).modal("hide"),e(d.modalEditPromptSelector+" .modal-header").html("<h4>"+d.eventText+calendar.title+"</h4>"),e(d.modalEditPromptSelector+" .modal-body-custom").css("padding","15px").html(d.repetitiveEventActionText),e(d.modalEditPromptSelector).modal("show"),e('[data-option="save-this"]').unbind("click").on("click",function(o){calendar.update_this(t,a),e(d.modalEditPromptSelector).modal("hide"),e(d.modalSelector).modal("hide"),o.preventDefault()}),e('[data-option="save-repetitives"]').unbind("click").on("click",function(o){var n="&rep_id="+calendar.rep_id+"&method=repetitive_event";calendar.update_this(t,a,n),e(d.modalEditPromptSelector).modal("hide"),e(d.modalSelector).modal("hide"),o.preventDefault()})):calendar.update_this(t,a)},error:function(){alert(d.generalFailureMessage)}})},calendar.update_this=function(a,o,n){if(n===t)var l=o+"&id="+a;else var l=o+"&id="+a+n;e.ajax({type:"POST",url:d.ajaxEventEdit,data:l,cache:!1,beforeSend:function(){e(".loadingDiv").show()},error:function(){e(".loadingDiv").hide(),alert(d.ajaxError)},success:function(t){e(".loadingDiv").hide(),""==t?(e(d.modalSelector).modal("hide"),e(d.calendarSelector).fullCalendar("refetchEvents")):alert(d.failureUpdateEventMessage)},error:function(){alert(d.failureUpdateEventMessage)}})},calendar.remove=function(t){var a="id="+t;e.ajax({type:"POST",url:d.ajaxRepeatCheck,data:{id:t},cache:!1,beforeSend:function(){e(".loadingDiv").show()},error:function(){e(".loadingDiv").hide(),alert(d.ajaxError)},success:function(o){e(".loadingDiv").hide(),"REP_FOUND"==o?(e(d.modalSelector).modal("hide"),e(d.modalPromptSelector+" .modal-header").html("<h4>"+d.eventText+calendar.title+"</h4>"),e(d.modalPromptSelector+" .modal-body").html(d.repetitiveEventActionText),e(d.modalPromptSelector).modal("show"),e('[data-option="remove-this"]').unbind("click").on("click",function(t){calendar.remove_this(a),e(d.modalPromptSelector).modal("hide"),t.preventDefault()}),e('[data-option="remove-repetitives"]').unbind("click").on("click",function(a){var o="id="+t+"&rep_id="+calendar.rep_id+"&method=repetitive_event";calendar.remove_this(o),e(d.modalPromptSelector).modal("hide"),a.preventDefault()})):calendar.remove_this(a)},error:function(){alert(d.generalFailureMessage)}})},calendar.remove_this=function(t){e.ajax({type:"POST",url:d.ajaxEventDelete,data:t,cache:!1,beforeSend:function(){e(".loadingDiv").show()},error:function(){e(".loadingDiv").hide(),alert(d.ajaxError)},success:function(t){e(".loadingDiv").hide(),""==t?(e(d.modalSelector).modal("hide"),e(d.calendarSelector).fullCalendar("refetchEvents")):alert(d.failureDeleteEventMessage)}})},calendar.exportIcal=function(e,t,a,o,n){var l=o,r=n,i="&method=export&id="+encodeURIComponent(e)+"&title="+encodeURIComponent(t)+"&description="+encodeURIComponent(a)+"&start_date="+encodeURIComponent(l)+"&end_date="+encodeURIComponent(r);window.location=d.ajaxEventExport+i},calendar.calendarImport=function(){txt="import="+encodeURIComponent(e("#import_content").val()),e.post(d.ajaxImport,txt,function(t){alert(t),e(d.calendarSelector).fullCalendar("refetchEvents"),e("#cal_import").modal("hide"),e("#import_content").val("")})},1==d.filter&&(e(d.formFilterSelector).on("change",function(t){selected_value=e(this).val(),construct="filter="+encodeURIComponent(selected_value),e.post("includes/loader.php",construct,function(){e(d.calendarSelector).fullCalendar("refetchEvents")}),t.preventDefault()}),e(d.formSearchSelector).keypress(function(e){13==e.which&&(o(),e.preventDefault())}),e(d.formSearchSelector+" button").on("click",function(){o()}))}})}(jQuery);var calendar={};