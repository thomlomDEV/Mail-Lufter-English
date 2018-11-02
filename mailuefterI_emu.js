/*

Mailuefterl Emulator by Norbert Kehrer

http://members.aon.at/~nkehrer

(C) Copyright Norbert Kehrer 2007, 2017

 */

function new_constant(t) {
    return t.startsWith("L_0x") ? t = t.slice(4) : t.startsWith("0x") && (t = t.slice(2)),
    Long.fromString(t, !0, 16)
}
function button_pressed(t) {
    switch (t) {
    case "ST":
    case "WW":
    case "MS":
    case "UE":
    case "BUE":
        mailuefterl.execKey(t);
        break;
    case "Load":
        var e = program_selection[html_program_selection.options[html_program_selection.selectedIndex].value];
        if (void 0 !== e) {
            for (var n = "", r = 0; r < e.length; r++)
                n += e[r] + "\n";
            html_tapereader_textarea.value = n
        }
        break;
    case "Assemble":
        var i = html_tapereader_textarea.value.split("\n");
        assembler.assembleFile(i);
        break;
    case "Clear":
        html_teleprinter_textarea.value = "";
        break;
    case "Clear_Tracer":
        html_tracer_textarea.value = "",
        tracer.clearText();
        break;
    default:
        alert("Unknown button: " + t)
    }
}
function controldesk_changed() {
    controldesk.update()
}
function tracing_changed() {
    tracer.setTrace(html_switch_tracer.checked)
}
function init_ui() {
    for (t = 0; t < 48; t++)
        e = (e = "norbert_0000" + t).substr(e.length - 2),
        html_display_lamps[t] = document.getElementById("lamp_" + e);
    html_multiswitch_command_be_q = document.getElementById("multiswitch_command_be_q"),
    html_multiswitch_command_cond = document.getElementById("multiswitch_command_cond"),
    html_multiswitch_command_mainop = document.getElementById("multiswitch_command_mainop"),
    html_multiswitch_command_addop = document.getElementById("multiswitch_command_addop"),
    html_funct_bit_x = document.getElementById("funct_bit_x"),
    html_funct_bit_k = document.getElementById("funct_bit_k"),
    html_funct_bit_b = document.getElementById("funct_bit_b"),
    html_funct_bit_h = document.getElementById("funct_bit_h"),
    html_funct_bit_g = document.getElementById("funct_bit_g"),
    html_funct_bit_s = document.getElementById("funct_bit_s"),
    html_funct_bit_v = document.getElementById("funct_bit_v"),
    html_funct_bit_w = document.getElementById("funct_bit_w"),
    html_funct_bit_m = document.getElementById("funct_bit_m"),
    html_multiswitch_index_0 = document.getElementById("multiswitch_index_0"),
    html_multiswitch_index_1 = document.getElementById("multiswitch_index_1"),
    html_multiswitch_address_0 = document.getElementById("multiswitch_address_0"),
    html_multiswitch_address_1 = document.getElementById("multiswitch_address_1"),
    html_multiswitch_address_2 = document.getElementById("multiswitch_address_2"),
    html_multiswitch_address_3 = document.getElementById("multiswitch_address_3"),
    html_multiswitch_number[0] = document.getElementById("multiswitch_number_type"),
    html_multiswitch_number[1] = document.getElementById("multiswitch_number_vz"),
    html_multiswitch_number[2] = document.getElementById("multiswitch_number_0"),
    html_multiswitch_number[3] = document.getElementById("multiswitch_number_1"),
    html_multiswitch_number[4] = document.getElementById("multiswitch_number_2"),
    html_multiswitch_number[5] = document.getElementById("multiswitch_number_3"),
    html_multiswitch_number[6] = document.getElementById("multiswitch_number_4"),
    html_multiswitch_number[7] = document.getElementById("multiswitch_number_5"),
    html_multiswitch_number[8] = document.getElementById("multiswitch_number_6"),
    html_multiswitch_number[9] = document.getElementById("multiswitch_number_7"),
    html_multiswitch_number[10] = document.getElementById("multiswitch_number_8"),
    html_multiswitch_number[11] = document.getElementById("multiswitch_number_9"),
    html_display_selection = document.getElementById("display_selection"),
    html_lamp_ST = document.getElementById("lamp_ST"),
    html_lamp_MS = document.getElementById("lamp_MS"),
    html_lamp_PS = document.getElementById("lamp_PS"),
    html_lamp_TFB = document.getElementById("lamp_TFB"),
    html_lamp_TFZ = document.getElementById("lamp_TFZ"),
    html_keyboard_selection_command = document.getElementById("keyboard_selection_command"),
    html_switch_Z13 = document.getElementById("switch_Z13"),
    html_switch_Z14 = document.getElementById("switch_Z14"),
    html_switch_Z15 = document.getElementById("switch_Z15"),
    html_program_selection = document.getElementById("program_selection"),
    html_tapereader_textarea = document.getElementById("tapereader_textarea"),
    html_teleprinter_textarea = document.getElementById("teleprinter_textarea"),
    html_register_display = document.getElementById("register_display"),
    html_tapereader_textarea.value = "",
    html_teleprinter_textarea.value = "",
    (html_tracer_textarea = document.getElementById("tracer_textarea")).value = "",
    html_switch_tracer = document.getElementById("switch_tracer"),
    html_tracer_textarea.checked = !1;
    for (var t = 0; t < 16; t++) {
        var e = "kehrer_0000" + t;
        e = e.substr(e.length - 2),
        html_relays_input[t] = document.getElementById("relay_in_" + e),
        html_relays_output[t] = document.getElementById("relay_out_" + e)
    }
    controldesk.update()
}
function openTab(t) {
    document.getElementById("tabLink" + activeTab).className = "tabLink",
    document.getElementById("tabContent" + activeTab).className = "tabContent",
    document.getElementById("tabLink" + t).className = "tabLinkActive",
    document.getElementById("tabContent" + t).className = "tabContentActive",
    activeTab = t
}
function run() {
    init_ui(),
    teleprinter.printLine("------------------------------------------------------------"),
    teleprinter.printLine("*   MAILUEFTERL EMULATOR                                   *"),
    teleprinter.printLine("*                                                          *"),
    teleprinter.printLine("*   Emulator for the Mailuefterl computer in JavaScript.   *"),
    teleprinter.printLine("------------------------------------------------------------"),
    teleprinter.printLine("*   Written by Norbert Kehrer in 2007 (Java version) and   *"),
    teleprinter.printLine("*   in 2017 (JavaScript version).                          *"),
    teleprinter.printLine("*   See: http://members.aon.at/nkehrer/                    *"),
    teleprinter.printLine("------------------------------------------------------------"),
    teleprinter.printLine("*   The Mailuefterl was the first fully transitorized      *"),
    teleprinter.printLine("*   computer on continental Europe. It was built from      *"),
    teleprinter.printLine("*   1955 to 1959 by Heinz Zemanek and his team at the      *"),
    teleprinter.printLine("*   Technical University of Vienna.                        *"),
    teleprinter.printLine("------------------------------------------------------------"),
    teleprinter.printLine(" "),
    tracer.setTrace(!0),
    tracer.printLine("------------------------------------------------------------"),
    tracer.printLine("*   MAILUEFTERL EMULATOR                                   *"),
    tracer.printLine("*                                                          *"),
    tracer.printLine("*   Emulator for the Mailuefterl computer in JavaScript.   *"),
    tracer.printLine("------------------------------------------------------------"),
    tracer.printLine("*   Written by Norbert Kehrer in 2007 (Java version) and   *"),
    tracer.printLine("*   in 2017 (JavaScript version).                          *"),
    tracer.printLine("*   See: http://members.aon.at/nkehrer/                    *"),
    tracer.printLine("------------------------------------------------------------"),
    tracer.printLine("*   This tracer is a feature not available on the original *"),
    tracer.printLine("*   machine. It is here to make life a little bit easier   *"),
    tracer.printLine("*   for modern Mailuefterl programmers.                    *"),
    tracer.printLine("------------------------------------------------------------"),
    tracer.setTrace(!1),
    tracer.update(),
    mailuefterl.reset()
}
!function(t) {
    "use strict";
    var e = function(t, e, n) {
        this.low = 0 | t,
        this.high = 0 | e,
        this.unsigned = !!n
    };
    e.isLong = function(t) {
        return !0 === (t && t instanceof e)
    }
    ;
    var n = {}
      , r = {};
    e.fromInt = function(t, i) {
        var a, s;
        return i ? 0 <= (t >>>= 0) && t < 256 && (s = r[t]) ? s : (a = new e(t,(0 | t) < 0 ? -1 : 0,!0),
        0 <= t && t < 256 && (r[t] = a),
        a) : -128 <= (t |= 0) && t < 128 && (s = n[t]) ? s : (a = new e(t,t < 0 ? -1 : 0,!1),
        -128 <= t && t < 128 && (n[t] = a),
        a)
    }
    ,
    e.fromNumber = function(t, n) {
        return n = !!n,
        isNaN(t) || !isFinite(t) ? e.ZERO : !n && t <= -o ? e.MIN_VALUE : !n && t + 1 >= o ? e.MAX_VALUE : n && t >= s ? e.MAX_UNSIGNED_VALUE : t < 0 ? e.fromNumber(-t, n).negate() : new e(t % a | 0,t / a | 0,n)
    }
    ,
    e.fromBits = function(t, n, r) {
        return new e(t,n,r)
    }
    ,
    e.fromString = function(t, n, r) {
        if (0 === t.length)
            throw Error("number format error: empty string");
        if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t)
            return e.ZERO;
        if ("number" == typeof n && (r = n,
        n = !1),
        (r = r || 10) < 2 || 36 < r)
            throw Error("radix out of range: " + r);
        var i;
        if ((i = t.indexOf("-")) > 0)
            throw Error('number format error: interior "-" character: ' + t);
        if (0 === i)
            return e.fromString(t.substring(1), n, r).negate();
        for (var a = e.fromNumber(Math.pow(r, 8)), s = e.ZERO, o = 0; o < t.length; o += 8) {
            var u = Math.min(8, t.length - o)
              , f = parseInt(t.substring(o, o + u), r);
            if (u < 8) {
                var l = e.fromNumber(Math.pow(r, u));
                s = s.multiply(l).add(e.fromNumber(f))
            } else
                s = (s = s.multiply(a)).add(e.fromNumber(f))
        }
        return s.unsigned = n,
        s
    }
    ,
    e.fromValue = function(t) {
        return "number" == typeof t ? e.fromNumber(t) : "string" == typeof t ? e.fromString(t) : e.isLong(t) ? t : new e(t.low,t.high,t.unsigned)
    }
    ;
    var i = 65536
      , a = i * i
      , s = a * a
      , o = s / 2
      , u = e.fromInt(1 << 24);
    e.ZERO = e.fromInt(0),
    e.UZERO = e.fromInt(0, !0),
    e.ONE = e.fromInt(1),
    e.UONE = e.fromInt(1, !0),
    e.NEG_ONE = e.fromInt(-1),
    e.MAX_VALUE = e.fromBits(-1, 2147483647, !1),
    e.MAX_UNSIGNED_VALUE = e.fromBits(-1, -1, !0),
    e.MIN_VALUE = e.fromBits(0, -2147483648, !1),
    e.prototype.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
    }
    ,
    e.prototype.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * a + (this.low >>> 0) : this.high * a + (this.low >>> 0)
    }
    ,
    e.prototype.toString = function(t) {
        if ((t = t || 10) < 2 || 36 < t)
            throw RangeError("radix out of range: " + t);
        if (this.isZero())
            return "0";
        var n;
        if (this.isNegative()) {
            if (this.equals(e.MIN_VALUE)) {
                var r = e.fromNumber(t)
                  , i = this.div(r);
                return n = i.multiply(r).subtract(this),
                i.toString(t) + n.toInt().toString(t)
            }
            return "-" + this.negate().toString(t)
        }
        var a = e.fromNumber(Math.pow(t, 6), this.unsigned);
        n = this;
        for (var s = ""; ; ) {
            var o = n.div(a)
              , u = (n.subtract(o.multiply(a)).toInt() >>> 0).toString(t);
            if ((n = o).isZero())
                return u + s;
            for (; u.length < 6; )
                u = "0" + u;
            s = "" + u + s
        }
    }
    ,
    e.prototype.getHighBits = function() {
        return this.high
    }
    ,
    e.prototype.getHighBitsUnsigned = function() {
        return this.high >>> 0
    }
    ,
    e.prototype.getLowBits = function() {
        return this.low
    }
    ,
    e.prototype.getLowBitsUnsigned = function() {
        return this.low >>> 0
    }
    ,
    e.prototype.getNumBitsAbs = function() {
        if (this.isNegative())
            return this.equals(e.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
        for (var t = 0 != this.high ? this.high : this.low, n = 31; n > 0 && 0 == (t & 1 << n); n--)
            ;
        return 0 != this.high ? n + 33 : n + 1
    }
    ,
    e.prototype.isZero = function() {
        return 0 === this.high && 0 === this.low
    }
    ,
    e.prototype.isNegative = function() {
        return !this.unsigned && this.high < 0
    }
    ,
    e.prototype.isPositive = function() {
        return this.unsigned || this.high >= 0
    }
    ,
    e.prototype.isOdd = function() {
        return 1 == (1 & this.low)
    }
    ,
    e.prototype.isEven = function() {
        return 0 == (1 & this.low)
    }
    ,
    e.prototype.equals = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        (this.unsigned === t.unsigned || this.high >>> 31 == t.high >>> 31) && (this.high === t.high && this.low === t.low)
    }
    ,
    e.prototype.notEquals = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        !this.equals(t)
    }
    ,
    e.prototype.lessThan = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        this.compare(t) < 0
    }
    ,
    e.prototype.lessThanOrEqual = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        this.compare(t) <= 0
    }
    ,
    e.prototype.greaterThan = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        this.compare(t) > 0
    }
    ,
    e.prototype.greaterThanOrEqual = function(t) {
        return this.compare(t) >= 0
    }
    ,
    e.prototype.compare = function(t) {
        if (this.equals(t))
            return 0;
        var e = this.isNegative()
          , n = t.isNegative();
        return e && !n ? -1 : !e && n ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.subtract(t).isNegative() ? -1 : 1
    }
    ,
    e.prototype.negate = function() {
        return !this.unsigned && this.equals(e.MIN_VALUE) ? e.MIN_VALUE : this.not().add(e.ONE)
    }
    ,
    e.prototype.add = function(t) {
        e.isLong(t) || (t = e.fromValue(t));
        var n = this.high >>> 16
          , r = 65535 & this.high
          , i = this.low >>> 16
          , a = 65535 & this.low
          , s = t.high >>> 16
          , o = 65535 & t.high
          , u = t.low >>> 16
          , f = 0
          , l = 0
          , c = 0
          , h = 0;
        return h += a + (65535 & t.low),
        c += h >>> 16,
        h &= 65535,
        c += i + u,
        l += c >>> 16,
        c &= 65535,
        l += r + o,
        f += l >>> 16,
        l &= 65535,
        f += n + s,
        f &= 65535,
        e.fromBits(c << 16 | h, f << 16 | l, this.unsigned)
    }
    ,
    e.prototype.subtract = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        this.add(t.negate())
    }
    ,
    e.prototype.multiply = function(t) {
        if (this.isZero())
            return e.ZERO;
        if (e.isLong(t) || (t = e.fromValue(t)),
        t.isZero())
            return e.ZERO;
        if (this.equals(e.MIN_VALUE))
            return t.isOdd() ? e.MIN_VALUE : e.ZERO;
        if (t.equals(e.MIN_VALUE))
            return this.isOdd() ? e.MIN_VALUE : e.ZERO;
        if (this.isNegative())
            return t.isNegative() ? this.negate().multiply(t.negate()) : this.negate().multiply(t).negate();
        if (t.isNegative())
            return this.multiply(t.negate()).negate();
        if (this.lessThan(u) && t.lessThan(u))
            return e.fromNumber(this.toNumber() * t.toNumber(), this.unsigned);
        var n = this.high >>> 16
          , r = 65535 & this.high
          , i = this.low >>> 16
          , a = 65535 & this.low
          , s = t.high >>> 16
          , o = 65535 & t.high
          , f = t.low >>> 16
          , l = 65535 & t.low
          , c = 0
          , h = 0
          , d = 0
          , m = 0;
        return m += a * l,
        d += m >>> 16,
        m &= 65535,
        d += i * l,
        h += d >>> 16,
        d &= 65535,
        d += a * f,
        h += d >>> 16,
        d &= 65535,
        h += r * l,
        c += h >>> 16,
        h &= 65535,
        h += i * f,
        c += h >>> 16,
        h &= 65535,
        h += a * o,
        c += h >>> 16,
        h &= 65535,
        c += n * l + r * f + i * o + a * s,
        c &= 65535,
        e.fromBits(d << 16 | m, c << 16 | h, this.unsigned)
    }
    ,
    e.prototype.div = function(t) {
        if (e.isLong(t) || (t = e.fromValue(t)),
        t.isZero())
            throw new Error("division by zero");
        if (this.isZero())
            return this.unsigned ? e.UZERO : e.ZERO;
        var n, r, i;
        if (this.equals(e.MIN_VALUE))
            return t.equals(e.ONE) || t.equals(e.NEG_ONE) ? e.MIN_VALUE : t.equals(e.MIN_VALUE) ? e.ONE : (n = this.shiftRight(1).div(t).shiftLeft(1)).equals(e.ZERO) ? t.isNegative() ? e.ONE : e.NEG_ONE : (r = this.subtract(t.multiply(n)),
            i = n.add(r.div(t)));
        if (t.equals(e.MIN_VALUE))
            return this.unsigned ? e.UZERO : e.ZERO;
        if (this.isNegative())
            return t.isNegative() ? this.negate().div(t.negate()) : this.negate().div(t).negate();
        if (t.isNegative())
            return this.div(t.negate()).negate();
        for (i = e.ZERO,
        r = this; r.greaterThanOrEqual(t); ) {
            n = Math.max(1, Math.floor(r.toNumber() / t.toNumber()));
            for (var a = Math.ceil(Math.log(n) / Math.LN2), s = a <= 48 ? 1 : Math.pow(2, a - 48), o = e.fromNumber(n), u = o.multiply(t); u.isNegative() || u.greaterThan(r); )
                n -= s,
                u = (o = e.fromNumber(n, this.unsigned)).multiply(t);
            o.isZero() && (o = e.ONE),
            i = i.add(o),
            r = r.subtract(u)
        }
        return i
    }
    ,
    e.prototype.modulo = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        this.subtract(this.div(t).multiply(t))
    }
    ,
    e.prototype.not = function() {
        return e.fromBits(~this.low, ~this.high, this.unsigned)
    }
    ,
    e.prototype.and = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        e.fromBits(this.low & t.low, this.high & t.high, this.unsigned)
    }
    ,
    e.prototype.or = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        e.fromBits(this.low | t.low, this.high | t.high, this.unsigned)
    }
    ,
    e.prototype.xor = function(t) {
        return e.isLong(t) || (t = e.fromValue(t)),
        e.fromBits(this.low ^ t.low, this.high ^ t.high, this.unsigned)
    }
    ,
    e.prototype.shiftLeft = function(t) {
        return e.isLong(t) && (t = t.toInt()),
        0 == (t &= 63) ? this : t < 32 ? e.fromBits(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : e.fromBits(0, this.low << t - 32, this.unsigned)
    }
    ,
    e.prototype.shiftRight = function(t) {
        return e.isLong(t) && (t = t.toInt()),
        0 == (t &= 63) ? this : t < 32 ? e.fromBits(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : e.fromBits(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
    }
    ,
    e.prototype.shiftRightUnsigned = function(t) {
        if (e.isLong(t) && (t = t.toInt()),
        0 === (t &= 63))
            return this;
        var n = this.high;
        if (t < 32) {
            var r = this.low;
            return e.fromBits(r >>> t | n << 32 - t, n >>> t, this.unsigned)
        }
        return 32 === t ? e.fromBits(n, 0, this.unsigned) : e.fromBits(n >>> t - 32, 0, this.unsigned)
    }
    ,
    e.prototype.toSigned = function() {
        return this.unsigned ? new e(this.low,this.high,!1) : this
    }
    ,
    e.prototype.toUnsigned = function() {
        return this.unsigned ? this : new e(this.low,this.high,!0)
    }
    ,
    "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
        return e
    }) : (t.dcodeIO = t.dcodeIO || {}).Long = e,
    t.Long = e
}(this),
String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
    return e = e || 0,
    this.substr(e, t.length) === t
}
);
var L_1 = new Long(1,0), L_minus_1 = new Long(4294967295,4294967295), L_minus_2 = new Long(4294967294,4294967295), L_0x200000000000 = new Long(0,8192), L_0x2000000000 = new_constant("L_0x2000000000"), L_0x1000000000 = new Long(0,16), L_0x0040000000 = new Long(1073741824,0), L_0x0200000000 = new Long(0,2), L_0x4000000000 = new Long(0,64), L_0x6000000000 = new Long(0,96), L_0x0010000000 = new Long(268435456,0), L_0x0020000000 = new Long(536870912,0), L_0x3000000000 = new Long(0,48), L_0xc000000000 = new Long(0,192), L_0x0080000000 = new Long(2147483648,0), L_0x0400000000 = new Long(0,4), L_0x0001000000 = new Long(16777216,0), L_0x0000000000 = new Long(0,0), L_0x5000000000 = new Long(0,80), L_0x0800000000 = new Long(0,8), L_0x0a00000000 = new Long(0,10), L_0x0e00000000 = new Long(0,14), L_0x0c00000000 = new Long(0,12), L_0x0600000000 = new Long(0,6), L_0x0008000000 = new Long(134217728,0), L_0x7000000000 = new Long(0,112), L_0x8000000000 = new Long(0,128), L_0xa000000000 = new Long(0,160), L_0x0004000000 = new Long(67108864,0), L_0x0002000000 = new Long(33554432,0), L_0x0100000000 = new Long(0,1), L_0x9000000000 = new Long(0,144), L_0xb000000000 = new Long(0,176), L_0x0000000000ff = new Long(255,0), L_0x00000000ffff = new Long(65535,0), L_0xffffffffffff = new Long(4294967295,65535), L_0x00000000000f = new Long(15,0), L_0x400000000000 = new Long(0,16384), L_0x33c8 = new Long(13256,0), L_0x8000000000000000 = new Long(0,2147483648), L_0x7fffffffffffffff = new Long(4294967295,2147483647), L_0x3300 = new Long(13056,0), L_0xf = new Long(15,0), L_0x33333333334 = new_constant("L_0x33333333334"), L_0x3300 = new_constant("L_0x3300"), L_0xffff = new_constant("L_0xffff"), L_0xffffffff0000 = new_constant("L_0xffffffff0000"), L_0xffffff000000 = new_constant("L_0xffffff000000"), L_0xff0fffffffff = new_constant("L_0xff0fffffffff"), L_0x33333333334 = new_constant("L_0x33333333334"), L_0xffffff = new_constant("L_0xffffff"), L_0xff = new_constant("L_0xff"), L_0x1fffffffffff = new_constant("L_0x1fffffffffff"), L_0x033333333333 = new_constant("L_0x033333333333"), L_0xccccccccccc = new_constant("L_0xccccccccccc"), L_0xf00000000000 = new_constant("L_0xf00000000000"), L_0xfffffffffff = new_constant("L_0xfffffffffff"), L_0x00ffffffffff = new_constant("L_0x00ffffffffff"), L_0x0fffffffffff = new_constant("L_0x0fffffffffff"), L_0x1fffffffffff = new_constant("L_0x1fffffffffff"), L_0x30000000000 = new_constant("L_0x30000000000"), L_0xe00000000000 = new_constant("L_0xe00000000000"), L_0xf00000000000 = new_constant("L_0xf00000000000"), L_0xfffffffffff0 = new_constant("L_0xfffffffffff0"), L_3 = new Long(3,0), L_0x3 = new Long(3,0), L_0x1f = new Long(31,0), L_0xffff6fffffff = new_constant("L_0xffff6fffffff"), L_0x33333330000 = new_constant("L_0x33333330000"), L_0x9fffffffffff = new_constant("L_0x9fffffffffff"), L_0xefffffffffff = new_constant("L_0xefffffffffff"), L_0xf0ffffffffff = new_constant("L_0xf0ffffffffff"), L_0x100000000000 = new_constant("L_0x100000000000"), html_teleprinter_textarea, max_textarea_size = 1e5, prog_test = ["; Test by Norbert Kehrer", "", "", "%NK", "", "", "%MULTF", "", "; (MULTF) Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(MULTF)", " UB(ADR)+65)", " (1K) \t\t\t; jump addresses", " (2K)", " (3K)", " (4K)", " (5K)", " (6K)", " (7K)", " (8K)", " UB(ADR)+(MULTF)) \t; program in the drum store:", " TI8+(1) \t\t; program transfer MR = AC (b)", " TI(1K)+(2) \t\t; to the core store", " TI(2K)+(3)", " TI(3K)+(4)", " TI(4K)+(5)", " TI(5K)+(6)", " TI(6K)+(7)", " TI(7K)+(8)", " UKC(8K) \t\t; AC = 0;", " XK(1K) \t\t; goto prog in core store", " (1)Z1YAMK7 \t\t; program in the core store: while (MR[T1] != 0) {AC += MD; MR--;};", " (2)XBRV(3K)-9 \t; multiplication: do 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", " (3)Z1YAMK7 \t\t; while (MR[T1] != 0) {AC += MD; MR--;}; ... and a 10th time", " (4)XK(5K) \t\t; goto (5)  to have a delay for execution", " (5)ABSRV1 \t\t; AC--; AC/MR >> 4; ... 11th shift right", " (6)Z3N1+ \t\t; test for overflow if (AC >= 0)", " (7)JK8 \t\t; AC = MR;", " (8)XK9 \t\t; return;", "", "", "", "%DIVF", "", "; (DIVF) Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(DIVF)", " UB(ADR)+65)", " (1K) \t\t\t; jump addresses", " (2K)", " (3K)", " (4K)", " (5K)", " (6K)", " (7K)", " (8K)", " UB(ADR)+(DIVF)) \t; program in the drum store:", " TI8+(1) \t\t; program transfer MR = AC (b)", " TI(1K)+(2) \t\t; to the core store", " TI(2K)+(3)", " TI(3K)+(4)", " TI(4K)+(5)", " TI(5K)+(6)", " TI(6K)+(7)", " UK(7K)", " JK9 \t\t\t; put return jump (RS) in (8)", " UKC(8K)", " XK(1K) \t\t; goto prog in core store", " (1)XBLV(2K)-11 \t; program in the core store: do 11 times {exec(4); AC/MR <<= 4;}", " (2)XUK(4K) \t\t; division do it a 12th time", " (3)XK(7K) \t\t; goto (7)", " (4)Z2XB(6K)+0 \t; while (AC >= MD) exec(6)", " (5)XK9 \t\t; return", " (6)Z2ASWK7 \t\t; if (Ac >= MD) {AC -= MD; MR++;}", " (7)NRV \t\t; AC/MR >>= 4 ", " (8)N0 \t\t; return jump is stored here ", "", "", "", "", "", " (F2)", " UB(ADR)+54)", " (A1)", " UB(ADR)+(CL))", " ASCK(F2) \t\t; program in the drum store", " UK7", " UBH7-1 \t\t; K7 := negative nr. of words", " N0", " ABCGK(A1)", " N0 \t\t\t; assembling store instruction", " A(1)", " UK8", " JK0", " XBGK8+7 \t\t; recurrent execution of store instruction", " (1)UW0+0"], prog_hello = [";===================================================================", "; ", "; Hello world program for the Mailuefterl computer", ";", ";===================================================================", ";", '; Prints "HELLO WORLD" on the teleprinter.', ";", "; Written in 2008 by Norbert Kehrer (http://members.aon.at/nkehrer).", ";", ";===================================================================", "", "\tUB(ADR)+50)", "\t(I)N\t\t; index i (in core store)", "\t(TMP)\t\t; temporary storage", "", "", "\tUB(ADR)+0000)\t; Target address = 0000 --\x3e Start with X 0000", "", "\tABC0", "\tUK(I)\t\t\t;     i = 0", "\tJH(I)+(TEXT)\t\t;     ac = text[i]", "\tN", "\t(1)Z4N.\t\t\t; (1) stop if ac < 0 (end of string marker)", "\tXU(EMIT)", "\tJK(I)", "\tAB1", "\tUK(I)\t\t\t;     i = i + 1", "\tJH(I)+(TEXT)\t\t;     ac = text[i]", "\tN", "\tX(1)\t\t\t;     goto (1)", "", "", "\t(TEXT)PB6:3:3:3:3:3:3:3:3:3:0:2\t\t; <CR>", "\tPB6:3:3:3:3:3:3:3:3:3:0:1\t\t; <LF>", "\tPB6:3:3:3:3:3:3:3:3:3:0:2\t\t; <CR>", "\tPB6:3:3:3:3:3:3:3:3:3:0:1\t\t; <LF>", "\tPB6:3:3:3:3:3:3:3:3:3:1:13\t\t; M", "\tPB6:3:3:3:3:3:3:3:3:3:1:12\t\t; A", "\tPB6:3:3:3:3:3:3:3:3:3:0:11\t\t; I", "\tPB6:3:3:3:3:3:3:3:3:3:1:4\t\t; L", "\tPB6:3:3:3:3:3:3:3:3:3:0:10\t\t; U", "\tPB6:3:3:3:3:3:3:3:3:3:0:6\t\t; E", "\tPB6:3:3:3:3:3:3:3:3:3:1:8\t\t; F", "\tPB6:3:3:3:3:3:3:3:3:3:0:8\t\t; T", "\tPB6:3:3:3:3:3:3:3:3:3:0:6\t\t; E", "\tPB6:3:3:3:3:3:3:3:3:3:0:7\t\t; R", "\tPB6:3:3:3:3:3:3:3:3:3:1:4\t\t; L", "\tPB6:3:3:3:3:3:3:3:3:3:0:0\t\t;  ", "\tPB6:3:3:3:3:3:3:3:3:3:0:6\t\t; E", "\tPB6:3:3:3:3:3:3:3:3:3:1:13\t\t; M", "\tPB6:3:3:3:3:3:3:3:3:3:0:10\t\t; U", "\tPB6:3:3:3:3:3:3:3:3:3:1:4\t\t; L", "\tPB6:3:3:3:3:3:3:3:3:3:1:12\t\t; A", "\tPB6:3:3:3:3:3:3:3:3:3:0:8\t\t; T", "\tPB6:3:3:3:3:3:3:3:3:3:0:12\t\t; O", "\tPB6:3:3:3:3:3:3:3:3:3:0:7\t\t; R", "\tPB6:3:3:3:3:3:3:3:3:3:0:2\t\t; <CR>", "\tPB6:3:3:3:3:3:3:3:3:3:0:1\t\t; <LF>", "\tPB6:3:3:3:3:3:3:3:3:3:1:11\t\t; B", "\tPB6:3:3:3:3:3:3:3:3:3:0:9\t\t; Y", "\tPB6:3:3:3:3:3:3:3:3:3:0:0\t\t;  ", "\tPB6:3:3:3:3:3:3:3:3:3:1:14\t\t; N", "\tPB6:3:3:3:3:3:3:3:3:3:0:12\t\t; O", "\tPB6:3:3:3:3:3:3:3:3:3:0:7\t\t; R", "\tPB6:3:3:3:3:3:3:3:3:3:1:11\t\t; B", "\tPB6:3:3:3:3:3:3:3:3:3:0:6\t\t; E", "\tPB6:3:3:3:3:3:3:3:3:3:0:7\t\t; R", "\tPB6:3:3:3:3:3:3:3:3:3:0:8\t\t; T", "\tPB6:3:3:3:3:3:3:3:3:3:0:0\t\t;  ", "\tPB6:3:3:3:3:3:3:3:3:3:1:5\t\t; K", "\tPB6:3:3:3:3:3:3:3:3:3:0:6\t\t; E", "\tPB6:3:3:3:3:3:3:3:3:3:1:6\t\t; H", "\tPB6:3:3:3:3:3:3:3:3:3:0:7\t\t; R", "\tPB6:3:3:3:3:3:3:3:3:3:0:6\t\t; E", "\tPB6:3:3:3:3:3:3:3:3:3:0:7\t\t; R", "\tPB6:3:3:3:3:3:3:3:3:3:0:2\t\t; <CR>", "\tPB6:3:3:3:3:3:3:3:3:3:0:1\t\t; <LF>", "\tPB6:3:3:3:3:3:3:3:3:3:0:2\t\t; <CR>", "\tPB6:3:3:3:3:3:3:3:3:3:0:1\t\t; <LF>", "\tPB6:12:12:12:12:12:12:12:12:12:12:12\t; end of string", "", "", "", "", "(EMIT)\tN\t\t; emit a character input: ac = 6 bit character (top bit = fig/let)", "\tNL\t\t; shift AC to the left by 9 tetrades (i.e., 36 bits)", "\tNL", "\tNL", "\tNL", "\tNL", "\tNL", "\tNL", "\tNL", "\tNL", "\tNOL\t\t; shift AC to the left by 3 more bits (i.e., 39 bits in total)", "\tNOL", "\tNOL", "\tUK(TMP)\t\t; save AC in TMP", "\tZ9X(EMIT1)\t; if Q-mark (i.e. figures shift) go to (1)", "\tJ(LETRS)\t; AC = letters shift", "\tX(EMIT2)\t; go to (2)", "\t(EMIT1)J(FIGRS) ; AC = figures shift", "\t(EMIT2)UK10\t; print AC on teleprinter", "\tJK(TMP)\t\t; retrieve AC from TMP", "\tNOL\t\t; shift AC 1 bit to the left (so that 5 bit char remains)", "\tUK10\t\t; print AC on teleprinter", "\tXK9\t\t; return", "", "\t(LETRS)\tPB 0:13:0:0:0:0:0:0:0:0:0:0\t\t; letters shift (13 = 01101)", "\t(FIGRS)\tPB 0:14:0:0:0:0:0:0:0:0:0:0\t\t; figures shift (14 = 01110)", ""], prog_relais = ["; Original Mailuefterl program from the report:", ";", '; Kudielka V., Walk K., Bandat K., Lucas P., Zemanek H.: "Programs for', '; Logical Data Processing - Mailuefterl Volltransistor-Rechenautomat",', "; Vienna, February 1960.", ";", ";", "; Typed in by Norbert Kehrer (http://members.aon.at/nkehrer) in January 2007.", ";", "; Assemble and start with X1000 on the control desk", ";", "", "\tUB(ADR)+1000)\t; Target address = 1000 --\x3e Start with X 1000", "", "%NK", "", "(NK)\tABC8\t\t", "\tUK(M)\t\t; M := 8 (maximum number of variables)", "\tJ(ADDR70)", "\tUK(A1)\t\t; A1 := 70 (head address of set accumulator)", "\tXU(RELAIS)\t; call subroutine Relais", "\tN.\t\t; halt machine", "", "\t(ADDR70)PB 3:3:10:3\t\t; address 70 ", "", "", "", "", "; (RELAIS) Evaluation of the logical function of a relay network", ";", ";    Input parameters:\ta1\thead address of resulting minterm set", ";\t\t\tn\tnumber of variables", ";", ";", ";    Symbols used in the comment:", ";\t\t\tK\tminterm", ";\t\t\tai\tcurrent address of the result", ";\t\t\tA\trelay output", ";\t\t\tE\trelay input", ";\t\t\tMR\tmultiplier register", ";\t\t\tQ-mark\t45th position in a word", "", "", "", "(RELAIS)", "\tUB(ADR)+50)", "\t(M)\t\t; number of variables", "\t(AI)\t\t; current address of the resulting minterm set", "\t(K)\t\t; current minterm", "\t(K1)\t\t; first minterm", "\t(A1)\t\t; head address of the resulting minterm set", "\t(-M)\t\t; auxiliary locations", "\t(H)", "\t(S)", "\t(Y)", "\tUB(ADR)+60)", "\t(1K)", "\t(1,1K)", "\tUB(ADR)+66)", "\t(9K)", "\tUB(ADR)+69)", "\t(5K)", "\tUB(ADR)+72)", "\t(3K)", "\tUB(ADR)+77)", "\t(6K)", "\tUB(ADR)+83)", "\t(4K)", "\tUB(ADR)+89)", "\t(10K)", "\t(11K)", "\t(12K)", "\t(17K)", "", "\tUB(ADR)+(RELAIS))\t; program in the drum store", "\tJK9", "\tU(END)\t\t\t; prepare return jump", "\tJ(15)", "\tUK7\t\t\t; transfer to core store", "\tJ(14)", "\tUK8", "\tJ(1)", "\tXU(13)", "\tAKCS(M)\t\t\t; MR := -(n-1)", "\tAB1\t\t\t;\t\tK := K", "\tUK8", "\tJKS0", "\tZ7YNORW", "\tUK(K)", "\tOA(1B1)\t", "\tUK(K1)\t\t\t; K1 := K0 + binary 1", "\tAKCS(M)", "\tIK(12K)", "\tUK(-M)\t\t\t; -M := -n", "\tJK0", "\tUKPQ(Y)\t\t\t; y := 0", "\tUK(S)\t\t\t; s := Q-mark", "\tJK(A1)", "\tUK(AI)\t\t\t; ai := a1", "\tXK(1K)", "\t(13)XAB8-34\t\t; instructions for transfer operations and", "\t(14)TI(1K)+(1,1)\t; auxiliary locations", "\t(1B1)PB1", "\t(15)N1+1", "\t(16)JK(Y)", "\tUH(AI)+0", "\tN0", "\t(END)\t\t\t; return jump", "\t(1)JK(11K)\t\t; program in the core store: ", "\t(1,1)UK8\t\t; A := K", "\tJK(K)", "\tN0", "\tXUBGK8+(-M)", "\t;XBGK(17K)+5\t\t; original", "\tXBG(17K)+(CNT)\t\t; recurrent instruction for time interval output-input", "\t(9)JK5016", "\tZ9XK(5K)\t\t; if E = 1 go to (5)", "\tXK(3K)\t\t\t; go to (3)", "\t(5)JK(Y)", "\tDK(S)", "\tUK(Y)\t\t\t; y := y v s", "\t(3)JK(S)", "\tOR\t\t\t; shift s binary to the right", "\tUK(S)", "\tZ12XK(6K)\t\t; if s = 0 go to (6)", "\tXK(4K)", "\t(6)JK(Y)", "\tUH(AI)+0", "\tUBH(AI)+1\t\t; ai := ai+1", "\tJK0", "\tUKPQ(Y)\t\t\t; y := 0", "\tUK(S)\t\t\t; s := Q-mark", "\t(4)JKS(K)", "\tZ12X(16)\t\t; if K = 1 go to (16)", "\tJK(K)", "\tOAK(K1)\t\t\t; K := K + K1", "\tUK(K)", "\tXK(1K)", "\t(10)N0+0\t\t; output loop", "\t(11)UKOLW0+5032", "\t(12)PB15:15:15:15\t; different from original - in orig. here is blank", "\t(17)N0+0", "\tXK(9K)", "", "\tN.)", "", "\t(CNT)PB12:12:12:7\t; non-original", ""], prog_forth = [";===================================================================", "; Forth interpreter for the Mailuefterl computer", ";", "; Written in 2007 by Norbert Kehrer, http://members.aon.at/nkehrer", ";", "; The first (and probably last) Forth interpreter for this machine.", ";===================================================================", ";", ";", "; Interpreter model:  Direct threaded code", "; ==================", ";", ";", "; Memory map:", "; ===========", ";", "; Registers:", ";    W    Working register            50", ";    IP   Interpreter pointer         51", ";    PSP  Parameter stack pointer     52", ";    RSP  Return stack pointer        53", ";    UP   User pointer                54", ";    X    Auxiliary register          55", ";    Y    Auxiliary register          56", ";    Z    Auxiliary register          57", ";", "; Stacks:", ";    Parameter stack (growing upwards)    60 - 80 ", ";    Return stack    (growing downwards)  81 - 99", ";", ";", "; Drum store:", ";    ORIG\t   0\torigin of FORTH's Dictionary.", ";    MEM\t9000\ttop of assigned memory + 1 word", ";    TIBX\t8980\tterminal input buffer of 84 bytes", ";    UAREA\t8900\tarea for user variables", ";", "; Characters:", ";    Bit 5\t0 = letters shift, 1 = figures shift", ";    Bits 0-4\tcharacter (5-bit teleprinter code)", "", "", "", "\tUB(ADR)+0000)\t; Target address = 0000 --\x3e Start with X 0000", "\t(START)", "", "%FORTH", "\tUB(ADR)+50)\t; Declare registers and stack boundaries", "\t(W)", "\t(IP)", "\t(PSP)", "\t(RSP)", "\t(UP)", "\t(X)", "\t(Y)", "\t(Z)", "\tUB(ADR)+60)", "\t(PSBASE)", "\tUB(ADR)+99)", "\t(RSBASE)", "", "\tUB(ADR)+8900)", "\t(UAREA)", "\tUB(ADR)+8980)", "\t(TIBX)", "\tUB(ADR)+9000)", "\t(MEM)", "", "\tUB(ADR)+(START))\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", "", "", "; test code", "\tABC(UAREA)", "\tUK(UP)", "\tJ(1)", "\tUK(PSP)", "\tJ(2)", "\tUK(RSP)", "\tUB(IP)+(GO)", "\tX(NEXT)", "", "\t(1)NK(PSBASE)", "\t(2)NK(RSBASE)", "", "", "(GO)\tN0+(LIT)\t\t\t; set OUT to 0", "\tPB 3:3:3:3:3:3:3:3:3:3:3:3\t; 0", "\tN(OUT)\t\t\t\t; 0 addr", "\tN(STOR)", "\tN0+(TEST)", "\tN0+(STOP)", "", "(STOP)\tN.", "", "(TEST1)\tX(DOCOL)\t\t\t; ( n1 --\x3e n2 )", "\tN0+(LIT)", "\t;PB 0:15:0:0:0:0:0:0:0:0:0:0\t; char N (30)", "\tPB 1:14\t\t\t\t; char N (30)", "\tN0+(EMIT)\t\t\t; EMIT", "\tN0+(SEMIS)", "", "", "(TEST)\tX(DOCOL)\t\t\t; ( n1 --\x3e n2 )", "\tN0+(LIT)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:7\t; 4", "\tN0+(ADD5)\t\t\t; ADD5", "\tN0+(LIT)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:5\t; 2", "\tN0+(-)\t\t\t\t; -", "\tN0+(LIT)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:12\t; 19", "\tN0+(*)\t\t\t\t; *", "\tN0+(LIT)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:6\t; 13", "\tN0+(/)\t\t\t\t; /", "\tN0+(LIT)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:4\t; 11", "\tN0+(OVER)\t\t\t; OVER", "\tN0+(DUP)\t\t\t; DUP", "\tN0+(LIT)", "\t;PB 0:15:0:0:0:0:0:0:0:0:0:0\t; char N (30)", "\tPB 1:14\t\t\t\t; char N (30)", "\tN0+(EMIT)\t\t\t; EMIT", "\tN0+(LIT)", "\t;PB 0:10:8:0:0:0:0:0:0:0:0:0\t; char K (21)", "\tPB 1:5\t\t\t\t; char K (21)", "\tN0+(EMIT)\t\t\t; EMIT", "\tN0+(LIT)", "\t;PB 0:0:0:0:0:0:0:0:0:0:0:0\t; char Space (0)", "\tPB 0\t\t\t\t; char Space (0)", "\tN0+(EMIT)\t\t\t; EMIT", "\tN0+(LIT)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:4\t; 1", "\tN(DUP)\t\t\t\t; DUP", "\tN0+(EMIT)\t\t\t; EMIT", "\tN0+(LIT)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:4\t; 1", "\tN(-)\t\t\t\t; -", "\tN(0BRANCH)", "\tPB 12:12:12:12:12:12:12:12:12:12:12:7\t; 0BRANCH -6\t\t\t\t", "\tN0+(LIT)", "\t;PB 1:4:8:0:0:0:0:0:0:0:0:0\t; char 6 (9)", "\tPB 2:9\t\t\t\t; char 6 (9)", "\tN0+(LIT)", "\t;PB 1:4:8:0:0:0:0:0:0:0:0:0\t; char 6 (9)", "\tPB 2:9\t\t\t\t; char 6 (9)", "\tN0+(LIT)", "\t;PB 1:6:0:0:0:0:0:0:0:0:0:0\t; char 9 (12)", "\tPB 2:12\t\t\t\t; char 9 (12)", "\tN0+(LIT)", "\t;PB 1:2:0:0:0:0:0:0:0:0:0:0\t; char 1 (4)", "\tPB 2:4\t\t\t\t; char 1 (4)", "\tN0+(EMIT)\t\t\t; EMIT", "\tN0+(EMIT)\t\t\t; EMIT", "\tN0+(EMIT)\t\t\t; EMIT", "\tN0+(EMIT)\t\t\t; EMIT", "\tN(KEY)\t\t\t\t; KEY", "\tN(EMIT)\t\t\t\t; EMIT", "\tN(BRANCH)", "\tPB 12:12:12:12:12:12:12:12:12:12:12:10\t; BRANCH -3\t\t\t\t", "\tN0+(SEMIS)", "", "(ADD5)\tX(DOCOL)\t\t\t; ( n1 --\x3e n2 )", "\tN0+(LIT)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:8\t; 5", "\tN0+(+)\t\t\t\t; +", "\tN0+(SEMIS)", "", "", "", "", "; *** Forth Kernel", "", "", "(LIT)\tJGK(IP) \t; PUSH (IP)", "\tN", "\tUGK(PSP)", "\tN", "\tUBHK(PSP)+1", "\tN", "\tUBH(IP)+1\t; IP + 1 --\x3e IP", "\tN", "", "", "", "(NEXT)\tJGK(IP) \t; (IP) --\x3e W", "\tN", "\tUK(W)", "\tUBH(IP)+1\t; IP + 1 --\x3e IP", "\tN", "\tXGK(W)\t\t; JUMP (W)", "\tN", "", "", "", "(DOCOL)\tJK(IP)\t\t; PUSH IP", "\tUGK(RSP)", "\tN", "\tUBHK(RSP)-1", "\tN", "\tJK(W)\t\t; W + 1 --\x3e IP", "\tAB1", "\tUK(IP)", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(SEMIS)\tUBHK(RSP)+1\t; POP IP", "\tN", "\tJGK(RSP)\t\t\t", "\tN", "\tUK(IP)\t\t", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(+)\tUBHK(PSP)-1\t; POP AC\t\t( n1 n2 --\x3e n3 )", "\tN", "\tJGK(PSP)", "\tN", "\tUBHK(PSP)-1\t; POP", "\tN", "\tAGK(PSP)\t; AC + TOS --\x3e AC", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(MINUS)\tUBHK(PSP)-1\t; POP AC\t\t( n1 --\x3e n2 )", "\tN", "\tASCGK(PSP)\t; -TOS --\x3e AC", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(*)\tUBHK(PSP)-1\t; POP AC\t\t( n1 n2 --\x3e n3 )", "\tN", "\tJGK(PSP)", "\tN", "\tUK7\t\t; AC --\x3e MD", "\tUBHK(PSP)-1\t; POP AC", "\tN", "\tJGK(PSP)", "\tN", "\tUK8\t\t; AC --\x3e MR", "\tJ(*K1)", "\tUK(X)\t\t; Instruction 1 --\x3e X", "\tJ(*K2)", "\tUKC(Y)\t\t; Instruction 2 --\x3e Y;  AC = 0", "\tZ1YAMK7\t\t; while (MR[T1] != 0) {AC += MD; MR--;};", "\tXBRV(X)-9\t; do 9 times {exec(I1) and AC/MR >> 4} ... shift right 9 times", "\t(*1)ABSRV1\t; AC--; AC/MR >> 4; ... 11th shift right", "\tZ3N1+\t\t; test for overflow\tif (AC >= 0)", "\tJK8\t\t;\t\t\tAC = MR;", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "\t(*K1)Z1YAMK7\t; while (MR[T1] != 0) {AC += MD; MR--;}; ... and a 10th time", "\t(*K2)X(*1)\t; goto (1)  // to have a delay for execution", "", "", "", "(U/)\tUBHK(PSP)-1\t; POP AC\t\t( n1 n2 --\x3e n3 n4 )", "\tN", "\tJGK(PSP)", "\tN", "\tUK7\t\t; AC --\x3e MD", "\tUBHK(PSP)-1\t; POP AC", "\tN", "\tJGK(PSP)", "\tN", "\tUK8\t\t; AC --\x3e MR", "\tJ(U/K1)", "\tUK(X)\t\t; Instruction 1 --\x3e X", "\tJ(U/K2)", "\tUK(Y)\t\t; Instruction 2 --\x3e Y", "\tJ(U/K3)", "\tUKC(Z)\t\t; Instruction 3 --\x3e Z;  AC = 0", "\tXBLV(X)-11\t; do 11 times {exec(K1); AC/MR <<= 4;}", "\t(U/1)XU(U/2)\t; do it a 12th time", "\tX(U/3)", "\t(U/2)Z2XB(Z)+0\t; while (AC >= MD) exec(K3)", "\tXK9\t\t; return", "\t(U/3)NRV", "\tJK8\t\t; AC = MR   remainder", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tJK(X)\t\t; get quotient from X", "\tUGK(PSP)\t; PUSH AC   quotient", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "\t(U/K1)XU(U/2)", "\t(U/K2)X(U/3)", "\t(U/K3)Z2ASWK7\t\t; if (Ac >= MD) {AC -= MD; MR++;}", "", "", "", "(AND)\tUBHK(PSP)-1\t; POP AC\t\t( n1 n2 --\x3e n3 )", "\tN", "\tJGK(PSP)", "\tN", "\tUBHK(PSP)-1\t; POP", "\tN", "\tIGK(PSP)\t; AC & TOS --\x3e AC", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(OR)\tUBHK(PSP)-1\t; POP AC\t\t( n1 n2 --\x3e n3 )", "\tN", "\tJGK(PSP)", "\tN", "\tUBHK(PSP)-1\t; POP", "\tN", "\tDGK(PSP)\t; AC & TOS --\x3e AC", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(XOR)\tUBHK(PSP)-1\t; POP AC\t\t( n1 n2 --\x3e n3 )", "\tN", "\tJGK(PSP)", "\tN", "\tUBHK(PSP)-1\t; POP", "\tN", "\tFGK(PSP)\t; AC & TOS --\x3e AC", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(FTCH)\tUBHK(PSP)-1\t; POP AC\t\t( addr --\x3e n )", "\tN", "\tJGK(PSP)", "\tN", "\tD(KBIT1)\t; set K-bit in AC ... source is on stack (i.e. in core)", "\tI(GBIT0)\t; clear G-bit in AC ... no further address substitution", "\tUK(X)\t\t; AC --\x3e X", "\tJGK(X)\t\t; (X) --\x3e AC\t", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(STOR)\tUBHK(PSP)-1\t; POP AC\t\t( n addr --\x3e )", "\tN", "\tJGK(PSP)\t; ... AC = addr", "\tN", "\tI(KBIT0)\t; clear K-bit in AC ... destination is on drum", "\tI(GBIT0)\t; clear G-bit in AC ... no further address substitution", "\tUK(X)\t\t; AC --\x3e X", "\tUBHK(PSP)-1\t; POP AC", "\tN", "\tJGK(PSP)\t; ... AC = n", "\tN", "\tUGK(X)\t\t; AC --\x3e (X)", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(EXECUTE)", "\tUBHK(PSP)-1\t; POP AC\t\t( addr --\x3e )", "\tN", "\tJGK(PSP)\t; ... AC = addr", "\tN", "\tI(KBIT0)\t; clear K-bit in AC ... destination is on drum", "\tI(GBIT0)\t; clear G-bit in AC ... no further address substitution", "\tUK(W)\t\t; AC --\x3e W", "\tXGK(W)\t\t; JUMP (W)", "\tN", "", "", "", "(DROP)\tUBHK(PSP)-1\t; POP\t\t\t( n --\x3e )", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(OVER)\tUBHK(PSP)-2\t; POP; POP AC\t\t( n1 n2 --\x3e n1 n2 n1 )", "\tN", "\tJGK(PSP)", "\tN", "\tUBHK(PSP)+2\t; PUSH PUSH", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(DUP)\tUBHK(PSP)-1\t; POP AC\t\t( n --\x3e n n )", "\tN", "\tJGK(PSP)", "\tN", "\tUBHK(PSP)+1\t; PUSH", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "", "(SWAP)\tUBHK(PSP)-1\t; POP AC\t\t( n1 n2 --\x3e n2 n1 )", "\tN", "\tJGK(PSP)", "\tN", "\tUK(X)\t\t; save in X", "\tUBHK(PSP)-1\t; POP AC", "\tN", "\tJGK(PSP)", "\tN", "\tUK(X)\t\t; save in Y", "\tJK(X)\t\t; AC = X", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tJK(Y)\t\t; AC = Y", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(DOUSE)\tJK(W)\t\t; W + 1 --\x3e X ... get PFA by adding 1 to W", "\tAB1", "\tUK(X)", "\tJGK(X)\t\t; (X) --\x3e AC ... get Parameter (i.e. value at PFA)", "\tN", "\tAGK(UP)\t\t; AC + (UP) --\x3e AC", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(+STOR)\tUBHK(PSP)-1\t; POP AC\t\t( n addr --\x3e )", "\tN", "\tJGK(PSP)\t; ... AC = addr", "\tN", "\tI(KBIT0)\t; clear K-bit in AC ... destination is on drum", "\tI(GBIT0)\t; clear G-bit in AC ... no further address substitution", "\tUK(X)\t\t; AC --\x3e X", "\tUBHK(PSP)-1\t; POP AC", "\tN", "\tJGK(PSP)\t; ... AC = n", "\tN", "\tAGK(X)\t\t; ... AC = AC + (X)", "\tN", "\tUGK(X)\t\t; AC --\x3e (X)", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(XEMIT)\tUBHK(PSP)-1\t; POP AC\t\t( c --\x3e )", "\tN", "\tJGK(PSP)\t; ... AC = character c", "\tN", "\tNL\t\t; shift AC to the left by 9 tetrades (i.e., 36 bits)", "\tNL", "\tNL", "\tNL", "\tNL", "\tNL", "\tNL", "\tNL", "\tNL", "\tNOL\t\t; shift AC to the left by 3 more bits (i.e., 39 bits in total)", "\tNOL", "\tNOL", "\tUK(X)\t\t; save AC in X", "\tZ9X(EMIT1)\t; if Q-mark (i.e. figures shift) go to (1)", "\tJ(LETRS)\t; AC = letters shift", "\tX(EMIT2)\t; go to (2)", "\t(EMIT1)J(FIGRS) ; AC = figures shift", "\t(EMIT2)UK10\t; print AC on teleprinter", "\tJK(X)\t\t; retrieve AC from X", "\tNOL\t\t; shift AC 1 bit to the left (so that 5 bit char remains)", "\tUK10\t\t; print AC on teleprinter", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(KEY)\tJK11\t\t;read a character from paper tape\t( --\x3e c )", "\tN", "\tI(BITS5)\t; keep only 5 bits\t", "\tUK(X)\t\t; save AC in X", "\tJ(LETSH)\t", "\tUK7\t\t; MD = letter shift", "\tJK(X)\t\t; restore AC (read character)", "\tZ11X(KEY1)\t; if not letter shift, go to (1)", "\tJ(LETST)\t", "\tU(KBST)\t\t; set keyboard state to letters", "\tX(KEY)\t\t; read another character (the real one now)", "\t(KEY1)J(FIGSH)", "\tUK7\t\t; MD = figures shift", "\tJK(X)\t\t; restore AC (read character)\t", "\tZ11X(KEY2)\t; if not figures shift, go to (2)", "\tJ(FIGST)\t", "\tU(KBST)\t\t; set keyboard state to letters", "\tX(KEY)\t\t; read another character (the real one now)", "\t(KEY2)D(KBST)\t; add keyboard state (6th bit) to read character", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(BRANCH) JGK(IP)\t;  AC = (IP)\t\t( --\x3e )", "\tN", "\tAK(IP)\t\t; AC = IP + AC", "\tI(KBIT0)\t; clear K-bit in AC ... destination is on drum", "\tI(GBIT0)\t; clear G-bit in AC ... no further address substitution", "\tUK(IP)\t\t; IP = AC  ... i.e., IP = IP + (IP)", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(0BRANCH) UBHK(PSP)-1\t; POP AC\t\t( f --\x3e )", "\tN", "\tJGK(PSP)", "\tN", "\tZ12X(BRANCH)\t; if AC == 0, go to (BRANCH)", "\tUBH(IP)+1\t; else, IP + 1 --\x3e IP", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(>R)\tUBHK(PSP)-1\t; POP AC\t\t( n --\x3e )", "\tN", "\tJGK(PSP)", "\tN", "\tUGK(RSP)\t; push IP on return stack ", "\tN", "\tUBHK(RSP)-1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(R>)\tUBHK(RSP)+1\t; pop AC from return stack\t( --\x3e n )", "\tN", "\tJGK(RSP)\t\t\t", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(R)\tUBHK(RSP)+1\t; copy AC from return stack\t( --\x3e n )", "\tN", "\tJGK(RSP)\t\t\t", "\tN", "\tUBHK(RSP)-1", "\tN", "\tUGK(PSP)\t; PUSH AC", "\tN", "\tUBHK(PSP)+1", "\tN", "\tX(NEXT)\t\t; JUMP NEXT", "", "", "(I)\tX(R)\t\t; copy top of return stack to top of parameter stack", "", "", "", "", "", "", ";\t*** User variables", "", "(S0)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:6\t\t; 3\t", "(R0)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:7\t\t; 4\t", "(TIB)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:8\t\t; 5\t", "(WIDTH)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:9\t\t; 6\t", "(WARNING) X(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:10\t\t; 7\t", "(FENCE)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:11\t\t; 8\t", "(DP)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:3:12\t\t; 9\t", "(VOC-LINK) X(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:3\t\t; 10\t", "(IN)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:4\t\t; 11\t", "(OUT)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:5\t\t; 12\t", "(CONTEXT) X(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:6\t\t; 13\t", "(CURRENT) X(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:7\t\t; 14\t", "(STATE)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:8\t\t; 15\t", "(BASE)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:9\t\t; 16\t", "(DPL)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:10\t\t; 17\t", "(FLD)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:11\t\t; 18\t", "(CSP)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:4:12\t\t; 19\t", "(HLD)\tX(DOUSE)", "\tPB 3:3:3:3:3:3:3:3:3:3:5:3\t\t; 20\t", "", "", "", "", "", ";\t*** High level definitions", "", "(-)\tX(DOCOL)\t; ( n1 n2 --\x3e difference )", "\tN(MINUS)", "\tN(+)", "\tN(SEMIS)", "", "(/)\tX(DOCOL)\t; ( n1 n2 --\x3e quotient )", "\tN(U/)", "\tN(SWAP)", "\tN(DROP)", "\tN(SEMIS)", "", "(MOD)\tX(DOCOL)\t; ( n1 n2 --\x3e mod )", "\tN(U/)", "\tN(DROP)", "\tN(SEMIS)", "", "", "(TOGGLE) X(DOCOL)\t; ( addr b --\x3e )", "\tN(OVER)\t\t; addr b addr", "\tN(FTCH)\t\t; addr b v", "\tN(XOR)\t\t; addr x", "\tN(SWAP)\t\t; x addr", "\tN(STOR)\t\t; ", "\tN(SEMIS)", "", "", "(EMIT)\tX(DOCOL)\t; ( c --\x3e )", "\tN0+(LIT)\t; c 1", "\tPB 3:3:3:3:3:3:3:3:3:3:3:4", "\tN(OUT)\t\t; c 1 addr", "\tN(+STOR)\t; c", "\tN(XEMIT)", "\tN(SEMIS)", "", "(DODO)\tX(DOCOL)\t; ( start limit --\x3e )", "\tN(>R)", "\tN(>R)", "\tN(SEMIS)", "", "", "", "", "", "", "; *** Constants", "", "(KBIT1)\tPB 0:0:0:0:8:0:0:0:0:0:0:0\t\t; K-bit on", "(KBIT0)\tPB 15:15:15:15:7:15:15:15:15:15:15:15\t; K-bit off", "(GBIT1)\tPB 0:0:0:0:1:0:0:0:0:0:0:0\t\t; G-bit on", "(GBIT0)\tPB 15:15:15:15:14:15:15:15:15:15:15:15\t; G-bit off", "(BITS5)\tPB 0:0:0:0:0:0:0:0:0:0:1:15\t\t; 5 bits", "(LETRS)\tPB 0:13:0:0:0:0:0:0:0:0:0:0\t\t; letters shift (13 = 01101)", "(FIGRS)\tPB 0:14:0:0:0:0:0:0:0:0:0:0\t\t; figures shift (14 = 01110)", "(LETSH) PB 13\t\t\t\t\t; letters shift", "(FIGSH) PB 14\t\t\t\t\t; figures shift", "(LETST) PB 0\t\t\t\t\t; letters state", "(FIGST) PB 2:0\t\t\t\t\t; figures state", "", "", "; *** Variables", "(KBST)\tPB 0\t\t\t\t\t; keyboard state (0=letters, 0x20 = figures)", ""], prog_logdat = ["; Test with code segments of original Mailuefterl programs from", "; the report:", ";", '; Kudielka V., Walk K., Bandat K., Lucas P., Zemanek H.: "Programs for', '; Logical Data Processing - Mailuefterl Volltransistor-Rechenautomat",', "; Vienna, February 1960.", ";", ";", "; Typed in by Norbert Kehrer (http://members.aon.at/nkehrer) in January 2007.", ";", ";", '; This code part only initializes and prints out the "set accumulator".', ";", "; Assemble and start with X1000 on the control desk", ";", "", "\tUB(ADR)+1000)\t; Target address = 1000 --\x3e Start with X 1000", "", "%NK", "", "", "(NK)\tABC8\t\t", "\tUK50\t\t; M := 8 (maximum number of variables)", '\tXU(PR)\t\t; call subroutine "Preparatory Routine"', "\tJ(ADDR70)", "\tUK54\t\t; A1 := 70 (head address of set accumulator)", '\tXU(CL)\t\t; call subroutine "Clear set accumulator"', "\tJ(ADDR70)", "\tUK54\t\t; A1 := 70 (head address of set accumulator)", '\tXU(PRA)\t\t; call subroutine "Print set accumulator"', "\tN.\t\t; halt machine", "", "\t(ADDR70)PB 3:3:10:3\t\t; address 70 ", "", "", "", "\t\t\t; *** Test program", "", ";(NK)\tABC45\t\t; prepare multpilication:", ";\tUK7\t\t; a=45", ";\tABC23\t\t; b=23", ';\tXU (MULTF)\t; call subroutine "fixed point multiplication" a x b', ";\tABC31\t\t; prepare division:", ";\tUK7\t\t; a=1035", ";\tABC1035\t\t; b=31", ';\tXU (DIVF)\t; call subroutine "fixed point division" a / b', ';\t;XU (CL)\t; call subroutine "clear set accumulator"', ";\tN.\t\t; halt machine", "", "", "%MULTF", "", "; (MULTF) Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(MULTF)", "\tUB(ADR)+65)", "\t(1K)\t\t\t; jump addresses", "\t(2K)", "\t(3K)", "\t(4K)", "\t(5K)", "\t(6K)", "\t(7K)", "\t(8K)", "\tUB(ADR)+(MULTF))\t; program in the drum store:", "\tTI8+(1)\t\t\t; program transfer\t\tMR = AC (b)", "\tTI(1K)+(2)\t\t; to the core store", "\tTI(2K)+(3)", "\tTI(3K)+(4)", "\tTI(4K)+(5)", "\tTI(5K)+(6)", "\tTI(6K)+(7)", "\tTI(7K)+(8)", "\tUKC(8K)\t\t\t;\t\t\t\tAC = 0;", "\tXK(1K)\t\t\t;\t\t\t\tgoto prog in core store", "\t(1)Z1YAMK7\t\t; program in the core store:\twhile (MR[T1] != 0) {AC += MD; MR--;};", "\t(2)XBRV(3K)-9\t\t; multiplication: \t\tdo 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", "\t(3)Z1YAMK7\t\t;\t\t\t\twhile (MR[T1] != 0) {AC += MD; MR--;}; ... and a 10th time", "\t(4)XK(5K)\t\t;\t\t\t\tgoto (5)  // to have a delay for execution", "\t(5)ABSRV1\t\t;\t\t\t\tAC--; AC/MR >> 4; ... 11th shift right", "\t(6)Z3N1+\t\t; test for overflow\t\tif (AC >= 0)", "\t(7)JK8\t\t\t;\t\t\t\tAC = MR;", "\t(8)XK9\t\t\t;\t\t\t\treturn;", "", "", "", "%DIVF", "", "; (DIVF) Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(DIVF)", "\tUB(ADR)+65)", "\t(1K)\t\t\t; jump addresses", "\t(2K)", "\t(3K)", "\t(4K)", "\t(5K)", "\t(6K)", "\t(7K)", "\t(8K)", "\tUB(ADR)+(DIVF))\t\t; program in the drum store:", "\tTI8+(1)\t\t\t; program transfer\t\tMR = AC (b)", "\tTI(1K)+(2)\t\t; to the core store", "\tTI(2K)+(3)", "\tTI(3K)+(4)", "\tTI(4K)+(5)", "\tTI(5K)+(6)", "\tTI(6K)+(7)", "\tUK(7K)", "\tJK9\t\t\t;\t\t\t\tput return jump (RS) in (8)", "\tUKC(8K)", "\tXK(1K)\t\t\t;\t\t\t\tgoto prog in core store", "\t(1)XBLV(2K)-11\t\t; program in the core store:\tdo 11 times {exec(4); AC/MR <<= 4;}", "\t(2)XUK(4K)\t\t; division\t \t\tdo it a 12th time", "\t(3)XK(7K)\t\t;\t\t\t\tgoto (7)", "\t(4)Z2XB(6K)+0\t\t;\t\t\t\twhile (AC >= MD) exec(6)", "\t(5)XK9\t\t\t;\t\t\t\treturn", "\t(6)Z2ASWK7\t\t;\t\t\t\tif (Ac >= MD) {AC -= MD; MR++;}", "\t(7)NRV\t\t\t;\t\t\t\tAC/MR >>= 4\t\t\t\t\t", "\t(8)N0\t\t\t;\t\t\t\treturn jump is stored here\t\t\t\t\t\t", "", "", "", "", "%PR", "", "; (PR) Preparatory Routine", ";", ";    Input parameter M: maximum number of variables", ";", ";    Subroutines: (MULTF)  Fixed point multiplication", ";                 (DIVF)   Fixed point division", ";", ";    Output parameters: F1: 2^N", ";                       F2: ent 2^N/45", ";                       F3: 2^N/45 - ent 2^N/45", "", "(PR)", "\tUB(ADR)+50)", "\t(M)\t\t\t; maximum number of variables", "\t(F1)\t\t\t; 2^N", "\t(F2)\t\t\t; entier (2^N/45)", "\tUB(ADR)+59)", "\t(F3)\t\t\t; 2^N/45 - entier (2^N/45)", "\tUB(ADR)+73)", "\t(Z)\t\t\t; counter", "\tUB(ADR)+97)", "\t(END)\t\t\t; return jump", "\tUB(ADR)+(PR))\t\t; program in the drum store", "\tJK9", "\tUK(END)\t\t\t; preparing return jump", "\tJK(M)", "\tABS1\t\t\t; Z := M-1", "\tUK(Z)", "\tABC2", "\tUK7\t\t\t; F1 := 2", "\tUK(F1)", "\t(1)JK(Z)", "\tABS1\t\t\t; Z := Z-1", "\tUK(Z)", "\tZ4X(1,1)\t\t; if Z<0 goto (1,1)", "\tJK(F1)", "\tXU(MULTF)", "\tUK(F1)\t\t\t; F1 := 2*F1", "\tX(1)\t\t\t; goto (1)", "\t(1,1)ABC45", "\tUK7", "\tJK(F1)", "\tXU(DIVF)\t\t; F3 := F1/45 - entier (F1/45)", "\tUK(F3)", "\tJK8", "\tUK(F2)\t\t\t; F2 := entier F1/45", "\tXK(END)", "", "", "", "%CL", "", "; (CL) Clear Set Accumulator", ";", ";    Input parameters:  F2   ent 2^N/45", ";                       A1   Head address of set accumulator", "", '(CL)\t\t\t; *** Subroutine "clear set accumulator"', "\tUB(ADR)+52)", "\t(F2)", "\tUB(ADR)+54)", "\t(A1)", "\tUB(ADR)+(CL))", "\tASCK(F2)\t; program in the drum store", "\tUK7", "\tUBH7-1\t\t; K7 := negative nr. of words", "\tN0", "\tABCGK(A1)", "\tN0\t\t; assembling store instruction", "\tA(1)", "\tUK8", "\tJK0", "\tXBGK8+7\t\t; recurrent execution of store instruction", "\t(1)UW0+0", "", "", "", "%CX", "", "; (CX) Combine Set Accumulator with the Variable xi.", ";", ";    Input Parameters:  N    subscript of the variable", ";                       F2   ent 2^N/45", ";                       F3   2^N/45 - ent (2^N/45)", ";                       A1   head address of set accumulator", ";", ";    Subroutines: (MULTF)  Fixed point multiplication", "", '(CXE)\t\t\t; *** Subroutine "combine set accumulator with variable"', "\tUB(ADR)+52)", "\t(F2)\t\t; ent (2^N/45)", "\t(N)\t\t; variable subscript ", "\t(A1)\t\t; head address of set accumulator", "\t(AJ)\t\t; current address of set accumulator", "\tUB(ADR)+57)", "\t(AE)\t\t; tail address of set accumulator", "\t(F4)\t\t; 2^(N-1)", "\t(F3)\t\t; 2^N/45 - ent (2^N/45)", "\t(XN)\t\t; location for the minterm set of the variable", "\t(I)\t\t; counter for word length", "\t(K)\t\t; counter for number of ones and zeroes", "\tUB(ADR)+65)\t; jump addresses", "\t(1K)", "\t(1,1K)", "\tUB(ADR)+72)", "\t(2K)", "\tUB(ADR)+77)", "\t(4K)", "\tUB(ADR)+84)", "\t(4,1K)", "\tUB(ADR)+86)", "\t(3K)", "\tUB(ADR)+97)", "\t(END)\t\t; return jump", "\tUB(ADR)+(CXE))\t; program in the drum store", "\tJ(XE)", "\tX(0)", "\t(CXV)J(XV)\t; different entries for pseudo-instructions", "\tX(0)", "\t(CXA)J(XA)", "\tX(0)", "\t(CXEN)J(XEN)", "\tX(0)", "\t(CXVN)J(XVN)", "\tX(0)", "\t(CXAN)J(XAN)", "\tX(0)", "\t(CXR)J(XR)", "\tX(0)", "\t(CXRN)J(XRN)", "\tX(0)", "\t(0)U(3,2)", "\tJK9", "\tUK(END)\t\t; preparing return jump", "\tJK(N)", "\tABS1\t\t; F4 := 2^(N-1)", "\tUK(K)", "\tABC2", "\tUK7", "\tABC1", "\t(0,2)UK(F4)", "\tJK(K)", "\tABS1", "\tUK(K)", "\tZ4X(0,1)", "\tJK(F4)", "\tXU(MULTF)", "\tX(0,2)", "\t(0,1)J(5)\t; program transfer to the core store", "\tUK8", "\tJ(6)", "\tUK7", "\tJ(1)", "\tXU(7)", "\tJK(A1)", "\tAK(F2)", "\tUK(AE)\t\t; AE := A1 + ent (2^N/45)", "\tUKC(AJ)\t\t; AJ := AE", "\tUK7\t\t; <K7> := 0", "\tJK0", "\tUK(XN)", "\tJK(F3)", "\tUK(I)\t\t; I := 2^N/45 - entier (2^N/45)", "\tUB8+1\t\t; <K8> := 1 (Switch for ones and zeroes)", "\tXK(1K)", "\t(1)JK(F4)\t; program in the core store", "\t(1,1)UK(K)\t; K := 2^(N-1)", "\tJK(XN)", "\tZ1OR", "\tZ1PQ\t\t; assembling minterm set of variable", "\tZ1XK(2K)", "\tOR", "\t(2)UK(XN)", "\tJK(I)", "\tABS1", "\tZ11XK(4K)\t; if I != 1 go to (4)", "\tXK(3K)", "\t(4)UK(I)\t; I := I-1", "\tJK(K)", "\tABS1", "\tZ11XK(1,1K)\t; if K = 1, K := K-1 go to (1)", "\tZ1XK(4,1K)", "\tUB8+1", "\tXK(1K)", "\t(4,1)UB8+0\t; change zeroes and ones", "\tXK(1K)", "\t(3)JGK(AJ)", "\t(3,2)N", "\tUGK(AJ)\t\t; combining variable and set accumulator", "\tUBH(AJ)-1", "\tJK(AJ)", "\tOASK(A1)\t; test for end", "\tZ9XK(END)", "\tJK0", "\tUK(XN)\t\t; I := 45", "\tABC45", "\tXK(4K)\t\t; go to (4)", "\t(5)TI(1K)+(1,1)", "\t(6)N1+1\t\t; auxiliary instructions for the program transfer", "\t(7)XAB8-32", "\t(8)K0+0", "\t(XE)IK0+(XN)\t; instructions for combinations", "\t(XV)DK0+(XN)", "\t(XA)FK0+(XN)", "\t(XEN)IKS0+(XN)", "\t(XVN)DKS0+(XN)", "\t(XAN)FKS0+(XN)", "\t(XR)JK0+(XN)", "\t(XRN)JKS0+(XN)", "", "", "", "%ST", "", "; (ST) Transfer of Set Accumulator to Set Location", ";", ";    Input parameters:  F2   ent (2^N/45)", ";                       A1   Head address of set accumulator", ";                       S1   Head address of set location", "", '(ST)\t\t\t; *** Subroutine "transfer set accumulator to set location"', "\tUB(ADR)+52)", "\t(F2)\t\t; entier (2^N/45)", "\tUB(ADR)+54)", "\t(A1)\t\t; head address of set accumulator", "\t(AJ)\t\t; current address of set accumulator", "\t(S1)\t\t; head address of set location", "\t(SJ)\t\t; current address of set location", "\tUB(ADR)+65)", "\t(H0)\t\t; begin and end of intermediate store", "\t(H1)", "\t(H2)", "\tUB(ADR)+90)", "\t(H25)", "\t(E)\t\t; end mark", "\t(L)\t\t; number of words to be transferred in one block", "\t(REST)\t\t; number of words remaining for transfer", "\tUB(ADR)+97)", "\t(END)\t\t; return jump", "\tUB(ADR)+(ST))\t; program in the drum store", "\tJK(A1)", "\tUK(AJ)\t\t; AJ := A1", "\tJK(S1)", "\tUK(SJ)\t\t; SJ := S1", "\tJK9", "\tUK(END)\t\t; preparing return jump", "\tUB(E)+0\t\t; E := 0, erase end mark", "\tUB(L)-25\t; L := -25", "\tJ(7)", "\tUK7", "\tJK(F2)", "\t(1)ABS25\t; Rest: entier (2^N/45)", "\tZ4X(1,1)\t; if Rest < 25, go to (1,1)", "\tUK(REST)", "\t(2)ABHC(AJ)+0", "\tN0", "\tA(5)", "\tUK8", "\tXU(4)\t\t; transfer 1 block (25 words) to the core store", "\tUK(H25)", "\tJBH8-1", "\tN0", "\tUK(AJ)\t\t; saving current address of set accumulator", "\tABHC(SJ)+0", "\tN0", "\tA(6)", "\tUK8\t\t; transfer from core store to set location", "\tJK(H1)", "\tXU(3)", "\tJBH8-1", "\tN0", "\tUK(SJ)\t\t; saving current address of set location", "\tJK(E)", "\tZ9XK(END)\t; test for end", "\tJK(REST)", "\tX(1)\t\t; go to (1)", "\t(1,1)AB26", "\tACSK6", "\tUBPQGK(L)+6\t; L := -(Rest)", "\tN0", "\tUK(E)\t\t; put end mark", "\tX(2)\t\t; go to (2)", "\t(3)XABGK8+(L)", "\t(4)XAB8-25\t; auxiliary instructions for transfers", "\t(5)TI(H0)+0", "\t(6)TN(H2)+0", "\t(7)N1+1", "", "", "%CSE", "", "; (CSE) Combine Set Accumulator with Set Location i", ";", ";    Input parameters:  F2   ent (2^N/45)", ";                       A1   Head address of set accumulator", ";                       S1   Head address of set location", "", '(CSE)\t\t\t; *** Subroutine "combine set accumulator with set location i"', "\tUB(ADR)+52)", "\t(F2)\t\t; entier (2^N/45)", "\tUB(ADR)+54)", "\t(A1)\t\t; head address of set accumulator", "\t(AJ)\t\t; current address of set accumulator", "\t(S1)\t\t; head address of set location", "\t(SJ)\t\t; current address of set location", "\tUB(ADR)+65)", "\t(H0)\t\t; intermediate store for set accumulator", "\t(H1)", "\t(H2)", "\tUB(ADR)+75)", "\t(H10)", "\t(H0')\t\t; intermediate store for set location", "\t(H1')", "\t(H2')", "\tUB(ADR)+86)", "\t(H10')", "\t(E)", "\t(L)", "\t(REST)", "\t(AK)", "\t(3K)\t\t; jump addresses", "\t(3,1K)", "\t(3,2K)", "\t(3,3K)", "\t(3,4K)", "\tUB(ADR)+97)", "\t(END)\t\t; return jump", "\tUB(ADR)+(CSE))\t; program in the drum store", "\tJ(SE)", "\tX(0)", "\t(CSV)J(SV)\t; read respective instructions for operation omega", "\tX(0)", "\t(CSA)J(SA)\t; store in (3,1K)", "\tX(0)", "\t(CSEN)J(SEN)", "\tX(0)", "\t(CSVN)J(SVN)", "\tX(0)", "\t(CSAN)J(SAN)", "\tX(0)", "\t(CSR)J(SR)", "\tX(0)", "\t(CSRN)J(SRN)", "\t(0)UK(3,1K)", "\tJK9", "\tUK(END)\t\t; prepare return jump", "\tUB(E)+0\t\t; reset control location E", "\tUB(L)-10\t: L := -10", "\tJ(5)", "\tUK7\t\t; MD := N1+1", "\tJK(A1)", "\tUK(AJ)\t\t; aj := a1", "\tUK(AK)\t\t; ak := a1", "\tJK(S1)", "\tUK(SJ)\t\t; sj := s1", "\tJK(F2)", "\tABS10", "\tUK(REST)\t; rest := ent(2^N/45) - 10", "\t(1)Z4X(1,1)\t; if rest < 0, go to (1,1)", "\t(2)ABHC(AK)+0\t; transfer to core store", "\tN0", "\tA(6)\t\t; <h[i]> := <a[k+i-1]>", "\tUK8", "\tXU(7)\t\t; for i = 1, 2 ... 10", "\tUK(H10)", "\tJBH8-1", "\tN0", "\tUK(AK)\t\t; a[k] := a[k+10]", "\tABHC(SJ)+0", "\tN0", "\tA(8)\t\t; transfer to core store", "\tUK8", "\tXU(7)\t\t; <h[i] := <s[j+i-1]>", "\tUK(H10')\t; for i = 1, 2 ... 10", "\tJBH8-1", "\tN0", "\tUK(SJ)", "\tJ(5)", "\tUKC7", "\tTI8+(3)\t\t; transfer subroutine to core store", "\tTI(3K)+(3,2)", "\tTI(3,2K)+(3,3)", "\tTI(3,3K)+(3,4)", "\tUK(3,4K)", "\tXUK(3K)\t\t; <h[i]> := <h[i]> omega <h[i]'>", "\tABHC(AJ)+0", "\tN0", "\tA(12)\t\t; for i = 1, 2 ... 10", "\tUK8\t\t; transfer to drum store", "\tJK(H1)", "\tXU(11)", "\tJHB8-1\t\t; for i = 1 .... l", "\tN0", "\tUK(AJ)\t\t; a[j] := a[j+l]", "\tJK(E)", "\tZ9XK(END)\t; check control location E", "\tJK(REST)", "\tABS10", "\tUK(REST)", "\tX(1)", "\t(1,1)AB11", "\tACSK6", "\tUBPQGK88+6\t; l := rest + 11", "\tN0", "\tUK(E)\t\t; set control location E", "\tX(2)", "\t(3)JHK8+(H1)\t; subroutine h[i] := h[i] omega h[i]'", "\t(3,1)N0", "\t(3,2)UHKW8+(H1)", "\t(3,3)Z1XK(3K)", "\t(3,4)XK9", "\t(5)N1+1\t\t; auxiliary instructions for transfer", "\t(6)TI(H0)+0", "\t(7)XAB8-10", "\t(8)TI(H0')+0", "\t(11)XABGK8+(L)", "\t(12)TN(H2)+0", "\t(SE)IHK8+(H1')\t; instructions for combination", "\t(SV)DHK8+(H1')", "\t(SA)FHK8+(H1')", "\t(SEN)ISHK8+(H1')", "\t(SVN)DSHK8+(H1')", "\t(SAN)FSHK8+(H1')", "\t(SR)JHK8+(H1')", "\t(SRN)JSHK8+(H1')", "", "", "", "%PRA", "", "; (PRA) Print Set Accumulator", ";", ";        (F2)   ent 2^N/45", ";        (F3)   2^N/45 - ent (2^N/45)", ";        (A1)   Head address of set accumulator", "", '(PRA)\t\t\t; *** Subroutine "print set accumulator"', "\tUB(ADR)+52)", "\t(F2)", "\tUB(ADR)+54)", "\t(A1)\t\t; head    address of set accumulator", '\t(AJ)\t\t; current            -"-', "\tUB(ADR)+59)", "\t(F3)", "\tUB(ADR)+65)", "\t(Z)", "\t(H)", "\tUB(ADR)+(PRA))\t; program in drum store", "\tJ(7)", "\tUKL10\t\t; print figures shift, carriage return, line feed", "\tUKL10", "\tUK10\t\t; erase end mark", "\tABCV45", "\tUK(Z)\t\t; Z := 45", "\tJK(A1)", "\tUK(AJ)\t\t; AJ := A1", "\tAK(F2)", "\tUK7\t\t; AE := A1 + ent (2^N/45)", "\t(1)JK(AJ)", "\tZ11X(1,1)\t; test for end", "\tJK(F3)", "\tUK(Z)\t\t; Z := 2^N/45 - ent (2^N/45)", "\tUB8+1\t\t; end mark := 1", "\tX(2)\t\t; go to (2)", "\t(1,1)ABC45", "\tUK(Z)\t\t; Z := 45", "\t(2)JGK(AJ)", "\tN0", "\tUK(H)\t\t; <H> := <AJ>", "\t(3)JK(Z)", "\tABS1", "\tUK(Z)\t\t; Z := Z-1", "\tZ4X(3,1)\t; if Z<0 go to (3,1)", "\tJK(H)", "\tZ9X(3,2)\t; if fj = 1 go to (3,2)", "\tNC", "\tUK10\t\t; print 0", "\tX(4)\t\t; go to (4)", "\t(3,2)J(5)", "\tUK10\t\t; print 1", "\t(4)JK(H)", "\tOL\t\t; shift to next fj", "\tUK(H)", "\tX(3)\t\t; go to (3)", "\t(3,1)J(6)", "\tUKL10\t\t; print carriage return, line feed", "\tUK10", "\tZ1XK9\t\t; if end mark 1, return", "\tUBH(AJ)+1", "\tN0\t\t; AJ := AJ+1", "\tX(1)\t\t; go to (1)", "\t(5)Z4N\t\t; \\", "\t(6)Z2A\t\t;  + teleprinter characters", "\t(7)Z14EX\t; /", "", "", "", "%INP", "", "; (INP) Translator for Logical Expressions", ";", ";              Input parameters:", ";        DPRO  Head address of PI", ";        DFIN  End of space", ";", ";              Subroutines:        ", ";        PR    Preparatory routine ", ";        CXE   Conjunction of set accumulator with the variable Xi", ";        CXV   Disjunction of set accumulator with the variable Xi", ";        CXA   Not equivalence of set accumulator with the variable Xi", ";        CXEN  Conjunction of set accumulator with the negated variable Xi", ";        CXVN  Disjunction of set accumulator with the negated variable Xi", ";        CXAN  Not equivalence of set accumulator with the negated variable Xi", ";        CXR   Read the variable Xi", ";        CXRN  Read the negated variable Xi", ";        CSE   Conjunction of set accumulator with set location i", ";        CSV   Disjunction of set accumulator with set location i", ";        CSA   Not equivalence of set accumulator with set location i", ";        CSR   Read set location i", ";        CSEN  Conjunction of set accumulator with negated set location i", ";        CSVN  Disjunction of set accumulator with negated set location i", ";        CSAN  Not equivalence of set accumulator with negated set location i", ";        CSR   Read negated set location i", ";        ST    Transfer set accumulator to set location i", ";        ", ";              Symbols used in the comment:", ";        s     Address counter of the symbol cellar", ";        p     Address counter of the compiled program", ';        LE    Store location, indicating the state "Figures" or "Letters"', ";        VAR   Store location, indicating that variable has been read but not yet handled", ";        PI    Compiled program", ";        'E', 'V', 'A', 'N', 'EN', 'VN', 'AN', '(,:' possible cellar", ";              symbols, represented in the computer as numbers 0 .... 7", ';        "Matrix"  Matrix of assignments for the translator.', "", "(INP)\t\t\t; Symbolic addresses for core store locations:", "\tUB(ADR)+50)", "\t(M)\t\t; maximum number of variables", "\t(S)\t\t; address counter of symbol cellar", "\t(F2)\t\t; ent 2^N/45 (fixed point)", "\t(N)\t\t; subscript of variable (fixed point)", "\t(A1)\t\t; head address of set accumulator", "\t(LONG)\t\t; number of words to be transferred", "\t(S1)\t\t; head address of set location", "\t(P)\t\t; current address of compiled program", "\t(PRO)\t\t; head address of compiled program", "\t(LOC)\t\t; head address of element to be transferred", "\t(VAR)\t\t; indicates: variable has just been read", " \t(HELP)\t\t; auxiliary location", " \t(AUX)\t\t; auxiliary location", ' \t(LE)\t\t; indicates: the character "Letters" has been read', "\t(FIN)\t\t; last address of available store", "\tUB(ADR)+70)", "\t(FF)\t\t; head address of core store locations for transfer operations", "\t(FF1)\t\t; second address of core store locations for transfer operations", "\tUB(ADR)+(INP))", "\tUB(LE)+PB0\t; LE := 0", "\tUB(S)+0\t\t;  s := 0", '\tJH12+0\t\t; adaption of subroutine "READ"', "\tZ11X(READ)", "\tU(1)", "\tUB(HELP)-5", "\tX(READ)", "\t(READ2)UBH(S)+1", "\tN\t\t; s := s + 1", "\t(READ1)UH(S)+(SYC)", "\tN\t\t; transfer symbol to symbol cellar", "\t(READ)JK11", "\tUK7\t\t; read next character", "\tOABSPB3", '\tZ9X(READ)\t; omit the characters "Space", "Line Shift", "Carriage Return"', "\tDK(LE)", "\tOABSPB10\t; add LE to the character", "\tZ9X(NUMB)\t; if the symbol is a number: jump to (NUMB)", "\tJK7", "\tDK(LE)", "\tUK(AUX)\t\t; store in auxiliary location", "\t(READ3)UK7\t; compare with stored characters", "\tJH12+0", "\tZ11JW(SYM)", "\tUK8", "\tZ11XUBGK8+(HELP)", "\tN", "\t(1)N", "\tJH(S)+(SYC)\t; read cellar symbol", "\tN", "\tXH8+12\t\t; jump to array of jump instructions", "\t(SYM)PB 2:13\t; Letters\tstored characters", "\tPB 2:14\t\t; Figures", "\tPB 13\t\t; Letters", "\tPB 14\t\t; Figures", "\tPB 1:10\t\t; :", "\tPB 3:2\t\t; X", "\tPB 2:6\t\t; E", "\tPB 3:1\t\t; V", "\tPB 3:12\t\t; A", "\tPB 3:14\t\t; N", "\tPB 1:5\t\t; (", "\tPB 1:4\t\t; )", "\tPB 1:13\t\t; .", "\tX(LET)\t\t; array of jump instructions", "\tX(FIG)", "\tX(LET)", "\tX(FIG)", "\tX(PRE)", "\tX(XX)", "\tX(EE)", "\tX(VV)", "\tX(AA)", '\tXH6+(NNN)\t; Jump to: "Matrix"', "\tXH6+(BBB)", "\tX(RB)", "\tX(..)", "\t(BEG)JH12+0\t; Stored program elements:", "\t(BEG1)N", "\tUK(M)\t\t; Comptation of parameters", "\tXU(PR)\t\t; Jump to PR\t\t", "\tJH12+0", "\t(BEG2)N", "\tUK(A1)", "\tUK(S1)", "\t(PCX)JH12+0\t; Jump to: CX", "\t(PCX1)N\t\t; subscript of variable --\x3e N", "\tUK(N)", "\t(PCX2)N", "\t(PST)JK(S1)", "\tAK(F2)", "\tJBH6+0\t\t; S1 := S1 + F2 + 1", "\tN", "\tAB1", "\tUK(S1)", "\tASK(FIN)", "\tZ3N66+.\t\t; Store overflow check", "\tXU(ST)\t\t; Jump to ST", "\t(PCS)N\t\t; Jump to: CS", "\tJK(S1)\t\t; S1 := S1 - F2 - 1", "\tASK(F2)", "\tJBH6+0", "\tN", "\tABS1", "\tUK(S1)", "\t(STO1)JH12+0\t; Subroutine: Transfer to core store", "\tN1+1", "\tUK7", "\tJH12+0", "\tTI(FF)+0", "\tABH(LOC)+1", "\tN", "\tUK8", "\tJH(LOC)+0", "\tN", "\tXABGK8+(LONG)", "\t(STO2)JH12+0\t; Subroutine: Transfer to drum store", "\tTN(FF1)+0", "\tABH(P)+0", "\tN", "\tUK8", "\tJK(FF)", "\tXABGK8+(LONG)", "\t(SCX)U(PCX2)\t; Subroutines: Adapt stored program elements, transer to PI", "\tUB(VAR)+0\t; VAR := 0", "\tUBH(S)-1\t; s := s - 1", "\tN", "\tJK(N)\t\t; Adapt parameters in PCX", "\tU(PCX1)", "\tUB(LONG)-4", "\tUB(LOC)+(PCX)", "\tXU(STO1)\t; Transfer PCX to PI", "\tXU(STO2)", "\tUBH(P)+4\t; p := p + 4", "\tN", "\tJK(P)", "\tASK(FIN)", "\tZ3N66+.\t\t; Store overflow check", "\tJK(AUX)", "\tX(READ3)", "\t(SST)UB(N)+0\t; N := 0", "\t(SST1)UB(LONG)-9", "\tUB(LOC)+(PST)\t; Transfer PST to", "\tXU(STO1)", "\tXU(STO2)", "\tUBH(P)+9\t; p := p + 9", "\tN", "\tJK(P)", "\tASK(FIN)", "\tZ3N66+.\t\t; Store overflow check", "\tJB7", "\tXH(N)+(3)\t; Read symbol '('", "\t(3)X(READ2)\t; if N=0: jump to (READ2), if N=1 jump to (SCS)", "\t(SCS)UB(LONG)-7", "\tUB(LOC)+(PCS)", "\tXU(STO1)\t; Transfer PCS --\x3e PI", "\tXU(STO2)", "\tUBH(P)+7\t; p := p + 7", "\tN", "\tJK(P)", "\tASK(FIN)", "\tZ3N66+.\t\t; Store overflow check", "\tUBH(S)-1\t", "\tN\t\t; s := s - 1", "\tJH(S)+(SYC)", "\tN\t\t; Read cellar symbol\t", "\tXH6+(RRR)", '\t(XXX)X(XE)\t; Jump to: "Matrix"', "\tX(XV)", "\tX(XA)", "\tX(XN)", "\tX(XEN)\t\t; \"Matrix\", row 'X'", "\tX(XVN)", "\tX(XAN)", "\tX(XBR)", "\t(NNN)X(NE)", "\tX(NV)", "\tX(NA)", "\tX(NN)", "\tX(NEN)\t\t; \"Matrix\", row 'N'", "\tX(NVN)", "\tX(NAN)", "\tX(NBR)", "\t(BBB)X(SST)", "\tX(SST)", "\tX(SST)", "\tX(BN)", "\tX(BEN)\t\t; \"Matrix\", row '('", "\tX(BVN)", "\tX(BAN)", "\tX(BN)", "\t(RRR)X(RE)", "\tX(RV)", "\tX(RA)", "\tX(RN)", "\tN77+.\t\t; \"Matrix\", row 'R'", "\tN77+.", "\tN77+.", "\tX(READ)", "\t(LET)UB(LE)+PB2:0\t; 6th bit --\x3e LE", "\tX(READ)\t\t; jump to: (READ)", "\t(FIG)UB(LE)+PB0\t; LE := 0", "\tX(READ)", "\t(PRE)JH12+0\t; Preparatory routine:", '\tZ11N99+.\t; Modify routine "READ"', "\tU(1)", "\tUB(HELP)-13", "\tUB(S)+0", "\tUB(VAR)+0\t; s := 0, VAR := 0", "\tJH12+0", "\t(DFIN)N", "\tUK(FIN)\t\t; Specify head address and tail address of PI", "\tJH12+0", "\t(DPRO)N", "\tUK(PRO)", "\tUCK(P)", "\tUK(M)\t\t; M := 0", "\tUBH(P)+8", "\tN\t\t; p := p + 8", "\tJB7\t\t; Read symbol ':'", "\tX(READ1)\t; Assignments according to jump array:", "\t(XX)UBC(VAR)+1\t; VAR := 1", "\tUK(N)\t\t; N := 0", "\tX(READ)", "\t(EE)ABCSH(VAR)+0", "\tN", "\tZ4X(XXXX)\t; if VAR = 1: jump to: (XXXX)", "\tJB0", "\tX(READ2)\t; if VAR = 0: read Symbol E", "\t(VV)ABCSH(VAR)+0", "\tN", "\tZ4X(XXXX)\t; if VAR = 1: jump to: (XXXX)", "\tJB1", "\tX(READ2)\t; if VAR = 0: read Symbol V", "\t(AA)ABCSH(VAR)+0", "\tN", "\tZ4X(XXXX)\t; if VAR = 1: jump to: (XXXX)", "\tJB2", "\tX(READ2)\t; if VAR = 0: read Symbol A", "\t(XXXX)JH(S)+(SYC)", "\tN\t\t; Read cellar symbol", '\tXH6+(XXX)\t; Jump to: "Matrix", row X', "\t(RB)ABCSH(VAR)+0", "\tN", "\tZ4X(XXXX)\t; if VAR = 1, jump to: (XXXX)", "\tUBH(S)-1\t; if VAR = 0:", "\tN\t\t;    s := s - 1 ", "\tJH(S)+(SYC)\t; Read cellar symbol", "\tN", '\tXH6+(RRR)\t; Jump to: "Matrix", row R', "\t(..)ABCSH(VAR)+0", "\tN", "\tZ4X(XXXX)\t; if VAR = 1, jump to: (XXXX)", '\t(SBEG)JK(M)\t; if VAR = 0, jump to: (SBEG)\tTransfer "Stop" --\x3e PI', "\tU(BEG1)", "\tJBH(P)+2", "\tN", "\tU(BEG2)", "\tUB(LONG)-8", "\tUB(LOC)+(BEG)", "\tJH12+0", "\tZ15N.", "\tUH(P)+0", "\tN", "\tJK(PRO)\t\t; Transfer BEG --\x3e PI", "\tUK(P)", "\tXU(STO1)", "\tXU(STO2)", "\tZ14N.\t\t; Stop", "\tX0", "\t(NUMB)JK7", "\tEB9", "\tUK8\t\t; Convert subscript of variable into fixed point number", "\tJK(M)", "\tUK7", "\tJK(N)", "\tALK8", "\tUK(N)\t\t; Determine maximum number of variables", "\tZ2UK(M)", "\tX(READ)\t\t; Jump to: (READ)", "\t(XE)JH12+0\t; Insert the respective instruction in program element PCX", '\tXU(CXE)\t\t; Assignments according to "Matrix"', "\tX(SCX)", "\t(XV)JH12+0", "\tXU(CXV)", "\tX(SCX)", "\t(XA)JH12+0", "\tXU(CXA)", "\tX(SCX)", "\t(XN)JH12+0", "\tXU(CXRN)", "\tX(SCX)", "\t(XEN)JH12+0", "\tXU(CXEN)", "\tX(SCX)", "\t(XVN)JH12+0", "\tXU(CXVN)", "\tX(SCX)", "\t(XAN)JH12+0", "\tXU(CXAN)", "\tX(SCX)", "\t(XBR)JH12+0", "\tXU(CXR)", "\tUBH(S)+1\t; s := s + 1", "\tN", "\tX(SCX)", "\t(NE)JB4\t\t; Read symbol 'EN'", "\tX(READ1)", "\t(NV)JB5\t\t; Read symbol 'VN'", "\tX(READ1)", "\t(NA)JB6\t\t; Read symbol 'AN'", "\tX(READ1)", "\t(NN)UBH(S)-1\t; s:= s - 1", "\tN", "\tX(READ)\t\t;\t\t\tjump to: (READ1) or (READ2) resp.", "\t(NEN)JB0\t; Read symbol 'E'", "\tX(READ1)", "\t(NVN)JB1\t; Read symbol 'V'", "\tX(READ1)", "\t(NAN)JB2\t; Read symbol 'A'", "\tX(READ1)", "\t(NBR)JB3\t; Read symbol 'N'", "\tX(READ2)", "\t(BN)JB7\t\t; Read symbol '('", "\tX(READ2)", "\t(BEN)JB0\t; Read symbol 'E'", "\t(BEN1)UH(S)+(SYC)", "\tN\t\t; Transfer to symbol cellar", "\tUBH(S)+1", "\tN\t\t; s := s + 1", "\tJB3\t\t; Read symbol 'N'", "\tUH(S)+(SYC)", "\tN\t\t; Transfer to symbol cellar", "\tX(SST)\t\t; Jump to: (SST)", "\t(BVN)JB1\t; Read symbol 'V'", "\tX(BEN1)", "\t(BAN)JB2\t; Read symbol 'A'", "\tX(BEN1)", "\t(RE)JH12+0\t; Insert respective instruction in program element PCS", "\tXU(CSE)", "\tU(PCS)", "\tX(SCS)\t\t; Jump to: (SCS)", "\t(RV)JH12+0", "\tXU(CSV)", "\tU(PCS)", "\tX(SCS)", "\t(RA)JH12+0", "\tXU(CSA)", "\tU(PCS)", "\tX(SCS)", "\t(RN)UB(N)+1", "\tJH12+0", "\tXU(CSRN)", "\tU(PCS)", "\tX(SST1)\t\t; Jump to: (SST1)", "\t(SYC)\t\t; Head address of symbol cellar\t\tProgram must end here!", "\tN.)", ""], prog_horner = [";===================================================================", "; ", "; Horner's rule for the Mailuefterl computer", ";", ";===================================================================", "; Written in the summer of 1959 by Peter Lucas as part of his", "; diploma thesis at the Technical University of Vienna.", "; Here is the exact reference:", '; Lucas P.: "Zur Programmierung elektronischer Rechenmaschinen",', "; Staatspruefungsarbeit am Institut fuer Nachrichtentechnik II der", "; Technischen Hochschule Wien, Vienna, October 1959.", '; Translation of the  title: "On the programming of electronic', '; calculating machines".', ";===================================================================", "; Typed in by Norbert Kehrer (http://members.aon.at/nkehrer)", "; in August 2017.", ";", "; Assemble and start with X0000 on the control desk", ";===================================================================", "", "", "   UB(ADR)+0000)   ; Target address = 0000 --\x3e Start with X 0000", "   (START)", "", "", "   UB(ADR)+(START))", "", "%TEST", "", "; Test with:", ";", ";    f(x) = 2 * x^3 - x^2 + 3 * x - 5", ";    at alpha = 2.0:", ";    g(z) =  2 * z^3 + 11 * z^2 + 23 * z + 13   with z = x - 2", "", "", "   ABC 4", "   UK (n)       ; n := 4", "   J (2,0)", "   UK (a)       ; alpha := 2.0", "   ABC (K1)", "   UK (a1)      ; >a1< := >K1<", "   XU (HORNER)  ; Hornerschema des Polynoms (n-1)-ten Grades mit Koeffizienten K1 bis Kn an der Stelle a", "   J (K1)", "   XU (PRINT)   ; Ergebnis ausdrucken", "   J (K2)", "   XU (PRINT)", "   J (K3)", "   XU (PRINT)", "   J (K4)", "   XU (PRINT)", "   XU (NL)", "   N.", "", "   (K1) PB6:3:5:3:3:3:3:3:3:3:8:4    ;  2", "   (K2) PB6:12:4:3:3:3:3:3:3:3:8:4   ; -1", "   (K3) PB6:3:6:3:3:3:3:3:3:3:8:4    ;  3", "   (K4) PB6:12:8:3:3:3:3:3:3:3:8:4   ; -5", "", "   (2,0) PB6:3:5:3:3:3:3:3:3:3:8:4   ; 2.0", "", "", "%HORNER", "", "; Seite 67:", ";", "; Das vollständige Hornerschema (Beispiel zu 5,51)", "; -----------------------------", ";", "; Hilfszellen: Alle Hilfszellen befinden sich im", ";              Kernspeicher.", ";", ";                 Inhalt  |  symb. Adr.", ";                 --------+------------", ";                  i      |    (i)", ";                  j      |    (j)", ";                  n      |    (n)", ";                 >ai<    |    (ai)", ";                 >a1<    |    (a1)", ";                 alpha   |    (a)", ";", "; Befehlsliste:", "", "(HORNER)", "      UB(ADR)+80)          ; Hilfszellen im Kernspeicher:", "      (i)", "      (j)", "      (n)", "      (ai)", "      (a1)", "      (a)", "", "      UB(ADR)+(HORNER))    ; Programm im Trommelspeicher:", "", "      JK 9", "      U (r)                ; Rückkehradresse nach (r)", "      JK (n)", "      UK (j)               ; j := n", "(1)   UB (i) + 1           ; i := 1", "      JK (a1)", "      UK (ai)", "(2)   JK (a)", "      UK 7", "      JH (ai) - 1          ; alpha(ai-1)", "      N", "      XU (.)", "      UK 7", "      JH (ai) + 0", "      N                    ; ai := ai + ai-1", "      XU (+)", "      UH (ai) + 0", "      N", "      UBH (i) + 1", "      N                    ; i := i + 1", "      UBH (ai) + 1", "      N", "      ABHC (j) + 0", "      N", "      ABHS (i) + 0         ; i <= j ?", "      N", "      Z3X (2)", "      UBH (j) - 1", "      N                    ; j := j - 1", "      ABHC (j) + 0", "      N", "      ABS 2                ; j >= 2 ?", "      Z3X (1)", "(r)   N", "", "", ";===================================================================", "; ", "; Floating point operations for the Mailuefterl computer", ";", ";===================================================================", "; Written in 2008 and 2017 by Norbert Kehrer (http://members.aon.at/nkehrer)", "; as a replacement for Peter Lucas' package \"Unterprogramm für die ", '; arithmetischen Gleitkommaoperationen" from 1959, for which I could', "; nor locate the source code nor a binary version. But it did exist,", "; as Peter Lucas mentioned it in his diploma thesis, and he also", "; described his implementation in the form of a flow chart on page 36.", "; It is really a pity, he did not add the program listing. But I tried", "; to code as close as possible to his algorithms documented in the flow", "; chart. Peter managed to implement the routines in only 152 instructions.", "; I needed more. ", ";===================================================================", "; ", "; Floating point numbers are represented as follows:", "; Tab    T11    T10 ... T3   T2 T1", "; 0110   Sign    Mantissa    Exponent (bias=50)", ";===================================================================", ";", "; The number zero is represented as zero mantissa with a zero in the", "; exponent also (0 x 10^-50, i.e., Mant=000000000 Exp=00).", ";===================================================================", ";", "; The subroutines for the arithemtic operations in this package always", "; expect the first operand in AC and the second operand in MD.", "; ", "; Subroutine calls:", ";", ";    Addition:        XU(+)", ";    Subtraction:     XU(-)", ";    Multiplication:  XU(X) or XU(.)", ";    Division:        XU(/) or XU(:)", ";", ";===================================================================", "", "", "%FLOAT", "", "", "; Gleitkommaaddition:", "", "(+)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X2)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x2", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommasubtraktion:", "", "(-)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X1)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x1", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommamultiplikation:", "", "(X)N", "(.)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X3)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x3", "   JB(1.Y1)", "   U(0.Y)        ; Sprungziel y = y1", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommadivision:", "", "(/)N", "(:)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X3)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x3", "   JB(1.Y2)", "   U(0.Y)        ; Sprungziel y = y2", "   X(1.TR)       ; go to TRENNEN", "", "   (1.TR)JK9     ; TR) Trennen von Mantisse und Exponent", "   U(1.RET)      ;    Rücksprungadresse sichern", "   J(0.AVZ)      ;    Trennen 1. Operand:", "   EB99", "   U(0.AEXP)     ;    a_exp := AC & 99", "   J(0.AVZ)", "   E(0.MMA0)   ", "   U(0.AMAN)     ;    a_man := AC & 9999999900 ... Vorzeichen wird auch positiv gemacht", "   JK7           ;    AC := MD", "   U(0.BVZ)      ;    Trennen 2. Operand:", "   EB99", "   U(0.BEXP)     ;    b_exp := AC & 99", "   J(0.BVZ)", "   E(0.MMA0)   ", "   U(0.BMAN)   ;    b_man := AC & 9999999900 ... Vorzeichen wird auch positiv gemacht", "", "   XG(0.X)      ; x) Sprung zu x", "   N", "", "   (1.X1)J(0.MVZ0)   ; x1) b := -b, für Subtraktion", '   UK8               ;    MR := "-"', "   J(0.BVZ)   ", "   Z3X(1.X1.1)       ;    wenn b_vz positiv, tue nichts", "   ABC 0", '   UK8               ;    sonst MR := "+"   ', "   (1.X1.1)JK8", "   U(0.BVZ)          ;    b_vz := MR", "", "   (1.X2)J(0.AEXP)   ; x2) Addition:", "   AS(0.BEXP)", "   Z3X(1.1)          ;    wenn (a_exp >= b_exp), Reihenfolge OK (gehe zu 1.1)", "   J(0.AEXP)         ;    sonst: Tauschen von a und b - Exponent", "   TI8+(0.BEXP)", "   TN8+(0.AEXP)", "   U(0.BEXP)", "   J(0.AMAN)         ;   Tauschen von a und b - Mantisse", "   TI8+(0.BMAN)", "   TN8+(0.AMAN)", "   U(0.BMAN)", "   J(0.AVZ)          ;   Tauschen von a und b - Vorzeichen", "   TI8+(0.BVZ)", "   TN8+(0.AVZ)", "   U(0.BVZ)", "   (1.1)J(0.AEXP)    ;    weiter:", "   AS(0.BEXP)", "   UK8               ;    MR := a_exp - b_exp   (Exponentendifferenz)", "   JM(0.BMAN)        ;    AC := b_man,  MR := MR - 1", "   (1)Z7X(2)         ;    Loop: if MR < 0, leave loop", "   NMR               ;          MR := MR - 1, AC := AC >> 1", "   X(1)              ;    End Loop", "   (2)U(0.OPB)       ;    verschobene b_man in op_b speichern", "   J(0.AMAN)", "   U(0.OPA)          ;    a_man in op_a speichern", "   ABC2", "   UK8               ;    MR := 2 ... MR dient als Kennzeichen für 2 negative Operanden. Dann addieren wir einfach die Mantissen und machen das Ergebnis negativ", "   J(0.AVZ)          ;    Vorzeichenbehaftete Operanden bilden:", "   Z3X(3)            ;    wenn a positiv, weiter", "   ACSM(0.OPA)", "   U(0.OPA)          ;    sonst op_a := -op_a und MR--", "   (3)J(0.BVZ)", "   Z3X(4)            ;    wenn b positiv, weiter", "   ACSM(0.OPB)", "   U(0.OPB)          ;    sonst op_b := -op_b und MR--", "   (4)NC", "   U(0.CVZ)          ;    c_vz auf + (Default-Annahme)", "   Z1X(4.1)          ;    wenn MR > 0, d.h. mind. 1 Operand positiv, dann OK", "   ACS(0.OPA)        ;    sonst mache beide Operanden wieder positiv (und setze dann am Ende das Ergebnis auf negativ)", "   U(0.OPA)", "   ACS(0.OPB)", "   U(0.OPB)", "   (4.1)J(0.OPA)", "   A(0.OPB)          ;    AC := op_a + op_b", "", "   Z4X(5)            ;    wenn negativ, gehe zu 5", "   Z3X(6)            ;    wenn positiv und zwar ohne Überlauf, gehe zu 6 (nichts zu tun)", "", "   NR                ;    sonst (positiv aber mit Überlauf T11 >0 und <9) korrigiere Überlauf:", "   U(0.CMAN)         ;    c_man := AC >> 1", "   J(0.AEXP)", "   AB1", "   U(0.CEXP)         ;    c_exp := a_exp + 1", "   X(7)              ;    und weiter bei 7", "", '   (5)U(0.CVZ)       ;    negatives Ergebnis: c_vz auf "-" setzen', "   U(0.OPA)", "   ACS(0.OPA)        ;    AC := -AC", "   U(0.CMAN)         ;    c_man := AC", "   J(0.AEXP)", "   U(0.CEXP)         ;    c_exp := a_exp", "   X(7)              ;    weiter bei 7", "", "   (6)U(0.CMAN)      ;    positives Ergebnis ohne Überlauf: c_man := AC", "   J(0.AEXP)", "   U(0.CEXP)         ;    c_exp := a_exp", "", "   (7)Z1X(7.1)       ;    wenn MR > 0, d.h. mind. 1 Operand positiv, dann alles OK", "   J(0.MVZ0)         ;    sonst waren beide Operanden negativ, also setze das Ergebnis auf negativ", '   U(0.CVZ)          ;    c_vz := "-"', "   (7.1)N", "", "   (1.NRM)J(0.CEXP)  ; NRM) Normalisierung Ergebnis", "   UK8               ;    MR := c_exp", "   ABC8", "   UK7               ;    MD := 8 (maximum number of shifts to normalize)", "   J(0.CMAN)         ;    AC := c_man", "   (8)NML            ;    AC := AC << 1, MR := MR - 1", "   U(0.TEMP)         ;    save AC in temp", "   JK7               ;   ", "   ABS1", "   UK7               ;    MD := MD - 1", "   J(0.TEMP)         ;    restore AC from temp", "   Z8X(9)            ;    if MD < 0, result is zero (8 shifts have been done, all digits were zero, so stop now) ", "   Z3X(8)            ;    if sign of AC == 0, goto shift loop", "   NWR               ;    AC := AC >> 1, MR := MR + 1", "   U(0.CMAN)         ;    c_man := AC", "   JK8", "   U(0.CEXP)         ;    c_exp := MR", "   X(10)", "", "   (9)NC             ;    result is zero", "   U(0.CMAN)         ;    c_man := 0", "   U(0.CEXP)         ;    c_exp := 0", "   ", "   (10)J(0.CMAN)     ; VZ) Vorzeichen, Mantisse und Exponent zu einer Ergebniszahl zusammenbauen", "   E(0.MMA0)", "   U(0.CMAN)         ;    c_man := c_man & 9999999900 ... Mantisse isolieren Vorzeichen wird auch positiv gemacht", "   ABS1", "   Z3X(1.NONZERO)    ;    Wenn c_man !== 0, dann weiter", "   ABC0              ;    sonst Ergebnis ist 0, ", "   X(1.RET)          ;    und zurückspringen", "   (1.NONZERO)J(0.CVZ)", "   E(0.MVZ0)", "   U(0.CVZ)          ;    c_vz := c_vz & 90000000000 ... Vorzeichen isolieren", "   J(0.CEXP)", "   EB99              ;    AC := c_exp & 99 ... Exponenten isolieren und in den AC", "   A(0.CMAN)         ;    AC := AC + c_man ... Mantisse dazu", "   A(0.CVZ)          ;    AC := AC + c_vz  ... Vorzeichen dazu", "", "   (1.RET)N          ; Return", "", "", "   (1.X3)J(0.BVZ)   ; x3) Vorzeichenbestimmung:", "   E(0.MVZ0)", "   U(0.BVZ)         ;    b_vz := b_vz & 90000000000 ... Vorzeichen isolieren", "   J(0.AVZ)   ", "   E(0.MVZ0)", "   U(0.AVZ)         ;    a_vz := a_vz & 90000000000 ... Vorzeichen isolieren", "   AS(0.BVZ)", "   U(0.CVZ)         ;    c_vz := a_vz - b_vz", "   XG(0.Y)", "", "   (1.Y1)J(0.BMAN)  ; y1) Multiplikation:", "   TI7+(0.AMAN)", "   XU(0.MULTF)", "   U(0.CMAN)        ;    c_man := a_man * b_man", "   J(0.AEXP)", "   A(0.BEXP)", "   ABS50            ;    c_exp := a_exp + b_exp - 50", "   U(0.CEXP)", "", "   X(1.NRM)   ", "", "", "   ", "   (1.Y2)J(0.BMAN)  ; y2) Division:", "   TI7+(0.AMAN)", "   XU(0.DIVF)", "   JK8", "   U(0.CMAN)        ;    c_man := a_man / b_man", "   J(0.AEXP)", "   AS(0.BEXP)", "   AB51             ;    c_exp := a_exp - b_exp + 51", "   U(0.CEXP)", "", "   X(1.NRM)   ", "", "", "", "", "; Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(0.MULTF)", "   UB(ADR)+65)", "   (0.M.1K)             ; jump addresses", "   (0.M.2K)", "   (0.M.3K)", "   (0.M.4K)", "   (0.M.5K)", "   (0.M.6K)", "   (0.M.7K)", "   (0.M.8K)", "   UB(ADR)+(0.MULTF))   ; program in the drum store:", "   TI8+(0.M.1)          ;    program transfer      MR = AC (b)", "   TI(0.M.1K)+(0.M.2)   ;    to the core store", "   TI(0.M.2K)+(0.M.3)", "   TI(0.M.3K)+(0.M.4)", "   TI(0.M.4K)+(0.M.5)", "   UKC(0.M.5K)          ;            AC = 0;", "   XK(0.M.1K)           ;            goto prog in core store", "   (0.M.1)Z1YAMK7       ; program in the core store:   while (MR[T1] != 0) {AC += MD; MR--;};", "   (0.M.2)XBRV(0.M.3K)-9 ;           multiplication: do 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", "   (0.M.3)Z1YAMK7       ;            while (MR[T1] != 0) {AC += MD; MR--;};", "   (0.M.4)XK(0.M.5K)    ;            goto (5)  // needed to stop XB instruction!!!", "   (0.M.5)XK9           ;            return;", "", "", "", "", "; Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(0.DIVF)", "   UB(ADR)+65)", "   (0.D.1K)             ; jump addresses", "   (0.D.2K)", "   (0.D.3K)", "   (0.D.4K)", "   (0.D.5K)", "   (0.D.6K)", "   (0.D.7K)", "   UB(ADR)+(0.DIVF))   ; program in the drum store:", "   TI8+(0.D.1)         ; program transfer      MR = AC (b)", "   TI(0.D.1K)+(0.D.2)  ; to the core store", "   TI(0.D.2K)+(0.D.3)", "   TI(0.D.3K)+(0.D.4)", "   TI(0.D.4K)+(0.D.5)", "   TI(0.D.5K)+(0.D.6)", "   UK(0.D.6K)", "   JK9                 ;            put return jump (RS) in (7)", "   UKC(0.D.7K)", "   JK8                 ;             AC := MR", "   NRV", "   NRV                 ;            ignore the exponent digits", "   XK(0.D.1K)          ;            goto prog in core store", "   (0.D.1)XBLV(0.D.2K)-10   ; program in the core store:   do 10 times {exec(4); AC/MR <<= 4;}", "   (0.D.2)XUK(0.D.4K)       ;            division          ", "   (0.D.3)XK(0.D.7K)        ;            goto (7) // needed to stop XB instruction!!!", "   (0.D.4)Z2XB(0.D.6K)+0    ;            while (AC >= MD) exec(6)", "   (0.D.5)XK9               ;            return", "   (0.D.6)Z2ASWK7           ;            if (AC >= MD) {AC -= MD; MR++;}", "   (0.D.7)N0                ;            return jump is stored here                  ", "", "", "", "", "", "", "", ";===================================================================", "; ", "; Print program for floating point numbers for the Mailuefterl computer", ";", ";===================================================================", "; Written in 2008 and 2017 by Norbert Kehrer (http://members.aon.at/nkehrer)", "; as a replacement for Peter Lucas' package \"Druckprogramm für ", '; Gleitkommazahlen" from 1959, for which I could', "; nor locate the source code nor a binary version. But it did exist,", "; as Peter Lucas mentioned it in his diploma thesis.", "; Peter managed to implement the routines in only 76 instructions.", "; I needed much more.", ";===================================================================", ";", "; The number to be printed is expected in AC.", ";", "; Subroutine calls:", ";", ";    Print number:  XU(PRINT) or XU(D)", ";    New Line:      XU(NL) or XU(WR)", ";", ";===================================================================", "", "", "; Ausdrucken einer Gleitkommazahl", ";", ";    Eingabeparameter:   AC   Zahl", "", "(D)N", "(PRINT)U(0.SAVEAC)   ; Zahl sichern", "   JK9", "   U(0.P.RET)        ; Rücksprungadresse sichern", "   J(0.SAVEAC)", "   U(0.AVZ)          ; Trennen von Mantisse und Exponent: a_vz setzen", "   EB99", "   U(0.AEXP)         ;    a_exp := AC & 99", "   J(0.AVZ)", "   E(0.MMA0)   ", "   U(0.AMAN)         ;    a_man := AC & 9999999900", "   JK0", "   UK10              ; Leerzeichen ausgeben", "   J(0.FIGRS)", '   UK10              ; "Figures shift" ausgeben', "   J(0.SAVEAC)", "   Z3X(0.P.1)        ; Wenn Zahl positiv, weiter zur Ausgabe eines Leerzeichens", "   J(0.MINUS)", '   UK10              ; sonst "-" ausgeben', "   X(0.P.2)          ; und weiter", "   (0.P.1)JK0", "   UK10              ; Leerzeichen ausgeben", "   (0.P.2)J(0.AMAN)", "   ABS1", "   Z3X(0.P.21)       ; Wenn Zahl == 0,", "   J(0.ZERO)", '   UK10              ; dann "0" ausgeben', "   JK0", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "", "   X(0.P.DONE)       ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre, und return", "", "   (0.P.21)J(0.AEXP) ; Zahl nicht 0, also weiter", "   ABS59", "   Z3X(0.P.WISS)     ; Wenn Exponent > 8, gehe zu wiss.Format", "   J(0.AEXP)", "   ABS42", "   Z4X(0.P.WISS)     ; Wenn Exponent < -8, gehe zu wiss.Format", "   J(0.AEXP)", "   ABS51", "   Z4X(0.P.NEGEXP)   ; Wenn Exponent < 0, gehe zu neg. Exponten ohne Exponentenausgabe", "", "   ; sonst:", "", "   ; ****** Zahl mit positivem Exponenten ohne Exponentenausgabe:", "", "   J(0.AMAN)", "   NL                   ; AC einmal nach links shiften, um Vorzeichenstelle zu übergehen", "   UK8                  ; MR := AC", "", "   J(0.AEXP)", "   ABS51", "   U(0.TEMP1)           ; temp1 := a_exp - 51", "", "   ABC8", "   U(0.TEMP)            ; temp := 8", "", "   ABC0", "   U(0.AUSG)            ; ausg := 0000...", "", "   (0.P.L1)J(0.TEMP1)   ; loop:", "   Z3X(0.P.L11)         ;    if temp1 < 0, Komma setzen:", "   J(0.AUSG)", "   NL                   ;       AC = ausg << 4", "   I (0.MBIN0)", "   D (0.MBIN2)", "   U (0.AUSG)           ;       ausg := (AC & 0xfffffffffff0) | 2", "   ABC 99", "   U(0.TEMP1)           ;       temp1 := 99, d.h. Komma ist gesetzt worden. Jetzt nicht mehr setzen.", "   (0.P.L11)J(0.AUSG)   ;    endif", "   NLV                  ;    AC/MR <<= 4", "   U(0.AUSG)", "   J(0.TEMP1)", "   ABS1", "   U(0.TEMP1)           ;    temp1--", "   J(0.TEMP)", "   ABS1", "   U(0.TEMP)            ;    temp--", "   Z3X(0.P.L1)          ; end loop, when temp < 0", "", "", "                        ; nach rechts schieben, sodass die hintenstehenden Nuller weg sind, aber höchstens so weit, dass alle stellen lt. Exponent drinnen sind (Nuller bei 10, 20 etc. sollen bleiben)", "   J(0.AUSG)", "   D(0.MBINTOP9)        ; Vorzeichenstelle auf 9 setzen, damit die Schleife sicher stoppt", "   UK8                  ; MR := ausg mit oberster Tetrade auf 9 gesetzt", "   ABC59", "   AS(0.AEXP)", "   UK7                  ; MD := 59 - exp ... maximale Rechtsshifts (Trailing zeroes bei 10, 100, ...)", "   JK8                  ; AC wieder herstellen", "   (0.P.L2)Z1X(0.P.L2E) ; loop, while lowest digit of AC == 0", "   NR                   ;       AC >>= 4", "   UK8                  ;       MR := AC", "   JK7", "   ABS1", "   UK7                  ;       MD--", "   JK8                  ;       AC wieder herstellen", "   Z8X(0.P.L2E)         ;       Schleife vorzeitig beenden, wenn maximale Shift-Zahl überschritten", "   X(0.P.L2)            ; end loop", "   (0.P.L2E)U(0.AUSG)", "", "                        ; wieder nach links schieben, und rechts mit Blanks auffüllen", "   OASK6", "   UK8                  ; MR := binär 0", "   J(0.AUSG)", "   (0.P.L3)NLV          ; loop: AC/MR <<= 4", "   Z4X(0.P.L3E)", "   X(0.P.L3)            ; end loop, until T11 of AC >=9", "   (0.P.L3E)NLV         ; AC/MR <<= 4", "   U(0.AUSG)", "", "   J(0.AUSG)", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   X(0.P.DONE)          ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre, und return", "   ", "", "   ; ****** Zahl mit negativem Exponenten ohne Exponentenausgabe:", "", "   (0.P.NEGEXP)J(0.AMAN) ; nach rechts schieben, sodass die hintenstehenden Nuller weg sind", "   D(0.MBINTOP9)         ; Vorzeichenstelle auf 9 setzen, damit die Schleife sicher stoppt", "   NR", "   NR                    ; 2 Mal nach rechts, damit der Exponent weg ist", "   UK7                   ; MD := AC, AC in MD sichern", "   ABC0", '   U(0.TEMP)             ; temp := 0 (counter für Anzahl von "trailing zeroes")', "   JK7                   ; AC zurückholen", "   UK8                   ; MR := AC", "   (0.P.NEL1)Z1X(0.P.NEL1E)   ; loop, while lowest digit of AC == 0 (AC is held in MR, and check is for T1 of MR)", "   NR                    ;    AC >>= 4", "   UK7                   ;    MD := AC", "   J(0.TEMP)", "   AB1", '   U(0.TEMP)             ;    temp++ (counter für Anzahl von "trailing zeroes")', "   JK7                   ;    AC := MD", "   UK8                   ;    MR := AC", "   X(0.P.NEL1)           ; end loop", "   (0.P.NEL1E)U(0.AUSG)", "   J(0.AEXP)", "   A(0.TEMP)", "   ABS50                 ; AC := a_exp + temp - 50", "   Z4X(0.P.WISS)         ; wenn trailing_zeroes > -a_exp, wiss. Format nehmen (sonst Verlust Genauigkeit im Ausdruck)", "   J(0.DOT)              ; sonst:", "   UKPP10                ; Dezimalpunkt ausgeben, Q im AC löschen, dann temp Nuller und den Rest aus der Mantisse", "   J(0.AMAN)", "   NL", "   UK8                   ; MR := a_man << 4 (Vorzeichenstelle wegschieben)", "   ABC0", "   U(0.AUSG)             ; ausg := 00000000000", "   J(0.TEMP)", "   U(0.TEMP1)            ; temp1 := trailing_zeroes", "   ABC58", "   A(0.AEXP)", "   ABS100", "   U(0.TEMP)             ; temp := 58 + a_exp - 100 (Anzahl nötiger Shifts)", "   ABC58", "   AS(0.AEXP)", "   AS(0.TEMP1)", "   U(0.TEMP1)            ; temp1 := 58 - a_exp - trailing_zeroes ... Anzahl zu druckender Stellen merken", "   (0.P.NEL2)J(0.AUSG)   ; loop", "   NLV", "   U(0.AUSG)             ;    ausg := ausg/MR << 4", "   J(0.TEMP)", "   ABS1", "   U(0.TEMP)             ;    temp--", "   Z3X(0.P.NEL2)         ; endloop while temp >= 0", "   J(0.TEMP1)", "   UK8                   ; MR := temp1 (Anzahl zu druckender Stellen)", "   J(0.AUSG)             ; AC := ausg", "   NL", "   NL                    ; noch 2 Shifts um den Exponenten zu übergehen, sodass Zahl ganz links im AC steht", "   (0.P.NEL3)ULMK10      ; loop: Ausgeben einer Ziffer, AC <<= 4, MR--", "   Z1X(0.P.NEL3)         ; end loop, until MR >= 0", "   ABC8", "   AS(0.TEMP1)", "   UK8                   ; MR := 8 - temp1 (Anz. gedruckter Stellen) ... trailing blanks zum Auffüllen hinten", "   ABS1", "   Z4X(0.P.DONE)         ; fertig, wenn MR < 1", "   JK0                   ; Sonst AC = binär 0 (Blank)", "   (0.P.NEL4)UMK10       ; loop: Ausgeben eines Blanks, MR--", "   Z1X(0.P.NEL4)         ; end loop, until MR >= 0", "", "   (0.P.DONE)JK0", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   X (0.P.RET)           ; Return", "", "", "   ; ****** Ausgabe im wissenschaftlichen Format:", "", "   (0.P.WISS)J(0.DOT)", "   UKPP10                ; Dezimalpunkt ausgeben, Q im AC löschen", "   J(0.SAVEAC)           ; Zahl in AC laden", "   NL                    ; AC um 1 Stelle shiften, um Vorzeichen zu überspringen", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   J(0.LETRS)", '   UK10                  ; "Letters shift" ausgeben', "   J(0.LETTE)", '   UK10                  ; "E" ausgeben', "   J(0.FIGRS)", '   UK10                  ; "Figures shift" ausgeben', "", "   J(0.AEXP)", "   ABS50", "   Z3X(0.P.4)            ; Wenn Exponent >= 0, gehe zu (4)", "   U(0.TEMP)             ; sonst Betrag des (negativen) Exponenten ermitteln", "   ACS(0.TEMP)", "   U(0.TEMP)             ; und merken in temp", "   J(0.MINUS)", '   UK10                  ; "-" ausgeben', "   J(0.TEMP)             ; Exponenten (Betrag) wieder holen", "   X(0.P.5)", "   (0.P.4)U(0.TEMP)      ; Exponenten merken in temp", "   J(0.PLUS)", '   UK10                  ; "+" ausgeben', "   J(0.TEMP)             ; Exponenten wieder holen", "   (0.P.5)NL             ; 9 Mal shiften, sodass 1. Ziffer d. Exp. in Ausgabeposition", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   (0.P.RET)N            ; Return", "", "", "   ; ****** Unterprogramm zur Ausgabe einer einzelnen Ziffer, die in der obersten Tetrade von AC steht", "", "   (0.EMITDIGIT)Z3X(0.ED.DOT)   ; AC <= dez 0 (bin 3)", "   (0.ED.NORM)NPP               ; Q im AC löschen", "   ULK10                        ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XK9", "", "   (0.ED.DOT)U(0.AUSG)", "   OA(0.BIN900)                 ; AC := AC + 0x900... binär  (Oberste Stelle ist dann dez. 9 bei Komma)", "   Z4X(0.ED.NODOT)              ; wenn T11 des AC >= dez 9, ist es normal (Nuller)", "   OAS(0.BIN600)                ; AC := AC - 0x600... binär  (Oberste Stelle ist dann dez. 0 bei Blank)", "   Z3X(0.ED.NODOT)              ; wenn T11 des AC <= dez 0, ist es normal (Blank)", "   J(0.DOT)                     ; sonst Komma", "   UKPP10                       ; Dezimalpunkt ausgeben, Q im AC löschen", "   J(0.AUSG)", "   NL                           ; AC links shiften für nächste Ziffer", "   XK9                          ; Return", "", "   (0.ED.NODOT)J(0.AUSG)   ", "   X(0.ED.NORM)", "", "", "", "; Zeilenumbruch", ";", ";    Eingabeparameter:   keine", "", "(WR)N", "(NL)J(0.CR)", "   UK10", "   J(0.LF)", "   UK10      ; print CR/LF", "   XK9       ; return", "", "", "", "", ";===================================================================", "; Variablen und Konstanten für Arithmetik und Druckprogramm:", ";===================================================================", "", "   (0.AVZ)N     ; a Vorzeichen", "   (0.AMAN)N    ; a Mantisse", "   (0.AEXP)N    ; a Exponent", "   (0.BVZ)N     ; b Vorzeichen", "   (0.BMAN)N    ; b Mantisse", "   (0.BEXP)N    ; b Exponent", "   (0.CVZ)N     ; c Vorzeichen", "   (0.CMAN)N    ; c Mantisse", "   (0.CEXP)N    ; c Exponent", "", "   (0.OPA)N     ; Operand A", "   (0.OPB)N     ; Operand B", "", "   (0.TEMP)N    ; Hilfsvariable, temporärer Zwischenspeicher", "   (0.TEMP1)N   ; Hilfsvariable, temporärer Zwischenspeicher", "   (0.AUSG)N    ; Hilfsvariable für Ausgabezwischenspeicherung", "   (0.SAVEAC)   ; Hilfsvariable für Akkuzwischenspeicherung", "", "   (0.X)N       ; Sprungziel x", "   (0.Y)N       ; Sprungziel y", "", "", "; Konstanten", "", "   (0.MVZ0)PB12:3:3:3:3:3:3:3:3:3:3              ; Maske zum Löschen von allem außer Vorzeichen", "   (0.MMA0)PB12:3:12:12:12:12:12:12:12:12:3:3    ; Maske zum Nullsetzen von allem außer Mantisse und Vorzeichen + machen", "", "   (0.MBIN0)PB15:15:15:15:15:15:15:15:15:15:15:0 ; Maske zum binären Nullsetzen der niedrigstwertigen Tetrade", "   (0.MBIN1)PB0:0:0:0:0:0:0:0:0:0:0:1            ; Maske zum binären erzeugen von 1 in der niedrigstwertigen Tetrade", "   (0.MBIN2)PB0:0:0:0:0:0:0:0:0:0:0:2            ; Maske zum binären erzeugen von 2 in der niedrigstwertigen Tetrade", "   (0.MBINTOP9)PB0:15:0:0:0:0:0:0:0:0:0:0        ; Maske zum binären erzeugen von 9 in der obersten Tetrade", "", "   (0.BIN900)PB0:9:0:0:0:0:0:0:0:0:0:0           ; Binär 9000...", "   (0.BIN600)PB0:6:0:0:0:0:0:0:0:0:0:0           ; Binär 6000...", "", "   (0.LETRS)   PB 0:13:0:0:0:0:0:0:0:0:0:0       ; letters shift (13 = 01101)", "   (0.FIGRS)   PB 0:14:0:0:0:0:0:0:0:0:0:0       ; figures shift (14 = 01110)", '   (0.MINUS)   PB 1:12:0:0:0:0:0:0:0:0:0:0       ; "-" (28 = 11100)', '   (0.PLUS)    PB 1:3:0:0:0:0:0:0:0:0:0:0        ; "+" (19 = 10110)', '   (0.DOT)     PB 1:13:0:0:0:0:0:0:0:0:0:0       ; "." (29 = 11101)', '   (0.LETTE)   PB 0:6:0:0:0:0:0:0:0:0:0:0        ; "E" (6 = 00110)', '   (0.ZERO)    PB 0:3:0:0:0:0:0:0:0:0:0:0        ; "0" (3 = 00011)', "   (0.CR)      PB 6:2:0:0:0:0:0:0:0:0:0:0        ; Carriage return", "   (0.LF)      PB 6:1:0:0:0:0:0:0:0:0:0:0        ; Line feed", ""], prog_mmult = [";===================================================================", "; ", "; Matrix multiplication for the Mailuefterl computer", ";", ";===================================================================", "; Written in the summer of 1959 by Peter Lucas as part of his", "; diploma thesis at the Technical University of Vienna.", "; Here is the exact reference:", '; Lucas P.: "Zur Programmierung elektronischer Rechenmaschinen",', "; Staatspruefungsarbeit am Institut fuer Nachrichtentechnik II der", "; Technischen Hochschule Wien, Vienna, October 1959.", '; Translation of the  title: "On the programming of electronic', '; calculating machines".', ";===================================================================", "; Typed in by Norbert Kehrer (http://members.aon.at/nkehrer)", "; in August 2017.", ";", "; Assemble and start with X0000 on the control desk", ";===================================================================", "", "", "   UB(ADR)+0000)   ; Target address = 0000 --\x3e Start with X 0000", "   (START)", "", "", "   UB(ADR)+(START))", "", "%TEST", "", "; Test with:", ";", ";    (1 2 3)     (7 8 9)      (18  24  30)", ";    (4 5 6)  x  (4 5 6)  =   (54  69  84)", ";    (7 8 9)     (1 2 3)      (90 114 138)", ";", "", "", "   ABC3", "   UK (n)       ; n := 3", "   ABC(M1)", "   UK (a11)     ; >a11< := >M1<", "   ABC(M2)", "   UK (b11)     ; >b11< := >M2<", "   ABC(E11)", "   UK (c11)     ; >c11< := >E11<", "   XU (MMULT)   ; Matrixmultiplikation M1 x M2", "   J(E11)", "   XU (PRINT)   ; Ergebnis ausdrucken", "   J(E12)", "   XU (PRINT)", "   J(E13)", "   XU (PRINT)", "   XU (NL)", "   J(E21)", "   XU (PRINT)", "   J(E22)", "   XU (PRINT)", "   J(E23)", "   XU (PRINT)", "   XU (NL)", "   J(E31)", "   XU (PRINT)", "   J(E32)", "   XU (PRINT)", "   J(E33)", "   XU (PRINT)", "   XU (NL)", "   N.", "", "   (M1) PB6:3:4:3:3:3:3:3:3:3:8:4    ; 1", "        PB6:3:7:3:3:3:3:3:3:3:8:4    ; 4", "        PB6:3:10:3:3:3:3:3:3:3:8:4   ; 7", "        PB6:3:5:3:3:3:3:3:3:3:8:4    ;   2", "        PB6:3:8:3:3:3:3:3:3:3:8:4    ;   5", "        PB6:3:11:3:3:3:3:3:3:3:8:4   ;   8", "        PB6:3:6:3:3:3:3:3:3:3:8:4    ;     3", "        PB6:3:9:3:3:3:3:3:3:3:8:4    ;     6", "        PB6:3:12:3:3:3:3:3:3:3:8:4   ;     9", "", "   (M2) PB6:3:10:3:3:3:3:3:3:3:8:4   ; 7", "        PB6:3:7:3:3:3:3:3:3:3:8:4    ; 4", "        PB6:3:4:3:3:3:3:3:3:3:8:4    ; 1", "        PB6:3:11:3:3:3:3:3:3:3:8:4   ;   8", "        PB6:3:8:3:3:3:3:3:3:3:8:4    ;   5", "        PB6:3:5:3:3:3:3:3:3:3:8:4    ;   2", "        PB6:3:12:3:3:3:3:3:3:3:8:4   ;     9", "        PB6:3:9:3:3:3:3:3:3:3:8:4    ;     6", "        PB6:3:6:3:3:3:3:3:3:3:8:4    ;     3", "", "   (E11)PB6:3:3:3:3:3:3:3:3:3:3:3    ; 0 ... Ergebnismatrix", "   (E21)PB6:3:3:3:3:3:3:3:3:3:3:3    ; 0", "   (E31)PB6:3:3:3:3:3:3:3:3:3:3:3    ; 0", "   (E12)PB6:3:3:3:3:3:3:3:3:3:3:3    ;   0", "   (E22)PB6:3:3:3:3:3:3:3:3:3:3:3    ;   0", "   (E32)PB6:3:3:3:3:3:3:3:3:3:3:3    ;   0", "   (E13)PB6:3:3:3:3:3:3:3:3:3:3:3    ;     0", "   (E23)PB6:3:3:3:3:3:3:3:3:3:3:3    ;     0", "   (E33)PB6:3:3:3:3:3:3:3:3:3:3:3    ;     0", "", "", "", "", "", "%MMULT", "", "; Seiten 70 und 71:", ";", "; Multiplikation zweier Matrizen (Beispiel zu 5,52)", "; ------------------------------", ";", "; Hilfszellen: Alle Hilfszellen befinden sich im", ";              Kernspeicher.", ";", ";                 Inhalt  |  symb. Adr.", ";                 --------+------------", ";                 >a11<   |    (a11)", ";                 >b11<   |    (b11)", ";                 >c11<   |    (c11)", ";                  n      |    (n)", ";                  i      |    (i)", ";                  j      |    (j)", ";                  k      |    (k)", ";                 >ai1<   |    (ai1)", ";                 >aij<   |    (aij)", ";                 >b1k<   |    (b1k)", ";                 >bjk<   |    (bjk)", ";                 >cik<   |    (cik)", ";                  s      |    (s)", ";", "; Befehlsliste:", "", "(MMULT)", "   UB(ADR)+80)          ; Hilfszellen im Kernspeicher:", "   (a11)", "   (b11)", "   (c11)", "   (n)", "   (i)", "   (j)", "   (k)", "   (ai1)", "   (aij)", "   (b1k)", "   (bjk)", "   (cik)", "   (s)", "", "   UB(ADR)+(MMULT))     ; Programm im Trommelspeicher:", "", "   JK 9", "   U (r)                ; Rückkehradresse nach (r)", "   UB (k) + 1           ; k := 1", "   JK (b11)", "   UK (b1k)             ; >b1k<:=>b11<", "   JK (c11)", "   UK (cik)             ; >cik< :=>c11<", "   (1) UB (i) + 1       ; i := 1", "   JK (a11)", "   UK (ai1)             ; >ai1< :=>a11<", "   (2) UB (j) + 1       ; j := 1", "   JK (ai1)", "   UK (aij)             ; >aij< :=>ai1<", "   JK (b1k)", "   UKC (bjk)            ; >bjk< :=>b1k<", '   UK (s)               ; s := 0         [Tippfehler von Peter korrigiert von Norbert. Im Original steht "U (s)".]', "   (3) JH (aij) + 0", "   N", "   UK 7", "   JH (bjk) + 0", "   N", "   XU (.)", "   UK 7", "   JK (s)", "   XU (+)", "   UK (s)               ; s := aij.bjk + s", "   UBH (j) + 1          ; j := j + 1", "   N", "   JK (aij)", "   AK (n)", "   UK (aij)             ; >aij< :=>aij<+ n", "   UBH (bjk) + 1        ; >bjk< :=>bjk<+ 1", "   N", "   ABHC (n) + 0", "   N", "   ABHS (j) + 0         ; j <= n ?", "   N", "   Z3X (3) ", "   JK (s)", "   UH (cik) + 0         ; cik := s", "   N", "   UBH (i) + 1          ; i := i + 1", "   N", "   UBH (ai1) + 1        ; >ai1<:=>ai1< + 1", "   N", "   UBH (cik) + 1        ; >cik<:=>cik< + 1", "   N", "   ABHC (n) + 0", "   N", "   ABHS (i) + 0         ; i <= n ?", "   N", "   Z3X (2)", "   UBH (k) + 1          ; k := k + 1", "   N", "   JK (b1k)", "   AK (n)", "   UK (b1k)             ; >b1k< :=>b1k< + n", "   ABHC (n) + 0", "   N", "   ABHS (k) + 0         ; k <= n ?", "   N", "   Z3X (1)", "   (r) N", "", "", ";===================================================================", "; ", "; Floating point operations for the Mailuefterl computer", ";", ";===================================================================", "; Written in 2008 and 2017 by Norbert Kehrer (http://members.aon.at/nkehrer)", "; as a replacement for Peter Lucas' package \"Unterprogramm für die ", '; arithmetischen Gleitkommaoperationen" from 1959, for which I could', "; nor locate the source code nor a binary version. But it did exist,", "; as Peter Lucas mentioned it in his diploma thesis, and he also", "; described his implementation in the form of a flow chart on page 36.", "; It is really a pity, he did not add the program listing. But I tried", "; to code as close as possible to his algorithms documented in the flow", "; chart. Peter managed to implement the routines in only 152 instructions.", "; I needed more. ", ";===================================================================", "; ", "; Floating point numbers are represented as follows:", "; Tab    T11    T10 ... T3   T2 T1", "; 0110   Sign    Mantissa    Exponent (bias=50)", ";===================================================================", ";", "; The number zero is represented as zero mantissa with a zero in the", "; exponent also (0 x 10^-50, i.e., Mant=000000000 Exp=00).", ";===================================================================", ";", "; The subroutines for the arithemtic operations in this package always", "; expect the first operand in AC and the second operand in MD.", "; ", "; Subroutine calls:", ";", ";    Addition:        XU(+)", ";    Subtraction:     XU(-)", ";    Multiplication:  XU(X) or XU(.)", ";    Division:        XU(/) or XU(:)", ";", ";===================================================================", "", "", "%FLOAT", "", "", "; Gleitkommaaddition:", "", "(+)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X2)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x2", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommasubtraktion:", "", "(-)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X1)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x1", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommamultiplikation:", "", "(X)N", "(.)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X3)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x3", "   JB(1.Y1)", "   U(0.Y)        ; Sprungziel y = y1", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommadivision:", "", "(/)N", "(:)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X3)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x3", "   JB(1.Y2)", "   U(0.Y)        ; Sprungziel y = y2", "   X(1.TR)       ; go to TRENNEN", "", "   (1.TR)JK9     ; TR) Trennen von Mantisse und Exponent", "   U(1.RET)      ;    Rücksprungadresse sichern", "   J(0.AVZ)      ;    Trennen 1. Operand:", "   EB99", "   U(0.AEXP)     ;    a_exp := AC & 99", "   J(0.AVZ)", "   E(0.MMA0)   ", "   U(0.AMAN)     ;    a_man := AC & 9999999900 ... Vorzeichen wird auch positiv gemacht", "   JK7           ;    AC := MD", "   U(0.BVZ)      ;    Trennen 2. Operand:", "   EB99", "   U(0.BEXP)     ;    b_exp := AC & 99", "   J(0.BVZ)", "   E(0.MMA0)   ", "   U(0.BMAN)   ;    b_man := AC & 9999999900 ... Vorzeichen wird auch positiv gemacht", "", "   XG(0.X)      ; x) Sprung zu x", "   N", "", "   (1.X1)J(0.MVZ0)   ; x1) b := -b, für Subtraktion", '   UK8               ;    MR := "-"', "   J(0.BVZ)   ", "   Z3X(1.X1.1)       ;    wenn b_vz positiv, tue nichts", "   ABC 0", '   UK8               ;    sonst MR := "+"   ', "   (1.X1.1)JK8", "   U(0.BVZ)          ;    b_vz := MR", "", "   (1.X2)J(0.AEXP)   ; x2) Addition:", "   AS(0.BEXP)", "   Z3X(1.1)          ;    wenn (a_exp >= b_exp), Reihenfolge OK (gehe zu 1.1)", "   J(0.AEXP)         ;    sonst: Tauschen von a und b - Exponent", "   TI8+(0.BEXP)", "   TN8+(0.AEXP)", "   U(0.BEXP)", "   J(0.AMAN)         ;   Tauschen von a und b - Mantisse", "   TI8+(0.BMAN)", "   TN8+(0.AMAN)", "   U(0.BMAN)", "   J(0.AVZ)          ;   Tauschen von a und b - Vorzeichen", "   TI8+(0.BVZ)", "   TN8+(0.AVZ)", "   U(0.BVZ)", "   (1.1)J(0.AEXP)    ;    weiter:", "   AS(0.BEXP)", "   UK8               ;    MR := a_exp - b_exp   (Exponentendifferenz)", "   JM(0.BMAN)        ;    AC := b_man,  MR := MR - 1", "   (1)Z7X(2)         ;    Loop: if MR < 0, leave loop", "   NMR               ;          MR := MR - 1, AC := AC >> 1", "   X(1)              ;    End Loop", "   (2)U(0.OPB)       ;    verschobene b_man in op_b speichern", "   J(0.AMAN)", "   U(0.OPA)          ;    a_man in op_a speichern", "   ABC2", "   UK8               ;    MR := 2 ... MR dient als Kennzeichen für 2 negative Operanden. Dann addieren wir einfach die Mantissen und machen das Ergebnis negativ", "   J(0.AVZ)          ;    Vorzeichenbehaftete Operanden bilden:", "   Z3X(3)            ;    wenn a positiv, weiter", "   ACSM(0.OPA)", "   U(0.OPA)          ;    sonst op_a := -op_a und MR--", "   (3)J(0.BVZ)", "   Z3X(4)            ;    wenn b positiv, weiter", "   ACSM(0.OPB)", "   U(0.OPB)          ;    sonst op_b := -op_b und MR--", "   (4)NC", "   U(0.CVZ)          ;    c_vz auf + (Default-Annahme)", "   Z1X(4.1)          ;    wenn MR > 0, d.h. mind. 1 Operand positiv, dann OK", "   ACS(0.OPA)        ;    sonst mache beide Operanden wieder positiv (und setze dann am Ende das Ergebnis auf negativ)", "   U(0.OPA)", "   ACS(0.OPB)", "   U(0.OPB)", "   (4.1)J(0.OPA)", "   A(0.OPB)          ;    AC := op_a + op_b", "", "   Z4X(5)            ;    wenn negativ, gehe zu 5", "   Z3X(6)            ;    wenn positiv und zwar ohne Überlauf, gehe zu 6 (nichts zu tun)", "", "   NR                ;    sonst (positiv aber mit Überlauf T11 >0 und <9) korrigiere Überlauf:", "   U(0.CMAN)         ;    c_man := AC >> 1", "   J(0.AEXP)", "   AB1", "   U(0.CEXP)         ;    c_exp := a_exp + 1", "   X(7)              ;    und weiter bei 7", "", '   (5)U(0.CVZ)       ;    negatives Ergebnis: c_vz auf "-" setzen', "   U(0.OPA)", "   ACS(0.OPA)        ;    AC := -AC", "   U(0.CMAN)         ;    c_man := AC", "   J(0.AEXP)", "   U(0.CEXP)         ;    c_exp := a_exp", "   X(7)              ;    weiter bei 7", "", "   (6)U(0.CMAN)      ;    positives Ergebnis ohne Überlauf: c_man := AC", "   J(0.AEXP)", "   U(0.CEXP)         ;    c_exp := a_exp", "", "   (7)Z1X(7.1)       ;    wenn MR > 0, d.h. mind. 1 Operand positiv, dann alles OK", "   J(0.MVZ0)         ;    sonst waren beide Operanden negativ, also setze das Ergebnis auf negativ", '   U(0.CVZ)          ;    c_vz := "-"', "   (7.1)N   ", "", "   (1.NRM)J(0.CEXP)  ; NRM) Normalisierung Ergebnis", "   UK8               ;    MR := c_exp", "   ABC8", "   UK7               ;    MD := 8 (maximum number of shifts to normalize)", "   J(0.CMAN)         ;    AC := c_man", "   (8)NML            ;    AC := AC << 1, MR := MR - 1", "   U(0.TEMP)         ;    save AC in temp", "   JK7               ;   ", "   ABS1", "   UK7               ;    MD := MD - 1", "   J(0.TEMP)         ;    restore AC from temp", "   Z8X(9)            ;    if MD < 0, result is zero (8 shifts have been done, all digits were zero, so stop now) ", "   Z3X(8)            ;    if sign of AC == 0, goto shift loop", "   NWR               ;    AC := AC >> 1, MR := MR + 1", "   U(0.CMAN)         ;    c_man := AC", "   JK8", "   U(0.CEXP)         ;    c_exp := MR", "   X(10)", "", "   (9)NC             ;    result is zero", "   U(0.CMAN)         ;    c_man := 0", "   U(0.CEXP)         ;    c_exp := 0", "   ", "   (10)J(0.CMAN)     ; VZ) Vorzeichen, Mantisse und Exponent zu einer Ergebniszahl zusammenbauen", "   E(0.MMA0)", "   U(0.CMAN)         ;    c_man := c_man & 9999999900 ... Mantisse isolieren Vorzeichen wird auch positiv gemacht", "   ABS1", "   Z3X(1.NONZERO)    ;    Wenn c_man !== 0, dann weiter", "   ABC0              ;    sonst Ergebnis ist 0, ", "   X(1.RET)          ;    und zurückspringen", "   (1.NONZERO)J(0.CVZ)", "   E(0.MVZ0)", "   U(0.CVZ)          ;    c_vz := c_vz & 90000000000 ... Vorzeichen isolieren", "   J(0.CEXP)", "   EB99              ;    AC := c_exp & 99 ... Exponenten isolieren und in den AC", "   A(0.CMAN)         ;    AC := AC + c_man ... Mantisse dazu", "   A(0.CVZ)          ;    AC := AC + c_vz  ... Vorzeichen dazu", "", "   (1.RET)N          ; Return", "", "", "   (1.X3)J(0.BVZ)   ; x3) Vorzeichenbestimmung:", "   E(0.MVZ0)", "   U(0.BVZ)         ;    b_vz := b_vz & 90000000000 ... Vorzeichen isolieren", "   J(0.AVZ)   ", "   E(0.MVZ0)", "   U(0.AVZ)         ;    a_vz := a_vz & 90000000000 ... Vorzeichen isolieren", "   AS(0.BVZ)", "   U(0.CVZ)         ;    c_vz := a_vz - b_vz", "   XG(0.Y)", "", "   (1.Y1)J(0.BMAN)  ; y1) Multiplikation:", "   TI7+(0.AMAN)", "   XU(0.MULTF)", "   U(0.CMAN)        ;    c_man := a_man * b_man", "   J(0.AEXP)", "   A(0.BEXP)", "   ABS50            ;    c_exp := a_exp + b_exp - 50", "   U(0.CEXP)", "", "   X(1.NRM)   ", "", "", "   ", "   (1.Y2)J(0.BMAN)  ; y2) Division:", "   TI7+(0.AMAN)", "   XU(0.DIVF)", "   JK8", "   U(0.CMAN)        ;    c_man := a_man / b_man", "   J(0.AEXP)", "   AS(0.BEXP)", "   AB51             ;    c_exp := a_exp - b_exp + 51", "   U(0.CEXP)", "", "   X(1.NRM)   ", "", "", "", "", "; Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(0.MULTF)", "   UB(ADR)+65)", "   (0.M.1K)             ; jump addresses", "   (0.M.2K)", "   (0.M.3K)", "   (0.M.4K)", "   (0.M.5K)", "   (0.M.6K)", "   (0.M.7K)", "   (0.M.8K)", "   UB(ADR)+(0.MULTF))   ; program in the drum store:", "   TI8+(0.M.1)          ;    program transfer      MR = AC (b)", "   TI(0.M.1K)+(0.M.2)   ;    to the core store", "   TI(0.M.2K)+(0.M.3)", "   TI(0.M.3K)+(0.M.4)", "   TI(0.M.4K)+(0.M.5)", "   UKC(0.M.5K)          ;            AC = 0;", "   XK(0.M.1K)           ;            goto prog in core store", "   (0.M.1)Z1YAMK7       ; program in the core store:   while (MR[T1] != 0) {AC += MD; MR--;};", "   (0.M.2)XBRV(0.M.3K)-9 ;           multiplication: do 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", "   (0.M.3)Z1YAMK7       ;            while (MR[T1] != 0) {AC += MD; MR--;};", "   (0.M.4)XK(0.M.5K)    ;            goto (5)  // needed to stop XB instruction!!!", "   (0.M.5)XK9           ;            return;", "", "", "", "", "; Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(0.DIVF)", "   UB(ADR)+65)", "   (0.D.1K)             ; jump addresses", "   (0.D.2K)", "   (0.D.3K)", "   (0.D.4K)", "   (0.D.5K)", "   (0.D.6K)", "   (0.D.7K)", "   UB(ADR)+(0.DIVF))   ; program in the drum store:", "   TI8+(0.D.1)         ; program transfer      MR = AC (b)", "   TI(0.D.1K)+(0.D.2)  ; to the core store", "   TI(0.D.2K)+(0.D.3)", "   TI(0.D.3K)+(0.D.4)", "   TI(0.D.4K)+(0.D.5)", "   TI(0.D.5K)+(0.D.6)", "   UK(0.D.6K)", "   JK9                 ;            put return jump (RS) in (7)", "   UKC(0.D.7K)", "   JK8                 ;             AC := MR", "   NRV", "   NRV                 ;            ignore the exponent digits", "   XK(0.D.1K)          ;            goto prog in core store", "   (0.D.1)XBLV(0.D.2K)-10   ; program in the core store:   do 10 times {exec(4); AC/MR <<= 4;}", "   (0.D.2)XUK(0.D.4K)       ;            division          ", "   (0.D.3)XK(0.D.7K)        ;            goto (7) // needed to stop XB instruction!!!", "   (0.D.4)Z2XB(0.D.6K)+0    ;            while (AC >= MD) exec(6)", "   (0.D.5)XK9               ;            return", "   (0.D.6)Z2ASWK7           ;            if (AC >= MD) {AC -= MD; MR++;}", "   (0.D.7)N0                ;            return jump is stored here                  ", "", "", "", "", "", "", "", ";===================================================================", "; ", "; Print program for floating point numbers for the Mailuefterl computer", ";", ";===================================================================", "; Written in 2008 and 2017 by Norbert Kehrer (http://members.aon.at/nkehrer)", "; as a replacement for Peter Lucas' package \"Druckprogramm für ", '; Gleitkommazahlen" from 1959, for which I could', "; nor locate the source code nor a binary version. But it did exist,", "; as Peter Lucas mentioned it in his diploma thesis.", "; Peter managed to implement the routines in only 76 instructions.", "; I needed much more.", ";===================================================================", ";", "; The number to be printed is expected in AC.", ";", "; Subroutine calls:", ";", ";    Print number:  XU(PRINT) or XU(D)", ";    New Line:      XU(NL) or XU(WR)", ";", ";===================================================================", "", "", "; Ausdrucken einer Gleitkommazahl", ";", ";    Eingabeparameter:   AC   Zahl", "", "(D)N", "(PRINT)U(0.SAVEAC)   ; Zahl sichern", "   JK9", "   U(0.P.RET)        ; Rücksprungadresse sichern", "   J(0.SAVEAC)", "   U(0.AVZ)          ; Trennen von Mantisse und Exponent: a_vz setzen", "   EB99", "   U(0.AEXP)         ;    a_exp := AC & 99", "   J(0.AVZ)", "   E(0.MMA0)   ", "   U(0.AMAN)         ;    a_man := AC & 9999999900", "   JK0", "   UK10              ; Leerzeichen ausgeben", "   J(0.FIGRS)", '   UK10              ; "Figures shift" ausgeben', "   J(0.SAVEAC)", "   Z3X(0.P.1)        ; Wenn Zahl positiv, weiter zur Ausgabe eines Leerzeichens", "   J(0.MINUS)", '   UK10              ; sonst "-" ausgeben', "   X(0.P.2)          ; und weiter", "   (0.P.1)JK0", "   UK10              ; Leerzeichen ausgeben", "   (0.P.2)J(0.AMAN)", "   ABS1", "   Z3X(0.P.21)       ; Wenn Zahl == 0,", "   J(0.ZERO)", '   UK10              ; dann "0" ausgeben', "   JK0", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "", "   X(0.P.DONE)       ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre, und return", "", "   (0.P.21)J(0.AEXP) ; Zahl nicht 0, also weiter", "   ABS59", "   Z3X(0.P.WISS)     ; Wenn Exponent > 8, gehe zu wiss.Format", "   J(0.AEXP)", "   ABS42", "   Z4X(0.P.WISS)     ; Wenn Exponent < -8, gehe zu wiss.Format", "   J(0.AEXP)", "   ABS51", "   Z4X(0.P.NEGEXP)   ; Wenn Exponent < 0, gehe zu neg. Exponten ohne Exponentenausgabe", "", "   ; sonst:", "", "   ; ****** Zahl mit positivem Exponenten ohne Exponentenausgabe:", "", "   J(0.AMAN)", "   NL                   ; AC einmal nach links shiften, um Vorzeichenstelle zu übergehen", "   UK8                  ; MR := AC", "", "   J(0.AEXP)", "   ABS51", "   U(0.TEMP1)           ; temp1 := a_exp - 51", "", "   ABC8", "   U(0.TEMP)            ; temp := 8", "", "   ABC0", "   U(0.AUSG)            ; ausg := 0000...", "", "   (0.P.L1)J(0.TEMP1)   ; loop:", "   Z3X(0.P.L11)         ;    if temp1 < 0, Komma setzen:", "   J(0.AUSG)", "   NL                   ;       AC = ausg << 4", "   I (0.MBIN0)", "   D (0.MBIN2)", "   U (0.AUSG)           ;       ausg := (AC & 0xfffffffffff0) | 2", "   ABC 99", "   U(0.TEMP1)           ;       temp1 := 99, d.h. Komma ist gesetzt worden. Jetzt nicht mehr setzen.", "   (0.P.L11)J(0.AUSG)   ;    endif", "   NLV                  ;    AC/MR <<= 4", "   U(0.AUSG)", "   J(0.TEMP1)", "   ABS1", "   U(0.TEMP1)           ;    temp1--", "   J(0.TEMP)", "   ABS1", "   U(0.TEMP)            ;    temp--", "   Z3X(0.P.L1)          ; end loop, when temp < 0", "", "", "                        ; nach rechts schieben, sodass die hintenstehenden Nuller weg sind, aber höchstens so weit, dass alle stellen lt. Exponent drinnen sind (Nuller bei 10, 20 etc. sollen bleiben)", "   J(0.AUSG)", "   D(0.MBINTOP9)        ; Vorzeichenstelle auf 9 setzen, damit die Schleife sicher stoppt", "   UK8                  ; MR := ausg mit oberster Tetrade auf 9 gesetzt", "   ABC59", "   AS(0.AEXP)", "   UK7                  ; MD := 59 - exp ... maximale Rechtsshifts (Trailing zeroes bei 10, 100, ...)", "   JK8                  ; AC wieder herstellen", "   (0.P.L2)Z1X(0.P.L2E) ; loop, while lowest digit of AC == 0", "   NR                   ;       AC >>= 4", "   UK8                  ;       MR := AC", "   JK7", "   ABS1", "   UK7                  ;       MD--", "   JK8                  ;       AC wieder herstellen", "   Z8X(0.P.L2E)         ;       Schleife vorzeitig beenden, wenn maximale Shift-Zahl überschritten", "   X(0.P.L2)            ; end loop", "   (0.P.L2E)U(0.AUSG)", "", "                        ; wieder nach links schieben, und rechts mit Blanks auffüllen", "   OASK6", "   UK8                  ; MR := binär 0", "   J(0.AUSG)", "   (0.P.L3)NLV          ; loop: AC/MR <<= 4", "   Z4X(0.P.L3E)", "   X(0.P.L3)            ; end loop, until T11 of AC >=9", "   (0.P.L3E)NLV         ; AC/MR <<= 4", "   U(0.AUSG)", "", "   J(0.AUSG)", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   X(0.P.DONE)          ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre, und return", "   ", "", "   ; ****** Zahl mit negativem Exponenten ohne Exponentenausgabe:", "", "   (0.P.NEGEXP)J(0.AMAN) ; nach rechts schieben, sodass die hintenstehenden Nuller weg sind", "   D(0.MBINTOP9)         ; Vorzeichenstelle auf 9 setzen, damit die Schleife sicher stoppt", "   NR", "   NR                    ; 2 Mal nach rechts, damit der Exponent weg ist", "   UK7                   ; MD := AC, AC in MD sichern", "   ABC0", '   U(0.TEMP)             ; temp := 0 (counter für Anzahl von "trailing zeroes")', "   JK7                   ; AC zurückholen", "   UK8                   ; MR := AC", "   (0.P.NEL1)Z1X(0.P.NEL1E)   ; loop, while lowest digit of AC == 0 (AC is held in MR, and check is for T1 of MR)", "   NR                    ;    AC >>= 4", "   UK7                   ;    MD := AC", "   J(0.TEMP)", "   AB1", '   U(0.TEMP)             ;    temp++ (counter für Anzahl von "trailing zeroes")', "   JK7                   ;    AC := MD", "   UK8                   ;    MR := AC", "   X(0.P.NEL1)           ; end loop", "   (0.P.NEL1E)U(0.AUSG)", "   J(0.AEXP)", "   A(0.TEMP)", "   ABS50                 ; AC := a_exp + temp - 50", "   Z4X(0.P.WISS)         ; wenn trailing_zeroes > -a_exp, wiss. Format nehmen (sonst Verlust Genauigkeit im Ausdruck)", "   J(0.DOT)              ; sonst:", "   UKPP10                ; Dezimalpunkt ausgeben, Q im AC löschen, dann temp Nuller und den Rest aus der Mantisse", "   J(0.AMAN)", "   NL", "   UK8                   ; MR := a_man << 4 (Vorzeichenstelle wegschieben)", "   ABC0", "   U(0.AUSG)             ; ausg := 00000000000", "   J(0.TEMP)", "   U(0.TEMP1)            ; temp1 := trailing_zeroes", "   ABC58", "   A(0.AEXP)", "   ABS100", "   U(0.TEMP)             ; temp := 58 + a_exp - 100 (Anzahl nötiger Shifts)", "   ABC58", "   AS(0.AEXP)", "   AS(0.TEMP1)", "   U(0.TEMP1)            ; temp1 := 58 - a_exp - trailing_zeroes ... Anzahl zu druckender Stellen merken", "   (0.P.NEL2)J(0.AUSG)   ; loop", "   NLV", "   U(0.AUSG)             ;    ausg := ausg/MR << 4", "   J(0.TEMP)", "   ABS1", "   U(0.TEMP)             ;    temp--", "   Z3X(0.P.NEL2)         ; endloop while temp >= 0", "   J(0.TEMP1)", "   UK8                   ; MR := temp1 (Anzahl zu druckender Stellen)", "   J(0.AUSG)             ; AC := ausg", "   NL", "   NL                    ; noch 2 Shifts um den Exponenten zu übergehen, sodass Zahl ganz links im AC steht", "   (0.P.NEL3)ULMK10      ; loop: Ausgeben einer Ziffer, AC <<= 4, MR--", "   Z1X(0.P.NEL3)         ; end loop, until MR >= 0", "   ABC8", "   AS(0.TEMP1)", "   UK8                   ; MR := 8 - temp1 (Anz. gedruckter Stellen) ... trailing blanks zum Auffüllen hinten", "   ABS1", "   Z4X(0.P.DONE)         ; fertig, wenn MR < 1", "   JK0                   ; Sonst AC = binär 0 (Blank)", "   (0.P.NEL4)UMK10       ; loop: Ausgeben eines Blanks, MR--", "   Z1X(0.P.NEL4)         ; end loop, until MR >= 0", "", "   (0.P.DONE)JK0", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   X (0.P.RET)           ; Return", "", "", "   ; ****** Ausgabe im wissenschaftlichen Format:", "", "   (0.P.WISS)J(0.DOT)", "   UKPP10                ; Dezimalpunkt ausgeben, Q im AC löschen", "   J(0.SAVEAC)           ; Zahl in AC laden", "   NL                    ; AC um 1 Stelle shiften, um Vorzeichen zu überspringen", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   J(0.LETRS)", '   UK10                  ; "Letters shift" ausgeben', "   J(0.LETTE)", '   UK10                  ; "E" ausgeben', "   J(0.FIGRS)", '   UK10                  ; "Figures shift" ausgeben', "", "   J(0.AEXP)", "   ABS50", "   Z3X(0.P.4)            ; Wenn Exponent >= 0, gehe zu (4)", "   U(0.TEMP)             ; sonst Betrag des (negativen) Exponenten ermitteln", "   ACS(0.TEMP)", "   U(0.TEMP)             ; und merken in temp", "   J(0.MINUS)", '   UK10                  ; "-" ausgeben', "   J(0.TEMP)             ; Exponenten (Betrag) wieder holen", "   X(0.P.5)", "   (0.P.4)U(0.TEMP)      ; Exponenten merken in temp", "   J(0.PLUS)", '   UK10                  ; "+" ausgeben', "   J(0.TEMP)             ; Exponenten wieder holen", "   (0.P.5)NL             ; 9 Mal shiften, sodass 1. Ziffer d. Exp. in Ausgabeposition", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   (0.P.RET)N            ; Return", "", "", "   ; ****** Unterprogramm zur Ausgabe einer einzelnen Ziffer, die in der obersten Tetrade von AC steht", "", "   (0.EMITDIGIT)Z3X(0.ED.DOT)   ; AC <= dez 0 (bin 3)", "   (0.ED.NORM)NPP               ; Q im AC löschen", "   ULK10                        ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XK9", "", "   (0.ED.DOT)U(0.AUSG)", "   OA(0.BIN900)                 ; AC := AC + 0x900... binär  (Oberste Stelle ist dann dez. 9 bei Komma)", "   Z4X(0.ED.NODOT)              ; wenn T11 des AC >= dez 9, ist es normal (Nuller)", "   OAS(0.BIN600)                ; AC := AC - 0x600... binär  (Oberste Stelle ist dann dez. 0 bei Blank)", "   Z3X(0.ED.NODOT)              ; wenn T11 des AC <= dez 0, ist es normal (Blank)", "   J(0.DOT)                     ; sonst Komma", "   UKPP10                       ; Dezimalpunkt ausgeben, Q im AC löschen", "   J(0.AUSG)", "   NL                           ; AC links shiften für nächste Ziffer", "   XK9                          ; Return", "", "   (0.ED.NODOT)J(0.AUSG)   ", "   X(0.ED.NORM)", "", "", "", "; Zeilenumbruch", ";", ";    Eingabeparameter:   keine", "", "(WR)N", "(NL)J(0.CR)", "   UK10", "   J(0.LF)", "   UK10      ; print CR/LF", "   XK9       ; return", "", "", "", "", ";===================================================================", "; Variablen und Konstanten für Arithmetik und Druckprogramm:", ";===================================================================", "", "   (0.AVZ)N     ; a Vorzeichen", "   (0.AMAN)N    ; a Mantisse", "   (0.AEXP)N    ; a Exponent", "   (0.BVZ)N     ; b Vorzeichen", "   (0.BMAN)N    ; b Mantisse", "   (0.BEXP)N    ; b Exponent", "   (0.CVZ)N     ; c Vorzeichen", "   (0.CMAN)N    ; c Mantisse", "   (0.CEXP)N    ; c Exponent", "", "   (0.OPA)N     ; Operand A", "   (0.OPB)N     ; Operand B", "", "   (0.TEMP)N    ; Hilfsvariable, temporärer Zwischenspeicher", "   (0.TEMP1)N   ; Hilfsvariable, temporärer Zwischenspeicher", "   (0.AUSG)N    ; Hilfsvariable für Ausgabezwischenspeicherung", "   (0.SAVEAC)   ; Hilfsvariable für Akkuzwischenspeicherung", "", "   (0.X)N       ; Sprungziel x", "   (0.Y)N       ; Sprungziel y", "", "", "; Konstanten", "", "   (0.MVZ0)PB12:3:3:3:3:3:3:3:3:3:3              ; Maske zum Löschen von allem außer Vorzeichen", "   (0.MMA0)PB12:3:12:12:12:12:12:12:12:12:3:3    ; Maske zum Nullsetzen von allem außer Mantisse und Vorzeichen + machen", "", "   (0.MBIN0)PB15:15:15:15:15:15:15:15:15:15:15:0 ; Maske zum binären Nullsetzen der niedrigstwertigen Tetrade", "   (0.MBIN1)PB0:0:0:0:0:0:0:0:0:0:0:1            ; Maske zum binären erzeugen von 1 in der niedrigstwertigen Tetrade", "   (0.MBIN2)PB0:0:0:0:0:0:0:0:0:0:0:2            ; Maske zum binären erzeugen von 2 in der niedrigstwertigen Tetrade", "   (0.MBINTOP9)PB0:15:0:0:0:0:0:0:0:0:0:0        ; Maske zum binären erzeugen von 9 in der obersten Tetrade", "", "   (0.BIN900)PB0:9:0:0:0:0:0:0:0:0:0:0           ; Binär 9000...", "   (0.BIN600)PB0:6:0:0:0:0:0:0:0:0:0:0           ; Binär 6000...", "", "   (0.LETRS)   PB 0:13:0:0:0:0:0:0:0:0:0:0       ; letters shift (13 = 01101)", "   (0.FIGRS)   PB 0:14:0:0:0:0:0:0:0:0:0:0       ; figures shift (14 = 01110)", '   (0.MINUS)   PB 1:12:0:0:0:0:0:0:0:0:0:0       ; "-" (28 = 11100)', '   (0.PLUS)    PB 1:3:0:0:0:0:0:0:0:0:0:0        ; "+" (19 = 10110)', '   (0.DOT)     PB 1:13:0:0:0:0:0:0:0:0:0:0       ; "." (29 = 11101)', '   (0.LETTE)   PB 0:6:0:0:0:0:0:0:0:0:0:0        ; "E" (6 = 00110)', '   (0.ZERO)    PB 0:3:0:0:0:0:0:0:0:0:0:0        ; "0" (3 = 00011)', "   (0.CR)      PB 6:2:0:0:0:0:0:0:0:0:0:0        ; Carriage return", "   (0.LF)      PB 6:1:0:0:0:0:0:0:0:0:0:0        ; Line feed", ""], prog_sine = [";===================================================================", "; ", "; Sine function for the Mailuefterl computer", ";", ";===================================================================", "; Written in the summer of 1959 by Peter Lucas as part of his", "; diploma thesis at the Technical University of Vienna.", "; Here is the exact reference:", '; Lucas P.: "Zur Programmierung elektronischer Rechenmaschinen",', "; Staatspruefungsarbeit am Institut fuer Nachrichtentechnik II der", "; Technischen Hochschule Wien, Vienna, October 1959.", '; Translation of the  title: "On the programming of electronic', '; calculating machines".', ";===================================================================", "; Typed in by Norbert Kehrer (http://members.aon.at/nkehrer)", "; in July 2017.", ";", "; Assemble and start with X0000 on the control desk", ";===================================================================", "", "", "   UB(ADR)+0000)          ; Target address = 0000 --\x3e Start with X 0000", "   (START)", "", "", "   UB(ADR)+(START))", "", "%DEMO", "   J (-0,5)", "   U (0.X)                ; x := -0.5", "   (1) J (0.X)            ; loop start", "   XU (SIN)", "   U (0.SINX)             ;    sin_x := sin x", "   TI 7 + (25,0)", "   XU (.)", "   U (0.SINX25)           ;    sin_x_25 := 25 * sin_x", "   TI 7 + (25,0)", "   XU (+)", "   U (0.SINX25)           ;    AC := 25 + sin_x_25", "   (2)Z4X(3)              ;    loop to print AC spaces: if AC < 0, end loop", "   JK0", "   UK10                   ;       print a blank", "   J (1,0)", "   TI 7 + (0.SINX25)", "   XU (-)", "   U (0.SINX25)           ;       sin_x_25 := sin_x_25 - 1", "   X (2)                  ;    end loop", "   (3)J (0.X)", "   XU (PRINT)             ;    print x", "   J (0.SINX)", "   XU (PRINT)             ;    print sin_x", "   XU (NL)", "   J (0.X)", "   TI 7 + (0,2)", "   XU (+)", "   U (0.X)               ;    x := x + 0.2", "   X (1)               ; goto loop start", "   N.", "", "", "", "   ; Variablen:", "", "   (0.X)       N", "   (0.SINX)    N", "   (0.SINX25) N", "", "", "", "   ; Konstanten:", "", "   (-0,5) PB6:12:8:3:3:3:3:3:3:3:8:3", "   (0,2)  PB6:3:5:3:3:3:3:3:3:3:8:3", "   (25,0) PB6:3:5:8:3:3:3:3:3:3:8:5", "   (1,0)  PB6:3:4:3:3:3:3:3:3:3:8:4", "", "   (4,5)  PB6:3:7:8:3:3:3:3:3:3:8:4", "   (T1)  PB6:12:8:3:3:3:3:3:3:3:8:3", "   (T2)  PB6:12:9:3:3:3:3:3:3:3:8:3", "", "", "", "", "", "%SINE", "", "; Seiten 69 und 70:", ";", "; Taylorreihe für sin x (Beispiel zu 4,22)", "; ---------------------", ";", "; Hilfszellen: alle Hilfszellen befinden sich im", ";              Kernspeicher", ";", ";                  Inhalt  |  symb. Adr.", ";                  --------+------------", ";                  x       |    (x)", ";                  x2      |    (x2)", ";                  si      |    (si)", ";                  ai      |    (ai)", ";                  n       |    (n)", ";", "; Befehlsliste:", "", "(SIN)", "   UB(ADR)+80)            ; Hilfszellen im Kernspeicher:", "   (x)", "   (x2)", "   (si)", "   (ai)", "   (n)", "", "   UB(ADR)+(SIN))         ; Programm im Trommelspeicher:", "", "   UK(x)", "   JK9", "   U (1)                  ; Rückkehradresse nach (1)", "   JK (x)", "   EBS 99                 ; x = 0 ?", "   Z3ASCK 6", "   Z3X (1)", "   J (2/0)", "   UK (n)                 ; n := 2", "   JK (x)", "   UK (si)", "   UK (ai)", "   UK 7", "   XU (.)", "   UK (x2)                 ; x2", "   (2) JK (n)", "   UK 7", "   J (1/0)", "   XU (+)                  ; n + 1", "   UK 7", "   JK (n)", "   XU (.)                  ; n(n + 1)", "   UK 7", "   JK (x2)", "   XU (:)                  ; x2/n(n + 1)", "   UK 7", "   JK (ai)", "   XU (.)                  ; ai.x2/n(n + 1)", "   UKC 7", "   XU (-)                  ; Komplement", "   UK (ai)", "   EB 99", "   UK 7", "   JK (si)", "   EB 99", "   ASK 7", "   ABS 9                   ; exp(si) - exp(ai) <= k", "   Z3X (3)", "   JK (si)", "   UK 7", "   JK (ai)", "   XU (+)", "   UK (si)                 ; si := si + ai", "   JK (n)", "   UK 7", "   J (2/0)", "   XU (+)", "   UK (n)                  ; n := n + 2", "   X (2)", "   (3) JK (si)", "   (1) N", "", "   (1/0) PB6:3:4:3:3:3:3:3:3:3:8:4", "   (2/0) PB6:3:5:3:3:3:3:3:3:3:8:4", "", "", "", "", ";===================================================================", "; ", "; Floating point operations for the Mailuefterl computer", ";", ";===================================================================", "; Written in 2008 and 2017 by Norbert Kehrer (http://members.aon.at/nkehrer)", "; as a replacement for Peter Lucas' package \"Unterprogramm für die ", '; arithmetischen Gleitkommaoperationen" from 1959, for which I could', "; nor locate the source code nor a binary version. But it did exist,", "; as Peter Lucas mentioned it in his diploma thesis, and he also", "; described his implementation in the form of a flow chart on page 36.", "; It is really a pity, he did not add the program listing. But I tried", "; to code as close as possible to his algorithms documented in the flow", "; chart. Peter managed to implement the routines in only 152 instructions.", "; I needed more. ", ";===================================================================", "; ", "; Floating point numbers are represented as follows:", "; Tab    T11    T10 ... T3   T2 T1", "; 0110   Sign    Mantissa    Exponent (bias=50)", ";===================================================================", ";", "; The number zero is represented as zero mantissa with a zero in the", "; exponent also (0 x 10^-50, i.e., Mant=000000000 Exp=00).", ";===================================================================", ";", "; The subroutines for the arithemtic operations in this package always", "; expect the first operand in AC and the second operand in MD.", "; ", "; Subroutine calls:", ";", ";    Addition:        XU(+)", ";    Subtraction:     XU(-)", ";    Multiplication:  XU(X) or XU(.)", ";    Division:        XU(/) or XU(:)", ";", ";===================================================================", "", "", "%FLOAT", "", "", "; Gleitkommaaddition:", "", "(+)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X2)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x2", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommasubtraktion:", "", "(-)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X1)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x1", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommamultiplikation:", "", "(X)N", "(.)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X3)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x3", "   JB(1.Y1)", "   U(0.Y)        ; Sprungziel y = y1", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommadivision:", "", "(/)N", "(:)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X3)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x3", "   JB(1.Y2)", "   U(0.Y)        ; Sprungziel y = y2", "   X(1.TR)       ; go to TRENNEN", "", "   (1.TR)JK9     ; TR) Trennen von Mantisse und Exponent", "   U(1.RET)      ;    Rücksprungadresse sichern", "   J(0.AVZ)      ;    Trennen 1. Operand:", "   EB99", "   U(0.AEXP)     ;    a_exp := AC & 99", "   J(0.AVZ)", "   E(0.MMA0)   ", "   U(0.AMAN)     ;    a_man := AC & 9999999900 ... Vorzeichen wird auch positiv gemacht", "   JK7           ;    AC := MD", "   U(0.BVZ)      ;    Trennen 2. Operand:", "   EB99", "   U(0.BEXP)     ;    b_exp := AC & 99", "   J(0.BVZ)", "   E(0.MMA0)   ", "   U(0.BMAN)   ;    b_man := AC & 9999999900 ... Vorzeichen wird auch positiv gemacht", "", "   XG(0.X)      ; x) Sprung zu x", "   N", "", "   (1.X1)J(0.MVZ0)   ; x1) b := -b, für Subtraktion", '   UK8               ;    MR := "-"', "   J(0.BVZ)   ", "   Z3X(1.X1.1)       ;    wenn b_vz positiv, tue nichts", "   ABC 0", '   UK8               ;    sonst MR := "+"   ', "   (1.X1.1)JK8", "   U(0.BVZ)          ;    b_vz := MR", "", "   (1.X2)J(0.AEXP)   ; x2) Addition:", "   AS(0.BEXP)", "   Z3X(1.1)          ;    wenn (a_exp >= b_exp), Reihenfolge OK (gehe zu 1.1)", "   J(0.AEXP)         ;    sonst: Tauschen von a und b - Exponent", "   TI8+(0.BEXP)", "   TN8+(0.AEXP)", "   U(0.BEXP)", "   J(0.AMAN)         ;   Tauschen von a und b - Mantisse", "   TI8+(0.BMAN)", "   TN8+(0.AMAN)", "   U(0.BMAN)", "   J(0.AVZ)          ;   Tauschen von a und b - Vorzeichen", "   TI8+(0.BVZ)", "   TN8+(0.AVZ)", "   U(0.BVZ)", "   (1.1)J(0.AEXP)    ;    weiter:", "   AS(0.BEXP)", "   UK8               ;    MR := a_exp - b_exp   (Exponentendifferenz)", "   JM(0.BMAN)        ;    AC := b_man,  MR := MR - 1", "   (1)Z7X(2)         ;    Loop: if MR < 0, leave loop", "   NMR               ;          MR := MR - 1, AC := AC >> 1", "   X(1)              ;    End Loop", "   (2)U(0.OPB)       ;    verschobene b_man in op_b speichern", "   J(0.AMAN)", "   U(0.OPA)          ;    a_man in op_a speichern", "   ABC2", "   UK8               ;    MR := 2 ... MR dient als Kennzeichen für 2 negative Operanden. Dann addieren wir einfach die Mantissen und machen das Ergebnis negativ", "   J(0.AVZ)          ;    Vorzeichenbehaftete Operanden bilden:", "   Z3X(3)            ;    wenn a positiv, weiter", "   ACSM(0.OPA)", "   U(0.OPA)          ;    sonst op_a := -op_a und MR--", "   (3)J(0.BVZ)", "   Z3X(4)            ;    wenn b positiv, weiter", "   ACSM(0.OPB)", "   U(0.OPB)          ;    sonst op_b := -op_b und MR--", "   (4)NC", "   U(0.CVZ)          ;    c_vz auf + (Default-Annahme)", "   Z1X(4.1)          ;    wenn MR > 0, d.h. mind. 1 Operand positiv, dann OK", "   ACS(0.OPA)        ;    sonst mache beide Operanden wieder positiv (und setze dann am Ende das Ergebnis auf negativ)", "   U(0.OPA)", "   ACS(0.OPB)", "   U(0.OPB)", "   (4.1)J(0.OPA)", "   A(0.OPB)          ;    AC := op_a + op_b", "", "   Z4X(5)            ;    wenn negativ, gehe zu 5", "   Z3X(6)            ;    wenn positiv und zwar ohne Überlauf, gehe zu 6 (nichts zu tun)", "", "   NR                ;    sonst (positiv aber mit Überlauf T11 >0 und <9) korrigiere Überlauf:", "   U(0.CMAN)         ;    c_man := AC >> 1", "   J(0.AEXP)", "   AB1", "   U(0.CEXP)         ;    c_exp := a_exp + 1", "   X(7)              ;    und weiter bei 7", "", '   (5)U(0.CVZ)       ;    negatives Ergebnis: c_vz auf "-" setzen', "   U(0.OPA)", "   ACS(0.OPA)        ;    AC := -AC", "   U(0.CMAN)         ;    c_man := AC", "   J(0.AEXP)", "   U(0.CEXP)         ;    c_exp := a_exp", "   X(7)              ;    weiter bei 7", "", "   (6)U(0.CMAN)      ;    positives Ergebnis ohne Überlauf: c_man := AC", "   J(0.AEXP)", "   U(0.CEXP)         ;    c_exp := a_exp", "", "   (7)Z1X(7.1)       ;    wenn MR > 0, d.h. mind. 1 Operand positiv, dann alles OK", "   J(0.MVZ0)         ;    sonst waren beide Operanden negativ, also setze das Ergebnis auf negativ", '   U(0.CVZ)          ;    c_vz := "-"', "   (7.1)N", " ", "", "   (1.NRM)J(0.CEXP)  ; NRM) Normalisierung Ergebnis", "   UK8               ;    MR := c_exp", "   ABC8", "   UK7               ;    MD := 8 (maximum number of shifts to normalize)", "   J(0.CMAN)         ;    AC := c_man", "   (8)NML            ;    AC := AC << 1, MR := MR - 1", "   U(0.TEMP)         ;    save AC in temp", "   JK7               ;   ", "   ABS1", "   UK7               ;    MD := MD - 1", "   J(0.TEMP)         ;    restore AC from temp", "   Z8X(9)            ;    if MD < 0, result is zero (8 shifts have been done, all digits were zero, so stop now) ", "   Z3X(8)            ;    if sign of AC == 0, goto shift loop", "   NWR               ;    AC := AC >> 1, MR := MR + 1", "   U(0.CMAN)         ;    c_man := AC", "   JK8", "   U(0.CEXP)         ;    c_exp := MR", "   X(10)", "", "   (9)NC             ;    result is zero", "   U(0.CMAN)         ;    c_man := 0", "   U(0.CEXP)         ;    c_exp := 0", "   ", "   (10)J(0.CMAN)     ; VZ) Vorzeichen, Mantisse und Exponent zu einer Ergebniszahl zusammenbauen", "   E(0.MMA0)", "   U(0.CMAN)         ;    c_man := c_man & 9999999900 ... Mantisse isolieren Vorzeichen wird auch positiv gemacht", "   ABS1", "   Z3X(1.NONZERO)    ;    Wenn c_man !== 0, dann weiter", "   ABC0              ;    sonst Ergebnis ist 0, ", "   X(1.RET)          ;    und zurückspringen", "   (1.NONZERO)J(0.CVZ)", "   E(0.MVZ0)", "   U(0.CVZ)          ;    c_vz := c_vz & 90000000000 ... Vorzeichen isolieren", "   J(0.CEXP)", "   EB99              ;    AC := c_exp & 99 ... Exponenten isolieren und in den AC", "   A(0.CMAN)         ;    AC := AC + c_man ... Mantisse dazu", "   A(0.CVZ)          ;    AC := AC + c_vz  ... Vorzeichen dazu", "", "   (1.RET)N          ; Return", "", "", "   (1.X3)J(0.BVZ)   ; x3) Vorzeichenbestimmung:", "   E(0.MVZ0)", "   U(0.BVZ)         ;    b_vz := b_vz & 90000000000 ... Vorzeichen isolieren", "   J(0.AVZ)   ", "   E(0.MVZ0)", "   U(0.AVZ)         ;    a_vz := a_vz & 90000000000 ... Vorzeichen isolieren", "   AS(0.BVZ)", "   U(0.CVZ)         ;    c_vz := a_vz - b_vz", "   XG(0.Y)", "", "   (1.Y1)J(0.BMAN)  ; y1) Multiplikation:", "   TI7+(0.AMAN)", "   XU(0.MULTF)", "   U(0.CMAN)        ;    c_man := a_man * b_man", "   J(0.AEXP)", "   A(0.BEXP)", "   ABS50            ;    c_exp := a_exp + b_exp - 50", "   U(0.CEXP)", "", "   X(1.NRM)   ", "", "", "   ", "   (1.Y2)J(0.BMAN)  ; y2) Division:", "   TI7+(0.AMAN)", "   XU(0.DIVF)", "   JK8", "   U(0.CMAN)        ;    c_man := a_man / b_man", "   J(0.AEXP)", "   AS(0.BEXP)", "   AB51             ;    c_exp := a_exp - b_exp + 51", "   U(0.CEXP)", "", "   X(1.NRM)   ", "", "", "", "", "; Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(0.MULTF)", "   UB(ADR)+65)", "   (0.M.1K)             ; jump addresses", "   (0.M.2K)", "   (0.M.3K)", "   (0.M.4K)", "   (0.M.5K)", "   (0.M.6K)", "   (0.M.7K)", "   (0.M.8K)", "   UB(ADR)+(0.MULTF))   ; program in the drum store:", "   TI8+(0.M.1)          ;    program transfer      MR = AC (b)", "   TI(0.M.1K)+(0.M.2)   ;    to the core store", "   TI(0.M.2K)+(0.M.3)", "   TI(0.M.3K)+(0.M.4)", "   TI(0.M.4K)+(0.M.5)", "   UKC(0.M.5K)          ;            AC = 0;", "   XK(0.M.1K)           ;            goto prog in core store", "   (0.M.1)Z1YAMK7       ; program in the core store:   while (MR[T1] != 0) {AC += MD; MR--;};", "   (0.M.2)XBRV(0.M.3K)-9 ;           multiplication: do 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", "   (0.M.3)Z1YAMK7       ;            while (MR[T1] != 0) {AC += MD; MR--;};", "   (0.M.4)XK(0.M.5K)    ;            goto (5)  // needed to stop XB instruction!!!", "   (0.M.5)XK9           ;            return;", "", "", "", "", "; Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(0.DIVF)", "   UB(ADR)+65)", "   (0.D.1K)             ; jump addresses", "   (0.D.2K)", "   (0.D.3K)", "   (0.D.4K)", "   (0.D.5K)", "   (0.D.6K)", "   (0.D.7K)", "   UB(ADR)+(0.DIVF))   ; program in the drum store:", "   TI8+(0.D.1)         ; program transfer      MR = AC (b)", "   TI(0.D.1K)+(0.D.2)  ; to the core store", "   TI(0.D.2K)+(0.D.3)", "   TI(0.D.3K)+(0.D.4)", "   TI(0.D.4K)+(0.D.5)", "   TI(0.D.5K)+(0.D.6)", "   UK(0.D.6K)", "   JK9                 ;            put return jump (RS) in (7)", "   UKC(0.D.7K)", "   JK8                 ;             AC := MR", "   NRV", "   NRV                 ;            ignore the exponent digits", "   XK(0.D.1K)          ;            goto prog in core store", "   (0.D.1)XBLV(0.D.2K)-10   ; program in the core store:   do 10 times {exec(4); AC/MR <<= 4;}", "   (0.D.2)XUK(0.D.4K)       ;            division          ", "   (0.D.3)XK(0.D.7K)        ;            goto (7) // needed to stop XB instruction!!!", "   (0.D.4)Z2XB(0.D.6K)+0    ;            while (AC >= MD) exec(6)", "   (0.D.5)XK9               ;            return", "   (0.D.6)Z2ASWK7           ;            if (AC >= MD) {AC -= MD; MR++;}", "   (0.D.7)N0                ;            return jump is stored here                  ", "", "", "", "", "", "", "", ";===================================================================", "; ", "; Print program for floating point numbers for the Mailuefterl computer", ";", ";===================================================================", "; Written in 2008 and 2017 by Norbert Kehrer (http://members.aon.at/nkehrer)", "; as a replacement for Peter Lucas' package \"Druckprogramm für ", '; Gleitkommazahlen" from 1959, for which I could', "; nor locate the source code nor a binary version. But it did exist,", "; as Peter Lucas mentioned it in his diploma thesis.", "; Peter managed to implement the routines in only 76 instructions.", "; I needed much more.", ";===================================================================", ";", "; The number to be printed is expected in AC.", ";", "; Subroutine calls:", ";", ";    Print number:  XU(PRINT) or XU(D)", ";    New Line:      XU(NL) or XU(WR)", ";", ";===================================================================", "", "", "; Ausdrucken einer Gleitkommazahl", ";", ";    Eingabeparameter:   AC   Zahl", "", "(D)N", "(PRINT)U(0.SAVEAC)   ; Zahl sichern", "   JK9", "   U(0.P.RET)        ; Rücksprungadresse sichern", "   J(0.SAVEAC)", "   U(0.AVZ)          ; Trennen von Mantisse und Exponent: a_vz setzen", "   EB99", "   U(0.AEXP)         ;    a_exp := AC & 99", "   J(0.AVZ)", "   E(0.MMA0)   ", "   U(0.AMAN)         ;    a_man := AC & 9999999900", "   JK0", "   UK10              ; Leerzeichen ausgeben", "   J(0.FIGRS)", '   UK10              ; "Figures shift" ausgeben', "   J(0.SAVEAC)", "   Z3X(0.P.1)        ; Wenn Zahl positiv, weiter zur Ausgabe eines Leerzeichens", "   J(0.MINUS)", '   UK10              ; sonst "-" ausgeben', "   X(0.P.2)          ; und weiter", "   (0.P.1)JK0", "   UK10              ; Leerzeichen ausgeben", "   (0.P.2)J(0.AMAN)", "   ABS1", "   Z3X(0.P.21)       ; Wenn Zahl == 0,", "   J(0.ZERO)", '   UK10              ; dann "0" ausgeben', "   JK0", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "", "   X(0.P.DONE)       ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre, und return", "", "   (0.P.21)J(0.AEXP) ; Zahl nicht 0, also weiter", "   ABS59", "   Z3X(0.P.WISS)     ; Wenn Exponent > 8, gehe zu wiss.Format", "   J(0.AEXP)", "   ABS42", "   Z4X(0.P.WISS)     ; Wenn Exponent < -8, gehe zu wiss.Format", "   J(0.AEXP)", "   ABS51", "   Z4X(0.P.NEGEXP)   ; Wenn Exponent < 0, gehe zu neg. Exponten ohne Exponentenausgabe", "", "   ; sonst:", "", "   ; ****** Zahl mit positivem Exponenten ohne Exponentenausgabe:", "", "   J(0.AMAN)", "   NL                   ; AC einmal nach links shiften, um Vorzeichenstelle zu übergehen", "   UK8                  ; MR := AC", "", "   J(0.AEXP)", "   ABS51", "   U(0.TEMP1)           ; temp1 := a_exp - 51", "", "   ABC8", "   U(0.TEMP)            ; temp := 8", "", "   ABC0", "   U(0.AUSG)            ; ausg := 0000...", "", "   (0.P.L1)J(0.TEMP1)   ; loop:", "   Z3X(0.P.L11)         ;    if temp1 < 0, Komma setzen:", "   J(0.AUSG)", "   NL                   ;       AC = ausg << 4", "   I (0.MBIN0)", "   D (0.MBIN2)", "   U (0.AUSG)           ;       ausg := (AC & 0xfffffffffff0) | 2", "   ABC 99", "   U(0.TEMP1)           ;       temp1 := 99, d.h. Komma ist gesetzt worden. Jetzt nicht mehr setzen.", "   (0.P.L11)J(0.AUSG)   ;    endif", "   NLV                  ;    AC/MR <<= 4", "   U(0.AUSG)", "   J(0.TEMP1)", "   ABS1", "   U(0.TEMP1)           ;    temp1--", "   J(0.TEMP)", "   ABS1", "   U(0.TEMP)            ;    temp--", "   Z3X(0.P.L1)          ; end loop, when temp < 0", "", "", "                        ; nach rechts schieben, sodass die hintenstehenden Nuller weg sind, aber höchstens so weit, dass alle stellen lt. Exponent drinnen sind (Nuller bei 10, 20 etc. sollen bleiben)", "   J(0.AUSG)", "   D(0.MBINTOP9)        ; Vorzeichenstelle auf 9 setzen, damit die Schleife sicher stoppt", "   UK8                  ; MR := ausg mit oberster Tetrade auf 9 gesetzt", "   ABC59", "   AS(0.AEXP)", "   UK7                  ; MD := 59 - exp ... maximale Rechtsshifts (Trailing zeroes bei 10, 100, ...)", "   JK8                  ; AC wieder herstellen", "   (0.P.L2)Z1X(0.P.L2E) ; loop, while lowest digit of AC == 0", "   NR                   ;       AC >>= 4", "   UK8                  ;       MR := AC", "   JK7", "   ABS1", "   UK7                  ;       MD--", "   JK8                  ;       AC wieder herstellen", "   Z8X(0.P.L2E)         ;       Schleife vorzeitig beenden, wenn maximale Shift-Zahl überschritten", "   X(0.P.L2)            ; end loop", "   (0.P.L2E)U(0.AUSG)", "", "                        ; wieder nach links schieben, und rechts mit Blanks auffüllen", "   OASK6", "   UK8                  ; MR := binär 0", "   J(0.AUSG)", "   (0.P.L3)NLV          ; loop: AC/MR <<= 4", "   Z4X(0.P.L3E)", "   X(0.P.L3)            ; end loop, until T11 of AC >=9", "   (0.P.L3E)NLV         ; AC/MR <<= 4", "   U(0.AUSG)", "", "   J(0.AUSG)", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   X(0.P.DONE)          ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre, und return", "   ", "", "   ; ****** Zahl mit negativem Exponenten ohne Exponentenausgabe:", "", "   (0.P.NEGEXP)J(0.AMAN) ; nach rechts schieben, sodass die hintenstehenden Nuller weg sind", "   D(0.MBINTOP9)         ; Vorzeichenstelle auf 9 setzen, damit die Schleife sicher stoppt", "   NR", "   NR                    ; 2 Mal nach rechts, damit der Exponent weg ist", "   UK7                   ; MD := AC, AC in MD sichern", "   ABC0", '   U(0.TEMP)             ; temp := 0 (counter für Anzahl von "trailing zeroes")', "   JK7                   ; AC zurückholen", "   UK8                   ; MR := AC", "   (0.P.NEL1)Z1X(0.P.NEL1E)   ; loop, while lowest digit of AC == 0 (AC is held in MR, and check is for T1 of MR)", "   NR                    ;    AC >>= 4", "   UK7                   ;    MD := AC", "   J(0.TEMP)", "   AB1", '   U(0.TEMP)             ;    temp++ (counter für Anzahl von "trailing zeroes")', "   JK7                   ;    AC := MD", "   UK8                   ;    MR := AC", "   X(0.P.NEL1)           ; end loop", "   (0.P.NEL1E)U(0.AUSG)", "   J(0.AEXP)", "   A(0.TEMP)", "   ABS50                 ; AC := a_exp + temp - 50", "   Z4X(0.P.WISS)         ; wenn trailing_zeroes > -a_exp, wiss. Format nehmen (sonst Verlust Genauigkeit im Ausdruck)", "   J(0.DOT)              ; sonst:", "   UKPP10                ; Dezimalpunkt ausgeben, Q im AC löschen, dann temp Nuller und den Rest aus der Mantisse", "   J(0.AMAN)", "   NL", "   UK8                   ; MR := a_man << 4 (Vorzeichenstelle wegschieben)", "   ABC0", "   U(0.AUSG)             ; ausg := 00000000000", "   J(0.TEMP)", "   U(0.TEMP1)            ; temp1 := trailing_zeroes", "   ABC58", "   A(0.AEXP)", "   ABS100", "   U(0.TEMP)             ; temp := 58 + a_exp - 100 (Anzahl nötiger Shifts)", "   ABC58", "   AS(0.AEXP)", "   AS(0.TEMP1)", "   U(0.TEMP1)            ; temp1 := 58 - a_exp - trailing_zeroes ... Anzahl zu druckender Stellen merken", "   (0.P.NEL2)J(0.AUSG)   ; loop", "   NLV", "   U(0.AUSG)             ;    ausg := ausg/MR << 4", "   J(0.TEMP)", "   ABS1", "   U(0.TEMP)             ;    temp--", "   Z3X(0.P.NEL2)         ; endloop while temp >= 0", "   J(0.TEMP1)", "   UK8                   ; MR := temp1 (Anzahl zu druckender Stellen)", "   J(0.AUSG)             ; AC := ausg", "   NL", "   NL                    ; noch 2 Shifts um den Exponenten zu übergehen, sodass Zahl ganz links im AC steht", "   (0.P.NEL3)ULMK10      ; loop: Ausgeben einer Ziffer, AC <<= 4, MR--", "   Z1X(0.P.NEL3)         ; end loop, until MR >= 0", "   ABC8", "   AS(0.TEMP1)", "   UK8                   ; MR := 8 - temp1 (Anz. gedruckter Stellen) ... trailing blanks zum Auffüllen hinten", "   ABS1", "   Z4X(0.P.DONE)         ; fertig, wenn MR < 1", "   JK0                   ; Sonst AC = binär 0 (Blank)", "   (0.P.NEL4)UMK10       ; loop: Ausgeben eines Blanks, MR--", "   Z1X(0.P.NEL4)         ; end loop, until MR >= 0", "", "   (0.P.DONE)JK0", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   X (0.P.RET)           ; Return", "", "", "   ; ****** Ausgabe im wissenschaftlichen Format:", "", "   (0.P.WISS)J(0.DOT)", "   UKPP10                ; Dezimalpunkt ausgeben, Q im AC löschen", "   J(0.SAVEAC)           ; Zahl in AC laden", "   NL                    ; AC um 1 Stelle shiften, um Vorzeichen zu überspringen", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   J(0.LETRS)", '   UK10                  ; "Letters shift" ausgeben', "   J(0.LETTE)", '   UK10                  ; "E" ausgeben', "   J(0.FIGRS)", '   UK10                  ; "Figures shift" ausgeben', "", "   J(0.AEXP)", "   ABS50", "   Z3X(0.P.4)            ; Wenn Exponent >= 0, gehe zu (4)", "   U(0.TEMP)             ; sonst Betrag des (negativen) Exponenten ermitteln", "   ACS(0.TEMP)", "   U(0.TEMP)             ; und merken in temp", "   J(0.MINUS)", '   UK10                  ; "-" ausgeben', "   J(0.TEMP)             ; Exponenten (Betrag) wieder holen", "   X(0.P.5)", "   (0.P.4)U(0.TEMP)      ; Exponenten merken in temp", "   J(0.PLUS)", '   UK10                  ; "+" ausgeben', "   J(0.TEMP)             ; Exponenten wieder holen", "   (0.P.5)NL             ; 9 Mal shiften, sodass 1. Ziffer d. Exp. in Ausgabeposition", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   (0.P.RET)N            ; Return", "", "", "   ; ****** Unterprogramm zur Ausgabe einer einzelnen Ziffer, die in der obersten Tetrade von AC steht", "", "   (0.EMITDIGIT)Z3X(0.ED.DOT)   ; AC <= dez 0 (bin 3)", "   (0.ED.NORM)NPP               ; Q im AC löschen", "   ULK10                        ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XK9", "", "   (0.ED.DOT)U(0.AUSG)", "   OA(0.BIN900)                 ; AC := AC + 0x900... binär  (Oberste Stelle ist dann dez. 9 bei Komma)", "   Z4X(0.ED.NODOT)              ; wenn T11 des AC >= dez 9, ist es normal (Nuller)", "   OAS(0.BIN600)                ; AC := AC - 0x600... binär  (Oberste Stelle ist dann dez. 0 bei Blank)", "   Z3X(0.ED.NODOT)              ; wenn T11 des AC <= dez 0, ist es normal (Blank)", "   J(0.DOT)                     ; sonst Komma", "   UKPP10                       ; Dezimalpunkt ausgeben, Q im AC löschen", "   J(0.AUSG)", "   NL                           ; AC links shiften für nächste Ziffer", "   XK9                          ; Return", "", "   (0.ED.NODOT)J(0.AUSG)   ", "   X(0.ED.NORM)", "", "", "", "; Zeilenumbruch", ";", ";    Eingabeparameter:   keine", "", "(WR)N", "(NL)J(0.CR)", "   UK10", "   J(0.LF)", "   UK10      ; print CR/LF", "   XK9       ; return", "", "", "", "", ";===================================================================", "; Variablen und Konstanten für Arithmetik und Druckprogramm:", ";===================================================================", "", "   (0.AVZ)N     ; a Vorzeichen", "   (0.AMAN)N    ; a Mantisse", "   (0.AEXP)N    ; a Exponent", "   (0.BVZ)N     ; b Vorzeichen", "   (0.BMAN)N    ; b Mantisse", "   (0.BEXP)N    ; b Exponent", "   (0.CVZ)N     ; c Vorzeichen", "   (0.CMAN)N    ; c Mantisse", "   (0.CEXP)N    ; c Exponent", "", "   (0.OPA)N     ; Operand A", "   (0.OPB)N     ; Operand B", "", "   (0.TEMP)N    ; Hilfsvariable, temporärer Zwischenspeicher", "   (0.TEMP1)N   ; Hilfsvariable, temporärer Zwischenspeicher", "   (0.AUSG)N    ; Hilfsvariable für Ausgabezwischenspeicherung", "   (0.SAVEAC)   ; Hilfsvariable für Akkuzwischenspeicherung", "", "   (0.X)N       ; Sprungziel x", "   (0.Y)N       ; Sprungziel y", "", "", "; Konstanten", "", "   (0.MVZ0)PB12:3:3:3:3:3:3:3:3:3:3              ; Maske zum Löschen von allem außer Vorzeichen", "   (0.MMA0)PB12:3:12:12:12:12:12:12:12:12:3:3    ; Maske zum Nullsetzen von allem außer Mantisse und Vorzeichen + machen", "", "   (0.MBIN0)PB15:15:15:15:15:15:15:15:15:15:15:0 ; Maske zum binären Nullsetzen der niedrigstwertigen Tetrade", "   (0.MBIN1)PB0:0:0:0:0:0:0:0:0:0:0:1            ; Maske zum binären erzeugen von 1 in der niedrigstwertigen Tetrade", "   (0.MBIN2)PB0:0:0:0:0:0:0:0:0:0:0:2            ; Maske zum binären erzeugen von 2 in der niedrigstwertigen Tetrade", "   (0.MBINTOP9)PB0:15:0:0:0:0:0:0:0:0:0:0        ; Maske zum binären erzeugen von 9 in der obersten Tetrade", "", "   (0.BIN900)PB0:9:0:0:0:0:0:0:0:0:0:0           ; Binär 9000...", "   (0.BIN600)PB0:6:0:0:0:0:0:0:0:0:0:0           ; Binär 6000...", "", "   (0.LETRS)   PB 0:13:0:0:0:0:0:0:0:0:0:0       ; letters shift (13 = 01101)", "   (0.FIGRS)   PB 0:14:0:0:0:0:0:0:0:0:0:0       ; figures shift (14 = 01110)", '   (0.MINUS)   PB 1:12:0:0:0:0:0:0:0:0:0:0       ; "-" (28 = 11100)', '   (0.PLUS)    PB 1:3:0:0:0:0:0:0:0:0:0:0        ; "+" (19 = 10110)', '   (0.DOT)     PB 1:13:0:0:0:0:0:0:0:0:0:0       ; "." (29 = 11101)', '   (0.LETTE)   PB 0:6:0:0:0:0:0:0:0:0:0:0        ; "E" (6 = 00110)', '   (0.ZERO)    PB 0:3:0:0:0:0:0:0:0:0:0:0        ; "0" (3 = 00011)', "   (0.CR)      PB 6:2:0:0:0:0:0:0:0:0:0:0        ; Carriage return", "   (0.LF)      PB 6:1:0:0:0:0:0:0:0:0:0:0        ; Line feed", ""], prog_root = [";===================================================================", "; ", "; Square root function for the Mailuefterl computer", ";", ";===================================================================", "; Written in the summer of 1959 by Peter Lucas as part of his", "; diploma thesis at the Technical University of Vienna.", "; Here is the exact reference:", '; Lucas P.: "Zur Programmierung elektronischer Rechenmaschinen",', "; Staatspruefungsarbeit am Institut fuer Nachrichtentechnik II der", "; Technischen Hochschule Wien, Vienna, October 1959.", '; Translation of the  title: "On the programming of electronic', '; calculating machines".', ";===================================================================", "; Typed in by Norbert Kehrer (http://members.aon.at/nkehrer)", "; in July 2017.", ";", "; Assemble and start with X0000 on the control desk", ";===================================================================", "", "", "   UB(ADR)+0000)   ; Target address = 0000 --\x3e Start with X 0000", "   (START)", "", "", "   UB(ADR)+(START))                                                                                          ", "", "%TEST", "   J (1/0)", "   U (0.N)          ; n := 1", "   (1) J (0.N)      ; loop start", "   XU (PRINT)       ;    print n", "   J (0.N)", "   XU (SQR)", "   XU (PRINT)       ;    print sqr(n)", "   XU(NL)           ;    print CR/LF", "   J (0.N)", "   TI 7 + (1/0)", "   XU (+)", "   U (0.N)          ;    n := n + 1.0", "   X (1)            ; goto loop start", "   N.", "", "   (0.N)  N", "   (1/0)  PB6:3:4:3:3:3:3:3:3:3:8:4", "", "", "", "%SQUARE_ROOT", "", "; Seite 68:", ";", "; Quadratwurzel nach Newton (Beispiel zu 4,22)", "; -------------------------", ";", "; Hilfszellen: alle Hilfszellen befinden sich im", ";              Kernspeicher", ";", ";                  Inhalt  |  symb. Adr.", ";                  --------+------------", ";                  x       |    (x)", ";                  yn      |    (yn)", ";                  yn-1    |    (yn-1)", ";                  s       |    (s)", ";                  v       |    (v)", ";", "; Befehlsliste:", "", "(SQR)", "   UB(ADR)+80)         ; Hilfszellen im Kernspeicher:", "   (x)", "   (yn)", "   (yn-1)", "   (s)", "   (v)", "", "   UB(ADR)+(SQR))      ; Programm im Trommelspeicher:", "", "   UK(x)", "   Z4N.                ; x < 0 ?", "   JK9", "   U (r)               ; Rückkehradresse nach (r)", "   JK (x)", "   EB 99", "   ABS 51              ; x <= 1 ?", "   Z4UB (v) + 1        ; v := 1  wenn x >  1", "   Z4X (1)", "   UB (v) + 0          ; v := 0  wenn x <= 1", "   JK (x)", "   TI 7 + (1/0)", "   XU (:)              ; x := 1/x", "   UK (x)", "   (1) JK (x)", "   UK (yn)             ; yn := x", "   (2) JK (yn)", "   UK (yn-1)", "   UK 7", "   JK (x)", "   XU (:)", "   UK 7", "   JK (yn)", "   XU (+)", "   TI 7 + (0,5)", "   XU (.)", "   UK (yn)             ; yn := 0,5(yn + x/yn)", "   UK 7", "   JK (yn-1)", "   XU (-)", "   Z4X (2)", "   ASKC 6", "   Z4X (2)             ; yn /= yn-1 ?", "   JK (v)", "   UK 8", "   Z1X (3)             ; v /= 0 ?", "   JK (yn)", "   TI 7 + (1/0)", "   XU (:)", "   UK (yn)             ; yn := 1/yn", "   (3) JK (yn)", "   (r) N", "   (0,5) PB6:3:8:3:3:3:3:3:3:3:8:3", "   (1/0) PB6:3:4:3:3:3:3:3:3:3:8:4", "", "", "", "", "", "", ";===================================================================", "; ", "; Floating point operations for the Mailuefterl computer", ";", ";===================================================================", "; Written in 2008 and 2017 by Norbert Kehrer (http://members.aon.at/nkehrer)", "; as a replacement for Peter Lucas' package \"Unterprogramm für die ", '; arithmetischen Gleitkommaoperationen" from 1959, for which I could', "; nor locate the source code nor a binary version. But it did exist,", "; as Peter Lucas mentioned it in his diploma thesis, and he also", "; described his implementation in the form of a flow chart on page 36.", "; It is really a pity, he did not add the program listing. But I tried", "; to code as close as possible to his algorithms documented in the flow", "; chart. Peter managed to implement the routines in only 152 instructions.", "; I needed more. ", ";===================================================================", "; ", "; Floating point numbers are represented as follows:", "; Tab    T11    T10 ... T3   T2 T1", "; 0110   Sign    Mantissa    Exponent (bias=50)", ";===================================================================", ";", "; The number zero is represented as zero mantissa with a zero in the", "; exponent also (0 x 10^-50, i.e., Mant=000000000 Exp=00).", ";===================================================================", ";", "; The subroutines for the arithemtic operations in this package always", "; expect the first operand in AC and the second operand in MD.", "; ", "; Subroutine calls:", ";", ";    Addition:        XU(+)", ";    Subtraction:     XU(-)", ";    Multiplication:  XU(X) or XU(.)", ";    Division:        XU(/) or XU(:)", ";", ";===================================================================", "", "", "%FLOAT", "", "", "; Gleitkommaaddition:", "", "(+)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X2)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x2", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommasubtraktion:", "", "(-)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X1)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x1", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommamultiplikation:", "", "(X)N", "(.)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X3)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x3", "   JB(1.Y1)", "   U(0.Y)        ; Sprungziel y = y1", "   X(1.TR)       ; go to TRENNEN", "", "", "; Gleitkommadivision:", "", "(/)N", "(:)U(0.AVZ)      ; AC sichern in a_vz", "   JB(1.X3)      ; JB nehmen ist wichtig, weil das die 4 Nibbles der Adresse nimmt aber die anderen Bits auf setzt (kein G,H oder K)", "   U(0.X)        ; Sprungziel x = x3", "   JB(1.Y2)", "   U(0.Y)        ; Sprungziel y = y2", "   X(1.TR)       ; go to TRENNEN", "", "   (1.TR)JK9     ; TR) Trennen von Mantisse und Exponent", "   U(1.RET)      ;    Rücksprungadresse sichern", "   J(0.AVZ)      ;    Trennen 1. Operand:", "   EB99", "   U(0.AEXP)     ;    a_exp := AC & 99", "   J(0.AVZ)", "   E(0.MMA0)   ", "   U(0.AMAN)     ;    a_man := AC & 9999999900 ... Vorzeichen wird auch positiv gemacht", "   JK7           ;    AC := MD", "   U(0.BVZ)      ;    Trennen 2. Operand:", "   EB99", "   U(0.BEXP)     ;    b_exp := AC & 99", "   J(0.BVZ)", "   E(0.MMA0)   ", "   U(0.BMAN)   ;    b_man := AC & 9999999900 ... Vorzeichen wird auch positiv gemacht", "", "   XG(0.X)      ; x) Sprung zu x", "   N", "", "   (1.X1)J(0.MVZ0)   ; x1) b := -b, für Subtraktion", '   UK8               ;    MR := "-"', "   J(0.BVZ)   ", "   Z3X(1.X1.1)       ;    wenn b_vz positiv, tue nichts", "   ABC 0", '   UK8               ;    sonst MR := "+"   ', "   (1.X1.1)JK8", "   U(0.BVZ)          ;    b_vz := MR", "", "   (1.X2)J(0.AEXP)   ; x2) Addition:", "   AS(0.BEXP)", "   Z3X(1.1)          ;    wenn (a_exp >= b_exp), Reihenfolge OK (gehe zu 1.1)", "   J(0.AEXP)         ;    sonst: Tauschen von a und b - Exponent", "   TI8+(0.BEXP)", "   TN8+(0.AEXP)", "   U(0.BEXP)", "   J(0.AMAN)         ;   Tauschen von a und b - Mantisse", "   TI8+(0.BMAN)", "   TN8+(0.AMAN)", "   U(0.BMAN)", "   J(0.AVZ)          ;   Tauschen von a und b - Vorzeichen", "   TI8+(0.BVZ)", "   TN8+(0.AVZ)", "   U(0.BVZ)", "   (1.1)J(0.AEXP)    ;    weiter:", "   AS(0.BEXP)", "   UK8               ;    MR := a_exp - b_exp   (Exponentendifferenz)", "   JM(0.BMAN)        ;    AC := b_man,  MR := MR - 1", "   (1)Z7X(2)         ;    Loop: if MR < 0, leave loop", "   NMR               ;          MR := MR - 1, AC := AC >> 1", "   X(1)              ;    End Loop", "   (2)U(0.OPB)       ;    verschobene b_man in op_b speichern", "   J(0.AMAN)", "   U(0.OPA)          ;    a_man in op_a speichern", "   ABC2", "   UK8               ;    MR := 2 ... MR dient als Kennzeichen für 2 negative Operanden. Dann addieren wir einfach die Mantissen und machen das Ergebnis negativ", "   J(0.AVZ)          ;    Vorzeichenbehaftete Operanden bilden:", "   Z3X(3)            ;    wenn a positiv, weiter", "   ACSM(0.OPA)", "   U(0.OPA)          ;    sonst op_a := -op_a und MR--", "   (3)J(0.BVZ)", "   Z3X(4)            ;    wenn b positiv, weiter", "   ACSM(0.OPB)", "   U(0.OPB)          ;    sonst op_b := -op_b und MR--", "   (4)NC", "   U(0.CVZ)          ;    c_vz auf + (Default-Annahme)", "   Z1X(4.1)          ;    wenn MR > 0, d.h. mind. 1 Operand positiv, dann OK", "   ACS(0.OPA)        ;    sonst mache beide Operanden wieder positiv (und setze dann am Ende das Ergebnis auf negativ)", "   U(0.OPA)", "   ACS(0.OPB)", "   U(0.OPB)", "   (4.1)J(0.OPA)", "   A(0.OPB)          ;    AC := op_a + op_b", "", "   Z4X(5)            ;    wenn negativ, gehe zu 5", "   Z3X(6)            ;    wenn positiv und zwar ohne Überlauf, gehe zu 6 (nichts zu tun)", "", "   NR                ;    sonst (positiv aber mit Überlauf T11 >0 und <9) korrigiere Überlauf:", "   U(0.CMAN)         ;    c_man := AC >> 1", "   J(0.AEXP)", "   AB1", "   U(0.CEXP)         ;    c_exp := a_exp + 1", "   X(7)              ;    und weiter bei 7", "", '   (5)U(0.CVZ)       ;    negatives Ergebnis: c_vz auf "-" setzen', "   U(0.OPA)", "   ACS(0.OPA)        ;    AC := -AC", "   U(0.CMAN)         ;    c_man := AC", "   J(0.AEXP)", "   U(0.CEXP)         ;    c_exp := a_exp", "   X(7)              ;    weiter bei 7", "", "   (6)U(0.CMAN)      ;    positives Ergebnis ohne Überlauf: c_man := AC", "   J(0.AEXP)", "   U(0.CEXP)         ;    c_exp := a_exp", "", "   (7)Z1X(7.1)       ;    wenn MR > 0, d.h. mind. 1 Operand positiv, dann alles OK", "   J(0.MVZ0)         ;    sonst waren beide Operanden negativ, also setze das Ergebnis auf negativ", '   U(0.CVZ)          ;    c_vz := "-"', "   (7.1)N", "", "   (1.NRM)J(0.CEXP)  ; NRM) Normalisierung Ergebnis", "   UK8               ;    MR := c_exp", "   ABC8", "   UK7               ;    MD := 8 (maximum number of shifts to normalize)", "   J(0.CMAN)         ;    AC := c_man", "   (8)NML            ;    AC := AC << 1, MR := MR - 1", "   U(0.TEMP)         ;    save AC in temp", "   JK7               ;   ", "   ABS1", "   UK7               ;    MD := MD - 1", "   J(0.TEMP)         ;    restore AC from temp", "   Z8X(9)            ;    if MD < 0, result is zero (8 shifts have been done, all digits were zero, so stop now) ", "   Z3X(8)            ;    if sign of AC == 0, goto shift loop", "   NWR               ;    AC := AC >> 1, MR := MR + 1", "   U(0.CMAN)         ;    c_man := AC", "   JK8", "   U(0.CEXP)         ;    c_exp := MR", "   X(10)", "", "   (9)NC             ;    result is zero", "   U(0.CMAN)         ;    c_man := 0", "   U(0.CEXP)         ;    c_exp := 0", "   ", "   (10)J(0.CMAN)     ; VZ) Vorzeichen, Mantisse und Exponent zu einer Ergebniszahl zusammenbauen", "   E(0.MMA0)", "   U(0.CMAN)         ;    c_man := c_man & 9999999900 ... Mantisse isolieren Vorzeichen wird auch positiv gemacht", "   ABS1", "   Z3X(1.NONZERO)    ;    Wenn c_man !== 0, dann weiter", "   ABC0              ;    sonst Ergebnis ist 0, ", "   X(1.RET)          ;    und zurückspringen", "   (1.NONZERO)J(0.CVZ)", "   E(0.MVZ0)", "   U(0.CVZ)          ;    c_vz := c_vz & 90000000000 ... Vorzeichen isolieren", "   J(0.CEXP)", "   EB99              ;    AC := c_exp & 99 ... Exponenten isolieren und in den AC", "   A(0.CMAN)         ;    AC := AC + c_man ... Mantisse dazu", "   A(0.CVZ)          ;    AC := AC + c_vz  ... Vorzeichen dazu", "", "   (1.RET)N          ; Return", "", "", "   (1.X3)J(0.BVZ)   ; x3) Vorzeichenbestimmung:", "   E(0.MVZ0)", "   U(0.BVZ)         ;    b_vz := b_vz & 90000000000 ... Vorzeichen isolieren", "   J(0.AVZ)   ", "   E(0.MVZ0)", "   U(0.AVZ)         ;    a_vz := a_vz & 90000000000 ... Vorzeichen isolieren", "   AS(0.BVZ)", "   U(0.CVZ)         ;    c_vz := a_vz - b_vz", "   XG(0.Y)", "", "   (1.Y1)J(0.BMAN)  ; y1) Multiplikation:", "   TI7+(0.AMAN)", "   XU(0.MULTF)", "   U(0.CMAN)        ;    c_man := a_man * b_man", "   J(0.AEXP)", "   A(0.BEXP)", "   ABS50            ;    c_exp := a_exp + b_exp - 50", "   U(0.CEXP)", "", "   X(1.NRM)   ", "", "", "   ", "   (1.Y2)J(0.BMAN)  ; y2) Division:", "   TI7+(0.AMAN)", "   XU(0.DIVF)", "   JK8", "   U(0.CMAN)        ;    c_man := a_man / b_man", "   J(0.AEXP)", "   AS(0.BEXP)", "   AB51             ;    c_exp := a_exp - b_exp + 51", "   U(0.CEXP)", "", "   X(1.NRM)   ", "", "", "", "", "; Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(0.MULTF)", "   UB(ADR)+65)", "   (0.M.1K)             ; jump addresses", "   (0.M.2K)", "   (0.M.3K)", "   (0.M.4K)", "   (0.M.5K)", "   (0.M.6K)", "   (0.M.7K)", "   (0.M.8K)", "   UB(ADR)+(0.MULTF))   ; program in the drum store:", "   TI8+(0.M.1)          ;    program transfer      MR = AC (b)", "   TI(0.M.1K)+(0.M.2)   ;    to the core store", "   TI(0.M.2K)+(0.M.3)", "   TI(0.M.3K)+(0.M.4)", "   TI(0.M.4K)+(0.M.5)", "   UKC(0.M.5K)          ;            AC = 0;", "   XK(0.M.1K)           ;            goto prog in core store", "   (0.M.1)Z1YAMK7       ; program in the core store:   while (MR[T1] != 0) {AC += MD; MR--;};", "   (0.M.2)XBRV(0.M.3K)-9 ;           multiplication: do 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", "   (0.M.3)Z1YAMK7       ;            while (MR[T1] != 0) {AC += MD; MR--;};", "   (0.M.4)XK(0.M.5K)    ;            goto (5)  // needed to stop XB instruction!!!", "   (0.M.5)XK9           ;            return;", "", "", "", "", "; Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(0.DIVF)", "   UB(ADR)+65)", "   (0.D.1K)             ; jump addresses", "   (0.D.2K)", "   (0.D.3K)", "   (0.D.4K)", "   (0.D.5K)", "   (0.D.6K)", "   (0.D.7K)", "   UB(ADR)+(0.DIVF))   ; program in the drum store:", "   TI8+(0.D.1)         ; program transfer      MR = AC (b)", "   TI(0.D.1K)+(0.D.2)  ; to the core store", "   TI(0.D.2K)+(0.D.3)", "   TI(0.D.3K)+(0.D.4)", "   TI(0.D.4K)+(0.D.5)", "   TI(0.D.5K)+(0.D.6)", "   UK(0.D.6K)", "   JK9                 ;            put return jump (RS) in (7)", "   UKC(0.D.7K)", "   JK8                 ;             AC := MR", "   NRV", "   NRV                 ;            ignore the exponent digits", "   XK(0.D.1K)          ;            goto prog in core store", "   (0.D.1)XBLV(0.D.2K)-10   ; program in the core store:   do 10 times {exec(4); AC/MR <<= 4;}", "   (0.D.2)XUK(0.D.4K)       ;            division          ", "   (0.D.3)XK(0.D.7K)        ;            goto (7) // needed to stop XB instruction!!!", "   (0.D.4)Z2XB(0.D.6K)+0    ;            while (AC >= MD) exec(6)", "   (0.D.5)XK9               ;            return", "   (0.D.6)Z2ASWK7           ;            if (AC >= MD) {AC -= MD; MR++;}", "   (0.D.7)N0                ;            return jump is stored here                  ", "", "", "", "", "", "", "", ";===================================================================", "; ", "; Print program for floating point numbers for the Mailuefterl computer", ";", ";===================================================================", "; Written in 2008 and 2017 by Norbert Kehrer (http://members.aon.at/nkehrer)", "; as a replacement for Peter Lucas' package \"Druckprogramm für ", '; Gleitkommazahlen" from 1959, for which I could', "; nor locate the source code nor a binary version. But it did exist,", "; as Peter Lucas mentioned it in his diploma thesis.", "; Peter managed to implement the routines in only 76 instructions.", "; I needed much more.", ";===================================================================", ";", "; The number to be printed is expected in AC.", ";", "; Subroutine calls:", ";", ";    Print number:  XU(PRINT) or XU(D)", ";    New Line:      XU(NL) or XU(WR)", ";", ";===================================================================", "", "", "; Ausdrucken einer Gleitkommazahl", ";", ";    Eingabeparameter:   AC   Zahl", "", "(D)N", "(PRINT)U(0.SAVEAC)   ; Zahl sichern", "   JK9", "   U(0.P.RET)        ; Rücksprungadresse sichern", "   J(0.SAVEAC)", "   U(0.AVZ)          ; Trennen von Mantisse und Exponent: a_vz setzen", "   EB99", "   U(0.AEXP)         ;    a_exp := AC & 99", "   J(0.AVZ)", "   E(0.MMA0)   ", "   U(0.AMAN)         ;    a_man := AC & 9999999900", "   JK0", "   UK10              ; Leerzeichen ausgeben", "   J(0.FIGRS)", '   UK10              ; "Figures shift" ausgeben', "   J(0.SAVEAC)", "   Z3X(0.P.1)        ; Wenn Zahl positiv, weiter zur Ausgabe eines Leerzeichens", "   J(0.MINUS)", '   UK10              ; sonst "-" ausgeben', "   X(0.P.2)          ; und weiter", "   (0.P.1)JK0", "   UK10              ; Leerzeichen ausgeben", "   (0.P.2)J(0.AMAN)", "   ABS1", "   Z3X(0.P.21)       ; Wenn Zahl == 0,", "   J(0.ZERO)", '   UK10              ; dann "0" ausgeben', "   JK0", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "   UK10              ; Leerzeichen ausgeben", "", "   X(0.P.DONE)       ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre, und return", "", "   (0.P.21)J(0.AEXP) ; Zahl nicht 0, also weiter", "   ABS59", "   Z3X(0.P.WISS)     ; Wenn Exponent > 8, gehe zu wiss.Format", "   J(0.AEXP)", "   ABS42", "   Z4X(0.P.WISS)     ; Wenn Exponent < -8, gehe zu wiss.Format", "   J(0.AEXP)", "   ABS51", "   Z4X(0.P.NEGEXP)   ; Wenn Exponent < 0, gehe zu neg. Exponten ohne Exponentenausgabe", "", "   ; sonst:", "", "   ; ****** Zahl mit positivem Exponenten ohne Exponentenausgabe:", "", "   J(0.AMAN)", "   NL                   ; AC einmal nach links shiften, um Vorzeichenstelle zu übergehen", "   UK8                  ; MR := AC", "", "   J(0.AEXP)", "   ABS51", "   U(0.TEMP1)           ; temp1 := a_exp - 51", "", "   ABC8", "   U(0.TEMP)            ; temp := 8", "", "   ABC0", "   U(0.AUSG)            ; ausg := 0000...", "", "   (0.P.L1)J(0.TEMP1)   ; loop:", "   Z3X(0.P.L11)         ;    if temp1 < 0, Komma setzen:", "   J(0.AUSG)", "   NL                   ;       AC = ausg << 4", "   I (0.MBIN0)", "   D (0.MBIN2)", "   U (0.AUSG)           ;       ausg := (AC & 0xfffffffffff0) | 2", "   ABC 99", "   U(0.TEMP1)           ;       temp1 := 99, d.h. Komma ist gesetzt worden. Jetzt nicht mehr setzen.", "   (0.P.L11)J(0.AUSG)   ;    endif", "   NLV                  ;    AC/MR <<= 4", "   U(0.AUSG)", "   J(0.TEMP1)", "   ABS1", "   U(0.TEMP1)           ;    temp1--", "   J(0.TEMP)", "   ABS1", "   U(0.TEMP)            ;    temp--", "   Z3X(0.P.L1)          ; end loop, when temp < 0", "", "                        ; nach rechts schieben, sodass die hintenstehenden Nuller weg sind, aber höchstens so weit, dass alle stellen lt. Exponent drinnen sind (Nuller bei 10, 20 etc. sollen bleiben)", "   J(0.AUSG)", "   D(0.MBINTOP9)        ; Vorzeichenstelle auf 9 setzen, damit die Schleife sicher stoppt", "   UK8                  ; MR := ausg mit oberster Tetrade auf 9 gesetzt", "   ABC59", "   AS(0.AEXP)", "   UK7                  ; MD := 59 - exp ... maximale Rechtsshifts (Trailing zeroes bei 10, 100, ...)", "   JK8                  ; AC wieder herstellen", "   (0.P.L2)Z1X(0.P.L2E) ; loop, while lowest digit of AC == 0", "   NR                   ;       AC >>= 4", "   UK8                  ;       MR := AC", "   JK7", "   ABS1", "   UK7                  ;       MD--", "   JK8                  ;       AC wieder herstellen", "   Z8X(0.P.L2E)         ;       Schleife vorzeitig beenden, wenn maximale Shift-Zahl überschritten", "   X(0.P.L2)            ; end loop", "   (0.P.L2E)U(0.AUSG)", "", "                        ; wieder nach links schieben, und rechts mit Blanks auffüllen", "   OASK6", "   UK8                  ; MR := binär 0", "   J(0.AUSG)", "   (0.P.L3)NLV          ; loop: AC/MR <<= 4", "   Z4X(0.P.L3E)", "   X(0.P.L3)            ; end loop, until T11 of AC >=9", "   (0.P.L3E)NLV         ; AC/MR <<= 4", "   U(0.AUSG)", "", "   J(0.AUSG)", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XU(0.EMITDIGIT)      ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   X(0.P.DONE)          ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre, und return", "   ", "", "   ; ****** Zahl mit negativem Exponenten ohne Exponentenausgabe:", "", "   (0.P.NEGEXP)J(0.AMAN) ; nach rechts schieben, sodass die hintenstehenden Nuller weg sind", "   D(0.MBINTOP9)         ; Vorzeichenstelle auf 9 setzen, damit die Schleife sicher stoppt", "   NR", "   NR                    ; 2 Mal nach rechts, damit der Exponent weg ist", "   UK7                   ; MD := AC, AC in MD sichern", "   ABC0", '   U(0.TEMP)             ; temp := 0 (counter für Anzahl von "trailing zeroes")', "   JK7                   ; AC zurückholen", "   UK8                   ; MR := AC", "   (0.P.NEL1)Z1X(0.P.NEL1E)   ; loop, while lowest digit of AC == 0 (AC is held in MR, and check is for T1 of MR)", "   NR                    ;    AC >>= 4", "   UK7                   ;    MD := AC", "   J(0.TEMP)", "   AB1", '   U(0.TEMP)             ;    temp++ (counter für Anzahl von "trailing zeroes")', "   JK7                   ;    AC := MD", "   UK8                   ;    MR := AC", "   X(0.P.NEL1)           ; end loop", "   (0.P.NEL1E)U(0.AUSG)", "   J(0.AEXP)", "   A(0.TEMP)", "   ABS50                 ; AC := a_exp + temp - 50", "   Z4X(0.P.WISS)         ; wenn trailing_zeroes > -a_exp, wiss. Format nehmen (sonst Verlust Genauigkeit im Ausdruck)", "   J(0.DOT)              ; sonst:", "   UKPP10                ; Dezimalpunkt ausgeben, Q im AC löschen, dann temp Nuller und den Rest aus der Mantisse", "   J(0.AMAN)", "   NL", "   UK8                   ; MR := a_man << 4 (Vorzeichenstelle wegschieben)", "   ABC0", "   U(0.AUSG)             ; ausg := 00000000000", "   J(0.TEMP)", "   U(0.TEMP1)            ; temp1 := trailing_zeroes", "   ABC58", "   A(0.AEXP)", "   ABS100", "   U(0.TEMP)             ; temp := 58 + a_exp - 100 (Anzahl nötiger Shifts)", "   ABC58", "   AS(0.AEXP)", "   AS(0.TEMP1)", "   U(0.TEMP1)            ; temp1 := 58 - a_exp - trailing_zeroes ... Anzahl zu druckender Stellen merken", "   (0.P.NEL2)J(0.AUSG)   ; loop", "   NLV", "   U(0.AUSG)             ;    ausg := ausg/MR << 4", "   J(0.TEMP)", "   ABS1", "   U(0.TEMP)             ;    temp--", "   Z3X(0.P.NEL2)         ; endloop while temp >= 0", "   J(0.TEMP1)", "   UK8                   ; MR := temp1 (Anzahl zu druckender Stellen)", "   J(0.AUSG)             ; AC := ausg", "   NL", "   NL                    ; noch 2 Shifts um den Exponenten zu übergehen, sodass Zahl ganz links im AC steht", "   (0.P.NEL3)ULMK10      ; loop: Ausgeben einer Ziffer, AC <<= 4, MR--", "   Z1X(0.P.NEL3)         ; end loop, until MR >= 0", "   ABC8", "   AS(0.TEMP1)", "   UK8                   ; MR := 8 - temp1 (Anz. gedruckter Stellen) ... trailing blanks zum Auffüllen hinten", "   ABS1", "   Z4X(0.P.DONE)         ; fertig, wenn MR < 1", "   JK0                   ; Sonst AC = binär 0 (Blank)", "   (0.P.NEL4)UMK10       ; loop: Ausgeben eines Blanks, MR--", "   Z1X(0.P.NEL4)         ; end loop, until MR >= 0", "", "   (0.P.DONE)JK0", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   UK10                  ; Leerzeichen ausgeben für Exponent, der bei wiss. Darstellung wäre", "   X (0.P.RET)           ; Return", "", "", "   ; ****** Ausgabe im wissenschaftlichen Format:", "", "   (0.P.WISS)J(0.DOT)", "   UKPP10                ; Dezimalpunkt ausgeben, Q im AC löschen", "   J(0.SAVEAC)           ; Zahl in AC laden", "   NL                    ; AC um 1 Stelle shiften, um Vorzeichen zu überspringen", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   J(0.LETRS)", '   UK10                  ; "Letters shift" ausgeben', "   J(0.LETTE)", '   UK10                  ; "E" ausgeben', "   J(0.FIGRS)", '   UK10                  ; "Figures shift" ausgeben', "", "   J(0.AEXP)", "   ABS50", "   Z3X(0.P.4)            ; Wenn Exponent >= 0, gehe zu (4)", "   U(0.TEMP)             ; sonst Betrag des (negativen) Exponenten ermitteln", "   ACS(0.TEMP)", "   U(0.TEMP)             ; und merken in temp", "   J(0.MINUS)", '   UK10                  ; "-" ausgeben', "   J(0.TEMP)             ; Exponenten (Betrag) wieder holen", "   X(0.P.5)", "   (0.P.4)U(0.TEMP)      ; Exponenten merken in temp", "   J(0.PLUS)", '   UK10                  ; "+" ausgeben', "   J(0.TEMP)             ; Exponenten wieder holen", "   (0.P.5)NL             ; 9 Mal shiften, sodass 1. Ziffer d. Exp. in Ausgabeposition", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "   NL", "", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   ULK10                 ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "", "   (0.P.RET)N            ; Return", "", "", "   ; ****** Unterprogramm zur Ausgabe einer einzelnen Ziffer, die in der obersten Tetrade von AC steht", "", "   (0.EMITDIGIT)Z3X(0.ED.DOT)   ; AC <= dez 0 (bin 3)", "   (0.ED.NORM)NPP               ; Q im AC löschen", "   ULK10                        ; Ziffer ausgeben, und Links-Shift auf nächste Stelle", "   XK9", "", "   (0.ED.DOT)U(0.AUSG)", "   OA(0.BIN900)                 ; AC := AC + 0x900... binär  (Oberste Stelle ist dann dez. 9 bei Komma)", "   Z4X(0.ED.NODOT)              ; wenn T11 des AC >= dez 9, ist es normal (Nuller)", "   OAS(0.BIN600)                ; AC := AC - 0x600... binär  (Oberste Stelle ist dann dez. 0 bei Blank)", "   Z3X(0.ED.NODOT)              ; wenn T11 des AC <= dez 0, ist es normal (Blank)", "   J(0.DOT)                     ; sonst Komma", "   UKPP10                       ; Dezimalpunkt ausgeben, Q im AC löschen", "   J(0.AUSG)", "   NL                           ; AC links shiften für nächste Ziffer", "   XK9                          ; Return", "", "   (0.ED.NODOT)J(0.AUSG)   ", "   X(0.ED.NORM)", "", "", "", "; Zeilenumbruch", ";", ";    Eingabeparameter:   keine", "", "(WR)N", "(NL)J(0.CR)", "   UK10", "   J(0.LF)", "   UK10      ; print CR/LF", "   XK9       ; return", "", "", "", "", ";===================================================================", "; Variablen und Konstanten für Arithmetik und Druckprogramm:", ";===================================================================", "", "   (0.AVZ)N     ; a Vorzeichen", "   (0.AMAN)N    ; a Mantisse", "   (0.AEXP)N    ; a Exponent", "   (0.BVZ)N     ; b Vorzeichen", "   (0.BMAN)N    ; b Mantisse", "   (0.BEXP)N    ; b Exponent", "   (0.CVZ)N     ; c Vorzeichen", "   (0.CMAN)N    ; c Mantisse", "   (0.CEXP)N    ; c Exponent", "", "   (0.OPA)N     ; Operand A", "   (0.OPB)N     ; Operand B", "", "   (0.TEMP)N    ; Hilfsvariable, temporärer Zwischenspeicher", "   (0.TEMP1)N   ; Hilfsvariable, temporärer Zwischenspeicher", "   (0.AUSG)N    ; Hilfsvariable für Ausgabezwischenspeicherung", "   (0.SAVEAC)   ; Hilfsvariable für Akkuzwischenspeicherung", "", "   (0.X)N       ; Sprungziel x", "   (0.Y)N       ; Sprungziel y", "", "", "; Konstanten", "", "   (0.MVZ0)PB12:3:3:3:3:3:3:3:3:3:3              ; Maske zum Löschen von allem außer Vorzeichen", "   (0.MMA0)PB12:3:12:12:12:12:12:12:12:12:3:3    ; Maske zum Nullsetzen von allem außer Mantisse und Vorzeichen + machen", "", "   (0.MBIN0)PB15:15:15:15:15:15:15:15:15:15:15:0 ; Maske zum binären Nullsetzen der niedrigstwertigen Tetrade", "   (0.MBIN1)PB0:0:0:0:0:0:0:0:0:0:0:1            ; Maske zum binären erzeugen von 1 in der niedrigstwertigen Tetrade", "   (0.MBIN2)PB0:0:0:0:0:0:0:0:0:0:0:2            ; Maske zum binären erzeugen von 2 in der niedrigstwertigen Tetrade", "   (0.MBINTOP9)PB0:15:0:0:0:0:0:0:0:0:0:0        ; Maske zum binären erzeugen von 9 in der obersten Tetrade", "", "   (0.BIN900)PB0:9:0:0:0:0:0:0:0:0:0:0           ; Binär 9000...", "   (0.BIN600)PB0:6:0:0:0:0:0:0:0:0:0:0           ; Binär 6000...", "", "   (0.LETRS)   PB 0:13:0:0:0:0:0:0:0:0:0:0       ; letters shift (13 = 01101)", "   (0.FIGRS)   PB 0:14:0:0:0:0:0:0:0:0:0:0       ; figures shift (14 = 01110)", '   (0.MINUS)   PB 1:12:0:0:0:0:0:0:0:0:0:0       ; "-" (28 = 11100)', '   (0.PLUS)    PB 1:3:0:0:0:0:0:0:0:0:0:0        ; "+" (19 = 10110)', '   (0.DOT)     PB 1:13:0:0:0:0:0:0:0:0:0:0       ; "." (29 = 11101)', '   (0.LETTE)   PB 0:6:0:0:0:0:0:0:0:0:0:0        ; "E" (6 = 00110)', '   (0.ZERO)    PB 0:3:0:0:0:0:0:0:0:0:0:0        ; "0" (3 = 00011)', "   (0.CR)      PB 6:2:0:0:0:0:0:0:0:0:0:0        ; Carriage return", "   (0.LF)      PB 6:1:0:0:0:0:0:0:0:0:0:0        ; Line feed", ""], program_selection = {
    primes: prog_primes = [";===================================================================", "; ", "; Prime number generator for the Mailuefterl computer", ";", ";===================================================================", ";", "; Prints a table with the prime numbers.", ";", "; Written in 2008 by Norbert Kehrer (http://members.aon.at/nkehrer).", "; 50 years after the Mailuefterl was built.", ";", "; Uses no sophisticated prime number algorithm, just for demo.", ";===================================================================", ";", ";", "; The program uses the great multiplication and division routines published in:", ";", '; Kudielka V., Walk K., Bandat K., Lucas P., Zemanek H.: "Programs for', '; Logical Data Processing - Mailuefterl Volltransistor-Rechenautomat",', "; Vienna, February 1960.", "", "", "", "", "\tUB(ADR)+0000)\t; Target address = 0000 --\x3e Start with X 0000", "\t(START)", "", "", "\tUB(ADR)+(START))\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", "", "%PRIMES", "", "\tUB(ADR)+80)\t; Variables in core store", "\t(TEMP)N\t\t;", "\t(N)N\t\t; n", "\t(ND)N\t\t; nd", "\t(ODD)N\t\t; odd", "\t(P)N\t\t; p", "\t(PC)N\t\t; pc", "\tUB(ADR)+(START))", "", "\tABC1", "\tXU(PRINT)", "\tABC1", "\tXU(PRINT)", "\tXU(CRLF)\t; print 1", "", "\tABC2", "\tXU(PRINT)", "\tABC3", "\tXU(PRINT)", "\tXU(CRLF)\t; print 3", "", "\tABC3", "\tUK(PC)\t\t; pc := 3", "\tABC3", "\tUK(P)\t\t; p := 3", "", "\t(1)ABC0\t\t; loop start", "\tUK(ND)\t\t;    nd := 0", "\tJK(P)", "\tAB2", "\tUK(P)\t\t;    p := p + 2", "\tABC3", "\tUK(ODD)\t\t;    odd := 3", "", "\t(2)JK(P)\t;    loop start", "\tABC2", "\tUK7", "\tJK(P)", "\tXU(DIVF)", "\tJK8", "\tASK(ODD)", "\tABS1", "\tZ4X(4)\t\t;   \tif p/2 >= odd goto (4)", "\tJK(ODD)\t\t;       else:", "\tUK7", "\tJK(P)", "\tXU(DIVF)\t;          divide p by odd (AC := p mod odd)", "\tABS1", "\tZ3X(3)\t\t;          if remainder != 0 goto (3)  ", "\tJK(ND)\t\t;          else:", "\tAB1", "\tUK(ND)\t\t;             nd := nd + 1 ", "\t(3)JK(ODD)", "\tAB2", "\tUK(ODD)\t\t;          odd := odd + 2", "\tX(2)\t\t;    loop end: goto (2)", "\t(4)JK(ND)", "\tABS1", "\tZ3X(1)\t\t; loop end: if nd > 0 goto(1)", "", "\tJK(PC)", "\tXU(PRINT)\t; print counter", "\tJK(P)", "\tXU(PRINT)\t; print prime number", "\tXU(CRLF)", "\tJK(PC)", "\tAB1", "\tUK(PC)\t\t; pc := pc + 1", "\tX(1)\t\t; go on forever", "", "\tN.\t\t; end of main program", "", "", "", "", "%PRINT", "", "; (PRINT) Printing an integer", ";", ";    Input:\tAC   number", "", "", "(PRINT)\tUK7\t\t; Zahl aus AC in MD sichern", "\tJK0", "\tUK10\t\t; Leerzeichen ausgeben", "\tJ(F.FIGRS)", '\tUK10\t\t; "Figures shift" ausgeben', "\tJK7\t\t; Zahl wieder in AC holen", "\tZ3X(1)\t\t; Wenn Zahl positiv, weiter zur Ausgabe eines Leerzeichens", "\tJ(F.MINUS)", '\tUK10\t\t; sonst "-" ausgeben', "\tX(2)\t\t; und weiter", "\t(1)JK0", "\tUK10\t\t; Leerzeichen ausgeben", "\t(2)JK7\t\t; Zahl in AC laden", "\tNPP\t\t; Q im AC löschen", "\tNL\t\t; AC um 1 shiften, um Vorzeichen zu überspringen", "\tULK10\t\t; Ziffer 1 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 2 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 3 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 4 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 5 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 6 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 7 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 8 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 9 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 10 ausgeben, und Links-Shift auf nächste Stelle", "\tXK9\t\t; Return", "", "", "", "%CRLF", "", "; (CRLF) Printing carriage return/line feed", ";", '; originally as in "Programs for logical data proecessing', "", "", "(CRLF)\tJ(1)\t\t; load characters", "\tUKL10\t\t; print first", "\tUK10\t\t; print second", "\tXK9\t\t; Return", "\t(1)Z2A\t\t; teleprinter characters for CR/LF", "", "", "", "", "", "%DIVF", "", "; (DIVF) Fixed point division a / b", ";", ";    Preparation:   J >a<", ";                   TI 7 + >b<", ";", ";    Result in MR", ";    Remainder in AC", "", "(DIVF)", "\tUB(ADR)+65)", "\t(1K)\t\t\t; jump addresses", "\t(2K)", "\t(3K)", "\t(4K)", "\t(5K)", "\t(6K)", "\t(7K)", "\t(8K)", "\tUB(ADR)+(DIVF))\t\t; program in the drum store:", "\tTI8+(1)\t\t\t; program transfer\t\tMR = AC (b)", "\tTI(1K)+(2)\t\t; to the core store", "\tTI(2K)+(3)", "\tTI(3K)+(4)", "\tTI(4K)+(5)", "\tTI(5K)+(6)", "\tTI(6K)+(7)", "\tUK(7K)", "\tJK9\t\t\t;\t\t\t\tput return jump (RS) in (8)", "\tUKC(8K)", "\tXK(1K)\t\t\t;\t\t\t\tgoto prog in core store", "\t(1)XBLV(2K)-11\t\t; program in the core store:\tdo 11 times {exec(4); AC/MR <<= 4;}", "\t(2)XUK(4K)\t\t; division\t \t\tdo it a 12th time", "\t(3)XK(7K)\t\t;\t\t\t\tgoto (7)", "\t(4)Z2XB(6K)+0\t\t;\t\t\t\twhile (AC >= MD) exec(6)", "\t(5)XK9\t\t\t;\t\t\t\treturn", "\t(6)Z2ASWK7\t\t;\t\t\t\tif (Ac >= MD) {AC -= MD; MR++;}", "\t(7)NRV\t\t\t;\t\t\t\tAC/MR >>= 4\t\t\t\t\t", "\t(8)N0\t\t\t;\t\t\t\treturn jump is stored here\t\t\t\t\t\t", "", "", "", "", "", "", "", "", "; Konstanten", "", "\t(F.LETRS)\tPB 0:13:0:0:0:0:0:0:0:0:0:0\t\t; letters shift (13 = 01101)", "\t(F.FIGRS)\tPB 0:14:0:0:0:0:0:0:0:0:0:0\t\t; figures shift (14 = 01110)", '\t(F.MINUS)\tPB 1:12:0:0:0:0:0:0:0:0:0:0\t\t; "-" (28 = 11100)', '\t(F.PLUS)\tPB 1:3:0:0:0:0:0:0:0:0:0:0\t\t; "+" (19 = 10110)', '\t(F.DOT)\t\tPB 1:13:0:0:0:0:0:0:0:0:0:0\t\t; "." (29 = 11101)', '\t(F.LETTE)\tPB 0:6:0:0:0:0:0:0:0:0:0:0\t\t; "E" (6 = 00110)', "\t(F.TEMP)\tN\t\t\t\t\t; Hilfsvariable"],
    square: prog_square = [";===================================================================", ";", "; Square number generator for the Mailuefterl computer", ";", ";===================================================================", ";", "; Prints a table with integers and their squares.", ";", "; Written in 2008 by Norbert Kehrer (http://members.aon.at/nkehrer).", ";", ";===================================================================", ";", ";", "; Uses the great multiplication routine published in:", ";", '; Kudielka V., Walk K., Bandat K., Lucas P., Zemanek H.: "Programs for', '; Logical Data Processing - Mailuefterl Volltransistor-Rechenautomat",', "; Vienna, February 1960.", "", "", "", "", " UB(ADR)+0000) ; Target address = 0000 --\x3e Start with X 0000", " (START)", "", "", " UB(ADR)+(START)) ", "", "%SQUARE", " XU(CRLF)", " J(2)", " (3)XU(PRINT)", " J(2)", " UK7", " XU(MULTF)", " XU(PRINT)", " XU(CRLF)", " J(2)", " AB1", " U(2)", " X(3)", " N.", " (1)PB6:3:3:3:3:3:3:3:3:3:3:10 ; 6", " (2)PB6:3:3:3:3:3:3:3:3:3:3:4 ; 1", " (9)PB6:12:3:3:3:3:6:5:8:3:3:3 ; -3.25000", "", "", " (RET)N ; Return", "", "", "", "", "", "%PRINT", "", "; (PRINT) Printing an integer", ";", ";    Input: AC   number", "", "", "(PRINT) UK7 ; Zahl aus AC in MD sichern", " JK0", " UK10 ; Leerzeichen ausgeben", " J(F.FIGRS)", ' UK10 ; "Figures shift" ausgeben', " JK7 ; Zahl wieder in AC holen", " Z3X(1) ; Wenn Zahl positiv, weiter zur Ausgabe eines Leerzeichens", " J(F.MINUS)", ' UK10 ; sonst "-" ausgeben', " X(2) ; und weiter", " (1)JK0", " UK10 ; Leerzeichen ausgeben", " (2)JK7 ; Zahl in AC laden", " NPP ; Q im AC löschen", " NL ; AC um 1 shiften, um Vorzeichen zu überspringen", " ULK10 ; Ziffer 1 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 2 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 3 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 4 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 5 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 6 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 7 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 8 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 9 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 10 ausgeben, und Links-Shift auf nächste Stelle", " XK9 ; Return", "", "", "", "%CRLF", "", "; (CRLF) Printing carriage return/line feed", ";", '; originally as in "Programs for logical data proecessing', "", "", "(CRLF) J(1) ; load characters", " UKL10 ; print first", " UK10 ; print second", " XK9 ; Return", " (1)Z2A ; teleprinter characters for CR/LF", "", "", "", "", "%MULTF", "", "; (MULTF) Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(MULTF)", " UB(ADR)+65)", " (1K) ; jump addresses", " (2K)", " (3K)", " (4K)", " (5K)", " (6K)", " (7K)", " (8K)", " UB(ADR)+(MULTF)) ; program in the drum store:", " TI8+(1) ; program transfer MR = AC (b)", " TI(1K)+(2) ; to the core store", " TI(2K)+(3)", " TI(3K)+(4)", " TI(4K)+(5)", " TI(5K)+(6)", " TI(6K)+(7)", " TI(7K)+(8)", " UKC(8K) ; AC = 0;", " XK(1K) ; goto prog in core store", " (1)Z1YAMK7 ; program in the core store: while (MR[T1] != 0) {AC += MD; MR--;};", " (2)XBRV(3K)-9 ; multiplication: do 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", " (3)Z1YAMK7 ; while (MR[T1] != 0) {AC += MD; MR--;}; ... and a 10th time", " (4)XK(5K) ; goto (5)  // to have a delay for execution", " (5)ABSRV1 ; AC--; AC/MR >> 4; ... 11th shift right", " (6)Z3N1+ ; test for overflow if (AC >= 0)", " (7)JK8 ; AC = MR;", " (8)XK9 ; return;", "", "", "", "%DIVF", "", "; (DIVF) Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(DIVF)", " UB(ADR)+65)", " (1K) ; jump addresses", " (2K)", " (3K)", " (4K)", " (5K)", " (6K)", " (7K)", " (8K)", " UB(ADR)+(DIVF)) ; program in the drum store:", " TI8+(1) ; program transfer MR = AC (b)", " TI(1K)+(2) ; to the core store", " TI(2K)+(3)", " TI(3K)+(4)", " TI(4K)+(5)", " TI(5K)+(6)", " TI(6K)+(7)", " UK(7K)", " JK9 ; put return jump (RS) in (8)", " UKC(8K)", " XK(1K) ; goto prog in core store", " (1)XBLV(2K)-11 ; program in the core store: do 11 times {exec(4); AC/MR <<= 4;}", " (2)XUK(4K) ; division do it a 12th time", " (3)XK(7K) ; goto (7)", " (4)Z2XB(6K)+0 ; while (AC >= MD) exec(6)", " (5)XK9 ; return", " (6)Z2ASWK7 ; if (Ac >= MD) {AC -= MD; MR++;}", " (7)NRV ; AC/MR >>= 4 ", " (8)N0 ; return jump is stored here ", "", "", "", "", "", "", "", "", "; Konstanten", "", " (F.LETRS) PB 0:13:0:0:0:0:0:0:0:0:0:0 ; letters shift (13 = 01101)", " (F.FIGRS) PB 0:14:0:0:0:0:0:0:0:0:0:0 ; figures shift (14 = 01110)", ' (F.MINUS) PB 1:12:0:0:0:0:0:0:0:0:0:0 ; "-" (28 = 11100)', ' (F.PLUS) PB 1:3:0:0:0:0:0:0:0:0:0:0 ; "+" (19 = 10110)', ' (F.DOT) PB 1:13:0:0:0:0:0:0:0:0:0:0 ; "." (29 = 11101)', ' (F.LETTE) PB 0:6:0:0:0:0:0:0:0:0:0:0 ; "E" (6 = 00110)', " (F.TEMP) N ; Hilfsvariable"],
    hello: prog_hello,
    sine: prog_sine,
    horner: prog_horner,
    root: prog_root,
    mmult: prog_mmult,
    relais: prog_relais,
    forth: prog_forth,
    logdat: prog_logdat,
    test: prog_test
}, mailuefterl = function() {
    function t() {
        if (at) {
            st = !1,
            ot = !1,
            at = !1;
            for (var t = 0; t < 1e3; t++)
                b()
        }
    }
    function e(t) {
        st = !0,
        ot = t,
        at = !0,
        tracer.update(),
        controldesk.update()
    }
    function n() {
        ut = ft = lt = ct = ht = dt = mt = At = Kt = pt = Ut = gt = Long.ZERO,
        s(),
        e(!1)
    }
    function r(t, e, n) {
        var r = p(e);
        if (0 === t)
            k[r % 1e4] = n;
        else
            switch (r) {
            case 3:
                lt = n;
                break;
            case 4:
                ct = n;
                break;
            case 5:
                ht = n;
                break;
            case 6:
                dt = n;
                break;
            case 7:
                mt = n;
                break;
            case 8:
                At = n;
                break;
            case 9:
                Kt = n;
                break;
            case 10:
                pt = n,
                teleprinter.output(pt);
                break;
            case 11:
                Ut = n;
                break;
            case 12:
                gt = n;
                break;
            case 5032:
            case 5033:
            case 5034:
            case 5035:
            case 5036:
            case 5037:
            case 5038:
            case 5039:
            case 5040:
            case 5041:
            case 5042:
            case 5043:
            case 5044:
            case 5045:
            case 5046:
            case 5047:
                relays.output(r - 5032, n);
                break;
            default:
                V[r % 100] = n
            }
    }
    function i(t, e) {
        return a(t, e)
    }
    function a(t, e) {
        var n;
        if ("number" == typeof e && (e = new Long(e,0)),
        n = p(e),
        0 === t)
            return k[n % 1e4];
        switch (n) {
        case 0:
            return Long.ZERO;
        case 3:
            return lt = punchedTapeReader.isReady() ? lt.or(L_0x100000000000) : lt.and(L_0xefffffffffff);
        case 4:
            return teleprinter.isReady() ? ct = ct.or(L_0x100000000000) : ct &= ct.and(L_0xefffffffffff),
            ct;
        case 5:
            return controldesk.getKeyboard();
        case 10:
            return pt;
        case 11:
            return Ut = Long.fromNumber(punchedTapeReader.input()),
            dt = dt.and(L_0xffffffffffe0),
            dt = dt.or(Ut);
        case 12:
            return gt;
        case 5016:
        case 5017:
        case 5018:
        case 5019:
        case 5020:
        case 5021:
        case 5022:
        case 5023:
        case 5024:
        case 5025:
        case 5026:
        case 5027:
        case 5028:
        case 5029:
        case 5030:
        case 5031:
            return relays.input(n - 5016);
        default:
            return V[n]
        }
    }
    function s() {
        V[6] = dt,
        V[7] = mt,
        V[8] = At,
        V[9] = Kt
    }
    function o(t) {
        ut = t
    }
    function u() {
        return ut
    }
    function f() {
        return dt
    }
    function l() {
        return At
    }
    function c() {
        return mt
    }
    function h() {
        return gt
    }
    function d() {
        return Kt
    }
    function m() {
        return at
    }
    function A() {
        return st
    }
    function K() {
        return ot
    }
    function p(t) {
        "number" == typeof t && (t = new Long(t,0));
        var e = new Long(0,0)
          , n = 0
          , r = 1;
        for (e = t.and(L_0x00000000ffff); e.notEquals(Long.ZERO); )
            n += (e.and(L_0xf).toNumber() - 3) * r,
            r *= 10,
            e = e.shiftRight(4);
        return n
    }
    function U(t) {
        if (void 0 === t)
            return "undefined";
        var e = "";
        if ("number" == typeof t)
            e = t.toString(16);
        else {
            new Long(0,0);
            var n = "00000000000000000";
            e = t.and(L_0xffffffffffff).toString(16),
            e = n.substring(0, 12 - e.length) + e
        }
        return e
    }
    function g(t) {
        if (void 0 === t)
            return "undefined";
        for (var e = "", n = 12; n > 0; n--)
            switch (N(t, n)) {
            case 0:
            case 1:
            case 2:
                e += ".";
                break;
            case 3:
                e += "0";
                break;
            case 4:
                e += "1";
                break;
            case 5:
                e += "2";
                break;
            case 6:
                e += "3";
                break;
            case 7:
                e += "4";
                break;
            case 8:
                e += "5";
                break;
            case 9:
                e += "6";
                break;
            case 10:
                e += "7";
                break;
            case 11:
                e += "8";
                break;
            case 12:
                e += "9";
                break;
            case 13:
            case 14:
            case 15:
                e += "."
            }
        return e
    }
    function N(t, e) {
        return X(t, e, 4, 4)
    }
    function P(t) {
        tracer.printLine(t)
    }
    function b() {
        if (P("executing instruction: 0x" + U(ut)),
        void 0 === ut && (alert("BR undefined. Machine stopped."),
        ut = new Long(0,0),
        e(!1)),
        void 0 === dt && (alert("AC undefined. Machine stopped."),
        dt = new Long(0,0),
        e(!1)),
        void 0 === At && (alert("MR undefined. Machine stopped."),
        At = new Long(0,0),
        e(!1)),
        void 0 === mt && (alert("MD undefined. Machine stopped."),
        mt = new Long(0,0),
        e(!1)),
        void 0 === gt && (alert("BZ undefined. Machine stopped."),
        gt = new Long(0,0),
        e(!1)),
        void 0 === Kt && (alert("RS undefined. Machine stopped."),
        Kt = new Long(0,0),
        e(!1)),
        ft = ut,
        M(),
        P(w()),
        T(),
        P("i-m = " + U(v) + "-" + U(Nt) + "\tafter address modification"),
        !R())
            return ut = gt,
            void (gt = Kt);
        S(!0),
        E(),
        S(!1),
        s(),
        P("BR: " + U(ut) + "\tBZ: " + U(gt) + "\tSR: " + U(ft)),
        P("    " + g(ut) + "\t    " + g(gt) + "\t    " + g(ft)),
        P("AC: " + U(dt) + "\tMR: " + U(At) + "\tMD: " + U(mt)),
        P("    " + g(dt) + "\t    " + g(At) + "\t    " + g(mt)),
        P("RS: " + U(Kt)),
        P("    " + g(Kt)),
        P("-----------------------------------------")
    }
    function M() {
        O = X(ft, 12, 4, 1),
        y = X(ft, 12, 3, 1),
        F = X(ft, 12, 2, 1),
        H = X(ft, 12, 1, 1),
        G = X(ft, 11, 4, 4),
        W = X(ft, 10, 4, 4),
        j = X(ft, 9, 4, 3),
        Y = X(ft, 9, 1, 1),
        q = X(ft, 8, 4, 1),
        Q = X(ft, 8, 3, 1),
        $ = X(ft, 8, 2, 1),
        tt = X(ft, 8, 1, 1),
        et = X(ft, 7, 4, 1),
        nt = X(ft, 7, 3, 1),
        rt = X(ft, 7, 2, 1),
        it = X(ft, 7, 1, 1),
        v = 13056 | X(ft, 6, 4, 8),
        Nt = X(ft, 4, 4, 16)
    }
    function X(t, e, n, r) {
        return B(t, e, n, r).getLowBitsUnsigned()
    }
    function B(t, e, n, r) {
        var i = 4 * (e - 1) + n - r
          , a = new Long(1,0);
        a = a.shiftLeft(r).subtract(L_1);
        var s = t;
        return void 0 === s && (s = new Long(0,0)),
        s.shiftRight(i).and(a)
    }
    function E() {
        var t, n, a;
        if (0 !== Q || 15 != (15 & Nt))
            if (1 !== Y)
                switch (W) {
                case 0:
                    ut = gt,
                    gt = Kt;
                    break;
                case 1:
                    t = dt,
                    n = I(q, Nt),
                    1 === et && (n = C(n, L_0x33333333334)),
                    dt = C(t, n),
                    dt = J(dt, X(t, 12, 3, 2) | X(n, 12, 3, 2)),
                    dt = D(dt, X(n, 12, 1, 1)),
                    ut = gt,
                    gt = Kt;
                    break;
                case 2:
                    t = dt,
                    n = I(q, Nt),
                    dt = _(t, n),
                    dt = J(dt, X(t, 12, 3, 2) | X(n, 12, 3, 2)),
                    dt = D(dt, X(n, 12, 1, 1)),
                    ut = gt,
                    gt = Kt;
                    break;
                case 3:
                    t = dt,
                    n = I(q, Nt),
                    dt = t.and(n).and(L_0x1fffffffffff),
                    dt = J(dt, X(t, 12, 3, 2) | X(n, 12, 3, 2)),
                    ut = gt,
                    gt = Kt;
                    break;
                case 4:
                    t = dt,
                    n = I(q, Nt),
                    dt = t.or(n).and(L_0x1fffffffffff),
                    dt = J(dt, X(t, 12, 3, 2) | X(n, 12, 3, 2)),
                    ut = gt,
                    gt = Kt;
                    break;
                case 5:
                    t = dt,
                    n = I(q, Nt),
                    1 === et && (n = n.add(L_1).and(L_0x1fffffffffff)),
                    dt = t.and(L_0x1fffffffffff).add(n.and(L_0x1fffffffffff)).and(L_0x1fffffffffff),
                    dt = J(dt, X(t, 12, 3, 2) | X(n, 12, 3, 2)),
                    ut = gt,
                    gt = Kt;
                    break;
                case 6:
                    t = dt,
                    n = I(q, Nt),
                    dt = t.xor(n).and(L_0x1fffffffffff),
                    dt = J(dt, X(t, 12, 3, 2) | X(n, 12, 3, 2)),
                    ut = gt,
                    gt = Kt;
                    break;
                case 7:
                    r(1, v, dt),
                    dt = I(0, Nt),
                    ut = gt,
                    gt = Kt;
                    break;
                case 8:
                    r(0, Nt, dt),
                    dt = I(1, v),
                    ut = gt,
                    gt = Kt;
                    break;
                case 9:
                    t = dt,
                    n = I(q, Nt),
                    dt = C(t, n),
                    dt = J(dt, X(t, 12, 3, 2) | X(n, 12, 3, 2)),
                    dt = D(dt, X(n, 12, 1, 1));
                    break;
                case 10:
                    if (0 === Q)
                        r(q, Nt, dt);
                    else {
                        var s = new Long(Nt,0)
                          , o = new Long(q,0);
                        r(1, v, s.or(o.shiftLeft(31)))
                    }
                    ut = gt,
                    gt = Kt;
                    break;
                case 11:
                    break;
                case 12:
                    dt = x(q, Nt),
                    ut = gt,
                    gt = Kt
                }
            else {
                switch (W) {
                case 10:
                    Kt = gt
                }
                switch (0 === Q ? (a = 1 === q ? C(ut, L_0x33333333334).and(L_0xff).or(L_0x3300) : C(ut, L_0x33333333334).and(L_0xffff),
                gt = ut.and(L_0xffffffff0000),
                gt = gt.or(a),
                gt = gt.and(L_0xff0fffffffff),
                gt = gt.and(L_0xf0ffffffffff),
                ut = I(q, Nt)) : (a = C(ut, L_0x33333333334).and(L_0xffffff),
                gt = ut.and(L_0xffffff000000),
                gt = gt.or(a),
                ut = i(1, v)),
                W) {
                case 1:
                    t = C(mt, At).and(L_0xffff),
                    n = C(mt.shiftRight(16), At.shiftRight(16)).and(L_0xff),
                    At = At.and(L_0xffffff000000),
                    At = At.or(t),
                    At = At.or(n.shiftLeft(16))
                }
            }
        else
            e(!0)
    }
    function S(t) {
        var e = new Long(0,0);
        switch (j) {
        case 1:
            10 === W ? t || (dt = L_0x033333333333) : t && (dt = L_0x033333333333);
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            10 === W ? t || L() : t && L();
            break;
        case 6:
            10 === W ? t || (dt = D(dt, 1)) : t && (dt = D(dt, 1));
            break;
        case 7:
            10 === W ? t || (dt = D(dt, 0)) : t && (dt = D(dt, 0))
        }
        (!t && 10 === W || t && 10 !== W) && (1 === nt & 2 !== j & 3 !== j && (At = At.and(L_0xf00000000000)),
        1 === rt && (e = C(At, L_0x33333333334).and(L_0xfffffffffff),
        At = At.and(L_0xf00000000000),
        At = At.or(e)),
        1 === it && (e = C(At, L_0xccccccccccc).and(L_0xfffffffffff),
        At = At.and(L_0xf00000000000),
        At = At.or(e)))
    }
    function L() {
        var t = new Long(0,0);
        switch (j) {
        case 2:
            t = dt.and(L_0x00ffffffffff).shiftLeft(4).or(L_3),
            dt = dt.and(L_0xf00000000000),
            dt = dt.or(t),
            1 === nt && (dt = dt.and(L_0xfffffffffff0),
            dt = dt.or(B(At, 11, 4, 4)),
            t = At.and(L_0x00ffffffffff).shiftLeft(4).or(L_3),
            At = At.and(L_0xf00000000000),
            At = At.or(t));
            break;
        case 3:
            1 === nt && (t = At.and(L_0x0fffffffffff).shiftRight(4).or(dt.and(L_0xf).shiftLeft(40)),
            At = At.and(L_0xf00000000000),
            At = At.or(t)),
            t = dt.and(L_0x0fffffffffff).shiftRight(4).or(L_0x30000000000),
            dt = dt.and(L_0xf00000000000),
            dt = dt.or(t);
            break;
        case 4:
            t = dt.and(L_0x0fffffffffff).shiftLeft(1),
            dt = dt.and(L_0xe00000000000),
            dt = dt.or(t);
            break;
        case 5:
            t = dt.and(L_0x1fffffffffff).shiftRight(1),
            dt = dt.and(L_0xe00000000000),
            dt = dt.or(t)
        }
    }
    function R() {
        switch (G) {
        case 0:
            return !0;
        case 1:
            return N(At, 1) > 3;
        case 2:
            return B(dt, 11, 4, 44).greaterThanOrEqual(B(mt, 11, 4, 44));
        case 3:
            return N(dt, 11) <= 3;
        case 4:
            return N(dt, 11) >= 12;
        case 7:
            return N(At, 11) >= 8;
        case 8:
            return N(mt, 11) >= 8;
        case 9:
            return 1 === X(dt, 12, 1, 1);
        case 11:
            return B(dt, 12, 1, 45).notEquals(B(mt, 12, 1, 45));
        case 12:
            return B(dt, 12, 1, 45).isZero();
        case 14:
            return controldesk.getSwitchCondition(13);
        case 14:
            return controldesk.getSwitchCondition(14);
        case 15:
            return controldesk.getSwitchCondition(15);
        default:
            return !0
        }
    }
    function T() {
        for (; 0 !== tt; )
            Nt = i(q, Nt),
            q = X(Nt, 8, 4, 1),
            tt = X(Nt, 8, 1, 1);
        0 !== $ && (Nt = 0 !== q ? C(i(1, v), Nt).and(L_0xff).or(L_0x3300) : C(i(1, v), Nt).and(L_0xffff),
        Nt = 65535 & Nt.getLowBits(),
        $ = 0),
        ut = ut.and(L_0xffffffff0000),
        ut = ut.or(Nt),
        ut = ut.and(L_0xffff6fffffff);
        var t = new Long(q,0)
          , e = new Long(tt,0);
        ut = ut.or(t.shiftLeft(31).or(e.shiftLeft(28))),
        ft = ut
    }
    function C(t, e) {
        "number" == typeof t && (t = new Long(t,0)),
        "number" == typeof e && (e = new Long(e,0));
        for (var n, r = new Long(0,0), i = new Long(0,0), a = 0, s = 0; s < 44; )
            a = (n = t.and(L_0xf).toNumber() + e.and(L_0xf).toNumber() + a) >> 4 & 1,
            n &= 15,
            0 === a ? n -= 3 : n += 3,
            r = Long.fromInt(n),
            i = i.or(r.shiftLeft(s)),
            t = t.shiftRight(4),
            e = e.shiftRight(4),
            s += 4;
        return i
    }
    function _(t, e) {
        var n = new Long(0,0);
        n = t;
        for (var r = 0; r < 12; r++)
            N(e, r + 1) < 8 && (n = (n = n.and(L_0xf.shiftLeft(4 * r).not())).or(L_0x3.shiftLeft(4 * r))),
            n = n.and(L_0xffffffffffff);
        return n
    }
    function x(t, e) {
        var n = new Long(0,0);
        return n = 0 === Q ? i(t, e) : new Long(e,0).and(L_0xffff),
        1 === et && (n = n.xor(L_0x1fffffffffff)),
        n
    }
    function I(t, e) {
        var n = new Long(0,0);
        return n = 0 === Q ? i(t, e) : new Long(e,0).and(L_0xffff).or(L_0x33333330000),
        1 === et && (n = n.xor(L_0xfffffffffff)),
        P("resolve addr = " + U(n)),
        n
    }
    function J(t, e) {
        var n = new Long(0,0)
          , r = new Long(3 & e,0);
        return n = t.and(L_0x9fffffffffff),
        n = n.or(r.shiftLeft(45))
    }
    function D(t, e) {
        var n = new Long(0,0)
          , r = new Long(1 & e,0);
        return n = t.and(L_0xefffffffffff),
        n = n.or(r.shiftLeft(44))
    }
    function w() {
        var t = "";
        switch (G > 0 && (t = "Z" + G),
        0 !== Y && (t += "X"),
        W) {
        case 0:
            0 === Y && (t += "N");
            break;
        case 1:
            t += "A";
            break;
        case 2:
            t += "E";
            break;
        case 3:
            t += "I";
            break;
        case 4:
            t += "D";
            break;
        case 5:
            t += "OA";
            break;
        case 6:
            t += "F";
            break;
        case 7:
            t += "TI";
            break;
        case 8:
            t += "TN";
            break;
        case 9:
            t += "YA";
            break;
        case 10:
            t += "U";
            break;
        case 11:
            t += "YN";
            break;
        case 12:
            t += "J"
        }
        switch (j) {
        case 1:
            t += "C";
            break;
        case 2:
            t += "L";
            break;
        case 3:
            t += "R";
            break;
        case 4:
            t += "OL";
            break;
        case 5:
            t += "OR";
            break;
        case 6:
            t += "PQ";
            break;
        case 7:
            t += "PP"
        }
        return 0 !== nt && (t += "V"),
        0 !== Q && (t += "B"),
        0 !== $ && (t += "H"),
        0 !== tt && (t += "G"),
        0 !== et && (t += "S"),
        0 !== rt && (t += "W"),
        0 !== it && (t += "M"),
        0 !== q && (t += "K"),
        13107 !== v && 13056 !== v && 0 !== v && (t = t + p(v) + "+"),
        t += p(Nt)
    }
    function Z() {
        if (!st) {
            for (var t = 0; t < 500; t++)
                b();
            controldesk.update(),
            tracer.update(),
            setTimeout(Z, 50)
        }
    }
    function z(n) {
        switch (n) {
        case "ST":
            t(),
            Z();
            break;
        case "WW":
            b(),
            controldesk.update(),
            tracer.update();
            break;
        case "MS":
            e(!1),
            controldesk.update();
            break;
        case "UE":
            ut = gt,
            gt = Kt,
            controldesk.update();
            break;
        case "BUE":
            ut = controldesk.getKeyboard(),
            controldesk.update()
        }
    }
    function m() {
        return at
    }
    function A() {
        return st
    }
    function K() {
        return ot
    }
    for (var k = [], v = 0; v < 1e4; v++)
        k[v] = new Long(0,0);
    for (var V = [], v = 0; v < 100; v++)
        V[v] = new Long(0,0);
    var O, y, F, H, G, W, j, Y, q, Q, $, tt, et, nt, rt, it, at = !0, st = !0, ot = !1, ut = new Long(0,0), ft = new Long(0,0), lt = new Long(0,0), ct = new Long(0,0), ht = new Long(0,0), dt = new Long(0,0), mt = new Long(0,0), At = new Long(0,0), Kt = new Long(0,0), pt = new Long(0,0), Ut = new Long(0,0), gt = new Long(0,0), v = (new Long(0,0),
    new Long(0,0),
    0), Nt = 0;
    return {
        hex: U,
        dec: g,
        read: i,
        write: r,
        setBR: o,
        getBR: u,
        getAC: f,
        getMR: l,
        getMD: c,
        getBZ: h,
        getRS: d,
        reset: n,
        execute: b,
        execKey: z,
        isReady: m,
        isStopped: A,
        isStoppedByPseudoAddress: K
    }
}(), assembler = function() {
    function t() {
        return d(mailuefterl.read(1, L_0x33c8).and(L_0x00000000ffff))
    }
    function e(t) {
        mailuefterl.write(1, L_0x33c8, h(t))
    }
    function n() {
        e(t() + 1)
    }
    function r(n) {
        e(0);
        var r = t();
        B = !1,
        i(n),
        e(r),
        B = !0,
        i(n)
    }
    function i(e) {
        for (var r, i = new Long(0,0), s = 0; s < e.length; s++)
            "" !== (r = e[s]) && (i = a(r)).notEquals(L_minus_1) && (i.notEquals(L_minus_2) && i.and(L_0x8000000000000000).notEquals(Long.ZERO) && (mailuefterl.setBR(i.and(L_0x7fffffffffffffff)),
            mailuefterl.execute()),
            i.notEquals(L_minus_2) ? (K(i.isNegative() ? t() + "\t0x" + i.and(L_0x7fffffffffffffff).toString(16) + "*\t" + r : t() + "\t0x" + i.toString(16) + "\t" + r),
            i.and(L_0x8000000000000000).equals(Long.ZERO) && (mailuefterl.write(0, h(t()), i),
            n())) : (K(t() + "\taddress label\t" + r),
            n()))
    }
    function a(e) {
        var n, r, i, a, c, d, m, g, N, B = new Long(0,0), E = new Long(0,0);
        for (i = a = c = -1,
        r = "",
        b = "",
        p = 0; p < e.length; p++)
            " " !== (n = e.charAt(p)) && "\t" !== n && (b += n);
        if ("" !== b && "%" === b.charAt(0) && (M = b.replace(";", "%"),
        b = ""),
        b = A(b, M),
        b += ";;;; Norbert Kehrer, 2017",
        B = L_0x200000000000,
        P = 0,
        ";" === s())
            return L_minus_1;
        if ("(" == s() && "" !== (r = o()) && (X[r] = t()),
        ";" == s())
            return L_minus_2;
        for ("Z" == s() && (P++,
        (i = u()) >= 0 && i <= 15 ? B = B.or(Long.fromNumber(i).shiftLeft(40)) : K("Error: Illegal condition number.")); U(s()); ) {
            switch (s()) {
            case "A":
                B = B.or(L_0x1000000000);
                break;
            case "B":
                B = B.or(L_0x0040000000);
                break;
            case "C":
                B = B.or(L_0x0200000000);
                break;
            case "D":
                B = B.or(L_0x4000000000);
                break;
            case "E":
                B = B.or(L_0x2000000000);
                break;
            case "F":
                B = B.or(L_0x6000000000);
                break;
            case "G":
                B = B.or(L_0x0010000000);
                break;
            case "H":
                B = B.or(L_0x0020000000);
                break;
            case "I":
                B = B.or(L_0x3000000000);
                break;
            case "J":
                B = B.or(L_0xc000000000);
                break;
            case "K":
                B = B.or(L_0x0080000000);
                break;
            case "L":
                B = B.or(L_0x0400000000);
                break;
            case "M":
                B = B.or(L_0x0001000000);
                break;
            case "N":
                B = B.or(L_0x0000000000);
                break;
            case "O":
                switch (P++,
                s()) {
                case "A":
                    B = B.or(L_0x5000000000);
                    break;
                case "L":
                    B = B.or(L_0x0800000000);
                    break;
                case "R":
                    B = B.or(L_0x0a00000000);
                    break;
                default:
                    K("Error: Illegal instruction O.")
                }
                break;
            case "P":
                switch (P++,
                s()) {
                case "B":
                    return P++,
                    f();
                case "P":
                    B = B.or(L_0x0e00000000);
                    break;
                case "Q":
                    B = B.or(L_0x0c00000000);
                    break;
                default:
                    K("Error: Illegal instruction P.")
                }
                break;
            case "R":
                B = B.or(L_0x0600000000);
                break;
            case "S":
                B = B.or(L_0x0008000000);
                break;
            case "T":
                switch (P++,
                s()) {
                case "I":
                    B = B.or(L_0x7000000000);
                    break;
                case "N":
                    B = B.or(L_0x8000000000);
                    break;
                default:
                    K("Error: Illegal instruction T.")
                }
                break;
            case "U":
                B = B.or(L_0xa000000000);
                break;
            case "V":
                B = B.or(L_0x0004000000);
                break;
            case "W":
                B = B.or(L_0x0002000000);
                break;
            case "X":
                B = B.or(L_0x0100000000);
                break;
            case "Y":
                switch (P++,
                s()) {
                case "A":
                    B = B.or(L_0x9000000000);
                    break;
                case "N":
                    B = B.or(L_0xb000000000);
                    break;
                default:
                    K("Error: Illegal instruction T.")
                }
                break;
            default:
                K("Error: Illegal instruction " + s() + ".")
            }
            P++
        }
        return a = l(),
        g = !1,
        N = !1,
        E = 0,
        d = 0,
        m = a,
        "+" !== (n = s()) && "-" !== n || ("-" === n && (g = !0),
        P++,
        "P" === s() ? (P++,
        "B" === s() && (P++,
        E = f(),
        N = !0)) : c = l(),
        d = a,
        m = c),
        d %= 100,
        B = B.or(h(d).and(L_0x0000000000ff).shiftLeft(16)),
        N ? B = B.or(E.and(L_0x00000000ffff)) : (m %= 1e4,
        g && (m = (1e4 - m) % 1e4),
        B = B.or(h(m).and(L_0x00000000ffff))),
        "." === s() && (P++,
        B = B.or(L_0x00000000000f)),
        ")" === s() && (P++,
        B = B.or(L_0x8000000000000000)),
        B
    }
    function s() {
        return b.charAt(P)
    }
    function o() {
        var t = ""
          , e = s();
        if ("(" !== e)
            return "";
        for (P++,
        e = s(); ";" !== e && ")" !== e; )
            t += e,
            P++,
            e = s();
        return P++,
        t
    }
    function u() {
        var t = ""
          , e = s();
        if (!g(e))
            return -1;
        for (; ";" !== e && g(e); )
            t += e,
            P++,
            e = s();
        return parseInt(t, 10)
    }
    function f() {
        var t, e = new Long(0,0);
        for (t = u(); t >= 0; )
            e = (e = e.shiftLeft(4)).or(15 & t),
            ":" === s() ? (P++,
            t = u()) : t = -1;
        return e.or(L_0x400000000000)
    }
    function l() {
        var t, e;
        return (t = u()) < 0 && (t = "" === (e = o()) ? 0 : m(e)),
        t
    }
    function c(t) {
        return Math.floor(t)
    }
    function h(t) {
        for (var e = new Long(0,0), n = new Long(0,0), r = 0; r < 60; )
            e = Long.fromBits(t % 10 + 3, 0),
            n = n.or(e.shiftLeft(r)),
            t = c(t / 10),
            r += 4;
        return n
    }
    function d(t) {
        for (var e = 0, n = 1; t.greaterThan(Long.ZERO); )
            e += (t.and(L_0xf).toNumber() - 3) * n,
            n *= 10,
            t = t.shiftRight(4);
        return e
    }
    function m(t) {
        var e = X[t];
        return void 0 !== e ? e : (B && K("*** ERROR: Identifier " + t + " not found."),
        0)
    }
    function A(t, e) {
        if (t.length < 1)
            return t;
        var n, r, i = t.charAt(0);
        for (r = 1; r < t.length; r++)
            g(n = t.charAt(r)) && "(" === t.charAt(r - 1) && (i += e),
            i += n;
        return i
    }
    function K(t) {
        B && teleprinter.printLine(t)
    }
    function U(t) {
        return 1 === t.length && t.match(/[a-z]/i)
    }
    function g(t) {
        return 1 === t.length && t.match(/[0-9]/i)
    }
    function N(t) {
        return r(prog_primes),
        "Done."
    }
    var P, b, M, X, B;
    return X = {
        ADR: 95
    },
    B = !0,
    {
        assembleFile: r,
        test: N
    }
}(), prog_norbert = ["; Test by Norbert Kehrer", "", "", "%NK", "", "", "%MULTF", "", "; (MULTF) Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(MULTF)", " UB(ADR)+65)", " (1K) ; jump addresses", " (2K)", " (3K)", " (4K)", " (5K)", " (6K)", " (7K)", " (8K)", " UB(ADR)+(MULTF)) ; program in the drum store:", " TI8+(1) ; program transfer MR = AC (b)", " TI(1K)+(2) ; to the core store", " TI(2K)+(3)", " TI(3K)+(4)", " TI(4K)+(5)", " TI(5K)+(6)", " TI(6K)+(7)", " TI(7K)+(8)", " UKC(8K) AC = 0;", " XK(1K) goto prog in core store", " (1)Z1YAMK7 ; program in the core store: while (MR[T1] != 0) {AC += MD; MR--;};", " (2)XBRV(3K)-9 ; multiplication: do 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", " (3)Z1YAMK7 while (MR[T1] != 0) {AC += MD; MR--;}; ... and a 10th time", " (4)XK(5K) goto (5)  // to have a delay for execution", " (5)ABSRV1 AC--; AC/MR >> 4; ... 11th shift right", " (6)Z3N1+ ; test for overflow if (AC >= 0)", " (7)JK8 AC = MR;", " (8)XK9 return;", "", "", "", "%DIVF", "", "; (DIVF) Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(DIVF)", " UB(ADR)+65)", " (1K) ; jump addresses", " (2K)", " (3K)", " (4K)", " (5K)", " (6K)", " (7K)", " (8K)", " UB(ADR)+(DIVF)) ; program in the drum store:", " TI8+(1) ; program transfer MR = AC (b)", " TI(1K)+(2) ; to the core store", " TI(2K)+(3)", " TI(3K)+(4)", " TI(4K)+(5)", " TI(5K)+(6)", " TI(6K)+(7)", " UK(7K)", " JK9 ; put return jump (RS) in (8)", " UKC(8K)", " XK(1K) ; goto prog in core store", " (1)XBLV(2K)-11 ; program in the core store: do 11 times {exec(4); AC/MR <<= 4;}", " (2)XUK(4K) ; division do it a 12th time", " (3)XK(7K) ; goto (7)", " (4)Z2XB(6K)+0 ; while (AC >= MD) exec(6)", " (5)XK9 ; return", " (6)Z2ASWK7 ; if (Ac >= MD) {AC -= MD; MR++;}", " (7)NRV ; AC/MR >>= 4 ", " (8)N0 ; return jump is stored here ", "", "", "", "", "", " (F2)", " UB(ADR)+54)", " (A1)", " UB(ADR)+(CL))", " ASCK(F2) ; program in the drum store", " UK7", " UBH7-1 ; K7 := negative nr. of words", " N0", " ABCGK(A1)", " N0 ; assembling store instruction", " A(1)", " UK8", " JK0", " XBGK8+7 ; recurrent execution of store instruction", " (1)UW0+0"], prog_square = [";===================================================================", ";", "; Square number generator for the Mailuefterl computer", ";", ";===================================================================", ";", "; Prints a table with integers and their squares.", ";", "; Written in 2008 by Norbert Kehrer (http://web.utanet.at/nkehrer).", ";", ";===================================================================", ";", ";", "; Uses the great multiplication routine published in:", ";", "; Kudielka V., Walk K., Bandat K., Lucas P., Zemanek H.: //Programs for", "; Logical Data Processing - Mailuefterl Volltransistor-Rechenautomat//,", "; Vienna, February 1960.", "", "", "", "", " UB(ADR)+0000) ; Target address = 0000 --\x3e Start with X 0000", " (START)", "", "", " UB(ADR)+(START)) ", "", "%SQUARE", " XU(CRLF)", " J(2)", " (3)XU(PRINT)", " J(2)", " UK7", " XU(MULTF)", " XU(PRINT)", " XU(CRLF)", " J(2)", " AB1", " U(2)", " X(3)", " N.", " (1)PB6:3:3:3:3:3:3:3:3:3:3:10 ; 6", " (2)PB6:3:3:3:3:3:3:3:3:3:3:4 ; 1", " (9)PB6:12:3:3:3:3:6:5:8:3:3:3 ; -3.25000", "", "", " (RET)N ; Return", "", "", "", "", "", "%PRINT", "", "; (PRINT) Printing an integer", ";", ";    Input: AC   number", "", "", "(PRINT) UK7 ; Zahl aus AC in MD sichern", " JK0", " UK10 ; Leerzeichen ausgeben", " J(F.FIGRS)", " UK10 ; //Figures shift// ausgeben", " JK7 ; Zahl wieder in AC holen", " Z3X(1) ; Wenn Zahl positiv, weiter zur Ausgabe eines Leerzeichens", " J(F.MINUS)", " UK10 ; sonst //-// ausgeben", " X(2) ; und weiter", " (1)JK0", " UK10 ; Leerzeichen ausgeben", " (2)JK7 ; Zahl in AC laden", " NPP ; Q im AC löschen", " NL ; AC um 1 shiften, um Vorzeichen zu überspringen", " ULK10 ; Ziffer 1 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 2 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 3 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 4 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 5 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 6 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 7 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 8 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 9 ausgeben, und Links-Shift auf nächste Stelle", " ULK10 ; Ziffer 10 ausgeben, und Links-Shift auf nächste Stelle", " XK9 ; Return", "", "", "", "%CRLF", "", "; (CRLF) Printing carriage return/line feed", ";", "; originally as in //Programs for logical data proecessing", "", "", "(CRLF) J(1) ; load characters", " UKL10 ; print first", " UK10 ; print second", " XK9 ; Return", " (1)Z2A ; teleprinter characters for CR/LF", "", "", "", "", "%MULTF", "", "; (MULTF) Fixed point multiplication   a x b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in AC and MR", "", "(MULTF)", " UB(ADR)+65)", " (1K) ; jump addresses", " (2K)", " (3K)", " (4K)", " (5K)", " (6K)", " (7K)", " (8K)", " UB(ADR)+(MULTF)) ; program in the drum store:", " TI8+(1) ; program transfer MR = AC (b)", " TI(1K)+(2) ; to the core store", " TI(2K)+(3)", " TI(3K)+(4)", " TI(4K)+(5)", " TI(5K)+(6)", " TI(6K)+(7)", " TI(7K)+(8)", " UKC(8K) ; AC = 0;", " XK(1K) ; goto prog in core store", " (1)Z1YAMK7 ; program in the core store: while (MR[T1] != 0) {AC += MD; MR--;};", " (2)XBRV(3K)-9 ; multiplication: do 9 times {exec(3) and AC/MR >> 4} ... shift right 9 times", " (3)Z1YAMK7 ; while (MR[T1] != 0) {AC += MD; MR--;}; ... and a 10th time", " (4)XK(5K) ; goto (5)  // to have a delay for execution", " (5)ABSRV1 ; AC--; AC/MR >> 4; ... 11th shift right", " (6)Z3N1+ ; test for overflow if (AC >= 0)", " (7)JK8 ; AC = MR;", " (8)XK9 ; return;", "", "", "", "%DIVF", "", "; (DIVF) Fixed point division a / b", ";", ";    Preparation:   J >b<", ";                   TI 7 + >a<", ";", ";    Result in MR", ";    Remainder in AC", "", "(DIVF)", " UB(ADR)+65)", " (1K) ; jump addresses", " (2K)", " (3K)", " (4K)", " (5K)", " (6K)", " (7K)", " (8K)", " UB(ADR)+(DIVF)) ; program in the drum store:", " TI8+(1) ; program transfer MR = AC (b)", " TI(1K)+(2) ; to the core store", " TI(2K)+(3)", " TI(3K)+(4)", " TI(4K)+(5)", " TI(5K)+(6)", " TI(6K)+(7)", " UK(7K)", " JK9 ; put return jump (RS) in (8)", " UKC(8K)", " XK(1K) ; goto prog in core store", " (1)XBLV(2K)-11 ; program in the core store: do 11 times {exec(4); AC/MR <<= 4;}", " (2)XUK(4K) ; division do it a 12th time", " (3)XK(7K) ; goto (7)", " (4)Z2XB(6K)+0 ; while (AC >= MD) exec(6)", " (5)XK9 ; return", " (6)Z2ASWK7 ; if (Ac >= MD) {AC -= MD; MR++;}", " (7)NRV ; AC/MR >>= 4 ", " (8)N0 ; return jump is stored here ", "", "", "", "", "", "", "", "", "; Konstanten", "", " (F.LETRS) PB 0:13:0:0:0:0:0:0:0:0:0:0 ; letters shift (13 = 01101)", " (F.FIGRS) PB 0:14:0:0:0:0:0:0:0:0:0:0 ; figures shift (14 = 01110)", " (F.MINUS) PB 1:12:0:0:0:0:0:0:0:0:0:0 ; //-// (28 = 11100)", " (F.PLUS) PB 1:3:0:0:0:0:0:0:0:0:0:0 ; //+// (19 = 10110)", " (F.DOT) PB 1:13:0:0:0:0:0:0:0:0:0:0 ; //.// (29 = 11101)", " (F.LETTE) PB 0:6:0:0:0:0:0:0:0:0:0:0 ; //E// (6 = 00110)", " (F.TEMP) N ; Hilfsvariable"], prog_primes = [";===================================================================", "; ", "; Prime number generator for the Mailuefterl computer", ";", ";===================================================================", ";", "; Prints a table with the prime numbers.", ";", "; Written in 2008 by Norbert Kehrer (http://web.utanet.at/nkehrer).", "; 50 years after the Mailuefterl was built.", ";", "; Uses no sophisticated prime number algorithm, just for demo.", ";===================================================================", ";", ";", "; The program uses the great multiplication and division routines published in:", ";", "; Kudielka V., Walk K., Bandat K., Lucas P., Zemanek H.: //Programs for", "; Logical Data Processing - Mailuefterl Volltransistor-Rechenautomat//,", "; Vienna, February 1960.", "", "", "", "", "\tUB(ADR)+0000)\t; Target address = 0000 --\x3e Start with X 0000", "\t(START)", "", "", "\tUB(ADR)+(START))\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", "", "%PRIMES", "", "\tUB(ADR)+80)\t; Variables in core store", "\t(TEMP)N\t\t;", "\t(N)N\t\t; n", "\t(ND)N\t\t; nd", "\t(ODD)N\t\t; odd", "\t(P)N\t\t; p", "\t(PC)N\t\t; pc", "\tUB(ADR)+(START))", "", "\tABC1", "\tXU(PRINT)", "\tABC1", "\tXU(PRINT)", "\tXU(CRLF)\t; print 1", "", "\tABC2", "\tXU(PRINT)", "\tABC3", "\tXU(PRINT)", "\tXU(CRLF)\t; print 3", "", "\tABC3", "\tUK(PC)\t\t; pc := 3", "\tABC3", "\tUK(P)\t\t; p := 3", "", "\t(1)ABC0\t\t; loop start", "\tUK(ND)\t\t;    nd := 0", "\tJK(P)", "\tAB2", "\tUK(P)\t\t;    p := p + 2", "\tABC3", "\tUK(ODD)\t\t;    odd := 3", "", "\t(2)JK(P)\t;    loop start", "\tABC2", "\tUK7", "\tJK(P)", "\tXU(DIVF)", "\tJK8", "\tASK(ODD)", "\tABS1", "\tZ4X(4)\t\t;   \tif p/2 >= odd goto (4)", "\tJK(ODD)\t\t;       else:", "\tUK7", "\tJK(P)", "\tXU(DIVF)\t;          divide p by odd (AC := p mod odd)", "\tABS1", "\tZ3X(3)\t\t;          if remainder != 0 goto (3)  ", "\tJK(ND)\t\t;          else:", "\tAB1", "\tUK(ND)\t\t;             nd := nd + 1 ", "\t(3)JK(ODD)", "\tAB2", "\tUK(ODD)\t\t;          odd := odd + 2", "\tX(2)\t\t;    loop end: goto (2)", "\t(4)JK(ND)", "\tABS1", "\tZ3X(1)\t\t; loop end: if nd > 0 goto(1)", "", "\tJK(PC)", "\tXU(PRINT)\t; print counter", "\tJK(P)", "\tXU(PRINT)\t; print prime number", "\tXU(CRLF)", "\tJK(PC)", "\tAB1", "\tUK(PC)\t\t; pc := pc + 1", "\tX(1)\t\t; go on forever", "", "\tN.\t\t; end of main program", "", "", "", "", "%PRINT", "", "; (PRINT) Printing an integer", ";", ";    Input:\tAC   number", "", "", "(PRINT)\tUK7\t\t; Zahl aus AC in MD sichern", "\tJK0", "\tUK10\t\t; Leerzeichen ausgeben", "\tJ(F.FIGRS)", "\tUK10\t\t; //Figures shift// ausgeben", "\tJK7\t\t; Zahl wieder in AC holen", "\tZ3X(1)\t\t; Wenn Zahl positiv, weiter zur Ausgabe eines Leerzeichens", "\tJ(F.MINUS)", "\tUK10\t\t; sonst //-// ausgeben", "\tX(2)\t\t; und weiter", "\t(1)JK0", "\tUK10\t\t; Leerzeichen ausgeben", "\t(2)JK7\t\t; Zahl in AC laden", "\tNPP\t\t; Q im AC löschen", "\tNL\t\t; AC um 1 shiften, um Vorzeichen zu überspringen", "\tULK10\t\t; Ziffer 1 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 2 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 3 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 4 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 5 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 6 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 7 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 8 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 9 ausgeben, und Links-Shift auf nächste Stelle", "\tULK10\t\t; Ziffer 10 ausgeben, und Links-Shift auf nächste Stelle", "\tXK9\t\t; Return", "", "", "", "%CRLF", "", "; (CRLF) Printing carriage return/line feed", ";", "; originally as in //Programs for logical data proecessing", "", "", "(CRLF)\tJ(1)\t\t; load characters", "\tUKL10\t\t; print first", "\tUK10\t\t; print second", "\tXK9\t\t; Return", "\t(1)Z2A\t\t; teleprinter characters for CR/LF", "", "", "", "", "", "%DIVF", "", "; (DIVF) Fixed point division a / b", ";", ";    Preparation:   J >a<", ";                   TI 7 + >b<", ";", ";    Result in MR", ";    Remainder in AC", "", "(DIVF)", "\tUB(ADR)+65)", "\t(1K)\t\t\t; jump addresses", "\t(2K)", "\t(3K)", "\t(4K)", "\t(5K)", "\t(6K)", "\t(7K)", "\t(8K)", "\tUB(ADR)+(DIVF))\t\t; program in the drum store:", "\tTI8+(1)\t\t\t; program transfer\t\tMR = AC (b)", "\tTI(1K)+(2)\t\t; to the core store", "\tTI(2K)+(3)", "\tTI(3K)+(4)", "\tTI(4K)+(5)", "\tTI(5K)+(6)", "\tTI(6K)+(7)", "\tUK(7K)", "\tJK9\t\t\t;\t\t\t\tput return jump (RS) in (8)", "\tUKC(8K)", "\tXK(1K)\t\t\t;\t\t\t\tgoto prog in core store", "\t(1)XBLV(2K)-11\t\t; program in the core store:\tdo 11 times {exec(4); AC/MR <<= 4;}", "\t(2)XUK(4K)\t\t; division\t \t\tdo it a 12th time", "\t(3)XK(7K)\t\t;\t\t\t\tgoto (7)", "\t(4)Z2XB(6K)+0\t\t;\t\t\t\twhile (AC >= MD) exec(6)", "\t(5)XK9\t\t\t;\t\t\t\treturn", "\t(6)Z2ASWK7\t\t;\t\t\t\tif (Ac >= MD) {AC -= MD; MR++;}", "\t(7)NRV\t\t\t;\t\t\t\tAC/MR >>= 4\t\t\t\t\t", "\t(8)N0\t\t\t;\t\t\t\treturn jump is stored here\t\t\t\t\t\t", "", "", "", "", "", "", "", "", "; Konstanten", "", "\t(F.LETRS)\tPB 0:13:0:0:0:0:0:0:0:0:0:0\t\t; letters shift (13 = 01101)", "\t(F.FIGRS)\tPB 0:14:0:0:0:0:0:0:0:0:0:0\t\t; figures shift (14 = 01110)", "\t(F.MINUS)\tPB 1:12:0:0:0:0:0:0:0:0:0:0\t\t; //-// (28 = 11100)", "\t(F.PLUS)\tPB 1:3:0:0:0:0:0:0:0:0:0:0\t\t; //+// (19 = 10110)", "\t(F.DOT)\t\tPB 1:13:0:0:0:0:0:0:0:0:0:0\t\t; //.// (29 = 11101)", "\t(F.LETTE)\tPB 0:6:0:0:0:0:0:0:0:0:0:0\t\t; //E// (6 = 00110)", "\t(F.TEMP)\tN\t\t\t\t\t; Hilfsvariable"], teleprinter = function() {
    function t(t) {
        var e = html_teleprinter_textarea.value + t;
        e.length > max_textarea_size && (e = e.substring(e.length - max_textarea_size)),
        html_teleprinter_textarea.value = e,
        html_teleprinter_textarea.scrollTop = html_teleprinter_textarea.scrollHeight
    }
    function e(e) {
        t(e + "\n")
    }
    function n(t) {
        var e = t.shiftRight(40).and(L_0x1f).toInt()
          , n = r(e);
        switch (e) {
        case 13:
            a = !0;
            break;
        case 14:
            a = !1;
            break;
        default:
            i(n)
        }
    }
    function r(t) {
        return a ? s[t] : o[t]
    }
    function i(e) {
        t(e)
    }
    var a = !0
      , s = [" ", "\n", "", "P", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", " ", " ", "J", "S", "V", "X", "Z", "L", "K", "H", "G", "F", "D", "C", "B", "A", "M", "N", "#"]
      , o = [" ", "\n", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", " ", ";", "'", "=", "/", "+", ")", "(", "_", "]", "[", " ", ":", "x", "-", ".", ",", "*"];
    return {
        output: n,
        printLine: e
    }
}(), relays = function() {
    function t(t, e) {
        html_relays_output[t % 16].checked = e.and(L_0x100000000000).notEquals(Long.ZERO)
    }
    function e(t) {
        return html_relays_output[t % 16].checked ? L_0x100000000000 : Long.ZERO
    }
    return {
        input: e,
        output: t
    }
}(), tracer = function() {
    function t(t) {
        if (i) {
            var e = a + t + "\n";
            e.length > max_textarea_size && (e = e.substring(e.length - max_textarea_size)),
            a !== e && (a = e,
            s = !0)
        }
    }
    function e(t) {
        i = t
    }
    function n() {
        a = "",
        s = !0,
        r()
    }
    function r() {
        s && (html_tracer_textarea.value = a,
        html_tracer_textarea.scrollTop = html_tracer_textarea.scrollHeight,
        s = !1)
    }
    var i = !1
      , a = ""
      , s = !1;
    return {
        update: r,
        clearText: n,
        setTrace: e,
        printLine: t
    }
}(), controldesk = function() {
    function t() {
        var t = mailuefterl.getAC()
          , r = mailuefterl.getMR()
          , i = mailuefterl.getMD()
          , a = mailuefterl.getRS()
          , s = mailuefterl.getBR()
          , o = mailuefterl.getBZ()
          , u = n();
        mailuefterl.write(1, 5, u);
        var f;
        switch (html_display_selection.selectedIndex) {
        case 0:
            f = u;
            break;
        case 1:
            f = t;
            break;
        case 2:
            f = r;
            break;
        case 3:
            f = i;
            break;
        case 4:
            f = a;
            break;
        case 5:
            f = s;
            break;
        case 6:
            f = o;
            break;
        default:
            f = u
        }
        e(f),
        mailuefterl.isReady() ? html_lamp_ST.className = "lamp_on" : html_lamp_ST.className = "lamp_off",
        mailuefterl.isStopped() ? html_lamp_MS.className = "lamp_on" : html_lamp_MS.className = "lamp_off",
        mailuefterl.isStoppedByPseudoAddress() ? html_lamp_PS.className = "lamp_on" : html_lamp_PS.className = "lamp_off";
        var l = "";
        l = (l = l + "AK: " + mailuefterl.hex(t) + "   MR: " + mailuefterl.hex(r) + "   MD: " + mailuefterl.hex(i) + "   BR: " + mailuefterl.hex(s) + "   BZ: " + mailuefterl.hex(o) + "   RS: " + mailuefterl.hex(a) + "\n") + "    " + mailuefterl.dec(t) + "       " + mailuefterl.dec(r) + "       " + mailuefterl.dec(i) + "       " + mailuefterl.dec(s) + "       " + mailuefterl.dec(o) + "       " + mailuefterl.dec(a) + "\n",
        html_register_display.value = l
    }
    function e(t) {
        for (var e = t, n = 47; n >= 0; n--) {
            var r = e.and(L_1).equals(L_1);
            html_display_lamps[n].className = r ? "lamp_on" : "lamp_off",
            e = e.shiftRight(1)
        }
    }
    function n() {
        var t = new Long(0,0);
        new Long(0,0);
        if (html_keyboard_selection_command.checked)
            t = r(t = r(t = r(t = r(t = r(t = r(t = r(t = r(t = r(t = i(t = i(t = i(t = i(t = i(t = i(t = i(t = i(t = i(t = i(t, 20, 15 & html_multiswitch_index_0.selectedIndex), 16, 15 & html_multiswitch_index_1.selectedIndex), 12, 15 & html_multiswitch_address_0.selectedIndex), 8, 15 & html_multiswitch_address_1.selectedIndex), 4, 15 & html_multiswitch_address_2.selectedIndex), 0, 15 & html_multiswitch_address_3.selectedIndex), 44, 15 & html_multiswitch_command_be_q.selectedIndex), 40, 15 & html_multiswitch_command_cond.selectedIndex), 36, 15 & html_multiswitch_command_mainop.selectedIndex), 33, 7 & html_multiswitch_command_addop.selectedIndex), 32, html_funct_bit_x.checked), 31, html_funct_bit_k.checked), 30, html_funct_bit_b.checked), 29, html_funct_bit_h.checked), 28, html_funct_bit_g.checked), 27, html_funct_bit_s.checked), 26, html_funct_bit_v.checked), 25, html_funct_bit_w.checked), 24, html_funct_bit_m.checked);
        else
            for (var e = 0; e < 12; e++)
                t = i(t, 4 * (11 - e), 15 & html_multiswitch_number[e].selectedIndex);
        return t
    }
    function r(t, e, n) {
        var r = new Long(0,0);
        return r = L_1.shiftLeft(e),
        t = t.and(r.not()),
        t = t.and(L_0xffffffffffff),
        n && (t = t.or(r)),
        t
    }
    function i(t, e, n) {
        var r = new Long(0,0);
        r = t;
        var i = new Long(n,0);
        return r = r.or(i.shiftLeft(e))
    }
    function a(t) {
        switch (t) {
        case 13:
            return html_switch_Z13.checked;
        case 14:
            return html_switch_Z14.checked;
        case 15:
            return html_switch_Z15.checked;
        default:
            return !1
        }
    }
    return {
        update: t,
        setDisplay: e,
        getKeyboard: n,
        getSwitchCondition: a
    }
}(), html_display_lamps = [], html_multiswitch_number = [], multiswitch_command_be_q, multiswitch_command_cond, multiswitch_command_mainop, multiswitch_command_addop, html_funct_bit_x, html_funct_bit_k, html_funct_bit_b, html_funct_bit_h, html_funct_bit_g, html_funct_bit_s, html_funct_bit_v, html_funct_bit_w, html_funct_bit_m, html_multiswitch_index_0, html_multiswitch_index_1, html_multiswitch_address_0, html_multiswitch_address_1, html_multiswitch_address_2, html_multiswitch_address_3, html_display_selection, html_lamp_ST, html_lamp_MS, html_lamp_PS, html_lamp_TFB, html_lamp_TFZ, html_keyboard_selection_command, html_switch_Z13, html_switch_Z14, html_switch_Z15, html_register_display, html_program_selection, html_tapereader_textarea, html_teleprinter_textarea, html_tracer_textarea, html_switch_tracer, html_relays_input = [], html_relays_output = [], activeTab = 1;
