import type { PersonalityCode } from "../types";

export interface FlavorEntry {
  title: string;
  quote: string;
  lifeMotto: string;
}

export const FLAVOR: Record<PersonalityCode, FlavorEntry> = {
  "INTJ-O-C": { title: "The Visionary Architect", quote: "I don't predict the future. I build it.", lifeMotto: "Design it once, build it right." },
  "INTJ-O-H": { title: "The Quiet Innovator", quote: "The best ideas need silence to grow.", lifeMotto: "Think deeply, tread lightly." },
  "INTJ-A-C": { title: "The Master Tactician", quote: "A plan that survives contact with reality is the only plan worth having.", lifeMotto: "Precision beats power." },
  "INTJ-A-H": { title: "The Steady Mastermind", quote: "Real strength doesn't need to announce itself.", lifeMotto: "Build it to last." },

  "INTP-O-C": { title: "The Relentless Inventor", quote: "Every unsolved problem is a personal challenge.", lifeMotto: "Chase the idea until it breaks." },
  "INTP-O-H": { title: "The Curious Wanderer", quote: "I'd rather ask a good question than own a good answer.", lifeMotto: "Follow the interesting thread." },
  "INTP-A-C": { title: "The Analytical Competitor", quote: "Being right isn't luck — it's rigor.", lifeMotto: "Test everything twice." },
  "INTP-A-H": { title: "The Patient Philosopher", quote: "Truth doesn't rush, so neither do I.", lifeMotto: "Understand first, act later." },

  "ENTJ-O-C": { title: "The Visionary Challenger", quote: "Comfort zones don't build empires.", lifeMotto: "Bigger vision, faster pace." },
  "ENTJ-O-H": { title: "The Bold Reformer", quote: "Progress means someone has to move first.", lifeMotto: "Lead change, not just people." },
  "ENTJ-A-C": { title: "The Relentless Executive", quote: "Results speak louder than intentions.", lifeMotto: "Execute like it's already decided." },
  "ENTJ-A-H": { title: "The Steady Commander", quote: "A calm leader wins the long game.", lifeMotto: "Command with a clear head." },

  "ENTP-O-C": { title: "The Fearless Disruptor", quote: "If the rules made sense, someone would've broken them already.", lifeMotto: "Outthink, then outpace." },
  "ENTP-O-H": { title: "The Playful Visionary", quote: "The best ideas start as bad jokes.", lifeMotto: "Stay curious, stay kind." },
  "ENTP-A-C": { title: "The Strategic Provocateur", quote: "I argue to sharpen the idea, not to win.", lifeMotto: "Debate hard, build harder." },
  "ENTP-A-H": { title: "The Grounded Maverick", quote: "Even a wild idea needs solid ground to stand on.", lifeMotto: "Innovate without the chaos." },

  "INFJ-O-C": { title: "The Visionary Advocate", quote: "Quiet conviction moves mountains too.", lifeMotto: "Purpose first, pace second." },
  "INFJ-O-H": { title: "The Gentle Idealist", quote: "I see what could be, and I can't unsee it.", lifeMotto: "Heal what you can reach." },
  "INFJ-A-C": { title: "The Purposeful Achiever", quote: "My ambition has a conscience.", lifeMotto: "Rise with intention." },
  "INFJ-A-H": { title: "The Steady Confidant", quote: "The quietest people carry the deepest convictions.", lifeMotto: "Stay true, stay near." },

  "INFP-O-C": { title: "The Visionary Challenger", quote: "I dream in color and chase it in motion.", lifeMotto: "Feel deeply, achieve boldly." },
  "INFP-O-H": { title: "The Wandering Idealist", quote: "Not all who wander have lost the plot — some are just still writing it.", lifeMotto: "Stay soft, stay true." },
  "INFP-A-C": { title: "The Determined Dreamer", quote: "My ideals aren't fragile — they're fuel.", lifeMotto: "Turn meaning into momentum." },
  "INFP-A-H": { title: "The Gentle Guardian", quote: "I protect what I love quietly, but completely.", lifeMotto: "Small kindnesses, kept daily." },

  "ENFJ-O-C": { title: "The Inspiring Trailblazer", quote: "I don't just believe in people — I bet on them.", lifeMotto: "Lead boldly, lift others higher." },
  "ENFJ-O-H": { title: "The Visionary Mentor", quote: "Growth is contagious when it's genuine.", lifeMotto: "Grow together, gently." },
  "ENFJ-A-C": { title: "The Driven Motivator", quote: "Purpose and ambition aren't opposites — they're partners.", lifeMotto: "Rally the team, raise the bar." },
  "ENFJ-A-H": { title: "The Steady Guide", quote: "Consistency is its own kind of love.", lifeMotto: "Show up, every time." },

  "ENFP-O-C": { title: "The Electric Trailblazer", quote: "I turn 'what if' into 'watch this.'", lifeMotto: "Chase the spark, then run with it." },
  "ENFP-O-H": { title: "The Free-Spirited Connector", quote: "Every stranger is just a friend I haven't heard the story of yet.", lifeMotto: "Stay open, stay warm." },
  "ENFP-A-C": { title: "The Ambitious Optimist", quote: "Hope is great, but I also bring a plan.", lifeMotto: "Dream loud, work steady." },
  "ENFP-A-H": { title: "The Warmhearted Encourager", quote: "The best thing I can build is someone else's confidence.", lifeMotto: "Cheer loud, love louder." },

  "ISTJ-O-C": { title: "The Pragmatic Improver", quote: "I respect tradition enough to know when to upgrade it.", lifeMotto: "Better the process, keep the standard." },
  "ISTJ-O-H": { title: "The Thoughtful Adapter", quote: "Steady doesn't mean stuck.", lifeMotto: "Reliable, but never rigid." },
  "ISTJ-A-C": { title: "The Disciplined Achiever", quote: "Consistency is how I win.", lifeMotto: "Show up. Do it right. Repeat." },
  "ISTJ-A-H": { title: "The Dependable Anchor", quote: "Someone has to be the one people can count on. I don't mind that it's me.", lifeMotto: "Keep your word, always." },

  "ISFJ-O-C": { title: "The Devoted Achiever", quote: "I care hard, and I work hard for the people I care about.", lifeMotto: "Quiet effort, real results." },
  "ISFJ-O-H": { title: "The Nurturing Explorer", quote: "I take care of people, even the ones I just met on this trip.", lifeMotto: "Care first, wherever you are." },
  "ISFJ-A-C": { title: "The Loyal Provider", quote: "Reliability is a love language.", lifeMotto: "Earn trust, keep it forever." },
  "ISFJ-A-H": { title: "The Gentle Caretaker", quote: "The smallest kindness is never wasted.", lifeMotto: "Take care, stay close." },

  "ESTJ-O-C": { title: "The Ambitious Reformer", quote: "I fix what's broken, then I make it better than before.", lifeMotto: "Improve everything, twice." },
  "ESTJ-O-H": { title: "The Practical Modernizer", quote: "Order and progress aren't enemies.", lifeMotto: "Update the system, keep the standard." },
  "ESTJ-A-C": { title: "The Driven Executive", quote: "Winning is a discipline, not an accident.", lifeMotto: "Plan the work, work the plan." },
  "ESTJ-A-H": { title: "The Steady Organizer", quote: "A well-run team is a happy team.", lifeMotto: "Order first, ego last." },

  "ESFJ-O-C": { title: "The Dynamic Motivator", quote: "I bring the energy and the guest list.", lifeMotto: "Rally the room, raise it up." },
  "ESFJ-O-H": { title: "The Welcoming Connector", quote: "There's always room for one more at my table.", lifeMotto: "Everyone belongs somewhere. Here works." },
  "ESFJ-A-C": { title: "The Spirited Achiever", quote: "I show up for people, and I show up to win.", lifeMotto: "Care hard, compete fair." },
  "ESFJ-A-H": { title: "The Warm Host", quote: "A shared meal fixes more than people think.", lifeMotto: "Keep the table full." },

  "ISTP-O-C": { title: "The Fearless Tinkerer", quote: "If it's broken, I'll find a way — even if it's never been done.", lifeMotto: "Figure it out, then push further." },
  "ISTP-O-H": { title: "The Free Explorer", quote: "I don't need a map. I need a reason to move.", lifeMotto: "Stay light, stay curious." },
  "ISTP-A-C": { title: "The Sharp Competitor", quote: "Skill beats talk every time.", lifeMotto: "Master it quietly, prove it loudly." },
  "ISTP-A-H": { title: "The Calm Craftsman", quote: "I let the work speak for itself.", lifeMotto: "Steady hands, quiet mind." },

  "ISFP-O-C": { title: "The Bold Creator", quote: "My art isn't finished until it surprises even me.", lifeMotto: "Make it beautiful, make it count." },
  "ISFP-O-H": { title: "The Free-Spirited Artist", quote: "I follow beauty wherever it leads.", lifeMotto: "Create gently, live fully." },
  "ISFP-A-C": { title: "The Quiet Perfectionist", quote: "I compete with yesterday's version of my own work.", lifeMotto: "Craft it until it's true." },
  "ISFP-A-H": { title: "The Gentle Artisan", quote: "Small, honest things last the longest.", lifeMotto: "Make it with care." },

  "ESTP-O-C": { title: "The Bold Risk-Taker", quote: "Hesitation is the only real failure.", lifeMotto: "Leap first, adjust mid-air." },
  "ESTP-O-H": { title: "The Spontaneous Adventurer", quote: "The best plans are the ones you make up as you go.", lifeMotto: "Say yes, figure out the rest later." },
  "ESTP-A-C": { title: "The Fierce Competitor", quote: "Second place is just the first loser's excuse.", lifeMotto: "Play to win, every time." },
  "ESTP-A-H": { title: "The Confident Realist", quote: "I trust what I can see, touch, and test.", lifeMotto: "Stay sharp, stay grounded." },

  "ESFP-O-C": { title: "The Radiant Showstopper", quote: "Give me a stage and watch what happens.", lifeMotto: "Shine bright, chase the win." },
  "ESFP-O-H": { title: "The Joyful Free Spirit", quote: "Life's too short for a boring Tuesday.", lifeMotto: "Find the fun, share it wide." },
  "ESFP-A-C": { title: "The Spirited Performer", quote: "I practiced in private so I could shine in public.", lifeMotto: "Show up, show out." },
  "ESFP-A-H": { title: "The Warmhearted Entertainer", quote: "The best parties are the ones where everyone feels like the guest of honor.", lifeMotto: "Bring the warmth, keep it real." },
};
