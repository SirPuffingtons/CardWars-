const dbUserSchema = {
    cards: [
        '0_0_1_0_000_0000',
        '1_0_1_0_000_0000',
        '2_0_1_0_000_0000'
    ],
    gems: 0
}

export {dbUserSchema}

// *Will be converting to/from array to reduce DB bandwidth cost.
// [id, image, level, xp, tp, up]

// -> It would be cool if acquired cards could be random, thus increasing the replayability of the game. Although, this could make game balance difficult.


// BRILLIANT IDEA: Instead of evolving cards (or maybe that too), create a system where players can MERGE cards! That would be soooo cool :D