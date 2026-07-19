/**
 * Galaxy Drifter Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'galaxy-drifter-adventure',
    name: 'Galaxy Drifter Adventure Tables',
    version: '1.0',
    enabled: true
  },

  tables: {
    starship_events: {
      id: 'starship_events',
      name: 'Starship Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Mechanical failure requires emergency repairs in deep space', 'Passenger becomes violently ill, needs immediate medical attention', 'Cargo shifts during maneuver, threatens ship stability', 'Communication from unknown vessel requesting assistance', 'Navigation system malfunction leads to course deviation', 'Crew member discovered stealing from passengers'],
        ['Emergency beacon detected from disabled ship', 'Unusual energy readings suggest possible alien technology', 'Stowaway discovered in cargo hold', 'Ship\'s AI begins exhibiting erratic behavior', 'Power fluctuations threaten life support systems', 'Passenger reports valuable item has been stolen'],
        ['Strange signal received from uncharted system', 'Crew member challenges captain\'s authority', 'Life support recycling system begins failing', 'Mysterious cargo container begins emitting radiation', 'Ship receives distress call from planet surface', 'Navigation computer plots course to prohibited system'],
        ['Engine coolant leak detected in engineering', 'Passenger claims to have information about Earth\'s location', 'Ship\'s gravity generator creates localized anomalies', 'Crew member disappears during routine maintenance', 'Communication blackout prevents contact with destination', 'Cargo bay doors malfunction, threatening to open in space'],
        ['Unknown ship begins following at a distance', 'Passenger manifests signs of dangerous mental instability', 'Ship\'s computer systems infected with mysterious virus', 'Emergency supplies discovered to be contaminated', 'Crew member receives threatening messages from unknown source', 'Ship enters uncharted nebula with strange properties'],
        ['Captain announces unexpected change of destination', 'Passenger claims to be fleeing from powerful enemies', 'Ship\'s sensors detect impossible readings from nearby space', 'Crew member found unconscious in restricted area', 'Ship receives order to submit to inspection by authorities', 'Time distortion field causes chronometer malfunctions'],
      ]
    },
    spaceport_encounters: {
      id: 'spaceport_encounters',
      name: 'Spaceport Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Desperate passenger offers triple fare for immediate departure', 'Port authority demands inspection of personal belongings', 'Former associate warns of danger following you', 'Merchant offers trade for rare information about distant world', 'Security forces conduct random identity verification', 'Stranger approaches claiming to know your true identity'],
        ['Ship captain needs crew member for immediate departure', 'Local criminal offers illegal but lucrative job opportunity', 'Religious fanatic preaches about the coming galactic judgment', 'Injured traveler begs for medical assistance', 'Port worker offers to sell stolen cargo manifests', 'Customs official hints at willingness to accept bribes'],
        ['Mysterious figure shadows you through the station', 'Ship\'s AI offers to purchase illegal memory cores', 'Local gang member demands protection payment', 'Starving family asks for help obtaining passage off-world', 'Information broker claims to have Earth location data', 'Security alert locks down all docking bays'],
        ['Former enemy unexpectedly offers to help', 'Maintenance worker discovers your hidden contraband', 'Local noble seeks discrete courier for sensitive mission', 'Ship captain looking for passengers warns of destination dangers', 'Black market dealer offers military-grade equipment', 'Station administrator requests private meeting'],
        ['Gambling den proprietor offers high-stakes game', 'Refugee camp leader asks for aid relocating displaced persons', 'Corporate representative makes job offer with unclear terms', 'Local guide claims knowledge of safe passage routes', 'Pleasure house operator promises information for services', 'Dock worker reports suspicious activity in cargo bay'],
        ['Former crew member arrives unexpectedly seeking reconciliation', 'Station\'s medical facility requests assistance with quarantine', 'Underground resistance member seeks recruitment', 'Ship\'s engineer offers to modify your equipment', 'Local authority figure requests private audience', 'Ancient artifact dealer claims to possess pre-exodus technology'],
      ]
    },
    rumors_and_leads: {
      id: 'rumors_and_leads',
      name: 'Rumors and Leads',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ancient star maps found in derelict ship point to unknown coordinates', 'Corporate executive spotted carrying artifacts of obvious Earth origin', 'Retired explorer claims to have walked on Earth\'s surface', 'Ship\'s computer contains navigation data to prohibited system', 'Religious cult believes their world is actually the legendary Earth', 'Government archives supposedly contain pre-exodus historical records'],
        ['Smuggler offers to sell genuine Earth soil samples', 'Deep space survey detected radio signals in ancient Earth languages', 'Medical facility possesses genetic templates from original Earth stock', 'Archaeological dig uncovered artifacts predating human space travel', 'Merchant guild suppresses information about certain star systems', 'Ship captain claims ancestors kept verbal traditions about Earth'],
        ['Station AI accidentally revealed classified location data', 'Corporate board member seeking discrete expedition to specific coordinates', 'Ancient navigation beacon broadcasts in long-dead Earth dialect', 'Pleasure world noble collects genuine pre-exodus cultural artifacts', 'Research station studying stellar phenomena in suspicious secrecy', 'Underground network trades in supposedly authentic Earth maps'],
        ['Dying explorer whispers coordinates to region beyond known space', 'Government official nervous when asked about specific star system', 'Ship\'s library contains books that reference familiar constellations', 'Corporate archaeological team recruiting for dangerous expedition', 'Tech preservers guarding data they claim came directly from Earth', 'Wealthy collector seeking specific artifacts of obvious Earth origin'],
        ['Deep space monitoring station reports impossible astronomical readings', 'Ship\'s engineer discovered hidden navigation subroutines in old computer', 'Local government prohibits travel to certain nearby systems', 'Information broker offers to sell coordinates to Earth\'s location', 'Religious leader preaches about the coming return to the homeland', 'Medical researcher studying genetic variations seeks specific DNA samples'],
        ['Abandoned research facility contains star charts marked with unknown symbols', 'Corporate spy network actively suppressing certain archaeological findings', 'Ship AI claims to have memories of humanity\'s original departure', 'Wealthy patron funds expeditions to specific regions of unexplored space', 'Government archives accidentally released documents referencing Earth coordinates', 'Ancient message beacon broadcasting from direction of galactic core'],
      ]
    },
    work_opportunities: {
      id: 'work_opportunities',
      name: 'Work Opportunities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Transport sensitive diplomatic pouch to neutral world', 'Serve as bodyguard for wealthy merchant during dangerous negotiation', 'Deliver medical supplies to quarantined research station', 'Investigate mysterious disappearances at mining facility', 'Escort refugee convoy through dangerous space territory', 'Retrieve valuable data from abandoned corporate facility'],
        ['Hunt down escaped convict hiding on frontier world', 'Negotiate trade agreement between hostile planetary governments', 'Salvage cargo from derelict ship in hazardous area', 'Infiltrate criminal organization to gather intelligence', 'Transport illegal immigrants to sanctuary world', 'Locate missing heir to wealthy family fortune'],
        ['Serve as translator during first contact with isolated colony', 'Recover stolen starship from pirate base', 'Investigate corporate espionage at research facility', 'Transport dangerous prisoner to maximum security facility', 'Deliver supplies to military outpost under siege', 'Locate and retrieve missing archaeological expedition'],
        ['Serve as courier for underground resistance movement', 'Negotiate release of hostages held by terrorist group', 'Transport live specimens for biological research project', 'Investigate sabotage at critical infrastructure facility', 'Escort VIP through territory controlled by hostile faction', 'Retrieve valuable artifact from dangerous tomb complex'],
        ['Serve as crew member on exploration mission to uncharted system', 'Hunt dangerous creature that has been attacking settlements', 'Transport military equipment to rebel forces', 'Investigate corporate cover-up of industrial accident', 'Deliver ransom payment for kidnapped corporate executive', 'Locate source of mysterious radio transmissions'],
        ['Serve as guide for hunting expedition on dangerous world', 'Transport religious pilgrims to sacred site', 'Investigate haunting reports at abandoned space station', 'Deliver prototype technology to secret development facility', 'Negotiate peace treaty between warring planetary factions', 'Lead expedition to investigate claims of Earth discovery'],
      ]
    },
    complications_while_in_transit: {
      id: 'complications_while_in_transit',
      name: 'Complications While In Transit',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Your vessel enters a debris field — hull damage or navigation failure imminent.', 'Unexpected solar flare — instruments glitch, and something vital burns out.', 'You receive a distress signal from a derelict ship.', 'Autopilot reroutes — destination changed without your input.', 'Cargo leak — toxic, unstable, or illegal.', 'An unseen craft shadows your trajectory.'],
        ['Someone has tampered with your nav system.', 'Fuel reserves are lower than expected — you may not make it.', 'Mechanical failure — life support flickers or power drops.', 'Dreams become strange and repetitive — memory loop or psychic bleed?', 'You’re hailed by someone using a name you haven’t used in years.', 'You pass through a cold graveyard of ships — something is still moving.'],
        ['Time distortion — clocks and sensors lose sync, jump unclear.', 'Your ship’s AI (or assistant system) starts asking questions it shouldn’t.', 'You detect a passenger or stowaway aboard — and you didn’t bring anyone.', 'Internal fire — contained, but barely.', 'Communications intercept — you hear fragments of conversation about you.', 'You black out mid-jump — time lost, destination uncertain.'],
        ['Automated warning: "DO NOT RETURN TO LAST PORT" — no explanation given.', 'Security lockdown — one of your systems is sealed off.', 'Sudden power spike — systems reboot, and logs are wiped.', 'Your ship is scanned by a vessel with no registry.', 'Hallucinations — you’re not sure if you’re dreaming or waking.', 'Jump trajectory intersects a drifting installation — do you stop or steer away?'],
        ['A message is waiting for you — sent days before you left.', 'The stars don’t match your charts — are you off-course?', 'Minor impact — something is now rattling inside the hull.', 'A leak — not air, but something else. Something warm.', 'Fuel contamination — ship performance degrades unexpectedly.', 'Surveillance drone attached to your hull — not yours.'],
        ['You receive coordinates to a place you’ve never heard of, marked URGENT.', 'You dream of a person who shouldn\'t exist — and wake with something of theirs.', 'Something is growing inside the wall panels.', 'Your last payment didn’t go through — port access might be denied.', 'A personal item is missing — or replaced.', 'A familiar song begins playing over comms — from a system long dead.'],
      ]
    },
    unexpected_cargo: {
      id: 'unexpected_cargo',
      name: 'Unexpected Cargo',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A sealed cryopod — occupant status unknown.', 'A shipment of banned pharmaceuticals, mislabeled as protein supplements.', 'Ancient religious relics from a forbidden sect.', 'A disassembled but live weapon system.', 'A locked briefcase, voiceprint sealed, set to detonate if tampered with.', 'Dozens of identical ID cards — all with your face and false names.'],
        ['A semi-sentient fungal culture in containment jars.', 'Hard drives full of encrypted star maps marked CLASSIFIED.', 'Lab-grown pets that grow rapidly with light exposure.', 'A perfectly preserved human hand, tagged and catalogued.', 'A bounty poster naming you — printed and dated two jumps ago.', 'A vat of cloned muscle tissue, still pulsing faintly.'],
        ['A drone labeled for courier service — destination wiped.', 'A sealed envelope with the name of someone you once betrayed.', 'Empty cages… and scratched walls.', 'A sculpture made of teeth and copper, humming faintly.', 'Military uniforms for a faction you\'ve never heard of.', 'A box of children\'s toys, each tagged with biometric trackers.'],
        ['A functioning planetary access pass for a restricted world.', 'A set of noble regalia from a long-dead monarchy.', 'Vials labeled “Personal Memories – Subject 73” in your handwriting.', 'A parasite containment kit — but one vial is empty.', 'A wedding ring and coordinates etched on the inside.', 'An alien language lexicon and translator device keyed to your voice.'],
        ['A briefcase of local currency from five different systems.', 'A broken android head with a single eye still active.', 'A bottle of atmosphere sealed from a world now destroyed.', 'A ceremonial mask that alters your voice when worn.', 'A crate of unfinished sculpture busts — each vaguely resembling you.', 'A locked black cube — no seams, no interface, warm to the touch.'],
        ['A corpse wrapped in canvas, with a map tattooed on its back.', 'A children’s book in a language no one speaks anymore.', 'A jar labeled “Memory Leak – Dispose Immediately.”', 'A coded letter written to someone using your old name.', 'A crate full of counterfeit religious texts — but some may be true.', 'A lifeform that mimics the last person it sees.'],
      ]
    },
    npc_motivations: {
      id: 'npc_motivations',
      name: 'NPC Motivations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Wants to escape their current life', 'Seeks vengeance for a past betrayal', 'Desires recognition and respect', 'Needs money urgently — for reasons they won’t explain', 'Is looking for someone they lost', 'Wants to expose a hidden truth'],
        ['Seeks protection from a powerful enemy', 'Is following orders they secretly oppose', 'Wants to reclaim stolen property', 'Is testing your loyalty or character', 'Desires to prove their worth', 'Has sworn a vow they won’t break'],
        ['Is desperate to get off-world', 'Wants to keep a secret buried', 'Is under surveillance and knows it', 'Is hiding from someone who used to trust them', 'Is building influence behind the scenes', 'Wants to bring someone down — at any cost'],
        ['Seeks a cure or treatment for a terminal condition', 'Is acting under blackmail or coercion', 'Believes you are the key to their goal', 'Wants to destroy a specific faction', 'Is quietly collecting information for later use', 'Wants to repent for something they did — or didn’t do'],
        ['Seeks to rise within a rigid hierarchy', 'Is obsessed with an ideal or principle', 'Wants to complete someone else’s mission', 'Is loyal to someone they’ve never met', 'Needs to test you before trusting you', 'Wants you to owe them something'],
        ['Believes in a prophecy involving you', 'Is being used as bait — knowingly or not', 'Is trapped by debts or oaths', 'Is trying to stay neutral in a situation that won\'t allow it', 'Desires companionship but doesn’t know how to ask', 'Has no clear motivation — they\'re drifting like you'],
      ]
    },
    faction_interference: {
      id: 'faction_interference',
      name: 'Faction Interference',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A faction agent contacts you with a veiled threat.', 'Your gear is tagged as restricted tech by a faction authority.', 'A faction representative offers you a job you can\'t refuse.', 'You’re flagged for questioning by local faction enforcers.', 'A faction broadcasts a false identity profile matching yours.', 'A border checkpoint detains you due to faction alert status.'],
        ['An old favor to a faction is suddenly called in.', 'Someone close to you is working for the faction — secretly.', 'Your ship is impounded on faction orders.', 'Faction surveillance drones are following you — obviously.', 'A rival is using faction backing to undermine you.', 'A faction plants contraband in your cargo.'],
        ['Faction representatives disrupt a meeting or transaction.', 'A bounty is issued under a faction’s authority — your name is on it.', 'A faction agent warns you to leave the planet within a cycle.', 'Local services suddenly become inaccessible due to faction pressure.', 'A faction starts recruiting aggressively in your area — including you.', 'A deal you struck is co-opted or voided by faction decree.'],
        ['You are mistaken for a known faction defector.', 'A faction-controlled AI attempts to override part of your system.', 'A bribe you paid to avoid faction attention was not enough.', 'Someone offers to help you — but only if you hurt the faction.', 'A local official uses faction affiliation to push you around.', 'You\'re offered sanctuary by a faction — at a price.'],
        ['A faction uses you as bait in a larger conflict.', 'A faction-backed smear campaign ruins your standing on this world.', 'Faction conflict spills into civilian space — you’re caught in it.', 'You are forcibly conscripted — "just for a job or two."', 'A sleeper agent embedded in your circle activates.', 'Faction investigators seize your logs and comms.'],
        ['A faction is protecting someone you need to reach.', 'A peacekeeper faction arrests you on fabricated charges.', 'A faction\'s law takes precedence — and it\'s brutal.', 'A faction attempts to flip your contacts against you.', 'You’re caught in a purge or political reshuffle.', 'A faction blames you for a prior mission\'s failure — right or wrong.'],
      ]
    },
    local_secrets: {
      id: 'local_secrets',
      name: 'Local Secrets',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The ruling authority is a puppet for an offworld faction.', 'A recent disaster was deliberately engineered.', 'A supposedly extinct species or culture survives in hiding.', 'The planet’s history has been falsified — archives have been purged.', 'The central AI is unstable, but no one dares shut it down.', 'The economy depends on a hidden exploitation — of labor, life, or land.'],
        ['Someone is impersonating a high-ranking official.', 'A powerful drug is being smuggled through official channels.', 'The native population has been displaced — and quietly resists.', 'There’s a second starport no one talks about.', 'An ancient machine buried underground is still active.', 'Rituals once banned are secretly practiced by the elite.'],
        ['A local healer has knowledge beyond biotech — and won’t say why.', 'Every visitor is recorded — and studied.', 'Someone has lived far longer than they should.', 'The government fears something beneath the ocean/ice/surface.', 'A ghost signal disrupts long-range comms — it\'s repeating coordinates.', 'The food isn’t grown locally — and its origin is classified.'],
        ['A planetary war was covered up — the ruins are still there.', 'Children born here have anomalies no one can explain.', 'A recent archaeological find is being kept secret by order.', 'An outlawed group runs much of the local infrastructure.', 'A disease is spreading silently — the symptoms are subtle at first.', 'The dead aren’t staying buried — and no one will speak of it.'],
        ['An energy source is too powerful — and unstable.', 'A lost expedition left behind encrypted logs someone now wants.', 'The elite are preparing for an offworld evacuation.', 'The religion here was imported to suppress an older one.', 'A trusted figure has falsified their identity.', 'The atmosphere is slowly changing — and it’s being ignored.'],
        ['Something watches the city from the high orbit.', 'An ancient creature sleeps beneath the capital — and dreams.', 'A forbidden map shows routes to erased locations.', 'A local festival reenacts a massacre — few know it’s historical.', 'The starport was once a prison — and it may still be.', 'A message hidden in graffiti has been growing more complex.'],
      ]
    },
    ruins_or_restricted_zones: {
      id: 'ruins_or_restricted_zones',
      name: 'Ruins or Restricted Zones',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Sealed vault carved into an obsidian cliff — no visible access points.', 'Overgrown temple complex broadcasting a looped distress signal.', 'Derelict orbital station tethered to the surface by a fractured elevator.', 'Quarantined city swallowed by desert — still faintly powered.', 'Overrun military lab — entry forbidden under planetary law.', 'Hollow mountain housing rusted machines still whispering in code.'],
        ['Deep-buried catacombs filled with ancient devotional icons.', 'Floating wreckage field patrolled by automated defense drones.', 'Collapsed biodome with weather still cycling inside.', 'Towering spire sealed in phase glass — impossible to scan.', 'Restricted jungle zone with native fauna resistant to biotech.', 'Ice-locked ruin exposed during thaw — quickly reburied.'],
        ['Forbidden scrapyard filled with tagged memory cores.', 'Crater city wiped from all official maps.', 'Underground transport grid now used by smugglers and outcasts.', 'Cracked stasis vault — containment status uncertain.', 'Flooded colony — surface wreckage disguises a working reactor below.', 'A field of petrified figures around a black monolith.'],
        ['Biozone perimeter marked with shifting light and dissonant sounds.', 'Tower under slow reconstruction — no one admits who funds it.', 'Atmospheric testing site abandoned mid-procedure.', 'Sector where all communications fail — said to be haunted.', 'Crashed generation ship partly absorbed by the terrain.', 'Ruins claimed as sacred by a minor cult — violently protected.'],
        ['Dome full of withered plantlife and glowing fungi — sealed by code lock.', 'Memory archive buried under a chapel, protected by hallucinations.', 'Blasted plateau ringed with red towers emitting low pulses.', 'Cavern network where sound vanishes entirely.', 'Archaeological dig halted without explanation — camp left intact.', 'Monument to an erased empire — inscriptions forcibly scrubbed.'],
        ['Magnetic anomaly zone — disables all guidance systems within.', 'Barricaded mine with rhythmic tremors from below.', 'Towering wall of fused starships — some compartments still active.', 'Lifeless zone where flora moves when unobserved.', 'Breached vault humming with displaced gravity fields.', 'Sinkhole with a spiral staircase descending into total darkness.'],
      ]
    },
    when_you_ask_for_help: {
      id: 'when_you_ask_for_help',
      name: 'When You Ask for Help',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['They help — no strings attached, and they mean it.', 'They help, but quietly expect repayment later.', 'They help — but lie about part of it.', 'They agree to help, but ask something awkward in return.', 'They offer help, but only if you renounce something.', 'They help — and immediately tell someone else.'],
        ['They stall, then disappear.', 'They offer the *appearance* of help, but it’s a trap.', 'They help, but sabotage part of what they give you.', 'They’re willing, but under surveillance.', 'They can\'t help, but offer a lead to someone who might.', 'They ask to join you — permanently.'],
        ['They help, but their rival will retaliate.', 'They help — and now think you owe them a favor.', 'They mislead you, unintentionally.', 'They help because they mistake you for someone else.', 'They help, but insist you leave immediately after.', 'They ask you to lie for them in exchange.'],
        ['They help — but disappear before you can thank or repay them.', 'They agree, but demand your weapon/gear first.', 'They help, but talk about it too loudly.', 'They help — and confess something afterward.', 'They offer help *only if no one finds out*.', 'They call in help from someone dangerous on your behalf.'],
        ['They ask you to prove yourself first.', 'They help — but under false pretenses.', 'They agree, but double-cross you partway through.', 'They help you — and put themselves at great risk.', 'They give you what you need — but not what you asked for.', 'They offer shelter, but won’t answer questions.'],
        ['They claim to help but delay until it’s too late.', 'They’re under orders not to help — and do it anyway.', 'They help, but mark your presence in a registry.', 'They help and reveal they’ve been watching you for some time.', 'They ask you to take their place in a task they can’t complete.', 'They don’t help — but send someone who might.'],
      ]
    },
    when_you_break_a_rule: {
      id: 'when_you_break_a_rule',
      name: 'When You Break a Rule',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['You\'re fined — more than you can afford.', 'A patrol is dispatched to your last known location.', 'You’re identified and flagged in the system.', 'A witness offers to stay silent — for a price.', 'You’re arrested, but not booked — someone wants to talk first.', 'You’re detained with others who already hate you.'],
        ['The penalty is exile — effective immediately.', 'You\'re blackmailed by someone who saw everything.', 'You trigger an automatic security lockdown.', 'Local law is unclear — and interpreted against you.', 'Your name is spread through underground networks.', 'Someone intervenes — and expects repayment later.'],
        ['The faction in charge uses the incident as a public warning.', 'You’re given a chance to make it right — but it’s unpleasant.', 'A contact disavows you to protect themselves.', 'You lose access to a vital local resource.', 'Your gear is confiscated — you may not get it back.', 'Someone you helped is caught up in the backlash.'],
        ['You’re offered a brutal choice: one punishment or another.', 'Surveillance footage is altered to incriminate you further.', 'A local group defends you — but now expects loyalty.', 'You\'re forced to flee the district immediately.', 'A bounty is quietly issued — no trial, no questions.', 'You’re marked with a temporary tag — visible to everyone.'],
        ['You’re not punished… yet. Someone is watching to see what you do next.', 'You’re handed over to a rival faction as leverage.', 'A local tries to help — and gets caught because of you.', 'The rule was a trap — designed to lure people like you.', 'You’re recorded and replayed in propaganda footage.', 'Your ship or transit access is locked down.'],
        ['A minor official decides to make you an example.', 'The punishment is symbolic — but permanently scarring.', 'You’re offered a job to make up for it — dangerous and degrading.', 'A rival uses the event to move against you.', 'You’re shadowed everywhere until you leave the planet.', 'You’re let go — and told to never return.'],
      ]
    },
    power_broker_demands: {
      id: 'power_broker_demands',
      name: 'Power Broker Demands',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Deliver a message — without knowing who it’s for or what it means.', 'Eliminate a rival discreetly — no witnesses, no trace.', 'Betray an ally or contact in exchange for protection.', 'Acquire a restricted item from a high-security location.', 'Smuggle a package off-world without inspection.', 'Pose as someone else for a public appearance.'],
        ['Take the fall for a minor scandal — “you’ll be cleared eventually.”', 'Serve as bodyguard during a volatile negotiation.', 'Infiltrate a faction and report back — or sabotage it.', 'Escort a volatile figure safely through dangerous territory.', 'Test an experimental device with no information about its function.', 'Lure someone into a trap — and don\'t ask why.'],
        ['Stage a public spectacle to distract from real operations.', 'Hand over something sacred or personal as collateral.', 'Steal data from a secured system — with a timed window.', 'Keep a dangerous individual alive until they can be claimed.', 'Find someone who doesn’t want to be found.', 'Sabotage a peace effort — and leave no fingerprints.'],
        ['Spread disinformation to sway a factional vote or verdict.', 'Pretend to work for another group to stir conflict.', 'Retrieve a debt from someone you respect.', 'Deliver a gift laced with surveillance tech.', 'Frame an innocent — it\'s politically convenient.', 'Serve as a witness for an altered version of events.'],
        ['Take custody of an unwanted asset — biological, digital, or both.', 'Join a temporary alliance against a larger threat — or else.', 'Accept a “favor” you didn’t ask for — the price comes later.', 'Arrange an accident and walk away.', 'Extract someone from a collapsing zone — no questions asked.', 'Hide evidence from a faction investigator.'],
        ['Enter a territory you’ve been banned from.', 'Deliver false intel to a trusted contact.', 'Transport something that can\'t be scanned or opened.', 'Provide your biometrics for "security purposes."', 'Get caught — deliberately — and play a role.', 'Do absolutely nothing — and accept full blame for what happens.'],
      ]
    },
    escalation_events: {
      id: 'escalation_events',
      name: 'Escalation Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Martial law is declared — all non-citizens are confined or expelled.', 'A faction blockade surrounds the starport — no travel permitted.', 'Planetwide communication goes down — cause unknown.', 'An offworld fleet enters orbit with unclear intent.', 'A series of assassinations hits key political figures.', 'An outbreak spreads — panic, misinformation, and denial follow.'],
        ['An energy grid failure plunges key districts into darkness.', 'A protest escalates into a riot — live ammo is used.', 'A mysterious structure emerges from underground — no one claims it.', 'A known faction fractures — splinter groups act without restraint.', 'Environmental collapse begins — sky, water, or atmosphere altered.', 'A prominent figure disappears without explanation.'],
        ['Orbital debris begins falling — random strikes across the surface.', 'Trade routes are closed — shortages and price spikes follow.', 'A major lie is exposed — public trust collapses.', 'Armed drones begin patrolling civilian zones.', 'A local leader declares independence — factions respond violently.', 'A cult takes credit for a recent disaster — and gains followers.'],
        ['You are publicly named as a person of interest in an investigation.', 'A faction offers amnesty to criminals — chaos results.', 'All access to offworld systems is suspended by central authority.', 'Surveillance ramps up — anonymous enforcers appear everywhere.', 'A known safe zone becomes a trap — all entrances sealed.', 'Planetary AI is compromised — systems behave unpredictably.'],
        ['Psychic disturbances cause hallucinations, fear, or mass dreaming.', 'Time anomalies ripple through a district — clocks desync, people panic.', 'A virus affects cybernetics — implants malfunction or rebel.', 'Armed faction conflict breaks out in the open — civilians are targets.', 'A government falls — no clear successor emerges.', 'Rumors spread of a weapon too dangerous to remain hidden.'],
        ['Mass evacuation orders begin — only the rich are granted passage.', 'A major NPC or faction contact turns against you.', 'Someone tries to take credit for your actions — badly.', 'An alien artifact activates — attracting dangerous attention.', 'Memories begin to fade — yours, or the planet’s history.', 'The planet is flagged as unstable — recall orders or orbital strike imminent.'],
      ]
    },
    wandering_the_undercity: {
      id: 'wandering_the_undercity',
      name: 'Wandering the Undercity',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A half-lit bazaar trades in memories, identities, and custom nerves.', 'Two factions conduct a tense standoff over control of a tunnel hub.', 'A medic offers cheap healing — but their tools are archaic and twitching.', 'You step into a zone with altered gravity and broken timekeeping.', 'Someone tries to follow you, poorly.', 'You find graffiti that matches something from another planet.'],
        ['A group of children mimic a forgotten ritual with eerie precision.', 'A sealed gate pulses faintly — someone on the other side knocks once.', 'You pass an operating theater mid-procedure — the patient is conscious.', 'A shrine lit with scavenged screens shows images of your past.', 'An old contact greets you warmly — but doesn’t remember your name.', 'You stumble into a duel in progress — the loser looks familiar.'],
        ['The lights flicker — everyone freezes until they return.', 'A street preacher calls out your secrets from the shadows.', 'You are offered a guide — they demand no payment, just a promise.', 'A defunct vending machine dispenses an ancient relic.', 'Someone tries to trade you a memory — not theirs.', 'You find a shortcut that shouldn’t exist — the exit is miles away.'],
        ['An abandoned checkpoint still scans passersby — and prints warnings.', 'You step into a long-sealed corridor — it feels like it’s waiting.', 'A corpse slumped in the shadows clutches something valuable.', 'Black market traders offer you a deal — but you\'re not sure who\'s watching.', 'A local gang wants to know what you\'re doing down here.', 'You pass a quiet bar where the patrons never blink.'],
        ['You overhear a plan that could shift power above.', 'Someone offers you shelter — but locks the door from the outside.', 'You find someone lost — they’ve forgotten who they are.', 'A modified crawler slinks by, tagged with an unknown symbol.', 'A section is flooded with breathable mist that shouldn’t exist.', 'A wall opens briefly, revealing another layer — and then closes again.'],
        ['You enter a space lit by bioluminescent murals — one shows your ship.', 'You’re handed a message written in your own handwriting.', 'The path collapses behind you — and someone is watching from above.', 'A memory returns — it never happened, but feels true.', 'You find a coded map etched into overlapping tilework.', 'A child hands you a token — *“You’ll need this to get back out.”*'],
      ]
    },
    reactions_to_outsiders: {
      id: 'reactions_to_outsiders',
      name: 'Reactions to Outsiders',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Hostile — you are immediately challenged or accused.', 'Watched — eyes follow your every move, silently.', 'Cold politeness — you’re tolerated but not welcomed.', 'Confused — they’ve never seen anyone like you.', 'Welcoming — a local greets you like an old friend.', 'Curious — someone asks questions, cautiously but sincerely.'],
        ['Defensive — locals avoid you entirely.', 'Worshipful — they mistake you for something significant.', 'Suspicious — they think you’re lying about your reason for visiting.', 'Amused — you’re treated like a novelty or tourist.', 'Grateful — a stranger believes you helped them in the past.', 'Alarmed — someone alerts security or a local authority.'],
        ['Protective — someone insists on guiding you personally.', 'Opportunistic — several people try to sell you something at once.', 'Judgmental — they assume your presence means trouble.', 'Split — some welcome you, others clearly do not.', 'Dismissive — they pretend you’re not there.', 'Grudging respect — they’ve heard of you, and it’s complicated.'],
        ['Patronizing — you’re treated as naive or weak.', 'Protective hostility — *“You shouldn’t be here. Go.”*', 'Imitative — someone copies your behavior or style.', 'Territorial — you’re told you’ve crossed an invisible line.', 'Exploitative — someone sees how to use you for their gain.', 'Resentful — past outsiders did harm here.'],
        ['Indifferent — they simply don’t care who you are.', 'Grasping — someone begs for help the moment they see you.', 'Warm but wary — kindness without trust.', 'Testing — someone sets a small trap to see how you react.', 'Romanticized — they expect you to act like a mythical outsider.', 'Disguised hostility — all smiles, but doors start closing.'],
        ['Desperate — you’re seen as a last chance.', 'Relieved — your arrival interrupted something worse.', 'Isolated — people scatter when you walk by.', 'Envious — they assume you live better, travel easier.', 'Obligated — a custom requires them to help you (briefly).', 'Forgotten — no one notices or remembers you, even after speaking.'],
      ]
    },
    when_you_return_to_a_known_world: {
      id: 'when_you_return_to_a_known_world',
      name: 'When You Return to a Known World',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Your name is on a watchlist — they detain you on arrival.', 'A local you helped is now in a position of power — or danger.', 'Someone you betrayed is looking for you.', 'The world is under new rule — different laws, different threat.', 'A former contact refuses to acknowledge you.', 'A memorial plaque bears your name — you’re presumed dead.'],
        ['A new faction now controls the spaceport.', 'Your previous actions have become exaggerated rumor or legend.', 'A child recognizes you — says you made a promise.', 'The place you left hidden is now exposed — or gone.', 'You’re greeted as a hero — but for something you didn’t do.', 'Someone tries to collect a debt you don’t remember incurring.'],
        ['Your old enemy here has disappeared — and left something behind.', 'A familiar NPC has changed sides — and wants you to understand why.', 'The entire district you visited has been destroyed or sealed off.', 'A faction uses your name as a rallying cry — you\'re a symbol now.', 'A stranger thanks you for a past action — it saved someone else.', 'Your ship is flagged by automated systems — security intervenes.'],
        ['A hidden message has been left for you — old code, new urgency.', 'A clone, recording, or impersonator of you is active here.', 'You find signs that someone followed your path after you left.', 'A trial is underway — and you\'re listed as a key witness.', 'A cultural event now centers on something you once did.', 'An artifact you left behind has changed hands — and meaning.'],
        ['A previously minor threat here has grown — because of your absence.', 'Someone tries to kill you without speaking.', 'You’re offered a chance to settle unfinished business — or avoid it.', 'You return during a planetary crisis — no one has time for you.', 'Locals claim you owe them — their version of events differs wildly.', 'You’re offered amnesty — or blackmailed into silence.'],
        ['An ally you abandoned is alive — but not who they were.', 'An item or memory hidden here is waiting — untouched.', 'You’re mistaken for your last enemy — consequences ensue.', 'You find a message written in your own hand — but don’t remember it.', 'A former nemesis is working for local authorities — and smug.', 'No one remembers you — and everything feels slightly wrong.'],
      ]
    }
  }
};
