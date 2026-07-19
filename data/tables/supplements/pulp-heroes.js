/**
 * Pulp Heroes Adventure Tables
 * D66 random tables
 */

export default {
  supplement: {
    id: 'pulp-heroes-adventure',
    name: 'Pulp Heroes Adventure Tables',
    version: '1.0',
    enabled: true
  },

  tables: {
    information_sources: {
      id: 'information_sources',
      name: 'Information Sources',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Police Station Records Room - Files on current and past investigations', 'Newspaper Morgue Archive - Historical articles and unreported stories', 'City Hall Document Vault - Official records and permit applications', 'Hospital Patient Registry - Medical records revealing violent patterns', 'Bank Transaction Ledgers - Financial records showing money movement', 'Hotel Guest Registration - Identity records and suspicious stays'],
        ['Immigration Office Files - Entry records and deportation documentation', 'Courthouse Filing Cabinet - Legal proceedings and case outcomes', 'Prison Visitor Logs - Connection records between inmates and outside world', 'Morgue Autopsy Reports - Death examination revealing murder details', 'Library Card Catalogs - Reading habits revealing research interests', 'Post Office Mail Records - Communication patterns between suspects'],
        ['Telephone Company Records - Call logs showing contact networks', 'Transportation Ticket Sales - Travel patterns and escape routes', 'Employment Agency Files - Job placement records and worker movements', 'Insurance Claim Documents - Suspicious accidents and payout patterns', 'Real Estate Transaction Records - Property ownership and transfer patterns', 'Utility Company Billing - Service records showing occupancy and usage'],
        ['School Enrollment Records - Educational backgrounds and family connections', 'Military Service Files - Combat experience and discipline records', 'Union Membership Rolls - Labor organization affiliations and activities', 'Church Membership Lists - Religious affiliations and community connections', 'Club Association Records - Social organization memberships and activities', 'Professional License Bureau - Certification records and disciplinary actions'],
        ['Pawn Shop Transaction Logs - Stolen goods tracking and seller identification', 'Taxi Company Dispatch Records - Transportation patterns and passenger information', 'Delivery Service Route Logs - Package distribution and customer patterns', 'Emergency Services Call Records - Police, fire, and medical response patterns', 'Port Authority Manifest Records - Cargo and passenger shipping documentation', 'Construction Permit Applications - Building project approvals and contractor information'],
        ['Divorce Court Proceedings - Marital dispute records and financial disclosures', 'Bankruptcy Filing Documents - Financial failure records and asset transfers', 'Adoption Agency Records - Child placement and family background information', 'Mental Health Facility Records - Patient treatment and commitment documentation', 'Cemetery Plot Purchase Records - Burial arrangements and family grief patterns', 'Private Detective Case Files - Investigative records from competing agencies'],
      ]
    },
    surveillance_opportunities: {
      id: 'surveillance_opportunities',
      name: 'Surveillance Opportunities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Abandoned Building Rooftop - High vantage point overlooking target area', 'Parked Vehicle with Tinted Windows - Mobile observation post on street', 'Coffee Shop Window Seat - Natural cover for extended observation', 'Hotel Room Across Street - Elevated position with clear sightlines', 'Construction Site Hiding Spot - Industrial camouflage among equipment', 'Public Park Bench - Open area surveillance with escape routes'],
        ['Telephone Pole Maintenance Position - Utility worker disguise with height advantage', 'Restaurant Kitchen Delivery Door - Back entrance monitoring with cover story', 'Fire Escape Landing - Building exterior position with multiple exit options', 'Subway Platform Observation - Underground transit monitoring point', 'Church Bell Tower - Religious building height advantage', 'Library Reading Room - Quiet interior space for long-term observation'],
        ['Warehouse Loading Dock - Industrial area with cargo truck cover', 'Bridge Walkway Position - Elevated transportation route monitoring', 'Theater Balcony Seat - Entertainment venue with crowd cover', 'Office Building Window - Professional environment with legitimate presence', 'Dock Worker Position - Harbor area with shipping activity cover', 'Street Vendor Cart - Mobile observation post with business disguise'],
        ['Apartment Building Stairwell - Residential interior with multiple floors', 'Factory Smoke Stack Platform - Industrial height with wide area view', 'Radio Tower Observation Deck - Communication facility with panoramic view', 'Market Stall Booth - Commercial area with natural crowd cover', 'Hospital Visitor Waiting Area - Medical facility with extended stay justification', 'Train Station Platform - Transportation hub with traveler disguise'],
        ['Funeral Home Parlor - Mortuary service with grief cover story', 'Gymnasium Balcony - Sports facility with recreational activity cover', 'Art Gallery Corner - Cultural venue with browsing patron disguise', 'Barbershop Waiting Chair - Service business with conversation opportunity', 'Police Station Public Area - Law enforcement facility with citizen business cover', 'Courthouse Steps - Legal building with public access justification'],
        ['Prison Visitor Area - Correctional facility with family visit cover', 'Bank Lobby Seating - Financial institution with transaction waiting cover', 'Department Store Window Display - Retail location with shopping disguise', 'Taxi Driver Seat - Mobile surveillance with passenger service cover', 'Emergency Room Waiting Area - Medical facility with injured person cover', 'Cemetery Monument - Burial ground with mourning visitor disguise'],
      ]
    },
    breaking_and_entering_targets: {
      id: 'breaking_and_entering_targets',
      name: 'Breaking & Entering Targets',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Corrupt Judge\'s Private Residence - Judicial home containing bribery evidence', 'Crime Boss Office Suite - Criminal headquarters with organization records', 'Police Commissioner Home - Law enforcement leader with corruption secrets', 'City Hall Record Room - Municipal building with permit fraud documentation', 'Bank Safety Deposit Vault - Financial institution with hidden criminal assets', 'Newspaper Editor Private Office - Media headquarters with suppressed story files'],
        ['District Attorney File Cabinet - Prosecution office with case fixing evidence', 'Hospital Administrator Office - Medical facility with malpractice cover-up records', 'Factory Owner Mansion - Industrial leader home with worker exploitation evidence', 'Union Boss Headquarters - Labor organization office with corruption documentation', 'Real Estate Developer Office - Property business with zoning bribery files', 'Insurance Company Claims Department - Coverage business with fraud investigation records'],
        ['Organized Crime Family Home - Criminal residence with territorial operation plans', 'Corrupt Politician Campaign Office - Electoral headquarters with illegal funding records', 'Professional Assassin Safe House - Killer hideout with contract documentation', 'Black Market Fence Warehouse - Stolen goods broker with inventory records', 'Bootlegger Distribution Center - Alcohol smuggler with route and customer information', 'Numbers Racket Collection Office - Illegal gambling with betting records'],
        ['Government Contract Office - Public works with bid-rigging documentation', 'Immigration Officer Private Home - Federal employee with deportation bribery evidence', 'Military Supply Depot - Armed forces facility with weapons trafficking records', 'Scientific Research Laboratory - Experimental facility with unethical testing documentation', 'Art Gallery Private Storage - Cultural institution with stolen masterpiece evidence', 'Pharmaceutical Company Executive Office - Drug business with safety cover-up files'],
        ['Transportation Company Dispatch - Shipping business with smuggling route documentation', 'Construction Company Headquarters - Building business with safety violation records', 'Entertainment Venue Owner Office - Recreation business with vice operation documentation', 'Financial Investment Firm - Securities business with embezzlement evidence', 'Legal Aid Office - Attorney practice with client betrayal documentation', 'Social Services Department - Government agency with child welfare corruption files'],
        ['Private Detective Agency - Investigation business with blackmail client records', 'Auction House Appraisal Room - Art business with forgery authentication documentation', 'Shipping Company Manifest Office - Import business with contraband cargo records', 'Educational Institution Endowment Office - Academic facility with donation misuse files', 'Religious Organization Treasury - Spiritual institution with charity fund embezzlement records', 'International Trade Company - Commerce business with foreign espionage documentation'],
      ]
    },
    document_types: {
      id: 'document_types',
      name: 'Document Types',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Financial Ledger - Accounting records showing illegal money movement', 'Correspondence Files - Personal letters revealing criminal relationships', 'Contract Agreement - Legal documents outlining illegal business arrangements', 'Photograph Collection - Visual evidence of criminal activities or blackmail material', 'Meeting Minutes - Official records of conspiracy planning sessions', 'Property Deed - Real estate ownership documents with fraudulent transfers'],
        ['Medical Records - Healthcare documentation covering up suspicious deaths', 'Employee Roster - Personnel lists revealing criminal organization structure', 'Shipping Manifest - Cargo documentation concealing smuggling operations', 'Legal Brief - Court documents showing case fixing or judicial corruption', 'Insurance Policy - Coverage documents with suspicious beneficiary changes', 'Government Permit - Official authorization obtained through bribery'],
        ['Personal Diary - Private journal documenting criminal activities and plans', 'Bank Statement - Financial records showing suspicious deposits and withdrawals', 'Travel Itinerary - Transportation schedules for criminal operation timing', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
      ]
    },
    city_districts: {
      id: 'city_districts',
      name: 'City Districts',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Financial Quarter - Steel towers hiding dirty money', 'Factory District - Smokestacks and worker tenements', 'Harbor Front - Docks where anything can be smuggled', 'Theatre District - Neon lights masking darker shows', 'Government Plaza - Marble facades concealing corruption', 'Old Town - Cobblestone streets and gaslight shadows'],
        ['Mansion Row - Where the powerful live behind gates', 'Chinatown - Narrow alleys and ancient traditions', 'Little Italy - Family loyalties and old vendettas', 'University Quarter - Young minds and radical ideas', 'Rail Yards - Freight trains and hobo camps', 'Cemetery District - Where secrets are buried deep'],
        ['Slums - Desperate people in crumbling buildings', 'Market District - Commerce and black market deals', 'Red Light District - Vice hidden behind velvet curtains', 'Industrial Zone - Factories working around the clock', 'Residential Heights - Middle class trying to stay clean', 'Warehouse Quarter - Storage for legitimate and illegal goods'],
        ['Financial Ruins - Buildings abandoned since the crash', 'Artists\' Quarter - Bohemians and revolutionary thinkers', 'Medical District - Hospitals and questionable experiments', 'Transport Hub - Buses, trolleys, and human trafficking', 'Park District - Green spaces hiding dangerous meetings', 'Immigrant Quarter - New arrivals seeking the American dream'],
        ['Banking Row - Vaults holding more than just money', 'Newspaper District - Where truth goes to die', 'Church Quarter - Faith corrupted by worldly concerns', 'Shopping District - Boutiques funded by crime money', 'Sports District - Stadiums where bets are fixed', 'Hillside Estates - Mansions with panoramic views of the city\'s sins'],
        ['Underground District - Tunnels and forgotten spaces', 'Airfield Area - Where mysterious cargo arrives by night', 'Bridge District - Connecting points where deals are made', 'Power Plant Area - Where the city\'s energy comes from', 'Abandoned Quarter - Buildings left empty after economic collapse', 'Restricted Zone - Military or government areas off-limits to civilians'],
      ]
    },
    street_types: {
      id: 'street_types',
      name: 'Street Types',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Main Boulevard - Wide avenue with heavy traffic', 'Back Alley - Narrow passage between buildings', 'Dead End Street - No exit, perfect for cornering prey', 'Underground Tunnel - Subway or sewer access', 'Elevated Walkway - Bridge or platform above street level', 'Cobblestone Lane - Old-fashioned street with poor lighting'],
        ['Industrial Road - Truck route between factories', 'Residential Street - Lined with apartment buildings', 'Commercial Strip - Shops and businesses side by side', 'Waterfront Boardwalk - Wooden planks over water', 'Railroad Crossing - Tracks intersecting with road', 'Construction Zone - Torn up street with equipment'],
        ['Park Path - Winding route through green space', 'Steep Hill - Challenging terrain for vehicles', 'Bridge Span - Crossing over water or other streets', 'Rooftop Route - Jumping between building tops', 'Service Alley - Where deliveries and trash collection happen', 'Trolley Line - Street with electric car tracks'],
        ['Market Street - Crowded with vendors and shoppers', 'Mansion Drive - Private road through wealthy area', 'Factory Row - Lined with industrial buildings', 'Pier Extension - Wooden platform jutting into water', 'Stairway Street - Steep steps instead of regular road', 'Utility Corridor - Service road for power and water lines'],
        ['Cemetery Path - Gravel road through burial grounds', 'Abandoned Street - No longer maintained or patrolled', 'One-Way Passage - Traffic flows in single direction', 'Circular Drive - Road that loops back on itself', 'Covered Walkway - Street with roof or awning overhead', 'Emergency Route - Road used by police and fire vehicles'],
        ['Secret Passage - Hidden route known only to few', 'Drainage Canal - Concrete waterway through urban area', 'Loading Dock - Where trucks pick up and deliver goods', 'Fire Escape Route - External stairway on building side', 'Underground Mall - Subterranean shopping and meeting area', 'Restricted Access - Road blocked to general public'],
      ]
    },
    buildings_civilian: {
      id: 'buildings_civilian',
      name: 'Buildings - Civilian',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Apartment Complex - Multiple families, thin walls', 'Corner Grocery - Small market with gossiping owner', 'Diner - 24-hour coffee and late-night conversations', 'Barbershop - Where men gather to discuss neighborhood news', 'Laundromat - Steam and secrets mix in the wash', 'Pharmacy - Pills and potions for various ailments'],
        ['Movie Theater - Escape from reality in darkened rooms', 'Hotel - Temporary lodging with permanent problems', 'Office Building - Multi-story professional spaces', 'Department Store - Multiple floors of consumer goods', 'Restaurant - Fine dining with not-so-fine clientele', 'Gas Station - Fuel and information for travelers'],
        ['Public Library - Books and quiet corners for meetings', 'Post Office - Communication hub and federal presence', 'Bank Branch - Local finance and safety deposit boxes', 'Tailor Shop - Custom clothing and costume alterations', 'Shoe Repair - Cobbler who sees everyone\'s comings and goings', 'Flower Shop - Beautiful blooms hiding ugly transactions'],
        ['Boarding House - Cheap rooms for transient residents', 'Newsstand - Information hub and rumor mill', 'Pawn Shop - Where stolen goods find new owners', 'Photography Studio - Portraits and possibly blackmail material', 'Music Store - Instruments and soundproof practice rooms', 'Bakery - Early morning activity and overhear conversations'],
        ['Insurance Office - Policies on buildings that burn down suspiciously', 'Travel Agency - Tickets for those who need to disappear quickly', 'Jewelry Store - Valuable items and security systems', 'Bookstore - Rare volumes and intellectual meetings', 'Art Gallery - Expensive pieces and wealthy patrons', 'Funeral Home - Final arrangements and family secrets'],
        ['Dance Studio - Lessons and after-hours activities', 'Print Shop - Where documents can be forged', 'Radio Repair - Electronic expertise and eavesdropping equipment', 'Antique Shop - Old items with mysterious histories', 'Tea House - Quiet conversations over imported leaves', 'Boarding School - Young minds being shaped by unknown influences'],
      ]
    },
    buildings_criminal: {
      id: 'buildings_criminal',
      name: 'Buildings - Criminal',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Hidden Speakeasy - Behind unmarked door, password required', 'Underground Casino - Basement gambling with high stakes', 'Numbers Runner Office - Illegal lottery operations', 'Loan Shark Headquarters - Where debts are collected violently', 'Fence Operation - Where stolen goods are bought and sold', 'Drug Den - Opium, cocaine, and other illegal substances'],
        ['Bootlegger Warehouse - Alcohol storage and distribution', 'Prostitution House - Vice disguised as boarding house', 'Fight Club - Illegal boxing with betting', 'Counterfeit Workshop - Fake money and document production', 'Gang Hideout - Meeting place for criminal organization', 'Black Market Clinic - Medical treatment, no questions asked'],
        ['Arms Dealer Shop - Weapons disguised as legitimate business', 'Chop Shop - Where stolen cars are dismantled', 'Smuggler\'s Den - Import/export of illegal goods', 'Bookie Joint - Where sporting bets are placed illegally', 'Protection Racket Office - "Insurance" against trouble', 'Kidnapper\'s Hideout - Where victims are held'],
        ['Murder Inc. Headquarters - Professional assassination services', 'Extortion Center - Where blackmail schemes are coordinated', 'Illegal Distillery - Homemade alcohol production', 'Human Trafficking Hub - Modern slavery operations', 'Corrupt Union Hall - Labor organization turned criminal', 'Underground Fight Arena - Gladiatorial combat for entertainment'],
        ['Safe House - Temporary refuge for criminals on the run', 'Money Laundering Front - Clean business hiding dirty cash', 'Assassination Planning Room - Where hits are organized', 'Criminal Court - Mob justice dispensed outside the law', 'Torture Chamber - Information extraction facility', 'Body Disposal Site - Where evidence disappears permanently'],
        ['Criminal Training Ground - Where thugs learn their trade', 'Surveillance Center - Illegal monitoring and intelligence gathering', 'Forgery Workshop - False documents and identity papers', 'Hijacker\'s Base - Where stolen cargo is processed', 'Arsonist\'s Laboratory - Fire-starting materials and planning', 'Criminal Mastermind\'s Lair - Hidden headquarters of major villain'],
      ]
    },
    buildings_official: {
      id: 'buildings_official',
      name: 'Buildings - Official',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Police Station - Law enforcement and holding cells', 'City Hall - Municipal government and public records', 'Courthouse - Justice dispensed with varying degrees of honesty', 'Federal Building - FBI and other government agencies', 'Post Office - Mail service and federal investigations', 'Fire Station - Emergency response and community service'],
        ['Prison - Where criminals serve time or plan escapes', 'Military Base - Armed forces and classified operations', 'Government Office - Bureaucracy and public services', 'Tax Office - Revenue collection and financial investigations', 'Customs House - Import inspection and smuggling prevention', 'Public Works - Infrastructure maintenance and city planning'],
        ['District Attorney Office - Prosecution and legal proceedings', 'Public Defender Office - Legal aid for those who can\'t afford lawyers', 'Coroner\'s Office - Death investigations and autopsies', 'Registry Office - Birth certificates, marriage licenses, and vital records', 'Housing Authority - Public housing and urban development', 'Health Department - Disease control and medical oversight'],
        ['Immigration Office - Processing new arrivals and deportations', 'Election Commission - Voting oversight and ballot counting', 'Public Library - Government documents and civic information', 'Municipal Court - Minor offenses and traffic violations', 'Planning Commission - Zoning decisions and development permits', 'Water Department - Utility management and infrastructure'],
        ['Transit Authority - Public transportation oversight', 'Parks Department - Recreation facilities and green space management', 'Building Inspector Office - Construction compliance and safety codes', 'License Bureau - Permits and professional certifications', 'Public Safety Department - Emergency coordination and disaster response', 'City Auditor Office - Financial oversight and accountability'],
        ['Zoning Board - Land use decisions and urban planning', 'Public Health Laboratory - Disease testing and medical research', 'Emergency Services Dispatch - 911 coordination center', 'Municipal Archives - Historical records and document storage', 'Public Utilities Commission - Utility regulation and rate setting', 'Government Intelligence Office - Surveillance and counterintelligence'],
      ]
    },
    buildings_industrial: {
      id: 'buildings_industrial',
      name: 'Buildings - Industrial',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Steel Mill - Heavy industry and dangerous machinery', 'Textile Factory - Fabric production and sweatshop conditions', 'Auto Assembly Plant - Car manufacturing and union activity', 'Chemical Plant - Industrial chemicals and toxic waste', 'Food Processing Plant - Canning and meat packing', 'Power Plant - Electricity generation and infrastructure'],
        ['Warehouse Complex - Storage and distribution center', 'Oil Refinery - Petroleum processing and environmental hazards', 'Shipyard - Vessel construction and maritime industry', 'Aircraft Factory - Airplane manufacturing and defense contracts', 'Munitions Plant - Weapons manufacturing and explosives', 'Pharmaceutical Factory - Drug production and medical supplies'],
        ['Paper Mill - Publishing materials and deforestation', 'Cement Plant - Construction materials and heavy dust', 'Brewery - Legal alcohol production and distribution', 'Tobacco Factory - Cigarette manufacturing and processing', 'Machine Shop - Tool production and metalworking', 'Electronics Factory - Radio and communication equipment'],
        ['Construction Site - New building under development', 'Mining Operation - Resource extraction and dangerous work', 'Lumber Mill - Wood processing and furniture manufacturing', 'Glass Factory - Window and bottle production', 'Rubber Plant - Tire manufacturing and synthetic materials', 'Cold Storage - Refrigerated warehouse for perishables'],
        ['Scrap Yard - Metal recycling and salvage operations', 'Train Repair Shop - Locomotive maintenance and parts', 'Foundry - Metal casting and industrial manufacturing', 'Printing Press - Newspaper and book production', 'Research Laboratory - Industrial experiments and development', 'Testing Facility - Quality control and safety evaluation'],
        ['Fuel Depot - Gasoline storage and distribution', 'Loading Dock - Cargo transfer and shipping coordination', 'Assembly Line - Mass production and worker efficiency', 'Quality Control Center - Product inspection and standards', 'Industrial Kitchen - Large-scale food preparation', 'Experimental Workshop - Prototype development and innovation'],
      ]
    },
    atmospheric_details: {
      id: 'atmospheric_details',
      name: 'Atmospheric Details',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Thick fog rolling off the harbor, muffling sounds', 'Rain-slicked streets reflecting neon signs', 'Steam rising from manholes and industrial vents', 'Cigarette smoke creating hazy clouds indoors', 'Flickering streetlights casting dancing shadows', 'Snow falling silently on empty midnight streets'],
        ['Blazing heat from factory furnaces warming the night', 'Cold wind whistling through steel and concrete', 'Acrid smell of chemicals and burning coal', 'Distant jazz music drifting from hidden clubs', 'Police sirens wailing across the urban landscape', 'Church bells tolling mournfully over the city'],
        ['Gasoline and motor oil scents from busy streets', 'Fresh bread aroma mixing with garbage and decay', 'Perfume and gin lingering in expensive establishments', 'Gunpowder residue hanging in the air after violence', 'Musty odors of old books and forgotten corners', 'Salty sea breeze carrying messages from distant shores'],
        ['Broken glass crunching underfoot on sidewalks', 'Footsteps echoing in empty hallways and stairwells', 'Typewriter keys clicking urgently in newsrooms', 'Radio static crackling with distant voices', 'Machinery humming and grinding in factory districts', 'Telephone ringing persistently in abandoned offices'],
        ['Bright searchlight beams cutting through darkness', 'Candlelight flickering in basement speakeasies', 'Harsh fluorescent lighting in government buildings', 'Golden sunset casting long shadows across rooftops', 'Lightning illuminating crime scenes in stark detail', 'Moonlight creating silver pathways on water surfaces'],
        ['Crowded spaces with bodies pressed close together', 'Empty buildings echoing with ghosts of past activities', 'Luxurious settings hiding desperate poverty underneath', 'Spartan environments revealing hidden wealth', 'Chaotic scenes of violence and destruction', 'Unnaturally quiet moments before explosive action'],
      ]
    },
    civilian_npcs: {
      id: 'civilian_npcs',
      name: 'Civilian NPCs',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Factory Worker - Honest laborer struggling to feed family', 'Shop Owner - Small business trying to survive tough times', 'Secretary - Office worker who overhears important conversations', 'Taxi Driver - Night shift operator who sees everything', 'Janitor - Invisible cleaner with access to private spaces', 'Nurse - Medical professional treating suspicious injuries'],
        ['Teacher - Educator concerned about students\' home situations', 'Librarian - Keeper of information and quiet observer', 'Waitress - Restaurant server who remembers every customer', 'Elevator Operator - Silent witness to building comings and goings', 'Street Vendor - Corner merchant with neighborhood connections', 'Housewife - Domestic manager aware of family secrets'],
        ['Mechanic - Auto repair expert who works on suspicious vehicles', 'Mailman - Postal worker who notices unusual correspondence', 'Bank Teller - Financial worker processing questionable transactions', 'Hotel Clerk - Hospitality worker registering mysterious guests', 'Photographer - Artist capturing images others want hidden', 'Musician - Performer working in establishments with criminal ties'],
        ['Seamstress - Clothing worker mending garments with bullet holes', 'Barber - Grooming professional who hears neighborhood gossip', 'Delivery Boy - Young courier carrying packages without asking questions', 'Boarding House Manager - Landlord renting to desperate tenants', 'Market Vendor - Food seller observing daily neighborhood rhythms', 'Theater Usher - Entertainment worker witnessing clandestine meetings'],
        ['Telephone Operator - Communications worker overhearing private calls', 'Shoe Shine Boy - Street worker positioned to observe foot traffic', 'Florist - Flower arranger delivering to funerals and celebrations', 'Ice Delivery Man - Service worker entering homes when residents are away', 'Newspaper Boy - Young vendor hearing adult conversations', 'Church Organist - Religious musician aware of confession secrets'],
        ['Night Watchman - Security guard protecting buildings with valuable contents', 'Streetcar Conductor - Transit worker familiar with passenger patterns', 'Pharmacy Assistant - Medical aide dispensing questionable prescriptions', 'Radio Technician - Electronics expert monitoring unusual frequencies', 'Gravedigger - Cemetery worker burying more than just natural deaths', 'Social Worker - Government employee investigating family problems'],
      ]
    },
    authority_figures: {
      id: 'authority_figures',
      name: 'Authority Figures',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Police Beat Cop - Street-level law enforcement with flexible morals', 'Police Detective - Investigator balancing justice and survival', 'Police Commissioner - Top cop making deals with dangerous people', 'FBI Agent - Federal investigator with national perspective', 'District Attorney - Prosecutor choosing which cases to pursue', 'Superior Court Judge - Magistrate dispensing purchased justice'],
        ['Municipal Judge - Local official handling minor cases and major bribes', 'City Mayor - Political leader balancing public image and private interests', 'City Councilman - Local politician trading votes for personal gain', 'Fire Chief - Emergency services leader aware of suspicious blazes', 'Building Inspector - Safety official overlooking dangerous violations', 'Health Inspector - Public safety enforcer with selective vision'],
        ['Tax Collector - Revenue officer discovering unreported income sources', 'Customs Officer - Border agent controlling international smuggling', 'Harbor Master - Port authority managing legitimate and illicit cargo', 'Public Works Director - Infrastructure manager overseeing construction corruption', 'School Principal - Educational leader protecting institutional reputation', 'Hospital Administrator - Medical facility manager hiding malpractice'],
        ['Prison Warden - Correctional facility head managing escape attempts', 'Parole Officer - Criminal rehabilitation supervisor with parolee connections', 'Public Defender - Court-appointed lawyer with overwhelming caseloads', 'Court Clerk - Legal system administrator processing sensitive documents', 'Zoning Board Chairman - Development overseer approving questionable projects', 'Election Supervisor - Voting official ensuring desired outcomes'],
        ['Military Officer - Armed forces leader involved in civilian affairs', 'Veterans Administrator - Former soldier advocate managing benefits fraud', 'Immigration Officer - Border control agent processing suspicious entries', 'Postal Inspector - Mail service investigator tracking criminal correspondence', 'Treasury Agent - Federal financial investigator following money trails', 'Prohibition Agent - Alcohol enforcement officer during and after dry years'],
        ['Public Housing Director - Government housing manager controlling tenant access', 'Transit Authority Chief - Transportation official managing route corruption', 'Parks Commissioner - Recreation facility manager hiding criminal activities', 'Water Department Head - Utility manager controlling essential services', 'License Bureau Chief - Permit official selling approvals to highest bidders', 'Emergency Services Coordinator - Disaster response leader with suspicious timing'],
      ]
    },
    criminal_types: {
      id: 'criminal_types',
      name: 'Criminal Types',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Street Thug - Low-level muscle for hire', 'Pickpocket - Skilled finger artist working crowds', 'Burglar - Breaking and entering specialist', 'Con Artist - Smooth talker running elaborate scams', 'Numbers Runner - Illegal lottery collection agent', 'Bootlegger - Alcohol smuggler and distributor'],
        ['Gang Lieutenant - Mid-level organizer with territory', 'Professional Hitman - Assassin for hire with no conscience', 'Safecracker - Vault-opening expert with steady hands', 'Smuggler - Import/export specialist for illegal goods', 'Fence - Stolen goods broker with extensive network', 'Drug Dealer - Narcotics distributor with deadly product'],
        ['Loan Shark - Money lender with violent collection methods', 'Protection Racket Boss - Insurance salesman with criminal twist', 'Kidnapper - Abduction specialist holding victims for ransom', 'Arsonist - Fire starter for insurance money and intimidation', 'Forger - Document falsification artist with artistic skills', 'Human Trafficker - People smuggler treating humans as cargo'],
        ['Crime Family Boss - Organized crime leader with political connections', 'Corrupt Union Leader - Labor organizer using workers for criminal purposes', 'Black Market Doctor - Medical professional treating criminals without questions', 'Bent Lawyer - Legal counsel helping clients break the law', 'Crooked Accountant - Financial expert hiding illegal money', 'Dirty Banker - Financial institution officer laundering criminal profits'],
        ['Gambling House Owner - Vice establishment operator taking percentage', 'Brothel Madam - Prostitution manager protecting girls and profits', 'Cult Leader - Religious manipulator using faith for criminal purposes', 'Mad Scientist - Researcher conducting illegal experiments', 'International Spy - Foreign agent stealing national secrets', 'Corporate Criminal - Business executive using company for illegal activities'],
        ['Political Fixer - Behind-scenes operator selling government access', 'Jury Tamperer - Court system corruptor influencing legal outcomes', 'Evidence Destroyer - Crime scene cleaner eliminating proof', 'Witness Intimidator - Testimony suppressor using fear tactics', 'Information Broker - Intelligence seller trading secrets for money', 'Criminal Mastermind - Master planner orchestrating elaborate schemes'],
      ]
    },
    professional_npcs: {
      id: 'professional_npcs',
      name: 'Professional NPCs',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Family Doctor - Physician treating everyone from babies to bullet wounds', 'Newspaper Editor - Information gatekeeper deciding what gets published', 'Radio Station Manager - Broadcasting executive controlling public messages', 'Bank President - Financial institution leader managing institutional money', 'Factory Foreman - Industrial supervisor managing worker productivity', 'Hotel Manager - Hospitality executive discretely serving diverse clientele'],
        ['Theater Owner - Entertainment venue proprietor hosting diverse events', 'Restaurant Chef - Culinary professional serving everyone from saints to sinners', 'Department Store Manager - Retail executive moving legitimate and questionable merchandise', 'Insurance Investigator - Claims examiner determining payout legitimacy', 'Private Detective - Independent investigator taking cases police won\'t touch', 'Funeral Director - Death industry professional arranging final arrangements'],
        ['Real Estate Agent - Property broker facilitating legitimate and suspicious transactions', 'Stockbroker - Investment advisor managing money from various sources', 'Advertising Executive - Marketing professional crafting public persuasion campaigns', 'Art Dealer - Cultural broker authentication expensive pieces', 'Jewelry Appraiser - Valuable goods expert examining suspicious acquisitions', 'Antique Dealer - Historical items merchant with mysterious inventory sources'],
        ['Architect - Building designer creating structures for various purposes', 'Engineer - Technical professional working on infrastructure projects', 'Chemist - Laboratory scientist developing products for multiple applications', 'Photographer - Image documentation expert capturing moments others want hidden', 'Translator - Language specialist facilitating international communications', 'Librarian - Information professional managing access to knowledge'],
        ['Veterinarian - Animal doctor treating injuries that might not be animal-related', 'Dentist - Oral health professional providing discreet medical services', 'Pharmacist - Medication expert dispensing prescriptions without excessive questions', 'Optometrist - Vision specialist helping people see clearly or remain unrecognized', 'Psychiatrist - Mental health professional treating trauma from various sources', 'Social Worker - Community service professional investigating family situations'],
        ['Employment Agency Director - Job placement specialist matching workers with opportunities', 'Trade Union Organizer - Labor representative protecting worker interests', 'Church Minister - Religious leader providing spiritual guidance and sanctuary', 'School Superintendent - Educational administrator managing institutional operations', 'Hospital Surgeon - Medical specialist treating emergency cases', 'University Professor - Academic professional researching specialized subjects'],
      ]
    },
    npc_motivations: {
      id: 'npc_motivations',
      name: 'NPC Motivations',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Survival - Just trying to make it through each day', 'Family Protection - Keeping loved ones safe from harm', 'Financial Security - Escaping poverty through any means necessary', 'Personal Revenge - Settling an old score that still burns', 'Professional Ambition - Climbing the ladder regardless of consequences', 'Addiction Feeding - Serving a habit that controls their life'],
        ['Blackmail Compliance - Forced cooperation due to compromising secrets', 'Debt Repayment - Working off money owed to dangerous creditors', 'Information Trading - Selling knowledge for personal advantage', 'Territory Protection - Defending turf from rival encroachment', 'Loyalty Honor - Serving organization or person above self-interest', 'Fear Avoidance - Staying alive by avoiding dangerous attention'],
        ['Power Acquisition - Gaining influence and control over others', 'Reputation Building - Establishing respect through feared reputation', 'Past Redemption - Making amends for previous terrible mistakes', 'Justice Seeking - Pursuing fairness when legal system fails', 'Truth Discovery - Uncovering hidden facts regardless of danger', 'Community Service - Helping neighborhood despite personal risk'],
        ['Religious Devotion - Serving higher spiritual purpose', 'Ideological Commitment - Fighting for political or social beliefs', 'Love Protection - Safeguarding romantic partner from threats', 'Child Welfare - Ensuring next generation has better opportunities', 'Professional Pride - Maintaining standards despite corrupt environment', 'Personal Freedom - Escaping control or oppression'],
        ['Curiosity Satisfaction - Learning secrets just to know them', 'Thrill Seeking - Pursuing excitement through dangerous activities', 'Status Maintenance - Preserving social position and respectability', 'Legacy Creation - Building something lasting for future generations', 'Guilt Atonement - Making up for past failures or betrayals', 'Honor Defense - Protecting personal or family reputation'],
        ['Greed Fulfillment - Accumulating wealth beyond reasonable need', 'Control Exercise - Dominating others for psychological satisfaction', 'Competition Winning - Defeating rivals through superior strategy', 'Security Establishment - Creating safe space in dangerous world', 'Knowledge Preservation - Protecting important information from destruction', 'Chaos Creation - Destroying existing order for personal or philosophical reasons'],
      ]
    },
    npc_relationships: {
      id: 'npc_relationships',
      name: 'NPC Relationships',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Blood Relatives - Family members sharing genetic bonds and secrets', 'Marriage Partners - Spouses navigating legal and emotional commitments', 'Business Associates - Professional partners sharing financial interests', 'Criminal Accomplices - Partners in illegal activities', 'Childhood Friends - Long-term personal relationships with shared history', 'Romantic Lovers - Intimate partners outside marriage bounds'],
        ['Mentor-Student - Teaching relationships with knowledge transfer', 'Employer-Employee - Work hierarchies with power dynamics', 'Landlord-Tenant - Property relationships with financial obligations', 'Creditor-Debtor - Financial relationships with payment pressures', 'Blackmailer-Victim - Coercive relationships based on secret knowledge', 'Informant-Handler - Intelligence relationships with information exchange'],
        ['Doctor-Patient - Medical relationships with confidential knowledge', 'Lawyer-Client - Legal relationships with privileged communication', 'Priest-Confessor - Religious relationships with spiritual secrets', 'Neighbor Relations - Geographic proximity creating social obligations', 'Club Members - Organizational relationships with shared interests', 'Political Allies - Ideological relationships with mutual support'],
        ['Rival Competitors - Antagonistic relationships with conflicting goals', 'Former Partners - Dissolved relationships with lingering connections', 'Protective Guardian - Caretaking relationships with responsibility dynamics', 'Dependent Ward - Support relationships with vulnerability factors', 'Witness-Observer - Informational relationships based on seen events', 'Victim-Perpetrator - Harm relationships with unresolved trauma'],
        ['Secret Lovers - Hidden romantic relationships requiring discretion', 'Adopted Family - Chosen relationships stronger than blood bonds', 'War Veterans - Military service relationships with shared combat experience', 'Addiction Partners - Substance relationships enabling mutual destruction', 'Conspiracy Members - Secret organization relationships with hidden agendas', 'Revenge Seekers - Retribution relationships motivated by past wrongs'],
        ['Protection Racket - Criminal relationships with enforced payment', 'Double Agents - Betrayal relationships with divided loyalties', 'Hostage Situations - Coercion relationships with captive dynamics', 'Arranged Marriages - Forced relationships serving family or political purposes', 'Gambling Partners - Vice relationships with shared financial risks', 'Unacknowledged Relations - Hidden family connections with secret parentage'],
      ]
    },
    npc_current_activities: {
      id: 'npc_current_activities',
      name: 'NPC Current Activities',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Planning Robbery - Organizing theft of valuable target', 'Hiding Evidence - Concealing proof of criminal activity', 'Meeting Informant - Exchanging information for money or favors', 'Fleeing Town - Preparing hasty departure from dangerous situation', 'Paying Debts - Settling financial obligations to avoid violence', 'Seeking Revenge - Pursuing retribution against past enemy'],
        ['Covering Tracks - Eliminating traces of previous activities', 'Recruiting Allies - Building network for upcoming operation', 'Surveilling Target - Gathering intelligence on future victim', 'Negotiating Deal - Arranging terms for illegal transaction', 'Laundering Money - Converting illegal profits into legitimate assets', 'Establishing Alibi - Creating false evidence of innocence'],
        ['Seeking Protection - Looking for safety from dangerous threats', 'Trading Information - Selling secrets for personal advantage', 'Destroying Documents - Eliminating written evidence of crimes', 'Intimidating Witness - Silencing potential testimony through fear', 'Smuggling Goods - Moving illegal items across borders or territories', 'Bribing Official - Purchasing government cooperation or blindness'],
        ['Planning Escape - Preparing emergency exit from current situation', 'Gathering Blackmail - Collecting compromising information on targets', 'Recruiting Criminals - Hiring muscle or specialists for operations', 'Celebrating Victory - Enjoying success of recent criminal enterprise', 'Mourning Loss - Grieving death or betrayal of close associate', 'Preparing Disguise - Creating false identity for covert operations'],
        ['Staking Territory - Claiming new area for criminal operations', 'Settling Disputes - Resolving conflicts between criminal factions', 'Training Subordinates - Teaching skills needed for illegal activities', 'Counting Profits - Calculating earnings from recent criminal ventures', 'Seeking Medical Care - Getting treatment for injuries from violence', 'Planning Betrayal - Preparing to double-cross current associates'],
        ['Establishing Front - Creating legitimate business to hide illegal activities', 'Mapping Routes - Planning transportation for smuggling operations', 'Testing Loyalty - Determining trustworthiness of organization members', 'Expanding Operations - Growing criminal enterprise into new areas', 'Eliminating Competition - Removing rival criminal organizations', 'Preparing Final Score - Planning retirement heist or ultimate criminal achievement'],
      ]
    },
    street_encounters: {
      id: 'street_encounters',
      name: 'Street Encounters',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Pickpocket attempting to steal from well-dressed victim', 'Street vendor selling suspicious goods from hidden compartments', 'Homeless veteran begging while observing criminal activity', 'Police officer taking envelope from known criminal', 'Taxi driver arguing with passenger about unpaid fare', 'Newspaper boy shouting headlines about recent murder'],
        ['Prostitute fleeing from violent customer or pimp', 'Drug dealer conducting business in plain sight', 'Gang members marking territory with graffiti or violence', 'Bootlegger\'s truck being chased by federal agents', 'Fire department responding to suspicious warehouse blaze', 'Ambulance racing to scene of apparent gang shooting'],
        ['Street preacher warning about moral corruption', 'Political candidate giving impromptu campaign speech', 'Labor organizer distributing leaflets to factory workers', 'Wealthy socialite slumming in poor neighborhood', 'Foreign immigrant asking for directions in broken English', 'Child running away from abusive home situation'],
        ['Professional assassin stalking target through crowd', 'Undercover detective following suspected criminal', 'Corrupt building inspector taking bribes from contractor', 'Numbers runner collecting bets from neighborhood residents', 'Loan shark\'s enforcer collecting overdue payment', 'Fence examining stolen goods in back-alley transaction'],
        ['Kidnapper\'s lookout watching for police interference', 'Arsonist casing building for future fire-setting', 'Con artist running three-card monte game on tourists', 'Smuggler\'s contact waiting for illegal cargo delivery', 'Blackmailer meeting victim to collect payment', 'Hit-and-run driver fleeing scene of vehicular crime'],
        ['Witness to murder trying to decide whether to report', 'Corrupt judge accepting bribes in parked car', 'Criminal mastermind surveying territory for expansion', 'Police informant being threatened by former associates', 'Escaped convict hiding in crowd while avoiding capture', 'Vigilante hero pursuing criminal through busy streets'],
      ]
    },
    ongoing_events: {
      id: 'ongoing_events',
      name: 'Ongoing Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Major Factory Strike - Workers demanding better conditions and pay', 'Mayoral Election Campaign - Candidates making promises they can\'t keep', 'Police Commissioner Scandal - Corruption investigation making headlines', 'Harbor Workers\' Slowdown - Cargo backing up while negotiations continue', 'Federal Prohibition Raid - Government crackdown on illegal alcohol trade', 'Construction of New Skyscraper - Development bringing change and conflict'],
        ['Newspaper Circulation War - Competing papers using any means necessary', 'Religious Revival Movement - Charismatic preacher gathering large following', 'Immigration Deportation Drive - Government targeting foreign-born residents', 'Banking Crisis Aftermath - Financial institutions failing and recovering', 'Public Health Epidemic - Disease outbreak testing city infrastructure', 'Veterans\' Benefit Protest - Former soldiers demanding promised compensation'],
        ['Organized Crime Territorial War - Families fighting for neighborhood control', 'Labor Union Corruption Trial - Leadership accused of criminal activities', 'Real Estate Development Boom - Land speculation driving up prices', 'Anti-Vice Crusade Campaign - Moral reformers targeting entertainment districts', 'Federal Tax Investigation - IRS auditing prominent business leaders', 'Public Works Infrastructure Failure - Utilities breaking down citywide'],
        ['International Spy Ring Exposure - Foreign agents discovered operating locally', 'Corporate Merger Battle - Business titans fighting for market dominance', 'Political Assassination Attempt - Violence targeting government officials', 'Criminal Justice System Reform - Calls for changes in police and courts', 'Economic Recovery Initiative - Government programs addressing unemployment', 'Cultural Censorship Controversy - Artistic expression versus moral standards'],
        ['Transportation System Expansion - New routes creating opportunities and problems', 'Educational System Crisis - Schools struggling with funding and quality', 'Military Preparation Campaign - Armed forces readying for potential conflict', 'Scientific Research Breakthrough - New discoveries with unknown implications', 'Environmental Disaster Response - Industrial accident affecting public health', 'Social Welfare Program Implementation - Government assistance creating new bureaucracy'],
        ['Criminal Investigation Task Force - Multi-agency effort targeting organized crime', 'International Trade Dispute - Foreign relations affecting local business', 'Technology Innovation Race - Companies competing to develop new products', 'Agricultural Crisis Impact - Rural problems affecting urban food supply', 'Legal System Backlog Crisis - Courts overwhelmed with pending cases', 'Population Migration Wave - New residents changing neighborhood demographics'],
      ]
    },
    criminal_activities_in_progress: {
      id: 'criminal_activities_in_progress',
      name: 'Criminal Activities in Progress',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Bank Robbery Planning - Crew preparing for vault heist', 'Numbers Racket Collection - Illegal lottery money gathering', 'Bootlegging Operation Delivery - Alcohol smuggling truck route', 'Protection Racket Extortion - Business owners forced to pay', 'Drug Manufacturing Setup - Narcotics production in hidden facility', 'Human Trafficking Transport - Victims being moved against their will'],
        ['Art Theft in Progress - Valuable paintings being stolen from gallery', 'Government Document Heist - Classified papers being copied or stolen', 'Kidnapping for Ransom - Wealthy victim being held for payment', 'Witness Intimidation Campaign - Testimony suppression through threats', 'Evidence Tampering Operation - Crime scene manipulation in progress', 'Money Laundering Transaction - Illegal profits being converted to clean cash'],
        ['Arms Smuggling Shipment - Weapons being moved to criminal buyers', 'Bribery Exchange Meeting - Official corruption payment being made', 'Contract Assassination Attempt - Professional killer stalking target', 'Gambling House Raid Preparation - Police planning to shut down illegal gaming', 'Counterfeiting Workshop Operation - Fake money or documents being produced', 'Arson Attack Preparation - Building being prepared for deliberate fire'],
        ['Police Evidence Theft - Corrupt cops stealing proof of crimes', 'Jury Tampering Effort - Court case outcome being illegally influenced', 'Smuggling Ring Coordination - International goods movement organization', 'Blackmail Material Collection - Compromising information being gathered', 'Safe House Network Establishment - Hiding places being prepared for criminals', 'Criminal Territory Expansion - Gang moving into rival neighborhood'],
        ['Government Contract Fraud - Public works project being manipulated for profit', 'Identity Theft Operation - False papers being created for multiple people', 'Stolen Goods Fencing Network - Hot merchandise distribution system', 'Labor Union Infiltration - Criminal organization taking over legitimate group', 'Corporate Espionage Mission - Business secrets being stolen from competitors', 'Political Campaign Sabotage - Election interference through illegal means'],
        ['Medical Malpractice Cover-up - Healthcare crimes being hidden from authorities', 'Real Estate Fraud Scheme - Property ownership being illegally manipulated', 'Tax Evasion Network - Systematic avoidance of government revenue collection', 'Immigration Document Forgery - False citizenship papers being produced', 'Criminal Justice Corruption - Legal system being manipulated for criminal benefit', 'International Conspiracy Coordination - Multi-national criminal organization meeting'],
      ]
    },
    political_developments: {
      id: 'political_developments',
      name: 'Political Developments',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Mayor Announces Anti-Crime Initiative - New policies targeting organized crime', 'City Council Budget Hearings - Public money allocation debates', 'Police Commissioner Appointment - New law enforcement leadership selection', 'Federal Investigation Launched - Government agents examining local corruption', 'Judicial Reform Proposal - Changes to court system procedures', 'Immigration Policy Changes - New rules affecting foreign-born residents'],
        ['Labor Relations Mediation - Government intervention in worker disputes', 'Public Works Project Approval - Infrastructure development with potential corruption', 'Tax Policy Adjustment - Revenue collection changes affecting businesses', 'Electoral District Redistricting - Voting boundaries being redrawn', 'Government Contract Bidding - Public spending opportunities for private companies', 'Regulatory Enforcement Changes - Rule interpretation affecting business operations'],
        ['International Trade Agreement - Foreign commerce deals affecting local economy', 'Public Health Policy Implementation - Government response to medical issues', 'Educational Funding Debate - School system resource allocation discussions', 'Military Base Expansion Proposal - Armed forces facility development plans', 'Environmental Protection Measures - Conservation policies affecting industry', 'Social Welfare Program Expansion - Government assistance program changes'],
        ['Criminal Justice Reform Initiative - Legal system improvement proposals', 'Public Safety Enhancement Plan - Security measures for citizen protection', 'Economic Development Incentives - Business attraction and retention policies', 'Transportation Infrastructure Upgrade - Travel system improvement projects', 'Housing Development Regulation - Residential construction oversight changes', 'Cultural Arts Funding Decision - Government support for creative community'],
        ['Veterans Affairs Policy Revision - Former military service member benefit changes', 'Agricultural Support Program - Rural community assistance initiative', 'Technology Regulation Proposal - New invention oversight and control measures', 'International Relations Summit - Foreign diplomacy meeting with local impact', 'Public Information Access Debate - Transparency versus security considerations', 'Emergency Preparedness Planning - Disaster response capability development'],
        ['Civil Rights Protection Enforcement - Minority population safety measures', 'Political Party Convention Planning - Electoral organization major gathering', 'Government Transparency Initiative - Public access to official information', 'Public Employee Union Negotiations - Government worker contract discussions', 'Campaign Finance Reform Debate - Political funding regulation proposals', 'Constitutional Amendment Consideration - Fundamental law change discussion'],
      ]
    },
    social_events: {
      id: 'social_events',
      name: 'Social Events',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['High Society Charity Gala - Wealthy elite gathering for public cause', 'Political Campaign Fundraiser - Candidate supporter money collection event', 'Business Association Dinner - Professional networking with hidden agendas', 'Cultural Arts Exhibition Opening - Gallery show attracting diverse crowds', 'Religious Congregation Revival - Spiritual gathering with charismatic leadership', 'Labor Union Solidarity Rally - Worker organization demonstration'],
        ['Neighborhood Block Party - Community celebration with local politics', 'Professional Club Meeting - Exclusive organization gathering', 'University Academic Conference - Educational institution knowledge sharing', 'Hospital Fundraising Benefit - Medical facility financial support event', 'Theatre Season Opening - Entertainment venue debut performance', 'Sports Championship Celebration - Athletic achievement recognition party'],
        ['Wedding Reception - Family joining celebration with community connections', 'Funeral Service - Community mourning with hidden tensions', 'Birthday Milestone Party - Personal celebration with social implications', 'Anniversary Commemoration - Relationship or institution recognition event', 'Graduation Ceremony - Educational achievement recognition', 'Retirement Farewell - Career conclusion celebration with industry implications'],
        ['Holiday Community Festival - Seasonal celebration bringing diverse groups together', 'Ethnic Cultural Celebration - Immigrant community tradition sharing', 'Veterans Reunion Gathering - Former military service member social event', 'Professional Awards Ceremony - Industry recognition with networking opportunities', 'Literary Society Book Discussion - Intellectual gathering with political undertones', 'Musical Performance Concert - Entertainment event with diverse audience'],
        ['Fashion Show Presentation - Style exhibition attracting wealthy patrons', 'Culinary Competition Event - Cooking contest with restaurant industry connections', 'Auction House Estate Sale - Valuable item bidding with questionable provenance', 'Garden Club Exhibition - Horticultural display with social networking', 'Photography Exhibition Opening - Visual art presentation with documentation implications', 'Dance Competition Tournament - Entertainment contest with gambling opportunities'],
        ['Antique Collectors Convention - Historical item enthusiast gathering', 'Automobile Show Exhibition - Vehicle display with technology and status implications', 'Real Estate Investment Seminar - Property development networking event', 'Scientific Research Symposium - Academic knowledge sharing with practical applications', 'Public Speaking Contest - Oratory competition with political networking', 'Secret Society Initiation - Exclusive organization membership ceremony'],
      ]
    },
    industrial_accidents: {
      id: 'industrial_accidents',
      name: 'Industrial Accidents',
      category: 'random-tables',
      rollType: '2d6',
      entries: [
        ['Factory Machinery Explosion - Equipment failure causing casualties', 'Chemical Plant Toxic Leak - Dangerous substance release threatening community', 'Steel Mill Furnace Collapse - High-temperature equipment failure', 'Warehouse Fire Outbreak - Storage facility blaze destroying evidence', 'Construction Site Cave-in - Building project structural failure', 'Power Plant Electrical Failure - Energy facility malfunction causing blackouts'],
        ['Oil Refinery Pipeline Rupture - Petroleum system break causing environmental damage', 'Textile Factory Worker Injury - Industrial equipment harming employee', 'Mining Operation Tunnel Collapse - Underground extraction site failure', 'Railroad Yard Derailment - Train accident affecting cargo and personnel', 'Shipyard Crane Malfunction - Heavy equipment failure during vessel construction', 'Automobile Plant Assembly Line Halt - Production stoppage due to equipment failure'],
        ['Paper Mill Chemical Spill - Manufacturing process accident contaminating area', 'Cement Factory Dust Explosion - Fine particle ignition causing blast', 'Food Processing Plant Contamination - Product safety violation affecting public health', 'Pharmaceutical Laboratory Accident - Drug development facility incident', 'Glass Factory Furnace Overload - High-temperature equipment exceeding safety limits', 'Rubber Plant Equipment Fire - Manufacturing facility blaze'],
        ['Brewery Fermentation Tank Rupture - Alcohol production equipment failure', 'Tobacco Factory Air Quality Crisis - Workplace environment hazard', 'Electronics Assembly Electrical Short - Production line power surge', 'Machine Shop Tool Accident - Precision equipment causing worker injury', 'Lumber Mill Saw Blade Failure - Wood processing equipment malfunction', 'Cold Storage Refrigeration Breakdown - Temperature control system failure'],
        ['Scrap Yard Crane Collapse - Heavy equipment failure in salvage operation', 'Train Repair Shop Fire - Locomotive maintenance facility blaze', 'Foundry Metal Spill - Molten material containment failure', 'Printing Press Ink Contamination - Publishing equipment chemical accident', 'Research Laboratory Equipment Explosion - Scientific facility experimental accident', 'Testing Facility Structural Failure - Quality control building collapse'],
        ['Fuel Depot Tank Rupture - Gasoline storage facility leak', 'Loading Dock Equipment Failure - Cargo handling accident', 'Assembly Line Conveyor Malfunction - Production system mechanical failure', 'Quality Control Center Fire - Inspection facility blaze destroying records', 'Industrial Kitchen Pressure Cooker Explosion - Food service equipment failure', 'Experimental Workshop Chemical Reaction - Research facility uncontrolled experiment'],
      ]
    }
  }
};
