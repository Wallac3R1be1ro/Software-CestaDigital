use mercado;

create table produtos(
	cod_produto int NOT NULL auto_increment,
    nome_produto varchar(30) NOT NULL,
    valor_produto decimal(10,2),
    marca_produto varchar(30) NOT NULL,
    primary key (cod_produto)
) default charset = utf8;

insert into produtos (nome_produto, valor_produto, marca_produto) values
	('Farinha de Trigo', '5.30', 'Sol'),
    ('Ovos', '20', 'Graja Reis'),
    ('Aveia em Flocos', '3.30', 'Nestle'),
    ('Whey', '80', 'Max Titanium'),
    ('Pão de Forma Integral', '10', 'NesFit'),
    ('Água de Coco', '11.99', 'SoCoco'),
    ('Manteiga', '18.90', 'LifeFood');
select * from produtos;
ALTER TABLE produtos AUTO_INCREMENT = 100000;