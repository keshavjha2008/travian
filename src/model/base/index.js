import { extend } from '../../utils';

import units from './units';
import buildings, { ID } from './buildings';
import * as combat from './combat';

export default {
    units: extend(units, [
        [   { b: [ID.BARRACKS], },
            { b: [ID.BARRACKS], r: {[ID.ACADEMY]: 1, [ID.BLACKSMITH]: 1} },
            { b: [ID.BARRACKS], r: {[ID.ACADEMY]: 5, [ID.BLACKSMITH]: 1} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]: 1, [ID.STABLES]: 1} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]: 5, [ID.STABLES]: 5} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]: 5, [ID.STABLES]: 10} },
            { b: [ID.WORKSHOP], r: {[ID.ACADEMY]:10, [ID.WORKSHOP]: 1} },
            { b: [ID.WORKSHOP], r: {[ID.ACADEMY]:15, [ID.WORKSHOP]:10} },
            { b: [ID.RESIDENCE, ID.PALACE], r: {[ID.ACADEMY]:20, [ID.RALLY_POINT]:10} },
            { b: [ID.RESIDENCE, ID.PALACE] },
        ],
        [   { b: [ID.BARRACKS], },
            { b: [ID.BARRACKS], r: {[ID.ACADEMY]: 1, [ID.BARRACKS]: 3} },
            { b: [ID.BARRACKS], r: {[ID.ACADEMY]: 3, [ID.BLACKSMITH]: 1} },
            { b: [ID.BARRACKS], r: {[ID.ACADEMY]: 1, [ID.MAIN_BUILDING]: 5} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]: 5, [ID.STABLES]: 3} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]:15, [ID.STABLES]: 10} },
            { b: [ID.WORKSHOP], r: {[ID.ACADEMY]:10, [ID.WORKSHOP]: 1} },
            { b: [ID.WORKSHOP], r: {[ID.ACADEMY]:15, [ID.WORKSHOP]:10} },
            { b: [ID.RESIDENCE, ID.PALACE], r: {[ID.ACADEMY]:20, [ID.RALLY_POINT]: 5} },
            { b: [ID.RESIDENCE, ID.PALACE] },
        ],
        [   { b: [ID.BARRACKS], },
            { b: [ID.BARRACKS], r: {[ID.ACADEMY]: 3, [ID.BLACKSMITH]: 3} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]: 5, [ID.STABLES]: 1} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]: 5, [ID.STABLES]: 3} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]: 5, [ID.STABLES]: 5} },
            { b: [ID.STABLES],  r: {[ID.ACADEMY]:15, [ID.STABLES]:10} },
            { b: [ID.WORKSHOP], r: {[ID.ACADEMY]:10, [ID.WORKSHOP]: 1} },
            { b: [ID.WORKSHOP], r: {[ID.ACADEMY]:15, [ID.WORKSHOP]:10} },
            { b: [ID.RESIDENCE, ID.PALACE], r: {[ID.ACADEMY]:20, [ID.RALLY_POINT]:10} },
            { b: [ID.RESIDENCE, ID.PALACE] },
        ],
    ]),
    buildings,
    combat
};
