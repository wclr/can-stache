// can override for using stache as default engine
steal('can/util', 'can/control/route', 'can/model',
    'can/view/stache', 'can/component'
  , 'can/map/define', 'can/construct/super','can/list/sort'
  , function(can) {
        can.mustache = can.view.mustache = can.stache
        return can;
    });