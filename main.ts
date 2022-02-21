input.onButtonPressed(Button.A, function () {
    runner.change(LedSpriteProperty.X, -1)
    runner_x += -1
})
input.onGesture(Gesture.TiltLeft, function () {
    runner.change(LedSpriteProperty.Y, 1)
    runner_y += 1
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
    runner_x += 1
})
input.onGesture(Gesture.TiltRight, function () {
    runner.change(LedSpriteProperty.Y, -1)
    runner_y += -1
})
let runner: game.LedSprite = null
let tagger = game.createSprite(0, 0)
let tagger_x = 0
let tagger_y = 0
tagger.set(LedSpriteProperty.Blink, 786)
runner = game.createSprite(4, 4)
let runner_x = 4
let runner_y = 4
let time = 0
basic.forever(function () {
    if (runner.isTouching(tagger)) {
        game.setScore(time)
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(1000)
    time += 1
})
