
CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);


CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();


CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);

CREATE TABLE Emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);

INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020');

INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Verissimo', 'Almeida', '2007-05-15', 'Rua Verissimo, 123', 'srverissimo@gmail.com', '16996936876'),
('Lami', 'Fabrior', '2004-03-22', 'Avenida Antônio Carlos', 'amanda.nonato@gmail.com', '16995965305'),
('Defo', 'Neys', '2003-07-11', 'Rua H, 752', 'jolie@cinema.com', '16991915502'),
('Neyges', 'Focifeo', '2002-06-05', 'Rua Hollywood, 101', 'neyges.focifeo@cinema.com', '16993930703'),
('Brodo', 'Fucer', '2086-09-18', 'Rua ABN, 202', 'brodo.fucer@gmail.com', '16993793230'),
('Cesar', 'Oliveira', '2855-08-18', 'Rua TCC, 2024', 'cesaroliveira@futi.com', '16998051983'),
('Piuto', 'Carvalho', '2001-12-09', 'Rua R, 456', 'piuto.carvalho.com', '169986343575'),
('Tuohu', 'Ciofifo', '2003-03-12', 'Rua Volei, 2028', 'tuoho.ciofifo@volei.com', '1699745477'),
('Geusn', 'Feurl', '2008-09-08', 'Rua Volei, 2028', 'geusn@volei.com', '16985963215'),
('Woean', 'Vizao', '2003-07-18', 'Rua NBA, 1999', 'woean@gmail.com', '16993932730');


INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');

INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('Quincas Borba', 'Machado de Assis', 'Companhia das Letras', '1891', '978-0956525546', 10, 9, 40.00, 'Disponível'),
('A Hora da Estrela', 'Clarisse Lispector', 'Companhia das Letras', '1977', '978-8594706770', 8, 8, 90.00, 'Disponível'),
('Dom Casmurro', 'Machado de Assis', 'Penguin Classics', '1882', '978-0142430430', 6, 6, 120.00, 'Disponível'),
('Laços de Família', 'Clarisse Lispector', 'Companhia das Letras', '1960', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('O Espelho', 'Machado de Assis', 'Penguin', '1945', '978-0143966137', 7, 7, 80.00, 'Disponível'),
('Casa Velha', 'Machado de Assis', 'HarperCollins', '1886', '978-0007465424', 9, 9, 140.00, 'Disponível'),
('El Señor Presidente', 'Miguel Ángel Asturias', 'Penguin Classics', '1946', '978-0140445076', 5, 5, 110.00, 'Disponível'),
('Ensaio sobre a cegueira', 'José Saramago', 'Companhia das Letras', '1813', '978-0395439518', 7, 7, 90.00, 'Disponível'),
('O Enfermeiro', 'Machado de Assis', 'Companhia das Letras', '1968', '978-0142448627', 4, 4, 100.00, 'Disponível'),
('Coraline', 'Neil Gaiman', 'Penguin Classics', '2002', '978-7530365343', 3, 3, 130.00, 'Disponível');

INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');


INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(11, 2, '2024-10-03', '2024-09-15', 'Em andamento'),
(12, 1, '2024-10-02', '2024-09-16', 'Em andamento'),
(13, 5, '2024-10-01', '2024-09-17', 'Em andamento'),
(15, 3, '2024-10-04', '2024-09-18', 'Em andamento'),
(14, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(16, 4, '2024-08-27', '2024-09-20', 'Em andamento'),
(17, 8, '2024-08-07', '2024-09-21', 'Em andamento'),
(18, 7, '2024-09-18', '2024-09-22', 'Em andamento'),
(19, 9, '2024-09-29', '2024-09-23', 'Em andamento'),
(20, 10, '2024-09-16', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-17', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');

SELECT * FROM Aluno;

SELECT 
    a.ra, 
    a.nome, 
    a.sobrenome, 
    a.celular, 
    l.titulo, 
    l.autor, 
    l.editora, 
    e.data_emprestimo, 
    e.data_devolucao, 
    e.status_emprestimo
FROM 
    Emprestimo e
JOIN 
    Aluno a ON e.id_aluno = a.id_aluno
JOIN 
    Livro l ON e.id_livro = l.id_livro;