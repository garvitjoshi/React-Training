import { addNew } from './addNew';
import { toggle } from './toggle';
import { sort } from './sort';
import { removeClosed } from './removeClosed';
import { load } from './load';

let bugActionCreators = { addNew, toggle, sort, removeClosed, load };

export default bugActionCreators;