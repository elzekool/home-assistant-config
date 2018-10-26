var CONFIG = {
   customTheme: CUSTOM_THEMES.TRANSPARENT,
   transition: TRANSITIONS.SIMPLE,
   entitySize: ENTITY_SIZES.SMALL,
   
   tileSize: 165,
   tileMargin: 6,
   
   serverUrl: SECRETS.serverUrl,
   wsUrl: SECRETS.wsUrl,
   
   authToken: null,
   debug: false,

   events: [],
   
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.BOTTOM,
   hideScrollbar: false,
   groupsAlign: GROUP_ALIGNS.VERTICALLY,

   groupMarginCss: '60px 40px',

   pages: [
      {
         title: 'Startpagina',
         bg: 'images/bg1.jpeg',
         icon: 'mdi-home-outline', // home icon
         
         groups: [
            
            {
               title: 'Algemeen',
               width: 2,
               height: 2,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.SENSOR,
                     id: 'light.livingroom_standing_light_up_1',
                     title: 'Temperatuur',
                     id: 'sensor.toon_current_temperature',
                     unit: '°C',
                     state: "Ingesteld: &climate.toon_van_eneco.attributes.temperature °C",
                     filter: function (value) { // optional
                        var num = parseFloat(value);
                        return num && !isNaN(num) ? num.toFixed(1) : value;
                     },
                     classes: ["-toon-temperature"],
                  },
                  {
                     position: [1, 0],
                     title: "Alles uit",
                     type: TYPES.SCRIPT,
                     id: 'script.livingroom_all_off',
                     icons: {
                        on: "mdi-lightbulb-outline",
                        off: "mdi-lightbulb-outline"
                     },
                     state: false
                  },
                  {
                     position: [0, 1],
                     title: "Fel aan",
                     type: TYPES.SCRIPT,
                     id: 'script.livingroom_full_on',
                     icons: {
                        on: "mdi-lightbulb-on-outline",
                        off: "mdi-lightbulb-on-outline"
                     },
                     state: false
                  },
                  {
                     position: [1, 1],
                     title: "Gezellig",
                     type: TYPES.SCRIPT,
                     id: 'script.livingroom_dimmed',
                     icons: {
                        on: "mdi-candle",
                        off: "mdi-candle"
                     },
                     state: false
                  },
               ]
            },
            {
               title: 'Voorkamer',
               width: 2,
               height: 2,
               items: [
                  
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.LIGHT,
                     id: 'light.livingroom_standing_light_up_2',
                     title: 'Richting voorkamer',
                     bgOpacity: 0.5,
                     states: {
                        on: "Aan",
                        off: "Uit"
                     },
                     icons: {
                        on: "mdi-lightbulb-on",
                        off: "mdi-lightbulb",
                     },
                     sliders: [
                        {
                           title: 'Helderheid',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.LIGHT,
                     id: 'light.livingroom_standing_light_up_1',
                     title: 'Richting eetkamer',
                     states: {
                        on: "Aan",
                        off: "Uit"
                     },
                     icons: {
                        on: "mdi-lightbulb-on",
                        off: "mdi-lightbulb",
                     },
                     sliders: [
                        {
                           title: 'Helderheid',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  
                  {
                     position: [0, 1],
                     width: 1,
                     type: TYPES.LIGHT,
                     id: 'light.livingroom_standing_light_down',
                     title: 'Leeslamp',
                     states: {
                        on: "Aan",
                        off: "Uit"
                     },
                     icons: {
                        on: "mdi-lightbulb-on",
                        off: "mdi-lightbulb",
                     },
                     sliders: [
                        {
                           title: 'Helderheid',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  
                  {
                     position: [1, 1],
                     width: 1,
                     type: TYPES.LIGHT,
                     id: 'light.hue_bloom_1',
                     title: 'Sfeerlicht',
                     states: {
                        on: "Aan",
                        off: "Uit"
                     },
                     icons: {
                        on: "mdi-lightbulb-on",
                        off: "mdi-lightbulb",
                     },
                     sliders: [
                        {
                           title: 'Helderheid',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  }
                  
               ]
            },
            {
               title: 'Eetkamer',
               width: 2,
               height: 1,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.LIGHT,
                     id: 'light.dining_lamp',
                     title: 'Boven tafel',
                     states: {
                        on: "Aan",
                        off: "Uit"
                     },
                     icons: {
                        on: "mdi-lightbulb-on",
                        off: "mdi-lightbulb",
                     },
                     sliders: [
                        {
                           title: 'Helderheid',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: 'switch.livingroom_showcase',
                     title: 'Vitrinekast',
                     states: {
                        on: "Aan",
                        off: "Uit"
                     },
                     icons: {
                        on: "mdi-lightbulb-on",
                        off: "mdi-lightbulb",
                     }
                  }
                  
               ]
            }
         ]
      }
   ],
}
