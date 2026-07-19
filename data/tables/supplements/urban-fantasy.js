/**
 * Urban Fantasy Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'urban-fantasy-adventure',
    name: 'Urban Fantasy Adventure Tables',
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
        ['A newly awakened practitioner shows up at the haven—terrified, bleeding, and carrying something they don\'t understand', 'A ley line beneath your neighborhood goes silent; within days the local magical community starts falling ill', 'Someone you trust asks you to forget you saw them in a place they shouldn\'t have been', 'A ghost has been following the same mundane for weeks—and the mundane has started to notice', 'A mentor from your past resurfaces after years of silence, asking for one last favor', 'Three practitioners in different parts of the city dreamed the same thing on the same night—and you were in it'],
        ['A cursed object has passed through six hands in two weeks; everyone who held it lost something important', 'A haven is shutting down and someone needs to take in the community before they scatter', 'You discover a mundane has been accurately documenting magical activity in your neighborhood for months', 'A member of your found family has made a bargain they\'re too ashamed to tell you about', 'Something ancient and confused has wandered out of the Underneath and cannot find its way back', 'A practitioner has been declared dead by the community—but you\'ve just seen them, alive, in mundane territory'],
        ['The wards on a major safe haven are failing; whoever built them is gone and no one else knows the pattern', 'A Fae debt incurred by a predecessor is being called in—you inherited it with the bloodline', 'A young practitioner is advancing too fast; someone taught them wrong and they don\'t know it yet', 'You find a journal that describes your own recent actions in detail—written six months ago', 'Two factions are heading toward conflict; you know both sides and neither knows you know the other', 'A portal has opened inside an occupied apartment building and mundane tenants are already complaining about the drafts'],
        ['Someone is using a dead practitioner\'s name, identity, and sigil—and the community is starting to ask questions', 'A string of impossible thefts targets only supernatural households; nothing valuable is taken, only things with sentimental magical weight', 'A ritual site you use regularly has been found and altered by someone—the alterations are subtle and probably deliberate', 'A child in a mundane school is awakening rapidly and dangerously; their teacher has called the city\'s attention', 'You receive a message from your future self—short, urgent, and useless without context you don\'t have yet', 'An old community accord is being tested by someone who believes it no longer applies to them'],
        ['A practitioner you\'ve never met has named you as their emergency contact; now there is an emergency', 'The magical community\'s primary supplier of essential components has gone missing', 'A mundane you love is starting to see through the Veil—and you don\'t know if it\'s natural or being done to them', 'Something is systematically erasing a practitioner from everyone\'s memory; you\'re the last one who still remembers them', 'A deal struck in your name—without your knowledge—is now being enforced', 'The boundary between two rival territories has shifted; both sides think the other moved it deliberately'],
        ['A creature is offering information about a coming catastrophe in exchange for sanctuary—and it won\'t say what the catastrophe is', 'A magical disease is spreading through the community—it only affects people who have broken a promise', 'Someone is recruiting newly awakened practitioners before the community finds them; you don\'t know for what', 'An artifact central to the community\'s history has been stolen and replaced with a perfect mundane replica', 'A practitioner is being publicly accused of something by their own familiar—and the familiar can talk', 'The Veil is about to tear open in a very public, very visible place; you have hours and no one believes you yet'],
      ]
    },
    magical_locations: {
      id: 'magical_locations',
      name: 'Magical Locations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['24-hour bookshop with forbidden section in the back', 'Subway platform that only appears at midnight', 'Rooftop garden growing impossible plants', 'Underground nightclub where multiple factions meet', 'Abandoned church now serving as neutral ground', 'Coffee shop where time moves differently'],
        ['Laundromat that launders more than clothes', 'Parking garage with portal to the Mirror City', 'Public library with restricted section on third floor that doesn\'t exist', 'Graffiti alley where the art is alive', 'Condemned building that\'s actually a safe haven', 'Bodega selling mundane goods in front, magical supplies in back'],
        ['Cemetery that\'s a gathering place for ghosts', 'Art gallery displaying works from other realms', 'Bus that only picks up supernatural passengers', 'Apartment building where each floor is a different faction\'s territory', 'Park where ley lines intersect beneath the fountain', 'Food truck that serves sustenance for various supernatural hungers'],
        ['Pawn shop that deals in cursed and magical objects', 'Theater where performances can alter reality', 'Construction site built over ancient portal', 'Hotel where each room leads to different realm', 'Bridge where suicides become ghosts who can\'t cross', 'Tattoo parlor specializing in binding runes and protective wards'],
        ['Record store playing music that affects emotions and magic', 'Homeless shelter run by sanctuary keeper', 'Pet store selling familiars and supernatural companions', 'Gym where supernatural beings practice controlling their powers', 'Botanical garden cultivating plants from other dimensions', 'Warehouse district with dueling grounds'],
        ['Phone booth that connects to anywhere if you know the right number', 'Penthouse suite existing outside normal time', 'Skate park serving as meeting ground for young practitioners', 'Antique shop where objects remember their histories', 'Psychiatric hospital where some patients really do see things', 'Crossroads where deals are made and broken'],
      ]
    },
    faction_encounters: {
      id: 'faction_encounters',
      name: 'Faction Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Vampire envoy offering alliance', 'Pack member establishing boundaries', 'Fae courier delivering mysterious package', 'Wizard Circle apprentice seeking forbidden knowledge', 'Demon-touched warlock making a bargain', 'Teacher seeking promising student'],
        ['Necromancer\'s thralls searching for something', 'Experienced practitioner offering guidance (with strings attached)', 'Ghost detective following a cold case', 'Techno-shaman hacking into magical infrastructure', 'Blood addict vampire losing control', 'Cult recruiter targeting the newly awakened'],
        ['Reality glitch causing chaos', 'Portal guardian blocking passage', 'Memory thief stalking victim', 'Wild Hunt passing through', 'Cursed artifact guardian seeking help', 'Ley line conductor repairing damage'],
        ['Rival practitioner seeking collaboration or competition', 'Haven keeper offering refuge and community', 'Demon making deal offer', 'Prophecy seeker demanding cooperation', 'Transformation addict in mid-change', 'Ancient one adapting to modern world'],
        ['Between-worlds refugee seeking guidance', 'Awakened familiar rebelling', 'Veil-touched human asking dangerous questions', 'Bargain hunter collecting debt', 'Shadow stalker hunting prey', 'Grimoire merchant offering rare text'],
        ['Soul binder attempting capture', 'Truth-seeker gathering evidence about the impossible', 'Cursed protector fulfilling obligation', 'Oracle speaking cryptic warning', 'Community elder assessing newcomers', 'Power broker arranging meeting between practitioners'],
      ]
    },
    investigation_hooks: {
      id: 'investigation_hooks',
      name: 'Investigation Hooks',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Missing persons all have supernatural connection', 'Strange symbols appearing throughout city', 'Ley line disruption causing magical chaos', 'Ancient artifact stolen from secure vault', 'Portal opening in unexpected location', 'Veil breach caught on social media'],
        ['Prophecy concerning the protagonist surfaces', 'Practitioner murdered—personal grudge or magical mishap?', 'Supernatural creature terrorizing neighborhood', 'Cursed object spreading contamination', 'Memory gaps in multiple people', 'Safe haven under threat'],
        ['Ghost unable to move on needs help', 'Transformation spreading like disease', 'Time anomalies appearing in specific area', 'Dream realm bleeding into waking world', 'Binding breaking on ancient prisoner', 'Cult activity increasing dangerously'],
        ['Reality glitches becoming more frequent', 'Demon contract coming due', 'Fae bargain terms being fulfilled', 'Bloodline heir discovering their heritage', 'Power source corruption spreading', 'Mentor disappears leaving cryptic message'],
        ['Rival practitioner making dangerous moves', 'Magical community divided over important issue', 'Teacher gone missing leaving cryptic warning', 'Ancient text revealing dangerous knowledge', 'Realm refugee pursued by something terrible', 'Familiar bond breaking unexpectedly'],
        ['Soul theft ring discovered', 'Prophecy being manipulated', 'Conflict brewing between magical communities', 'True name discovered by enemy', 'Between-worlds balance threatened', 'Awakening cascade beginning'],
      ]
    },
    mentor_complications: {
      id: 'mentor_complications',
      name: 'Mentor Complications',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Mentor has hidden agenda you\'re just discovering', 'Mentor\'s enemies target you to get to them', 'Mentor teaching forbidden techniques without telling you the risks', 'Mentor disappears mid-training, leaving cryptic final lesson', 'Mentor demands increasingly dangerous tasks as "tests"', 'Mentor\'s past mistakes come back to haunt both of you'],
        ['Mentor is losing their power or sanity', 'Mentor becomes romantically interested (complicating everything)', 'Mentor\'s teaching methods border on abusive', 'Mentor owes dangerous debts you\'re expected to help pay', 'Mentor manipulating you for their own purposes', 'Mentor\'s rival tries to steal you as a student'],
        ['Mentor teaching you magic that\'s changing you in disturbing ways', 'Mentor reveals they\'re not what they seemed', 'Mentor forbids you from learning something you desperately need', 'Mentor\'s personal crisis interferes with your training', 'Mentor dying or transforming, must pass on knowledge quickly', 'Mentor asks you to do something that violates your ethics'],
        ['Mentor\'s other students are jealous or competitive', 'Mentor being blackmailed, asks for your help', 'Mentor\'s teaching contradicts what another mentor taught you', 'Mentor becomes dependent on you in unhealthy ways', 'Mentor hiding something about your magical nature or heritage', 'Mentor\'s methods attract dangerous attention to both of you'],
        ['Mentor expected you to learn faster—disappointed and showing it', 'Mentor\'s personal demons literally manifesting', 'Mentor asking you to choose them over found family', 'Mentor revealed to have trained your nemesis', 'Mentor\'s teaching style incompatible with how you learn', 'Mentor becoming too controlling of your life outside magic'],
        ['Mentor challenged by rival—you must represent them', 'Mentor\'s dark secret threatens to destroy their reputation', 'Mentor asking you to keep secrets from people you care about', 'Mentor tests you by staging fake crisis', 'Mentor\'s final lesson requires a sacrifice you\'re not ready to make', 'Mentor was using you all along for a purpose just revealed'],
      ]
    },
    learning_complications: {
      id: 'learning_complications',
      name: 'Learning Complications',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Spell goes wrong in spectacularly embarrassing public way', 'Accidentally reveal your power to mundane friend or family', 'Magic addiction temptation becoming harder to resist', 'Rival student sabotages your practice or study materials', 'Grimoire contains dangerous knowledge you can\'t un-know', 'Your magical signature attracts unwanted supernatural attention'],
        ['Spell backfires and hits wrong target', 'Learning this magic is changing your personality', 'The technique requires more sacrifice than you realized', 'Your natural talent makes others jealous or resentful', 'Forbidden knowledge you sought comes with curse or condition', 'Practice session damages property—need to cover it up'],
        ['Your mundane education suffers as magic consumes your focus', 'Self-taught technique works but is wildly dangerous', 'You\'re learning faster than your emotional maturity can handle', 'The magic conflicts with another power you possess', 'Study materials stolen by someone who\'ll misuse them', 'Your questions about magic attract wrong kind of teacher'],
        ['Magical practice site discovered by mundane authorities', 'Your experiments accidentally create something alive', 'The power you\'re learning has darker origin than you knew', 'Success at magic makes mundane life feel meaningless', 'Your learning style differs from traditional teaching—causes friction', 'Price of learning this magic: cannot unlearn it, ever'],
        ['Study group dissolves due to drama or danger', 'You\'ve been practicing wrong—must unlearn bad habits', 'Your magical research leads to discovery others want suppressed', 'The spell works too well—can\'t control the results', 'Learning materials written in code or language you must decipher', 'Your progress plateaus frustratingly—need new approach'],
        ['Fellow student asks to copy from you—compromises both', 'The magic requires component that\'s illegal or immoral to obtain', 'Your practice wakes something that was better left sleeping', 'Burnout from pushing yourself too hard to learn', 'The knowledge comes with prophetic visions you don\'t want', 'Mastering this magic means losing part of who you were'],
      ]
    },
    relationship_drama: {
      id: 'relationship_drama',
      name: 'Relationship Drama',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Found family member in immediate danger', 'Romantic partner discovers your magical nature—reacts badly', 'Bond threatened by magical consequence of your actions', 'Jealousy within teaching circle threatens group cohesion', 'Mentor/student boundaries crossed—relationship gets complicated', 'Two people you care about hate each other'],
        ['Someone you love asks you to give up magic', 'Your secret identity discovered by wrong person', 'Romantic triangle with another practitioner', 'Found family divided over important decision', 'Someone you trusted betrays you to enemies', 'Your supernatural nature endangers someone you love'],
        ['Former friend becomes enemy due to magical transformation', 'Romantic partner also being courted by powerful supernatural being', 'Your loyalty tested between two groups you belong to', 'Family member trying to "save" you from magic', 'Someone confesses feelings at worst possible moment', 'Your past comes back—old relationship complications resurface'],
        ['Found family member makes deal with entity you oppose', 'Romantic relationship threatened by prophetic vision of bad future', 'Someone you care about being manipulated against you', 'Your transformation scares people who once accepted you', 'Two bonds conflict—helping one means betraying other', 'Ex-partner returns with unfinished business'],
        ['Found family questioning whether you\'ve changed too much', 'Someone\'s love for you becomes obsessive or possessive', 'Your nemesis has Bond with someone you care about', 'Magical oath forces you to act against friend\'s interests', 'Someone dies before you could reconcile with them', 'Your mentor and romantic partner dislike each other intensely'],
        ['Found family member revealed to be spy or traitor', 'Romantic partner wants commitment you can\'t give', 'Your closest ally makes unforgivable choice', 'Someone you care about being consumed by magic addiction', 'Blood family and found family at war with each other', 'Everyone you love in danger because of your choices'],
      ]
    },
    haven_events: {
      id: 'haven_events',
      name: 'Haven Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Haven under threat from external supernatural force', 'Regular needs your help with deeply personal problem', 'New arrival seeking refuge from dangerous pursuer', 'Haven keeper asks difficult favor that tests your ethics', 'Argument threatens to shatter haven\'s peaceful atmosphere', 'Someone violated haven rules—community must respond'],
        ['Haven\'s wards weakening—need to restore them quickly', 'Mundane authorities investigating the location', 'Secret meeting happening—you accidentally overhear', 'Haven regular revealed to be in hiding from their past', 'Romantic connection sparked between two regulars (complications ensue)', 'Teaching session open to anyone—various skill levels clash'],
        ['Haven temporarily closes—forcing community to scatter', 'Celebration or ritual brings everyone together', 'Newcomer doesn\'t understand haven etiquette—causes problems', 'Haven\'s neutrality tested by conflict between regulars', 'Magical object left behind—nobody claims it, what to do?', 'Haven keeper needs temporary replacement—volunteers needed'],
        ['Community grieving—regular died or disappeared', 'Haven regular turns out to be someone\'s enemy', 'Resource shortage—haven running low on magical supplies', 'Mentor teaching controversial technique—divides community opinion', 'Haven becoming too popular—losing intimate atmosphere', 'Someone abusing haven hospitality—taking advantage'],
        ['Haven hosting mediation between conflicting parties', 'Unexpected visitor from distant magical community', 'Haven\'s location compromised—must relocate or defend', 'Community fundraiser or work party to maintain space', 'Newly awakened person stumbles in—needs guidance immediately', 'Haven regular has magical accident—community responds'],
        ['Haven keeper retiring—who will take over?', 'Conflict about haven\'s future direction or purpose', 'Haven becomes temporary sanctuary for group on the run', 'Annual haven tradition or celebration approaching', 'Haven regular revealed as spy or infiltrator', 'Haven itself is awakening supernatural consciousness'],
      ]
    },
    identity_struggles: {
      id: 'identity_struggles',
      name: 'Identity Struggles',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Mundane job/school interfering with magical responsibilities', 'Family discovers the truth—must decide what to tell them', 'Can\'t maintain both identities—one is slipping', 'Magical nature changing your personality in disturbing ways', 'Torn between magical and mundane romantic interests', 'Your supernatural heritage revealed—changes everything'],
        ['Losing touch with mundane friends as magic consumes your life', 'Magical transformation making it hard to pass as human', 'Caught using magic by someone you can\'t explain it to', 'Your mundane identity being investigated', 'Supernatural community expecting you to choose a side', 'Neither world fully accepts who you are'],
        ['Your mortal loved ones aging while you\'re changing', 'Prophecy about your destiny contradicts who you want to be', 'Your magical name/identity conflicts with mundane self', 'Transformation into something other than human progressing', 'You don\'t recognize yourself in the mirror anymore', 'Mundane life feels like exhausting pretense now'],
        ['Your supernatural nature puts mundane loved ones in danger', 'Expected to follow family magical tradition you reject', 'Your two lives colliding in explosive way', 'Losing memories of your pre-awakening self', 'Questioned by authorities about your whereabouts/activities', 'Your magical self and mundane self want different things'],
        ['Someone from your past recognizes you\'ve changed drastically', 'Your supernatural heritage comes with obligations you didn\'t choose', 'Struggling to reconcile who you were with who you\'re becoming', 'Your cover identity conflicting with your real values', 'Magical community pressuring you to abandon mundane life', 'Your true nature revealed in moment of crisis'],
        ['Both identities demanding your presence at the same time', 'Your transformation is permanent—can\'t go back to who you were', 'Forced to choose: magic or mundane life, can\'t have both', 'Your mundane achievements seem meaningless next to magic', 'Everyone knows you by different name in each world', 'You\'ve forgotten which identity is the "real" you'],
      ]
    },
    magical_phenomena: {
      id: 'magical_phenomena',
      name: 'Magical Phenomena',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Spontaneous glamour affecting entire block', 'Time loop trapping area in repeated moment', 'Gravity inversion in specific location', 'Emotions becoming visible auras', 'Shadow gaining independent will', 'Mirror showing alternate timeline'],
        ['Dreams manifesting in physical world', 'Dead temporarily returning to life', 'All electronics becoming possessed', 'Weather responding to emotional states', 'Plant life growing impossibly fast', 'Reality fracturing into parallel versions'],
        ['Truth compulsion affecting everyone nearby', 'Memories becoming tangible objects', 'Darkness developing sentience', 'Music causing physical transformations', 'Boundaries between realms thinning', 'Fate temporarily visible as threads'],
        ['Pain transferring between people', 'Lies becoming visible manifestations', 'Age fluctuating randomly', 'Prayers being literally answered', 'Curses spreading like contagion', 'Names gaining power over bearers'],
        ['Blood calling to blood across distances', 'Promises becoming binding contracts', 'Fear materializing as creatures', 'Hope generating light that pushes back darkness', 'Love creating protective barriers', 'Hatred manifesting as corrupting force'],
        ['Identity becoming fluid and changeable', 'Past echoing into present', 'Future bleeding backward through time', 'Souls becoming visible to naked eye', 'Barriers between life and death weakening', 'Multiple realities overlapping simultaneously'],
      ]
    },
    awakening_moments: {
      id: 'awakening_moments',
      name: 'Awakening Moments',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Near-death experience opened your Veil Sight permanently', 'Inherited object activated when you touched it', 'Witnessed impossible event nobody else remembers', 'Prophetic dream that came true in disturbing detail', 'Accidental spell cast during emotional crisis', 'Supernatural being revealed itself to you specifically'],
        ['Family secret discovered in hidden documents or spaces', 'Attacked by magical creature—fought back instinctively', 'Stumbled through portal and returned changed', 'Dying relative confessed truth with final breath', 'Mysterious stranger appeared to warn or teach you', 'Childhood "imaginary friend" revealed to be real and magical'],
        ['Scientific experiment went wrong in supernatural way', 'Eclipse, blood moon, or celestial event triggered transformation', 'Someone you loved died and you brought them back briefly', 'Drug experience showed you truth that didn\'t fade', 'Ancient place responded to your presence', 'Ritual you thought was pretend actually worked'],
        ['Saved someone\'s life and they revealed the magical world', 'Your reflection moved independently—gateway opened', 'Bloodline magic activated on specific birthday', 'Place you\'d been before suddenly showed its true nature', 'Someone tried to erase your memory—it didn\'t work', 'Your art/music/writing manifested something real'],
        ['Haunted by ghost who taught you to see through Veil', 'Medical procedure or accident changed your perception', 'Answered question nobody else could hear being asked', 'Found grimoire that spoke directly to you', 'Bargain made in desperation—then honored by something real', 'Your shadow started acting independently'],
        ['Recognized another practitioner instinctively', 'Place of worship revealed its true supernatural nature', 'Your name spoken by stranger carried magical weight', 'Inherited condition or "illness" revealed as magical nature', 'Parallel timeline bled through—you remember both versions', 'You\'ve always known—only now admitting it to yourself'],
      ]
    },
    mundane_complications: {
      id: 'mundane_complications',
      name: 'Mundane Complications',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Boss demanding explanation for mysterious absences', 'Rent due and magical work doesn\'t pay mundane bills', 'Family planning intervention for your "strange behavior"', 'Friend or partner feeling neglected—relationship strained', 'Grades or work performance declining noticeably', 'Mundane authorities investigating your activities'],
        ['Can\'t explain injuries or exhaustion to concerned loved ones', 'Technology you depend on malfunctioning from magical exposure', 'Missing important mundane event due to magical emergency', 'Someone close getting suspicious of your secrets', 'Financial crisis—need money for both mundane and magical needs', 'Health issues from magical exertion affecting daily life'],
        ['Legal problems from unexplained situation', 'Housing instability—need new place that accommodates magic', 'Mundane job conflicts with magical ethics or schedule', 'Family pressuring you about life choices you can\'t explain', 'Insurance or medical questions you can\'t answer honestly', 'Mundane relationship suffering from magical preoccupation'],
        ['Transportation issues—car broken, can\'t explain why', 'Sleep deprivation affecting everything in mundane life', 'Professional reputation damaged by mysterious circumstances', 'Friend wanting to help but you can\'t let them', 'Mundane emergency interrupting magical crisis', 'Identity documents or records being questioned'],
        ['Apartment or house showing signs of magical activity', 'Neighbors complaining about strange occurrences', 'Need mundane cover story for magical situation—quickly', 'Doctor wants tests for symptoms that are magical in origin', 'Can\'t be in two places at once but both need you', 'Mundane friend in crisis—can\'t use magic to help'],
        ['Lease or employment contract you can\'t fulfill normally', 'Background check revealing gaps you can\'t explain', 'Mundane obligation clashing with magical training', 'Someone photographed or recorded something compromising', 'Therapist or counselor asking uncomfortable questions', 'Everyday life feels like elaborate lie—taking psychological toll'],
      ]
    },
    magical_jobs_and_gigs: {
      id: 'magical_jobs_and_gigs',
      name: 'Magical Jobs and Gigs',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Warding homes and businesses against supernatural threats', 'Finding lost objects or people through divination', 'Brewing potions or crafting charms for other practitioners', 'Supernatural pest control—dealing with minor entities', 'Teaching magic to newly awakened for fee', 'Consulting for mundanes who suspect supernatural activity'],
        ['Translating or researching obscure magical texts', 'Mediumship—connecting living with dead', 'Enchanting objects for practical or aesthetic purposes', 'Bodyguard work for vulnerable practitioners', 'Collecting rare ingredients from dangerous locations', 'Curse removal or hex breaking services'],
        ['Supernatural investigation—finding truth through magic', 'Portal guide—safely navigating between realms', 'Memory alteration or restoration for those who need it', 'Magical therapy or counseling for practitioners', 'Artifact appraisal and authentication', 'Creating false identities with magical backing'],
        ['Healing that modern medicine can\'t provide', 'Dreamwalking for information gathering or therapy', 'Binding or summoning entities for clients', 'Supernatural matchmaking or relationship counseling', 'Ley line maintenance and energy work', 'Magical security system installation'],
        ['Ghostwriting grimoires or magical instruction manuals', 'Prophecy interpretation and future consultation', 'Ritual performance for life events or transitions', 'Magical item repair or restoration', 'Underground magical marketplace dealing', 'Spirit negotiation and conflict resolution'],
        ['Magical courier—delivering things mundanes can\'t touch', 'Supernatural event planning', 'Teaching mundane skills to long-lived beings', 'Haven maintenance and ward renewal', 'Serving as witness or oath-holder for magical contracts', 'Whatever needs doing that day—magical odd jobs'],
      ]
    },
    community_tensions: {
      id: 'community_tensions',
      name: 'Community Tensions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Old practitioners vs newly awakened over changing traditions', 'Disagreement over helping mundanes vs maintaining separation', 'Different philosophies about ethical magic use clashing', 'Resource scarcity creating competition between practitioners', 'Generational conflict—young rejecting old ways', 'Species/type prejudice still affecting community dynamics'],
        ['Debate over using modern technology with traditional magic', 'Power imbalance—some have more access to knowledge than others', 'Territorial disputes over locations or ley lines', 'Different groups\' rules and taboos conflicting', 'Self-taught practitioners vs tradition-trained', 'Disagreement about responding to Veil breaches'],
        ['Cultural appropriation concerns within magical practices', 'Wealth disparity—rich practitioners vs struggling ones', 'Romantic drama creating factional divisions', 'Mentor\'s students competing for attention and advancement', 'Political views carrying over into magical community', 'Someone\'s past actions causing ongoing resentment'],
        ['New haven threatening established one\'s community', 'Disagreement over accepting dangerous or dark practitioners', 'Teaching methods debate—safety vs effectiveness', 'Some wanting leadership structure, others preferring autonomy', 'Conflict over sharing knowledge vs keeping secrets', 'Mixed feelings about working with specific entity types'],
        ['Debt or obligation creating complicated dynamics', 'Someone\'s Nemesis being another person\'s ally', 'Disagreement about intervening in mundane world events', 'Different survival strategies during dangerous times', 'Gossip and rumor undermining community trust', 'Competition for limited spots in teaching programs'],
        ['Philosophical split about magic\'s purpose and use', 'Power struggle over haven direction or resources', 'Integration question—how much mundane life to maintain', 'Justice question—how to handle community member\'s wrongdoing', 'Disagreement about children learning magic young vs protecting them', 'External threat creating internal blame and suspicion'],
      ]
    },
    discovery_moments: {
      id: 'discovery_moments',
      name: 'Discovery Moments',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Your "frailty" is actually a magical gift misunderstood', 'The entity you summoned is not what you thought it was', 'Location you frequent sits on major ley line junction', 'Your mentor has been lying about something important', 'Spell you use regularly has dangerous side effect', 'You possess rare magical ability nobody mentioned'],
        ['The Veil is weakening faster than anyone admits', 'Your family magical history is different than you were told', 'Common magical practice actually causes harm', 'Portal you use regularly goes somewhere new', 'Your awakening was triggered deliberately by someone', 'Magical community secret revealed—changes everything'],
        ['Price of your favorite spell is more than you knew', 'Someone you trusted is working against you', 'Your Nemesis has personal reason you just learned', 'Ancient prophecy specifically mentions you or your bloodline', 'The "rules" you learned are not actually universal', 'Your natural talent comes with inherited obligation'],
        ['Multiple types of magic exist beyond what you learned', 'The haven you frequent has deeper purpose', 'Your mundane friend can partially see through Veil', 'Transformation you\'re experiencing is irreversible', 'Entity you dismissed as myth is actually real', 'Your magic works differently than anyone else\'s'],
        ['Past life memories surfacing—you\'ve done this before', 'Your "imaginary" childhood memories were real', 'Someone\'s been watching/protecting you for years', 'The Price you paid is still accumulating', 'You\'re connected to someone powerful you\'ve never met', 'Your true nature is not what you thought'],
        ['Grimoire you use is sentient and has agenda', 'Your power comes from source that troubles you', 'You\'re prophesied to do something terrible or wonderful', 'The reason you awakened is not random', 'You have sibling/relative in magical world you didn\'t know', 'Everything you thought you knew is incomplete or wrong'],
      ]
    },
    power_manifestations: {
      id: 'power_manifestations',
      name: 'Power Manifestations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Temperature drops dramatically when you use power', 'Your eyes change color during spellcasting', 'Electronics fail or glitch in your presence', 'You leave magical signature visible to other practitioners', 'Your shadow moves independently while casting', 'Audible hum or frequency change when power flows'],
        ['You glow faintly in darkness after using magic', 'Your voice takes on harmonic or echoic quality', 'Small objects around you levitate slightly', 'Your breath becomes visible regardless of temperature', 'Mirrors show your true nature while casting', 'You smell like ozone, petrichor, or other distinctive scent'],
        ['Your hands shimmer with visible energy', 'Animals react strongly to your presence', 'You cast no shadow while actively using magic', 'Your reflection lags behind your movements', 'You hear music or tones nobody else perceives', 'Your magical marks or tattoos glow when power flows'],
        ['Time perception shifts—moments feel longer or shorter', 'You see double—magical and mundane worlds overlaid', 'Your hair moves in absent wind while casting', 'You feel significantly lighter or heavier', 'Colors intensify or shift in your vision', 'You taste copper, honey, or ash when using power'],
        ['Your pulse becomes audible to others nearby', 'You briefly see threads connecting all things', 'Your touch leaves temporary luminescent traces', 'You feel others\' emotions as physical sensations', 'Your blood glows if drawn while magic is active', 'You project brief afterimages or doubled outlines'],
        ['Reality seems to pixelate or glitch around you', 'You hear whispers in languages you don\'t know', 'Your heartbeat synchronizes with ley line pulses', 'You see true names written on people temporarily', 'Your body becomes partially translucent', 'Multiple versions of possible futures flash before you'],
      ]
    },
    npc_personalities_and_quirks: {
      id: 'npc_personalities_and_quirks',
      name: 'NPC Personalities & Quirks',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Speaks in careful, measured sentences—chooses every word deliberately', 'Laughs too easily, too loud; you suspect it\'s a shield', 'Never sits with their back to the door', 'Refers to their magic in third person: "the gift doesn\'t like crowds"', 'Collects mundane tchotchkes with sentimental magical significance', 'Tells the truth but never the whole truth'],
        ['Perpetually exhausted, perpetually showing up anyway', 'Asks a question, then answers it themselves before you can', 'Flinches at sudden sounds; has learned to cover it quickly', 'Uses cooking as a coping mechanism—always bringing food to difficult talks', 'Deeply loyal to people, deeply skeptical of institutions', 'Checks their phone obsessively, never explains why'],
        ['Has a tell when they\'re lying—touches the back of their neck', 'Deflects with dark humor when things get emotionally serious', 'Keeps meticulous handwritten notes about everyone they meet', 'Apologizes too much; working on it', 'Deeply superstitious even by magical community standards', 'Has a different name for every community they move through'],
        ['Dresses like nothing matters, thinks about it more than they admit', 'Cannot resist correcting magical misinformation, even at bad moments', 'Has a mentor they quote constantly; the mentor is long dead', 'Physically restless—always touching things, pacing, fidgeting', 'Radiates calm in crisis; falls apart completely in quiet moments', 'Has a practiced "mundane face" that doesn\'t quite fit'],
        ['Gives everyone a nickname they didn\'t ask for', 'Disappears for days then reappears as if nothing happened', 'Has strong opinions about the ethics of magic but rarely acts on them', 'Genuinely kind, which makes them dangerous to underestimate', 'Carries something from everyone they\'ve lost', 'Overshares personal history, guards actual secrets perfectly'],
        ['Makes promises carefully; considers them magically binding', 'Has survived something they don\'t talk about—and it shows', 'Treats magic with near-religious reverence; gets angry when others don\'t', 'Deeply funny, deeply sad; the two are inseparable', 'Keeps their plans to themselves until the last possible moment', 'Has been someone else\'s mentor too many times; still can\'t say no'],
      ]
    },
    magical_artifacts_and_their_histories: {
      id: 'magical_artifacts_and_their_histories',
      name: 'Magical Artifacts & Their Histories',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A wristwatch that runs backward when near the dying—still accurate', 'Lipstick that compels whoever wears it to speak only desires', 'A coffee mug that keeps liquid at the exact temperature of the last person who loved you', 'Polaroid camera—developed photos show what was really in the room', 'A library card that grants access to sections of any library that don\'t exist', 'Fountain pen that writes in the reader\'s blood if the text contains a lie'],
        ['Earbuds that let you hear what\'s being said about you within a mile', 'A houseplant that thrives on emotional pain and predicts conflict', 'Sunglasses that filter out glamours—everything fae appears as bone', 'A vinyl record with no label that plays differently for every listener', 'Brass key that opens any lock—but only once per lock, and never yours', 'A journal that writes the previous owner\'s experiences if left open overnight'],
        ['Lighter that produces flame only when the holder believes the cause is just', 'Deck of cards where the face cards are always watching', 'A snow globe containing a city that exists somewhere—you just don\'t know where', 'Coat that makes the wearer unnoticeable—not invisible, simply overlooked', 'Old phone that receives calls from the dead on anniversaries', 'Compass that points toward what you need most, not what you want'],
        ['A sewing kit whose thread, once used, creates unbreakable bonds', 'Ceramic mug that cracks if the person drinking from it intends harm', 'A mirror shard that shows your reflection as you were before you awakened', 'Coin that always lands heads—except once, at the worst possible moment', 'A city transit card that takes you somewhere you didn\'t intend to go, where you needed to be', 'Notebook where crossed-out words still haunt the margins at night'],
        ['Pocket knife that only draws blood from those who have broken an oath', 'A music box that soothes supernatural creatures into temporary docility', 'Pair of shoes that walk the path you\'d take if you weren\'t afraid', 'An umbrella that protects against misfortune as well as rain', 'Frame without a painting—what you see in it tells you what you\'re afraid of', 'Set of keys to doors that no longer exist'],
        ['A candle that cannot be extinguished and slowly burns away what surrounds it', 'Dice that always roll what the roller secretly hopes for', 'An old photograph that gains new figures as you learn new secrets', 'Gloves that let you feel the history of anything you touch', 'A bookmark that marks the page you most need to read in any book', 'Cracked phone screen that shows texts from a number that doesn\'t exist'],
      ]
    },
    other_realms: {
      id: 'other_realms',
      name: 'Other Realms',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['The Mirror City: identical streets, reversed—your reflection walks here without you', 'A subway system with no terminus, its riders having forgotten they were going somewhere', 'The Borderlands: marshland between realities where time pools unevenly', 'A library containing every book ever burned', 'The Deep Dream: a shared unconscious where dreamers occasionally meet', 'A city of perfect summer evening, endlessly 7pm, where nothing is ever resolved'],
        ['A train station serving routes between moments rather than places', 'The Underneath: the city\'s shadow-self, built from what was demolished or forgotten', 'A forest growing inside a decommissioned airport hangar, impossibly vast', 'The In-Between: a fog where all the world\'s mislaid objects slowly drift', 'A market district with no sky, traders offering things that cannot be bought with money', 'A tower with infinite floors, each floor a version of the same apartment'],
        ['The Quiet: a realm of near-silence where emotions have physical weight', 'The Eldest Roads: ley lines you can walk on, leading to places that predate cities', 'A coastal town where everyone knows you from a life you didn\'t live', 'A ballroom eternally mid-party, the music always just ending', 'The Echo Chamber: a place where past events replay in fragments', 'A river that runs through the walls of every building, visible only to those who have grieved'],
        ['A greenhouse nurturing extinct species from multiple worlds', 'The Fold: a crease in space where two moments overlap—step carefully', 'A city neighbourhood that exists only between 3 and 4am', 'The Place Without Names: entities here cannot be summoned or bound', 'A rooftop garden floating above a city that no longer matches any real skyline', 'The Residue: a realm made entirely of things people have tried to forget'],
        ['An archive staffed by beings who remember everything that was ever promised', 'A familiar street where every door opens onto something different each time', 'A half-built realm—scaffolding everywhere, no workers, something being constructed', 'The Wound: a recent breach that tore a hole between realms, still raw', 'A courtroom where every case tried is a case against yourself', 'A realm where your Nemesis has already won—a warning, a possibility'],
        ['The Long Shore: a beach where the tide brings in what was lost, not what was thrown', 'A version of your own home from before you awakened, perfectly preserved', 'A city where every inhabitant is a version of someone you know', 'The Thread Room: fate is visible here as a dense web, and some strands are cut', 'A hospital treating wounds that have no mundane name', 'The Source: something immense, patient, and aware; it has noticed you first'],
      ]
    },
    urban_legends_and_rumors: {
      id: 'urban_legends_and_rumors',
      name: 'Urban Legends & Rumors',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A portal opened inside a hospital last week—three staff saw what came through', 'Someone\'s been harvesting ley line energy under the new development project', 'There\'s a practitioner who can erase magical memories; someone\'s hiring them', 'The haven two districts over went dark overnight—nobody knows why', 'A Fae bargain from 1923 is coming due and the city is collateral', 'Someone found a grimoire written in a language nobody recognizes—even the old ones'],
        ['The city\'s oldest vampire has gone into hiding; that\'s never a good sign', 'A new awakening wave is building—too many new practitioners, too fast', 'Someone is stealing true names and selling them to the highest bidder', 'There\'s a faction nobody\'s heard of operating in the transit system', 'A ghost army is assembling beneath the old cemetery; they\'re waiting for orders', 'The Veil is measurably thinner this season; instruments confirm it'],
        ['A practitioner died of impossible old age in their thirties—magic drained completely', 'Someone is binding minor spirits into mundane electronics and selling them online', 'A mundane journalist has a file that\'s uncomfortably accurate', 'The crossroads on Fifth and Hollow has been changing the terms of deals made there', 'Three separate practitioners dreamed the same dream last Tuesday', 'A child born without magic in a fully magical bloodline; the family is panicking'],
        ['The underground market has a new vendor nobody can get information on', 'A werewolf pack dissolved overnight—every member claiming they felt the bond snap', 'Something old woke up under the river when they built the new bridge', 'A local politician is making decisions that track perfectly with old Fae law', 'Someone figured out how to bind a ghost to a social media account', 'A haven keeper turned someone away last month; now they won\'t say who'],
        ['The price of magical components has tripled—supply is disappearing', 'A mentor in the eastern district took five students; none of them are reachable', 'There\'s a place in the subway where time runs sideways—has been there for months', 'Someone is awakening sleepers deliberately; there\'s a method and a motive', 'The old accords between the packs and the Courts have technically expired', 'A death two months ago that everyone accepted is being quietly re-examined'],
        ['A familiar has gone rogue and taken its master\'s entire grimoire', 'The teaching circle on Marsh Street is producing practitioners faster than possible', 'There\'s a mundane who can\'t be made to forget—every erasure slides off them', 'Someone is collecting promises—not bargains, just promises—and hoarding them', 'An ancient one has started attending mundane city council meetings', 'The prophecy everyone dismissed as metaphor is turning out to be literal'],
      ]
    },
    antagonist_motivations: {
      id: 'antagonist_motivations',
      name: 'Antagonist Motivations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['They were abandoned by the same community that now protects you', 'They are trying to save someone; everything else is acceptable cost', 'They believe the Veil is a cage and they\'re opening the door', 'Power is the only safety they\'ve ever known—they\'re terrified without it', 'They were you, once; they made a different choice at the same crossroads', 'Grief has curdled into something they no longer recognize as grief'],
        ['They represent a faction\'s interests and have no personal grievance—yet', 'They are fulfilling an oath they cannot break and do not want to keep', 'They genuinely believe they\'re the hero of this story', 'They\'re trying to prevent a catastrophe nobody believes is coming', 'Someone they love is being used as leverage against them', 'They want to be caught—but only after they\'ve finished'],
        ['They were promised something that was never delivered; now they\'re collecting', 'They\'re running out of time and desperation is making them dangerous', 'Old ideology they\'ve never examined, inherited from a mentor long dead', 'They want what you have—your connections, your potential, your Bonds', 'They\'re not wrong about the problem; they\'re catastrophically wrong about the solution', 'Shame at what they\'ve already done drives them to go further'],
        ['They are protecting the community by targeting you—in their view', 'They\'re addicted to a power source that requires this of them', 'Someone manipulated them into this position years ago; they don\'t know', 'They want recognition and have given up on earning it', 'They\'re following instructions from something you haven\'t identified yet', 'They\'re cleaning up a mess they didn\'t make but feel responsible for'],
        ['They loved someone who is now your ally—that\'s the whole of it', 'They want the Veil gone because it\'s been used to hide crimes', 'They are testing you; the test has gone further than they intended', 'They don\'t want to win—they want you to understand why they had to try', 'They\'re afraid of what you\'ll become if they don\'t stop you now', 'Old debt to something ancient, patient, and indifferent to human costs'],
        ['They are simply someone with too much power and too little reason to stop', 'They want to burn down the magical community\'s hierarchies—you\'re in the way', 'They are trying to undo something you did, or something done to them', 'They\'ve seen a future where you\'re the catastrophe', 'They\'ve lost their Bonds one by one; now they have nothing to lose', 'They were once trying to protect you—and something went terribly wrong'],
      ]
    },
    scene_atmosphere: {
      id: 'scene_atmosphere',
      name: 'Scene Atmosphere',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['3am silence broken only by a single distant siren', 'Fluorescent lights humming just slightly too loud', 'Rain on a window that shouldn\'t face outside', 'The particular smell of old books and candle wax underneath fresh coffee', 'A space that is clearly lived-in but contains no personal photographs', 'Warm light that makes everyone\'s face look kinder than they might be'],
        ['The sound of a party one floor up, muffled and unknowable', 'A city street at dusk, half mundane half something else entirely', 'The cold that comes with presence, not temperature', 'Smoke without fire—something was just ended here', 'A garden gone wild inside a warded building, thriving against all reason', 'Chalk marks on concrete so old they might be original to the structure'],
        ['The particular exhaustion of a haven after an emergency', 'Dead electronics—every screen dark, every clock stopped at the same time', 'Two conversations happening in the same room that nobody intends to mix', 'Everything too clean; someone prepared this space very recently', 'Subway ambient noise seeping up through the floor even three stories up', 'The quality of light that happens when a storm breaks—wrong color, electric'],
        ['A kitchen being used as a sanctuary: food, warmth, people not talking', 'The sound of a city going about its day, indifferent to what\'s happening here', 'An object on the floor that nobody is acknowledging', 'Moonlight behaving differently than it should in this space', 'The moment between argument and silence, stretched out too long', 'Candles at the end of their burn, wax cooling, light going amber'],
        ['A door slightly open that everyone is treating as closed', 'Warmth from a fireplace in a building that shouldn\'t have one', 'The smell of petrichor inside, though it hasn\'t rained in days', 'Graffiti that is just slightly different each time you look at it', 'The restless quiet of a haven emptied by fear', 'A window showing a neighborhood that doesn\'t correspond to where you are'],
        ['Music from no source, low enough to almost be imagined', 'The texture of a place that has hosted too much grief', 'Everything is the same as before—that\'s what\'s wrong', 'A basement or rooftop: the city inverted, seen from the wrong end', 'Two people leaving space between them that they haven\'t explained', 'The precise moment when you realize the place is watching you back'],
      ]
    },
    dream_and_vision_content: {
      id: 'dream_and_vision_content',
      name: 'Dream & Vision Content',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['A door in a wall you know well that has never been there', 'Someone\'s face you don\'t recognize—but they know yours', 'Your hands doing something you don\'t remember choosing', 'A location you\'ve never visited, shown in enough detail to find', 'A conversation you already had, replayed with different words', 'Something broken that used to be whole; you don\'t know what it was'],
        ['A figure standing at a crossroads, facing away from you, waiting', 'Text you can almost read; you wake up with a single word', 'The moment before something important that you keep waking before it', 'A mirror showing two reflections where there should be one', 'Something vast and patient, looking at something smaller than you', 'A map of somewhere real, one detail wrong in a way that matters'],
        ['A person you love in a situation they have not told you about', 'Your own voice telling you something you don\'t believe', 'A color that doesn\'t exist in the waking world, and what it means', 'A ritual, completed or in progress—you can see the shape but not the purpose', 'A crowd that parts for something you cannot see coming', 'A door closing—you don\'t know if you\'re inside or outside'],
        ['Thread—the kind that connects people—tangled badly around one specific person', 'A clock at a time that means something; you haven\'t figured out what yet', 'Something that shouldn\'t be where it is, and the wrongness is the message', 'A scene playing twice—the second time, one thing has changed', 'Your Nemesis doing something that looks like grief', 'A key and a locked thing—neither is what it appears to be'],
        ['An ending shown without a beginning—you don\'t know how you got there', 'A child that may be you, before everything changed', 'A place you visit regularly, empty of everyone who should be there', 'Yourself, making a choice—you can\'t tell if it\'s warning or instruction', 'Something growing from ground that should not support it, slowly', 'The moment the Veil tears, and what\'s on the other side seeing through'],
        ['A name written in light; you remember it for exactly three seconds', 'Every path forward, briefly visible—all of them cost something', 'A reunion you want but haven\'t admitted you want', 'Someone\'s last moment—you don\'t know whose, or when', 'The center of something; you\'ve been circling it without knowing', 'Nothing—but the absence has a shape, and the shape is familiar'],
      ]
    },
    supernatural_creature_features: {
      id: 'supernatural_creature_features',
      name: 'Supernatural Creature Features',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Eyes that reflect light wrong—not like animals, like old screens', 'It speaks in your voice when it thinks you\'re not listening', 'Leaves no footprints but moves through mud', 'Its shadow doesn\'t match its shape or position', 'Appears in your peripheral vision; looks directly at you head-on', 'Smells like rain, ozone, or something you loved as a child'],
        ['Makes no sound while moving but can\'t stop making sound while still', 'Its features shift when you try to describe them to someone else', 'Animals won\'t acknowledge its presence—not fear, simply non-recognition', 'It knows your name; it will not tell you how', 'Every mundane camera produces static in its vicinity', 'Its voice has a harmonic underneath that your body hears before your ears do'],
        ['It ages in reverse over the course of an encounter', 'The temperature around it is always exactly wrong for the season', 'It finishes your sentences—always correctly', 'Plants lean away from it; it hasn\'t noticed', 'Its wounds close, but slowly, and it watches you notice', 'It mirrors your posture with a half-second delay'],
        ['Its reflection in water shows something that happened here long ago', 'It is entirely plausible until one detail, which is wrong in a way hard to name', 'Children stare at it; adults look away; it prefers the children', 'It blinks infrequently, but exactly when you do', 'Its mouth moves slightly before sound comes out—slightly too much', 'It expresses emotions that don\'t match the face it\'s using to express them'],
        ['It knows what you most recently lost and mentions it conversationally', 'Its outline blurs when it moves quickly, as if the world hasn\'t caught up', 'Insects near it behave strangely—not fleeing, attending', 'It casts two shadows in single-source light', 'It ages everyone\'s food and drink nearby by exactly three days', 'It smiles at the wrong moments with complete sincerity'],
        ['It can only be seen clearly when you\'re not trying to look at it', 'It makes you feel you\'ve met before; you haven\'t, but something has', 'Mundanes nearby begin to agree with whatever it most recently said', 'Its voice doesn\'t echo in spaces where everything else does', 'It knows which of your Bonds are weakest; it has not said so yet', 'Being near it too long makes you feel you are also not quite real'],
      ]
    },
    complications_during_magical_travel: {
      id: 'complications_during_magical_travel',
      name: 'Complications During Magical Travel',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['You arrive at the right place, wrong moment—hours earlier or later than intended', 'The portal closes before everyone is through', 'You exit somewhere adjacent to your destination—close but wrong', 'Something follows you through and you don\'t notice immediately', 'The ley line pulses wrong—you feel it in your teeth, your magic stutters', 'You arrive with someone else\'s memory layered briefly over your own'],
        ['A passenger—something small, quiet, and uninvited is now with you', 'The portal requires something you didn\'t know you\'d need to give', 'In-transit, you see something about the route you weren\'t meant to see', 'The destination has changed since the last time this route was used', 'Arrival is correct—but you\'re physically wrong in a small, specific way', 'The return route is no longer where you left it'],
        ['Time passed differently; what felt like minutes was hours in both worlds', 'The crossing stripped something minor—a memory, a small ability, a name', 'You arrive with the emotional residue of everyone who used this route before', 'The portal has a guardian this time; last time there wasn\'t one', 'Something from the other realm has taken an interest in where you\'ve been', 'The ley line deposits you at a node you didn\'t choose—and you can feel why'],
        ['You become briefly visible on both sides simultaneously', 'Your magical signature is louder than usual on the other side', 'Something in transit tried to communicate—you\'re not sure it succeeded', 'The crossing leaves a trace others can follow if they\'re looking', 'You exit in the right place, but from the wrong direction—you came from somewhere first', 'The portal will work once more, then seal—permanently'],
        ['Another traveler is using the same route right now; you overlap briefly', 'You arrive with something that wasn\'t yours when you left', 'The route passes through somewhere it shouldn\'t—briefly, terribly', 'Arrival is physically disorienting; magic feels sideways for the next scene', 'The destination has wards that weren\'t there before; someone is expecting visitors', 'Something on the other side touched the portal from their side while you were in it'],
        ['You arrive—but part of your intent didn\'t, and the magic reflects that', 'The crossing cost Luck with no roll—the route is becoming dangerous', 'A second portal opened at the same moment nearby; you don\'t know where it goes', 'You emerged on the wrong side of the Veil—mundanes could have seen you', 'The ley line shows you a memory from when it was first laid, centuries ago', 'You arrive at the right place, right time—but so does your Nemesis'],
      ]
    }
  }
};
