export const parentVariant = {
    hidden: {
        opacity: 0,
        y: -10,
    },

    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.5,
            delayChildren: 0.2,
        },
    },
};

export const childVariant = {
    hidden: {
        opacity: 0,
        x: -5,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    }
};

export const techVariant = {
    hidden: {
        opacity: 0,
        y: -20,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay:0.3,
        },
    }
};

export const stackVariant = {
    hidden: {
        opacity: 0,
        y: -10,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        },
    }
};