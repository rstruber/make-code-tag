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
let Tagger_2_x = 0
let tagger_2_y = 0
let tagger_2: game.LedSprite = null
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
    basic.pause(1000)
    if (randint(0, 3) == 0) {
        tagger.change(LedSpriteProperty.X, 1)
    } else if (randint(0, 3) == 1) {
        tagger.change(LedSpriteProperty.Y, 1)
    } else if (randint(0, 3) == 2) {
        tagger.change(LedSpriteProperty.Y, -1)
    } else if (randint(0, 3) == 3) {
        tagger.change(LedSpriteProperty.X, -1)
    }
})
basic.forever(function () {
    basic.pause(1000)
    time += 1
    game.setScore(Math.ceil(time / 60 * 20))
    if (time == 120) {
        tagger_2 = game.createSprite(2, 2)
        tagger_2_y = 2
        Tagger_2_x = 2
    }
    if (time == 260) {
        basic.showString("you win!")
        game.gameOver()
    }
})
basic.forever(function () {
    if (runner.isTouching(tagger)) {
        game.gameOver()
    }
})
