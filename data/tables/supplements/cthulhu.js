/**
 * Cthulhu Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'cthulhu-adventure',
    name: 'Cthulhu Adventure Tables',
    version: '1.0',
    enabled: true
  },

  tables: {
    investigation_hooks: {
      id: 'investigation_hooks',
      name: 'Investigation Hooks',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Series of suicides follows astronomical pattern matching ancient star charts', 'Antique dealer receives shipment of artifacts from non-existent estate sale', 'University students experiencing shared nightmares featuring identical locations', 'Wealthy collector\'s recently catalogued library contains books that predate printing', 'Construction dig uncovers stone foundations using unknown architectural principles', 'Asylum patients independently draw same complex geometric symbols'],
        ['Shipping manifests list cargo destinations as coordinates in empty ocean', 'Estate inheritance includes documents written in undeciphered language', 'Observatory receives radio signals from stellar coordinates that don\'t exist', 'Missing persons all researched same obscure historical topic before disappearing', 'Church archives reference saints with no official recognition or documentation', 'Museum security reports artifacts rearranging themselves overnight'],
        ['Genealogy research reveals ancestor participated in 17th century witch trials', 'Subway construction workers discover chambers predating city foundation', 'Photography studio develops images showing figures not present during shooting', 'Medical files document impossible physiological changes in healthy patients', 'Weather service maps show storm patterns forming perfect geometric shapes', 'Radio broadcasts interrupted by voices speaking dead languages'],
        ['Academic conference paper describes historical events with no supporting evidence', 'Gallery visitors report paintings changing when not directly observed', 'Geological survey discovers mineral compositions that violate known physics', 'Library circulation records show books checked out by deceased patrons', 'Phone company investigates calls from disconnected numbers assigned to dead subscribers', 'Census enumerator finds residents living in demolished buildings'],
        ['Maritime charts show islands that appear and disappear between editions', 'Carbon dating laboratory produces impossible age readings on recent samples', 'Music conservatory student discovers sheet music that causes listener psychosis', 'Unpublished manuscript accurately predicts recent unexplained phenomena', 'Mathematics department proves theorems that contradict fundamental laws', 'Darkroom technician develops photographs never taken by any known camera'],
        ['Clockmaker finds all timepieces stopping at identical impossible time', 'Cartographer\'s maps show cities existing only in fever dreams', 'Linguist translates ancient tablet describing modern technological devices', 'Biology professor discovers species with no evolutionary precedent', 'Physics laboratory experiments yield results that defy natural laws', 'Historian uncovers records documenting events that haven\'t occurred yet'],
      ]
    },
    academic_leads: {
      id: 'academic_leads',
      name: 'Academic Leads',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Professor\'s research grant funded by organization with no public records', 'Thesis advisor mysteriously withdrawn from all academic correspondence', 'Visiting scholar\'s credentials from university that closed decades ago', 'Faculty lounge discussions halt whenever specific topics arise', 'University archive contains unmarked boxes delivered anonymously', 'Department secretary maintains private filing system for certain requests'],
        ['Research expedition reports discovery then immediately ceases communication', 'Conference presentation slides contain hidden messages in margin notes', 'Academic journal publishes articles under obvious pseudonyms', 'Library special collections require permissions from unnamed authorities', 'Graduate student stipends funded through untraceable financial instruments', 'Faculty dining room serves meals following ancient calendar system'],
        ['Research proposal requires approval from ethics board that doesn\'t officially exist', 'University maintenance reports unauthorized construction in sub-basements', 'Academic exchange program sends students to institutions not found in directories', 'Laboratory equipment delivered without purchase orders or invoices', 'Department budget includes expenses for "specialized consultation services"', 'Faculty parking permits include spaces for vehicles never seen on campus'],
        ['Course catalog lists classes that meet in non-existent rooms', 'Alumni directory includes graduates from years university was supposedly closed', 'Research collaboration agreement written in multiple ancient languages', 'Department head maintains office hours that conflict with teaching schedule', 'University press publishes books with copyright dates in the future', 'Academic committee membership includes names not found in faculty directory'],
        ['Research funding comes from endowment established before university founding', 'Faculty recruitment targeting scholars with specific family surnames', 'Department library contains books bound in materials requiring specialized handling', 'Research assistant positions advertised only in obscure scholarly publications', 'University seal incorporates symbols not present in official documentation', 'Academic calendar includes observances not recognized by any known tradition'],
        ['Faculty senate minutes reference decisions never brought to vote', 'Department storage contains artifacts requiring climate-controlled preservation', 'Research sabbaticals consistently granted for travel to same remote locations', 'University charter includes provisions written in extinct languages', 'Academic department exists only on internal maps not public directories', 'Faculty emeritus status granted posthumously with continuing research assignments'],
      ]
    },
    occult_artifacts: {
      id: 'occult_artifacts',
      name: 'Occult Artifacts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Stone tablet covered in hieroglyphs that rearrange when unobserved', 'Antique mirror reflecting rooms that don\'t exist in current location', 'Ceremonial dagger that remains warm despite ambient temperature', 'Leather-bound journal writing itself with invisible ink', 'Crystal sphere containing swirling patterns that induce vertigo', 'Ancient coin that lands on same side regardless of flip'],
        ['Wooden mask with expression that changes based on observer\'s mood', 'Metal amulet causing compasses to point in impossible directions', 'Ritual candle that burns without diminishing and produces no heat', 'Carved bone whistle that produces sounds beyond human hearing range', 'Ceremonial chalice that fills with unknown liquid during full moon', 'Ancient scroll that displays different text to each reader'],
        ['Obsidian blade that cuts through any material without resistance', 'Jeweled brooch that changes color based on wearer\'s emotional state', 'Wooden idol that grows heavier when handled by certain individuals', 'Silver bell that rings without being struck during specific hours', 'Stone fragment that exhibits magnetic properties toward human blood', 'Ancient key that opens locks it was never designed to fit'],
        ['Ritual bowl that amplifies whispered words spoken over it', 'Carved staff that points toward hidden water sources underground', 'Ceremonial robe that provides protection from extreme temperatures', 'Ancient lamp that burns with flame of impossible colors', 'Stone seal that leaves impressions in materials it never touches', 'Ritual drum that produces rhythm matching listener\'s heartbeat'],
        ['Crystal pendant that reveals hidden text on blank pages', 'Ancient compass needle pointing toward sources of supernatural activity', 'Ceremonial crown that grants understanding of ancient languages temporarily', 'Ritual incense that produces visions of distant locations', 'Stone prayer wheel that rotates without external force', 'Ancient hourglass that measures time intervals impossible to calculate'],
        ['Ceremonial sword that glows in presence of supernatural entities', 'Ritual cauldron that produces steam without heat source', 'Ancient ring that becomes invisible when worn by worthy individuals', 'Stone altar that absorbs blood without staining', 'Ceremonial mask that allows wearer to see through illusions', 'Ancient codex that translates itself into reader\'s native language'],
      ]
    },
    cult_activities: {
      id: 'cult_activities',
      name: 'Cult Activities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Purchasing property along specific geometric patterns within city limits', 'Establishing charitable foundations funding archaeological expeditions', 'Operating legitimate businesses as recruitment centers for intellectuals', 'Infiltrating government agencies through strategic job placement', 'Collecting artifacts from estate sales and private auctions', 'Building hidden temple complex beneath abandoned subway tunnels'],
        ['Conducting medical experiments under guise of cutting-edge research', 'Distributing contaminated books through university library systems', 'Maintaining safe houses disguised as boarding houses for travelers', 'Training operatives in assassination techniques using traditional methods', 'Funding expeditions to recover ancient relics from remote locations', 'Operating underground printing press producing forbidden manuscripts'],
        ['Maintaining private library containing world\'s most dangerous texts', 'Establishing medical clinic offering experimental treatments', 'Creating dimensional gateway using precisely calculated architectural design', 'Operating communication network through coded newspaper advertisements', 'Manufacturing pharmaceutical compounds that enhance psychic sensitivity', 'Monitoring local media outlets to suppress supernatural reporting'],
        ['Establishing private school indoctrinating children in ancient knowledge', 'Operating hospital conducting unauthorized psychological experiments', 'Commissioning artistic works serving as focal points for rituals', 'Managing mortuary to access fresh specimens for research', 'Breeding program producing animals for ceremonial sacrifice', 'Operating private bank financing cult operations worldwide'],
        ['Mapping ley lines and places of power throughout geographic region', 'Operating merchant vessel for transporting personnel and materials', 'Maintaining observatory tracking celestial events for ritual timing', 'Developing encoded language for secure communication between cells', 'Establishing museum displaying cursed artifacts to influence public', 'Broadcasting coded messages through private radio station'],
        ['Maintaining genealogical records tracking bloodlines across generations', 'Operating laboratory creating hybrid creatures through surgical procedures', 'Managing theater company performing reality-altering dramatic works', 'Operating mining operation extracting materials with occult properties', 'Creating detailed maps of underground tunnel systems and catacombs', 'Establishing diplomatic relations with non-human intelligent species'],
      ]
    },
    mythos_manifestations: {
      id: 'mythos_manifestations',
      name: 'Mythos Manifestations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Localized area where physical laws operate according to different principles', 'Gravitational anomaly causing objects to fall upward or sideways', 'Temporal distortion where different observers experience time differently', 'Shadows detaching from objects and moving independently', 'Reflective surfaces showing scenes from alternate dimensions', 'Sound waves arriving before their sources become visible'],
        ['New colors appearing that human language cannot adequately describe', 'Geometric patterns manifesting that cause physical pain when observed', 'Plant growth following alien mathematical sequences', 'Animal behavior exhibiting impossible intelligence and coordination', 'Weather phenomena occurring inside enclosed buildings', 'Inanimate objects temporarily exhibiting biological characteristics'],
        ['Written text rearranging itself to convey different meanings', 'Photographic images changing to show events never captured', 'Timepieces displaying impossible hours or running backward', 'Compass needles pointing toward locations that don\'t exist', 'Voices emanating from sealed containers and empty spaces', 'Footprints appearing in locations impossible to reach'],
        ['Temperature fluctuations occurring without identifiable heat sources', 'Light sources casting multiple shadows in contradictory directions', 'Musical instruments producing sound without human operation', 'Books writing themselves using invisible writing implements', 'Mirrors reflecting rooms and locations not physically present', 'Doorways opening to destinations different from architectural plans'],
        ['Human shadows taking shapes different from physical bodies', 'Water flowing upward or forming impossible spiral patterns', 'Fire producing cold instead of heat while ice radiates warmth', 'Dead languages being spoken by no visible source', 'Mathematical equations resolving to answers that violate logic', 'Artistic works changing composition when not being observed'],
        ['Foreign memories intruding into individual consciousness', 'Dream content manifesting effects in physical reality', 'Star constellations rearranging themselves in night sky', 'Human aging process accelerating or reversing without explanation', 'Physical wounds healing in patterns forming alien symbols', 'Natural laws operating according to unknown scientific principles'],
      ]
    },
    library_discoveries: {
      id: 'library_discoveries',
      name: 'Library Discoveries',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Book contains handwritten margin notes in multiple languages', 'Text describes modern technology centuries before invention', 'Historical account contradicts all other known sources', 'Mathematical formulas produce impossible results when calculated', 'Genealogical chart traces bloodlines to non-human entities', 'Star chart depicts constellations not visible from Earth'],
        ['Medical text describes anatomical structures unknown to science', 'Geographic survey maps locations that don\'t appear elsewhere', 'Chemical formulas for compounds that shouldn\'t be stable', 'Linguistic analysis revealing hidden meanings in common words', 'Archaeological report describing artifacts that predate civilization', 'Biological classification system including impossible species'],
        ['Philosophical treatise arguing for non-Euclidean reality', 'Engineering diagrams for machines violating thermodynamics', 'Historical timeline including events from alternate reality', 'Anthropological study of cultures that never existed', 'Theological text worshipping entities unknown to religion', 'Scientific journal documenting experiments that can\'t be replicated'],
        ['Legal document establishing ownership of impossible property', 'Military report describing battles that never occurred', 'Economic analysis of markets for non-existent commodities', 'Psychological study of mental conditions not recognized by medicine', 'Artistic criticism analyzing works that were never created', 'Musical notation for compositions using impossible harmonic structures'],
        ['Architectural plans for buildings that couldn\'t physically stand', 'Agricultural guide for cultivating crops that don\'t exist', 'Navigation manual for routes through impossible geography', 'Diplomatic correspondence with representatives of unknown nations', 'Trade agreement for commerce in materials that violate physics', 'Insurance policy covering risks that haven\'t been discovered'],
        ['Weather report predicting meteorological phenomena impossible for climate', 'Census data including population of locations not found on maps', 'Educational curriculum teaching subjects that don\'t exist', 'Religious calendar observing holidays not recognized by any faith', 'Legal precedent citing cases that were never tried', 'Technical manual for operating machinery that hasn\'t been invented'],
      ]
    },
    maritime_mysteries: {
      id: 'maritime_mysteries',
      name: 'Maritime Mysteries',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Ship manifest lists cargo consigned to coordinates in empty ocean', 'Harbor master\'s log records vessels arriving from impossible locations', 'Lighthouse keeper reports signals from ships not visible on water', 'Coast guard investigates distress calls from areas with no vessels', 'Fishing boats return with catches of species unknown to marine biology', 'Naval charts show islands that appear and disappear between editions'],
        ['Dock workers unload cargo from ships with no record of departure', 'Maritime insurance claims filed for vessels that were never built', 'Customs officials document imports from countries that don\'t exist', 'Port authority records show vessels with registration numbers never issued', 'Shipping company schedules include routes to locations not on maps', 'Maritime radio operators receive transmissions in unknown languages'],
        ['Salvage crews discover wrecks in areas where no ships were lost', 'Naval observatory tracks objects moving underwater at impossible speeds', 'Marine biology station studies specimens with no known classification', 'Harbor pilot reports navigating channels that don\'t appear on charts', 'Coast guard rescues survivors from disasters that weren\'t reported', 'Maritime museum displays artifacts recovered from non-existent voyages'],
        ['Shipping clerk processes bills of lading for impossible cargo', 'Naval intelligence intercepts communications mentioning unknown vessels', 'Marine weather service predicts conditions that violate oceanographic principles', 'Port engineer maintains facilities for ships that never dock', 'Maritime lawyer handles cases involving vessels outside legal jurisdiction', 'Harbor security monitors activity in areas with no authorized access'],
        ['Shipping company pays crew wages for voyages that never occurred', 'Naval archive contains records of battles that were never fought', 'Maritime academy teaches navigation techniques for impossible routes', 'Port chaplain conducts services for sailors who were never born', 'Shipping registry lists vessels constructed in non-existent shipyards', 'Marine surveyor maps underwater features that shouldn\'t exist'],
        ['Naval medical officer treats injuries from causes unknown to medicine', 'Port authority collects taxes on cargo that was never imported', 'Maritime historian documents voyages that couldn\'t have occurred', 'Harbor maintenance repairs damage from storms that weren\'t recorded', 'Shipping company operates routes to ports that were never built', 'Naval communications decode messages from ships outside space-time'],
      ]
    },
    urban_anomalies: {
      id: 'urban_anomalies',
      name: 'Urban Anomalies',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['City street appears on maps but cannot be found by pedestrians', 'Building directory lists businesses operating on non-existent floors', 'Subway map includes stations not accessible by any train', 'Post office delivers mail to addresses that don\'t exist', 'Phone directory contains numbers reaching locations outside city', 'Police precinct maintains files on crimes that weren\'t committed'],
        ['Municipal water department bills residents of demolished buildings', 'City planning office issues permits for construction on vacant lots', 'Public library circulation includes books that were never published', 'Transportation authority sells tickets for routes that don\'t exist', 'Hospital emergency room treats patients for impossible injuries', 'City hall maintains records of officials who were never elected'],
        ['Fire department responds to calls from buildings that burned down', 'School district enrolls students from families that moved away', 'Electric company provides power to structures that have no wiring', 'Sanitation department collects trash from locations with no residents', 'Parks department maintains facilities in areas with no public space', 'Public transportation schedules include stops at locations that were demolished'],
        ['City registry office records births and deaths that never occurred', 'Municipal court processes cases involving laws that don\'t exist', 'Public works department repairs infrastructure that was never built', 'Housing authority manages apartments in buildings that aren\'t there', 'City tax office collects revenue from businesses that never operated', 'Municipal elections include candidates who weren\'t born'],
        ['Public health department tracks diseases that don\'t exist', 'City architect approves building plans violating physical laws', 'Municipal budget allocates funding for departments that don\'t exist', 'Public safety office investigates crimes using impossible methods', 'City engineer maintains roads that can\'t be found', 'Municipal clerk processes applications for permits that aren\'t legal'],
        ['Public defender represents clients who don\'t exist', 'City inspector approves construction that violates building codes', 'Municipal auditor reviews accounts for transactions that never occurred', 'Public works maintains utilities for neighborhoods that were never built', 'City planning approves zoning for areas outside municipal boundaries', 'Municipal government operates services for populations that don\'t exist'],
      ]
    },
    rural_secrets: {
      id: 'rural_secrets',
      name: 'Rural Secrets',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Farming community follows agricultural calendar based on alien astronomy', 'Rural church congregation practices modified rituals unknown to denomination', 'Local cemetery contains graves with dates from before town founding', 'Country store stocks supplies for customers who never visit', 'Rural school teaches history lessons not found in educational curriculum', 'Village council meetings include officials whose names aren\'t public record'],
        ['Local doctor treats medical conditions not recognized by medical science', 'Rural post office delivers mail to addresses that can\'t be located', 'Country newspaper reports events that never occurred', 'Village blacksmith forges tools using techniques not documented anywhere', 'Rural library contains books written in languages that don\'t exist', 'Local sheriff maintains law enforcement for populations that aren\'t counted'],
        ['Country inn accommodates guests who never registered', 'Rural mill processes grain into products with impossible nutritional content', 'Village well provides water with properties that violate chemistry', 'Local bank maintains accounts for customers with no identification', 'Country market sells produce from crops that shouldn\'t grow locally', 'Rural hospital treats injuries using medical techniques unknown to science'],
        ['Village phone operator connects calls to numbers that don\'t exist', 'Local grange organization follows agricultural practices unknown to farming', 'Country fair includes competitions for activities that don\'t exist', 'Rural fire department maintains equipment for emergencies that don\'t occur', 'Village barber provides services using tools that aren\'t manufactured', 'Local gas station supplies fuel with properties that violate chemistry'],
        ['Country veterinarian treats animals from species that don\'t exist', 'Rural judge presides over legal cases using laws that aren\'t written', 'Village undertaker provides funeral services for people who aren\'t dead', 'Local mechanic repairs vehicles using techniques that don\'t exist', 'Country surveyor maps property boundaries in impossible configurations', 'Rural teacher educates students using knowledge that isn\'t documented'],
        ['Village mayor governs territory that isn\'t incorporated', 'Local preacher delivers sermons based on religious texts that don\'t exist', 'Country auctioneer sells items that violate physical laws', 'Rural pharmacist dispenses medications with impossible chemical compositions', 'Village historian maintains records of events that never happened', 'Local guide leads tourists to destinations that can\'t be found'],
      ]
    },
    family_curses: {
      id: 'family_curses',
      name: 'Family Curses',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Eldest child in each generation born with extra finger containing alien DNA', 'Family dreams shared across all blood relatives regardless of distance', 'Ancestral portrait ages while family members remain youthful', 'Bloodline carries genetic memory of events from pre-human civilization', 'Family heirloom whispers warnings in languages no one understands', 'Each generation produces one child who can see through dimensional barriers'],
        ['Family cemetery graves open during specific astronomical configurations', 'Bloodline members experience visions of their own deaths exactly one year early', 'Family recipes require ingredients that don\'t exist in nature', 'Ancestral diary writes itself with predictions of future family events', 'Family crest appears mysteriously on objects touched by blood relatives', 'Bloodline members age backwards during leap years'],
        ['Family fortune increases through investments in companies that don\'t exist', 'Ancestral home rooms rearrange themselves when no family members present', 'Family photographs show additional figures not present during picture taking', 'Bloodline carries immunity to diseases that haven\'t been discovered', 'Family gravestone inscriptions change to predict future deaths', 'Ancestral ghost appears to warn family members of supernatural threats'],
        ['Family tree includes branches connecting to non-human entities', 'Bloodline members hear ancestral voices providing guidance during crises', 'Family jewelry changes color to warn of approaching Mythos entities', 'Ancestral will bequeaths property that exists in alternate dimensions', 'Family members born with birthmarks forming occult symbols', 'Bloodline genetic code contains sequences matching alien mathematics'],
        ['Family coat of arms appears on historical documents predating family existence', 'Ancestral manor basement connects to underground chambers of unknown origin', 'Family members experience temporary possession by ancestral spirits', 'Bloodline attracts supernatural entities seeking specific genetic markers', 'Family fortune cursed to attract attention from otherworldly collectors', 'Ancestral knowledge passes genetically rather than through education'],
        ['Family members can communicate telepathically during life-threatening situations', 'Bloodline doomed to serve as guardians for imprisoned cosmic entity', 'Family heirlooms function as keys to dimensional gateways', 'Ancestral sins create karmic debt payable only through supernatural service', 'Family members reincarnate repeatedly until completing unknown mission', 'Bloodline destined to produce final guardian against awakening Great Old Ones'],
      ]
    },
    archaeological_finds: {
      id: 'archaeological_finds',
      name: 'Archaeological Finds',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Stone tablets covered in hieroglyphs that predate known writing systems', 'Burial chamber containing mummified remains of impossible anatomy', 'Ancient tools crafted from materials that don\'t exist in nature', 'Temple foundation built using architectural principles unknown to engineering', 'Ceremonial artifacts that exhibit magnetic properties toward human blood', 'Fossilized remains of creatures that don\'t match evolutionary timeline'],
        ['Underground chambers connected by tunnels extending beyond survey boundaries', 'Carved statues depicting entities not found in any known mythology', 'Ancient calendar system based on astronomical observations impossible without technology', 'Burial goods including items that won\'t be invented for centuries', 'Site contains layers of civilization that shouldn\'t exist according to geology', 'Inscriptions describe historical events that contradict all other sources'],
        ['Artifacts show evidence of manufacturing techniques unknown to ancient peoples', 'Ceremonial chamber designed with acoustic properties that induce altered consciousness', 'Ancient library containing books written on materials that can\'t be identified', 'Burial site includes graves of people who died in different centuries', 'Temple altar stained with substances that don\'t match any known blood chemistry', 'Archaeological stratigraphy shows evidence of advanced civilization before primitive cultures'],
        ['Carved reliefs depicting modern technology in ancient artistic style', 'Ceremonial objects that change temperature without external heat source', 'Ancient coins bearing images of rulers from unknown civilizations', 'Burial chamber sealed from inside with no exit mechanism', 'Temple complex aligned with stellar configurations impossible for construction period', 'Artifacts show wear patterns indicating use by non-human hands'],
        ['Ancient well extending deeper than geological surveys indicate possible', 'Ceremonial masks that cause hallucinations when worn by volunteers', 'Burial goods including maps of continents in impossible configurations', 'Temple inscriptions that change meaning when observed from different angles', 'Ancient observatory tracking celestial objects not visible to naked eye', 'Archaeological site radiocarbon dates to multiple time periods simultaneously'],
        ['Ceremonial chamber that amplifies whispered words into audible speech', 'Burial artifacts that exhibit properties of materials not yet discovered', 'Ancient fortress built to defend against threats that never existed historically', 'Temple complex containing rooms larger inside than outside measurements indicate', 'Archaeological find includes technology that violates known physical laws', 'Burial site contains remains of beings that don\'t match any known species'],
      ]
    },
    medical_oddities: {
      id: 'medical_oddities',
      name: 'Medical Oddities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Patient exhibits symptoms of diseases that don\'t exist in medical literature', 'Hospital records document surgical procedures that weren\'t performed', 'Medical chart shows vital signs that are impossible for human physiology', 'Patient blood work reveals chemical compounds not found in nature', 'X-ray images display anatomical structures unknown to medical science', 'Medical equipment malfunctions only when specific patients are examined'],
        ['Hospital morgue contains bodies with cause of death listed as impossible', 'Patient medical history includes treatments at hospitals that don\'t exist', 'Laboratory test results change when reviewed by different doctors', 'Medical files document patients who were never admitted to hospital', 'Patient exhibits healing rates that violate known biological limitations', 'Hospital pharmacy dispenses medications with impossible chemical compositions'],
        ['Medical examination reveals patient has organs in wrong anatomical positions', 'Patient blood type doesn\'t match any classification in medical taxonomy', 'Hospital admits patients for conditions that haven\'t been discovered yet', 'Medical records show treatments performed by doctors who don\'t exist', 'Patient tissue samples exhibit properties unknown to cellular biology', 'Hospital equipment records measurements outside calibrated ranges'],
        ['Medical staff treat injuries caused by weapons that don\'t exist', 'Patient responds to medications that shouldn\'t affect their condition', 'Hospital laboratory cultures microorganisms not found in nature', 'Medical imaging reveals structures that don\'t appear in anatomy textbooks', 'Patient medical bracelet lists allergies to substances that don\'t exist', 'Hospital billing department charges for procedures that weren\'t invented'],
        ['Medical examination reveals patient has been dead for days despite activity', 'Patient medical records predate their birth by several decades', 'Hospital treats epidemic of condition affecting impossible demographic', 'Medical staff document symptoms that contradict established pathology', 'Patient surgical scars form patterns matching occult symbols', 'Hospital admits patients who were declared dead at other medical facilities'],
        ['Medical records show patient has been treated at hospital in different country', 'Patient exhibits immunity to toxins that haven\'t been discovered', 'Hospital laboratory identifies pathogens with no known biological classification', 'Medical examination reveals patient aging at impossible rate', 'Patient blood work shows DNA sequences not found in human genome', 'Hospital treats injuries that couldn\'t be caused by any known force'],
      ]
    },
    scientific_breakthroughs: {
      id: 'scientific_breakthroughs',
      name: 'Scientific Breakthroughs',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Physics laboratory discovers particles that don\'t fit standard model', 'Chemistry department synthesizes compound with impossible molecular structure', 'Biology research identifies species with no evolutionary precedent', 'Mathematics proof demonstrates theorem that contradicts fundamental logic', 'Engineering project creates machine that violates thermodynamics', 'Astronomy department detects signals from impossible stellar coordinates'],
        ['Research institute develops technology using principles unknown to science', 'Laboratory experiment produces results that can\'t be replicated elsewhere', 'Scientific journal publishes paper describing impossible phenomenon', 'University research grant funds investigation of non-existent subject', 'Laboratory discovers new element with properties that violate chemistry', 'Scientific equipment measures forces not recognized by physics'],
        ['Research facility isolates energy source with unlimited output capacity', 'Scientific breakthrough enables communication with non-corporeal entities', 'Laboratory experiment accidentally opens portal to alternate dimension', 'University research proves existence of mathematical dimensions beyond three', 'Scientific discovery reveals time moves differently in specific locations', 'Research institute creates material existing in multiple states simultaneously'],
        ['Laboratory develops serum enhancing human perception beyond normal limits', 'Scientific equipment detects thoughts broadcast from unknown sources', 'University study documents consciousness existing independently of brain', 'Research facility measures gravitational anomalies defying Einstein\'s theories', 'Scientific breakthrough allows observation of events before occurrence', 'Laboratory creates artificial life using methods unknown to biology'],
        ['Research institute discovers parallel evolution in impossible timeframes', 'Scientific study identifies genetic markers linking humans to aliens', 'University laboratory synthesizes matter with negative mass properties', 'Research breakthrough enables probability manipulation through quantum mechanics', 'Scientific discovery proves universe contains unperceivable dimensions', 'Laboratory experiment demonstrates consciousness influencing physical reality'],
        ['Research facility creates technology operating without energy input', 'Scientific study documents species evolving through supernatural influence', 'University breakthrough enables neural interface with unknown intelligence', 'Laboratory discovers organisms existing in multiple dimensions simultaneously', 'Research institute proves mathematics describing imperceptible reality', 'Scientific breakthrough demonstrates universe operating as conscious entity'],
      ]
    },
    artistic_corruption: {
      id: 'artistic_corruption',
      name: 'Artistic Corruption',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Painting subject\'s eyes track observer movement across room', 'Musical composition causes listeners to experience shared hallucinations', 'Sculpture changes pose when not being directly observed', 'Novel manuscript writes additional chapters overnight without author', 'Theatrical performance includes actors who weren\'t cast', 'Photography darkroom develops images never captured by camera'],
        ['Art gallery paintings rearrange themselves during closing hours', 'Musical instruments produce sounds without human players', 'Sculpture material changes from stone to organic tissue', 'Written poetry appears in books never opened by readers', 'Theater stage shows performances no audience remembers attending', 'Art supplies create works without artist\'s conscious involvement'],
        ['Gallery visitors report seeing different artwork than displayed', 'Musical scores contain notes impossible with listed instruments', 'Sculptures exhibit anatomical accuracy for nonexistent creatures', 'Literary works reference historical events that never occurred', 'Theatrical productions include dialogue not written in script', 'Photographic negatives show figures not present during shooting'],
        ['Art exhibitions attract visitors with no memory of entering', 'Musical performances continue after musicians stop playing', 'Sculpture pedestals support statues heavier than materials allow', 'Written works appear translated into languages that don\'t exist', 'Theater audiences experience events as participants not observers', 'Artistic materials exhibit properties unknown to chemistry'],
        ['Gallery lighting reveals hidden imagery under specific conditions', 'Musical compositions produce harmonics affecting listener physiology', 'Sculptures cast shadows different from physical form', 'Literary characters step out of books to interact with readers', 'Theatrical costumes change actors into beings matching roles', 'Photographic chemicals develop images of subjects\' hidden thoughts'],
        ['Art critics write reviews of exhibitions they never attended', 'Musical performances occur simultaneously in multiple locations', 'Sculpture materials regenerate when damaged by vandals', 'Written text changes meaning when read by different people', 'Theater performances influence events in audience members\' lives', 'Artistic works serve as windows into alternate dimensions'],
      ]
    },
    temporal_disturbances: {
      id: 'temporal_disturbances',
      name: 'Temporal Disturbances',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Clock tower chimes thirteen times at midnight on specific dates', 'Photograph development shows events occurring before pictures taken', 'Calendar appointments scheduled for dates that don\'t exist', 'Diary entries appear written in future tense describing past events', 'Historical documents contain margin notes in modern handwriting', 'Newspaper publishes obituaries for people still alive'],
        ['Library books check out with return dates preceding checkout dates', 'Train schedule includes arrivals occurring before departures', 'Birth certificates issued for children not yet born', 'Weather forecast predicts storms that occurred last week', 'Radio broadcasts feature programs that aired decades ago', 'School attendance records show students present before enrollment'],
        ['Hospital patients scheduled for surgery after discharge dates', 'Bank deposits recorded occurring before account opening', 'Marriage licenses issued before couples meet each other', 'Property deeds transferred before buildings constructed', 'Police reports filed describing crimes before they occur', 'Death certificates dated before corresponding birth certificates'],
        ['Theater tickets sold for performances before venue construction', 'Employment records show work performed before job applications', 'University degrees awarded before course completion', 'Insurance policies cover losses before premiums paid', 'Hotel reservations confirmed for dates in past', 'Travel tickets issued for journeys already completed'],
        ['Business licenses approved before applications submitted', 'Medical appointments scheduled after patient recovery', 'Phone bills charged for calls before service installation', 'Library fines imposed before books borrowed', 'Parking tickets issued before vehicle purchase', 'Utility bills sent for usage before meters installed'],
        ['Court hearings scheduled before charges filed', 'Tax returns processed before income earned', 'Building permits issued before architects born', 'Warranty claims processed before products manufactured', 'Loan payments received before money borrowed', 'Archaeological discoveries reported before excavation begins'],
      ]
    },
    dream_intrusions: {
      id: 'dream_intrusions',
      name: 'Dream Intrusions',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Multiple unrelated people experience identical nightmare content', 'Dream events leave physical evidence in waking world', 'Sleeping individual speaks fluent languages they don\'t know', 'Dream locations correspond to real places dreamer never visited', 'Nightmare entities appear in photographs taken while dreaming', 'Shared dreams allow communication between distant participants'],
        ['Dream injuries manifest as physical wounds upon waking', 'Sleep talking reveals information dreamer shouldn\'t know', 'Dream objects materialize in bedroom after waking', 'Nightmare creatures leave footprints around sleeping areas', 'Dream conversations overheard by people in adjacent rooms', 'Sleep movements perfectly match dream activity patterns'],
        ['Dreams occur in chronological sequence across multiple nights', 'Nightmare scenarios predict actual events with supernatural accuracy', 'Dream knowledge includes skills dreamer never learned', 'Sleep positions change to match dream environment requirements', 'Dream weather affects room temperature during sleep', 'Nightmare entities respond when dreamers call their names'],
        ['Dreams continue playing after dreamer wakes up', 'Sleep talking includes conversations with invisible entities', 'Dream memories replace actual memories of waking events', 'Nightmare scenarios influence physical health symptoms', 'Dreams allow observation of events occurring in remote locations', 'Sleep movements create patterns matching occult symbols'],
        ['Dream time passes differently than clock time during sleep', 'Nightmare entities follow dreamers into waking consciousness', 'Dreams reveal hidden knowledge about family history', 'Sleep behavior mimics actions of deceased relatives', 'Dream environments affect room lighting during sleep', 'Nightmare creatures interact with bedroom furniture'],
        ['Dreams provide warnings about supernatural threats', 'Sleep talking includes prophecies spoken in ancient languages', 'Dream experiences shared across family bloodlines', 'Nightmare scenarios repeat until specific actions completed', 'Dreams allow travel to locations existing in other dimensions', 'Sleep consciousness merges with alien intelligence temporarily'],
      ]
    },
    corporate_conspiracies: {
      id: 'corporate_conspiracies',
      name: 'Corporate Conspiracies',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Shipping company transports cargo to unmappable locations', 'Manufacturing corporation produces items with impossible material properties', 'Insurance company covers risks not recognized by actuarial science', 'Banking institution manages accounts for nonexistent customers', 'Publishing house releases books written in undeciphered languages', 'Research corporation studies phenomena not acknowledged by science'],
        ['Mining company extracts materials with unknown chemical properties', 'Pharmaceutical corporation manufactures medications with impossible formulas', 'Transportation company operates routes to geographically impossible destinations', 'Media conglomerate broadcasts content visible only to specific viewers', 'Construction company builds structures using physics-violating architectural principles', 'Agricultural corporation grows crops requiring nonexistent soil nutrients'],
        ['Technology company develops devices operating without known power sources', 'Investment firm trades in commodities that don\'t exist', 'Telecommunications company transmits signals to uninvented receivers', 'Energy corporation harvests power from physics-unrecognized sources', 'Food processing company uses ingredients not found in nature', 'Chemical corporation synthesizes compounds violating molecular theory'],
        ['Aerospace company manufactures vehicles using unknown propulsion systems', 'Biotechnology corporation modifies organisms through impossible genetics', 'Software company programs applications performing impossible computations', 'Logistics company delivers packages to nonexistent addresses', 'Entertainment corporation produces content influencing viewers through unknown methods', 'Security company protects facilities using undeveloped technology'],
        ['Consulting firm provides expertise in academically unrecognized subjects', 'Real estate company develops property in conventionally inaccessible locations', 'Healthcare corporation treats conditions unrecognized by medical science', 'Financial services company processes transactions in government-unissued currencies', 'Retail corporation sells products manufactured using unknown techniques', 'Service company provides assistance for officially nonexistent problems'],
        ['Engineering firm designs projects violating natural laws', 'Marketing company promotes products that haven\'t been invented', 'Export company ships goods to internationally unrecognized countries', 'Import company receives cargo from unknown supply chains', 'Manufacturing corporation operates factories in unsurveyed locations', 'Multinational conglomerate maintains subsidiaries in parallel dimensions'],
      ]
    },
    government_cover_ups: {
      id: 'government_cover_ups',
      name: 'Government Cover-ups',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Federal agency investigates phenomena not acknowledged by official policy', 'Military unit deploys to locations not shown on maps', 'Intelligence service monitors threats not recognized by security doctrine', 'Regulatory agency oversees industries that don\'t officially exist', 'Law enforcement unit investigates crimes not defined by statutes', 'Research facility studies subjects not included in government budget'],
        ['Diplomatic corps maintains relations with internationally unrecognized nations', 'Emergency services respond to disasters not reported in media', 'Health agency monitors diseases not identified by medical establishment', 'Environmental agency tracks pollutants not classified by chemistry', 'Transportation authority regulates routes not appearing on official maps', 'Communication service intercepts signals from unregistered sources'],
        ['Border patrol secures frontiers not defined by international treaties', 'Customs agency processes imports from treaty-unrecognized countries', 'Immigration service documents visitors from geographically unrecognized places', 'Tax authority collects revenue from unregistered entities', 'Postal service delivers mail to officially unrecorded addresses', 'Census bureau counts populations not acknowledged by demographic surveys'],
        ['Statistical office compiles data on officially uncategorized subjects', 'Weather service tracks atmospheric phenomena unexplained by meteorology', 'Geological survey maps formations unaccounted by earth science', 'Agricultural department monitors yields from botanically unrecognized plants', 'Wildlife service protects species not classified by biological taxonomy', 'Parks service maintains facilities in areas not designated public land'],
        ['Archaeological service excavates sites not acknowledged by historical record', 'Cultural agency preserves traditions not documented by anthropology', 'Education department teaches curricula not approved by academic institutions', 'Housing authority manages properties not included in real estate records', 'Urban planning department zones areas not incorporated into municipal boundaries', 'Public works department maintains infrastructure not appearing in engineering surveys'],
        ['Social services agency assists populations not counted in welfare statistics', 'Veterans administration serves personnel from unrecorded conflicts', 'Disability services accommodate conditions not recognized by medical establishment', 'Employment agency places workers in positions not classified by labor statistics', 'Trade commission regulates commerce in goods not acknowledged by economic surveys', 'Nuclear regulatory commission oversees facilities using unknown energy sources'],
      ]
    },
    sanity_breaking_points: {
      id: 'sanity_breaking_points',
      name: 'Sanity Breaking Points',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Witnessing loved one transform into non-human entity', 'Discovering personal memories belong to someone else', 'Realizing childhood home never existed', 'Finding own obituary with accurate death prediction', 'Meeting identical duplicate claiming to be original self', 'Watching reflection perform actions independently'],
        ['Learning entire family consists of adopted strangers', 'Discovering personal diary written in unrecognized handwriting', 'Finding photographs showing self in unvisited locations', 'Hearing own voice speaking never-spoken words', 'Meeting childhood imaginary friend as adult entity', 'Discovering all friends have identical false memories'],
        ['Realizing apartment exists in demolished building', 'Finding personal belongings in possession of dead stranger', 'Learning birth certificate lists nonexistent parents', 'Discovering academic degrees earned from unattended universities', 'Meeting spouse who claims marriage ceremony never occurred', 'Finding employment records for never-worked jobs'],
        ['Learning medical records describe never-received surgery', 'Discovering bank accounts opened using forged identification', 'Meeting children who claim different parentage', 'Finding legal documents signed with unrecognized signature', 'Learning social security number belongs to deceased person', 'Discovering driver\'s license photo shows different face'],
        ['Meeting neighbors who claim investigator never lived there', 'Finding utility bills for never-requested services', 'Learning insurance policies cover never-occurred life events', 'Discovering tax returns filed for never-earned income', 'Meeting former teachers who claim investigator never attended classes', 'Finding library cards issued for never-borrowed books'],
        ['Learning religious records show never-received baptism', 'Discovering military service records for never-completed enlistment', 'Meeting former employers who claim investigator never worked there', 'Finding subscription records for never-ordered publications', 'Learning voting records show ballots cast in unparticipated elections', 'Discovering will bequeathing possessions to never-met beneficiaries'],
      ]
    },
    investigative_complications: {
      id: 'investigative_complications',
      name: 'Investigative Complications',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Key witness disappears leaving no trace of existence', 'Critical evidence destroyed by unexplained fire', 'Research materials rearrange themselves into meaningless order', 'Important documents translate themselves into unreadable languages', 'Essential contact denies all knowledge of investigation', 'Crucial location becomes inaccessible through normal means'],
        ['Vital photograph develops showing different image', 'Important recording plays back different conversation', 'Key informant provides contradictory information each meeting', 'Critical evidence exhibits properties that change unpredictably', 'Essential witness remembers events differently each time', 'Important location changes layout between visits'],
        ['Vital clue leads to place that doesn\'t exist', 'Key document contains information that changes when reread', 'Important contact reveals they\'re not who they claimed', 'Critical meeting interrupted by unexplained phenomena', 'Essential evidence disappears from secured storage', 'Important witness found dead under impossible circumstances'],
        ['Vital information source proves to be unreliable narrator', 'Key location accessible only during specific conditions', 'Important documents require translation from unknown language', 'Critical evidence damaged by exposure to supernatural influence', 'Essential contact provides information contradicting physical laws', 'Important meeting location keeps changing without explanation'],
        ['Vital witness claims investigation events never occurred', 'Key evidence exhibits behavior suggesting consciousness', 'Important information proves accurate only under certain circumstances', 'Critical location exists only during specific time periods', 'Essential contact communicates only through intermediaries', 'Important clue requires specialized knowledge to interpret'],
        ['Vital meeting interrupted by hostile forces', 'Key evidence contaminated by unknown substances', 'Important witness provides information requiring assembly of fragments', 'Critical location protected by supernatural guardians', 'Essential information hidden using scientifically unknown encryption', 'Important investigation thread leads to discovery that reality unreliable'],
      ]
    },
    helpful_contacts: {
      id: 'helpful_contacts',
      name: 'Helpful Contacts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Librarian with access to restricted occult text collection', 'Medical examiner willing to share unofficial autopsy findings', 'Police detective investigating similar unexplained cases', 'University professor researching folklore and mythology', 'Antiquarian book dealer specializing in rare manuscripts', 'Journalist covering stories mainstream media won\'t touch'],
        ['Private investigator with criminal underworld connections', 'Museum curator knowledgeable about artifact provenance', 'Lawyer familiar with unusual property inheritance cases', 'Doctor treating patients with unexplained medical conditions', 'Historian researching family genealogies and bloodlines', 'Translator fluent in ancient and obscure languages'],
        ['Archaeologist with pre-Columbian civilization experience', 'Psychologist studying abnormal mental conditions', 'Telephone operator overhearing strange conversations', 'Post office clerk noticing unusual mail patterns', 'Bank teller processing suspicious financial transactions', 'Hotel desk clerk remembering unusual guest behavior'],
        ['Taxi driver familiar with city\'s hidden locations', 'Harbor master tracking unusual shipping activity', 'Cemetery groundskeeper knowledgeable about burial records', 'Church secretary maintaining parish historical records', 'School administrator with access to old enrollment records', 'Hospital administrator familiar with unusual patient admissions'],
        ['Property manager overseeing buildings with unusual histories', 'Insurance investigator handling supernatural element claims', 'Government clerk with access to restricted public records', 'Radio operator receiving transmissions from unknown sources', 'Weather observer documenting atmospheric anomalies', 'Shipping clerk handling cargo with unusual destinations'],
        ['Laboratory technician analyzing samples with impossible properties', 'Photography developer processing images showing unexplained phenomena', 'Telegraph operator transmitting messages to nonexistent addresses', 'Customs official inspecting imports from unrecognized countries', 'Real estate agent selling properties with disturbing histories', 'Former cult member willing to share inside information'],
      ]
    },
    hostile_encounters: {
      id: 'hostile_encounters',
      name: 'Hostile Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Cultist assassin eliminating witnesses to ritual activities', 'Government agent suppressing supernatural investigation', 'Corporate security protecting business interests from exposure', 'Hired thug intimidating potential informants', 'Corrupt police officer sabotaging official investigation', 'Academic rival stealing research credit and materials'],
        ['Religious fanatic preventing desecration of sacred sites', 'Organized crime enforcer protecting illegal operations', 'Private security guard defending restricted property', 'Foreign spy gathering intelligence on supernatural phenomena', 'Military personnel securing classified information', 'Insurance investigator preventing fraudulent claims'],
        ['Lawyer protecting client interests through intimidation', 'Doctor covering up malpractice involving supernatural elements', 'Journalist competing for exclusive story rights', 'Museum guard preventing unauthorized access to exhibits', 'Library security restricting access to dangerous materials', 'University administrator protecting institutional reputation'],
        ['Bank security investigating unusual financial activity', 'Hotel management preventing negative publicity', 'Real estate developer eliminating obstacles to property development', 'Construction foreman preventing interference with building projects', 'Shipping company employee protecting cargo secrecy', 'Telecommunications worker intercepting private communications'],
        ['Hospital administrator covering up patient privacy violations', 'Government bureaucrat enforcing regulatory compliance', 'Police detective investigating investigator\'s activities', 'Federal agent monitoring potential security threats', 'Corporate executive eliminating business competition', 'Military officer protecting national security interests'],
        ['Religious authority preventing heretical investigation', 'Academic committee member protecting research ethics', 'Professional association representative enforcing industry standards', 'Legal authority preventing violation of court orders', 'Medical board member investigating unlicensed practice', 'Supernatural entity using human agent to protect secrets'],
      ]
    },
    safe_house_resources: {
      id: 'safe_house_resources',
      name: 'Safe House Resources',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Hidden cache of occult subject research materials', 'Secure communication equipment for contacting distant allies', 'Medical supplies for treating supernatural injuries', 'Protective wards and talismans against Mythos entities', 'Firearms and ammunition specifically consecrated against evil', 'Ancient texts providing protection rituals and spells'],
        ['Laboratory equipment for analyzing unusual substances', 'Darkroom facilities for developing supernatural photography', 'Radio equipment capable of monitoring occult transmissions', 'Financial resources hidden from government surveillance', 'False identification documents and travel papers', 'Maps marking locations of supernatural significance'],
        ['Emergency food and water supplies for extended hiding', 'Sleeping quarters protected by supernatural barriers', 'Library containing books on folklore and mythology', 'Workshop for creating protective items and tools', 'Storage area for dangerous artifacts requiring containment', 'Meeting room for planning investigation strategy'],
        ['Surveillance equipment for monitoring cult activities', 'Computer terminal with access to restricted databases', 'Telephone with untraceable connections to important contacts', 'Vehicle maintenance area for emergency transportation', 'First aid station equipped for treating psychological trauma', 'Armory containing weapons effective against supernatural threats'],
        ['Document storage with fireproof protection for important papers', 'Hidden exit routes leading to various parts of city', 'Power generator providing electricity independent of grid', 'Water purification system removing supernatural contamination', 'Air filtration system protecting against toxic influences', 'Secure vault for storing valuable artifacts and evidence'],
        ['Communication center for coordinating with other investigators', 'Reference library containing maps of underground tunnel systems', 'Equipment storage containing specialized investigation tools', 'Safe room designed to withstand supernatural assault', 'Observatory with telescope for tracking celestial phenomena', 'Ritual chamber prepared for performing protective ceremonies'],
      ]
    },
    ritual_components: {
      id: 'ritual_components',
      name: 'Ritual Components',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Candles made from fat of animals sacrificed during eclipses', 'Salt from dried lakes that appeared overnight', 'Water collected during rainfall that fell upward', 'Incense burned in temples before their destruction', 'Herbs gathered during impossible astronomical alignments', 'Crystals formed in caves existing outside normal space'],
        ['Blood willingly given by those marked by supernatural entities', 'Bones from creatures that died before they were born', 'Metal forged during stellar events not visible from Earth', 'Wood carved from trees that grew in impossible soil', 'Stone quarried from mountains that appear on no maps', 'Clay formed from earth that remembers ancient civilizations'],
        ['Oil pressed from seeds planted in different dimensions', 'Powder ground from substances that exist only temporarily', 'Fabric woven from materials not found in nature', 'Thread spun during time periods that never occurred', 'Wax gathered from hives built by impossible insects', 'Resin collected from trees that photosynthesize darkness'],
        ['Ash from fires that burned underwater', 'Dust from buildings demolished before construction', 'Sand from beaches that border nonexistent oceans', 'Earth from graves of people who never died', 'Coal mined from deposits formed in future geology', 'Sulfur extracted from volcanoes that erupted backwards'],
        ['Iron smelted from ore that rusts before oxidation', 'Silver refined from veins that appear only during eclipses', 'Gold panned from rivers that flow through multiple realities', 'Copper obtained from mines that exist in parallel dimensions', 'Lead extracted from bullets that never missed their targets', 'Mercury distilled from thermometers measuring impossible temperatures'],
        ['Glass formed from sand heated by non-terrestrial fire', 'Paper made from pulp of books that write themselves', 'Ink mixed from ingredients that exist only in specific combinations', 'Chalk quarried from cliffs that face directions not found on compasses', 'Charcoal burned from wood that grew in soil from alien worlds', 'Diamond formed under pressure that violates physics'],
      ]
    },
    protective_measures: {
      id: 'protective_measures',
      name: 'Protective Measures',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Iron nails driven in geometric patterns around building perimeter', 'Salt circles drawn using blessed salt from consecrated sources', 'Running water barriers channeled around vulnerable locations', 'Mirror placement reflecting supernatural threats back toward source', 'Herb bundles burned according to ancient protection rituals', 'Bell ringing at specific intervals to disrupt entity manifestation'],
        ['Holy symbol placement at all entry points to protected area', 'Protective ward inscription using symbols from multiple traditions', 'Candle lighting maintained continuously throughout dangerous periods', 'Incense burning using rare substances effective against supernatural', 'Amulet wearing providing personal protection during investigation', 'Charm carrying offering spiritual defense against possession'],
        ['Ritual performance creating protective barrier around safe areas', 'Prayer recitation using words powerful against specific entities', 'Symbol drawing incorporating geometric patterns disrupting supernatural', 'Object consecration blessing items with protective properties', 'Circle casting establishing sacred space impervious to intrusion', 'Blessing ceremony purifying locations contaminated by evil influence'],
        ['Threshold protection placing barriers at all building entrances', 'Window sealing using methods preventing supernatural entry', 'Door blessing inscribing protective symbols on all portals', 'Chimney sealing preventing entity access through fireplace', 'Foundation blessing protecting building from underground threats', 'Roof blessing defending against attacks from above'],
        ['Vehicle protection blessing transportation for dangerous journeys', 'Personal protection ritual creating individual spiritual armor', 'Group protection ceremony establishing collective defense', 'Location purification removing supernatural contamination from sites', 'Object cleansing eliminating cursed properties from artifacts', 'Space consecration dedicating areas to benevolent spiritual forces'],
        ['Barrier creation establishing physical obstacles supernatural entities cannot cross', 'Shield construction building defenses using blessed materials', 'Ward maintenance ensuring protective measures remain effective', 'Blessing renewal strengthening protective ceremonies over time', 'Detection system establishment creating early warning against supernatural threats', 'Escape route preparation ensuring safe retreat when protection fails'],
      ]
    },
    information_sources: {
      id: 'information_sources',
      name: 'Information Sources',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['University library rare book collection containing forbidden texts', 'Newspaper morgue files documenting unexplained phenomena', 'Police evidence room storing artifacts from unsolved cases', 'Hospital patient records describing impossible medical conditions', 'Church archives containing accounts of supernatural encounters', 'Government filing cabinets with classified reports on anomalous events'],
        ['Museum storage areas housing artifacts too dangerous for display', 'Private collector\'s library specializing in occult manuscripts', 'Academic researcher\'s personal notes on forbidden subjects', 'Retired journalist\'s files on stories deemed unprintable', 'Former cult member\'s diary detailing ritual practices', 'Archaeological expedition reports describing impossible discoveries'],
        ['Maritime shipping records listing cargo to nonexistent destinations', 'Military intelligence files documenting encounters with unknown forces', 'Medical examiner\'s unofficial autopsy notes on unusual deaths', 'Insurance investigator\'s case files on impossible claims', 'Real estate agent\'s records of properties with disturbing histories', 'Genealogist\'s research tracing bloodlines to non-human ancestors'],
        ['Telegraph operator\'s logs recording transmissions from impossible locations', 'Radio technician\'s notes on signals from unknown sources', 'Weather observer\'s records of meteorological impossibilities', 'Geological surveyor\'s maps showing features that violate physics', 'Astronomical observatory\'s data on celestial objects that shouldn\'t exist', 'Laboratory technician\'s analysis reports on samples with impossible properties'],
        ['Court stenographer\'s transcripts from trials involving supernatural evidence', 'Prison warden\'s files on inmates claiming non-human contact', 'Asylum administrator\'s notes on patients with impossible delusions', 'University administrator\'s correspondence regarding suppressed research', 'Banking investigator\'s records of financial transactions with impossible parties', 'Customs official\'s seized cargo manifests listing prohibited imports'],
        ['Photography studio\'s collection of images showing unexplained phenomena', 'Art dealer\'s authentication reports on works of impossible origin', 'Antiquarian\'s inventory listing items with supernatural provenance', 'Translator\'s notes on texts written in undeciphered languages', 'Cryptographer\'s analysis of coded messages with otherworldly content', 'Retired investigator\'s private case files on unsolved mysteries'],
      ]
    },
    travel_hazards: {
      id: 'travel_hazards',
      name: 'Travel Hazards',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Road signs directing traffic to destinations that don\'t exist', 'Train schedules including stops at abandoned stations', 'Ship routes passing through areas of impossible ocean depth', 'Flight paths crossing airspace that doesn\'t appear on maps', 'Bus services operating to towns that were never incorporated', 'Taxi drivers refusing fares to specific addresses'],
        ['Hotel accommodations in buildings that show no occupancy', 'Restaurant meals containing ingredients not found in nature', 'Gas stations selling fuel with properties that violate chemistry', 'Toll roads collecting payments for passage through private dimensions', 'Bridge crossings spanning rivers that flow backwards', 'Tunnel passages leading to destinations different from entry points'],
        ['Weather conditions changing impossibly rapidly during journey', 'Compass readings pointing toward locations outside normal geography', 'Map references showing current location in multiple places simultaneously', 'Transportation delays caused by obstacles that shouldn\'t exist', 'Vehicle breakdowns involving mechanical failures unknown to engineering', 'Communication disruptions preventing contact with outside world'],
        ['Border crossings requiring documentation for countries not recognized', 'Customs inspections of luggage containing items not packed', 'Security checkpoints screening for threats not identified by authorities', 'Immigration procedures for travelers from nonexistent origins', 'Quarantine protocols for exposure to substances unknown to medicine', 'Emergency services responses to locations impossible to reach'],
        ['Accommodation bookings at establishments operating outside normal business', 'Meal services providing food produced by impossible agriculture', 'Shopping opportunities for goods manufactured using unknown processes', 'Entertainment venues featuring performances not possible with human talent', 'Tourist attractions located in places not accessible by conventional means', 'Guide services leading to destinations existing in alternate realities'],
        ['Transportation connections requiring transfers through non-corporeal spaces', 'Travel documents issued by authorities not recognized by government', 'Currency exchange for money not printed by official mints', 'Travel insurance covering risks not acknowledged by underwriters', 'Medical assistance for conditions requiring treatment unknown to physicians', 'Emergency evacuation from locations outside normal space-time'],
      ]
    },
    climactic_revelations: {
      id: 'climactic_revelations',
      name: 'Climactic Revelations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Reality is unstable simulation maintained by alien intelligence', 'Human consciousness exists as temporary arrangement of cosmic forces', 'Earth serves as breeding ground for entities beyond human comprehension', 'History contains deliberate falsehoods concealing humanity\'s true origins', 'Physical laws operate differently in locations of supernatural significance', 'Time moves non-linearly with past and future existing simultaneously'],
        ['Multiple dimensions occupy same space accessed through specific conditions', 'Human DNA contains sequences implanted by non-terrestrial beings', 'Dreams provide access to shared unconscious realm monitored by entities', 'Language shapes reality with certain words possessing literal power', 'Death represents transition to existence in higher-dimensional space', 'Mathematics describes universe containing more variables than humans perceive'],
        ['Consciousness exists independently of brain activity as quantum phenomenon', 'Ancient civilizations achieved technology through supernatural collaboration', 'Modern science deliberately ignores evidence contradicting materialist worldview', 'Government agencies maintain secret contact with non-human intelligences', 'Religious traditions preserve accurate knowledge disguised as mythology', 'Art and music serve as communication medium with otherworldly entities'],
        ['Evolution guided by intelligence operating according to alien agenda', 'Natural disasters result from conflicts between supernatural forces', 'Technology development follows predetermined path established by entities', 'Human behavior influenced by psychic broadcasts from unknown sources', 'Geography contains locations existing partially outside normal reality', 'Weather patterns controlled by entities manipulating atmospheric conditions'],
        ['Economic systems designed to serve purposes beyond human understanding', 'Educational institutions suppress knowledge of humanity\'s true situation', 'Medical establishment conceals evidence of non-human influence on health', 'Legal systems operate under laws established by non-terrestrial authority', 'Military forces secretly prepare for conflicts with supernatural threats', 'Communication networks monitored by intelligence transcending human capacity'],
        ['Transportation systems facilitate movement between parallel dimensions', 'Energy resources extracted from sources existing outside physical universe', 'Food production involves materials originating from alien environments', 'Entertainment industry promotes content influencing human psychology toward specific ends', 'Scientific research directed toward goals established by non-human intelligence', 'Entire human civilization serves as component in cosmic mechanism beyond comprehension'],
      ]
    },
    investigation_consequences: {
      id: 'investigation_consequences',
      name: 'Investigation Consequences',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Investigator becomes target of cult elimination efforts', 'Family members threatened to discourage continued investigation', 'Professional reputation destroyed through character assassination', 'Financial resources depleted by mysterious legal complications', 'Home and workplace subjected to supernatural harassment', 'Personal relationships strained by increasingly paranoid behavior'],
        ['Government surveillance initiated based on suspicious activities', 'Academic career terminated due to controversial research interests', 'Legal prosecution threatened for violations of obscure regulations', 'Medical condition develops requiring treatment from specialized physicians', 'Mental health questioned by concerned friends and colleagues', 'Physical safety compromised by unknown assailants'],
        ['Privacy invaded by parties with unlimited resources and motivation', 'Property vandalized with symbols warning against further investigation', 'Communication intercepted by organizations monitoring supernatural research', 'Travel restricted by mysterious transportation difficulties', 'Employment terminated for absences related to investigation activities', 'Social isolation increases as acquaintances avoid contact'],
        ['Health insurance cancelled due to claims involving unusual injuries', 'Banking services restricted following suspicious financial activity', 'Utility services disrupted by problems affecting only investigator\'s property', 'Mail delivery interrupted with packages containing threatening messages', 'Phone service monitored with calls redirected to unknown numbers', 'Internet access restricted with searches triggering automatic surveillance'],
        ['Medical records altered to show history of mental instability', 'Educational credentials questioned through bureaucratic challenges', 'Legal standing undermined by civil suits from unknown plaintiffs', 'Tax status investigated for violations of regulations not publicly available', 'Driver\'s license suspended for traffic violations not committed', 'Professional licenses revoked for ethical violations not documented'],
        ['Credit rating destroyed by debts attributed to investigator\'s identity', 'Criminal record established through charges filed in distant jurisdictions', 'Immigration status questioned despite citizenship documentation', 'Military service record altered to show dishonorable discharge', 'Medical history modified to indicate contagious disease requiring quarantine', 'Identity theft results in investigator\'s existence questioned by authorities'],
      ]
    },
    recovery_opportunities: {
      id: 'recovery_opportunities',
      name: 'Recovery Opportunities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Peaceful evening with trusted friend who accepts investigator\'s experiences', 'Visit to childhood location evoking positive memories of normalcy', 'Participation in community event celebrating human achievements', 'Creative activity producing work of beauty affirming life\'s meaning', 'Physical exercise in natural environment free from supernatural influence', 'Religious or spiritual practice providing comfort and perspective'],
        ['Volunteer work helping people with conventional problems', 'Educational activity learning about subjects unrelated to investigation', 'Social gathering with people unaware of supernatural threats', 'Artistic appreciation experiencing beauty created by human talent', 'Romantic relationship with partner accepting investigator\'s unusual life', 'Family reunion reconnecting with relatives maintaining normal perspectives'],
        ['Professional success in work unrelated to supernatural investigation', 'Medical treatment successfully addressing physical health problems', 'Legal victory resolving practical problems through legitimate channels', 'Financial stability achieved through conventional economic activity', 'Educational achievement mastering subject requiring disciplined study', 'Athletic accomplishment demonstrating mastery over physical challenges'],
        ['Charitable contribution making positive difference in others\' lives', 'Mentoring relationship guiding younger person toward healthy development', 'Pet companionship providing unconditional affection and loyalty', 'Travel experience visiting locations untouched by supernatural influence', 'Cultural activity celebrating human traditions and customs', 'Intellectual pursuit advancing understanding of natural phenomena'],
        ['Therapeutic relationship with counselor trained in trauma recovery', 'Support group meeting with others sharing similar experiences', 'Meditation practice developing inner calm and emotional balance', 'Hobby engagement providing relaxation and personal satisfaction', 'Community service contributing to projects improving local conditions', 'Educational opportunity teaching skills useful for conventional life'],
        ['Business relationship establishing financial independence from investigation', 'Living arrangement providing safe environment free from supernatural threats', 'Transportation access enabling travel without dependence on others', 'Communication network including contacts unrelated to investigation', 'Healthcare relationship with medical professionals treating conventional conditions', 'Future planning developing goals independent of supernatural concerns'],
      ]
    },
    twist_revelations: {
      id: 'twist_revelations',
      name: 'Twist Revelations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Trusted ally revealed as cult infiltrator reporting investigator\'s activities', 'Key evidence planted by opposition to misdirect investigation', 'Important witness discovered to be supernatural entity testing investigator', 'Crucial location exists simultaneously in multiple dimensions', 'Vital clue leads to investigator\'s own suppressed memories', 'Essential contact turns out to be investigator\'s future self'],
        ['Critical discovery proves previous investigation conclusions completely wrong', 'Important organization revealed as front for opposing faction', 'Key document written by investigator during period of forgotten possession', 'Crucial artifact belongs to investigator\'s family bloodline', 'Vital witness claims investigator participated in events not remembered', 'Essential location accessible only to those with specific genetic markers'],
        ['Critical evidence exists only when observed by particular individuals', 'Important ally revealed as investigator\'s own alternate timeline version', 'Key mystery already solved by investigator in previous life', 'Crucial threat originates from investigator\'s own unconscious mind', 'Vital protection requires embracing rather than resisting supernatural influence', 'Essential truth discoverable only by losing rather than maintaining sanity'],
        ['Critical enemy revealed as investigator\'s own descendant from future', 'Important mystery solved by information investigator provided without realizing', 'Key location reached by traveling through investigator\'s own dreams', 'Crucial knowledge accessible only through temporary death experience', 'Vital ally exists only as shared hallucination among investigators', 'Essential artifact created by investigator\'s actions in alternate timeline'],
        ['Critical threat neutralized only by investigator accepting permanent transformation', 'Important victory achieved by losing rather than winning conflict', 'Key revelation obtained by questioning rather than discovering truth', 'Crucial solution requires collaborating with rather than opposing enemy', 'Vital success demands sacrificing rather than preserving what investigator values', 'Essential resolution achieved through inaction rather than decisive action'],
        ['Critical understanding gained by accepting rather than rejecting impossible reality', 'Important progress made by forgetting rather than remembering crucial information', 'Key breakthrough occurs by abandoning rather than pursuing investigation', 'Crucial insight achieved by trusting rather than doubting unreliable sources', 'Vital truth revealed by embracing rather than resisting madness', 'Essential resolution requires investigator becoming what they originally sought to stop'],
      ]
    },
    environmental_hazards: {
      id: 'environmental_hazards',
      name: 'Environmental Hazards',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Underground chambers filled with gas causing hallucinations', 'Ancient burial grounds radiating energy affecting mental stability', 'Abandoned buildings containing architectural features inducing vertigo', 'Natural caves with acoustic properties amplifying whispered voices', 'Forest areas where compasses point in impossible directions', 'Water sources contaminated with substances unknown to chemistry'],
        ['Mountain peaks experiencing gravitational anomalies', 'Desert regions where sand dunes shift in geometrical patterns', 'Ocean areas with currents flowing in defiance of tidal forces', 'Swamp locations where plant growth follows alien mathematical sequences', 'Urban areas with streets that rearrange themselves overnight', 'Rural areas where seasonal changes occur in wrong temporal order'],
        ['Arctic regions with ice formations exhibiting impossible crystalline structures', 'Tropical areas with weather patterns violating meteorological principles', 'Coastal areas with tides following lunar cycles of nonexistent celestial bodies', 'Valley regions where sound travels in ways that violate acoustic laws', 'Hill areas with slopes ascending in directions that defy topography', 'River areas with water flowing uphill without external pumping'],
        ['Bridge structures spanning distances longer than architectural specifications', 'Tunnel systems connecting locations farther apart than excavation allows', 'Building interiors containing more space than exterior dimensions permit', 'Room areas with corners adding up to more than 360 degrees', 'Stairway structures ascending infinitely without reaching destination', 'Corridor areas extending beyond building boundaries shown on blueprints'],
        ['Garden areas with soil supporting plant species from different climate zones', 'Lake areas with depths exceeding geological surveys of underlying bedrock', 'Island areas appearing on maps but unlocatable by navigation equipment', 'Peninsula areas connected to mainland by routes not shown on surveys', 'Canyon areas with echo delays exceeding distance calculations', 'Cliff areas with shadows falling in directions opposite to light sources'],
        ['Factory areas with machinery operating without identifiable power sources', 'Warehouse areas storing more goods than spatial measurements accommodate', 'Office areas with floor plans changing between employee shifts', 'Hospital areas with patient rooms numbered in sequences violating mathematics', 'School areas with classrooms teaching subjects not included in curriculum', 'Church areas with architecture incorporating religious symbols from multiple incompatible traditions'],
      ]
    },
    communication_methods: {
      id: 'communication_methods',
      name: 'Communication Methods',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Coded newspaper advertisements using ancient symbolic languages', 'Radio transmissions broadcast on frequencies not allocated by authorities', 'Telephone calls to numbers that ring without connecting to actual phones', 'Mail delivery to post office boxes registered under impossible names', 'Telegraph messages transmitted to addresses not served by wire networks', 'Message placement in library books never checked out by patrons'],
        ['Signal transmission using mirrors reflecting light in coded patterns', 'Smoke signals sent from locations with no visible fire sources', 'Bell ringing following rhythmic patterns conveying specific meanings', 'Flag signaling using colors not visible to unenhanced human vision', 'Drum beating carrying messages over distances exceeding sound travel', 'Horn sounding producing tones that resonate at impossible frequencies'],
        ['Graffiti appearing overnight on walls under constant surveillance', 'Chalk marks drawn in patterns erased by unauthorized personnel', 'Stone arrangement forming symbols recognizable only to initiated members', 'Tree carving creating messages in bark of protected forest areas', 'Sand patterns drawn on beaches washed away by tidal action', 'Snow patterns formed in areas without recent precipitation'],
        ['Carrier pigeon delivery from birds not bred in local aviaries', 'Bottle messages found on shores without recent tidal deposits', 'Balloon messages released from locations impossible to reach', 'Kite signaling conducted during weather conditions preventing flight', 'Ground signals visible only from aerial perspectives impossible to achieve', 'Water signals created in liquids without disturbance by external forces'],
        ['Dream communication allowing message exchange during sleep states', 'Telepathic contact established through meditation and concentration techniques', 'Spiritual possession enabling temporary communication through mediums', 'Automatic writing producing messages from unknown sources', 'Ouija board sessions revealing information from non-corporeal entities', 'Séance contact allowing communication with deceased individuals'],
        ['Hypnotic trance enabling access to knowledge not consciously possessed', 'Drug-induced states providing communication channels with alien intelligence', 'Ritual performance opening temporary communication portals', 'Artifact activation enabling message reception from interdimensional sources', 'Geometric pattern arrangement creating communication focal points', 'Astronomical alignment exploitation enabling communication during specific celestial events'],
      ]
    },
    pursuit_tactics: {
      id: 'pursuit_tactics',
      name: 'Pursuit Tactics',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Financial surveillance tracking investigator\'s expenditures and purchases', 'Communication monitoring intercepting telephone and telegraph transmissions', 'Mail surveillance examining investigator\'s correspondence for intelligence', 'Transportation tracking monitoring investigator\'s travel patterns and destinations', 'Social surveillance placing observers among investigator\'s acquaintances', 'Professional surveillance infiltrating investigator\'s workplace and colleagues'],
        ['Academic surveillance monitoring investigator\'s research activities and library usage', 'Medical surveillance tracking investigator\'s health records and treatment', 'Legal surveillance filing false charges to restrict investigator\'s movement', 'Property surveillance placing observers in buildings near investigator\'s residence', 'Vehicle surveillance following investigator using inconspicuous automobiles', 'Photographic surveillance documenting investigator\'s activities for intelligence analysis'],
        ['Electronic surveillance using advanced listening devices in private locations', 'Technological surveillance employing equipment unknown to conventional science', 'Supernatural surveillance using entities capable of dimensional observation', 'Psychic surveillance employing individuals with enhanced perception abilities', 'Animal surveillance training creatures to monitor investigator\'s activities', 'Environmental surveillance modifying investigator\'s surroundings to gather intelligence'],
        ['Identity surveillance assuming investigator\'s persona for infiltration purposes', 'Document surveillance forging investigator\'s credentials to access restricted information', 'Credential surveillance invalidating investigator\'s identification through bureaucratic manipulation', 'Record surveillance altering investigator\'s official history in government databases', 'Reference surveillance corrupting investigator\'s professional recommendations', 'Background surveillance investigating investigator\'s personal history for leverage'],
        ['Intimidation surveillance threatening investigator through mysterious incidents', 'Harassment surveillance subjecting investigator to psychological pressure', 'Sabotage surveillance damaging investigator\'s property and equipment', 'Disinformation surveillance spreading false information about investigator\'s activities', 'Isolation surveillance alienating investigator from friends and allies', 'Discreditation surveillance undermining investigator\'s reputation and credibility'],
        ['Elimination surveillance preparing to terminate investigator\'s investigation permanently', 'Replacement surveillance substituting investigator with loyal duplicate', 'Conversion surveillance attempting to recruit investigator as double agent', 'Possession surveillance influencing investigator\'s behavior through supernatural control', 'Memory surveillance altering investigator\'s recollections of important events', 'Reality surveillance manipulating investigator\'s perception of truth and facts'],
      ]
    }
  }
};
