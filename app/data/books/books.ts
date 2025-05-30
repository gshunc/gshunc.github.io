interface Book {
  title: string;
  author: string;
  pros: string | null;
  cons: string | null;
  image_src: string;
  image_alt: string;
  is_favorite: boolean;
}

export const books: Array<Book> = [
  // Finished books (unchanged)
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    pros: " concept of logos and a duty to do what you are meant for in life, remembering death and knowing that other's judgements are unimportant, understanding how to live a good life that will be remembered not for fame but for positivity and morality, remembering that things will happen to you in life but that what is most important is to respond rationally and with direction",
    cons: " the fact that this is a journal and not written for an audience makes it hard to read or follow for long periods of time, feels a bit like having adhd when reading",
    image_src: "/books/meditations.jpg",
    image_alt: "Meditations Cover",
    is_favorite: false,
  },
  {
    title: "Systems of Survival",
    author: "Jane Jacobs",
    pros: " one of the books that has had the largest impact on my way of understanding morals and systems of ethics and morality in politics and business, reframes morality as conditional on nature of the task, i.e. deception being moral when used to bust a criminal enterprise or in war, but not in commerce, highlighted a lot about what makes humans unique in the natural world; our two distinct systems of living-making, the framing as a dialogue makes things fun",
    cons: " sometimes the writing gets a little bit preachy and other times you almost have to read between the lines to understand what Jacobs is really getting at, that's it",
    image_src: "/books/systems_of_survival.jpg",
    image_alt: "Systems of Survival Cover",
    is_favorite: true,
  },
  {
    title: "Commentaries on the Gallic and Civil Wars",
    author: "Julius Caesar",
    pros: " Interesting to get a look into the mind of a leader like Caesar. Allows you to get a sense of his political strategy if you read between the lines. Helped me understand the role of clemency and good behavior in moving up in the world. Also a good lesson on when to be understanding and when to leave your inhibitions behind and do what needs to be done.",
    cons: " At some points, Caesar is going on long explanations of certain individuals, that unless you spend time studying this book or Roman history, will mean nothing to you. I would recommend reserving your attention for more interesting parts of the book. (It could be said that these pieces of commentary on individuals is another example of Caesar's understanding of audience and usage of political messaging, which is a redeeming quality, but one that wears off quickly when reading).",
    image_src: "/books/caesar_commentaries.jpg",
    image_alt: "Commentaries on the Gallic and Civil Wars Cover",
    is_favorite: false,
  },
  {
    title: "The Prince",
    author: "Niccolo Machiavelli",
    pros: "highlights a lot about what makes an *effective* leader, even if that leader is not moral. that's kind of the point of the book I suppose. I thought it was interesting that the translator left commentary on machiavelli's life and striving to get reintegrated into italian leadership. his revanchist desire for italian unification was also a framing that made the book interesting. reading throught this lense makes everything seem more worldly and less abstract. in some sense, machiavelli was using his own personal experiences in government to try to inform future italian leaders about the best way to lead. for example, his commentary on mercernaries and their role in the downfall of states was particularly interesing through the light of his experiences with mercenaries in the italian states. moreover, his usage of formal registers throughout makes it clear (in addition to the known historical framing of the book of course), that machiavelli was writing with a specific prince in mind, and not just a general audience, which again shifted my mental framing towards the practical and away from the abstract. overall an intersting look into the first ever book on political science (in that it frames politics as a science to be mastered and studied rigorously through logical conclusions.",
    cons: "I mean it's writing from the 1500s translated from old italian to english, so it's not the most accessible book. in contrast to something like meditations or caesar's notes though, it's nice that it's organized strongly by theme and has a clear structure. at times, the advice seems antiquated, and it's totally brutal in its approach to leadership. basically, kill anyone who poses a threat, even those who helped you in the past (because they feel you're indebted to them). these cons are in some way part of the appeal, as the book is cut and dry to an absolute extreme.",
    image_src: "/books/the_prince.jpg",
    image_alt: "The Prince Cover",
    is_favorite: false,
  },
  {
    title: "Republic",
    author: "Plato",
    pros: "WIP",
    cons: "WIP",
    image_src: "/books/republic.jpg",
    image_alt: "Republic Cover",
    is_favorite: false,
  },
  {
    title: "The Political Philosophy of Alexander Hamilton",
    author: "Michael P. Federici",
    pros: "WIP",
    cons: "WIP",
    image_src: "/books/hamilton_philosophy.jpg",
    image_alt: "The Political Philosophy of Alexander Hamilton Cover",
    is_favorite: false,
  },
];
