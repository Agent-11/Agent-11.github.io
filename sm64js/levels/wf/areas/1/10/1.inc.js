import {grass_09007000, } from "../../../../../textures/grass.js"
import {grass_09009000, } from "../../../../../textures/grass.js"
import {grass_09007800, } from "../../../../../textures/grass.js"
import {wf_seg7_texture_07001800, } from "../../../textures.inc.js"
import * as Gbi from "../../../../../include/gbi"
const wf_seg7_lights_07007590 = Gbi.gdSPDefLights1(
	    0x66, 0x66, 0x66,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const wf_seg7_vertex_070075A8 = [
	{ pos: [ -127, 1741, -127 ], flag: 0, tc: [ 1236, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -127, 1997, -127 ], flag: 0, tc: [ 1236, -30 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 128, 1997, -127 ], flag: 0, tc: [ 214, -30 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -127, 1741, 128 ], flag: 0, tc: [ 1226, 988 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -127, 1997, 128 ], flag: 0, tc: [ 1226, -34 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -127, 1997, -127 ], flag: 0, tc: [ 204, -34 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -127, 1741, -127 ], flag: 0, tc: [ 204, 988 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 128, 1741, -127 ], flag: 0, tc: [ 1244, 996 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 1997, -127 ], flag: 0, tc: [ 1244, -24 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 1997, 128 ], flag: 0, tc: [ 222, -24 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 1741, 128 ], flag: 0, tc: [ 222, 996 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 128, 1741, 128 ], flag: 0, tc: [ 1244, 1000 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -127, 1997, 128 ], flag: 0, tc: [ 222, -20 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -127, 1741, 128 ], flag: 0, tc: [ 222, 1000 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 128, 1997, 128 ], flag: 0, tc: [ 1244, -20 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 128, 1741, -127 ], flag: 0, tc: [ 214, 990 ], color: [ 0, 0, 129, 255 ] },
]

const wf_seg7_vertex_070076A8 = [
	{ pos: [ -263, 1997, 152 ], flag: 0, tc: [ 1208, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -157, 1997, -264 ], flag: 0, tc: [ -454, 392 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 153, 1997, -264 ], flag: 0, tc: [ -454, 1632 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -183, 1741, -437 ], flag: 0, tc: [ -756, 1722 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -437, 1741, -183 ], flag: 0, tc: [ 256, 2736 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -437, 1741, 184 ], flag: 0, tc: [ 1724, 2736 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -183, 1741, 438 ], flag: 0, tc: [ 2738, 1722 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 184, 1741, 438 ], flag: 0, tc: [ 2738, 256 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 438, 1741, 184 ], flag: 0, tc: [ 1724, -758 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 438, 1741, -183 ], flag: 0, tc: [ 256, -758 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 184, 1741, -437 ], flag: 0, tc: [ -756, 256 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 260, 1997, -158 ], flag: 0, tc: [ 0, 2056 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 260, 1997, 152 ], flag: 0, tc: [ 1208, 2056 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 171, 1997, 258 ], flag: 0, tc: [ 1634, 1700 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -157, 1997, 258 ], flag: 0, tc: [ 1634, 392 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -263, 1997, -158 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
]

const wf_seg7_vertex_070077A8 = [
	{ pos: [ -214, 1792, -511 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -214, 1536, -511 ], flag: 0, tc: [ 0, 1386 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -511, 1536, -214 ], flag: 0, tc: [ 2296, 1386 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 215, 1792, 512 ], flag: 0, tc: [ -1336, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 512, 1536, 215 ], flag: 0, tc: [ 990, 1386 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 512, 1792, 215 ], flag: 0, tc: [ 990, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 215, 1536, 512 ], flag: 0, tc: [ -1336, 1386 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 512, 1792, 215 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 512, 1536, 215 ], flag: 0, tc: [ 0, 1386 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 512, 1536, -214 ], flag: 0, tc: [ 2352, 1386 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 512, 1792, -214 ], flag: 0, tc: [ 2352, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 512, 1792, -214 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 215, 1536, -511 ], flag: 0, tc: [ 2296, 1386 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 215, 1792, -511 ], flag: 0, tc: [ 2296, 0 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 512, 1536, -214 ], flag: 0, tc: [ 0, 1386 ], color: [ 89, 0, 167, 255 ] },
]

const wf_seg7_vertex_07007898 = [
	{ pos: [ -214, 1792, 512 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 215, 1536, 512 ], flag: 0, tc: [ 2352, 1386 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 215, 1792, 512 ], flag: 0, tc: [ 2352, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -214, 1792, -511 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -511, 1536, -214 ], flag: 0, tc: [ 2296, 1386 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -511, 1792, -214 ], flag: 0, tc: [ 2296, 0 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -511, 1792, -214 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 1536, -214 ], flag: 0, tc: [ 0, 1386 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 1536, 215 ], flag: 0, tc: [ 2352, 1386 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 1792, 215 ], flag: 0, tc: [ 2352, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 1792, 215 ], flag: 0, tc: [ -1336, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -511, 1536, 215 ], flag: 0, tc: [ -1336, 1386 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -214, 1536, 512 ], flag: 0, tc: [ 990, 1386 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -214, 1792, 512 ], flag: 0, tc: [ 990, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -214, 1536, 512 ], flag: 0, tc: [ 0, 1386 ], color: [ 0, 0, 127, 255 ] },
]

const wf_seg7_vertex_07007988 = [
	{ pos: [ 260, 1997, -158 ], flag: 0, tc: [ 2450, 990 ], color: [ 113, 57, 0, 255 ] },
	{ pos: [ 0, 2509, 0 ], flag: 0, tc: [ 1180, -3594 ], color: [ 113, 57, 0, 255 ] },
	{ pos: [ 260, 1997, 152 ], flag: 0, tc: [ 0, 990 ], color: [ 113, 57, 0, 255 ] },
	{ pos: [ -263, 1997, -158 ], flag: 0, tc: [ 0, 990 ], color: [ 144, 58, 0, 255 ] },
	{ pos: [ -263, 1997, 152 ], flag: 0, tc: [ 2450, 990 ], color: [ 144, 58, 0, 255 ] },
	{ pos: [ 0, 2509, 0 ], flag: 0, tc: [ 1238, -3610 ], color: [ 144, 58, 0, 255 ] },
	{ pos: [ 0, 2509, 0 ], flag: 0, tc: [ 558, -3598 ], color: [ 179, 63, 179, 255 ] },
	{ pos: [ -157, 1997, -264 ], flag: 0, tc: [ 0, 990 ], color: [ 179, 63, 179, 255 ] },
	{ pos: [ -263, 1997, -158 ], flag: 0, tc: [ 1132, 990 ], color: [ 179, 63, 179, 255 ] },
	{ pos: [ 0, 2509, 0 ], flag: 0, tc: [ 1192, -3614 ], color: [ 0, 58, 144, 255 ] },
	{ pos: [ 153, 1997, -264 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 58, 144, 255 ] },
	{ pos: [ -157, 1997, -264 ], flag: 0, tc: [ 2450, 990 ], color: [ 0, 58, 144, 255 ] },
	{ pos: [ 0, 2509, 0 ], flag: 0, tc: [ 440, -2556 ], color: [ 179, 63, 77, 255 ] },
	{ pos: [ -263, 1997, 152 ], flag: 0, tc: [ -172, 2010 ], color: [ 179, 63, 77, 255 ] },
	{ pos: [ -157, 1997, 258 ], flag: 0, tc: [ 990, 2010 ], color: [ 179, 63, 77, 255 ] },
]

const wf_seg7_vertex_07007A78 = [
	{ pos: [ 438, 1792, -183 ], flag: 0, tc: [ -1154, 706 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 438, 1741, 184 ], flag: 0, tc: [ 990, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 438, 1792, 184 ], flag: 0, tc: [ 990, 706 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 171, 1997, 258 ], flag: 0, tc: [ 2012, 990 ], color: [ 0, 57, 113, 255 ] },
	{ pos: [ 0, 2509, 0 ], flag: 0, tc: [ 650, -3588 ], color: [ 0, 57, 113, 255 ] },
	{ pos: [ -157, 1997, 258 ], flag: 0, tc: [ -606, 990 ], color: [ 0, 57, 113, 255 ] },
	{ pos: [ 171, 1997, 258 ], flag: 0, tc: [ -80, 2010 ], color: [ 84, 63, 70, 255 ] },
	{ pos: [ 260, 1997, 152 ], flag: 0, tc: [ 990, 2010 ], color: [ 84, 63, 70, 255 ] },
	{ pos: [ 0, 2509, 0 ], flag: 0, tc: [ 602, -2566 ], color: [ 84, 63, 70, 255 ] },
	{ pos: [ 260, 1997, -158 ], flag: 0, tc: [ 0, 990 ], color: [ 77, 63, 178, 255 ] },
	{ pos: [ 153, 1997, -264 ], flag: 0, tc: [ 1132, 990 ], color: [ 77, 63, 178, 255 ] },
	{ pos: [ 0, 2509, 0 ], flag: 0, tc: [ 518, -3586 ], color: [ 77, 63, 178, 255 ] },
	{ pos: [ 438, 1741, -183 ], flag: 0, tc: [ -1154, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -437, 1792, 184 ], flag: 0, tc: [ -1154, 706 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -437, 1741, -183 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -437, 1792, -183 ], flag: 0, tc: [ 990, 706 ], color: [ 127, 0, 0, 255 ] },
]

const wf_seg7_vertex_07007B78 = [
	{ pos: [ 184, 1792, -437 ], flag: 0, tc: [ -1104, 706 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 184, 1741, -437 ], flag: 0, tc: [ -1104, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 438, 1741, -183 ], flag: 0, tc: [ 990, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 438, 1792, -183 ], flag: 0, tc: [ 990, 706 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -183, 1792, -437 ], flag: 0, tc: [ -1154, 706 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 184, 1741, -437 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 184, 1792, -437 ], flag: 0, tc: [ 990, 706 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -183, 1741, -437 ], flag: 0, tc: [ -1154, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -437, 1792, -183 ], flag: 0, tc: [ -1104, 706 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -183, 1741, -437 ], flag: 0, tc: [ 990, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -183, 1792, -437 ], flag: 0, tc: [ 990, 706 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -437, 1741, -183 ], flag: 0, tc: [ -1104, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 438, 1792, 184 ], flag: 0, tc: [ -1104, 706 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 184, 1741, 438 ], flag: 0, tc: [ 990, 990 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 184, 1792, 438 ], flag: 0, tc: [ 990, 706 ], color: [ 167, 0, 167, 255 ] },
]

const wf_seg7_vertex_07007C68 = [
	{ pos: [ -437, 1792, 184 ], flag: 0, tc: [ -1154, 706 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -437, 1741, 184 ], flag: 0, tc: [ -1154, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -437, 1741, -183 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -183, 1792, 438 ], flag: 0, tc: [ -516, 786 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -437, 1741, 184 ], flag: 0, tc: [ 990, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -437, 1792, 184 ], flag: 0, tc: [ 990, 786 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -183, 1741, 438 ], flag: 0, tc: [ -516, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 184, 1792, 438 ], flag: 0, tc: [ -1154, 706 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -183, 1741, 438 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -183, 1792, 438 ], flag: 0, tc: [ 990, 706 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 184, 1741, 438 ], flag: 0, tc: [ -1154, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 438, 1792, 184 ], flag: 0, tc: [ -1104, 706 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 438, 1741, 184 ], flag: 0, tc: [ -1104, 990 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ 184, 1741, 438 ], flag: 0, tc: [ 990, 990 ], color: [ 167, 0, 167, 255 ] },
]

const wf_seg7_vertex_07007D48 = [
	{ pos: [ -511, 1792, 215 ], flag: 0, tc: [ -856, 1000 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -183, 1792, 438 ], flag: 0, tc: [ 1356, 718 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -437, 1792, 184 ], flag: 0, tc: [ -738, 718 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 438, 1792, 184 ], flag: 0, tc: [ 594, 710 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 512, 1792, -214 ], flag: 0, tc: [ 2858, 992 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 438, 1792, -183 ], flag: 0, tc: [ 2740, 710 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 512, 1792, 215 ], flag: 0, tc: [ 474, 992 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 215, 1792, 512 ], flag: 0, tc: [ -1860, 994 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 438, 1792, 184 ], flag: 0, tc: [ 352, 720 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 184, 1792, 438 ], flag: 0, tc: [ -1742, 710 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 512, 1792, 215 ], flag: 0, tc: [ 466, 1002 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -214, 1792, 512 ], flag: 0, tc: [ 454, 1000 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 184, 1792, 438 ], flag: 0, tc: [ 2720, 718 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -183, 1792, 438 ], flag: 0, tc: [ 572, 718 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 215, 1792, 512 ], flag: 0, tc: [ 2838, 1000 ], color: [ 0, 127, 0, 255 ] },
]

const wf_seg7_vertex_07007E38 = [
	{ pos: [ 215, 1792, -511 ], flag: 0, tc: [ 466, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -214, 1792, -511 ], flag: 0, tc: [ 2850, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -183, 1792, -437 ], flag: 0, tc: [ 2732, 708 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -511, 1792, 215 ], flag: 0, tc: [ -856, 1000 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -214, 1792, 512 ], flag: 0, tc: [ 1472, 1000 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -183, 1792, 438 ], flag: 0, tc: [ 1356, 718 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -511, 1792, -214 ], flag: 0, tc: [ -534, 1000 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -437, 1792, 184 ], flag: 0, tc: [ 1730, 718 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -437, 1792, -183 ], flag: 0, tc: [ -414, 718 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -511, 1792, 215 ], flag: 0, tc: [ 1850, 1000 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -214, 1792, -511 ], flag: 0, tc: [ 466, 994 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -511, 1792, -214 ], flag: 0, tc: [ 2796, 994 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -437, 1792, -183 ], flag: 0, tc: [ 2678, 712 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -183, 1792, -437 ], flag: 0, tc: [ 584, 712 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 184, 1792, -437 ], flag: 0, tc: [ 586, 708 ], color: [ 0, 127, 0, 255 ] },
]

const wf_seg7_vertex_07007F28 = [
	{ pos: [ 512, 1792, -214 ], flag: 0, tc: [ 464, 998 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 184, 1792, -437 ], flag: 0, tc: [ 2676, 716 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 438, 1792, -183 ], flag: 0, tc: [ 580, 716 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 215, 1792, -511 ], flag: 0, tc: [ 2792, 998 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 215, 1792, -511 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -214, 1536, -511 ], flag: 0, tc: [ 2352, 1386 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -214, 1792, -511 ], flag: 0, tc: [ 2352, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 215, 1536, -511 ], flag: 0, tc: [ 0, 1386 ], color: [ 0, 0, 129, 255 ] },
]

const wf_seg7_vertex_07007FA8 = [
	{ pos: [ -214, 0, 512 ], flag: 0, tc: [ 990, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -511, 1536, 215 ], flag: 0, tc: [ -56, -6674 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -511, 0, 215 ], flag: 0, tc: [ -56, 990 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ -511, 0, -214 ], flag: 0, tc: [ 990, 990 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -511, 1536, -214 ], flag: 0, tc: [ 990, -6674 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -214, 1536, -511 ], flag: 0, tc: [ -56, -6674 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -214, 0, -511 ], flag: 0, tc: [ -56, 990 ], color: [ 167, 0, 167, 255 ] },
	{ pos: [ -511, 205, 108 ], flag: 0, tc: [ 722, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 0, 215 ], flag: 0, tc: [ 990, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 1536, -214 ], flag: 0, tc: [ -82, -6674 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 0, 108 ], flag: 0, tc: [ 722, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 1536, 215 ], flag: 0, tc: [ 990, -6674 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -214, 1536, 512 ], flag: 0, tc: [ 990, -6674 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 215, 0, -511 ], flag: 0, tc: [ 1016, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 215, 1536, -511 ], flag: 0, tc: [ 1016, -6676 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 512, 1536, -214 ], flag: 0, tc: [ 0, -6676 ], color: [ 89, 0, 167, 255 ] },
]

const wf_seg7_vertex_070080A8 = [
	{ pos: [ 215, 0, 512 ], flag: 0, tc: [ 1042, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 215, 1536, 512 ], flag: 0, tc: [ 1042, -6674 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -214, 1536, 512 ], flag: 0, tc: [ 0, -6674 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -214, 0, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 512, 0, 215 ], flag: 0, tc: [ 1016, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 215, 1536, 512 ], flag: 0, tc: [ 0, -6674 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 215, 0, 512 ], flag: 0, tc: [ 0, 990 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 512, 1536, 215 ], flag: 0, tc: [ 1016, -6674 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ 512, 0, -214 ], flag: 0, tc: [ 1042, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 512, 1536, -214 ], flag: 0, tc: [ 1042, -6676 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 512, 1536, 215 ], flag: 0, tc: [ 0, -6676 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 512, 0, 215 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -511, 205, 108 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -306, 0, 108 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -511, 0, 108 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 129, 255 ] },
]

const wf_seg7_vertex_07008198 = [
	{ pos: [ 215, 0, -511 ], flag: 0, tc: [ 1016, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 512, 1536, -214 ], flag: 0, tc: [ 0, -6676 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ 512, 0, -214 ], flag: 0, tc: [ 0, 990 ], color: [ 89, 0, 167, 255 ] },
	{ pos: [ -214, 0, -511 ], flag: 0, tc: [ 1042, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -214, 1536, -511 ], flag: 0, tc: [ 1042, -6676 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 215, 1536, -511 ], flag: 0, tc: [ 0, -6676 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 215, 0, -511 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -511, 205, -107 ], flag: 0, tc: [ 186, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 205, 108 ], flag: 0, tc: [ 722, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 1536, -214 ], flag: 0, tc: [ -82, -6674 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 0, -107 ], flag: 0, tc: [ 186, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -511, 0, -214 ], flag: 0, tc: [ -82, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -306, 0, -107 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -306, 0, 108 ], flag: 0, tc: [ 1042, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -306, 205, 108 ], flag: 0, tc: [ 1042, 0 ], color: [ 129, 0, 0, 255 ] },
]

const wf_seg7_vertex_07008288 = [
	{ pos: [ -511, 205, 108 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -306, 205, 108 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -306, 0, 108 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -511, 205, -107 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -306, 205, 108 ], flag: 0, tc: [ 1042, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -511, 205, 108 ], flag: 0, tc: [ 1042, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -306, 205, -107 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -511, 0, -107 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -306, 0, -107 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -306, 205, -107 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -511, 205, -107 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -306, 0, -107 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -306, 205, 108 ], flag: 0, tc: [ 1042, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -306, 205, -107 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
]

export const wf_seg7_dl_07008368 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, wf_seg7_texture_07001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(wf_seg7_lights_07007590.l[0], 1),
	Gbi.gsSPLight(wf_seg7_lights_07007590.a, 2),
	Gbi.gsSPVertex(wf_seg7_vertex_070075A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_070083E0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09007800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_070076A8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  3,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  7,  8, 0x0,  3,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 3,  9, 10, 0x0,  0,  2, 11, 0x0),
	...Gbi.gsSP2Triangles( 0, 11, 12, 0x0,  0, 12, 13, 0x0),
	...Gbi.gsSP2Triangles( 0, 13, 14, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07008468 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09009000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_070077A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07007898, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07007988, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07007A78, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles( 0, 12,  1, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07007B78, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07007C68, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07007D48, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07007E38, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07007F28, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_07008690 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, grass_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(wf_seg7_vertex_07007FA8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0,  8, 11,  9, 0x0),
	...Gbi.gsSP2Triangles( 0, 12,  1, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_070080A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07008198, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  7, 0x0,  9, 11, 10, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(wf_seg7_vertex_07008288, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const wf_seg7_dl_070087B0 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(wf_seg7_dl_07008368),
	Gbi.gsSPDisplayList(wf_seg7_dl_070083E0),
	Gbi.gsSPDisplayList(wf_seg7_dl_07008468),
	Gbi.gsSPDisplayList(wf_seg7_dl_07008690),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

