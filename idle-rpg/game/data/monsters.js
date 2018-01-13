const monsters = {
  rarity: [
    starving = {
      name: 'Starving',
      power: 0.05,
      stats: {
        str: 0.05,
        dex: 0.05,
        end: 0.05,
        int: 0.05,
        luk: 0.05
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.05
        },
        armor: {
          name: '',
          power: 0.05
        }
      },
      experience: 1,
      gold: 0.25,
      rarity: 75
    },
    normal = {
      name: 'Normal',
      power: 0.25,
      stats: {
        str: 0.25,
        dex: 0.25,
        end: 0.25,
        int: 0.25,
        luk: 0.25
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.25
        },
        armor: {
          name: '',
          power: 0.25
        }
      },
      experience: 1,
      gold: 1,
      rarity: 100
    },
    veteran = {
      name: 'Veteran',
      power: 0.5,
      stats: {
        str: 0.5,
        dex: 0.5,
        end: 0.5,
        int: 0.5,
        luk: 0.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.5
        },
        armor: {
          name: '',
          power: 0.5
        }
      },
      experience: 2,
      gold: 2,
      rarity: 65
    },
    elite = {
      name: 'Elite',
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      experience: 3,
      gold: 3,
      rarity: 45
    },
    champion = {
      name: 'Champion',
      power: 1,
      stats: {
        str: 1,
        dex: 1,
        end: 1,
        int: 1,
        luk: 1
      },
      equipment: {
        weapon: {
          name: '',
          power: 1
        },
        armor: {
          name: '',
          power: 1
        }
      },
      experience: 4,
      gold: 4,
      rarity: 25
    },
    legendary = {
      name: 'Legendary',
      power: 1.25,
      stats: {
        str: 1.25,
        dex: 1.25,
        end: 1.25,
        int: 1.25,
        luk: 1.25
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.25
        },
        armor: {
          name: '',
          power: 1.25
        }
      },
      experience: 5,
      gold: 5,
      rarity: 5
    },
    omega = {
      name: 'Omega',
      power: 1.5,
      stats: {
        str: 1.5,
        dex: 1.5,
        end: 1.5,
        int: 1.5,
        luk: 1.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.5
        },
        armor: {
          name: '',
          power: 1.5
        }
      },
      experience: 6,
      gold: 6,
      rarity: 2
    },
    undead = {
      name: 'Undead',
      power: 0.25,
      stats: {
        str: 0.25,
        dex: 0.25,
        end: 0.25,
        int: 0.25,
        luk: 0.25
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.25
        },
        armor: {
          name: '',
          power: 0.25
        }
      },
      experience: 1,
      gold: 1,
      rarity: 50
    },
    deadly = {
      name: 'Deadly',
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      experience: 6,
      gold: 6,
      rarity: 6
    },
    berserk = {
      name: 'Berserk',
      power: 1,
      stats: {
        str: 1,
        dex: 1,
        end: 1,
        int: 1,
        luk: 1
      },
      equipment: {
        weapon: {
          name: '',
          power: 1
        },
        armor: {
          name: '',
          power: 1
        }
      },
      experience: 3,
      gold: 1,
      rarity: 44
    },
    corrupted = {
      name: 'Corrupted',
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      experience: 1.5,
      gold: 1.5,
      rarity: 71
    },
  ],

  type: [
    rat = {
      name: 'Rat',
      isSpawnable: true,
      spawnableMapType: ['Land'],
      power: 0.05,
      stats: {
        str: 0.05,
        dex: 0.05,
        end: 0.05,
        int: 0.05,
        luk: 0.05
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.05
        },
        armor: {
          name: '',
          power: 0.05
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 4,
      gold: 2,
      rarity: 100
    },
    crab = {
      name: 'Crab',
      isSpawnable: true,
      spawnableMapType: ['Land'],
      power: 0.1,
      stats: {
        str: 0.1,
        dex: 0.1,
        end: 0.1,
        int: 0.1,
        luk: 0.1
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.1
        },
        armor: {
          name: '',
          power: 0.1
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 2,
      gold: 1,
      rarity: 100
    },
    slime = {
      name: 'Slime',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Snow'],
      power: 0.25,
      stats: {
        str: 0.25,
        dex: 0.25,
        end: 0.25,
        int: 0.25,
        luk: 0.25
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.25
        },
        armor: {
          name: '',
          power: 0.25
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 5,
      gold: 2,
      rarity: 100
    },
    goblin = {
      name: 'Goblin',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Snow'],
      power: 0.5,
      stats: {
        str: 0.5,
        dex: 0.5,
        end: 0.5,
        int: 0.5,
        luk: 0.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.5
        },
        armor: {
          name: '',
          power: 0.5
        }
      },
      experience: 6,
      gold: 2,
      rarity: 90
    },
    bandit = {
      name: 'Bandit',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Snow'],
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 10,
      gold: 3,
      rarity: 80
    },
    bat = {
      name: 'Bat',
      isSpawnable: true,
      spawnableMapType: ['Land'],
      power: 0.5,
      stats: {
        str: 0.5,
        dex: 0.5,
        end: 0.5,
        int: 0.5,
        luk: 0.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.5
        },
        armor: {
          name: '',
          power: 0.5
        }
      },
      experience: 7,
      gold: 4,
      rarity: 90
    },
    dragon = {
      name: 'Dragon',
      isSpawnable: true,
      spawnableMapType: ['Land'],
      power: 1.75,
      stats: {
        str: 1.75,
        dex: 1.75,
        end: 1.75,
        int: 1.75,
        luk: 1.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.75
        },
        armor: {
          name: '',
          power: 1.75
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 35,
      gold: 5,
      rarity: 65
    },
    knight = {
      name: 'Knight',
      isSpawnable: true,
      spawnableMapType: ['Land'],
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 25,
      gold: 6,
      rarity: 50
    },
    necromancer = {
      name: 'Necromancer',
      isSpawnable: true,
      spawnableMapType: ['Land'],
      power: 1,
      stats: {
        str: 1,
        dex: 1,
        end: 1,
        int: 1,
        luk: 1
      },
      equipment: {
        weapon: {
          name: '',
          power: 1
        },
        armor: {
          name: '',
          power: 1
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 30,
      gold: 7,
      rarity: 50
    },
    zombie = {
      name: 'Zombie',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Undead Land'],
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 15,
      gold: 3,
      rarity: 75
    },
    orc = {
      name: 'Orc',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Plains', 'Forest'],
      power: 1.25,
      stats: {
        str: 1.25,
        dex: 1.25,
        end: 1.25,
        int: 1.25,
        luk: 1.25
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.25
        },
        armor: {
          name: '',
          power: 1.25
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 20,
      gold: 8,
      rarity: 50
    },
    elf = {
      name: 'Elf',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Forest'],
      power: 1.5,
      stats: {
        str: 1.5,
        dex: 1.5,
        end: 1.5,
        int: 1.5,
        luk: 1.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.5
        },
        armor: {
          name: '',
          power: 1.5
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 20,
      gold: 9,
      rarity: 15
    },
    yeti = {
      name: 'Yeti',
      isXmasEvent: true,
      isSpawnable: false,
      spawnableMapType: ['Snow'],
      power: 1.75,
      stats: {
        str: 1.75,
        dex: 1.75,
        end: 1.75,
        int: 1.75,
        luk: 1.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.75
        },
        armor: {
          name: '',
          power: 1.75
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 25,
      gold: 12,
      rarity: 60
    },
    xmasGnome = {
      name: 'Christmas Gnome',
      isXmasEvent: true,
      isSpawnable: false,
      spawnableMapType: ['Snow'],
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 5,
      gold: 9,
      rarity: 95
    },
    basilisk = {
      name: 'Basilisk',
      isSpawnable: true,
      spawnableMapType: ['Mountains'],
      power: 1.5,
      stats: {
        str: 1.5,
        dex: 1.5,
        end: 1.5,
        int: 1.5,
        luk: 1.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.5
        },
        armor: {
          name: '',
          power: 1.5
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 27,
      gold: 9,
      rarity: 10
    },
    bugbear = {
      name: 'Bugbear',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Plains'],
      power: 0.85,
      stats: {
        str: 0.85,
        dex: 0.85,
        end: 0.85,
        int: 0.85,
        luk: 0.85
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.85
        },
        armor: {
          name: '',
          power: 0.85
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 5,
      gold: 3,
      rarity: 75
    },
    gargoyle = {
      name: 'Gargoyle',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Forest'],
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 20,
      gold: 6,
      rarity: 25
    },
    griffin = {
      name: 'Griffin',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Plains'],
      power: 1.1,
      stats: {
        str: 1.1,
        dex: 1.1,
        end: 1.1,
        int: 1.1,
        luk: 1.1
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.1
        },
        armor: {
          name: '',
          power: 1.1
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 8,
      gold: 8,
      rarity: 48
    },
    wereWolf = {
      name: 'Werewolf',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Forest'],
      power: 1,
      stats: {
        str: 1,
        dex: 1,
        end: 1,
        int: 1,
        luk: 1
      },
      equipment: {
        weapon: {
          name: '',
          power: 1
        },
        armor: {
          name: '',
          power: 1
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 11,
      gold: 11,
      rarity: 35
    },
    pixie = {
      name: 'Pixie',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Forest'],
      power: 0.5,
      stats: {
        str: 0.5,
        dex: 0.5,
        end: 0.5,
        int: 0.5,
        luk: 0.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.5
        },
        armor: {
          name: '',
          power: 0.5
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 2,
      gold: 2,
      rarity: 75
    },
    unicorn = {
      name: 'Unicorn',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Forest'],
      power: 0.75,
      stats: {
        str: 0.75,
        dex: 0.75,
        end: 0.75,
        int: 0.75,
        luk: 0.75
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.75
        },
        armor: {
          name: '',
          power: 0.75
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 5,
      gold: 4,
      rarity: 50
    },
    wraith = {
      name: 'Wraith',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Undead Land'],
      power: 1.5,
      stats: {
        str: 1.5,
        dex: 1.5,
        end: 1.5,
        int: 1.5,
        luk: 1.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.5
        },
        armor: {
          name: '',
          power: 1.5
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 4,
      gold: 5,
      rarity: 80
    },
    giantSpider = {
      name: 'Giant Spider',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Forest'],
      power: 0.85,
      stats: {
        str: 0.85,
        dex: 0.85,
        end: 0.85,
        int: 0.85,
        luk: 0.85
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.85
        },
        armor: {
          name: '',
          power: 0.85
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 7,
      gold: 7,
      rarity: 50
    },
    killerBee = {
      name: 'Killer Bee',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Forest'],
      power: 0.5,
      stats: {
        str: 0.5,
        dex: 0.5,
        end: 0.5,
        int: 0.5,
        luk: 0.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.5
        },
        armor: {
          name: '',
          power: 0.5
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 2,
      gold: 1,
      rarity: 90
    },
    golem = {
      name: 'Golem',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Mountains', 'Plains'],
      power: 1.5,
      stats: {
        str: 1.5,
        dex: 1.5,
        end: 1.5,
        int: 1.5,
        luk: 1.5
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.5
        },
        armor: {
          name: '',
          power: 1.5
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 8,
      gold: 8,
      rarity: 60
    },
    centaur = {
      name: 'Centaur',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Plains'],
      power: 1,
      stats: {
        str: 1,
        dex: 1,
        end: 1,
        int: 1,
        luk: 1
      },
      equipment: {
        weapon: {
          name: '',
          power: 1
        },
        armor: {
          name: '',
          power: 1
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 3,
      gold: 3,
      rarity: 71
    },
    cyclops = {
      name: 'Cyclops',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Mountains', 'Plains'],
      power: 0.95,
      stats: {
        str: 0.95,
        dex: 0.95,
        end: 0.95,
        int: 0.95,
        luk: 0.95
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.95
        },
        armor: {
          name: '',
          power: 0.95
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 5,
      gold: 3,
      rarity: 63
    },
    demon = {
      name: 'Demon',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Undead Land'],
      power: 1.3,
      stats: {
        str: 1.3,
        dex: 1.3,
        end: 1.3,
        int: 1.3,
        luk: 1.3
      },
      equipment: {
        weapon: {
          name: '',
          power: 1.3
        },
        armor: {
          name: '',
          power: 1.3
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 6,
      gold: 6,
      rarity: 66.6
    },
    elemental = {
      name: 'Elemental',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Plains', 'Forest', 'Mountains'],
      power: 1,
      stats: {
        str: 1,
        dex: 1,
        end: 1,
        int: 1,
        luk: 1
      },
      equipment: {
        weapon: {
          name: '',
          power: 1
        },
        armor: {
          name: '',
          power: 1
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 3,
      gold: 5,
      rarity: 73
    },
    sphinx = {
      name: 'Sphinx',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Desert'],
      power: 1,
      stats: {
        str: 1,
        dex: 1,
        end: 1,
        int: 1,
        luk: 1
      },
      equipment: {
        weapon: {
          name: '',
          power: 1
        },
        armor: {
          name: '',
          power: 1
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 10,
      gold: 15,
      rarity: 41
    },
    tribalWarrior = {
      name: 'Tribal Warrior',
      isSpawnable: true,
      spawnableMapType: ['Land', 'Forest', 'Plains'],
      power: 0.95,
      stats: {
        str: 0.95,
        dex: 0.95,
        end: 0.95,
        int: 0.95,
        luk: 0.95
      },
      equipment: {
        weapon: {
          name: '',
          power: 0.95
        },
        armor: {
          name: '',
          power: 0.95
        }
      },
      inventory: {
        items: []
      },
      spells: [],
      experience: 15,
      gold: 5,
      rarity: 33
    }
  ]
};
module.exports = monsters;
