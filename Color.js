const Events = {
    RGB_UPDATED: 'RGBUpdated',
    HSL_UPDATED: 'HSLUpdated',
    HSV_UPDATED: 'HSVUpdated',
    HEX_UPDATED: 'HexUpdated',
    INT_UPDATED: 'IntUpdated',
    UPDATED: 'updated',
    PARSED: 'parsed'
};


const namedColors = {
    'transparent': 'rgba(0, 0, 0, 0)',
    'aliceblue': '#F0F8FF',
    'antiquewhite': '#FAEBD7',
    'aqua': '#00FFFF',
    'aquamarine': '#7FFFD4',
    'azure': '#F0FFFF',
    'beige': '#F5F5DC',
    'bisque': '#FFE4C4',
    'black': '#000000',
    'blanchedalmond': '#FFEBCD',
    'blue': '#0000FF',
    'blueviolet': '#8A2BE2',
    'brown': '#A52A2A',
    'burlywood': '#DEB887',
    'cadetblue': '#5F9EA0',
    'chartreuse': '#7FFF00',
    'chocolate': '#D2691E',
    'coral': '#FF7F50',
    'cornflowerblue': '#6495ED',
    'cornsilk': '#FFF8DC',
    'crimson': '#DC143C',
    'cyan': '#00FFFF',
    'darkblue': '#00008B',
    'darkcyan': '#008B8B',
    'darkgoldenrod': '#B8860B',
    'darkgray': '#A9A9A9',
    'darkgrey': '#A9A9A9',
    'darkgreen': '#006400',
    'darkkhaki': '#BDB76B',
    'darkmagenta': '#8B008B',
    'darkolivegreen': '#556B2F',
    'darkorange': '#FF8C00',
    'darkorchid': '#9932CC',
    'darkred': '#8B0000',
    'darksalmon': '#E9967A',
    'darkseagreen': '#8FBC8F',
    'darkslateblue': '#483D8B',
    'darkslategray': '#2F4F4F',
    'darkslategrey': '#2F4F4F',
    'darkturquoise': '#00CED1',
    'darkviolet': '#9400D3',
    'deeppink': '#FF1493',
    'deepskyblue': '#00BFFF',
    'dimgray': '#696969',
    'dimgrey': '#696969',
    'dodgerblue': '#1E90FF',
    'firebrick': '#B22222',
    'floralwhite': '#FFFAF0',
    'forestgreen': '#228B22',
    'fuchsia': '#FF00FF',
    'gainsboro': '#DCDCDC',
    'ghostwhite': '#F8F8FF',
    'gold': '#FFD700',
    'goldenrod': '#DAA520',
    'gray': '#808080',
    'grey': '#808080',
    'green': '#008000',
    'greenyellow': '#ADFF2F',
    'honeydew': '#F0FFF0',
    'hotpink': '#FF69B4',
    'indianred': '#CD5C5C',
    'indigo': '#4B0082',
    'ivory': '#FFFFF0',
    'khaki': '#F0E68C',
    'lavender': '#E6E6FA',
    'lavenderblush': '#FFF0F5',
    'lawngreen': '#7CFC00',
    'lemonchiffon': '#FFFACD',
    'lightblue': '#ADD8E6',
    'lightcoral': '#F08080',
    'lightcyan': '#E0FFFF',
    'lightgoldenrodyellow': '#FAFAD2',
    'lightgray': '#D3D3D3',
    'lightgrey': '#D3D3D3',
    'lightgreen': '#90EE90',
    'lightpink': '#FFB6C1',
    'lightsalmon': '#FFA07A',
    'lightseagreen': '#20B2AA',
    'lightskyblue': '#87CEFA',
    'lightslategray': '#778899',
    'lightslategrey': '#778899',
    'lightsteelblue': '#B0C4DE',
    'lightyellow': '#FFFFE0',
    'lime': '#00FF00',
    'limegreen': '#32CD32',
    'linen': '#FAF0E6',
    'magenta': '#FF00FF',
    'maroon': '#800000',
    'mediumaquamarine': '#66CDAA',
    'mediumblue': '#0000CD',
    'mediumorchid': '#BA55D3',
    'mediumpurple': '#9370D8',
    'mediumseagreen': '#3CB371',
    'mediumslateblue': '#7B68EE',
    'mediumspringgreen': '#00FA9A',
    'mediumturquoise': '#48D1CC',
    'mediumvioletred': '#C71585',
    'midnightblue': '#191970',
    'mintcream': '#F5FFFA',
    'mistyrose': '#FFE4E1',
    'moccasin': '#FFE4B5',
    'navajowhite': '#FFDEAD',
    'navy': '#000080',
    'oldlace': '#FDF5E6',
    'olive': '#808000',
    'olivedrab': '#6B8E23',
    'orange': '#FFA500',
    'orangered': '#FF4500',
    'orchid': '#DA70D6',
    'palegoldenrod': '#EEE8AA',
    'palegreen': '#98FB98',
    'paleturquoise': '#AFEEEE',
    'palevioletred': '#D87093',
    'papayawhip': '#FFEFD5',
    'peachpuff': '#FFDAB9',
    'peru': '#CD853F',
    'pink': '#FFC0CB',
    'plum': '#DDA0DD',
    'powderblue': '#B0E0E6',
    'purple': '#800080',
    'red': '#FF0000',
    'rosybrown': '#BC8F8F',
    'royalblue': '#4169E1',
    'saddlebrown': '#8B4513',
    'salmon': '#FA8072',
    'sandybrown': '#F4A460',
    'seagreen': '#2E8B57',
    'seashell': '#FFF5EE',
    'sienna': '#A0522D',
    'silver': '#C0C0C0',
    'skyblue': '#87CEEB',
    'slateblue': '#6A5ACD',
    'slategray': '#708090',
    'slategrey': '#708090',
    'snow': '#FFFAFA',
    'springgreen': '#00FF7F',
    'steelblue': '#4682B4',
    'tan': '#D2B48C',
    'teal': '#008080',
    'thistle': '#D8BFD8',
    'tomato': '#FF6347',
    'turquoise': '#40E0D0',
    'violet': '#EE82EE',
    'white': '#FFFFFF'
};


class Color {

    /**
     * Color instance - get, update and output a Color between structures.
     * @constructor
     * @param {string|object|Color} value Accepts any valid CSS color value e.g., #FF9900, rgb(255, 153, 0), rgba(100%, 40%, 0%, 0.8);
     * a hash with properties mapped to the Color instance e.g., red, green, saturation, brightness;
     * another Color instance; a numeric color value; a named CSS color
     * @class Instances of the Color class serve as abstract reprentations of the color itself, and don't need to be
     * transformed from one format to another.  A single Color instance can have any component (red, green, blue, hue, saturation, lightness, brightness,
     * alpha) updated regardless of the source.  Further, all other components will be normalized automatically.  If a Color is instanced using a hex value,
     * it can have it's lightness component updated directly despite lightness being a HSL component.  Further, the same color instance can output it's
     * component values in any format without any extra conversions.  Conversion methods (getRGB, getHex) are provided just as helpers, and don't perform any
     * actual transformations.  They are not required for use or translation.  The standard component parts are available as instance methods - passing a value
     * argument to set, and each return the value as well (with or without setter arguments).  These components perform transformations and dispatch events, and
     * can be used without any sugar to manage the Color instance.
     * Component methods include:
     * .red()
     * .green()
     * .blue()
     * .hue()
     * .saturation()
     * .lightness()
     * .brightness()
     * .hex()
     * .decimal()
     * </ul>
     * @example
     * // instancing...
     * new Color();
     * new Color('#FF9900');
     * new Color(element.style.color);
     * new Color('pink');
     * new Color(123456);
     * new Color({ red : 255, green : 100, blue : 0 });
     * new Color(colorInstance);
     * // usage...
     * var color = new Color('#FF9900');
     * color.brightness(20);
     * element.style.backgroundColor = color;
     * color.getRGB();
     * color.saturation();
     */
    constructor(value) {
        const that = this;

        // helpers
        Object.defineProperty(this, "absround", {
            value: function(number) {
                return (0.5 + number) << 0;
            }
        });

        Object.defineProperty(this, "hue2rgb", {
            value: function(a, b, c) { // http://www.w3.org/TR/css3-color/#hsl-color
                if (c < 0) c += 1;
                if (c > 1) c -= 1;
                if (c < 1 / 6) return a + (b - a) * 6 * c;
                if (c < 1 / 2) return b;
                if (c < 2 / 3) return a + (b - a) * (2 / 3 - c) * 6;
                return a;
            }
        });

        Object.defineProperty(this, "p2v", {
            value: function(p) {
                return that.isPercent.test(p) ? that.absround(parseInt(p) * 2.55) : parseInt(p);
            }
        });

        Object.defineProperty(this, "isNamedColor", {
            value: function(key) {
                const lc = ('' + key).toLowerCase();
                return namedColors.hasOwnProperty(lc) ?
                    namedColors[lc] :
                    null;
            }
        });

        // patterns
        /** @type {RegExp} */
        Object.defineProperty(this, "isHex", {
            value: /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i
        });
        /** @type {RegExp} */
        Object.defineProperty(this, "isHSL", {
            value: /^hsla?\((\d{1,3}?),\s*(\d{1,3}%),\s*(\d{1,3}%)(,\s*[01]?\.?\d*)?\)$/
        });
        /** @type {RegExp} */
        Object.defineProperty(this, "isRGB", {
            value: /^rgba?\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)(,\s*[01]?\.?\d*)?\)$/
        });
        /** @type {RegExp} */
        Object.defineProperty(this, "isPercent", {
            value: /^\d+(\.\d+)*%$/
        });

        /** @type {RegExp} */
        Object.defineProperty(this, "hexBit", {
            value: /([0-9a-f])/gi
        });
        /** @type {RegExp} */
        Object.defineProperty(this, "leadHex", {
            value: /^#/
        });

        /** @type {RegExp} */
        Object.defineProperty(this, "matchHSL", {
            value: /^hsla?\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%(,\s*([01]?\.?\d*))?\)$/
        });
        /** @type {RegExp} */
        Object.defineProperty(this, "matchRGB", {
            value: /^rgba?\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)(,\s*([01]?\.?\d*))?\)$/
        });

        // properties
        /** @type {number} */
        Object.defineProperty(this, "_decimal", {
            value: 0, // 0 - 16777215
            writable: true
        });
        /** @type {string} */
        Object.defineProperty(this, "_hex", {
            value: '#000000', // #000000 - #FFFFFF
            writable: true
        });
        /** @type {number} */
        Object.defineProperty(this, "_red", {
            value: 0, // 0 - 255
            writable: true
        });
        /** @type {number} */
        Object.defineProperty(this, "_green", {
            value: 0, // 0 - 255
            writable: true
        });
        /** @type {number} */
        Object.defineProperty(this, "_blue", {
            value: 0, // 0 - 255
            writable: true
        });
        /** @type {number} */
        Object.defineProperty(this, "_hue", {
            value: 0, // 0 - 360
            writable: true
        });
        /** @type {number} */
        Object.defineProperty(this, "_saturation", {
            value: 0, // 0 - 100
            writable: true
        });
        /** @type {number} */
        Object.defineProperty(this, "_lightness", {
            value: 0, // 0 - 100
            writable: true
        });
        /** @type {number} */
        Object.defineProperty(this, "_brightness", {
            value: 0, // 0 - 100
            writable: true
        });
        /** @type {number} */
        Object.defineProperty(this, "_alpha", {
            value: 1, // 0 - 1
            writable: true
        });

        // output

        /**
         * Sets the format used by the native toString method
         * Color.HEX outputs #FF9900
         * Color.RGB outputs rgb(255, 153, 0)
         * Color.PRGB outputs rgb(100%, 50%, 0)
         * Color.RGBA outputs rgba(255, 153, 0, 0.5)
         * Color.PRGBA outputs rgba(100%, 50%, 0, 0.5)
         * Color.HSL outputs hsl(360, 100%, 80%)
         * Color.HSLA outputs hsla(360, 100%, 80%, 0.5)
         * @example
         * var color = new Color('#FF9900');
         * color.format = Color.RGB;
         * element.style.backgroundColor = color;
         * element.style.color = color;
         */
        Object.defineProperty(this, "output", {
            value: 0,
            writable: true
        });

        // listeners
        Object.defineProperty(this, "_listeners", {
            value: {},
            writable: true
        });
        // initialize

        this.subscribe(Events.RGB_UPDATED, this._RGBUpdated);
        this.subscribe(Events.HEX_UPDATED, this._HEXUpdated);
        this.subscribe(Events.HSL_UPDATED, this._HSLUpdated);
        this.subscribe(Events.HSV_UPDATED, this._HSVUpdated);
        this.subscribe(Events.INT_UPDATED, this._INTUpdated);

        this.parse(value);
    }

    /**
     * Convert mixed variable to Color component properties, and adopt those properties.
     * @function
     * @param {number|object|Color} value Accepts any valid CSS color value e.g., #FF9900, rgb(255, 153, 0), rgba(100%, 40%, 0%, 0.8);
     * a hash with properties mapped to the Color instance e.g., red, green, saturation, brightness;
     * another Color instance; a numeric color value; a named CSS color
     * @returns this
     * @example
     * var color = new Color();
     * color.parse();
     * color.parse('#FF9900');
     * color.parse(element.style.color);
     * color.parse('pink');
     * color.parse(123456);
     * color.parse({ red : 255, green : 100, blue : 0 });
     * color.parse(colorInstance);
     */
    parse(value) {
        if (typeof value == 'undefined') {
            return this;
        }
        let parts, alpha;
        switch (true) {
            case isFinite(value):
                this.decimal(value);
                this.output = Color.INT;
                this.broadcast(Events.PARSED);
                return this;
            case (value instanceof Color):
                this.copy(value);
                this.broadcast(Events.PARSED);
                return this;
            default:
                switch (typeof value) {
                    case 'object':
                        this.set(value);
                        this.broadcast(Events.PARSED);
                        return this;
                    case 'string':
                        /** @var {string} strValue */
                        let strValue = namedColors.hasOwnProperty(value) ? namedColors[value] : value;
                        switch (true) {
                            case this.isHex.test(strValue):
                                let stripped = strValue.replace(this.leadHex, '');
                                if (stripped.length === 3) {
                                    stripped = stripped.replace(this.hexBit, '$1$1');
                                }
                                this.decimal(parseInt(stripped, 16));
                                this.broadcast(Events.PARSED);
                                return this;
                            case this.isRGB.test(strValue):
                                parts = strValue.match(this.matchRGB);
                                this.red(this.p2v(parts[1]));
                                this.green(this.p2v(parts[2]));
                                this.blue(this.p2v(parts[3]));
                                alpha = parseFloat(parts[5]);
                                if (isNaN(alpha)) alpha = 1;
                                this.alpha(alpha);
                                this.output = (this.isPercent.test(parts[1]) ? 2 : 1) + (parts[5] ? 2 : 0);
                                this.broadcast(Events.PARSED);
                                return this;
                            case this.isHSL.test(strValue):
                                parts = strValue.match(this.matchHSL);
                                this.hue(parseInt(parts[1]));
                                this.saturation(parseInt(parts[2]));
                                this.lightness(parseInt(parts[3]));
                                alpha = parseFloat(parts[5]);
                                if (isNaN(alpha)) alpha = 1;
                                this.alpha(alpha);
                                this.output = parts[5] ? 6 : 5;
                                this.broadcast(Events.PARSED);
                                return this;
                        }
                }

        }
        return this;
    };

    /**
     * Create a duplicate of this Color instance
     * @function
     * @returns {Color}
     */
    clone() {
        let ret = new Color(this.decimal());
        ret.alpha(this.alpha());
        return ret;
    };

    /**
     * Copy values from another Color instance
     * @function
     * @param {Color} color Color instance to copy values from
     * @returns {Color}
     */
    copy(color) {
        let ret = this.set(color.decimal());
        ret.alpha(color.alpha());
        return ret;
    };

    /**
     * Set a color component value
     * @function
     * @param {string|object|number} key Name of the color component to defined, or a hash of key:value pairs, or a single numeric value
     * @param {string|number} [value] - Value of the color component to be set
     * @returns {Color}
     * @example
     * var color = new Color();
     * color.set('lightness', 100);
     * color.set({ red : 255, green : 100 });
     * color.set(123456);
     */
    set(key, value) {
        if (arguments.length === 1) {
            if (typeof key == 'object') {
                for (let p in key) {
                    if (typeof this[p] == 'function') {
                        this[p](key[p]);
                    }
                }
            } else if (isFinite(key)) {
                this.decimal(key);
            }
        } else if (typeof this[key] == 'function') {
            this[key](value);
        }
        return this;
    };

    /**
     * sets the invoking Color instance component values to a point between the original value and the destination Color instance component value, multiplied by the factor
     * @function
     * @param {Color} destination Color instance to serve as the termination of the interpolation
     * @param {number} factor 0-1, where 0 is the origin Color and 1 is the destination Color, and 0.5 is halfway between.  This method will "blend" the colors.
     * @returns this
     * @example
     * var orange = new Color('#FF9900');
     * var white = new Color('#FFFFFF');
     * orange.interpolate(white, 0.5);
     */
    interpolate(destination, factor) {
        if (!(destination instanceof Color)) {
            destination = new Color(destination);
        }
        this._red = this.absround(+(this._red) + (destination._red - this._red) * factor);
        this._green = this.absround(+(this._green) + (destination._green - this._green) * factor);
        this._blue = this.absround(+(this._blue) + (destination._blue - this._blue) * factor);
        this._alpha = this.absround(+(this._alpha) + (destination._alpha - this._alpha) * factor);
        this.broadcast(Events.RGB_UPDATED);
        this.broadcast(Events.UPDATED);
        return this;
    };

    _RGB2HSL() {
        const r = this._red / 255;
        const g = this._green / 255;
        const b = this._blue / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const l = (max + min) / 2;
        const v = max;

        if (max === min) {
            this._hue = 0;
            this._saturation = 0;
            this._lightness = this.absround(l * 100);
            this._brightness = this.absround(v * 100);
            return;
        }

        const d = max - min;
        const s = d / ((l <= 0.5) ? (max + min) : (2 - max - min));
        const h = ((max === r) ?
            (g - b) / d + (g < b ? 6 : 0) :
            (max === g) ?
            ((b - r) / d + 2) :
            ((r - g) / d + 4)) / 6;

        this._hue = this.absround(h * 360);
        this._saturation = this.absround(s * 100);
        this._lightness = this.absround(l * 100);
        this._brightness = this.absround(v * 100);
    };
    _HSL2RGB() {
        const h = this._hue / 360;
        const s = this._saturation / 100;
        const l = this._lightness / 100;
        const q = l < 0.5 ? l * (1 + s) : (l + s - l * s);
        const p = 2 * l - q;
        this._red = this.absround(this.hue2rgb(p, q, h + 1 / 3) * 255);
        this._green = this.absround(this.hue2rgb(p, q, h) * 255);
        this._blue = this.absround(this.hue2rgb(p, q, h - 1 / 3) * 255);
    };
    _HSV2RGB() { // http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        const h = this._hue / 360;
        const s = this._saturation / 100;
        const v = this._brightness / 100;
        let r = 0;
        let g = 0;
        let b = 0;
        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                // noinspection CommaExpressionJS
                r = v, g = t, b = p;
                break;
            case 1:
                // noinspection CommaExpressionJS
                r = q, g = v, b = p;
                break;
            case 2:
                // noinspection CommaExpressionJS
                r = p, g = v, b = t;
                break;
            case 3:
                // noinspection CommaExpressionJS
                r = p, g = q, b = v;
                break;
            case 4:
                // noinspection CommaExpressionJS
                r = t, g = p, b = v;
                break;
            case 5:
                // noinspection CommaExpressionJS
                r = v, g = p, b = q;
                break;
        }
        this._red = this.absround(r * 255);
        this._green = this.absround(g * 255);
        this._blue = this.absround(b * 255);
    };
    _INT2HEX() {
        let x = this._decimal.toString(16);
        x = '000000'.substr(0, 6 - x.length) + x;
        this._hex = '#' + x.toUpperCase();
    };
    _INT2RGB() {
        this._red = this._decimal >> 16;
        this._green = (this._decimal >> 8) & 0xFF;
        this._blue = this._decimal & 0xFF;
    };
    _HEX2INT() {
        this._decimal = parseInt(this._hex, 16);
    };
    _RGB2INT() {
        this._decimal = (this._red << 16 | (this._green << 8) & 0xffff | this._blue);
    };


    _RGBUpdated() {
        this._RGB2INT(); // populate INT values
        this._RGB2HSL(); // populate HSL values
        this._INT2HEX(); // populate HEX values
    };
    _HSLUpdated() {
        this._HSL2RGB(); // populate RGB values
        this._RGB2INT(); // populate INT values
        this._INT2HEX(); // populate HEX values
    };
    _HSVUpdated() {
        this._HSV2RGB(); // populate RGB values
        this._RGB2INT(); // populate INT values
        this._INT2HEX(); // populate HEX values
    };
    _HEXUpdated() {
        this._HEX2INT(); // populate INT values
        this._INT2RGB(); // populate RGB values
        this._RGB2HSL(); // populate HSL values
    };
    _INTUpdated() {
        this._INT2RGB(); // populate RGB values
        this._RGB2HSL(); // populate HSL values
        this._INT2HEX(); // populate HEX values
    };

    _broadcastUpdate() {
        this.broadcast(Event.UPDATED);
    };

    /**
     * Set the decimal value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} [value] 0 (black) to 16777215 (white) - the decimal value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.decimal(123456);
     */
    decimal(value) {
        return this._handle('_decimal', value, Events.INT_UPDATED);
    };

    /**
     * Set the hex value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {string} value Hex value to be set
     * @returns String
     * @example
     * var color = new Color();
     * color.hex('#FF9900');
     * color.hex('#CCC');
     */
    hex(value) {
        return this._handle('_hex', value, Events.HEX_UPDATED);
    };

    /**
     * Set the red component value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} value 0 - 255 red component value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.red(125);
     */
    red(value) {
        return this._handle('_red', value, Events.RGB_UPDATED);
    };
    /**
     * Set the green component value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} value 0 - 255 green component value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.green(125);
     */
    green(value) {
        return this._handle('_green', value, Events.RGB_UPDATED);
    };
    /**
     * Set the blue component value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} value 0 - 255 blue component value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.blue(125);
     */
    blue(value) {
        return this._handle('_blue', value, Events.RGB_UPDATED);
    };

    /**
     * Set the hue component value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} value 0 - 360 hue component value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.hue(280);
     */
    hue(value) {
        return this._handle('_hue', value, Events.HSL_UPDATED);
    };

    /**
     * Set the saturation component value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} value 0 - 100 saturation component value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.saturation(280);
     */
    saturation(value) {
        return this._handle('_saturation', value, Events.HSL_UPDATED);
    };

    /**
     * Set the lightness component value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} value 0 - 100 lightness component value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.lightness(80);
     */
    lightness(value) {
        return this._handle('_lightness', value, Events.HSL_UPDATED);
    };

    /**
     * Set the brightness component value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} value 0 - 100 brightness component value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.brightness(80);
     */
    brightness(value) {
        return this._handle('_brightness', value, Events.HSV_UPDATED);
    };

    /**
     * Set the opacity value of the color, updates all other components, and dispatches Event.UPDATED
     * @function
     * @param {number} [value] 0 - 1 opacity component value to set
     * @returns Number
     * @example
     * var color = new Color();
     * color.alpha(0.5);
     */
    alpha(value) {
        return this._handle('_alpha', value);
    };


    _handle(prop, value, event) {
        if (typeof this[prop] != 'undefined') {
            if (typeof value != 'undefined') {
                if (value !== this[prop]) {
                    this[prop] = value;
                    if (event) {
                        this.broadcast(event);
                    }
                }
                this.broadcast(Events.UPDATED);
            }
        }
        return this[prop];
    };

    /**
     * Returns a CSS-formatted hex string [e.g., #FF9900] from the Color's component values
     * @function
     * @returns String
     * @example
     * var color = new Color();
     * element.style.backgroundColor = color.getHex();
     */
    getHex() {
        return this._hex;
    };
    /**
     * Returns a CSS-formatted RGB string [e.g., rgb(255, 153, 0)] from the Color's component values
     * @function
     * @returns String
     * @example
     * var color = new Color();
     * element.style.backgroundColor = color.getRGB();
     */
    getRGB() {
        const components = [this.absround(this._red), this.absround(this._green), this.absround(this._blue)];
        return 'rgb(' + components.join(', ') + ')';
    };
    /**
     * Returns a CSS-formatted percentile RGB string [e.g., rgb(100%, 50%, 0)] from the Color's component values
     * @function
     * @returns String
     * @example
     * var color = new Color();
     * element.style.backgroundColor = color.getPRGB();
     */
    getPRGB() {
        const components = [this.absround(100 * this._red / 255) + '%', this.absround(100 * this._green / 255) + '%', this.absround(100 * this._blue / 255) + '%'];
        return 'rgb(' + components.join(', ') + ')';
    };
    /**
     * Returns a CSS-formatted RGBA string [e.g., rgba(255, 153, 0, 0.5)] from the Color's component values
     * @function
     * @returns String
     * @example
     * var color = new Color();
     * element.style.backgroundColor = color.getRGBA();
     */
    getRGBA() {
        const components = [this.absround(this._red), this.absround(this._green), this.absround(this._blue), this._alpha];
        return 'rgba(' + components.join(', ') + ')';
    };
    /**
     * Returns a CSS-formatted percentile RGBA string [e.g., rgba(100%, 50%, 0%, 0.5)] from the Color's component values
     * @function
     * @returns String
     * @example
     * var color = new Color();
     * element.style.backgroundColor = color.getPRGBA();
     */
    getPRGBA() {
        const components = [this.absround(100 * this._red / 255) + '%', this.absround(100 * this._green / 255) + '%', this.absround(100 * this._blue / 255) + '%', this._alpha];
        return 'rgba(' + components.join(', ') + ')';
    };
    /**
     * Returns a CSS-formatted HSL string [e.g., hsl(360, 100%, 100%)] from the Color's component values
     * @function
     * @returns String
     * @example
     * var color = new Color();
     * element.style.backgroundColor = color.getHSL();
     */
    getHSL() {
        const components = [this.absround(this._hue), this.absround(this._saturation) + '%', this.absround(this._lightness) + '%'];
        return 'hsl(' + components.join(', ') + ')';
    };
    /**
     * Returns a CSS-formatted HSLA string [e.g., hsl(360, 100%, 100%, 0.5)] from the Color's component values
     * @function
     * @returns String
     * @example
     * var color = new Color();
     * element.style.backgroundColor = color.getHSLA();
     */
    getHSLA() {
        const components = [this.absround(this._hue), this.absround(this._saturation) + '%', this.absround(this._lightness) + '%', this._alpha];
        return 'hsla(' + components.join(', ') + ')';
    };

    /**
     * Returns a tokenized string from the Color's component values
     * @function
     * @param {string} string The string to return, with tokens expressed as %token% that are replaced with component values.  Tokens are as follows:
     * r : red
     * g : green
     * b : blue
     * h : hue
     * s : saturation
     * l : lightness
     * v : brightness
     * a : alpha
     * x : hex
     * i : value
     * @returns String
     * @example
     * var color = new Color('#FF9900');
     * color.format('red=%r%, green=%g%, blue=%b%);
     */
    format(string) {
        const tokens = {
            r: this._red,
            g: this._green,
            b: this._blue,
            h: this._hue,
            s: this._saturation,
            l: this._lightness,
            v: this._brightness,
            a: this._alpha,
            x: this._hex,
            d: this._decimal
        };
        for (let token in tokens) {
            string = string.split('%' + token + '%').join(tokens[token]);
        }
        return string;
    };

    toString() {
        switch (this.output) {
            case 0: // Color.HEX
                return this.getHex();
            case 1: // Color.RGB
                return this.getRGB();
            case 2: // Color.PRGB
                return this.getPRGB();
            case 3: // Color.RGBA
                return this.getRGBA();
            case 4: // Color.PRGBA
                return this.getPRGBA();
            case 5: // Color.HSL
                return this.getHSL();
            case 6: // Color.HSLA
                return this.getHSLA();
            case 7: // Color.INT
                return this._decimal;
        }
        return this.getHex();
    };

    /**
     * Returns the ideal foreground color (black or white) for text with the Color as background
     * @function
     * @returns Color
     * @example
     * var color = new Color();
     * element.style.backgroundColor = color.getRGB();
     * element.style.color = color.foreground().getRGB();
     */
    foreground() {
        if (this._lightness > 50) return new Color("black");
        return new Color("white");
    };

    // Event Management
    _isSubscribed(type) {
        return this._listeners[type] != null;
    };
    /**
     * @function
     * @param {string} type Event type to listen for
     * @param {function} callback listener to register to the event
     * @example
     * var color = new Color();
     * color.subscribe(Color.Event.UPDATED, function(){
     *   alert('this color has been updated');
     * });
     * color.red(255);
     */
    subscribe(type, callback) {
        if (!this._isSubscribed(type)) {
            this._listeners[type] = [];
        }
        this._listeners[type].push(callback);
    };

    /**
     * @function
     * @param {string} type Event type to remove the listener from
     * @param {function} callback listener to unregister from the event
     * @example
     * var color = new Color();
     * var handler = function(){
     *   //this color has been updated
     * });
     * color.subscribe(Color.Event.UPDATED, handler);
     * color.red(255);
     * color.unsubscribe(Color.Event.UPDATED, handler);
     * color.red(0);
     */
    unsubscribe(type, callback) {
        if (!this._isSubscribed(type)) {
            return;
        }
        const stack = this._listeners[type];
        let i = 0;
        const l = stack.length;
        for (; i < l; i++) {
            if (stack[i] === callback) {
                stack.splice(i, 1);
                return this.unsubscribe(type, callback);
            }
        }
    }

    /**
     * @function
     * @param {string} type Event type to dispatch
     * @param {array} [params] Array of arguments to pass to listener
     * @example
     * var color = new Color();
     * var handler = function(a, b){
     *   //'a=' + a, 'b=' + b
     * });
     * color.subscribe('arbitraryEvent', handler);
     * color.broadcast('arbitraryEvent', ['A', 'B']);
     */
    broadcast(type, params) {
        if (!this._isSubscribed(type)) {
            return;
        }
        const stack = this._listeners[type];
        const l = stack.length;
        for (let i = 0; i < l; i++) {
            stack[i].apply(this, params);
        }
    }

    /**
     * Blends the color from it's current state to the target Color over the duration
     * @function
     * @param {number} duration duration of tween in millisecond
     * @param {Color} color destination color
     * @returns number
     * @example
     * var color = new Color('#FF9900');
     * color.tween(2000, '#FFFFFF');
     */
    tween(duration, color) {
        if (!(color instanceof Color)) {
            color = new Color(color);
        }
        const start = +(new Date());
        const ref = this;
        this.broadcast('tweenStart');
        const interval = setInterval(function() {
            const ellapsed = +(new Date()) - start;
            const delta = Math.min(1, ellapsed / duration);
            ref.interpolate(color, delta);
            ref.broadcast('tweenProgress');
            if (delta === 1) {
                clearInterval(interval);
                ref.broadcast('tweenComplete');
            }
        }, 20);
        return interval; // return so it can be cancelled early
    }

    /**
     * Binds the color to an object's property - whenever the Color is updated, the property will be set to the value of the Color instance's toString method
     * @function
     * @param {object} object Object containing the property to update
     * @param {string} property Name of the property to update
     * @example
     * var color = new Color('#FF9900');
     * color.bind(someElement.style, 'backgroundColor');
     */
    bind(object, property) {
        const ref = this;
        this.subscribe('updated', function() {
            object[property] = ref.toString();
        });
    };


    /**
     * [static] Returns a Color instance of a random color
     * @function
     * @returns Color
     * @example
     * var gray = Color.interpolate('#FFFFFF', '#000000', 0.5);
     */
    random() {
        return new Color(this.absround(Math.random() * 16777215));
    };
}

/**
 * [static] Returns a Color instance bound to an object's property, set to the value of the property
 * @function
 * @param {object} object Object containing the property to update
 * @param {string} property Name of the property to update
 * @returns Color
 * @example
 * var color = Color.bind(someElement.style, 'backgroundColor');
 */
Object.defineProperty(Color, "bind", {
    // toString returns hex: #ABC123
    value: function(object, property) {
        const color = new Color(object[property]);
        color.bind(object, property);
        return color;
    }
});

Object.defineProperty(Color, "Events", {
    // toString returns hex: #ABC123
    value: Events
});

Object.defineProperty(Color, "HEX", {
    // toString returns hex: #ABC123
    value: 0
});
Object.defineProperty(Color, "RGB", {
    // toString returns rgb: rgb(0, 100, 255)
    value: 1
});
Object.defineProperty(Color, "PRGB", {
    // toString returns percent rgb: rgb(0%, 40%, 100%)
    value: 2
});
Object.defineProperty(Color, "RGBA", {
    // toString returns rgba: rgba(0, 100, 255, 0.5)
    value: 3
});
Object.defineProperty(Color, "PRGBA", {
    // toString returns percent rgba: rgba(0%, 40%, 100%, 0.5)
    value: 4
});
Object.defineProperty(Color, "HSL", {
    // toString returns hsl: hsl(360, 50%, 50%)
    value: 5
});
Object.defineProperty(Color, "HSLA", {
    // toString returns hsla: hsla(360, 50%, 50%, 0.5)
    value: 6
});
Object.defineProperty(Color, "INT", {
    // toString returns decimal value
    value: 7
});