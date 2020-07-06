grove.onGesture(GroveGesture.Right, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
grove.onGesture(GroveGesture.Clockwise, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # . #
        . . # # .
        . . # # #
        `)
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
basic.forever(function () {
	
})
