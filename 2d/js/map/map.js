function getConditionsAndActions() {
    var conditionModels = new ConditionActionCollection();

    conditionModels.add(  
      new ConditionAction({
        name: "userIn",
        type: "condition",
        displayName: "User entered a region",
        category: "Regions",
        icon: "img/actionicons/userenter_icon.png",
        options: [ 
                   {
                      name: "region",
                      type: "checkbox",                            
                      getValuesFrom: "regionNames",
                      value: ""  
                   }
                 ]     
    }));

    conditionModels.add( 

      new ConditionAction({
        name: "userOut",
        type: "condition",
        displayName: "User leaved a region",
        category: "Regions",
        icon: "img/actionicons/userout_icon.png",
        options: [ 
                   {
                      name: "region",
                      type: "checkbox",                            
                      getValuesFrom: "regionNames",
                      value: ""   
                   }
                 ]        
    }));

    conditionModels.add( 

      new ConditionAction({
        name: "userAlreadyIn",
        type: "condition",
        displayName: "User moved in a region",
        category: "Regions",
        icon: "img/actionicons/userin_icon.png",
        options: [ 
                   {
                      name: "region",
                      type: "checkbox",                            
                      getValuesFrom: "regionNames",
                      value: ""   
                   }
                 ]        
    }));
/*
    conditionModels.add( 

      new ConditionAction({
        name: "userIdent",
        type: "condition",
        displayName: "User Identification",
        category: "Other",
        icon: "img/actionicons/user_identification.png",
        options: [ 
                   {
                      name: "Name",
                      type: "checkbox",                            
                      values: ["Andree", "Tobi", "Jelle"],
                      value: "Andree"   
                   }
                 ]      
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "userDirection",
        type: "condition",
        displayName: "Users viewing direction",
        category: "Other",
        icon: "img/actionicons/user_direction_icon.png",
        options: [ 
                   {
                      name: "From",
                      type: "slider",
                      values: [0,360,5],
                      value: 0
                   },
                   {
                      name: "To",
                      type: "slider",
                      values: [0,360,5],
                      value: 0 
                   }
                 ]        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "clock",
        type: "condition",
        displayName: "Time switch",
        category: "Other",
        icon: "img/actionicons/clock_icon.png",
        options: [ 
                   {
                      name: "From",
                      type: "checkbox",                            
                      values: ["0:00", "1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00", "0:00"],
                      value: "0:00"   
                   },
                   {
                      name: "To",
                      type: "checkbox",                            
                      values: ["0:00", "1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00", "0:00"]  ,
                      value: "0:00" 
                   }
                 ]      
    }));*/
    
    conditionModels.add( 
      new ConditionAction({
        name: "Swipe-Down;",
        type: "condition",
        displayName: "User swipe down",
        category: "Gestures",
        icon: "img/actionicons/gesture_swipedown.png",
        options: [ 
                 ]        
    }));   

    conditionModels.add( 
      new ConditionAction({
        name: "Swipe-Up;",
        type: "condition",
        displayName: "User swipe up",
        category: "Gestures",
        icon: "img/actionicons/gesture_swipeup.png",
        options: [ 
                 ]        
    }));   

    conditionModels.add( 
      new ConditionAction({
        name: "Swipe-Right;",
        type: "condition",
        displayName: "User swipe right",
        category: "Gestures",
        icon: "img/actionicons/gesture_swiperight.png",
        options: [ 
                 ]        
    }));   

    conditionModels.add( 
      new ConditionAction({
        name: "Swipe-Left;",
        type: "condition",
        displayName: "User swipe left",
        category: "Gestures",
        icon: "img/actionicons/gesture_swipeleft.png",
        options: [ 
                 ]        
    }));  

    conditionModels.add( 
      new ConditionAction({
        name: "Wave;",
        type: "condition",
        displayName: "User made a wave gesture",
        category: "Gestures",
        icon: "img/actionicons/gesture_wave_icon.png",
        options: [ 
                 ]        
    }));
    
    conditionModels.add( 
      new ConditionAction({
        name: "Click;",
        type: "condition",
        displayName: "User made a click gesture",
        category: "Gestures",
        icon: "img/actionicons/gesture_click_icon.png",
        options: [ 
                 ]        
    }));
    
    conditionModels.add( 
      new ConditionAction({
        name: "Combi",
        type: "condition",
        displayName: "Gesture Combination",
        category: "Gestures",
        icon: "img/actionicons/gesture_combi.png",
        options: [ 
                   {
                      name: "Combi",
                      type: "gestureCombi",                            
                      value: ""  
                   }
                 ]        
    }));    
    
     

      //Actions

    conditionModels.add( 
      new ConditionAction({
        name: "livingLight1",
        type: "action",
        displayName: "Spotlight",
        category: "Baall",
        subCategory: "Living",
        icon: "img/actionicons/spotlight_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"] ,
                      value: "Off"  
                   }
                 ],
        roomPosition: {
            x: 1100,
            y: 1000
        }       
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "livingJack1",
        type: "action",
        displayName: "Lamp",
        category: "Baall",
        subCategory: "Living",
        icon: "img/actionicons/lamp1_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
            x: 3000,
            y: 4800
        }       
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "livingJack2",
        type: "action",
        displayName: "Jack",
        category: "Baall",
        subCategory: "Living",
        icon: "img/actionicons/jack_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
            x: 3000,
            y: 5200
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "upperLeftDoor",
        type: "action",
        displayName: "Door left",
        category: "Baall",
        subCategory: "Living",
        icon: "img/actionicons/door_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
            x: 4430,
            y: 4800
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "upperRightDoor",
        type: "action",
        displayName: "Door right",
        category: "Baall",
        subCategory: "Living",
        icon: "img/actionicons/door_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
      x: 6601,
            y: 4734
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "kitchenLight",
        type: "action",
        displayName: "Light",
        category: "Baall",
        subCategory: "Kitchen",
        icon: "img/actionicons/lamp2_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
            x: 4100,
            y: 350
        }          
    }));


    conditionModels.add( 
      new ConditionAction({
        name: "microwaveBoard",
        type: "action",
        displayName: "Microwave",
        category: "Baall",
        subCategory: "Kitchen",
        icon: "img/actionicons/microwave_icon.png",
        options: [ 
                   {
                      name: "Position",
                      type: "slider",
                      values: [0,255,5],
                      value: 0 
                   }
                 ],
        roomPosition: {
            x: 4100,
            y: 2150
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "kitchenet",
        type: "action",
        displayName: "Kitchenette",
        category: "Baall",
        subCategory: "Kitchen",
        icon: "img/actionicons/kitchenette_icon.png",
        options: [ 
                   {
                      name: "Position",
                      type: "slider",
                      values: [0,255,5],
                      value: 0 
                   }
                 ],
        roomPosition: {
            x: 4100,
            y: 1550
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "cupboard",
        type: "action",
        displayName: "Cups",
        category: "Baall",
        subCategory: "Kitchen",
        icon: "img/actionicons/cups_icon.png",
        options: [ 
                   {
                      name: "Position",
                      type: "slider",
                      values: [0,255,5],
                      value: 0 
                   }
                 ],
        roomPosition: {
            x: 4100,
            y: 950
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "kitchenJack",
        type: "action",
        displayName: "Jack",
        category: "Baall",
        subCategory: "Kitchen",
        icon: "img/actionicons/jack_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
            x: 3500,
            y: 350
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "bathroomLight",
        type: "action",
        displayName: "Light",
        category: "Baall",
        subCategory: "Bath",
        icon: "img/actionicons/lamp4_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
            x: 5800,
            y: 1300
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "basin",
        type: "action",
        displayName: "Basin",
        category: "Baall",
        subCategory: "Bath",
        icon: "img/actionicons/basin_icon.png",
        options: [ 
                   {
                      name: "Position",
                      type: "slider",
                      values: [0,255,5],
                      value: 0
                   }
                 ],
        roomPosition: {
            x: 6200,
            y: 350
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "bathroomDoor",
        type: "action",
        displayName: "Door",
        category: "Baall",
        subCategory: "Bath",
        icon: "img/actionicons/bigdoor_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
            x:  5681,
            y: 1930
        }         
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "bedroomBed",
        type: "action",
        displayName: "Bed",
        category: "Baall",
        subCategory: "Bed",
        icon: "img/actionicons/bett_icon.png",
        options: [ 
                   {
                      name: "Head",
                      type: "slider",
                      values: [0,10,1],
                      value: 0 
                   },
                   {
                      name: "Foot",
                      type: "slider",
                      values: [0,10,1],
                      value: 0 
                   }
                 ],
        roomPosition: {
            x:  8200,
            y: 3724
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "lowerLeftDoor",
        type: "action",
        displayName: "Door left",
        category: "Baall",
        subCategory: "Bed",
        icon: "img/actionicons/door_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "On"   
                   }
                 ],
        roomPosition: {
            x:  4430,
            y: 2600
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "lowerRightDoor",
        type: "action",
        displayName: "Door right",
        category: "Baall",
        subCategory: "Bed",
        icon: "img/actionicons/door_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "On"   
                   }
                 ],
        roomPosition: {
            x:  6601,
            y: 2552
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "bedroomJack1",
        type: "action",
        displayName: "Lamp",
        category: "Baall",
        subCategory: "Bed",
        icon: "img/actionicons/lamp1_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"] ,
                      value: "Off"  
                   }
                 ],
        roomPosition: {
      x:  8200,
            y: 4926
            
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "bedroomLight2",
        type: "action",
        displayName: "Lamp",
        category: "Baall",
        subCategory: "Bed",
        icon: "img/actionicons/spotlight_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"] ,
                      value: "Off"  
                   }
                 ],
        roomPosition: {
            x:  7339,
            y: 350
        }        
    }));

    
    conditionModels.add( 
      new ConditionAction({
        name: "bedroomLight1",
        type: "action",
        displayName: "Lamp",
        category: "Baall",
        subCategory: "Bed",
        icon: "img/actionicons/lamp3_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"],
                      value: "Off"   
                   }
                 ],
        roomPosition: {
            x:  6790,
            y: 3589
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "bedroomJack2",
        type: "action",
        displayName: "Lamp",
        category: "Baall",
        subCategory: "Bed",
        icon: "img/actionicons/lamp1_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"] ,
                      value: "Off"  
                   }
                 ],
        roomPosition: {
      x:  8200,
            y: 2500
        }        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "corridorLight",
        type: "action",
        displayName: "Lamp",
        category: "Baall",
        subCategory: "Corridor",
        icon: "img/actionicons/spotlight_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"] ,
                      value: "Off"  
                   }
                 ],
        roomPosition: {
            x:  5564,
            y: 4870
        }        
    }));


    conditionModels.add( 
      new ConditionAction({
        name: "licht3",
        type: "action",
        displayName: "Licht 3",
        category: "DigitalSTROM",
        icon: "img/actionicons/lamp2_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"] ,
                      value: "Off"  
                   }
                 ]        
    }));


    conditionModels.add( 
      new ConditionAction({
        name: "licht2",
        type: "action",
        displayName: "Licht 2",
        category: "DigitalSTROM",
        icon: "img/actionicons/lamp2_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"] ,
                      value: "Off"  
                   }
                 ]        
    }));



    conditionModels.add( 
      new ConditionAction({
        name: "licht1",
        type: "action",
        displayName: "Licht 1",
        category: "DigitalSTROM",
        icon: "img/actionicons/lamp2_icon.png",
        options: [ 
                   {
                      name: "On/Off",
                      type: "checkbox",                            
                      values: ["On", "Off"] ,
                      value: "Off"  
                   }
                 ]        
    }));
    /*conditionModels.add( 
      new ConditionAction({
        name: "digitalScene1",
        type: "action",
        displayName: "Scene 1",
        category: "DigitalSTROM",
        icon: "img/actionicons/digitalstrom_scene1.png",
        options: [ 

                 ]        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "digitalScene2",
        type: "action",
        displayName: "Scene 2",
        category: "DigitalSTROM",
        icon: "img/actionicons/digitalstrom_scene2.png",
        options: [ 

                 ]        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "digitalScene3",
        type: "action",
        displayName: "Scene 3",
        category: "DigitalSTROM",
        icon: "img/actionicons/digitalstrom_scene3.png",
        options: [ 

                 ]        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "digitalScene4",
        type: "action",
        displayName: "Scene 4",
        category: "DigitalSTROM",
        icon: "img/actionicons/digitalstrom_scene4.png",
        options: [ 

                 ]        
    }));

    conditionModels.add( 
      new ConditionAction({
        name: "digitalScene5",
        type: "action",
        displayName: "Scene 5",
        category: "DigitalSTROM",
        icon: "img/actionicons/digitalstrom_scene5.png",
        options: [ 

                 ]        
    }));*/

    conditionModels.add( 
      new ConditionAction({
        name: "pushUi",
        type: "action",
        displayName: "Push UI to clients",
        category: "Other",
        icon: "img/actionicons/phone_icon.png",
        options: [ 
                   {
                      name: "Interface",
                      type: "checkbox",                            
                      values: ["Chillen", "Living", "Lights", "TV", "Kitchen"],
                      value: "Chillen"   
                   }
                 ]        
    }));
 
    return conditionModels;   
}
