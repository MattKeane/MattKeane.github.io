const tiles1 = [
	new Floor(0, 0),
	new Wall(1, 0),
	new Button(2, 0, "purple", 0),
	new Floor(3, 0),
	new Floor(4, 0),
	new Wall(5, 0),
	new Goal(6, 0),
	new Lava(7, 0),
	new Wall(8, 0),
	new Floor(9, 0),
	new Floor(10, 0),
	new Floor(11, 0),
	new Floor(0, 1),
	new Wall(1, 1),
	new Lava(2, 1),
	new Lava(3, 1),
	new Floor(4, 1),
	new Wall(5, 1),
	new Floor(6, 1),
	new Floor(7, 1),
	new Wall(8, 1),
	new Floor(9, 1),
	new Wall(10, 1),
	new Floor(11, 1),
	new Floor(0, 2),
	new Wall(1, 2),
	new Floor(2, 2),
	new Floor(3, 2),
	new Floor(4, 2),
	new Wall(5, 2),
	new Wall(6, 2),
	new Floor(7, 2),
	new Wall(8, 2),
	new Floor(9, 2),
	new Wall(10, 2),
	new Floor(11, 2),
	new Floor(0, 3),
	new Wall(1, 3),
	new Floor(2, 3),
	new Wall(3, 3),
	new Wall(4, 3),
	new Wall(5, 3),
	new Floor(6, 3),
	new Floor(7, 3),
	new Wall(8, 3),
	new Floor(9, 3),
	new Wall(10, 3),
	new Floor(11, 3),
	new Floor(0, 4),
	new Wall(1, 4),
	new Floor(2, 4),
	new Wall(3, 4),
	new Goal(4, 4),
	new Wall(5, 4),
	new Floor(6, 4),
	new Wall(7, 4),
	new Wall(8, 4),
	new Floor(9, 4),
	new Wall(10, 4),
	new Floor(11, 4),
	new Floor(0, 5),
	new Wall(1, 5),
	new Floor(2, 5),
	new Wall(3, 5),
	new Floor(4, 5),
	new Wall(5, 5),
	new Gate(6, 5, "purple", 0),
	new Floor(7, 5),
	new Floor(8, 5),
	new Floor(9, 5),
	new Wall(10, 5),
	new Floor(11, 5),
	new Gate(0, 6, "green", 1),
	new Wall(1, 6),
	new Floor(2, 6),
	new Wall(3, 6),
	new Floor(4, 6),
	new Wall(5, 6),
	new Wall(6, 6),
	new Floor(7, 6),
	new Wall(8, 6),
	new Wall(9, 6),
	new Wall(10, 6),
	new Floor(11, 6),
	new Floor(0, 7),
	new Floor(1, 7),
	new Floor(2, 7),
	new Floor(3, 7),
	new Floor(4, 7),
	new Floor(5, 7),
	new Floor(6, 7),
	new Floor(7, 7),
	new Wall(8, 7),
	new Button(9, 7, "green", 1),
	new Floor(10, 7),
	new Floor(11, 7)
]

const level1 = new Level(2, 2, 830, 530, tiles1, 100)
game.addLevel(level1)

const tiles2 = [
	new Floor(0, 0),
	new Floor(1, 0),
	new Floor(2, 0),
	new Wall(3, 0),
	new Floor(4, 0),
	new Floor(5, 0),
	new Wall(6, 0),
	new Lava(7, 0),
	new Lava(8, 0),
	new Floor(9, 0),
	new Floor(10, 0),
	new Floor(11, 0),
	new Floor(0, 1),
	new Wall(1, 1),
	new Floor(2, 1),
	new Wall(3, 1),
	new Floor(4, 1),
	new Wall(5, 1),
	new Button(6, 1, "white", 0),
	new Floor(7, 1),
	new Floor(8, 1),
	new Floor(9, 1),
	new Wall(10, 1),
	new Floor(11, 1),
	new Floor(0, 2),
	new Wall(1, 2),
	new Gate(2, 2, "white", 0),
	new Wall(3, 2),
	new Floor(4, 2),
	new Button(5, 2, "green", 1),
	new Wall(6, 2),
	new Wall(7, 2),
	new Wall(8, 2),
	new Floor(9, 2),
	new Wall(10, 2),
	new Floor(11, 2),
	new Floor(0, 3),
	new Wall(1, 3),
	new Button(2, 3, "orange", 2),
	new Wall(3, 3),
	new Gate(4, 3, "red", 3),
	new Wall(5, 3),
	new Button(6, 3, "yellow", 4),
	new Floor(7, 3),
	new Gate(8, 3, "orange", 2),
	new Floor(9, 3),
	new Wall(10, 3),
	new Floor(11, 3),
	new Floor(0, 4),
	new Wall(1, 4),
	new Floor(2, 4),
	new Gate(3, 4, "yellow", 4),
	new Floor(4, 4),
	new Button(5, 4, "blue", 5),
	new Wall(6, 4),
	new Gate(7, 4, "blue", 5),
	new Wall(8, 4),
	new Wall(9, 4),
	new Wall(10, 4),
	new Floor(11, 4),
	new Floor(0, 5),
	new Wall(1, 5),
	new Wall(2, 5),
	new Wall(3, 5),
	new Wall(4, 5),
	new Wall(5, 5),
	new Button(6, 5, "red", 3),
	new Floor(7, 5),
	new Floor(8, 5),
	new Floor(9, 5),
	new Wall(10, 5),
	new Floor(11, 5),
	new Floor(0, 6),
	new Wall(1, 6),
	new Lava(2, 6),
	new Lava(3, 6),
	new Floor(4, 6),
	new Goal(5, 6),
	new Wall(6, 6),
	new Wall(7, 6),
	new Wall(8, 6),
	new Floor(9, 6),
	new Wall(10, 6),
	new Floor(11, 6),
	new Floor(0, 7),
	new Floor(1, 7),
	new Floor(2, 7),
	new Floor(3, 7),
	new Floor(4, 7),
	new Wall(5, 7),
	new Floor(6, 7),
	new Gate(7, 7, "green", 1),
	new Floor(8, 7),
	new Floor(9, 7),
	new Wall(10, 7),
	new Goal(11, 7)
]

const level2 = new Level(377, 2, 452, 530, tiles2, 100)
game.addLevel(level2)