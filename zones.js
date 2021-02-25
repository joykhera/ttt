import { board } from './board.js'

export const zones = {
    one: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: (canvas.width / 2) - (board.size * 1.5),
        x2: canvas.width / 2 - board.size / 2,
        cx: ((canvas.width / 2 - board.size / 2) + (canvas.width / 2 - board.size * 1.5)) / 2,
        y1: canvas.height / 2 - board.size * 1.5,
        y2: canvas.height / 2 - board.size / 2,
        cy: ((canvas.height / 2 - board.size / 2) + (canvas.height / 2 - board.size * 1.5)) / 2
    },

    two: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: canvas.width / 2 - board.size / 2,
        x2: canvas.width / 2 + board.size / 2,
        cx: ((canvas.width / 2 + board.size / 2) + (canvas.width / 2 - board.size / 2)) / 2,
        y1: canvas.height / 2 - board.size * 1.5,
        y2: canvas.height / 2 - board.size / 2,
        cy: ((canvas.height / 2 - board.size / 2) + (canvas.height / 2 - board.size * 1.5)) / 2
    },

    three: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: canvas.width / 2 + board.size / 2,
        x2: canvas.width / 2 + board.size * 1.5,
        cx: ((canvas.width / 2 + board.size * 1.5) + (canvas.width / 2 + board.size / 2)) / 2,
        y1: canvas.height / 2 - board.size * 1.5,
        y2: canvas.height / 2 - board.size / 2,
        cy: ((canvas.height / 2 - board.size / 2) + (canvas.height / 2 - board.size * 1.5)) / 2
    },

    four: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: canvas.width / 2 - board.size * 1.5,
        x2: canvas.width / 2 - board.size / 2,
        cx: ((canvas.width / 2 - board.size / 2) + (canvas.width / 2 - board.size * 1.5)) / 2,
        y1: canvas.height / 2 - board.size / 2,
        y2: canvas.height / 2 + board.size / 2,
        cy: ((canvas.height / 2 + board.size / 2) + (canvas.height / 2 - board.size / 2)) / 2
    },

    five: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: canvas.width / 2 - board.size / 2,
        x2: canvas.width / 2 + board.size / 2,
        cx: ((canvas.width / 2 + board.size / 2) + (canvas.width / 2 - board.size / 2)) / 2,
        y1: canvas.height / 2 - board.size / 2,
        y2: canvas.height / 2 + board.size / 2,
        cy: ((canvas.height / 2 + board.size / 2) + (canvas.height / 2 - board.size / 2)) / 2
    },

    six: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: canvas.width / 2 + board.size / 2,
        x2: canvas.width / 2 + board.size * 1.5,
        cx: ((canvas.width / 2 + board.size * 1.5) + (canvas.width / 2 + board.size / 2)) / 2,
        y1: canvas.height / 2 - board.size / 2,
        y2: canvas.height / 2 + board.size / 2,
        cy: ((canvas.height / 2 + board.size / 2) + (canvas.height / 2 - board.size / 2)) / 2
    },

    seven: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: canvas.width / 2 - board.size * 1.5,
        x2: canvas.width / 2 - board.size / 2,
        cx: ((canvas.width / 2 - board.size / 2) + (canvas.width / 2 - board.size * 1.5)) / 2,
        y1: canvas.height / 2 + board.size / 2,
        y2: canvas.height / 2 + board.size * 1.5,
        cy: ((canvas.height / 2 + board.size * 1.5) + (canvas.height / 2 + board.size / 2)) / 2
    },

    eight: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: canvas.width / 2 - board.size / 2,
        x2: canvas.width / 2 + board.size / 2,
        cx: ((canvas.width / 2 + board.size / 2) + (canvas.width / 2 - board.size / 2)) / 2,
        y1: canvas.height / 2 + board.size / 2,
        y2: canvas.height / 2 + board.size * 1.5,
        cy: ((canvas.height / 2 + board.size * 1.5) + (canvas.height / 2 + board.size / 2)) / 2
    },

    nine: {
        in: false,
        placed: false,
        draw: {
            o: false,
            x: false,
        },
        x1: canvas.width / 2 + board.size / 2,
        x2: canvas.width / 2 + board.size * 1.5,
        cx: ((canvas.width / 2 + board.size * 1.5) + (canvas.width / 2 + board.size / 2)) / 2,
        y1: canvas.height / 2 + board.size / 2,
        y2: canvas.height / 2 + board.size * 1.5,
        cy: ((canvas.height / 2 + board.size * 1.5) + (canvas.height / 2 + board.size / 2)) / 2
    },
}

export const zonearr = []
zonearr.push(zones.one, zones.two, zones.three, zones.four, zones.five, zones.six, zones.seven, zones.eight, zones.nine)
