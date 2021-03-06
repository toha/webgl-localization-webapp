var ConditionActionView = Backbone.View.extend({
	events: {
	},
	initialize: function() {
		_.bindAll(this, "render");

		this.model.bind('change', this.render);
	},
	render: function() {		
	
		return this;
	},
	firstRender: function() {
      var self = this;
    
      this.el = ich.conditionTmpl(this.model.toJSON());
    
      $.each(this.model.get("options"), function(index, option) { 
        var configEl =  ich.conditionConfigRowTmpl(option);
          

      if (option.type == "checkbox") {
        var checkbox = '<select class="actionEntryNameValue">';          

        // Get Data
        if (option.getValuesFrom == "regionNames") {
          var names = getRegionNames();
          $.each(names, function(index, name) {
            
            if (name[0] == option.value) {
              var nameEl = '<option selected="selected" value="'+name[0]+'">'+name[1]+"</option>";
            }
            else {
              var nameEl = '<option value="'+name[0]+'">'+name[1]+'</option>';
            }
            
            checkbox += nameEl;
            
          });
        } 
        else {
          $.each(option.values, function(index, value) {

            if (value == option.value) {
              var nameEl = '<option selected="selected">'+value+"</option>";
            }
            else {
              var nameEl = "<option>"+value+"</option>";
            }
            
            checkbox += nameEl;
          });
        }
        checkbox += "</select>"



        $(configEl).find(".actionEntryFormValue").eq(0).append(checkbox); 

        var o = option;
        $(".actionEntryNameValue", configEl).change(function(e) {
          if (o.value != $(this).val()) {
            o.value = $(this).val();
            self.model.set({
              changed: Math.random()
            });            
          }                    
        });

        $(".actionEntryNameValue", configEl).change();

      }
      else if (option.type == "slider") {
        var o = option;
        $(configEl).find(".actionEntryFormRow").addClass("sliderRow");
        var slider = '<div class="slider2"></div><span class="slider_value">'+option.value+'</span>';
        $(configEl).find(".actionEntryFormValue").eq(0).append(slider); 

        $(configEl).find(".slider2").slider({
	        value: option.value,
	        min: option.values[0],
	        max: option.values[1],
	        step: option.values[2],
	        slide: function( event, ui ) {
            $(this).next().text(ui.value);
            $(".user_direction_img2").css("-webkit-transform", "rotate("+ui.value+"deg)");
		        $(".user_direction_img2").css("-moz-transform", "rotate("+ui.value+"deg)");
	        },
	        stop: function(event, ui) {        
            o.value = ui.value;
            self.model.set({
              changed: Math.random()
            });               
	        }
		
        });

      }
      else if (option.type == "gestureCombi") {
        $(configEl).find(".actionEntryFormValue").eq(0).append('<span class="gestureCombiValues">'+option.value+'</span> <span class="gestureCombiChangeLnk"><a href="#">Change</a></span>');
        $(configEl).find(".gestureCombiChangeLnk").click(function() {
          var test = new GestureDialogView({
            model: self.model
          });
          
          test.firstRender(configEl);
        }); 
      }

      self.$(".actionEntryConfigTxt").append(configEl);

      
    });

    var insertEl = null;  
    if (this.model.get("type") == "condition") {
      insertEl = "#avtabs";
    }
    else {
      insertEl = "#tabs";
    }
    $(insertEl).find("li").each(function(index, value) { 
      if (self.model.get("category") == $(value).children().first().text()) {
        id = $(value).children().first().attr("href");

        // Wenns eine action ist und es eine subcategory gibt, dann dahinter einfügen
        if (self.model.get("type") == "action" && self.model.get("subCategory") != undefined ) {
          $(".actionSubCategory"+self.model.get("subCategory"), $(".sliderCtrlContentContainer", id)).after(self.el);
        }
        else {      
          $(".sliderCtrlContentContainer", id).prepend(self.el);
        }
      }
    });



    $(this.el).bind('selectAction', function() {
      self.model.set({
        selected: true        
      });
    });
    $(this.el).bind('deselectAction', function() {
      self.model.set({
        selected: false        
      });
    });



    this.dblclickEvent();

    this.dragEvent();

    return this;
	},
  dblclickEvent: function() {
    var self = this;
    $(this.el).dblclick(      
      function () {
        $(".actionEntry").each(function(index, value) {
          if ($(value).width() > 64) {
            $(value).animate({
                width: '64'
              }, 150, function() {
            });
          }
        })
        $(".actionEntry").height(64);

        if ($(self.el).width() == 64) {
          $(self.el).animate({
            width: '250'
          }, 150, function() {
            self.$(".actionEntryConfigTxt").show();
          });
        }
        else {
          self.$(".actionEntryConfigTxt").hide();
          $(self.el).animate({
            width: '64'
          }, 150, function() {           
          });
        }
      }
    );
    $(this.el).mousewheel(function() {
      $(self.el).trigger("dblclick");
    });
    $(".actionEntryIcon", $(this.el)).bind("touchstart", function() {
      if ($(self.el).css("width") == '64px') {
        $(self.el).trigger("dblclick");
      }
      else {
        $(".selected_conditions").prepend(self.el);
        $(".actionCondi"+value.get("name")).trigger("selectAction");        
        $(self.el).trigger("selectAction"); 
      }
      
      
    });
    

  },
  dragEvent: function() {
    var self = this;
    var insertEl = null;  
    var type = null;
    var tabcontent = null;
    if (this.model.get("type") == "condition") {
      insertEl = "avtabs";
      type = "conditions";
      tabcontent = ".tabcontent";
    }
    else {
      insertEl = "tabs";
      type = "actions"
      tabcontent = ".actions_tabcontent";
    }
    $(this.el).draggable({ 
      revert: true, 
      drag: function(event, ui) {
        $(this).css("position", "absolute");
        if ($(self.el).parent().parent().parent().parent().attr("id") == insertEl) {
          $(".selected_"+type).addClass("selected_"+type+"_hover");
        }
        else {

          $(tabcontent).css("background-color", "#efefef");
        }
      },
      stop: function(event, ui) {
        $(this).css("position", "inherit");
        $(".selected_"+type).removeClass("selected_"+type+"_hover");
        $(tabcontent).css("background-color", "#fff");
      }
    });
  }
});

var CommandView = Backbone.View.extend({
	events: {
	},
	initialize: function() {
		_.bindAll(this, "render");

		this.model.bind('change', this.render);
	},
	render: function() {		
	
		return this;
	},
	firstRender: function(dontDraw) {
    var self = this;

    this.el = ich.commandDialogTmpl(this.model.toJSON());
    $("#b").append(this.el);

	  this.$( ".selected_conditions" ).droppable({
      accept: ".actionEntry",
		  drop: function( event, ui ) {
			    $(".selected_conditions").append(ui.draggable[0]);
          ui.draggable.css("top", "0px");
          ui.draggable.css("left", "0px");
          ui.draggable.css("position", "inherit");
          ui.draggable.trigger("selectAction");
		  }
	  });  

	  this.$( ".selected_actions" ).droppable({
      accept: ".actionEntry",
		  drop: function( event, ui ) {
			    $(".selected_actions").append(ui.draggable[0]);
          ui.draggable.css("top", "0px");
          ui.draggable.css("left", "0px");
          ui.draggable.css("position", "inherit");
          ui.draggable.trigger("selectAction");
		  }
	  }); 

	  this.$(".sliderCtrlContentContainer", $( ".tabcontent, .actions_tabcontent" )).droppable({
      accept: ".actionEntry",
		  drop: function( event, ui ) {
			    $(this).prepend(ui.draggable[0]);
          ui.draggable.css("top", "0px");
          ui.draggable.css("left", "0px");
          ui.draggable.css("position", "inherit");
          ui.draggable.trigger("deselectAction");
		  }
	  }); 
    

    var conditionModels = getConditionsAndActions();

    cac = new ConditionActionCollection();
    conditionModels.each(function(model) {

      if (self.model.get("conditions") != undefined && self.model.get("conditions").isInCollection(model.get("name"))) {
        model = self.model.get("conditions").getByName(model.get("name"));
      } 

      if (self.model.get("actions") != undefined && self.model.get("actions").isInCollection(model.get("name"))) {
        model = self.model.get("actions").getByName(model.get("name"));
      } 

      var view = new ConditionActionView({
			    model: model
		  });	 

      view.firstRender();

      model.set({
        view: view
      }); 

      cac.add(model);
      
    });


    $( "#avtabs" ).tabs();
    $( "#tabs" ).tabs();



    $(".sliderCtrl").each(function(index, slideCtrl) {
      var actionCount = $(".actionEntry",slideCtrl).length;
      if (actionCount > 3) {
        $(".horizontalSlider", $(slideCtrl).next()).slider({
          min: 0,
          max: 75*actionCount+150,
          slide: function(event, ui) { 
            $(".sliderCtrlContentContainer", $(this).parent().parent()).css("margin-left", -1*ui.value + "px");
          }  
        });



      }
    });

   $( "#tabs" ).touchwipe({
    wipeLeft: function() { 
      var sl = $(".horizontalSlider",  $("a",  $(".ui-tabs-selected", "#tabs")  ).attr("href"));
      var value = sl.slider( "option", "value" );
      var newvalue = value+350;
      sl.slider( "value", newvalue);
      $(".sliderCtrlContentContainer", $(sl).parent().parent()).css("margin-left", -1*newvalue+ "px");

      /*$(".sliderCtrlContentContainer", $(sl).parent().parent()).animate({
          "margin-left": '-=350'
        }, 1000, function() {
          // Animation complete.
        });*/
    },
    wipeRight: function() { 
      var sl = $(".horizontalSlider",  $("a",  $(".ui-tabs-selected", "#tabs")  ).attr("href"));
      var value = sl.slider( "option", "value" );
      var newvalue = value-350;
      sl.slider( "value", newvalue);
      $(".sliderCtrlContentContainer", $(sl).parent().parent()).css("margin-left", -1*newvalue+ "px");

      /*$(".sliderCtrlContentContainer", $(sl).parent().parent()).animate({
          "margin-left": '+=350'
        }, 1, function() {
          // Animation complete.
        });*/
    },
    min_move_x: 20,
    min_move_y: 20,
    preventDefaultEvents: true
    }); 

    this.$(".addCommandBtn").click(function(e) {
      var conditionCollection = new ConditionActionCollection();
      var actionCollection = new ConditionActionCollection();
      
      cac.each(function( value) {
        if (value.get("selected") === true) {
          if (value.get("type") == "condition") {
            conditionCollection.add(value);
          }
          else {
            actionCollection.add(value);
          }
        } 
      });
      if (conditionCollection.length == 0) {
        alert("Select at least one condition");
        return;
      }
      else if (actionCollection.length == 0) {
        alert("Select at least one action");
        return;
      }
      else if (self.$(".commandNameInput").val() == "") {
        alert("Enter a command name");
        return;
      }


      self.model.set({
        name: self.$(".commandNameInput").val(),
        conditions: conditionCollection,
        actions: actionCollection
      });
      cmdNavView = new CommandNavView({
			  model: self.model
		  });	
		  cmdNavView.firstRender();

      self.model.sendCommand();      

      $(".action_dialog").remove();

    });

    $(this.el).hover(function() {
      $("#navigation").css("opacity", 1);
    }, 
    function() {
      $("#navigation").css("opacity", 0.6);
    });

    var dialogPosition = null;
    if ($("#navigation").css("right") == "0px") {
      // nav is right
      dialogPosition = [$("body")[0].offsetWidth-$("#navigation").width()-500-7,0];
    }
    else {
      // nav is left
      dialogPosition = [0+$("#navigation").width(),0];
    }

    if (dontDraw === true) {

    }
    else {
      var h = $("body")[0].offsetHeight-8;
      var w = "500px";
      
      if (isMobile()) {
        dialogPosition = [0.0];
        //$(this.el).css("position", "absolute");
        $(this.el).css("z-index", "65300");
        w = "100%";

      }
      
      $(this.el).dialog({
        height: h,
        width: w,
        position: dialogPosition,
        resizable: false,
        draggable: false,
        close: function(event, ui) {
          $(".action_dialog").remove();
        }
      });
      
      
    }


    // Wenn schon Bedingungen oder Aktionen da sind, diese laden
    if (this.model.get("conditions") != undefined) {
      this.model.get("conditions").each(function(value) {
        $(".selected_conditions").prepend($(".actionCondi"+value.get("name")));
        $(".actionCondi"+value.get("name")).trigger("selectAction");
      });
    }

    if (this.model.get("actions") != undefined) {
      this.model.get("actions").each(function(value) {
        $(".selected_actions").prepend($(".actionCondi"+value.get("name")));
        $(".actionCondi"+value.get("name")).trigger("selectAction");
      });
    } 

    $("#tabs").focus();

  

    
    return this;
	}
});

var CommandNavView = Backbone.View.extend({
	events: {
    "click .editCommandLnk": "editCommand",
    "click .delCommandLnk": "delCommand",
	},
	initialize: function() {
		_.bindAll(this, "render");

		this.model.bind('change', this.render);
	},
	render: function() {
		$(this.el).html(ich.commandnavtmpl(this.model.toJSON()));

    var condString = "";
    this.model.get("conditions").each(function(value) {
      condString += value.get("name") + ", ";
    });

    var actString = "";
    this.model.get("actions").each(function(value) {
      actString += value.get("name") + ", ";
    });

    this.$(".comNavCond").html(condString);
    this.$(".actNavCond").html(actString);

		return this;
	},
	firstRender: function() {

    this.model.set({
      navview: this
    });
		this.render();		

    
    $("#commandListCtrl").append(this.el);
		return this;
	},
  editCommand: function() {

    this.delCommand();

    

    var view = new CommandView({
	    model: this.model
    });	    
    
    view.firstRender();
    this.model.set({
      view: view
    });   

    sceneview.model.get("commands").add(this.model);      


  },
  delCommand: function() {
    sceneview.model.get("commands").remove(this.model);
    this.model.sendRemove();    
    $(this.el).remove();
    
  }

});
