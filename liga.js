/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'email': '&#xe90b;',
            'mail': '&#xe90b;',
            'markunread': '&#xe90b;',
            'local_post_office': '&#xe90b;',
            'desktop_mac': '&#xe90c;',
            'keyboard_arrow_down': '&#xe90d;',
            'keyboard_arrow_left': '&#xe90e;',
            'keyboard_arrow_right': '&#xe90f;',
            'keyboard_arrow_up': '&#xe91a;',
            'phone_iphone': '&#xe91b;',
            'panorama_fish_eye': '&#xe91c;',
            'radio_button_unchecked': '&#xe91c;',
            'remove_red_eye': '&#xe91d;',
            'visibility': '&#xe91d;',
            'zoom_out_map': '&#xe91e;',
            'arrow-down': '&#xe92c;',
            'arrow-up': '&#xe92f;',
            'check': '&#xe92b;',
            'menu': '&#xe91f;',
            'arrow-left': '&#xe930;',
            'arrow-right': '&#xe931;',
            'do_not_disturb_alt': '&#xe92a;',
            'radio_button_checked': '&#xe92d;',
            'star': '&#xe92e;',
            'grade': '&#xe92e;',
            'star_outline': '&#xe93a;',
            'home': '&#xe93d;',
            'search': '&#xe93e;',
            'settings': '&#xe93f;',
            'visibility-off': '&#xe94a;',
            'shuffle_on': '&#xe94c;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
