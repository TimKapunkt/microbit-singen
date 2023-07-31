input.onButtonPressed(Button.A, function () {
    track += 1
})
input.onButtonPressed(Button.AB, function () {
    if (track == 1) {
        basic.showString("Nummer 1")
        basic.clearScreen()
        music.play(music.stringPlayable("F G F A G B F D ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("F G F A G B F D ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C E G B G E F C ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C E G B G E F C ", 120), music.PlaybackMode.UntilDone)
    }
    if (track == 2) {
        basic.showString("Nummer 2")
        basic.clearScreen()
        music.play(music.stringPlayable("C5 B A G F G A B ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 B A G F G A B ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C A E G F D B A ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C A E G F D B A ", 120), music.PlaybackMode.UntilDone)
    }
    if (track == 3) {
        basic.showString("Nummer 3")
        basic.clearScreen()
        music.play(music.stringPlayable("F G A B C5 B A G ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("F G A B C5 B A G ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C D C D C D E F ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C D C D C D E F ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    track += -1
})
let track = 0
track = 0
basic.forever(function () {
    basic.showNumber(track)
    if (track > 3) {
        track = 3
    }
    if (track < 1) {
        track = 1
    }
})
