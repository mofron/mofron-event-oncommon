/**
 * @file mofron-event-oncommon/index.js
 * @brief on-event common module for mofron
 * ## event function parameter
 *  - component: event target component object
 *  - object: event object (depend on 'ename' parameter)
 *  - mixed: user specified parameter
 * @license MIT
 */
module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param mixed: listener config parameter
     *        key-value: event config list
     * @param string: ename config parameter
     * @short listener,ename
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.name('OnCommon');
            this.shortForm("listener", "ename");
	    /* init config */
	    this.confmng().add("ename", { type: "string" });
	    /* add config */
	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event name setter/getter
     * 
     * @param (string) event name
     *                 undefined: call as getter
     * @return (string) event name
     * @type parameter
     */
    ename (prm) {
        try {
	    return this.confmng("ename", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event contents
     * 
     * @param (mofron.class.Dom) event target dom
     * @type private
     */
    contents (tgt_dom) {
        try {
	    let ename = this.ename();
            if ((null      === ename) ||
                (undefined === tgt_dom.getRawDom()[ename])) {
                throw new Error('invalid event name : ' + ename);
            }
            let evt_obj  = this;
	    let evt_buff = tgt_dom.getRawDom()[ename];
            tgt_dom.getRawDom()[ename] = (ev) => {
                try {
		    if ("function" === typeof evt_buff) {
                        evt_buff(ev);
		    }
		    evt_obj.execListener(ev);
		} catch (e) {
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
/* end of file */
