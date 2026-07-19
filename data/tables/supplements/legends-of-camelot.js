/**
 * Legends of Camelot Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'legends-of-camelot-adventure',
    name: 'Legends of Camelot Adventure Tables',
    version: '1.0',
    enabled: true
  },

  tables: {
    adventure_seeds: {
      id: 'adventure_seeds',
      name: 'Adventure Seeds',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Retrieve Excalibur\'s Scabbard: The scabbard of Excalibur has been stolen, and you must retrieve it before its power falls into the wrong hands.', 'Rescue the Captive Knight: A noble knight has been captured by Saxon invaders. Free them before they are executed.', 'Investigate the Haunted Castle: Strange occurrences have been reported at an abandoned castle. Discover the source of the haunting.', 'Escort the Healer: A renowned healer needs protection as they travel to a distant village afflicted by a mysterious plague.', 'Quest for the Holy Grail: Join a group of knights on the sacred quest to find the Holy Grail, facing trials that test your faith and purity.', 'Defend the Village: A small village is under attack by marauding goblins. Rally the villagers and defend their homes.'],
        ['Uncover the Spy: There is a spy within Camelot\'s court leaking information to the Saxons. Unmask the traitor before more secrets are revealed.', 'Find the Lost Relic: A powerful relic from Arthurian legend has resurfaced. Locate and secure it before it falls into enemy hands.', 'Protect the Sacred Grove: Druids report that a sacred grove is being desecrated. Protect it from those who wish to exploit its power.', 'Negotiate the Alliance: Travel to a neighboring kingdom to negotiate a crucial alliance that could turn the tide against the Saxons.', 'Rescue the Merchant\'s Daughter: A merchant\'s daughter has been kidnapped by bandits. Track them down and bring her back safely.', 'Defend the Border: The Saxons are preparing to invade across the northern border. Lead a defensive force to repel their advance.'],
        ['Retrieve the Dragon Egg: A dragon\'s egg has been stolen from its nest. Return it before the enraged mother wreaks havoc.', 'Discover the Secret Passage: There are rumors of a hidden passage in Camelot leading to ancient treasures. Find and explore it.', 'Protect the Pilgrims: A group of pilgrims on their way to a holy site needs protection from bandits and wild beasts.', 'Investigate the Druid\'s Disappearance: A respected druid has gone missing under mysterious circumstances. Discover what happened to them.', 'Stop the Dark Ritual: A group of dark sorcerers plans to perform a ritual that could unleash chaos. Interrupt their ceremony and defeat them.', 'Escort the Royal Envoy: A royal envoy carrying important messages needs protection on their journey through hostile territory.'],
        ['Cure the Cursed Knight: A knight has been cursed with a terrible affliction. Find the cure and restore their honor.', 'Find the Hidden Treasure: Legends speak of a hidden treasure buried deep within an ancient forest. Seek out this treasure and claim it.', 'Rescue the Queen: Queen Guinevere has been kidnapped. Rescue her from her captors and bring her back to Camelot safely.', 'Investigate the Disappearance: Villagers are disappearing in a remote hamlet. Uncover the mystery behind these vanishings.', 'Seek the Prophecy: An old prophet holds the key to a future event that could save Camelot. Find them and learn their secrets.', 'Protect the Magical Artifact: An artifact with immense power has been discovered. Guard it against those who would misuse it.'],
        ['Save the Enchanted Forest: The enchanted forest is dying due to a dark curse. Find the source and lift the curse to save the forest.', 'Investigate the Cult: A secretive cult is gaining power and influence. Infiltrate the cult and uncover their plans.', 'Defend the Holy Site: A sacred site is under threat from marauders. Defend it and ensure its sanctity remains intact.', 'Aid the Rebellion: A group of oppressed villagers is planning a rebellion against a tyrannical lord. Decide whether to aid them in their fight for freedom.', 'Rescue the Captured Druid: A druid has been captured by Saxons for their knowledge. Rescue them and prevent the Saxons from gaining this wisdom.', 'Investigate the Strange Phenomenon: Unusual lights and sounds have been reported near an ancient ruin. Discover the cause of this phenomenon.'],
        ['Recover the Stolen Tomes: Important magical tomes have been stolen from Merlin\'s tower. Recover them before their secrets are exploited.', 'Escort the Princess: A foreign princess visiting Camelot needs protection as political tensions rise. Ensure her safety.', 'Stop the Bandit King: A notorious bandit king is terrorizing the countryside. Bring him to justice and restore peace to the land.', 'Discover the Ancient Library: An ancient library hidden in the depths of a forest holds forgotten knowledge. Find and preserve its secrets.', 'Investigate the Cursed Village: A village has been cursed with eternal night. Discover the source of the curse and bring back the light.', 'Reclaim the Haunted Fortress: A once-great fortress is now haunted by restless spirits. Clear the fortress and reclaim it for Camelot.'],
      ]
    },
    land_encounters: {
      id: 'land_encounters',
      name: 'Land Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A mysterious druid performing a ritual at a sacred grove, seeking aid to complete it.', 'A band of wandering minstrels offering news, gossip, and a chance to hear a new song.', 'A merchant caravan under attack by bandits, in desperate need of rescue.', 'An ancient stone circle where ghostly figures appear at dusk, reenacting an old battle.', 'A lone knight on a quest, who challenges you to a duel to test his skill.', 'A small village celebrating a harvest festival, inviting travelers to join their feast.'],
        ['A wandering sage who offers cryptic advice and a small magical trinket for the road.', 'A hidden cave revealed by a recent landslide, rumored to contain treasure or danger.', 'A group of refugees fleeing a Saxon raid, seeking protection and guidance to safety.', 'A dense fog that disorients travelers, leading them to an unexpected and magical place.', 'A band of merry outlaws who claim to rob the rich and aid the poor, offering a dubious alliance.', 'An abandoned monastery now overrun with wildlife and potentially haunted.'],
        ['A herd of wild horses led by a majestic, seemingly intelligent stallion.', 'A fairy ring where time seems to move differently, with enchanted creatures nearby.', 'A travelling potion-seller with a cart full of strange brews and concoctions.', 'A field of wildflowers with magical properties, attracting both beneficial and dangerous creatures.', 'A wounded dragon, surprisingly willing to bargain for aid rather than attack.', 'An old hermit living in the forest, possessing rare knowledge and perhaps a hidden quest.'],
        ['A patrol of Camelot knights seeking recruits or information on recent threats.', 'An ancient ruin with inscriptions that glow under moonlight, leading to hidden chambers.', 'A playful pixie who offers help but delights in harmless mischief.', 'A warband of Saxon scouts, preparing for a larger invasion force.', 'A mystical spring with waters that heal injuries and cure diseases, guarded by a spirit.', 'A village struck by a mysterious illness, the source of which must be found and cured.'],
        ['A traveling circus with exotic animals and performers, seeking patrons and protection.', 'A field of standing stones that hum with ancient magic, shifting and changing at night.', 'A knight from a rival kingdom, injured and in need of assistance, revealing a larger plot.', 'A pack of wolves behaving unusually, possibly under the control of a magical entity.', 'A hidden valley where time has stood still, filled with creatures and plants from a bygone era.', 'A merchant offering rare and exotic goods, but with a mysterious and possibly dangerous past.'],
        ['A swarm of enchanted butterflies that lead the way to a secret location.', 'A giant, friendly and lonely, who offers protection in exchange for companionship.', 'A bridge guarded by a troll demanding a toll or a challenge of wit.', 'A farmer whose crops are mysteriously flourishing, possibly due to magical intervention.', 'A cursed battlefield where the spirits of the dead seek resolution and peace.', 'A royal messenger bearing urgent news, requiring immediate escort and protection.'],
      ]
    },
    camelot_encounters: {
      id: 'camelot_encounters',
      name: 'Camelot Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A jousting tournament', 'A mysterious traveler with a cryptic message', 'A public execution being interrupted', 'A knight being accused of treason', 'An urgent call to defend a nearby village', 'A festival celebrating a recent victory'],
        ['A dispute between two knights', 'A lost child looking for their parents', 'A trader selling rare and magical goods', 'An old friend with a dire warning', 'A sudden storm disrupting daily life', 'An assassination attempt on a noble'],
        ['A hunt for a mythical beast', 'A witch trial in the village square', 'A secret meeting of conspirators', 'A knight returning from a failed quest', 'A scholar seeking help with an ancient text', 'A wandering minstrel with news from afar'],
        ['A magical phenomenon causing chaos', 'A knight seeking revenge for a fallen comrade', 'A dragon sighting near the borders', 'A duel to settle a matter of honor', 'A plea for aid from a distant ally', 'A sacred relic discovered in an unlikely place'],
        ['A healer offering their services', 'A squire looking to prove their worth', 'A strange illness spreading through the land', 'A knight with a cursed item', 'A hidden passage in the castle', 'A vision of a future calamity'],
        ['A royal decree causing unrest', 'A council meeting with a surprising agenda', 'A ghostly apparition warning of danger', 'A rebellion brewing in the lower ranks', 'A knight being haunted by past actions', 'A hidden treasure map found'],
      ]
    },
    village_and_town_events: {
      id: 'village_and_town_events',
      name: 'Village and Town Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A traveling circus arrives, bringing exotic animals and performers.', 'The local blacksmith unveils a new, enchanted weapon for sale.', 'A fire breaks out in the village, requiring immediate assistance.', 'A bard arrives, singing tales of ancient heroes and lost treasures.', 'A mysterious illness spreads through the town, seeking a healer.', 'The mayor organizes a festival to celebrate the harvest season.'],
        ['A group of refugees arrives, seeking shelter and food.', 'A local noble holds a feast, inviting prominent villagers to attend.', 'Strange lights are seen at night, causing fear among the townsfolk.', 'A merchant caravan sets up, offering rare goods and curiosities.', 'The village well runs dry, sparking a desperate search for water.', 'A wandering knight challenges the town\'s best fighters to a duel.'],
        ['An important relic is stolen from the village church.', 'The town\'s children go missing, last seen near the forest edge.', 'A fierce storm damages homes and the town\'s central marketplace.', 'A traveling fortune teller sets up shop, drawing curious villagers.', 'A rare celestial event is visible, said to be an omen of change.', 'The local healer discovers a new herbal remedy for common ailments.'],
        ['A famous chef opens a temporary stall, offering exotic dishes.', 'The village elder shares ancient stories around the communal fire.', 'A feud between two prominent families threatens to turn violent.', 'The village council debates whether to fortify the town\'s defenses.', 'A lost child is found, claiming to have been in a fairy\'s realm.', 'A visiting monk preaches about an impending doom and salvation.'],
        ['A secret tunnel is discovered beneath the town, leading to old ruins.', 'The local inn hosts a contest of strength and wit for prizes.', 'A wealthy patron commissions a new statue for the village square.', 'A troupe of actors performs a play about Camelot\'s legendary past.', 'The market is disrupted by a thief who steals valuable items.', 'A rare animal is sighted near the village, attracting hunters.'],
        ['An ancient tree in the village center is struck by lightning.', 'The village miller accuses a rival of sabotaging his grain supply.', 'A local herbalist discovers a new potion with strange effects.', 'An enigmatic traveler shares tales of distant lands and adventures.', 'The town crier announces a royal decree, affecting the villagers.', 'A hidden cache of old coins is found during construction work.'],
      ]
    },
    court_intrigues: {
      id: 'court_intrigues',
      name: 'Court Intrigues',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A noble accuses another of treason, demanding a trial by combat.', 'A mysterious letter is intercepted, hinting at a plot against the king.', 'A visiting ambassador offers a dubious alliance with a foreign power.', 'The queen\'s favorite maid is caught spying on private conversations.', 'A high-ranking knight is suspected of having an affair with a court lady.', 'A popular minstrel\'s song causes unrest among the court\'s factions.'],
        ['The king receives a gift with an unknown and possibly dangerous magic.', 'The royal treasury reports a significant amount of gold missing.', 'A secret meeting in the garden is overheard by a curious page.', 'The king\'s advisor is accused of using dark magic for personal gain.', 'A courtier claims to have proof of a noble\'s illegal activities.', 'The court\'s healer is questioned about a sudden illness in the palace.'],
        ['A foreign prince visits, stirring envy and intrigue among the nobles.', 'The princess is seen sneaking out of the palace at night.', 'A disgraced knight seeks reinstatement by revealing hidden secrets.', 'A banquet is disrupted by an uninvited guest with a grudge.', 'The king\'s advisor proposes a controversial new law.', 'A series of thefts in the palace leads to suspicion among the servants.'],
        ['A duel is arranged to settle a long-standing feud between nobles.', 'A rare artifact is brought to court, causing envy and disputes.', 'The court jester overhears a plot and must decide whom to trust.', 'A sudden change in the king\'s behavior leads to rumors of enchantment.', 'The royal cook is accused of poisoning a nobleman\'s meal.', 'A powerful noble seeks to marry into the royal family by any means.'],
        ['An ancient prophecy is revealed, concerning the fate of the kingdom.', 'The king\'s scribe uncovers forged documents in the royal archives.', 'A secret passage in the palace is discovered, leading to old secrets.', 'A foreign dignitary\'s gift is rumored to be cursed.', 'The court\'s alchemist claims to have found the elixir of life.', 'A noblewoman\'s diary is stolen, revealing court secrets.'],
        ['The royal huntsman discovers a plot during a hunt.', 'The king\'s champion is challenged by a mysterious knight.', 'A beloved pet of the queen goes missing, causing a stir in the court.', 'The king\'s advisor is blackmailed by an unknown figure.', 'The royal seamstress finds a hidden message in the king\'s robes.', 'A visiting noble\'s retinue causes trouble, escalating tensions.'],
      ]
    },
    mystical_and_supernatural_events: {
      id: 'mystical_and_supernatural_events',
      name: 'Mystical and Supernatural Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A comet streaks across the sky, seen as an omen by all.', 'A ghostly figure appears in the village, delivering cryptic messages.', 'A sacred tree begins to bleed sap, drawing attention and fear.', 'The spirits of the forest demand a tribute from those who enter.', 'A sudden eclipse causes panic and strange behavior in animals.', 'A mysterious fog envelops the town, with whispers heard within.'],
        ['A fairy offers to grant a single wish, but with hidden consequences.', 'An enchanted mirror reveals visions of the past and future.', 'A rain of frogs falls from the sky, baffling villagers.', 'A dragon is seen flying over the mountains, stirring old fears.', 'A mystical portal appears, leading to an unknown and magical realm.', 'The dead rise from their graves, seeking peace or revenge.'],
        ['A rare flower blooms under the moonlight, said to have magical powers.', 'The waters of a local river turn to blood, sparking fear of a curse.', 'An ancient artifact begins to glow and hum, awakening its powers.', 'A mysterious light is seen moving through the forest at night.', 'A thunderstorm of unnatural intensity threatens the region.', 'A legendary beast is sighted, prompting a hunt.'],
        ['A cursed item is found in the market, bringing misfortune to its buyer.', 'The local healer is revealed to be a witch with dark secrets.', 'A mysterious illness spreads, resistant to all known cures.', 'A prophecy foretells a great disaster unless a hero intervenes.', 'Strange runes appear on the walls of buildings overnight.', 'A child is born with a mysterious mark, believed to be a sign.'],
        ['The moon turns red, causing widespread panic and superstition.', 'A magical creature, such as a unicorn, is found injured and needs help.', 'A storm uncovers an ancient burial ground with restless spirits.', 'A powerful sorcerer arrives, seeking to test the locals\' bravery.', 'An invisible force begins to haunt a local household.', 'A well-known local disappears, only to return with no memory and strange powers.'],
        ['A celestial alignment is said to open a portal to another world.', 'A sacred animal, like a white stag, is seen wandering near the town.', 'A mysterious book is found, filled with unknown symbols and spells.', 'A sudden and unseasonable snowfall blankets the region.', 'A famous landmark begins to crumble, revealing hidden passages.', 'A powerful relic is found, causing strife among those who seek its power.'],
      ]
    },
    relics_and_artifacts: {
      id: 'relics_and_artifacts',
      name: 'Relics and Artifacts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The Sword of Light: A weapon said to banish darkness and evil.', 'The Chalice of Healing: A cup that can heal any wound or illness.', 'The Amulet of Truth: A pendant that reveals lies and deceit.', 'The Crown of Wisdom: A circlet that grants the wearer immense knowledge.', 'The Boots of Swiftness: Footwear that allows the wearer to move at incredible speed.', 'The Shield of Valor: A shield that can withstand any attack.'],
        ['The Cloak of Invisibility: A garment that renders the wearer unseen.', 'The Ring of Protection: A ring that shields the wearer from harm.', 'The Staff of Power: A staff that can channel powerful magical energies.', 'The Book of Spells: A tome containing rare and powerful spells.', 'The Necklace of Serenity: A necklace that calms the mind and spirit.', 'The Lantern of Guidance: A lantern that lights the way through any darkness.'],
        ['The Gauntlets of Strength: Gloves that bestow immense physical power.', 'The Mirror of Seeing: A mirror that shows distant places and people.', 'The Belt of Fortitude: A belt that enhances the wearer\'s endurance.', 'The Gem of Foresight: A gem that grants visions of the future.', 'The Pendant of Silence: A pendant that silences all noise around the wearer.', 'The Helm of Courage: A helmet that fills the wearer with unshakeable bravery.'],
        ['The Stone of Binding: A stone that can trap spirits or magical entities.', 'The Scroll of Summoning: A scroll that can summon powerful beings to aid the user.', 'The Flute of Enchantment: An instrument that can charm creatures and people.', 'The Armor of Invincibility: A suit of armor that renders the wearer invulnerable.', 'The Horn of Calling: A horn that can call for help from any ally, no matter how distant.', 'The Map of Secrets: A map that reveals hidden places and treasures.'],
        ['The Rod of Command: A rod that grants the user authority over others.', 'The Bracers of Defense: Bracers that enhance the wearer\'s defensive abilities.', 'The Orb of Knowledge: An orb that contains all the wisdom of the ages.', 'The Ring of Invisibility: A ring that makes the wearer invisible.', 'The Torch of Eternal Flame: A torch that never goes out and can burn anything.', 'The Boots of Levitation: Boots that allow the wearer to float above the ground.'],
        ['The Crystal of Memory: A crystal that stores and reveals memories.', 'The Spear of Destiny: A spear that always finds its mark.', 'The Bracelet of Binding: A bracelet that binds the wearer to a powerful entity.', 'The Helm of Shadows: A helmet that allows the wearer to blend into shadows.', 'The Wand of Transformation: A wand that can transform objects and beings.', 'The Crown of Kings: A crown that grants the wearer the right to rule.'],
      ]
    },
    npcs_and_allies: {
      id: 'npcs_and_allies',
      name: 'NPCs and Allies',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Sir Gareth, a loyal knight seeking to prove his valor.', 'Lady Elenora, a noblewoman with a mysterious past.', 'Merlin, the enigmatic wizard with vast knowledge and power.', 'Gwen, a skilled healer and herbalist with a kind heart.', 'Lord Cedric, a powerful noble with ambitions for the throne.', 'Bryn, a mischievous bard with a talent for getting into trouble.'],
        ['Father Thomas, a wise and pious priest with a hidden strength.', 'The Blacksmith, a rugged craftsman with a heart of gold.', 'Lady Isolde, a beautiful noblewoman with a tragic love story.', 'The Huntsman, a skilled tracker and archer familiar with the wilds.', 'Sir Lancelot, the greatest knight of the Round Table.', 'Morgana le Fay, a sorceress with shifting loyalties.'],
        ['The Merchant, a shrewd trader with access to rare goods.', 'The Beggar, an apparently lowly figure with valuable information.', 'Lady Guinevere, the queen with a complicated love life.', 'The Druid, a keeper of ancient knowledge and nature\'s secrets.', 'Sir Galahad, a knight of pure heart on a sacred quest.', 'The Fisherman, a humble man who knows the secrets of the seas.'],
        ['The Witch, an outcast with powerful and dangerous magic.', 'The Squire, a young and eager assistant to a knight.', 'The Minstrel, a traveling musician with tales of distant lands.', 'The Scholar, an educated advisor with a wealth of knowledge.', 'The Hermit, a reclusive figure with unexpected wisdom.', 'The Stablemaster, skilled in handling horses and other animals.'],
        ['The Spy, a shadowy figure gathering intelligence for an unknown master.', 'The Seamstress, a master of clothing and disguise.', 'The Alchemist, experimenting with potions and strange materials.', 'The Ship Captain, knowledgeable of maritime routes and dangers.', 'The Fortune Teller, a mysterious figure with predictions for the future.', 'The Woodsman, a rugged individual with deep knowledge of the forests.'],
        ['The Thief, a nimble and resourceful character with a checkered past.', 'The Farmer, a sturdy and reliable source of local news and resources.', 'The Apothecary, mixing remedies and poisons with equal skill.', 'The Cook, creating meals that inspire and sustain weary travelers.', 'The Diplomat, skilled in negotiation and intrigue.', 'The Artist, capturing the beauty and sorrow of the world in their work.'],
      ]
    },
    holy_and_sacred_sites: {
      id: 'holy_and_sacred_sites',
      name: 'Holy and Sacred Sites',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The Abbey of Glastonbury, a center of Christian pilgrimage.', 'The Chalice Well, believed to hold healing waters.', 'The Holy Tree, an ancient oak revered by druids and villagers alike.', 'The Shrine of St. Alban, a site of miracles and prayers.', 'The Sacred Grove, a hidden place where druids perform their rituals.', 'The Chapel of the Sword, where knights receive blessings for battle.'],
        ['The Stone Circle, used for celestial observations and rituals.', 'The Well of Prophecy, where seekers come for visions of the future.', 'The Church of the Holy Grail, housing a relic of the sacred quest.', 'The Monastery of the Silent Order, a place of deep contemplation.', 'The Pilgrim\'s Path, a long and arduous journey to a holy site.', 'The Altar of the Moon, where ceremonies are held under the full moon.'],
        ['The Tower of Light, a beacon of hope and sanctuary.', 'The Cave of Saints, where holy men and women sought refuge.', 'The Field of Martyrs, a place of reverence for those who died for their faith.', 'The Fountain of Youth, said to restore youth to those who drink from it.', 'The Temple of the Sun, dedicated to the worship of solar deities.', 'The Hermit\'s Retreat, a solitary place of worship and isolation.'],
        ['The Isle of Avalon, a mystical place of healing and magic.', 'The Chapel of the Stars, where celestial events are celebrated.', 'The Mount of Ascension, where it is said saints ascended to heaven.', 'The Tomb of the Unknown King, a place of mystery and reverence.', 'The Crossroads Shrine, a place of offerings for safe travels.', 'The Grove of the Ancients, where the oldest trees in the land stand.'],
        ['The Blessed River, where pilgrims bathe for purification.', 'The Mountain Monastery, perched high and isolated, a place of trials.', 'The Deserted Abbey, once holy, now a place of pilgrimage and mystery.', 'The Enchanted Meadow, where faeries are said to dance.', 'The Holy Spring, said to be blessed by a saint.', 'The Wishing Well, where prayers and hopes are cast.'],
        ['The Hidden Chapel, a secret place of worship during times of persecution.', 'The Stone Altar, ancient and mysterious, used in old rituals.', 'The Tree of Life, an ancient symbol of eternity and rebirth.', 'The Lighthouse of the Saints, guiding pilgrims to holy sites.', 'The Relic House, where sacred artifacts are kept and venerated.', 'The Cave of Miracles, where many have witnessed divine events.'],
      ]
    },
    trials_and_challenges: {
      id: 'trials_and_challenges',
      name: 'Trials and Challenges',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Survive a night in a haunted forest without any light.', 'Defeat a formidable champion in a single combat duel.', 'Navigate through a labyrinth to retrieve a sacred relic.', 'Solve the riddles posed by an ancient, talking statue.', 'Climb the highest mountain to seek wisdom from a hermit.', 'Rescue a noble\'s child from a bandit camp.'],
        ['Endure a series of grueling physical tests to prove your worth.', 'Debate a wise sage on matters of philosophy and ethics.', 'Recover an artifact from a dragon’s lair without waking it.', 'Escort a fragile but crucial cargo through bandit-infested lands.', 'Prove your loyalty by resisting a tempting bribe or offer.', 'Restore peace between two feuding families through negotiation.'],
        ['Complete a pilgrimage to a distant holy site and return safely.', 'Protect a village from an oncoming invasion of wild beasts.', 'Retrieve a stolen artifact from a heavily guarded fortress.', 'Decipher an ancient text to unlock a hidden treasure.', 'Endure a trial by fire, walking over hot coals to prove your faith.', 'Face a trial of faith, resisting the temptations of an evil sorcerer.'],
        ['Survive a week in the wilderness with only minimal supplies.', 'Convince a reclusive sage to share their hidden knowledge.', 'Win a grand tournament, defeating all challengers.', 'Break a powerful curse placed on a beloved figure in your life.', 'Discover the true identity of a masked vigilante.', 'Escort a group of pilgrims through dangerous territory.'],
        ['Uncover and foil a plot to assassinate a prominent noble.', 'Prove your worth to join an elite order of knights.', 'Survive a shipwreck and find your way back to civilization.', 'Win the trust of a suspicious and powerful ally.', 'Capture a notorious criminal alive and bring them to justice.', 'Solve a series of complex puzzles to open an ancient vault.'],
        ['Endure the elements to deliver a crucial message to a distant lord.', 'Overcome a powerful enchantment placed upon you.', 'Guide a lost soul to its final resting place.', 'Defend a fort from a siege until reinforcements arrive.', 'Retrieve a magical item from the bottom of a treacherous lake.', 'Escape from a dungeon using only your wits and the tools at hand.'],
      ]
    },
    market_and_trade_encounters: {
      id: 'market_and_trade_encounters',
      name: 'Market and Trade Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A traveling merchant offers rare spices from distant lands.', 'A mysterious peddler sells magical trinkets with dubious origins.', 'A heated argument between two traders over the price of a rare item.', 'A pickpocket is caught stealing, sparking a chase through the market.', 'A trader offers a map to a hidden treasure for a steep price.', 'A blacksmith demonstrates a newly forged, enchanted weapon.'],
        ['A foreign dignitary arrives, seeking to establish trade relations.', 'A craftsman reveals a masterpiece, drawing crowds to his stall.', 'A beggar claims to know the secret location of a lost artifact.', 'A herbalist sells potions said to cure any ailment.', 'A suspicious figure offers to buy rare goods under the table.', 'A street performer attracts attention with astonishing feats.'],
        ['A trader claims to sell relics from Camelot\'s legendary past.', 'A bard sings tales of adventure, inspiring new quests.', 'A rare animal is for sale, but its origins are questionable.', 'A local lord inspects the market, causing a stir among the vendors.', 'A competition is held for the best-crafted item in the market.', 'A cart breaks down, blocking a busy thoroughfare.'],
        ['A mysterious stranger offers to trade knowledge for goods.', 'An alchemist sells a powerful but dangerous potion.', 'A group of pilgrims buy supplies for their journey to a holy site.', 'A sudden downpour disrupts the market, causing chaos.', 'A merchant sells exotic fabrics and jewels from far-off lands.', 'A rumor spreads of a hidden gem within the market, sparking a frenzy.'],
        ['A noblewoman commissions a unique piece of jewelry.', 'An old friend or rival appears, offering a new opportunity or challenge.', 'A rare book dealer showcases a tome of ancient spells.', 'A guard patrols the market, looking for smugglers and thieves.', 'A baker offers a special treat that grants temporary strength.', 'A pet shop displays magical creatures for sale.'],
        ['A traveling circus sets up a small show, attracting many.', 'An auction is held for a mysterious and powerful artifact.', 'A child is lost in the market, seeking help to find their parents.', 'A nobleman loses a precious item, offering a reward for its return.', 'A wandering monk offers blessings and wisdom in exchange for alms.', 'A scandal breaks out over a fake relic being sold as genuine.'],
      ]
    },
    battles_and_skirmishes: {
      id: 'battles_and_skirmishes',
      name: 'Battles and Skirmishes',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A sudden ambush by bandits while traveling through a dense forest.', 'A clash between rival noble houses over disputed land.', 'Defend a village from a marauding group of orcs or other monsters.', 'A skirmish breaks out at a border fort with an invading force.', 'A jousting tournament turns deadly due to sabotage.', 'Protect a caravan from an attacking warband during a journey.'],
        ['Repel an attack on a castle during a siege by an enemy army.', 'Engage in a night raid to rescue prisoners from a heavily guarded camp.', 'A naval skirmish against pirates threatening the coastline.', 'A battle in the ruins of an ancient temple, fighting for a relic.', 'An arena fight against a series of increasingly challenging foes.', 'A large-scale battle against an undead horde raised by dark magic.'],
        ['A fight to defend a sacred site from desecration by invaders.', 'A street brawl in a town market that escalates into a larger conflict.', 'An escort mission turns into a battle against an ambushing force.', 'A duel to the death to settle a long-standing blood feud.', 'An unexpected battle against mythical creatures in a forest glade.', 'A skirmish during a hunt for a dangerous beast threatening the region.'],
        ['Defend a fort from a surprise attack by mercenaries.', 'Engage in a battle on a bridge, critical for strategic advantage.', 'A fight against rebels in a besieged city.', 'A defensive stand in a narrow pass against overwhelming odds.', 'A skirmish in the mountains against bandits hiding in the crags.', 'An assault on a fortified manor held by traitors.'],
        ['A battle in a desert against raiders, where heat becomes a factor.', 'A fight to protect a wizard conducting a crucial ritual.', 'A clash in the marshes against creatures rising from the bogs.', 'Defend a ferry crossing against an attacking force.', 'A battle in the snow against invaders from the north.', 'A skirmish in the ruins of a once-great city, haunted by its past.'],
        ['A fight on a cliffside, where footing is as dangerous as the enemy.', 'Engage in a battle in the heart of a dense forest, using the terrain.', 'A siege of a rebel stronghold, requiring tactical genius to win.', 'A fight on the open plains against mounted raiders.', 'Defend a sacred grove from being burnt by dark forces.', 'A final stand against overwhelming odds to protect innocents.'],
      ]
    },
    siege_and_defense_scenarios: {
      id: 'siege_and_defense_scenarios',
      name: 'Siege and Defense Scenarios',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Defend a castle against a prolonged siege by enemy forces.', 'Hold the walls of a city under assault until reinforcements arrive.', 'Defend a mountain pass that is the key to a kingdom\'s defense.', 'Protect a fortified village from a night-time raid.', 'Hold the line at a river crossing against an advancing army.', 'A surprise siege on a town during a festival, with civilians to protect.'],
        ['Defend a monastery containing sacred artifacts from pillagers.', 'A last stand in a crumbling fortress with limited supplies.', 'Protect a vital supply route from being cut off by enemy forces.', 'Defend a wizard\'s tower that holds ancient and powerful knowledge.', 'Hold a narrow bridge that is the only crossing for miles.', 'Defend against a siege where the attackers use siege engines and towers.'],
        ['Protect a hidden sanctuary from discovery and assault.', 'Hold a fortified manor house against a surprise attack.', 'Defend a watchtower crucial for signaling allies.', 'Protect the gates of a city during a sudden invasion.', 'Defend a small fort in the wilderness from a larger enemy force.', 'Hold a sacred site from desecration by dark forces.'],
        ['Protect a town\'s food stores during a siege to prevent starvation.', 'Defend a beacon hill, crucial for communication with allied forces.', 'Hold a defensive line in a marshland where terrain plays a critical role.', 'Defend a castle keep during the final assault after the walls are breached.', 'Protect a series of tunnels under a city from being infiltrated.', 'Hold the fortifications of a port city against a naval siege.'],
        ['Defend an island fortress surrounded by treacherous waters.', 'Protect a mountain monastery from an overwhelming force.', 'Hold the walls of a newly built fort under its first test by enemies.', 'Defend a trade post crucial for supplies and communication.', 'Protect a sacred tree believed to hold the spirit of the land.', 'Hold the ruins of an ancient fort, using its traps and secret passages.'],
        ['Defend a border fort under attack from a rival kingdom.', 'Hold a river fortification crucial for controlling water supplies.', 'Protect a series of barricades in a besieged town.', 'Defend a magical nexus point from dark sorcerers.', 'Hold the defenses of a high cliff-side fortress.', 'Protect a key defensive tower that oversees a vast region.'],
      ]
    },
    wizard_and_sorcerer_encounters: {
      id: 'wizard_and_sorcerer_encounters',
      name: 'Wizard and Sorcerer Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A reclusive wizard offers powerful but risky enchantments.', 'A sorcerer seeks rare components for a grand ritual.', 'A young apprentice accidentally unleashes a dangerous spell.', 'An ancient wizard offers wisdom in exchange for a rare artifact.', 'A sorceress requests aid in completing a protection spell.', 'A wizard\'s tower appears overnight, surrounded by mystery.'],
        ['A rogue magician causes chaos in a village with uncontrolled magic.', 'A sorcerer offers to teach powerful spells for a price.', 'An old wizard is found trapped in a magical prison.', 'A young mage seeks help to control burgeoning powers.', 'A wizard\'s familiar asks for help to rescue its master.', 'A group of sorcerers conducts a forbidden ritual in secret.'],
        ['A wandering mage offers protective charms against dark magic.', 'A sorcerer challenges you to a magical duel to prove supremacy.', 'A wizard seeks adventurers to retrieve a lost spellbook.', 'An enchanted item from a sorcerer causes unforeseen complications.', 'A powerful magician requests assistance in a delicate experiment.', 'A sorceress reveals a prophecy involving the players.'],
        ['A wizard\'s curse affects a nearby town, seeking a solution.', 'An alchemist creates a potion that grants temporary magical abilities.', 'A mage constructs a magical barrier around a sacred site.', 'A powerful artifact falls into the hands of an inexperienced wizard.', 'A sorcerer offers to enhance weapons with elemental powers.', 'A magician needs protection while performing a dangerous spell.'],
        ['A wizard\'s tower is under siege by dark forces.', 'A sorcerer seeks revenge on a rival and asks for help.', 'A powerful wizard disguises themselves as a beggar to test others.', 'A young sorcerer is possessed by a malevolent spirit.', 'A mage\'s experiment goes wrong, causing magical anomalies.', 'A wizard offers to teleport you to a distant land for a quest.'],
        ['An enchanted forest is protected by a powerful sorceress.', 'A wizard\'s tower is found abandoned, filled with traps and secrets.', 'A sorcerer offers to break a powerful curse affecting the players.', 'A mysterious mage warns of a coming magical catastrophe.', 'A sorceress asks for help in finding a lost magical artifact.', 'A powerful wizard summons you for an urgent and secretive mission.'],
      ]
    },
    druidic_rituals_and_ceremonies: {
      id: 'druidic_rituals_and_ceremonies',
      name: 'Druidic Rituals and Ceremonies',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A solstice ceremony to honor the sun and ask for bountiful harvests.', 'A healing ritual in a sacred grove to cure the sick and wounded.', 'A ceremony to bless a new chieftain or leader in the community.', 'A moonlit ritual to communicate with the spirits of the forest.', 'A ritual to invoke rain during a prolonged drought.', 'A fertility ceremony to bless the land and ensure abundant crops.'],
        ['A cleansing ritual to remove dark magic from a sacred site.', 'A divination ceremony to foresee future events and guide decisions.', 'A ritual to honor the ancestors and seek their wisdom.', 'A protective ceremony to ward off evil spirits and creatures.', 'A ceremony to mark the turning of the seasons and celebrate nature.', 'A ritual to consecrate a new sacred grove or holy site.'],
        ['A ceremony to call upon the animal spirits for guidance.', 'A ritual to banish a malevolent entity haunting the land.', 'A ceremony to bless a warrior before a great battle.', 'A ritual to heal the land after it has been ravaged by war or disaster.', 'A ceremony to honor the gods and goddesses of nature.', 'A ritual to seek the favor of the spirits for a new endeavor.'],
        ['A harvest festival celebrating the abundance of the earth.', 'A ritual to protect a village from an impending threat.', 'A ceremony to communicate with a sacred tree or stone.', 'A ritual to calm a raging storm and bring peace.', 'A ceremony to mark the passing of a respected elder or druid.', 'A ritual to awaken the guardian spirits of the forest.'],
        ['A ceremony to cleanse a cursed artifact and restore its purity.', 'A ritual to seek the blessing of the moon for magical endeavors.', 'A ceremony to celebrate the birth of a child and welcome them to the community.', 'A ritual to ensure safe passage for travelers through dangerous lands.', 'A ceremony to bind two souls together in marriage.', 'A ritual to call forth a sacred animal as a guide and protector.'],
        ['A ceremony to honor the spirits of the waters and ask for their blessings.', 'A ritual to seek forgiveness from the land for past wrongs.', 'A ceremony to mark the end of a long and harsh winter.', 'A ritual to celebrate the full moon and its magical properties.', 'A ceremony to honor the fire spirits and ask for their strength.', 'A ritual to communicate with the ancient druids and seek their wisdom.'],
      ]
    },
    magical_phenomena: {
      id: 'magical_phenomena',
      name: 'Magical Phenomena',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A sudden and unexplained aurora lights up the night sky.', 'A mysterious fog rolls in, causing disorientation and strange visions.', 'A rain of small, glowing crystals falls from the sky.', 'A river temporarily flows backwards, defying natural laws.', 'A field of flowers blooms overnight, each petal shimmering with magic.', 'A strange, ethereal music is heard, with no apparent source.'],
        ['A tree begins to speak, offering wisdom and prophecy.', 'A sudden burst of light reveals hidden runes on an ancient stone.', 'A series of strange symbols appear in crops, arranged in a perfect circle.', 'A patch of land becomes weightless, causing objects to float.', 'A mystical light guides travelers through a dark forest.', 'A mirror reflects not the present, but scenes from the past.'],
        ['A sudden snowfall in midsummer covers the land in ice.', 'A rainbow appears at night, its ends glowing with a strange energy.', 'A whirlpool forms in the sky, drawing in clouds and birds.', 'A waterfall flows upwards, defying gravity.', 'Shadows behave independently, mimicking actions or showing futures.', 'A full moon stays in the sky for an entire day.'],
        ['A forest grove glows with an inner light, revealing hidden pathways.', 'A sudden eclipse brings darkness and whispers of forgotten lore.', 'A lake turns to crystal, trapping fish and boats in its solid form.', 'A mountain briefly lifts into the sky, revealing hidden caverns.', 'A burst of magical energy changes the color of the sky and the land.', 'A series of footprints glow with a faint light, leading to a hidden place.'],
        ['An entire village becomes invisible for a day, only to reappear unchanged.', 'A river sings, its waters forming words and melodies.', 'A storm of pure magic sweeps across the land, changing everything it touches.', 'A circle of standing stones glows under the light of the full moon.', 'A bird speaks in riddles, offering cryptic advice.', 'A mist rises from the ground, revealing hidden objects and creatures.'],
        ['A sudden bloom of flowers changes the landscape overnight.', 'An echoing roar from the mountains, heard but never seen.', 'A flash of light from the horizon, visible from miles away.', 'A sudden silence falls, muting all sound in the area.', 'A ghostly figure appears, repeating the same actions endlessly.', 'A storm of fireflies illuminates the night, forming shapes and patterns.'],
      ]
    },
    royal_decrees_and_orders: {
      id: 'royal_decrees_and_orders',
      name: 'Royal Decrees and Orders',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A decree to raise taxes to fund a new castle.', 'An order to fortify the town\'s defenses against potential invasions.', 'A proclamation to celebrate a week-long festival in the kingdom.', 'A decree to establish a new knightly order for the protection of the realm.', 'An order to collect all enchanted artifacts for safekeeping.', 'A proclamation to build a grand library to preserve knowledge.'],
        ['A decree to create new trade routes with distant lands.', 'An order to search for and destroy all dark magic artifacts.', 'A proclamation to host a grand tournament for knights from all over.', 'A decree to expand the kingdom\'s borders through exploration.', 'An order to build a series of new roads connecting major towns.', 'A proclamation to pardon certain criminals and grant them a second chance.'],
        ['A decree to increase the kingdom\'s military forces.', 'An order to search for the missing heir to the throne.', 'A proclamation to honor a fallen hero with a statue in the capital.', 'A decree to establish a new monastery in a remote area.', 'An order to investigate rumors of rebellion in the southern regions.', 'A proclamation to fund a series of public works, including new wells and granaries.'],
        ['A decree to outlaw certain dangerous magical practices.', 'An order to host a summit of neighboring kingdoms to discuss peace.', 'A proclamation to reward anyone who brings news of the Grail\'s location.', 'A decree to increase the kingdom\'s fleet for naval defense.', 'An order to relocate a village threatened by natural disasters.', 'A proclamation to celebrate the king\'s jubilee with games and feasts.'],
        ['A decree to construct a series of watchtowers along the border.', 'An order to recover a stolen relic of great importance.', 'A proclamation to offer a reward for the capture of a notorious bandit.', 'A decree to commission a new royal ship for exploration.', 'An order to conscript able-bodied men into the army.', 'A proclamation to establish a new law protecting magical creatures.'],
        ['A decree to hold a council to discuss the kingdom\'s future.', 'An order to repair and restore ancient ruins of historical significance.', 'A proclamation to lower taxes on farmers to increase food production.', 'A decree to send envoys to distant lands for new alliances.', 'An order to establish a network of spies for intelligence gathering.', 'A proclamation to find and support local inventors and scholars.'],
      ]
    },
    travel_and_journey_events: {
      id: 'travel_and_journey_events',
      name: 'Travel and Journey Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Encounter a broken bridge, requiring a detour or repair.', 'Discover an ancient stone marker with mysterious inscriptions.', 'A sudden storm forces travelers to seek shelter in a cave.', 'Meet a group of pilgrims heading to a distant holy site.', 'Come across a wounded animal needing aid.', 'Find an abandoned campsite with signs of a struggle.'],
        ['Encounter a merchant caravan offering exotic goods.', 'Cross paths with a patrol of knights on a mission.', 'Spot a distant fire, possibly a village in trouble.', 'Travel through a dense forest where the path is hard to follow.', 'Find a hidden grove with a magical aura.', 'Encounter a bridge troll demanding a toll for passage.'],
        ['Meet a wandering bard who shares news and songs.', 'A river crossing proves more difficult than expected.', 'A beautiful vista offers a moment of peace and reflection.', 'Find a lost child searching for their family.', 'A fork in the road with no clear sign which way to go.', 'Encounter a group of refugees fleeing from conflict.'],
        ['Discover an ancient ruin off the beaten path.', 'Travel through a haunted forest where spirits appear.', 'A sudden landslide blocks the road ahead.', 'Meet a mysterious traveler with a cryptic message.', 'Find a hidden cache of supplies left by a previous traveler.', 'Encounter a group of soldiers looking for deserters.'],
        ['A clear night reveals a sky full of stars, perfect for navigation.', 'Come across a festival in a small village along the way.', 'A merchant offers to trade rare items for local goods.', 'A lost and confused animal joins your journey.', 'Find an old map with a route to a hidden treasure.', 'Encounter a group of bandits planning an ambush.'],
        ['A guide offers to show a shortcut through dangerous territory.', 'A mystical fog descends, making navigation nearly impossible.', 'Cross a desolate wasteland where nothing grows.', 'A riddle carved into a rock that hints at nearby secrets.', 'Encounter a group of pilgrims on a sacred journey.', 'Find a magical spring said to grant visions of the future.'],
      ]
    },
    legends_and_myths: {
      id: 'legends_and_myths',
      name: 'Legends and Myths',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The tale of the Green Knight who challenges brave knights to a duel.', 'The story of Tristan and Isolde, lovers doomed by a tragic fate.', 'The legend of the Sword in the Stone, waiting for the true king.', 'The myth of the Lady of the Lake, guardian of Excalibur.', 'The story of the cursed kingdom of Lyonesse, lost beneath the waves.', 'The tale of the Holy Grail, a quest for the pure of heart.'],
        ['The myth of the dragon slayer who saved a kingdom.', 'The legend of a knight who can never be defeated in battle.', 'The tale of the enchanted forest where time stands still.', 'The story of Merlin\'s imprisonment by a powerful sorceress.', 'The legend of a golden city hidden deep in the mountains.', 'The tale of a heroic sacrifice that saved a kingdom.'],
        ['The myth of the phoenix that rises from its ashes.', 'The legend of a magical harp that can calm any storm.', 'The tale of a hero who tamed a wild unicorn.', 'The myth of the sunken city of Ys, swallowed by the sea.', 'The story of a giant who guarded a mountain pass.', 'The legend of a powerful artifact lost to time.'],
        ['The tale of a ghostly knight who appears during full moons.', 'The myth of a mystical tree that grants eternal youth.', 'The story of a cursed prince seeking redemption.', 'The legend of a sacred grove protected by ancient spirits.', 'The tale of an immortal witch living in a hidden forest.', 'The myth of a hero who can talk to animals.'],
        ['The story of a legendary beast that terrorizes villages.', 'The legend of a bridge that appears only in moonlight.', 'The tale of a cursed treasure guarded by a spectral knight.', 'The myth of a mountain where the gods once walked.', 'The story of a magical sword that can cut through anything.', 'The legend of a hidden valley where time moves differently.'],
        ['The tale of a knight who fought his way out of the underworld.', 'The myth of a talking bird that knows the secrets of the world.', 'The story of a wise king who ruled with a magical staff.', 'The legend of an enchanted mirror that shows the future.', 'The tale of a lost princess who could control the weather.', 'The myth of a dragon that guards a hoard of ancient knowledge.'],
      ]
    },
    political_maneuvers: {
      id: 'political_maneuvers',
      name: 'Political Maneuvers',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A noble proposes a marriage alliance to strengthen ties.', 'A secret treaty is negotiated between rival kingdoms.', 'A council meeting turns heated over a land dispute.', 'A spy is discovered within the king’s court.', 'A noble family plots to overthrow the ruling dynasty.', 'A rival kingdom sends a diplomatic envoy with hidden agendas.'],
        ['A powerful noble seeks to consolidate power by any means.', 'A rebellion is quietly brewing in the eastern provinces.', 'A noble requests assistance to quash an uprising in their lands.', 'A trusted advisor is accused of treason.', 'An alliance is formed against a common enemy.', 'A royal decree is issued to redistribute lands to loyal subjects.'],
        ['A political marriage is arranged to secure peace.', 'A diplomat arrives with news of a distant war.', 'A noble seeks to gain favor by sponsoring a grand tournament.', 'A council is called to address the kingdom\'s financial crisis.', 'A powerful noble offers military support in exchange for titles.', 'A secret society influences political decisions behind the scenes.'],
        ['A noble’s betrayal is uncovered, leading to a swift response.', 'A council meeting is disrupted by an assassination attempt.', 'A peace treaty is proposed with significant concessions.', 'A charismatic leader rises, gaining the support of the people.', 'A noble family is accused of conspiring with enemy forces.', 'A plot to kidnap a key political figure is foiled.'],
        ['A scandal involving the royal family shakes the court.', 'A call to arms is issued to defend against an imminent invasion.', 'A dispute over succession causes unrest among the nobles.', 'A noble seeks to manipulate the king through flattery and gifts.', 'A faction within the court pushes for expansionist policies.', 'A secret meeting is held to discuss a coup.'],
        ['A foreign emissary brings gifts and proposals for alliance.', 'A noble\'s ambition leads to reckless decisions.', 'A trusted advisor provides counsel on navigating political threats.', 'A noble house seeks to regain lost honor and influence.', 'A proposal for new laws to strengthen the kingdom is debated.', 'A political maneuver backfires, causing unintended consequences.'],
      ]
    },
    mercenary_and_bandit_conflicts: {
      id: 'mercenary_and_bandit_conflicts',
      name: 'Mercenary and Bandit Conflicts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A bandit leader demands tribute from a nearby village.', 'Mercenaries hired by a rival noble clash with local forces.', 'A notorious bandit camp is discovered in a dense forest.', 'A mercenary company offers their services to the highest bidder.', 'Bandits block a major trade route, disrupting commerce.', 'A skirmish breaks out between rival mercenary groups.'],
        ['Bandits raid a wealthy estate, stealing valuable goods.', 'A captured bandit reveals plans for a major heist.', 'Mercenaries are hired to protect a caravan through dangerous territory.', 'A village forms a militia to defend against frequent bandit attacks.', 'A mercenary captain seeks to settle a personal vendetta.', 'Bandits take hostages and demand a ransom for their release.'],
        ['A hidden bandit hideout is uncovered, leading to a standoff.', 'Mercenaries hired to protect a noble turn against their employer.', 'A bandit chief offers information in exchange for a pardon.', 'A wealthy merchant hires mercenaries to guard a valuable shipment.', 'A band of outlaws takes over an abandoned castle.', 'Mercenaries are accused of looting and pillaging under the guise of protection.'],
        ['A bandit raid on a festival disrupts the celebrations.', 'A mercenary company is hired to track down a notorious outlaw.', 'Bandits ambush travelers on a remote road.', 'A former bandit seeks redemption by aiding the local militia.', 'Mercenaries negotiate a ceasefire with bandits for mutual benefit.', 'A hidden treasure map sparks conflict between bandits and mercenaries.'],
        ['A famous mercenary leader offers their services for a high price.', 'Bandits disguise themselves as traders to infiltrate a town.', 'A mercenary company defects to the enemy for a better offer.', 'A bandit attack on a noble\'s convoy is thwarted by quick thinking.', 'Mercenaries and bandits vie for control of a strategic location.', 'A notorious bandit is captured, but their gang seeks revenge.'],
        ['A mercenary\'s loyalty is tested when offered a large bribe.', 'Bandits sabotage a bridge to delay pursuit.', 'A bandit lord declares himself king of the wildlands.', 'A mercenary unit is hired to train the local militia.', 'Bandits lure travelers into a trap with false promises of help.', 'A mercenary leader turns against their own for greater power.'],
      ]
    },
    hidden_treasures_and_secret_locations: {
      id: 'hidden_treasures_and_secret_locations',
      name: 'Hidden Treasures and Secret Locations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A hidden cave behind a waterfall, rumored to contain lost riches.', 'An ancient crypt filled with the treasures of a forgotten king.', 'A buried chest found at the base of a lightning-struck tree.', 'A hidden library in the ruins of an old castle, containing rare tomes.', 'A forgotten mine with veins of precious metals.', 'A secret chamber beneath a church, holding sacred relics.'],
        ['A sunken ship off the coast, filled with pirate treasure.', 'A hollow tree that serves as the entrance to an underground vault.', 'An enchanted forest glade where treasures appear under the full moon.', 'A concealed attic in a noble\'s mansion, hiding valuable heirlooms.', 'A cave guarded by magical creatures, filled with rare gems.', 'An abandoned wizard\'s tower, still protected by magical wards.'],
        ['A lost temple in the jungle, dedicated to an ancient deity.', 'A hidden valley accessible only through a secret pass.', 'A derelict fortress with hidden passages leading to treasure rooms.', 'A mysterious island that appears only once every few years.', 'A treasure map leading to a forgotten hoard in the desert.', 'A ruined city with underground catacombs full of hidden riches.'],
        ['A secret garden with statues that come to life under moonlight.', 'A submerged ruin in a lake, accessible only by diving.', 'A cloistered monastery with a hidden reliquary.', 'A cave system behind a waterfall, rumored to house a dragon\'s hoard.', 'An old battlefield where legendary warriors\' artifacts are buried.', 'A ruined abbey with a hidden crypt below the altar.'],
        ['A buried treasure in the dunes of a desert, marked by an old tale.', 'A secret room in a library, accessed by a hidden lever.', 'A haunted mansion with a hidden cellar filled with gold.', 'A forgotten sanctuary in the mountains, containing sacred artifacts.', 'A cave of wonders, where each chamber holds a different treasure.', 'An enchanted spring where each drink reveals a hidden location.'],
        ['A sunken city beneath a lake, full of ancient treasures.', 'A hidden alcove in a cliffside, accessible only by a narrow path.', 'A forgotten royal treasury, buried beneath a collapsed castle.', 'A secret merchant\'s vault hidden behind a marketplace.', 'A hidden chamber in a castle wall, accessible by a specific key.', 'A lost treasure trove in the depths of an enchanted forest.'],
      ]
    },
    feasts_and_festivals: {
      id: 'feasts_and_festivals',
      name: 'Feasts and Festivals',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The Harvest Festival, celebrating the season\'s bounty with feasting and games.', 'The Winter Solstice Feast, a time of merriment and warmth during the longest night.', 'The Spring Blossom Festival, marking the beginning of spring with flowers and dances.', 'The Festival of Lights, where lanterns are released into the sky.', 'The King\'s Birthday Celebration, a grand event with jousting and feasting.', 'The Summer Solstice Festival, a time of music and dancing under the sun.'],
        ['The Festival of the Moon, celebrating the full moon with night-time revelry.', 'The New Year\'s Feast, welcoming the new year with fireworks and feasts.', 'The Festival of Heroes, honoring past heroes with tales and reenactments.', 'The Festival of the Hunt, celebrating successful hunts with feasts and competitions.', 'The Festival of the Sea, honoring the ocean with boat races and seafood feasts.', 'The Festival of Fire, a night of bonfires and fire-dancing.'],
        ['The Festival of the Harvest Moon, celebrating the full moon with dances and feasts.', 'The Festival of the Ancestors, honoring the dead with feasts and stories.', 'The Festival of the Stars, where stargazing and astronomy are celebrated.', 'The Feast of the Forest, a celebration of nature with forest games and feasts.', 'The Festival of the River, marking the river\'s importance with boat parades and feasting.', 'The Festival of the Sun, celebrating the sun\'s warmth with outdoor games and feasts.'],
        ['The Festival of the Harvest Goddess, honoring the goddess with offerings and feasts.', 'The Festival of Love, celebrating love and romance with dances and feasts.', 'The Festival of the Warriors, honoring warriors with competitions and feasts.', 'The Festival of the Arts, celebrating music, painting, and theater.', 'The Festival of the Sowing, marking the planting season with feasts and prayers.', 'The Festival of the Sky, celebrating the sky\'s wonders with kite flying and feasts.'],
        ['The Festival of the Harvest Queen, crowning a queen and celebrating with feasts.', 'The Festival of the Night, a night of mystery and celebration under the stars.', 'The Festival of the Flame, celebrating fire\'s warmth and light with feasts.', 'The Festival of the Earth, honoring the earth with offerings and feasts.', 'The Festival of the Wind, celebrating the wind\'s power with games and feasts.', 'The Festival of the Ancients, honoring ancient traditions with reenactments and feasts.'],
        ['The Festival of the Harvest King, crowning a king and celebrating with feasts.', 'The Festival of the Harvest Spirits, honoring spirits with offerings and feasts.', 'The Festival of the Harvest Maiden, celebrating with dances and feasts.', 'The Festival of the Harvest Lord, honoring the lord with feasts and games.', 'The Festival of the Harvest Dance, a night of dancing and feasting.', 'The Festival of the Harvest Fire, celebrating with bonfires and feasts.'],
      ]
    },
    weather_and_natural_events: {
      id: 'weather_and_natural_events',
      name: 'Weather and Natural Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A sudden and violent thunderstorm, with lightning strikes nearby.', 'A thick fog rolls in, reducing visibility and causing disorientation.', 'A prolonged drought, causing water shortages and crop failures.', 'An unexpected snowfall, blanketing the area in white.', 'A powerful windstorm, uprooting trees and damaging structures.', 'A heatwave, making travel and labor difficult and dangerous.'],
        ['A torrential downpour, flooding rivers and low-lying areas.', 'A beautiful rainbow appears after a brief rain shower.', 'An earthquake shakes the ground, causing buildings to collapse.', 'A rare and dazzling meteor shower lights up the night sky.', 'A hailstorm, with large and damaging hailstones.', 'A sudden and dense snowfall, creating drifts and impassable roads.'],
        ['A sunny and clear day, perfect for travel and outdoor activities.', 'A cold snap, causing frost and freezing temperatures.', 'A heatwave, with oppressive and dangerous heat levels.', 'A rare fog that glows with an eerie light at night.', 'A flash flood, caused by sudden and heavy rains.', 'A thunderstorm, with intense lightning and booming thunder.'],
        ['A clear night with a full moon, providing good visibility.', 'A dust storm, reducing visibility and making breathing difficult.', 'A rare and beautiful aurora borealis lights up the night sky.', 'A fog that doesn\'t lift, causing delays and confusion.', 'A powerful and sudden windstorm, causing damage and chaos.', 'A period of unseasonably warm weather, causing early blooms.'],
        ['A persistent drizzle, causing muddy and slippery conditions.', 'A sudden and intense snowstorm, making travel nearly impossible.', 'A sunny and warm day, perfect for a festival or celebration.', 'A cold front moves in, bringing frost and chilly winds.', 'A rare blood moon rises, casting an eerie red light.', 'A clear night with a new moon, making it very dark.'],
        ['A period of mild and pleasant weather, with clear skies.', 'A thunderstorm that lasts for hours, with heavy rain and lightning.', 'A gentle and refreshing rain, revitalizing plants and crops.', 'A powerful storm at sea, making travel by boat dangerous.', 'A beautiful sunrise, signaling a day of good weather.', 'A heatwave breaks, bringing cooler and more comfortable weather.'],
      ]
    },
    dreams_and_visions: {
      id: 'dreams_and_visions',
      name: 'Dreams and Visions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A vision of a hidden path that leads to a secret location.', 'A dream of a loved one warning of an imminent danger.', 'A vision of a long-lost artifact, revealing its current location.', 'A dream of a past life, revealing forgotten knowledge.', 'A vision of a powerful storm approaching, with dire consequences.', 'A dream of an ancient battle, showing hidden truths.'],
        ['A vision of a mystical creature offering guidance.', 'A dream of a dark figure, symbolizing an unknown threat.', 'A vision of a sacred site, urging a pilgrimage.', 'A dream of a lost friend or ally in desperate need of help.', 'A vision of a great celebration, hinting at future events.', 'A dream of flying over the land, seeing all from above.'],
        ['A vision of a tragic event, offering a chance to prevent it.', 'A dream of an enchanted forest, calling for exploration.', 'A vision of a council of wise beings, offering cryptic advice.', 'A dream of a mysterious door, leading to unknown realms.', 'A vision of a loved one in danger, urging immediate action.', 'A dream of a majestic castle, hinting at future glory.'],
        ['A vision of a sacred ritual, needing to be performed.', 'A dream of a long-forgotten prophecy, revealing its importance.', 'A vision of a hidden enemy plotting in the shadows.', 'A dream of a journey through a dangerous land, revealing shortcuts.', 'A vision of a powerful artifact falling into the wrong hands.', 'A dream of a peaceful meadow, symbolizing hope and tranquility.'],
        ['A vision of a great battle, revealing key strategies.', 'A dream of a mystical being offering a cryptic warning.', 'A vision of a distant land, calling for exploration.', 'A dream of an ancient tree, revealing hidden secrets.', 'A vision of a powerful spell, needing to be cast.', 'A dream of a loved one, offering guidance and comfort.'],
        ['A vision of a secret meeting, revealing hidden plans.', 'A dream of a magical artifact, showing its true power.', 'A vision of a dark future, urging a change in course.', 'A dream of a wise sage, offering profound advice.', 'A vision of a beautiful and serene landscape, symbolizing peace.', 'A dream of an ancient relic, revealing its true purpose.'],
      ]
    },
    knightly_duels_and_tournaments: {
      id: 'knightly_duels_and_tournaments',
      name: 'Knightly Duels and Tournaments',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A grand tournament hosted by a noble house, with great rewards.', 'A duel of honor between two rival knights.', 'A jousting tournament to celebrate the king\'s birthday.', 'A melee competition with teams of knights battling for supremacy.', 'A duel to settle a dispute over land and title.', 'An archery contest open to all, showcasing the best marksmen.'],
        ['A grand melee with knights from different realms.', 'A duel to the death over a matter of grave insult.', 'A joust to win the favor of a noble lady.', 'A contest of skill in various knightly arts, including swordplay and lance.', 'A challenge issued by an unknown knight in black armor.', 'A tournament with magical enchantments on the participants\' weapons.'],
        ['A duel involving magical creatures as allies.', 'A tournament where the prize is a rare and enchanted artifact.', 'A secret duel held at midnight, known only to a few.', 'A grand feast preceding a tournament, where alliances are formed.', 'A series of challenges including jousting, archery, and melee.', 'A tournament held to determine the next captain of the guard.'],
        ['A duel with enchanted weapons that change shape during the fight.', 'A tournament held in honor of a visiting dignitary.', 'A knight challenges another to a duel for the hand of a maiden.', 'A contest of strategy, involving both physical and mental challenges.', 'A duel that involves riding through a gauntlet of obstacles.', 'A melee in a magically shifting arena.'],
        ['A duel to settle a long-standing feud between families.', 'A tournament where the winner gains a place at the Round Table.', 'A contest judged by a mysterious and powerful sorcerer.', 'A joust where the horses are enchanted to fly.', 'A melee involving teams of knights and their squires.', 'A duel with special rules where magic is allowed.'],
        ['A tournament held on the eve of a great battle, to boost morale.', 'A knightly duel in front of a magical mirror that shows the true nature of the combatants.', 'A contest where the prize is a magical steed.', 'A tournament with trials of both physical prowess and chivalric virtue.', 'A duel with weapons that have a will of their own.', 'A joust held in a secret, enchanted glade, known only to the chosen few.'],
      ]
    },
    religious_and_spiritual_events: {
      id: 'religious_and_spiritual_events',
      name: 'Religious and Spiritual Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A pilgrimage to a holy site, attracting many followers.', 'A grand feast day celebrating a saint, with prayers and processions.', 'A night of vigil in honor of a fallen hero.', 'A miracle is reported at a local shrine, drawing crowds.', 'A debate between priests over the true meaning of a prophecy.', 'A procession of monks carrying a sacred relic through the town.'],
        ['A holy festival where blessings are bestowed upon the faithful.', 'A mysterious vision appears to a local priest, causing a stir.', 'A grand ceremony to bless a newly built church.', 'A ritual to exorcise a possessed individual.', 'A fast and prayer event to seek divine guidance.', 'A sacred relic is stolen, and the priests call for its return.'],
        ['A spiritual retreat in the wilderness, seeking enlightenment.', 'A holy war is declared against heretics.', 'A prophecy is revealed, foretelling a great event.', 'A religious festival celebrating the harvest.', 'A pilgrimage to a sacred spring believed to have healing properties.', 'A festival of lights, where the faithful light candles for blessings.'],
        ['A saint’s day with reenactments of their miracles.', 'A sacred animal is seen, causing religious fervor.', 'A debate between druids and priests over religious practices.', 'A ritual dance performed to ensure a good harvest.', 'A sacred tree is struck by lightning, interpreted as a sign.', 'A vision of an angel appears to a devout follower.'],
        ['A grand festival celebrating the sun and its life-giving power.', 'A mass baptism in a holy river.', 'A relic believed to be lost is found, causing great celebration.', 'A holy warrior is blessed before going on a great quest.', 'A fasting period followed by a great feast.', 'A spiritual leader goes on a journey of enlightenment.'],
        ['A sacred ritual performed to ward off evil spirits.', 'A holy war is declared against dark forces.', 'A pilgrimage to a mountain where gods are believed to dwell.', 'A spiritual cleansing of a haunted place.', 'A grand temple is built in honor of the gods.', 'A relic is brought to the town, drawing pilgrims and visitors.'],
      ]
    },
    animal_and_beast_encounters: {
      id: 'animal_and_beast_encounters',
      name: 'Animal and Beast Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A majestic stag leads you to a hidden grove.', 'A pack of wolves eyes you warily from the edge of the forest.', 'A wounded bear blocks your path, aggressive and in pain.', 'A nest of giant eagles in the cliffs above your trail.', 'A herd of wild horses runs across the plains, free and untamed.', 'A sly fox offers to guide you through the woods for a price.'],
        ['A massive boar charges out of the underbrush, tusks gleaming.', 'A serpent whispers secrets of the forest, but can it be trusted?', 'A swarm of bees blocks your path, their hive nearby.', 'A wildcat stalks you from the shadows, testing your defenses.', 'A pair of playful otters in a nearby stream.', 'A great elk stands watchful on a hill, a guardian of the forest.'],
        ['A raven caws ominously, watching your every move.', 'A bear cub wanders into your camp, with its mother not far behind.', 'A lone wolf approaches, neither aggressive nor fearful.', 'A snake slithers across your path, hissing a warning.', 'A family of deer grazes peacefully, unaware of your presence.', 'A mountain lion prowls nearby, eyes glowing in the darkness.'],
        ['A great owl swoops down, silently observing you.', 'A herd of sheep, lost and in need of guidance.', 'A giant spider weaves its web across your path.', 'A falcon circles above, perhaps trained by someone.', 'A pair of hares dart through the underbrush.', 'A wild boar snorts aggressively, protecting its territory.'],
        ['A deer with an arrow wound limps through the forest.', 'A majestic eagle perches on a high branch, surveying the land.', 'A badger scurries into its burrow as you pass by.', 'A beaver builds a dam in a nearby stream.', 'A fox hunts for food, occasionally glancing your way.', 'A wolf pack howls in the distance, a haunting sound.'],
        ['A squirrel chatters from a tree, alerting others to your presence.', 'A lynx watches you from a rocky outcrop.', 'A porcupine waddles through the underbrush.', 'A moose stands tall in a clearing, majestic and imposing.', 'A raven follows you, cawing intermittently.', 'A bear swipes at a tree, marking its territory.'],
      ]
    },
    environmental_hazards: {
      id: 'environmental_hazards',
      name: 'Environmental Hazards',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A sudden landslide blocks your path, creating a treacherous climb.', 'A sinkhole opens up, swallowing part of the trail.', 'A dense fog rolls in, reducing visibility to nearly nothing.', 'A forest fire rages, spreading quickly and unpredictably.', 'A flash flood rushes down a valley, sweeping everything in its path.', 'An avalanche crashes down a mountainside, burying the trail.'],
        ['A sudden storm with high winds and lightning.', 'An earthquake shakes the ground, causing cracks and collapses.', 'A swarm of biting insects descends, making travel miserable.', 'A patch of quicksand hidden beneath leaves and debris.', 'A snowstorm strikes, reducing visibility and causing hypothermia.', 'A dense, thorny thicket blocks your path, difficult to navigate.'],
        ['A fallen tree blocks the road, requiring effort to move.', 'A river overflows, turning the path into a muddy swamp.', 'A rockslide tumbles down, threatening to crush anyone below.', 'A wildfire spreads, cutting off escape routes.', 'A cliff face crumbles, creating a dangerous crossing.', 'A thick mist disorients travelers, making it easy to get lost.'],
        ['A sandstorm blows in, reducing visibility and scouring exposed skin.', 'A plague of locusts devours all vegetation, leaving the land barren.', 'A sudden drop in temperature, causing frostbite and freezing rivers.', 'A drought dries up water sources, making survival difficult.', 'A volcanic eruption spews ash and lava, threatening everything nearby.', 'A swarm of bats flies out of a cave, startling and disorienting.'],
        ['A hidden crevasse opens underfoot, creating a dangerous fall.', 'A tidal wave sweeps in, flooding coastal areas.', 'A lightning strike ignites a tree, starting a forest fire.', 'A tornado touches down, causing widespread destruction.', 'A blizzard strikes, making travel nearly impossible.', 'A dust storm reduces visibility and fills the air with choking particles.'],
        ['A mudslide flows down a hillside, burying everything in its path.', 'A river freezes over, creating a slippery and dangerous crossing.', 'A dense cloud of smoke from a distant fire covers the area.', 'A heatwave makes travel exhausting and potentially deadly.', 'A thick canopy overhead blocks out the sun, creating a perpetual twilight.', 'A swarm of bees attacks, stinging anyone in their path.'],
      ]
    },
    enchanted_forest_encounters: {
      id: 'enchanted_forest_encounters',
      name: 'Enchanted Forest Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A group of dancing lights leads you deeper into the forest.', 'A talking tree offers wisdom and guidance.', 'A glade where time seems to stand still.', 'A fairy ring that transports those who enter to another realm.', 'A gentle stream with waters that heal wounds.', 'A mischievous sprite plays tricks, leading you in circles.'],
        ['A grove where animals seem unusually intelligent and friendly.', 'A sudden silence falls, as if the forest itself is holding its breath.', 'A giant mushroom circle, exuding a faint magical glow.', 'A tree with a door leading to a hidden chamber.', 'A whispering breeze carries messages and secrets.', 'A pool that shows visions of the past or future.'],
        ['A guardian spirit warns you of impending danger.', 'A magical fruit tree, the fruits of which grant temporary powers.', 'A hidden fairy market, bustling with activity.', 'A pathway that appears only under moonlight.', 'A strange, enchanted fog that confuses and disorients.', 'A friendly forest creature offers to guide you.'],
        ['A grove where the trees move and shift when not observed.', 'A mystical barrier that only opens with a specific key or spell.', 'A sudden, eerie quiet, as if the forest is watching you.', 'A tree that sings softly in the wind.', 'A hidden glen where fairies dance under the stars.', 'A circle of ancient stones, humming with magical energy.'],
        ['A talking animal offers cryptic advice.', 'A hidden spring that grants visions to those who drink from it.', 'A fairy queen offers a quest in exchange for a boon.', 'A bridge guarded by a troll demanding a toll.', 'A sudden, magical storm that alters the landscape.', 'A cave filled with glowing crystals and ancient runes.'],
        ['A path that shifts and changes, leading you in new directions.', 'A wise old hermit living in harmony with the forest.', 'A hidden glade where unicorns graze.', 'A treehouse village inhabited by friendly sprites.', 'A field of flowers that change colors with the seasons.', 'A secret entrance to the realm of the fae.'],
      ]
    },
    ruins_and_ancient_sites: {
      id: 'ruins_and_ancient_sites',
      name: 'Ruins and Ancient Sites',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The ruins of an ancient castle, now overgrown with vines.', 'An old battlefield, haunted by the spirits of the fallen.', 'A crumbling temple dedicated to forgotten gods.', 'An ancient library with books and scrolls on forgotten lore.', 'The remains of a once-great city, now buried under sand or earth.', 'A stone circle used for ancient rituals and ceremonies.'],
        ['A hidden tomb of a legendary hero or king.', 'An abandoned village with a mysterious history.', 'A sunken city, partially submerged in a lake or sea.', 'A forgotten monastery, now home to wild animals.', 'The ruins of a grand palace, with hidden passages and chambers.', 'An ancient bridge, still standing despite its age.'],
        ['The remnants of a fortress, destroyed in a great battle.', 'A cave system filled with ancient drawings and carvings.', 'The ruins of a once-mighty tower, now home to strange creatures.', 'An old mill, its wheel still turning despite the passage of time.', 'A mysterious labyrinth, said to hide great treasures and dangers.', 'An ancient well, believed to have magical properties.'],
        ['The ruins of a grand amphitheater, echoing with the ghosts of performances past.', 'A crumbling lighthouse on a cliff, still guiding ships.', 'The remains of a grand cathedral, now a sanctuary for wildlife.', 'An abandoned mine, filled with rich veins of ore and danger.', 'A ruined watchtower, offering a strategic view of the surrounding area.', 'The remnants of an ancient road, leading to unknown destinations.'],
        ['A forgotten garden, with strange and rare plants.', 'The ruins of a bathhouse, its waters still warm.', 'A buried crypt, filled with the treasures of a bygone era.', 'An ancient theater, now silent and eerie.', 'The ruins of a wizard\'s tower, with magical traps and relics.', 'An old forge, with tools and weapons of remarkable craftsmanship.'],
        ['The remnants of a great hall, where ancient lords once feasted.', 'A derelict shipwreck on the coast, filled with treasure.', 'The ruins of a sacred grove, still holding traces of ancient magic.', 'An old graveyard, with gravestones telling the stories of the past.', 'A ruined fort, its walls still standing strong.', 'An ancient library hidden in a remote cave, filled with old tomes.'],
      ]
    },
    intriguing_discoveries: {
      id: 'intriguing_discoveries',
      name: 'Intriguing Discoveries',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A hidden cache of ancient coins buried in the forest.', 'An old journal detailing a long-forgotten adventure.', 'A map leading to a secret location filled with treasures.', 'A mysterious key that unlocks an unknown door.', 'A strange artifact with unknown powers.', 'A hidden message carved into the walls of a cave.'],
        ['A sealed letter with important but long-forgotten information.', 'An old relic from a bygone era, with magical properties.', 'A secret passage leading to an unknown chamber.', 'A lost heirloom of a noble family, with a rich history.', 'A hidden trapdoor in an ancient ruin.', 'A mysterious book filled with spells and incantations.'],
        ['A broken but powerful magical weapon.', 'A hidden diary revealing secrets of the past.', 'A cryptic prophecy written in an ancient language.', 'A rare and valuable gemstone hidden in the mountains.', 'A secret hideout used by thieves and bandits.', 'A forgotten shrine with a sacred relic.'],
        ['A set of old blueprints detailing the construction of a grand building.', 'A strange, enchanted mirror showing glimpses of other places.', 'A hidden chamber in a castle, filled with treasures.', 'An ancient scroll with powerful but dangerous spells.', 'A forgotten garden with rare and magical plants.', 'A hidden vault with the riches of a long-dead king.'],
        ['A set of armor belonging to a legendary knight.', 'A map of a long-lost city, buried under the sands.', 'A secret meeting place for a long-forgotten society.', 'A mysterious stone circle with ancient carvings.', 'A hidden library filled with books of ancient knowledge.', 'A set of enchanted tools that make work easier and faster.'],
        ['A lost song or poem with powerful magical effects.', 'A collection of rare herbs with potent healing properties.', 'A set of blueprints for an ancient and powerful machine.', 'A hidden tomb filled with the riches of a long-dead king.', 'A secret entrance to a network of underground tunnels.', 'A mysterious crystal with strange and powerful properties.'],
      ]
    },
    fae_and_fairy_encounters: {
      id: 'fae_and_fairy_encounters',
      name: 'Fae and Fairy Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A fairy ring that transports you to a mystical realm.', 'A mischievous sprite steals an important item.', 'A fairy queen offers a quest in exchange for a boon.', 'A pixie offers guidance but expects a favor in return.', 'A group of fairies play tricks on travelers, leading them astray.', 'A brownie offers help in exchange for a small gift.'],
        ['A changeling child is discovered, requiring delicate handling.', 'A fairy offers a deal with unforeseen consequences.', 'A fae creature challenges you to a contest of wit.', 'A magical glade where time flows differently.', 'A fae market where rare and enchanted items can be traded.', 'A leprechaun offers a deal for a pot of gold.'],
        ['A selkie needs help to retrieve their stolen pelt.', 'A fae creature offers to fulfill a wish with a hidden cost.', 'A meeting with the fae court to negotiate a delicate matter.', 'A fae knight challenges you to a duel for honor.', 'A banshee\'s wail warns of impending danger.', 'A fae trickster leads you in circles, making progress difficult.'],
        ['A fae creature grants temporary magical abilities.', 'A fairy godmother offers aid in a dire situation.', 'A fae hunt, where you must avoid being caught.', 'A pact with a fae creature that binds you to a task.', 'A fae spirit offers knowledge of the future.', 'A fae festival where mortals can participate.'],
        ['A fae creature demands a toll for crossing their territory.', 'A fae curse that needs to be broken.', 'A fae creature offers a guide through the enchanted forest.', 'A fae king offers a reward for solving a riddle.', 'A fae creature bestows a blessing or a curse based on your actions.', 'A fae envoy seeks your aid in a conflict with another fae court.'],
        ['A fae creature leaves a cryptic message.', 'A fae bargain for a valuable but dangerous gift.', 'A fae portal that leads to an unknown realm.', 'A fae creature offers a challenge that tests your skills and resolve.', 'A fae festival where you can gain boons or suffer consequences.', 'A fae creature offers to teach you a powerful spell or skill.'],
      ]
    },
    haunted_and_cursed_locations: {
      id: 'haunted_and_cursed_locations',
      name: 'Haunted and Cursed Locations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['An abandoned castle haunted by the ghosts of its former inhabitants.', 'A cursed battlefield where the spirits of the fallen still fight.', 'A haunted forest where eerie lights lead travelers astray.', 'A cursed village where time stands still.', 'A haunted house with ghostly apparitions and strange noises.', 'A cursed lake where the waters whisper secrets and lies.'],
        ['A haunted graveyard where the dead rise at night.', 'A cursed temple where shadows come to life.', 'A haunted bridge where travelers disappear without a trace.', 'A cursed forest glade where nothing grows.', 'A haunted lighthouse where the keeper\'s ghost still watches.', 'A cursed mansion filled with spectral servants.'],
        ['A haunted shipwreck with the ghosts of drowned sailors.', 'A cursed monastery where the monks have all vanished.', 'A haunted tower where a spectral knight stands guard.', 'A cursed cave where the walls seem to whisper.', 'A haunted marketplace where ghostly vendors sell cursed items.', 'A cursed forest where the trees bleed sap.'],
        ['A haunted inn where guests never leave.', 'A cursed well that brings bad luck to those who drink from it.', 'A haunted battlefield where the sounds of war still echo.', 'A cursed village where everyone has turned to stone.', 'A haunted theater where ghostly actors perform.', 'A cursed island that appears and disappears with the tides.'],
        ['A haunted forest path that leads in circles.', 'A cursed treasure buried in a haunted tomb.', 'A haunted library with books that read themselves.', 'A cursed altar where dark rituals were performed.', 'A haunted garden where the statues come to life.', 'A cursed forge where the blacksmith\'s ghost still works.'],
        ['A haunted mill where the wheel turns on its own.', 'A cursed grove where nothing can grow.', 'A haunted river that sings mournful songs.', 'A cursed mountain pass where travelers vanish.', 'A haunted marketplace where ghostly figures appear at night.', 'A cursed castle where the shadows have a life of their own.'],
      ]
    },
    diplomatic_missions: {
      id: 'diplomatic_missions',
      name: 'Diplomatic Missions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Negotiate a peace treaty between warring factions.', 'Deliver a royal message to a neighboring kingdom.', 'Escort an ambassador to a distant land.', 'Mediate a dispute over a contested border.', 'Arrange a marriage alliance between two noble houses.', 'Secure a trade agreement with a foreign power.'],
        ['Attend a royal banquet as a representative of your lord.', 'Negotiate the release of prisoners of war.', 'Deliver an ultimatum to a rebellious vassal.', 'Escort a foreign dignitary through hostile territory.', 'Arrange a meeting between two rival factions.', 'Secure an alliance with a powerful sorcerer.'],
        ['Negotiate the terms of a ceasefire.', 'Deliver a gift to a foreign king as a sign of goodwill.', 'Attend a diplomatic summit to discuss regional security.', 'Negotiate the terms of a marriage contract.', 'Escort a prince or princess to their betrothed.', 'Secure the services of a mercenary company for your liege.'],
        ['Arrange a trade mission to a distant land.', 'Deliver a letter of condolence to a mourning noble house.', 'Negotiate a fishing rights agreement with a coastal kingdom.', 'Escort a delegation of priests to a holy site.', 'Mediate a dispute over the ownership of a valuable artifact.', 'Negotiate a truce between two feuding families.'],
        ['Secure a loan from a wealthy merchant for your lord.', 'Deliver a declaration of war to an enemy kingdom.', 'Attend a coronation as an official envoy.', 'Negotiate the terms of a land exchange.', 'Escort a group of scholars to a foreign university.', 'Arrange a diplomatic mission to a newly discovered land.'],
        ['Secure a promise of aid in times of war.', 'Deliver a peace offering to a rival kingdom.', 'Negotiate a non-aggression pact with a powerful neighbor.', 'Attend a cultural exchange as a representative.', 'Arrange a meeting between your lord and a powerful wizard.', 'Negotiate the terms of a joint military venture.'],
      ]
    },
    betrayals_and_deceptions: {
      id: 'betrayals_and_deceptions',
      name: 'Betrayals and Deceptions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A trusted advisor plots against their lord.', 'A knight is found to be secretly working for the enemy.', 'A close friend is revealed to be a spy.', 'A noble is caught conspiring with bandits.', 'A servant is bribed to poison their master.', 'A merchant secretly works for a rival kingdom.'],
        ['A squire sabotages their knight’s equipment.', 'A guard is bribed to allow an enemy into the castle.', 'A priest is discovered to be working for a dark cult.', 'A noble family plans to overthrow the king.', 'A general secretly negotiates with the enemy.', 'A healer provides false information to gain favor.'],
        ['A knight is found to be a traitor during a critical battle.', 'A diplomat spreads false rumors to sow discord.', 'A servant steals important documents.', 'A courtier plots to usurp their lord’s title.', 'A spy is caught planting evidence against an innocent.', 'A noble is revealed to have forged an important letter.'],
        ['A trusted ally is found to be a double agent.', 'A general betrays their lord for a promise of power.', 'A merchant spreads false information to ruin a competitor.', 'A knight falsely accuses a rival to gain favor.', 'A noble bribes a judge to alter a verdict.', 'A servant reveals sensitive information to an enemy.'],
        ['A squire is caught spying for a rival house.', 'A guard is blackmailed into betraying their post.', 'A healer is bribed to administer a harmful potion.', 'A knight fakes their allegiance to uncover a plot.', 'A noble switches sides during a crucial negotiation.', 'A spy plants false evidence to frame an innocent.'],
        ['A diplomat betrays their kingdom for personal gain.', 'A general misleads their troops to cover their own agenda.', 'A priest is found to be in league with dark forces.', 'A merchant betrays their guild to gain favor with the crown.', 'A noble hires assassins to remove a rival.', 'A servant is revealed to be a long-term spy.'],
      ]
    },
    prophecies_and_omens: {
      id: 'prophecies_and_omens',
      name: 'Prophecies and Omens',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A prophecy foretells the rise of a new king.', 'An omen of a blood-red moon signals impending disaster.', 'A seer predicts the return of a long-lost hero.', 'A vision of a great war that will change the land.', 'A prophecy speaks of a chosen one who will defeat the darkness.', 'An omen of a comet signifies a time of great change.'],
        ['A seer predicts a betrayal within the court.', 'A vision of a great famine unless certain actions are taken.', 'A prophecy that a hidden treasure will be found.', 'An omen of an eclipse warns of a coming invasion.', 'A seer predicts the fall of a powerful noble house.', 'A vision of a great beast rising from the sea.'],
        ['A prophecy of a child born under a specific sign will bring peace.', 'An omen of a sudden storm warns of a great loss.', 'A seer predicts the discovery of a powerful artifact.', 'A prophecy that only a true knight can retrieve a sacred relic.', 'An omen of a flock of blackbirds signals a dark event.', 'A vision of a kingdom in flames unless a hero intervenes.'],
        ['A prophecy that the waters will rise and reclaim the land.', 'An omen of a double rainbow predicts a time of prosperity.', 'A seer predicts a great alliance that will change the world.', 'A prophecy that a dragon will return and bring destruction.', 'An omen of a lion and a lamb seen together, signaling peace.', 'A vision of a dark sorcerer rising to power.'],
        ['A prophecy that a hero must complete three trials to save the land.', 'An omen of a sudden earthquake as a warning of danger.', 'A seer predicts the fall of a great city.', 'A prophecy that a sacred tree will bloom only for the true ruler.', 'An omen of a white stag leading the way to a hidden realm.', 'A vision of a celestial alignment bringing great magic.'],
        ['A prophecy that a hero will rise from humble beginnings.', 'An omen of a sudden snowfall in summer predicts an unnatural event.', 'A seer predicts the breaking of a long-standing curse.', 'A prophecy that the stars will guide the chosen one.', 'An omen of a great fire as a sign of cleansing.', 'A vision of a new dawn bringing hope to the land.'],
      ]
    },
    underwater_adventures: {
      id: 'underwater_adventures',
      name: 'Underwater Adventures',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Discover an underwater cave filled with glowing crystals.', 'Encounter a school of magical fish with strange abilities.', 'Find a sunken shipwreck filled with treasure and dangers.', 'Meet a merfolk community with secrets to share.', 'A giant sea creature blocks your path, demanding tribute.', 'An underwater current pulls you towards a hidden grotto.'],
        ['Discover a lost city beneath the waves, filled with ancient relics.', 'Encounter a kraken that guards an underwater treasure.', 'Find a magical artifact that allows breathing underwater.', 'A whirlpool transports you to an underwater realm.', 'Rescue a trapped diver from a perilous situation.', 'Explore a coral reef teeming with vibrant sea life.'],
        ['An underwater volcano threatens to erupt, causing chaos.', 'Find an underwater temple dedicated to a sea god.', 'Encounter a group of sea witches with their own agenda.', 'A sunken treasure chest is guarded by a giant eel.', 'Discover an underwater ruin filled with traps and puzzles.', 'Meet a friendly dolphin that guides you to safety.'],
        ['Find a hidden grotto with air pockets and strange plants.', 'Encounter a group of hostile merfolk protecting their territory.', 'Discover an underwater garden with magical properties.', 'A giant sea serpent threatens your journey.', 'Explore a submerged cavern with glowing runes on the walls.', 'Find a lost sailor who has been living underwater for years.'],
        ['Discover an ancient shipwreck filled with gold and jewels.', 'Encounter a mysterious underwater fog that obscures vision.', 'Find a hidden passage leading to an underground lake.', 'Rescue a sea creature trapped in a net.', 'Discover a magical underwater spring with healing properties.', 'Encounter a group of underwater explorers searching for treasure.'],
        ['Find an ancient underwater library with scrolls of forgotten lore.', 'Discover a hidden underwater fortress guarded by sea monsters.', 'Encounter a friendly sea turtle that offers guidance.', 'Explore an underwater maze filled with traps and treasure.', 'Find a sunken temple with a powerful relic inside.', 'Encounter a group of underwater spirits seeking peace.'],
      ]
    },
    forest_adventures: {
      id: 'forest_adventures',
      name: 'Forest Adventures',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Discover a hidden glade with magical properties.', 'Encounter a tribe of forest dwellers with unique customs.', 'A pack of wolves surrounds your camp, watching silently.', 'Find a hidden cave filled with ancient drawings and artifacts.', 'A mysterious fog envelops the forest, making navigation difficult.', 'Discover a grove of talking trees that offer wisdom.'],
        ['A sudden storm forces you to seek shelter in an abandoned cabin.', 'Encounter a band of brigands hiding in the forest.', 'Find a sacred tree that grants visions to those who sleep beneath it.', 'A forest fire breaks out, threatening to engulf the area.', 'Discover a hidden spring with healing waters.', 'Encounter a lost child searching for their family.'],
        ['A deer with a golden antler leads you deeper into the forest.', 'Discover an ancient ruin overgrown with vines and trees.', 'A group of druids perform a ritual in a clearing.', 'A wild boar charges through your campsite.', 'Find a hidden entrance to a network of underground tunnels.', 'A flock of birds warns you of an approaching danger.'],
        ['Discover a forest spirit who offers a quest in exchange for help.', 'A bear guards a cave filled with treasures.', 'Find a circle of stones with ancient runes carved into them.', 'Encounter a group of hunters tracking a dangerous beast.', 'A tree falls, revealing a hidden passage underneath.', 'Discover a patch of rare and valuable herbs.'],
        ['A mysterious song lures you deeper into the forest.', 'Encounter a band of rebels hiding from the authorities.', 'Find an ancient altar used for druidic ceremonies.', 'A fox leads you to a hidden den filled with secrets.', 'Discover a network of tunnels beneath the forest floor.', 'Encounter a hermit living in seclusion.'],
        ['A bear cub approaches your camp, followed by its protective mother.', 'Discover a grove where time seems to stand still.', 'A raven brings a message from a distant land.', 'Find a hidden waterfall with a cave behind it.', 'Encounter a group of forest bandits planning a raid.', 'Discover a tree with a door leading to an underground chamber.'],
      ]
    }
  }
};
