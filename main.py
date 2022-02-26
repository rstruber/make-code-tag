def on_button_pressed_a():
    global runner_x
    runner.change(LedSpriteProperty.X, -1)
    runner_x += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    global runner_y
    runner.change(LedSpriteProperty.Y, 1)
    runner_y += 1
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_ab():
    if Math.random_boolean():
        runner.change(LedSpriteProperty.X, -1)
    else:
        runner.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global runner_x
    runner.change(LedSpriteProperty.X, 1)
    runner_x += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    global runner_y
    runner.change(LedSpriteProperty.Y, -1)
    runner_y += -1
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

Tagger_2_x = 0
tagger_2_y = 0
tagger_2: game.LedSprite = None
runner: game.LedSprite = None
tagger = game.create_sprite(0, 0)
tagger_x = 0
tagger_y = 0
tagger.set(LedSpriteProperty.BLINK, 786)
runner = game.create_sprite(4, 4)
runner_x = 4
runner_y = 4
time = 0

def on_forever():
    basic.pause(1000)
    if randint(0, 3) == 0:
        tagger.change(LedSpriteProperty.X, 1)
    elif randint(0, 3) == 1:
        tagger.change(LedSpriteProperty.Y, 1)
    elif randint(0, 3) == 2:
        tagger.change(LedSpriteProperty.Y, -1)
    elif randint(0, 3) == 3:
        tagger.change(LedSpriteProperty.X, -1)
basic.forever(on_forever)

def on_forever2():
    global time, tagger_2, tagger_2_y, Tagger_2_x
    basic.pause(1000)
    time += 1
    if time == 120:
        tagger_2 = game.create_sprite(2, 2)
        tagger_2_y = 2
        Tagger_2_x = 2
    if time == 260:
        basic.show_string("you win!")
        game.game_over()
basic.forever(on_forever2)

def on_forever3():
    if runner.is_touching(tagger):
        game.set_score(Math.ceil(time / 60 * 20))
        game.game_over()
basic.forever(on_forever3)
