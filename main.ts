mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f . . . . . . . . . . . . . 
        f f f . . . . . . . f . . . . . 
        f f f . . . . . . f f f . . . . 
        f f f f f f f f f f f f . . . . 
        f f f f f f f f f f f f . . . . 
        f f f f f f f f f f f f . . . . 
        f f f f f f f f f f f f . . . . 
        f f f . . . . . . f f f . . . . 
        f f f . . . . . . . f . . . . . 
        f f f . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50, 50)
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
    . . . . . a a a a a . . . . . . 
    . . . . . . a a a . . . f f f . 
    . . . . . a a a a a a a f . . . 
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
