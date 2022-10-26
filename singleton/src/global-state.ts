/**
 * Blueprint for a global state object along with its attributes and behaviour manipulation
 */

let instance: any;
class GlobalState {
    private stateObj: {[key: string]: any} = {
        color: "black"
    }

    // Initialize the instance and make sure that only one instance is created
    constructor() {
        if (instance) {
            throw new Error('Instance of this class already exists');
        }

        instance = this;
    }

    /**
     * @description - object getter
     * @param {string} key - Name of the property to be accessed
     * @returns {string} - value against the property name passed as an argument
     */
    getProperty(key: string): string {
        return this.stateObj[key];
    }

    /**
     * @description - object setter
     * @param {string} key - Property name
     * @param {string} value - Property value
     */
    setProperty(key: string, value: string): void {
        this.stateObj[key] = value;
    }

};

const globalStateInstance = Object.freeze(new GlobalState());

export default globalStateInstance;
