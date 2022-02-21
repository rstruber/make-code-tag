input.onButtonPressed(Button.A, function () {
    runner.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    runner.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    if (Math.randomBoolean()) {
        runner.change(LedSpriteProperty.X, -1)
    } else {
        runner.change(LedSpriteProperty.X, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    runner.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    runner.change(LedSpriteProperty.Y, -1)
})
let runner: game.LedSprite = null
let tagger = game.createSprite(2, 2)
runner = game.createSprite(4, 4)
tagger.set(LedSpriteProperty.Blink, 786)
basic.forever(function () {
	
})
