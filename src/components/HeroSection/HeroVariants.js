export const containerVariant = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition:{
            staggerChildren: 0.4,
            delayChildren: 0.3,
        },
    },
};

export const childVariant = {
    hidden: {
        opacity: 0,
        x: -10,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const letterVariant = {
     hidden: {
        opacity: 0,
        x: -10,
    },

    visible: {
        opacity: 1,
        x:0,
        transition:{
            duration: 0.5,
            staggerChildren: 0.09,
            delayChildren: 0.2,
        },
    },
};