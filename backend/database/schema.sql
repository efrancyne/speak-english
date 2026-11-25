CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS niveis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo CHAR(2) NOT NULL UNIQUE,
  descricao VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(40) NOT NULL UNIQUE,
  nome VARCHAR(80) NOT NULL,
  descricao VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS assuntos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nivel_id INT NOT NULL,
  categoria_id INT NOT NULL,
  titulo VARCHAR(150) NOT NULL,
  significado VARCHAR(255) NOT NULL,
  exemplo TEXT,
  UNIQUE KEY uq_assunto (nivel_id, categoria_id, titulo),
  FOREIGN KEY (nivel_id) REFERENCES niveis(id),
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE IF NOT EXISTS progresso (
  usuario_id INT NOT NULL,
  assunto_id INT NOT NULL,
  status ENUM('preciso_estudar', 'dominado') NOT NULL,
  PRIMARY KEY (usuario_id, assunto_id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (assunto_id) REFERENCES assuntos(id) ON DELETE CASCADE
);
