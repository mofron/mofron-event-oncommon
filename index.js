/**
 * @file oncommon.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class event.OnCommon
 * @brief common event class
 */
mf.event.OnCommon = class extends mf.Event {
    
    constructor (po, p2) {
        try {
            super();
            this.name('OnCommon');
            this.prmMap(["handler", "eventName"]);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventName (nm) {
        try {
            if (undefined === nm) {
                return this.m_evtname;
            }
            if ('string' !== (typeof nm)) {
                throw new Error('invalid parameter');
            }
            this.m_evtname = nm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            if ((null      === this.eventName()) ||
                (undefined === tgt_dom.getRawDom()[this.eventName()])) {
                throw new Error('invalid event name : ' + this.eventName());
            }
            let evt_obj = this;
            tgt_dom.getRawDom()[this.eventName()] = (ev) => {
                try { evt_obj.execHandler(ev); } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.OnCommon;
/* end of file */
