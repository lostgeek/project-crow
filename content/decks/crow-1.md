---
level1: [{"id": "C1", "nrdb_id": "da83b390-66b8-4f4b-810a-2b65d8834a13", "title": "Corp"},{"id": "R1", "nrdb_id": "ef7871d7-e785-40a4-8798-6269e59a094c", "title": "Runner"}]
level2: [{"id": "C2", "nrdb_id": "043e3bec-1c6e-4dc9-9dbb-ef0b9f50c9fb", "title": "Corp"},{"id": "R2", "nrdb_id": "2f412b02-ebf8-4cd7-a7d0-1b6ef4de1fd5", "title": "Runner"}]
level3: [{"id": "C3", "nrdb_id": "77caa2a2-8a11-4bf6-8356-c33165c39a61", "title": "Corp"},{"id": "R3", "nrdb_id": "fc0adb6b-4d84-46a9-ba71-7450958b8771", "title": "Runner"}]
level4: [{"id": "C4", "nrdb_id": "7f01874f-ade2-47ec-aed8-3ca75b45fb40", "title": "Corp"},{"id": "R4", "nrdb_id": "7ffcaea5-85f5-4aa3-9103-7b9dc4655768", "title": "Runner"}]
---

:Toc{}

# CROW 1: Valencia vs. NBN: Controlling the Message

This is the first edition of Project CROW and came out in August 2019. It is made for beginners familiar with System Core 2019. 
The campaign starts off with a match of :Card{name="Reina Roja"} vs. :Card{name="NBN: Making News"} and progresses in 4 Steps to the classic :Card{name="Valencia Estevez"} vs. :Card{name="NBN: Controlling the Message"} matchup and introduces and discusses the use of new cards step by step.
The final decks are the winning Corporation of [Worlds 2018](https://netrunnerdb.com/en/decklist/52512/america-ctm-worlds-2018-1st-place-) and an adjusted version of the winning Runner deck of the [Taunton Regional 2019](https://netrunnerdb.com/en/decklist/56195/fredpi-val-1st-at-taunton-regional-15-person-event-).

# Stage 1

Coming out of the SC19 meta, one of the central cards that is introduced in this step is :Card{name="Hard-Hitting News"} (HHN in short). This is the central card in the matchup and what the whole game will revolve around.

Let's take it apart: HHN only triggers if a run has been made in the previous turn, so the Runner controls this part of the card. This means as the Runner try to only run if you've got sufficient money or know for sure they do not have a HHN in hand. For what amount of money the Runner should have, there are two limits. If they are above 8c, they can in any case remove all 4 tags the card gives them. Since the card is a terminal, the Corp cannot use the fact that the Runner is tagged until their next turn, so if you can clear all 4 tags, you're fine. This may still leave the Runner behind broken economically. The second level is if the Runner has a similar or larger credit total than the Corp. Since the card costs 3 to play, is a trace\[4\], the Runner has 1 link, and Making News typically has 2 recurring credits, the Runner cannot get hit, if they have 2 more credits than the Corp. Even if only a few credits shy, it rarely is advantageous for the Corp to go down to 0 credits just to land those 4 tags, if the Runner is able to remove them next turn anyways.

Another new card is :Card{name="Rashida Jaheem"}, which is a good tempo card for the Corp. They will typically install it in the scoring remote and it draws them cards and gives them credits to boost them in their game plan.

::NrdbDecks
---
:nrdb_ids: level1
---

#C1
Your game plan is to build a scoring remote together with :Card{name="Ash 2X3ZB9CY"} and :Card{name="Red Herrings"}, while making centrals (especially R&D) a hassle to run with :Card{name="Data Raven" text="Data Ravens"} and :Card{name="Hunter" text="Hunters"}. Install :Card{name="Daily Business Show"} and :Card{name="PAD Campaign" text="PAD Campaigns"} out in the open, to generate drip economy and keep HQ clean. You have the threat of HHN to make trashing your assets unviable. 

If the Runner has to drop low in credits to keep up, you can use HHN to tag them. This might force the Runner to give up the economic war and "go tag-me" (stay tagged). The Reina deck does not neccessarily need its resources and going tag-me has the benefit of making the :Card{name="Data Raven" text="Data Ravens"} and :Card{name="Hunter" text="Hunters"} ineffective. The Runner can now try to win by getting good accesses off of HQ and R&D. If they do not win fast enough, you can use :Card{name="Psychographics"} to score your final points especially together with :Card{name="Project Beale"} for some ridiculously large amounts of agenda points. Keep in mind: a single 13-advanced Project Beale will give you 7 points to win the game.

#R1
This is a rather straight-forward Anarch build that is the backbone of many competitive decks. The faction has some great draw cards and can leverage this to draw into their good money cards. This deck even imports :Card{name="Diesel"} to generate a bit more draw and fuel a rather aggressive deck. The economy comes from a variety of money cards, with :Card{name="Daily Casts"} being a new card outside of the SC19 card pool. Get them all out cheaply with :Card{name="Patchwork"} and :Card{name="Career Fair"} and keep your credit total up. As already stated, HHN is a threat that is best countered by having money.

As for your breakers, this deck includes the conspiracy breaker suite of :Card{name="Paperclip"}, :Card{name="Black Orchestra"} and :Card{name="MKUltra"}, which was introduced in the Flashpoint cycle. These breakers can be discarded into your Heap (and can even make you some money off of :Card{name="Patchwork"} while doing so). When you're encountering a piece of ice, you can install the corresponding breaker directly out of your heap and then proceed to break the subroutines. As a downside, these breakers are not the most efficient ones. Especially MKUltra is awful against the ICE that the Corp deck is running, costing 6c to break both :Card{name="Data Raven"} and :Card{name="Hunter"} without your :Card{name="Ice Carver"}. You can consider not installing it at all until you find your Ice Carver and just paying the trace on Data Raven, but keep in mind that Making News can boost the trace.

Using these sub-optimal breakers is fine though, because it enables you to play one of the best draw cards in the game: :Card{name="Inject"}. This card throws your heap breakers into your heap, while giving you all the rest that you draw. Together with :Card{name="Patchwork"} and :Card{name="Career Fair"} you have got strong tools to deal with these huge bursts of card draw and get set up quickly.

Your game plan is to dig through your deck quickly and make money until you have found all the breakers that you need. The Corp deck uses :Card{name="Daily Business Show"} (DBS in short) to keep HQ clean. There are two ways to deal with this. If you're ahead in economy, you can try to trash them as soon as you see them. Keep in mind though that this might make you too poor to contest their scoring remote or even worse, get you in range of HHN. If you do this, the Corp will sooner or later have a number of Agendas in HQ and you can use Legwork to get them efficently.  If you're even further ahead, you can also consider trashing their :Card{name="PAD Campaign" text="PAD Campaigns"} as well, to keep them poor.

If you cannot contest their assets, you will have to focus on their scoring remote and R&D. Use :Card{name="The Maker's Eye"} to fish for agendas in R&D and keep enough money to be able to run their scoring remote. With :Card{name="Ash 2X3ZB9CY"} and :Card{name="Red Herrings"} it might as well be that you'll have to run it twice to get to the agenda.

There might come a point, where you have to make an essential run (e.g., because they just installed and double advanced something in the remote), but drop below a safe amount of money doing so. Don't be afraid to get hit by HHN. At this point, you can "go tag-me" (keep the tags). If you do, their :Card{name="Data Raven" text="Data Ravens"} and :Card{name="Hunter" text="Hunters"} are blank now. Just take more tags and go for good central accesses and try to win before they punish you for keeping those tags around.

And one final thing: You can use :Card{name="Stimhack" text="Stimhacks"} liberally. This Corp deck is designed to lead up to the Controlling the Message matchup, which does typically not run any damage cards, so you can assume that there are no :Card{name="Snare!"} or similar damage cards in the Corp deck.
::

# Stage 2
Several things have changed in this second part of the mini-series towards the Val vs CtM matchup. For one the Runner ID! You're now playing :Card{name="Valencia Estevez"}, which which has one up- and one downside to it.. Downside: She has a 50 card limit and no link, which makes the Runner more vulnerable to HHN and other traces. But you get something more valuable for it. One bad publicity at the start of the game. This works great to mitigate the less than optimal breakers and helps trashing the Corps assets easier.

A key card in the Runner deck is :Card{name="Rebirth"}: This gives the Runner the option to change their ID into any other Anarch ID and while this sounds like a great variety of options, there's one target, that is picked more than 95% of the time: :Card{name="Omar Keung"}. I would recommend playing :Card{name="Rebirth"} in this deck for now as if it said "change your ID into Omar". The second part of this combination is :Card{name="The Turning Wheel"}, which replaces the mutli-access cards in the previous deck.

On the other side, the Corps scoring plan has changed completely. They now include the Agenda :Card{name="Quantum Predictive Model"}, which they will typically install behind a :Card{name="Data Raven"}. When the Runner accesses it tagged, it goes to the Corps score area. But that is not all: The Corp also has access to :Card{name="Exchange of Information"}, which allows them to swap agendas with the Runner, if they're tagged.

Besides these defensive options, they also have :Card{name="Calibration Testing"} and :Card{name="Team Sponsorship"}. The first helps them to score Agendas directly from HQ by installing them and using Calibration Testing to advance them. The second helps them to keep up the Tempo after the score by allowing them to install one card from Archives or HQ. This will typically be :Card{name="Rashida Jaheem"} and :Card{name="Calibration Testing"}, to fetch the next agenda and continue scoring.

::NrdbDecks
---
:nrdb_ids: level2
---

#C2
You will have to balance the ice you install on centrals. On HQ and R&D, try having :Card{name="Enigma"} or :Card{name="Hunter"} as the outermost piece of ice, since they can bounce off of them otherwise (run at the server and let the end the run subroutine fire) to get a :Card{name="The Turning Wheel"} token. Sometimes it is better to not install or rez ice and try to make more money than the Runner instead to threaten the HHN and make them not run instead.

Your general game plan will be installing and advancing things behind Data Ravens, which might be :Card{name="Quantum Predictive Model"} or some other Agenda. Running through the Raven costs the Runner a lot of money, so you can be brave and try scoring a :Card{name="Priority Requisition"} masked as a QPM.

#R2
Your general game plan hasn't changed, but your tools have. As said previously, you have access to :Card{name="Rebirth"} into :Card{name="Omar Keung"}, to pressure centrals very effectively. Also you can punish the Corp for installing simple End the Run ice on R&D and HQ and farm :Card{name="The Turning Wheel"} tokens by bouncing off of the ice (making a run and letting the subroutine fire / choosing to end the run on Data Raven). Using all of your 4 clicks to farm tokens can be the correct choice in many situations.

Other than this, your deck hasn't changed, but the Corp deck has changed very much. You will have to focus on trashing their :Card{name="Team Sponsorship"} and :Card{name="Calibration Testing"} to keep them from getting out of control and do so while trying to not get hit by HHN.

Regarding them installing :Card{name="Quantum Predictive Model"} behind :Card{name="Data Raven"} and maybe even double advancing them, you will have to find a middle ground between making them score those and checking for 3-point agendas.
::

# Stage 3
We're now reaching the current meta. Thees decks would stand a pretty good chance in the current competitive meta, even if some card choices would seem a bit odd.

On the Corp side we've now finally switched over to our destination ID: :Card{name="NBN: Controlling the Message"}. The ID itself is directly helping to protect assets. Together with it goes :Card{name="Mumbad Virtual Tour"} (MVT in short), which forces the Runner to trash it, if able. If they're not able, they're typically in range of HHN anyways, which makes this a great card. This is used to protect assets further, which allows to play the more fragile econ Asset: :Card{name="Commercial Bankers Group"}. This asset cannot be protected by ice and has a meager trash cost of 2. But on a MVT it is a great threat that will spin Corp economy out of control very fast.

Furthermore they now have access to :Card{name="Global Food Initiative"}, which is a 5/3 agenda, that only gives 2 points to the Runner. This is great to not lose games as quickly, when trying to swap a QPM for a 3-pointer with :Card{name="Exchange of Information"}.

On the Runner side we have some more tools in our arsenal to deal with this Corp threat as well. One key card is :Card{name="Mining Accident"}, which can be devastating. The Runner already starts the game with one bad publicity. If they get a second or third one, the game can be over pretty quickly for the Corp, who can lose their entire board state to a rampantly trashing Runner.

Secondly we're adding some normal programs back to the deck. One is :Card{name="D4v1d"}, which in this matchup only targets :Card{name="Tollbooth"}, but allows you to get through that one very cheaply. The other and more important one is :Card{name="Aumakua"}, which is a virus AI breaker that gets stronger whenever you access a card. And since there are a lot of un-iced cards to be accessed, a single Aumakua can often solve all your ice problems.

To combat this, the Corp includes :Card{name="IP Block"}, which normally is a rather porous piece of ice. The Runner can just beat the trace\[3\] and get through unharmed and even without needing their barrier breaker. But if they have an AI breaker installed, this tags them, which in turn activates the End the Run subroutine.

::NrdbDecks
---
:nrdb_ids: level3
---

#C3
The key card in this iteration is :Card{name="Commercial Bankers Group"} together with :Card{name="Mumbad Virtual Tour"}. It is your central econ engine and games will be decided by whether you can keep them on the board or not.

Be aware that installing an unprotected CBG can be very dangerous and should typically only be done, if you have multiple of them in HQ.

#R3
Dealing with the :Card{name="Mumbad Virtual Tour"} + :Card{name="Commercial Bankers Group"} combination can be tricky. If they install two cards in one server on turn 1, one way of checking it is using :Card{name="Dirty Laundry"}. Since you're paying 2 to play the event, you're dipping below 5c (even taking bad publicity into account) and can not trash the MVT anymore. If you find a CBG on it, you still have 2c to trash it and just take the tag from the Corp trace. Afterwards you can still play Sure Gamble to get back up in credits and remove the tag.

You have some cards that are special tech against this matchup. :Card{name="Turntable"} helps you undo the Corp swapping agendas with :Card{name="Exchange of Information"}. And :Card{name="No One Home"} makes it so that the Corp needs a significant money lead to land HHN.

But the most interesting card here is :Card{name="Mining Accident"}. It can be either an ok way of making the Corp poorer or a great way of punishing a Corp for being poor. Even a single additional bad publicity can help you take apart their board state very much.
::

# Stage 4
We're finally there. This is the matchup of the :Card{name="NBN: Controlling the Message"} deck that won [Worlds 2018](https://netrunnerdb.com/en/decklist/52512/america-ctm-worlds-2018-1st-place-) against a slightly modified version of a Valencia that won the [Taunton Regional 2019](https://netrunnerdb.com/en/decklist/56195/fredpi-val-1st-at-taunton-regional-15-person-event-).

CtM got its final pieces of the toolkit with :Card{name="Resistor"}, a good piece of ICE that punishes the Runner for going tag-me. :Card{name="Market Forces"}, which is a tempo-positive form of :Card{name="Closed Accounts"} and most importantly :Card{name="15 Minutes"} and :Card{name="AR-Enhanced Security"} (ARES in short). The first is often used to close out the game or fire :Card{name="Team Sponsorship"}. The second is the vital part of this deck.

We've swapped the 3 QPM style of CtM against a 3 ARES style. This means the Corp wants to score one of those very early on and roll from there.

The Runner deck got its final important parts as well. :Card{name="Hacktivist Meeting"} is a great current that can slow the Corp down to a standstill. As an additional cost, every time the Corp rezzes a non-ice card, they need to trash a card randomly out of HQ. Beware when playing in meatspace though: The Runner gets to do the randomization, but only points on the card to be trashed. They do not get to see what they hit. This can (and has) lead to a lot of game losses in tournaments.

The second card is :Card{name="Falsified Credentials"}, which is great to check Corp remotes, gain money and get :Card{name="Aumakua"} tokens all at the same time.

Congratulations! You've reached the current meta for this specific matchup. I hope this was an interesting journey and has shown you some of the ins and outs of this matchup. There's a lot more to learn and I'm sure a lot of experienced players would love to play this matchup with you. Feel free to join the #beginners channel on Stimslack and/or DM me under @lostgeek.

::NrdbDecks
---
:nrdb_ids: level4
---

#R4
## Erratum
The two :Card{name="Corroders"} should be :Card{name="Paperclips"} instead. Unfortunately I cannot edit the decks at this point, so please keep this in mind when building / importing to jinteki.net
::