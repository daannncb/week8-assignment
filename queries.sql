
-- seed data and table creation for week 8 assignment

-- a table for posts, a table for comments; link comments by post id

CREATE TABLE posts ( 
  post_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(50) NOT NULL,
  body TEXT NOT NULL,
  image TEXT
);

CREATE TABLE comments (
  comment_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(100) NOT NULL,
  body TEXT NOT NULL,
  
);

-- forgot to add the link 'post_id' in comments table:

ALTER TABLE comments
ADD post_id INT,
ADD FOREIGN KEY (post_id) REFERENCES posts(post_id)
;

ALTER TABLE posts
ADD image_alt TEXT

;

INSERT INTO posts 
(title, body, image_src, image_alt)
VALUES
('Göbekli Tepe', 'This 12,000-year-old site in southeastern Turkey challenges our understanding of the origin of civilisation. Once thought to have emerged only after the rise of agriculture, Göbekli Tepe suggests the reverse; that large-scale religious or communal gatherings may have preceded farming. Massive T-shaped limestone pillars are arranged in circular enclosures and carved with animals and abstract symbols. Its builders were likely hunter-gatherers, yet displayed remarkable organization, artistry, and shared purpose.', 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/1241209984_zqynaa?_a=BAVAZGID0', 'A picture of Göbekli Tepe'),
('What is Music?', 'Music is deeply rooted in human culture. Music is not a recent invention, but perhaps a fundamental part of human evolution, intertwining with speech, ritual, and social bonding. Flutes from bone or ivory, simple percussive tools likely played big roles in bonding and tribeship, the formation of early social alliances and colonies. Music may have helped prehistoric humans in many ways: coordinating group action, reinforcing social identity, even in spiritual or ritual settings.', 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Flauta_paleol%C3%ADtica.jpg', 'A prehistoric flute');

-- new insert template with new fields:
INSERT INTO posts 
(title, body, image_alt, image_src, date)
VALUES
('Oedipus Rex', 'Oedipus Rex is a play written by Sophocles. Sophocles wrote many plays, and decimated the competition in the annual Greek play-off. If you are so inclined, you could call him the Shakespeare of his age. Or perhaps Shakespeare is the Sophocles of his age? Oedipus Rex is often bastardised into a tale of incest, when it is truly a Greek tragedy; a man desperate to dodge a damning fortune told to him spends his life running, only to have caused his own downfall.', 'A painting by Jean-Auguste-Dominique Ingres depicting a naked Oedipus after solving the Riddle of the Sphinx.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jean-Auguste-Dominique_Ingres_-_Oedipus_and_the_Sphinx_-_Walters_379.jpg/800px-Jean-Auguste-Dominique_Ingres_-_Oedipus_and_the_Sphinx_-_Walters_379.jpg', '2025-09-02');

-- INSERT INTO comments -- don't use this, just get it working and seed that way
(author, body)
VALUES
('', '')




