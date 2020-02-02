/**
 * @file oncommon.js
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
     * @param (mixed) short-form parameter
     *                 key-value: event config
     * @short listener,ename
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name('OnCommon');
            this.shortForm("listener", "ename");
	    /* init config */
	    this.confmng().add("ename", { type: "string" });
	    /* add config */
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * envent name setter/getter
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
            let evt_obj = this;
            tgt_dom.getRawDom()[ename] = (ev) => {
                try {
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
