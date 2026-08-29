enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction: Direction) {
    console.log(`Moving ${Direction[direction].toLowerCase()}`);
}

move(Direction.Down);