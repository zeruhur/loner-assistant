/**
 * The Threads of Saga Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'the-threads-of-saga-adventure',
    name: 'The Threads of Saga Adventure Tables',
    version: '1.0',
    enabled: true
  },

  tables: {
    npcs_rivals_allies_and_enemies: {
      id: 'npcs_rivals_allies_and_enemies',
      name: 'NPCs: Rivals, Allies & Enemies',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A wandering skald who knows your deeds', 'A disgraced hersir seeking redemption', 'A völva who speaks unwelcome prophecy', 'A rival warrior challenging your reputation', 'A jarl\'s daughter (political marriage opportunity)', 'A cursed kinsman who brings misfortune'],
        ['An exiled warrior from your homeland', 'A Christian monk attempting conversion', 'A merchant offering dubious deals', 'A blood-feuding clansman seeking alliance', 'A loyal oath-sworn companion', 'A scheming goði manipulating the Thing'],
        ['A slave who knows dangerous secrets', 'A shipwright who builds famous vessels', 'A widow demanding weregild', 'A berserkr for hire', 'A rival skald spreading damaging rumors', 'A shape-shifter in human form'],
        ['A foreign warrior seeking glory in the North', 'A healer with mysterious knowledge', 'A jarl\'s spy watching you', 'A blacksmith who forges legendary weapons', 'A child prophesied for greatness', 'An oath-breaker hiding in exile'],
        ['A Sami guide who knows the wilderness', 'A Byzantine merchant from Constantinople', 'A Saxon refugee fleeing war', 'A kinsman who owes you weregild', 'A völva\'s apprentice learning seidr', 'A rival captain competing for crew'],
        ['A hostage from a defeated enemy', 'A settler seeking land in Iceland', 'A poet-chronicler recording your saga', 'A thrall rebellion leader', 'A mysterious stranger with hidden identity', 'Your own kinsman returned from the dead'],
      ]
    },
    sacred_sites_and_notable_locations: {
      id: 'sacred_sites_and_notable_locations',
      name: 'Sacred Sites & Notable Locations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Thingvellir (Iceland\'s parliament site)', 'Uppsala Temple (Sweden\'s sacred center)', 'Ancient burial mound (draugr-haunted)', 'Sacred grove (landvættir dwell here)', 'Coastal fortress under siege', 'Abandoned settlement (plague or curse)'],
        ['Thing assembly grounds', 'Jarl\'s great hall', 'Hidden fjord (perfect for ambush)', 'Monastery ripe for raiding', 'Trading post at crossroads', 'Volcanic hot springs (healing waters)'],
        ['Mountain pass (troll territory)', 'Shipyard building longships', 'Blót altar stone (blood-stained)', 'Frozen lake (winter shortcut or trap)', 'Sea-cave hiding place', 'Ruined fort from earlier wars'],
        ['Hedeby (Denmark\'s great market)', 'Jorvik (York, Viking-ruled England)', 'Dublin (Irish-Viking trade hub)', 'Constantinople (Byzantium, far south)', 'Paris (tempting raid target)', 'Vinland (mysterious western land)'],
        ['Greenland ice-edge settlement', 'Faroe Islands (sheep and storms)', 'Shetland and Orkney (stepping stones)', 'Lindisfarne (infamous first raid site)', 'Vast forest (easy to get lost)', 'Glacier\'s edge (supernatural boundary)'],
        ['Whale-bone beach (omen-place)', 'Salmon river (bounty or starvation)', 'Enemy clan\'s farmstead', 'Runestone forest (ancestors\' names)', 'Battlefield graveyard (restless dead)', 'Portal to the Otherworld (one-way?)'],
      ]
    },
    quests_and_blood_feuds: {
      id: 'quests_and_blood_feuds',
      name: 'Quests & Blood Feuds',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Avenge kinsman killed in ambush', 'Retrieve stolen family heirloom', 'Clear your name at the Thing', 'Win holmgang to settle dispute', 'Lead raid on wealthy monastery', 'Settle Iceland and survive first winter'],
        ['Escort völva to sacred site', 'Hunt draugr terrorizing valley', 'Negotiate weregild with hostile clan', 'Discover who murdered the jarl', 'Prevent blood feud escalation', 'Claim inheritance disputed by rival'],
        ['Break curse on kinsman', 'Rescue captured family from slavers', 'Find new trade route to Byzantium', 'Survive outlawry sentence (3 winters)', 'Unite warring factions against invaders', 'Recover lost ship from storm'],
        ['Prove innocence in oath-breaking charge', 'Defend settlement from pirate raid', 'Win bride through trial or combat', 'Fulfill prophecy spoken at your birth', 'Hunt legendary beast terrorizing region', 'Overthrow tyrant jarl (lawfully or not)'],
        ['Find Vinland and return to tell the tale', 'Protect Christian convert from persecution', 'End generations-old blood feud', 'Discover why crops fail (curse? Spirits?)', 'Expose traitor in your warband', 'Retrieve völva\'s stolen seidr staff'],
        ['Win place in Varangian Guard', 'Defeat rival in verbal flyting contest', 'Establish new Thing in lawless region', 'Carry message through enemy territory', 'Prevent kinsman from dishonoring family', 'Face the draugr that was once your father'],
      ]
    },
    raids_and_expeditions: {
      id: 'raids_and_expeditions',
      name: 'Raids & Expeditions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Wealthy Irish monastery (easy target)', 'Frankish coastal town (defended)', 'English village (Saxon resistance)', 'Rival clan\'s cattle (traditional raid)', 'Muslim merchant ship (Mediterranean)', 'Scottish island settlement'],
        ['Trade mission to Byzantium', 'Explore western ocean (Vinland?)', 'Rescue mission to foreign prison', 'Smuggling run past jarl\'s taxes', 'Retrieve holy relic for Christian ally', 'Map uncharted coastline'],
        ['Raid rival jarl\'s hall (risky!)', 'Capture specific hostage for ransom', 'Destroy pirate base threatening trade', 'Establish new settlement on Iceland', 'Hunt whales for oil and bone', 'Carry exiled völva to sacred site'],
        ['Join Great Heathen Army invasion', 'Voyage to Kiev (Rus territories)', 'Raid Sami camp for furs (provokes spirits)', 'Escort merchant caravan safely', 'Search for legendary treasure hoard', 'Punitive raid against oath-breakers'],
        ['Winter voyage (desperate or mad?)', 'Diplomatic mission to Christian king', 'Investigate ghost ship sighting', 'Race rival crew to new land', 'Retrieve völva\'s prophecy ingredients', 'Plunder battlefield corpses (shameful?)'],
        ['Join Varangian Guard in Byzantium', 'Colonize Greenland\'s ice edge', 'Hunt sea-serpent threatening harbor', 'Steal bride from rival clan (tradition?)', 'Find crew for cursed ship', 'Voyage beyond the world\'s edge'],
      ]
    },
    omens_and_signs: {
      id: 'omens_and_signs',
      name: 'Omens & Signs',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ravens gather (Odin watches)', 'Northern lights dance (spirits restless)', 'Whale beached (bounty or curse?)', 'Eagle circles overhead (victory comes)', 'Storm rises from clear sky', 'Fog rolls in at noon (Otherworld near)'],
        ['Wolf howls three times', 'Your weapon breaks unexpectedly', 'Dream of drowning', 'Milk turns to blood', 'Horse refuses to move forward', 'Völva\'s prophecy manifests'],
        ['Corpse-light on burial mound', 'Fish leap from water in thousands', 'Ice breaks underfoot', 'Sword sings in scabbard', 'Fire refuses to light', 'Child speaks in dead language'],
        ['Ship\'s dragon-head falls off', 'Ale turns sour overnight', 'Landvættir appears as white deer', 'Stars form unfamiliar pattern', 'Earthquake shakes hall', 'Bread moldy before baking'],
        ['Ravens speak human words', 'Snow falls in summer', 'Ship\'s wake glows with light', 'Dead man\'s ghost walks', 'Thunder without storm', 'Fylgja appears (death omen)'],
        ['Stranger foretells your doom', 'Runestone bleeds', 'All dogs howl at once', 'Your shadow moves wrong', 'Breath freezes though warm', 'You see your own corpse'],
      ]
    },
    random_encounters: {
      id: 'random_encounters',
      name: 'Random Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Traveling merchant with exotic goods', 'Exhausted refugees fleeing war', 'Hunting party from rival clan', 'Lone berserkr seeking worthy foe', 'Christian pilgrims (easy prey or allies?)', 'Lost child crying for parents'],
        ['Wounded warrior with warning', 'Völva offering prophecy (for price)', 'Skald collecting sagas', 'Funeral procession', 'Outlaw band demanding toll', 'Friendly settlement offering hospitality'],
        ['Rival ship on collision course', 'Mysterious hermit in wilderness', 'Wedding party traveling to feast', 'Slave coffle being marched', 'Thing assembly in session', 'Ghost asking for burial'],
        ['Troll blocking mountain pass', 'Landvættir warning you away', 'Draugr emerging from mound', 'Storm driving ships to shore', 'Wild animals fleeing something', 'Abandoned longship (cursed?)'],
        ['Foreign warriors lost and desperate', 'Kinsman you thought dead', 'Ambush by blood-feuding family', 'Livestock mysteriously dead', 'Sacred site being desecrated', 'Sami traders offering furs'],
        ['Rival challenging to holmgang', 'Shipwreck survivors pleading', 'Mare riding a sleeping person', 'Völva mid-seidr trance', 'Old enemy seeking reconciliation', 'Oath-sworn companion returns'],
      ]
    },
    complications_and_betrayals: {
      id: 'complications_and_betrayals',
      name: 'Complications & Betrayals',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ally revealed as oath-breaker', 'Reward is cursed', 'Innocent dies because of your action', 'Enemy escapes to seek revenge', 'Völva\'s prophecy twists meaning', 'Your geis triggers at worst moment'],
        ['Loved one forced to betray you', 'Clan turns against you', 'Weather traps you in hostile place', 'Ship damaged beyond quick repair', 'Trusted companion dies fulfilling oath', 'Victory causes larger blood feud'],
        ['Kinsman challenges your honor', 'Weregild rejected, feud continues', 'Sacred site becomes corrupted', 'Jarl demands impossible service', 'Rival gains your secret weakness', 'Enemy uses your tactics against you'],
        ['Prophecy was misinterpreted', 'Companion revealed as spy', 'Curse spreads to innocent', 'Skald sings your downfall', 'Reputation makes you famous target', 'Freed captive was more valuable imprisoned'],
        ['Supernatural debt comes due', 'Oath conflicts with blood feud', 'Winter comes early, trapping you', 'Love interest chooses rival', 'Child inherits your curse', 'Victory earns jarl\'s jealousy'],
        ['Kinsman of slain enemy hunts you', 'Magic item slowly corrupts you', 'Ally enslaved by seidr', 'Sacred oath binds you to enemy', 'Fame attracts wrong attention', 'The gods demand sacrifice'],
      ]
    },
    treasures_and_artifacts: {
      id: 'treasures_and_artifacts',
      name: 'Treasures & Artifacts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Named sword (Leg-Biter, Blood-Drinker)', 'Silver arm-ring (mark of wealth)', 'Runestone with prophecy', 'Ancestral helmet', 'Drinking horn carved with saga', 'Cloak that sheds water'],
        ['Thrall-worth of silver (12 oz)', 'Ship with famous name', 'Bear-skin cloak', 'Amber necklace (trade value)', 'Byzantine silk', 'Arab silver dirham hoard'],
        ['Monastery gold cross', 'Rune-carved staff', 'Jarl\'s gift-ring (political debt)', 'Völva\'s seidr implements', 'Map to unknown land', 'Oath-ring binding many'],
        ['Cursed weapon (powerful but doomed)', 'Holy relic (Christian)', 'Walrus ivory', 'Furs worth small fortune', 'Ancient torc (pre-Viking)', 'Slave who knows secrets'],
        ['Land deed to Iceland', 'Ship\'s share (part ownership)', 'Enchanted dice (always lucky?)', 'Draugr\'s hoard', 'Varangian armor', 'Frankish wine (luxury)'],
        ['Seidr-woven cloth', 'Horn summoning warriors', 'Shield never broken', 'Boots that never wear out', 'Ring granting safe passage', 'Hammer blessed by Thor'],
      ]
    },
    seasonal_events_and_bl_ts: {
      id: 'seasonal_events_and_bl_ts',
      name: 'Seasonal Events & Blóts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Spring Blót (sacrifice for good season)', 'Thing assembly convenes', 'First ship launches (raiding season)', 'Wedding feast', 'Holmgang duel scheduled', 'Völva prophecy gathering'],
        ['Midsummer festival', 'First harvest celebration', 'Autumn Blót (thanks for harvest)', 'Livestock slaughter for winter', 'Saga-telling competition', 'Flyting contest'],
        ['Winter Blót (survival prayers)', 'Yule feast (darkest night)', 'Ice-breaking ceremony', 'Naming ceremony for child', 'Funeral rites', 'Oath-swearing ceremony'],
        ['Ship consecration', 'Seidr ritual (public)', 'Champion\'s tournament', 'Trade fair gathering', 'Blood-eagle execution (grim)', 'Reconciliation feast'],
        ['Viking games (athletics)', 'New goði installation', 'Boundary-stone blessing', 'Kinship ceremony (adoption)', 'Outlawry proclamation', 'Ship-burning funeral'],
        ['Eclipse observation (omen)', 'First snow ritual', 'Rune-stone raising', 'Weregild payment ceremony', 'Conversion debate (Christians vs. pagans)', 'Ragnarök portent claimed'],
      ]
    },
    thing_assemblies_and_politics: {
      id: 'thing_assemblies_and_politics',
      name: 'Thing Assemblies & Politics',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Lawsuit against you for killing', 'Dispute over land boundaries', 'Goði election (political maneuvering)', 'Outlawry vote on criminal', 'Trade agreement negotiation', 'Marriage alliance proposed'],
        ['Witness testimony contradicts yours', 'Blood feud arbitration', 'New law proposed', 'Jarl demands increased taxes', 'Rival challenges your testimony', 'Secret alliance formed'],
        ['Skald publicly shames rival', 'Völva prophesies at Thing', 'Christian missionary speaks', 'Holmgang challenge issued', 'Weregild amount contested', 'Oath-breaking accusation'],
        ['Thrall granted freedom', 'Land inheritance dispute', 'Trade monopoly challenged', 'Declaration of war vote', 'Kinslayer judged', 'Goði corruption exposed'],
        ['Factions form over issue', 'Bribery scandal', 'Ancient law invoked', 'Precedent-setting case', 'Exile sentence debated', 'Reconciliation attempted'],
        ['Rival buys votes', 'Your reputation tested', 'Thing disrupted by violence', 'New settlement granted autonomy', 'Religious conversion debated', 'Jarl overthrown legally'],
      ]
    },
    ship_names_and_characteristics: {
      id: 'ship_names_and_characteristics',
      name: 'Ship Names & Characteristics',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Wave-Strider (swift, good in storms)', 'Raven\'s Wing (black sail, ominous)', 'Sea-Serpent (dragon-headed prow)', 'Storm-Rider (weathered, reliable)', 'Blood-Drinker (red-painted hull)', 'Wind-Dancer (fastest in fleet)'],
        ['Wolf of the Waves (aggressive raider)', 'Fjord-Glider (shallow draft)', 'Thunder-Striker (heavy, battle-ship)', 'Ice-Breaker (reinforced prow)', 'Whale-Hunter (whaling vessel)', 'Silver-Bringer (merchant ship)'],
        ['Dragon\'s Breath (fire-ship capability)', 'Foam-Cutter (sleek design)', 'Skar-Bringer (feared by enemies)', 'Tide-Turner (lucky ship)', 'Raven-Feeder (brings death)', 'Sky-Seeker (tall mast)'],
        ['Snake of the Sea (long, sinuous)', 'Odin\'s Gift (blessed by völva)', 'Shield-Maiden (crewed by women)', 'Frost-Fang (winter raider)', 'Wave-Treader (ocean-crossing)', 'Saga-Worthy (famous in stories)'],
        ['Bone-Grinder (wrecks enemies)', 'Wind-Whisperer (silent approach)', 'Star-Follower (navigator\'s pride)', 'Reef-Dancer (knows hidden waters)', 'Death\'s Herald (all fear its sail)', 'Fortune-Seeker (explorer\'s ship)'],
        ['Wave-Splitter (powerful rower)', 'Ghost-Ship (appears from fog)', 'Jarl\'s Pride (finest in fleet)', 'Sea-Wolf\'s Fang (pirate vessel)', 'Homeland-Lost (exile\'s ship)', 'Valhalla-Bound (cursed to sink?)'],
      ]
    },
    viking_settlements_and_communities: {
      id: 'viking_settlements_and_communities',
      name: 'Viking Settlements & Communities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Prosperous coastal village', 'Struggling inland farm', 'Fortified hill-fort', 'New Iceland homestead', 'Trading post at river junction', 'Abandoned settlement (why?)'],
        ['Fishing village on fjord', 'Wealthy jarl\'s estate', 'Religious center (temple)', 'Craftsman\'s workshop cluster', 'Slave market town', 'Shipbuilding harbor'],
        ['Winter refuge cave-village', 'Mountaintop signal station', 'Quarrelsome family compound', 'Peaceful farming valley', 'Disputed border settlement', 'Plague-stricken village'],
        ['Bandit hideout (outlaws)', 'Sacred grove with shrine', 'Iron-mining community', 'Salt-production settlement', 'Fur-trading outpost', 'Livestock-herding summer camp'],
        ['Island hermitage', 'Burned-out ruins (recent)', 'Thrall rebellion stronghold', 'Mixed Norse-native settlement', 'Seer\'s isolated dwelling', 'Berserkr training camp'],
        ['Wealthy merchant\'s compound', 'Frontier fort (far north)', 'Secret meeting place', 'Cursed settlement (everyone dead)', 'Multi-clan neutral ground', 'Gateway to Otherworld'],
      ]
    },
    weather_and_sea_conditions: {
      id: 'weather_and_sea_conditions',
      name: 'Weather & Sea Conditions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Clear skies, favorable wind', 'Light rain, steady progress', 'Fog bank (navigation difficult)', 'Building storm clouds', 'Sudden squall from nowhere', 'Dead calm (becalmed)'],
        ['Fierce gale (dangerous)', 'Ice forming on rigging', 'Heavy snow obscuring vision', 'Aurora borealis overhead', 'Lightning strikes nearby', 'Unseasonable warmth'],
        ['Perfect sailing weather', 'Shifting winds (tricky)', 'Wall of rain approaching', 'Towering waves (storm surge)', 'Hail pounding deck', 'Mist that moves wrong'],
        ['Whirlpool or maelstrom', 'Waterspout (tornado at sea)', 'Sea unusually calm (ominous)', 'Current pulling off course', 'Icebergs blocking route', 'Blood-red sunrise (omen)'],
        ['Following winds (Odin\'s favor?)', 'Freezing spray coating ship', 'Sun-dogs (ice crystals, beautiful)', 'Heat lightning without thunder', 'Sudden temperature drop', 'Waves breaking in patterns'],
        ['Storm that lasts three days', 'Unnatural green sky', 'Tide running wrong direction', 'Water glowing with light', 'Wind dies at crucial moment', 'Impossible storm (supernatural?)'],
      ]
    },
    dreams_and_prophecies: {
      id: 'dreams_and_prophecies',
      name: 'Dreams & Prophecies',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['You drown in cold water', 'Your sword breaks in battle', 'A raven speaks your name', 'Dead kinsman gives warning', 'You sit on throne of bones', 'Ship sinks beneath you'],
        ['Feasting in Valhalla', 'Walking through fire unburned', 'Your enemy offers peace', 'Child born with strange mark', 'Tree with your name falls', 'Wolf follows you everywhere'],
        ['Blood moon rises', 'You wear jarl\'s crown', 'Loved one betrays you', 'Finding vast treasure hoard', 'Fighting your own shadow', 'Völva points at you, silent'],
        ['All your teeth fall out', 'Walking among corpses', 'Ship with black sails arrives', 'Your hall burns down', 'Killing someone you love', 'Being buried alive'],
        ['Riding eight-legged horse', 'Serpent coiled around you', 'Speaking in unknown tongue', 'Your reflection attacks you', 'Valkyrie choosing warriors', 'Walking on water'],
        ['Building bridge over abyss', 'Eagle tears out your eyes', 'Weeping over unnamed grave', 'Standing before Thing, silent', 'Your offspring kill each other', 'Ragnarök begins (world ending)'],
      ]
    },
    feast_hall_events: {
      id: 'feast_hall_events',
      name: 'Feast Hall Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Generous gift-giving by jarl', 'Skald performs epic saga', 'Drinking contest erupts', 'Flyting duel begins', 'Wedding announcement', 'Oaths sworn publicly'],
        ['Unexpected guest arrives', 'Food runs out (shame)', 'Fire breaks out', 'Poisoning suspected', 'Brawl over insult', 'Alliance proposed'],
        ['Völva prophesies at feast', 'Challenge to holmgang issued', 'Slave freed publicly', 'Inheritance announced', 'Ghost appears to all', 'Betrayal revealed'],
        ['Magnificent entertainment', 'Honored guest insults host', 'Romantic liaison discovered', 'Political coup attempted', 'Religious conversion debated', 'Blood feud reconciliation'],
        ['Jarl dies mid-feast', 'Enemy attacks during meal', 'Troll breaks into hall', 'Ale mysteriously sours', 'Cursed gift revealed', 'Rival clan arrives uninvited'],
        ['Champion\'s boast challenged', 'Secret lover exposed', 'Weregild payment made', 'Future jarl proclaimed', 'Hall blessed by goði', 'Otherworldly music heard'],
      ]
    },
    skills_and_challenges: {
      id: 'skills_and_challenges',
      name: 'Skills & Challenges',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Navigate by stars alone', 'Climb sheer cliff face', 'Swim across freezing fjord', 'Track enemy through forest', 'Survive three days without food', 'Break wild horse'],
        ['Forge weapon from scratch', 'Compose winning flyting verse', 'Read ancient runes', 'Perform complex seidr ritual', 'Wrestle champion warrior', 'Drink entire barrel of ale'],
        ['Lift massive stone', 'Shoot arrow through ring', 'Endure pain without flinching', 'Negotiate impossible deal', 'Remember complex genealogy', 'Find water in wasteland'],
        ['Repair damaged ship at sea', 'Tame wild falcon', 'Survive lightning strike', 'Win at dice against cheater', 'Cure mysterious illness', 'Speak convincingly at Thing'],
        ['Resist völva\'s curse', 'Escape from bonds', 'Hold breath underwater', 'Convince enemy to surrender', 'Survive shipwreck', 'Out-drink rival'],
        ['Calm panicked warriors', 'Interpret complex omen', 'Build shelter in blizzard', 'Win race against time', 'Resist supernatural fear', 'Face death without terror'],
      ]
    },
    trade_goods_and_merchants: {
      id: 'trade_goods_and_merchants',
      name: 'Trade Goods & Merchants',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Amber from Baltic shores', 'Walrus ivory tusks', 'Arctic fox furs (valuable)', 'Iron ore and ingots', 'Whale oil and bone', 'Seal skins'],
        ['Honey and beeswax', 'Salted fish (barrels)', 'Wheat from Denmark', 'Timber for shipbuilding', 'Rope and cordage', 'Tar for waterproofing'],
        ['Byzantine silk (luxury)', 'Arab silver coins', 'Frankish wine (rare)', 'English wool', 'Irish gold jewelry', 'Sami reindeer hides'],
        ['Slaves (thralls)', 'Horses from Iceland', 'Hawks for hunting', 'Hunting dogs', 'Weapons (swords, axes)', 'Chainmail armor'],
        ['Dyes and pigments', 'Salt (preservative)', 'Spices from east', 'Glass beads', 'Bronze jewelry', 'Carved bone items'],
        ['Scheming merchant (cheats)', 'Honest trader (rare)', 'Foreign merchant (exotic)', 'Desperate seller (bargain)', 'Smuggler (illegal goods)', 'Merchant-spy (gathering info)'],
      ]
    },
    weapons_and_equipment_details: {
      id: 'weapons_and_equipment_details',
      name: 'Weapons & Equipment Details',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Perfectly balanced sword', 'Notched battle-axe', 'Bent shield (needs repair)', 'Helm with raven wings', 'Spear with runic shaft', 'Broken chainmail'],
        ['Bow with bone arrows', 'Seax (fighting knife)', 'Throwing axes (pair)', 'Grandfather\'s sword (heirloom)', 'Captured foreign blade', 'Cursed weapon (unlucky)'],
        ['Shield with beast design', 'Armor too small/large', 'Ceremonial weapon (fragile)', 'Tool doubling as weapon', 'Poison-coated dagger', 'Enchanted spearhead'],
        ['Heavy two-handed axe', 'Weathered but reliable blade', 'Beautifully decorated useless sword', 'Crude but effective club', 'Expensive but poor quality', 'Weapon with dark history'],
        ['Shield boss with hidden spike', 'Collapsible travel bow', 'Chain for restraining enemies', 'Net for fighting', 'Weighted rope', 'Fire-starting kit'],
        ['Emergency rations', 'Water skin (leather)', 'Warm cloak (winter survival)', 'Rope and grappling hook', 'Lock picks and tools', 'Lucky charm (does it work?)'],
      ]
    },
    clan_relationships: {
      id: 'clan_relationships',
      name: 'Clan Relationships',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Allied through marriage', 'Ancient blood feud', 'Recent reconciliation (fragile)', 'Trade partners', 'Mutual enemies unite them', 'Disputed border territory'],
        ['Sworn brotherhood pact', 'Grudging respect', 'Competitive rivalry', 'One clan owes weregild', 'Secret alliance', 'Open warfare'],
        ['Shared Thing assembly', 'Religious differences', 'One clan serves the other', 'Intermarriage banned', 'Neutral but suspicious', 'One clan exiled the other'],
        ['Competing for jarl\'s favor', 'Shared ancestor claimed', 'Prophecy binds fates', 'One stole other\'s land', 'United against outsiders', 'Historical betrayal unforgiven'],
        ['Younger clan honors elder', 'Both claim same glory', 'Economic dependency', 'One protects the other', 'Cultural differences divide', 'Ritual combat tradition'],
        ['Elder generation feuds, youth friendly', 'Marriage alliance negotiating', 'One cursed by other\'s völva', 'Shared sacred site', 'Competition over resources', 'Destined to merge or destroy'],
      ]
    },
    supernatural_encounters: {
      id: 'supernatural_encounters',
      name: 'Supernatural Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Draugr rises from mound', 'Landvættir demands offering', 'Troll demands toll', 'Völva in seidr trance', 'Ghost seeking burial', 'Huldra\'s seduction attempt'],
        ['Mare rides sleeping victim', 'Fylgja appears as death omen', 'Nøkk lurks in water', 'Mysterious lights in forest', 'Voices from burial mound', 'Otherworldly music'],
        ['Animals acting strangely', 'Time moves wrong', 'Prophecy manifests literally', 'Curse activates', 'Hamramr spotted (shapeshifter)', 'Portal to Otherworld opens'],
        ['Dead warrior walks', 'Berserker\'s rage goes wrong', 'Seidr magic backfires', 'Sacred grove rejects you', 'Runestone bleeds', 'Ancestors speak through child'],
        ['Weather obeys völva', 'Weapon comes alive', 'Island wasn\'t there before', 'Time loop encountered', 'Giants seen in distance', 'World-serpent sighting'],
        ['Valkyrie chooses fallen', 'Odin\'s ravens observe', 'Otherworldly feast invitation', 'Your shadow acts independently', 'Speaking with dead kinsman', 'Ragnarök portent (false alarm?)'],
      ]
    },
    journey_complications: {
      id: 'journey_complications',
      name: 'Journey Complications',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Bridge washed out', 'Path blocked by landslide', 'Guide gets lost', 'Food spoils unexpectedly', 'Horse goes lame', 'River flooded, uncrossable'],
        ['Blizzard forces shelter', 'Bandits demand toll', 'Sacred site blocks route', 'Troll territory ahead', 'Local lord forbids passage', 'Plague zone must avoid'],
        ['Ship needs emergency repairs', 'Crew member falls ill', 'Navigation error (lost)', 'Supplies stolen at night', 'Rival group racing you', 'Supernatural fog descends'],
        ['Ice breaks underfoot', 'Pursued by enemies', 'Wrong information given', 'Map is inaccurate', 'Weather turns deadly', 'Mutiny brewing'],
        ['Landmark destroyed/moved', 'Must detour for blood feud', 'Someone recognizes you (bad)', 'Oath forces you elsewhere', 'Prophecy warns against route', 'Equipment failure'],
        ['Political situation changed', 'Deadline approaching', 'Companion has secret agenda', 'Locals hostile to outsiders', 'Natural disaster blocks way', 'Destination no longer exists'],
      ]
    },
    reputation_and_fame_events: {
      id: 'reputation_and_fame_events',
      name: 'Reputation & Fame Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Skald spreads your fame', 'Skald spreads damaging lies', 'Witnesses exaggerate your deed', 'Credit stolen by rival', 'Your cowardice becomes known', 'Heroic deed goes unwitnessed'],
        ['Foreign lands hear your name', 'Compared favorably to legend', 'Mocked for failure', 'Kinsman shames family name', 'Marriage offers increase', 'Assassination attempts increase'],
        ['Children named after you', 'Saga composed about you', 'Rivals challenge constantly', 'Sought for advice', 'Shunned by community', 'Welcomed everywhere'],
        ['Price on your head', 'Jarl seeks your service', 'Völva prophecies your doom', 'Youth idolize you', 'Elders disapprove', 'Other clans fear you'],
        ['Reputation precedes you', 'Mistaken for someone else', 'Legend greater than reality', 'True deeds forgotten', 'Enemy spreads counter-stories', 'Reputation attracts trouble'],
        ['Byname becomes permanent', 'Fame brings responsibilities', 'Expected to perform miracles', 'Cannot escape past deeds', 'Reputation opens doors', 'Immortalized in saga'],
      ]
    },
    combat_situations: {
      id: 'combat_situations',
      name: 'Combat Situations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ambush from forest', 'Open field battle', 'Fighting uphill', 'Defending stronghold', 'Naval boarding action', 'Duel at dawn'],
        ['Fighting in thick fog', 'Surrounded by enemies', 'Protecting non-combatants', 'Fighting retreat', 'Last stand scenario', 'Surprise night raid'],
        ['Shield wall clash', 'Skirmish in ruins', 'Fighting on ice', 'Burning building escape', 'Underwater struggle', 'Mounted vs. foot combat'],
        ['Fighting in storm', 'Narrow bridge battle', 'Multiple opponents', 'Friendly fire risk', 'Hostages complicate fight', 'Ritual combat rules'],
        ['Terrain collapsing', 'Fighting while fleeing', 'Protecting valuable cargo', 'Outnumbered badly', 'Fighting supernatural foe', 'Weapon breaks mid-fight'],
        ['Allies abandon you', 'Fighting former friend', 'Berserk rage uncontrolled', 'Fighting to capture alive', 'Honor forbids certain tactics', 'Fight to prove worth'],
      ]
    },
    social_conflicts: {
      id: 'social_conflicts',
      name: 'Social Conflicts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Insulted publicly at feast', 'Romantic rival appears', 'Accused of theft', 'Family embarrasses you', 'Political alliance crumbling', 'Caught in lie'],
        ['Must choose between loyalties', 'Inappropriate love interest', 'Genealogy disputed', 'Inheritance contested', 'Religious conversion pressure', 'Forced marriage proposed'],
        ['Secret revealed publicly', 'Patron demands impossible', 'Rival spreads rumors', 'Guest overstays welcome', 'Debt called in', 'Oath conflicts with desire'],
        ['Children disgrace family', 'Wife/husband\'s infidelity', 'Shunned by Thing', 'Cultural misunderstanding', 'Generosity expected, can\'t afford', 'Must support unpopular cause'],
        ['Friend becomes enemy', 'Enemy seeks reconciliation', 'Reputation prevents romance', 'Too famous to have privacy', 'Clan expects too much', 'Younger generation disrespects'],
        ['Social climbing backfires', 'Old shame resurfaces', 'Must humble self publicly', 'Gift-giving escalates dangerously', 'Peer pressure toward dishonor', 'Love vs. duty choice'],
      ]
    },
    seidr_magic_and_rituals: {
      id: 'seidr_magic_and_rituals',
      name: 'Seidr Magic & Rituals',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Prophecy clearly spoken', 'Curse laid on enemy', 'Blessing for voyage', 'Weather-working attempted', 'Speaking with dead', 'Seeing into future'],
        ['Shapeshifting ritual', 'Protection ward placed', 'Love spell cast', 'Illness cured magically', 'Enemy\'s hamingja drained', 'Landvættir summoned'],
        ['Runes carved for luck', 'Battle-magic preparation', 'Death-curse pronounced', 'Fertility blessing', 'Sight beyond sight granted', 'Memory wiped by magic'],
        ['Seidr trance goes wrong', 'Spirit possession', 'Magical compulsion placed', 'Truth-telling forced', 'Illusion woven', 'Time manipulation'],
        ['Raising the dead', 'Binding enemy\'s weapon-luck', 'Finding lost item magically', 'Healing serious wound', 'Sending message via dreams', 'Seeing through another\'s eyes'],
        ['Breaking curse', 'Transferring luck', 'Calling storm', 'Making self invisible', 'Berserker rage induced', 'Opening gate to Otherworld'],
      ]
    }
  }
};
