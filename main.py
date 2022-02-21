def on_forever():
    if True:
        while True:
            basic.show_number(500000)
    elif 5 < 9:
        basic.show_number(5000)
    else:
        basic.show_number(5)
basic.forever(on_forever)
