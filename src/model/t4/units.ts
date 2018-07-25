import { extend } from '../../utils';

import { Unit } from '../base';

import units from '../t3/units';

export default extend(units, [
    [	{ t: 1600, rt: 6600 },
        { t: 1760, rt: 7080 },
        { t: 1920, rt: 7560 },
        { t: 1360, rt: 5880 },
        { t: 2640, rt: 9720 },
        { t: 3520, rt:12360 },
        { t: 4600 },
        { t: 9000 },
        { t:90700 },
        { t:26900 }
    ], [
        { t:  720, rt: 3960 },
        { t: 1120, rt: 5160 },
        { t: 1200, rt: 5400 },
        { t: 1120, rt: 5160 },
        { t: 2400, rt: 9000 },
        { t: 2960, rt:10680 },
        { t: 4200 },
        { t: 9000 },
        { t:70500 },
        { t:31000 }
    ], [
        { t: 1040, rt: 4920 },
        { t: 1440, rt: 6120 },
        { t: 1360, rt: 5880 },
        { t: 2480, rt: 9240 },
        { t: 2560, rt: 9480 },
        { t: 3120, rt:11160, di:60 },
        { t: 5000 },
        { t: 9000 },
        { t:90700 },
        { t:22700 }
    ]
]) as Unit[][];