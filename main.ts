mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.playerSelector(mp.PlayerNumber.One) == player2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 5 5 . . . . . . . . . . . . . 
            5 5 5 . . . . . . . 5 . . . . . 
            5 5 5 . . . . . . 5 5 5 . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            5 5 5 . . . . . . 5 5 5 . . . . 
            5 5 5 . . . . . . . 5 . . . . . 
            5 5 5 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50, 0)
    } else if (mp.playerSelector(mp.PlayerNumber.Two) == player2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            a a a . . . . . . . . . . . . . 
            a a a . . . . . . . a . . . . . 
            a a a . . . . . . a a a . . . . 
            a a a a a a a a a a a a . . . . 
            a a a a a a a a a a a a . . . . 
            a a a a a a a a a a a a . . . . 
            a a a a a a a a a a a a . . . . 
            a a a . . . . . . a a a . . . . 
            a a a . . . . . . . a . . . . . 
            a a a . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 50, 0)
    } else if (mp.playerSelector(mp.PlayerNumber.Three) == player2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            7 7 7 . . . . . . . . . . . . . 
            7 7 7 . . . . . . . 7 . . . . . 
            7 7 7 . . . . . . 7 7 7 . . . . 
            7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
            7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
            7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
            7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
            7 7 7 . . . . . . 7 7 7 . . . . 
            7 7 7 . . . . . . . 7 . . . . . 
            7 7 7 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 50, 0)
    } else if (mp.playerSelector(mp.PlayerNumber.Four) == player2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            2 2 2 . . . . . . . 2 . . . . . 
            2 2 2 . . . . . . 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 . . . . . . 2 2 2 . . . . 
            2 2 2 . . . . . . . 2 . . . . . 
            2 2 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 50, 0)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -100
})
let projectile: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . e e e e e . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . e e e e 5 e e e e . . . . 
    . . . . a a a a a a a . . . . . 
    . . . . a f a a a f a . . . . . 
    . . . . a a a a a a a . . . . . 
    . . . . a f a a a f a . . . . . 
    . . . . a a f f f a a . . . . . 
    . . . . . a a a a a . d . . . . 
    . . . . . . a a a . . . d d d d 
    . . . . . a a a a a a a d . . . 
    . . . . a . a a a . . . . . . . 
    . . . a . . a a a . . . . . . . 
    . . . . . . a a a . . . . . . . 
    . . . . . a . . . a . . . . . . 
    . . . . a . . . . . a . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a 3 a 3 a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a 3 a a a a 3 a a a a a 
    a a a a a 3 3 3 3 3 3 a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 600
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 600
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
