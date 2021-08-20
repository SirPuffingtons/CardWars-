const cards = [{
    _id: 0,
    name: 'Magical Moo-Moo',
    images: { // A set of all images representing this card, of which some are earned as rewards for gameplay, and others, from the in-game item shop.
        default: 'magical_moo-moo.jpg',
        winterWonderland: 'magical_moo-moo_ww.jpg'
    },
    crit: {default: 0.01, increment: 0.005}, // 1% crit chance; +0.5%/upgrade.
    dodge: {default: 0.01, increment: 0.005}, // 1% dodge chance; +0.5%/upgrade.
    hp: {default: 10, increment: 5}, // Has 10hp @ lvl 1. +5 hp/level.
    mp: {default: 25, increment: 5}, // Has 25mp @ lvl 1. +5 mp/level.
    xp: {default: 100, increment: 25}, // Needs 100xp @ lvl 1. +25 xp/level.
    actives: [ // The card's abilities/powers.
        {
            name: 'Udder Mayhem',
            description: 'You shake your udders vigorously, unleashing a deadly torrent of milk that targets all enemies for %d damage.',
            target: '*enemy', // *, enemy, *enemy, !enemy, ally, *ally, !ally, self, !self
            effect: ['reduce', 'hp', {default: 5, increment: 1}], // ['buff', 'hp', '5']; +1 hp damage to all enemies/upgrade point spent.
        }
    ],
    passives: {}, // The card's passive upgrades. Ex: +1% crit on [active] first use in a battle.
    ultimate: {} // The ultimate ability, which is earned by maxing out the card. Ultimates, once unlocked (while the maxed card is kept in the player's collection), are equippable as a regular tactic on ANY other owned card.
}]


// Converted to an array:
// [_id, imageId, level, currentXP, IF level !== 1: critUpgradePointsSpent, IF level !== 1: dodgeUpgradePointsSpent, []]

// EX: Level 1 Magical Moo-Moo: [0, 0, 1, 0, ]