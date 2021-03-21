import * as Gbi from "../../../../../include/gbi"
import {
	inside_09003000,
	inside_09003800,
	inside_09004000,
	inside_09005000,
	inside_09007000,
	inside_0900A000,
} from "../../../../../textures/inside"
const inside_castle_seg7_lights_070331C8 = Gbi.gdSPDefLights1(
	    0x52, 0x52, 0x52,
	    0xdd, 0xdd, 0xdd, 0x28, 0x28, 0x28
)

const inside_castle_seg7_lights_070331E0 = Gbi.gdSPDefLights1(
	    0x5f, 0x5f, 0x5f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const inside_castle_seg7_vertex_070331F8 = [
	{ pos: [ -25, 0, -1842 ], flag: 0, tc: [ 3544, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, 0, -1842 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -25, -1842 ], flag: 0, tc: [ -2074, 172 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -76, -1919 ], flag: 0, tc: [ 3544, 1040 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -76, -1919 ], flag: 0, tc: [ -2074, 1040 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -101, -1919 ], flag: 0, tc: [ -2074, 1244 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -101, -1919 ], flag: 0, tc: [ 3544, 1244 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -50, -1893 ], flag: 0, tc: [ 3544, 684 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -76, -1893 ], flag: 0, tc: [ -2074, 888 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -76, -1893 ], flag: 0, tc: [ 3544, 888 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -50, -1893 ], flag: 0, tc: [ -2074, 684 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -25, -1868 ], flag: 0, tc: [ 3544, 326 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -50, -1868 ], flag: 0, tc: [ -2074, 530 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -50, -1868 ], flag: 0, tc: [ 3544, 530 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -25, -1868 ], flag: 0, tc: [ -2074, 326 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -25, -1842 ], flag: 0, tc: [ 3544, 172 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_070332F8 = [
	{ pos: [ -25, 0, -1125 ], flag: 0, tc: [ 990, 2776 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, 0, -1842 ], flag: 0, tc: [ -2584, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, 0, -1842 ], flag: 0, tc: [ -2584, 2776 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, 0, -1125 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, -101, -2559 ], flag: 0, tc: [ 2012, 2010 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 77, -101, -2713 ], flag: 0, tc: [ 2778, -288 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, -101, -2559 ], flag: 0, tc: [ 2012, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 435, -101, -2713 ], flag: 0, tc: [ 2778, 1500 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1050, -101, -1740 ], flag: 0, tc: [ -2074, 4564 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1050, -101, -2661 ], flag: 0, tc: [ 2524, 4564 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 742, -101, -2559 ], flag: 0, tc: [ 2012, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 742, -101, -2661 ], flag: 0, tc: [ 2522, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1050, -101, -2661 ], flag: 0, tc: [ 2524, 4564 ], color: [ 0, 124, 232, 255 ] },
	{ pos: [ 1050, -306, -3685 ], flag: 0, tc: [ 7632, 4564 ], color: [ 0, 124, 232, 255 ] },
	{ pos: [ 742, -306, -3685 ], flag: 0, tc: [ 7632, 3032 ], color: [ 0, 124, 232, 255 ] },
	{ pos: [ 742, -101, -2661 ], flag: 0, tc: [ 2522, 3032 ], color: [ 0, 124, 232, 255 ] },
]

const inside_castle_seg7_vertex_070333F8 = [
	{ pos: [ -25, -76, -1893 ], flag: 0, tc: [ 3544, 888 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, -76, -1893 ], flag: 0, tc: [ -2074, 888 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, -76, -1919 ], flag: 0, tc: [ -2074, 1040 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -229, -101, -2661 ], flag: 0, tc: [ 2522, -1820 ], color: [ 0, 124, 232, 255 ] },
	{ pos: [ -229, -306, -3685 ], flag: 0, tc: [ 7632, -1820 ], color: [ 0, 124, 232, 255 ] },
	{ pos: [ -537, -306, -3685 ], flag: 0, tc: [ 7632, -3354 ], color: [ 0, 124, 232, 255 ] },
	{ pos: [ -537, -101, -2661 ], flag: 0, tc: [ 2522, -3354 ], color: [ 0, 124, 232, 255 ] },
	{ pos: [ -229, -101, -2559 ], flag: 0, tc: [ 2012, -1820 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -229, -101, -2661 ], flag: 0, tc: [ 2522, -1820 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -537, -101, -2661 ], flag: 0, tc: [ 2522, -3354 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -537, -101, -1740 ], flag: 0, tc: [ -2074, -3354 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 742, -101, -2559 ], flag: 0, tc: [ 2012, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1050, -101, -1740 ], flag: 0, tc: [ -2074, 4564 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 333, 0, -1125 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 0, -1074 ], flag: 0, tc: [ 1246, 1754 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 333, 0, -1074 ], flag: 0, tc: [ 1246, 990 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_070334F8 = [
	{ pos: [ 333, 0, -1125 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 0, -1125 ], flag: 0, tc: [ 990, 1754 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 179, 0, -1074 ], flag: 0, tc: [ 1246, 1754 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, -25, -1842 ], flag: 0, tc: [ 3544, 172 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, -25, -1842 ], flag: 0, tc: [ -2074, 172 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, -25, -1868 ], flag: 0, tc: [ -2074, 326 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, -76, -1893 ], flag: 0, tc: [ 3544, 888 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, -76, -1919 ], flag: 0, tc: [ -2074, 1040 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, -76, -1919 ], flag: 0, tc: [ 3544, 1040 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, -50, -1893 ], flag: 0, tc: [ 3544, 684 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, -50, -1868 ], flag: 0, tc: [ -2074, 530 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, -50, -1893 ], flag: 0, tc: [ -2074, 684 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, -50, -1868 ], flag: 0, tc: [ 3544, 530 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, -25, -1868 ], flag: 0, tc: [ 3544, 326 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_070335D8 = [
	{ pos: [ -229, 512, -2047 ], flag: 0, tc: [ -2074, -5142 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 742, 512, -2047 ], flag: 0, tc: [ 2778, -5142 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1050, 512, -1740 ], flag: 0, tc: [ 4312, -6676 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -229, -306, -3685 ], flag: 0, tc: [ 0, -1820 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -229, -306, -2559 ], flag: 0, tc: [ -5650, -1820 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 742, -306, -2559 ], flag: 0, tc: [ -5650, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1050, -306, -4505 ], flag: 0, tc: [ 4056, 4566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -537, -306, -4505 ], flag: 0, tc: [ 4056, -3354 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 742, -306, -3685 ], flag: 0, tc: [ 0, 3032 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -537, -306, -3685 ], flag: 0, tc: [ 0, -3354 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 1050, -306, -3685 ], flag: 0, tc: [ 0, 4566 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, 666, -3993 ], flag: 0, tc: [ -1052, 4566 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 538, 666, -3993 ], flag: 0, tc: [ 1756, 4566 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 538, 666, -2252 ], flag: 0, tc: [ 1756, -4120 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -25, 666, -2252 ], flag: 0, tc: [ -1052, -4120 ], color: [ 0, 129, 0, 255 ] },
]

const inside_castle_seg7_vertex_070336C8 = [
	{ pos: [ -537, 512, -4505 ], flag: 0, tc: [ -3606, 7120 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 742, 512, -4197 ], flag: 0, tc: [ 2778, 5588 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -229, 512, -4197 ], flag: 0, tc: [ -2074, 5588 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -537, 512, -1740 ], flag: 0, tc: [ -3606, -6676 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ -229, 512, -2047 ], flag: 0, tc: [ -2074, -5142 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1050, 512, -4505 ], flag: 0, tc: [ 4312, 7120 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 1050, 512, -1740 ], flag: 0, tc: [ 4312, -6676 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 742, 512, -2047 ], flag: 0, tc: [ 2778, -5142 ], color: [ 0, 129, 0, 255 ] },
]

const inside_castle_seg7_vertex_07033748 = [
	{ pos: [ -25, -101, -1740 ], flag: 0, tc: [ 990, 2010 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 77, -1842 ], flag: 0, tc: [ 2012, 224 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 77, -1740 ], flag: 0, tc: [ 990, 224 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 589, -101, -1740 ], flag: 0, tc: [ 990, 2010 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 589, 77, -1842 ], flag: 0, tc: [ 2012, 224 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 589, 77, -1740 ], flag: 0, tc: [ 990, 224 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 589, 0, -1919 ], flag: 0, tc: [ 2778, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 589, 0, -1970 ], flag: 0, tc: [ 3290, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 589, -101, -1970 ], flag: 0, tc: [ 3290, 2010 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -76, 0, -1970 ], flag: 0, tc: [ 3290, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, -101, -1970 ], flag: 0, tc: [ 3290, 2010 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, -101, -1740 ], flag: 0, tc: [ 990, 2010 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, 0, -1919 ], flag: 0, tc: [ 2778, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, 77, -1740 ], flag: 0, tc: [ 990, 224 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -76, 77, -1842 ], flag: 0, tc: [ 2012, 224 ], color: [ 129, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_07033838 = [
	{ pos: [ -25, -101, -1740 ], flag: 0, tc: [ 990, 2010 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, -101, -1970 ], flag: 0, tc: [ 3290, 2010 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 0, -1970 ], flag: 0, tc: [ 3290, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 0, -1919 ], flag: 0, tc: [ 2778, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 77, -1842 ], flag: 0, tc: [ 2012, 224 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 538, -101, -1740 ], flag: 0, tc: [ 990, 2010 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 538, 0, -1919 ], flag: 0, tc: [ 2778, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 538, 0, -1970 ], flag: 0, tc: [ 3290, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 538, -101, -1970 ], flag: 0, tc: [ 3290, 2010 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 538, 77, -1842 ], flag: 0, tc: [ 2012, 224 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 538, 77, -1740 ], flag: 0, tc: [ 990, 224 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -229, -101, -2559 ], flag: 0, tc: [ -5140, -1054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -229, -306, -2559 ], flag: 0, tc: [ -5140, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -229, -101, -2661 ], flag: 0, tc: [ -4118, -1054 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -229, -306, -3685 ], flag: 0, tc: [ 6100, 990 ], color: [ 127, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_07033928 = [
	{ pos: [ 742, -101, -2661 ], flag: 0, tc: [ -4118, -1054 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 742, -306, -2559 ], flag: 0, tc: [ -5140, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 742, -101, -2559 ], flag: 0, tc: [ -5140, -1054 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 742, -306, -3685 ], flag: 0, tc: [ 6100, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 538, 307, -1740 ], flag: 0, tc: [ 3034, -2076 ], color: [ 167, 167, 0, 255 ] },
	{ pos: [ 538, 307, -1125 ], flag: 0, tc: [ 0, -2076 ], color: [ 167, 167, 0, 255 ] },
	{ pos: [ 435, 410, -1125 ], flag: 0, tc: [ 0, -3098 ], color: [ 167, 167, 0, 255 ] },
	{ pos: [ 538, 0, -1740 ], flag: 0, tc: [ 3034, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 538, 307, -1125 ], flag: 0, tc: [ 0, -2076 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 538, 307, -1740 ], flag: 0, tc: [ 3034, -2076 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 435, 410, -1740 ], flag: 0, tc: [ 3034, -3098 ], color: [ 167, 167, 0, 255 ] },
	{ pos: [ -25, 307, -1740 ], flag: 0, tc: [ 3034, -2076 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 0, -1125 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 0, -1740 ], flag: 0, tc: [ 3034, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 538, 0, -1125 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_07033A18 = [
	{ pos: [ 435, 410, -1740 ], flag: 0, tc: [ 0, 2010 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, 410, -1125 ], flag: 0, tc: [ 3034, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, 410, -1740 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 435, 410, -1125 ], flag: 0, tc: [ 3034, 2010 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, 410, -1740 ], flag: 0, tc: [ 3034, -3098 ], color: [ 90, 167, 0, 255 ] },
	{ pos: [ -25, 307, -1125 ], flag: 0, tc: [ 0, -2076 ], color: [ 90, 167, 0, 255 ] },
	{ pos: [ -25, 307, -1740 ], flag: 0, tc: [ 3034, -2076 ], color: [ 90, 167, 0, 255 ] },
	{ pos: [ 77, 410, -1125 ], flag: 0, tc: [ 0, -3098 ], color: [ 90, 167, 0, 255 ] },
	{ pos: [ -25, 307, -1740 ], flag: 0, tc: [ 3034, -2076 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 307, -1125 ], flag: 0, tc: [ 0, -2076 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -25, 0, -1125 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 0, -1125 ], flag: 0, tc: [ 734, 3032 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 0, -1125 ], flag: 0, tc: [ 1756, 3032 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 307, -1125 ], flag: 0, tc: [ 1756, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07033AF8 = [
	{ pos: [ 179, 256, -1074 ], flag: 0, tc: [ 478, -1566 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 0, -1125 ], flag: 0, tc: [ 990, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 256, -1125 ], flag: 0, tc: [ 990, -1566 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 179, 0, -1074 ], flag: 0, tc: [ 478, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 333, 256, -1125 ], flag: 0, tc: [ -542, -1564 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 333, 0, -1074 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 333, 256, -1074 ], flag: 0, tc: [ 0, -1564 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 333, 0, -1125 ], flag: 0, tc: [ -542, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 179, 256, -1125 ], flag: 0, tc: [ 1500, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 333, 256, -1074 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 179, 256, -1074 ], flag: 0, tc: [ 1500, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 333, 256, -1125 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 77, -101, -2713 ], flag: 0, tc: [ -3608, -1054 ], color: [ 151, 0, 186, 255 ] },
	{ pos: [ 77, -306, -2713 ], flag: 0, tc: [ -3608, 990 ], color: [ 151, 0, 186, 255 ] },
	{ pos: [ -25, -306, -2559 ], flag: 0, tc: [ -5140, 990 ], color: [ 151, 0, 186, 255 ] },
]

const inside_castle_seg7_vertex_07033BE8 = [
	{ pos: [ 179, 256, -1125 ], flag: 0, tc: [ 734, 478 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 307, -1125 ], flag: 0, tc: [ 1756, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, 307, -1125 ], flag: 0, tc: [ -1052, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 179, 0, -1125 ], flag: 0, tc: [ 734, 3032 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 77, 410, -1125 ], flag: 0, tc: [ 1246, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 435, 410, -1125 ], flag: 0, tc: [ -542, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 333, 256, -1125 ], flag: 0, tc: [ 0, 478 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 333, 0, -1125 ], flag: 0, tc: [ 0, 3032 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, 0, -1125 ], flag: 0, tc: [ -1052, 3032 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 77, -101, -2713 ], flag: 0, tc: [ -3608, -1054 ], color: [ 151, 0, 186, 255 ] },
	{ pos: [ -25, -306, -2559 ], flag: 0, tc: [ -5140, 990 ], color: [ 151, 0, 186, 255 ] },
	{ pos: [ -25, -101, -2559 ], flag: 0, tc: [ -5140, -1054 ], color: [ 151, 0, 186, 255 ] },
	{ pos: [ -25, -306, -2559 ], flag: 0, tc: [ 4568, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -229, -101, -2559 ], flag: 0, tc: [ 6612, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -101, -2559 ], flag: 0, tc: [ 4568, -1054 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07033CD8 = [
	{ pos: [ 435, -101, -2713 ], flag: 0, tc: [ 0, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 435, -306, -2713 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 77, -306, -2713 ], flag: 0, tc: [ 3546, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 77, -101, -2713 ], flag: 0, tc: [ 3546, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -101, -2559 ], flag: 0, tc: [ -5140, -1054 ], color: [ 105, 0, 186, 255 ] },
	{ pos: [ 538, -306, -2559 ], flag: 0, tc: [ -5140, 990 ], color: [ 105, 0, 186, 255 ] },
	{ pos: [ 435, -306, -2713 ], flag: 0, tc: [ -3608, 990 ], color: [ 105, 0, 186, 255 ] },
	{ pos: [ 435, -101, -2713 ], flag: 0, tc: [ -3608, -1054 ], color: [ 105, 0, 186, 255 ] },
	{ pos: [ 742, -101, -2559 ], flag: 0, tc: [ -3096, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -306, -2559 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -101, -2559 ], flag: 0, tc: [ -1052, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 742, -306, -2559 ], flag: 0, tc: [ -3096, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, 77, -1740 ], flag: 0, tc: [ -1562, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 589, 77, -1740 ], flag: 0, tc: [ -2074, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 589, 77, -1842 ], flag: 0, tc: [ -2074, -798 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_07033DC8 = [
	{ pos: [ -25, -306, -2559 ], flag: 0, tc: [ 4568, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -229, -306, -2559 ], flag: 0, tc: [ 6612, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -229, -101, -2559 ], flag: 0, tc: [ 6612, -1054 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, 0, -1919 ], flag: 0, tc: [ -1564, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 589, 0, -1970 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, 0, -1970 ], flag: 0, tc: [ -1564, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, 0, -1970 ], flag: 0, tc: [ -1564, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 589, 0, -1970 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 589, -101, -1970 ], flag: 0, tc: [ -2074, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, -101, -1970 ], flag: 0, tc: [ -1564, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 589, 0, -1919 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, 77, -1842 ], flag: 0, tc: [ -1562, -798 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ 589, 0, -1919 ], flag: 0, tc: [ -2074, 0 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ 538, 0, -1919 ], flag: 0, tc: [ -1564, 0 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ 589, 77, -1842 ], flag: 0, tc: [ -2074, -798 ], color: [ 0, 89, 167, 255 ] },
]

const inside_castle_seg7_vertex_07033EB8 = [
	{ pos: [ 538, 77, -1740 ], flag: 0, tc: [ -1562, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 589, 77, -1842 ], flag: 0, tc: [ -2074, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 538, 77, -1842 ], flag: 0, tc: [ -1562, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, 0, -1919 ], flag: 0, tc: [ 4568, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, 0, -1970 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, 0, -1970 ], flag: 0, tc: [ 4568, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, 0, -1970 ], flag: 0, tc: [ 4568, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, -101, -1970 ], flag: 0, tc: [ 4056, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -76, -101, -1970 ], flag: 0, tc: [ 4568, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 0, -1970 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 0, -1919 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, 77, -1842 ], flag: 0, tc: [ 4568, -798 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ -25, 0, -1919 ], flag: 0, tc: [ 4056, 0 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ -76, 0, -1919 ], flag: 0, tc: [ 4568, 0 ], color: [ 0, 89, 167, 255 ] },
	{ pos: [ -25, 77, -1842 ], flag: 0, tc: [ 4056, -798 ], color: [ 0, 89, 167, 255 ] },
]

const inside_castle_seg7_vertex_07033FA8 = [
	{ pos: [ -76, 77, -1740 ], flag: 0, tc: [ 4568, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, 77, -1842 ], flag: 0, tc: [ 4056, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -76, 77, -1842 ], flag: 0, tc: [ 4568, -798 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -25, 77, -1740 ], flag: 0, tc: [ 4056, -798 ], color: [ 0, 127, 0, 255 ] },
]

const inside_castle_seg7_vertex_07033FE8 = [
	{ pos: [ -229, 512, -4197 ], flag: 0, tc: [ 0, 0 ], color: [ 76, 155, 0, 255 ] },
	{ pos: [ -25, 666, -2252 ], flag: 0, tc: [ 19386, 2010 ], color: [ 76, 155, 0, 255 ] },
	{ pos: [ -229, 512, -2047 ], flag: 0, tc: [ 21430, 0 ], color: [ 76, 155, 0, 255 ] },
	{ pos: [ 538, 666, -3993 ], flag: 0, tc: [ -1564, -7186 ], color: [ 0, 155, 76, 255 ] },
	{ pos: [ -25, 666, -3993 ], flag: 0, tc: [ 4056, -7186 ], color: [ 0, 155, 76, 255 ] },
	{ pos: [ -229, 512, -4197 ], flag: 0, tc: [ 6100, -9230 ], color: [ 0, 155, 76, 255 ] },
	{ pos: [ 742, 512, -4197 ], flag: 0, tc: [ -3608, -9230 ], color: [ 0, 155, 76, 255 ] },
	{ pos: [ 742, 512, -2047 ], flag: 0, tc: [ 21430, 9676 ], color: [ 180, 155, 0, 255 ] },
	{ pos: [ 538, 666, -3993 ], flag: 0, tc: [ 2012, 7632 ], color: [ 180, 155, 0, 255 ] },
	{ pos: [ 742, 512, -4197 ], flag: 0, tc: [ 0, 9676 ], color: [ 180, 155, 0, 255 ] },
	{ pos: [ 538, 666, -2252 ], flag: 0, tc: [ 19386, 7632 ], color: [ 180, 155, 0, 255 ] },
	{ pos: [ -25, 666, -2252 ], flag: 0, tc: [ 4056, 10186 ], color: [ 0, 155, 180, 255 ] },
	{ pos: [ 538, 666, -2252 ], flag: 0, tc: [ -1562, 10186 ], color: [ 0, 155, 180, 255 ] },
	{ pos: [ 742, 512, -2047 ], flag: 0, tc: [ -3606, 12230 ], color: [ 0, 155, 180, 255 ] },
	{ pos: [ -229, 512, -2047 ], flag: 0, tc: [ 6100, 12230 ], color: [ 0, 155, 180, 255 ] },
	{ pos: [ -25, 666, -3993 ], flag: 0, tc: [ 2012, 2010 ], color: [ 76, 155, 0, 255 ] },
]

const inside_castle_seg7_vertex_070340E8 = [
	{ pos: [ 947, 512, -4300 ], flag: 0, tc: [ 734, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1050, -306, -4300 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1050, 512, -4300 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -434, 512, -4300 ], flag: 0, tc: [ 224, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -332, -306, -4402 ], flag: 0, tc: [ 734, 2012 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -332, 512, -4402 ], flag: 0, tc: [ 734, 0 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -332, 512, -4402 ], flag: 0, tc: [ 734, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -332, -306, -4505 ], flag: 0, tc: [ 990, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -332, 512, -4505 ], flag: 0, tc: [ 990, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -332, -306, -4402 ], flag: 0, tc: [ 734, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -434, -306, -4300 ], flag: 0, tc: [ 224, 2012 ], color: [ 89, 0, 89, 255 ] },
	{ pos: [ -537, 512, -4300 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -434, -306, -4300 ], flag: 0, tc: [ 224, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -434, 512, -4300 ], flag: 0, tc: [ 224, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -537, -306, -4300 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 127, 255 ] },
]

const inside_castle_seg7_vertex_070341D8 = [
	{ pos: [ 845, 512, -4402 ], flag: 0, tc: [ 224, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 947, -306, -4300 ], flag: 0, tc: [ 734, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 947, 512, -4300 ], flag: 0, tc: [ 734, 0 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 947, 512, -4300 ], flag: 0, tc: [ 734, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 947, -306, -4300 ], flag: 0, tc: [ 734, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 1050, -306, -4300 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 845, 512, -1842 ], flag: 0, tc: [ 734, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 845, -101, -1740 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 845, 512, -1740 ], flag: 0, tc: [ 990, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 845, -306, -4402 ], flag: 0, tc: [ 224, 2012 ], color: [ 167, 0, 89, 255 ] },
	{ pos: [ 845, 512, -4505 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 845, -306, -4402 ], flag: 0, tc: [ 224, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 845, 512, -4402 ], flag: 0, tc: [ 224, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 845, -306, -4505 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_070342B8 = [
	{ pos: [ 1050, 512, -1945 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 1050, -101, -1945 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 947, -101, -1945 ], flag: 0, tc: [ 224, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 947, 512, -1945 ], flag: 0, tc: [ 224, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 947, 512, -1945 ], flag: 0, tc: [ 224, 0 ], color: [ 166, 0, 167, 255 ] },
	{ pos: [ 947, -101, -1945 ], flag: 0, tc: [ 224, 2012 ], color: [ 166, 0, 167, 255 ] },
	{ pos: [ 845, -101, -1842 ], flag: 0, tc: [ 734, 2012 ], color: [ 166, 0, 167, 255 ] },
	{ pos: [ 845, 512, -1842 ], flag: 0, tc: [ 734, 0 ], color: [ 166, 0, 167, 255 ] },
	{ pos: [ 845, 512, -1842 ], flag: 0, tc: [ 734, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 845, -101, -1842 ], flag: 0, tc: [ 734, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 845, -101, -1740 ], flag: 0, tc: [ 990, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ -434, 512, -1945 ], flag: 0, tc: [ 734, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -434, -101, -1945 ], flag: 0, tc: [ 734, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -537, -101, -1945 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -537, 512, -1945 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_070343A8 = [
	{ pos: [ -332, 512, -1842 ], flag: 0, tc: [ 224, 0 ], color: [ 90, 0, 167, 255 ] },
	{ pos: [ -434, -101, -1945 ], flag: 0, tc: [ 734, 2012 ], color: [ 90, 0, 167, 255 ] },
	{ pos: [ -434, 512, -1945 ], flag: 0, tc: [ 734, 0 ], color: [ 90, 0, 167, 255 ] },
	{ pos: [ -332, -101, -1842 ], flag: 0, tc: [ 224, 2012 ], color: [ 90, 0, 167, 255 ] },
	{ pos: [ -332, 512, -1740 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -332, -101, -1842 ], flag: 0, tc: [ 224, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -332, 512, -1842 ], flag: 0, tc: [ 224, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -332, -101, -1740 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
]

const inside_castle_seg7_vertex_07034428 = [
	{ pos: [ 1050, 512, -1945 ], flag: 0, tc: [ 5844, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1050, 512, -4300 ], flag: 0, tc: [ 0, 0 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1050, -306, -4300 ], flag: 0, tc: [ 0, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 1050, -306, -1945 ], flag: 0, tc: [ 5844, 2012 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 589, 77, -1740 ], flag: 0, tc: [ 1118, 1052 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, 77, -1740 ], flag: 0, tc: [ 1246, 1052 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 538, 307, -1740 ], flag: 0, tc: [ 1246, 480 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 845, -101, -1740 ], flag: 0, tc: [ 480, 1500 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 589, -101, -1740 ], flag: 0, tc: [ 1118, 1500 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 845, 512, -1740 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 307, -1740 ], flag: 0, tc: [ 2650, 480 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 77, -1740 ], flag: 0, tc: [ 2650, 1052 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -76, 77, -1740 ], flag: 0, tc: [ 2778, 1052 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -332, -101, -1740 ], flag: 0, tc: [ 3418, 1500 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -332, 512, -1740 ], flag: 0, tc: [ 3418, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -76, -101, -1740 ], flag: 0, tc: [ 2778, 1500 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07034528 = [
	{ pos: [ 563, -204, -4505 ], flag: 0, tc: [ 2076, 1756 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -332, -306, -4505 ], flag: 0, tc: [ -158, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 845, -306, -4505 ], flag: 0, tc: [ 2778, 2012 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 563, 410, -4505 ], flag: 0, tc: [ 2076, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -50, -204, -4505 ], flag: 0, tc: [ 542, 1756 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -50, 410, -4505 ], flag: 0, tc: [ 542, 224 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ -332, 512, -4505 ], flag: 0, tc: [ -158, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 845, 512, -4505 ], flag: 0, tc: [ 2778, 0 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 77, 410, -1740 ], flag: 0, tc: [ 2396, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -25, 307, -1740 ], flag: 0, tc: [ 2650, 480 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -332, 512, -1740 ], flag: 0, tc: [ 3418, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -537, 512, -1945 ], flag: 0, tc: [ 5844, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -537, -306, -4300 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -537, 512, -4300 ], flag: 0, tc: [ 0, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 435, 410, -1740 ], flag: 0, tc: [ 1502, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 845, 512, -1740 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 0, 129, 255 ] },
]

const inside_castle_seg7_vertex_07034628 = [
	{ pos: [ 538, 307, -1740 ], flag: 0, tc: [ 1246, 480 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 435, 410, -1740 ], flag: 0, tc: [ 1502, 224 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 845, 512, -1740 ], flag: 0, tc: [ 480, 0 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ -537, 512, -1945 ], flag: 0, tc: [ 5844, 0 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -537, -306, -1945 ], flag: 0, tc: [ 5844, 2012 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ -537, -306, -4300 ], flag: 0, tc: [ 0, 2012 ], color: [ 127, 0, 0, 255 ] },
]

export const inside_castle_seg7_dl_07034688 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09005000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070331C8.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070331C8.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070331F8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 14, 12, 0x0,  0,  2, 15, 0x0),
	Gbi.gsSPLight(inside_castle_seg7_lights_070331E0.l[0], 1),
	Gbi.gsSPLight(inside_castle_seg7_lights_070331E0.a, 2),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070332F8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070333F8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11,  7, 10, 0x0),
	...Gbi.gsSP2Triangles(11, 10, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070334F8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 10,  9, 0x0,  3,  5, 13, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_070347D8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09004000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070335D8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  7, 0x0,  3,  8,  6, 0x0),
	...Gbi.gsSP2Triangles( 3,  7,  9, 0x0,  3,  5,  8, 0x0),
	...Gbi.gsSP2Triangles( 8, 10,  6, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070336C8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  2,  4, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  5,  7,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  3, 0x0,  3,  0,  2, 0x0),
	Gbi.gsSP1Triangle( 0,  5,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07034888 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033748, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  3,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 3,  8,  7, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 12,  9, 0x0, 11, 13, 14, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033838, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 7,  8,  5, 0x0,  5,  9,  6, 0x0),
	...Gbi.gsSP2Triangles( 5, 10,  9, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(12, 14, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033928, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 4,  6, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 7, 14,  8, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033A18, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033AF8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033BE8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 1,  4,  5, 0x0,  1,  5,  2, 0x0),
	...Gbi.gsSP2Triangles( 2,  6,  0, 0x0,  2,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 2,  8,  7, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033CD8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033DC8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 3, 10,  4, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033EB8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 3, 10,  4, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033FA8, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07034B28 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07033FE8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(11, 13, 14, 0x0,  0, 15,  1, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07034B90 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_09007000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070340E8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 3, 10,  4, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070341D8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  0,  9,  1, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070342B8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_070343A8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07034C90 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, inside_0900A000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07034428, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  7,  8,  4, 0x0),
	...Gbi.gsSP2Triangles( 7,  4,  6, 0x0,  7,  6,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(10, 13, 14, 0x0, 12, 15, 13, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07034528, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  1, 0x0,  1,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 1,  5,  6, 0x0,  3,  2,  7, 0x0),
	...Gbi.gsSP2Triangles( 5,  3,  7, 0x0,  5,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles(14,  8, 10, 0x0, 14, 10, 15, 0x0),
	Gbi.gsSPVertex(inside_castle_seg7_vertex_07034628, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const inside_castle_seg7_dl_07034D88 = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07034688),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_070347D8),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07034888),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07034B28),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07034B90),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(inside_castle_seg7_dl_07034C90),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsSPEndDisplayList(),
]

