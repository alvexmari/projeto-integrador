-- Active: 1679055049611@@127.0.0.1@3306

--CREATE TABLE - CRIAÇÃO DE TODAS AS TABELAS
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL, 
    email TEXT NOT NULL, 
    password TEXT NOT NULL, 
    role TEXT NOT NULL, 
    created_at TEXT DEFAULT(DATETIME()) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    creator_id TEXT NOT NULL, 
    content TEXT, 
    comments INTEGER DEFAULT(0) NOT NULL,
    likes INTEGER DEFAULT(0) NOT NULL, 
    dislikes INTEGER DEFAULT(0) NOT NULL, 
    created_at TEXT DEFAULT(DATETIME()) NOT NULL, 
    updated_at TEXT DEFAULT(DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS likes_dislikes (
    user_id TEXT NOT NULL, 
    post_id TEXT NOT NULL,
    like INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY(post_id) REFERENCES posts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS comments_posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    creator_id TEXT NOT NULL, 
    content TEXT,
    likes INTEGER DEFAULT(0) NOT NULL, 
    dislikes INTEGER DEFAULT(0) NOT NULL, 
    created_at TEXT DEFAULT(DATETIME()) NOT NULL, 
    updated_at TEXT DEFAULT(DATETIME()) NOT NULL,
    post_id TEXT NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS likes_dislikes_comments (
    user_id TEXT NOT NULL, 
    comment_id TEXT NOT NULL, 
    like INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES comments_posts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
-------------------------------------------------------------------------------

--INSERT INTO - POPULANDO AS TABELAS

INSERT INTO users (id, name, email, password, role)
VALUES
    ("u001", "Edipo", "edipo@email.com", "123", "ADMIN"),
	("u002", "Pamela", "pamela@email.com", "456", "NORMAL");

--Após criar um user pelo Postman, atualizei o mesmo para ser ADMIN e poder acessar
UPDATE users SET role="ADMIN" WHERE ID = '664f0e77-fb69-4388-8955-a0f48e3e6d13';


INSERT INTO posts (id, creator_id, content)
VALUES 
    ("p001", "u001", "Hoje tem jogo do Palmeiras!"),
    ("p002", "u001", "Qual o melhor curso de programação FullStack?"),
    ("p003", "u002", "Sábado é dia de pescar");

INSERT INTO comments_posts(id, creator_id, content, post_id)
VALUES
("c001", "u002", "Vamos assistir!", "p001"),
("c002", "u001", "Combinado!", "p001"),
("c003", "u002", "Curso da Labenu", "p002");


-------------------------------------------------------------------------------
-- SELECT * FROM - VISUALIZAÇÃO DE TODAS AS TABELAS

-- SELECT * FROM users;

-- SELECT * FROM posts;

-- SELECT * FROM likes_dislikes;

-- SELECT * FROM comments_posts;

-- SELECT * FROM likes_dislikes_comments;

-------------------------------------------------------------------------------

--DROP TABLE - DELETAR ALGUMA TABELA

-- DROP TABLE users;
-- DROP TABLE posts;
-- DROP TABLE posts;
-- DROP TABLE likes_dislikes;
-- DROP TABLE coments_post;
-- DROP TABLE likes_dislikes_comments;


-- SELECT comments_posts.id, 
-- comments_posts.content,
-- comments_posts.likes,
-- comments_posts.dislikes,
-- comments_posts.created_at,
-- comments_posts.updated_at,
-- users.id,
-- users.username
-- FROM comments_posts LEFT JOIN users
-- ON users.id = comments_posts.creator_id;

