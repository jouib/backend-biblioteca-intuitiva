import { DatabaseModel } from "../models/DatabaseModel";
// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um livro.
 */

export class Livro {

    private idLivro: number = 0;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: string;
    private isbn: string;
    private quantTotal: number;
    private quantDisp: number;
    private valorAquisicao: number;
    private statusLivroEmprestado: string;

    /**
     * Construtor da classe Livro
     * 
     * @param titulo 
     * @param autor 
     * @param editora 
     * @param anoPublicacao 
     * @param isbn 
     * @param quantTotal 
     * @param quantDisp
     * @param valorAquisicao
     * @param statusLivroEmprestado
     */
    constructor(
        titulo: string,
        autor: string,
        editora: string,
        anoPublicacao: string,
        isbn: string,
        quantTotal: number,
        quantDisp: number,
        valorAquisicao: number,
        statusLivroEmprestado: string,
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.quantTotal = quantTotal;
        this.quantDisp = quantDisp;
        this.valorAquisicao = valorAquisicao;
        this.statusLivroEmprestado = statusLivroEmprestado;

    }

    /* Métodos get e set */
    /**
     * @returns 
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * @param idLivro 
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = this.idLivro;
    }

    /**
     *
     * @returns {string} 
     */
    public getTitulo(): string {
        return this.titulo;
    }
    /**
     * 
     * @param titulo
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     *
     * @returns {string} 
     */
    public getAutor(): string {
        return this.autor;
    }
    /**
     *
     * @param autor 
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    /**
     *
     * @returns {string}
     */
    public getEditora(): string {
        return this.editora;
    }
    /**
     * 
     * @param editora 
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }
    
    /**
     *
     * @returns {string}
     */
     public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }
    /**
     * 
     * @param anoPublicacao 
     */
    public setAnoPublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    /**
     *
     * @returns {string}
     */
    public getIsbn(): string {
        return this.isbn;
    }
    /**
     * 
     * @param isbn 
     */
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

     /**
     *
     * @returns {number} 
     */
     public getQuantTotal(): number {
        return this.quantTotal;
    }

    /**
     * 
     * @param quantTotal 
     */
    public setEndereco(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }

    /**
     *
     * @returns {number} 
     */
     public getQuantDisponivel(): number {
        return this.quantDisp;
    }

    /**
     * 
     * @param quantDisp 
     */
    public setQuantDisponivel(quantDisp: number): void {
        this.quantDisp = quantDisp;
    }

    /**
     *
     * @returns {number} 
     */
     public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    /**
     * 
     * @param valorAquisicao 
     */
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }

    /**
     *
     * @returns {string} 
     */
    public getStatusLivroEmprestado(): number {
        return this.valorAquisicao;
    }

    /**
     * 
     * @param valorAquisicao 
     */
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

    
    /**
     * Busca e retorna uma lista de livros do banco de dados.
     * @returns Um array de objetos do tipo `Livro` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "livro".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Livro`.
     * - Cada livro é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemLivros(): Promise<Array<Livro> | null> {
        // objeto para armazenar a lista de livros
        const listaDeLivros: Array<Livro> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectLivro = `SELECT * FROM livro;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectLivro);

            // usando a resposta para instanciar um objeto do tipo livro
            respostaBD.rows.forEach((linha: { titulo: string; autor: string; editora: string; ano_publicacao: string;
                 isbn: string; quant_total: number; quant_disponivel: number; valor_aquisicao: number; 
                 status_livro_emprestado: string; id_livro: any; }) => {
                // instancia (cria) objeto livro
                const novoLivro = new Livro(
                    linha.titulo,
                    linha.autor,
                    linha.editora,
                    linha.ano_publicacao,
                    linha.isbn,
                    linha.quant_total,
                    linha.quant_disponivel,
                    linha.valor_aquisicao,
                    linha.status_livro_emprestado
                );

                // atribui o ID objeto
                novoLivro.setIdLivro(linha.id_livro);

                // adiciona o objeto na lista
                listaDeLivros.push(novoLivro);
            });

            // retorna a lista de livros
            return listaDeLivros;
        } catch (error) {
            console.log('Erro ao buscar lista de livros. Verifique os logs para mais detalhes.');
            console.log(error);
            return null;
        }
    }

    
    /**
     * Realiza o cadastro de um livro no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Livro` e insere seus dados (marca, modelo, ano e cor)
     * na tabela `livro` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
     * foi realizado com sucesso.
     * 
     * @param {Livro} livro - Objeto contendo os dados do livro que será cadastrado. O objeto `Livro`
     *                        deve conter os métodos `getTitulo)`, `getAutor()`, `getEditora()`, `getAnoPublicacao()`, `getIsbn()`, `getQauntTotal()`, 
     * `getQuantDisponivel()`, `getValorAquisicao()`, `getStatusLivroEmprestado()`
     *                        que retornam os respectivos valores do livro.
     * @returns {Promise<boolean>} - Retorna `true` se o livro foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
    static async cadastroLivro(livro: Livro): Promise<any> {
        try {
            // query para fazer insert de um ivro no banco de dados
            const queryInsertLivro = `INSERT INTO livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, 
                quant_disponivel, valor_aquisicao, status_livro_emprestado)
                                        VALUES (
                                        '${livro.getTitulo()}', 
                                        '${livro.getAutor()}', 
                                        '${livro.getEditora()}', 
                                        '${livro.getAnoPublicacao()}',
                                        '${livro.getIsbn()}',
                                         ${livro.getQuantTotal()},
                                         ${livro.getQuantDisponivel()},
                                         ${livro.getValorAquisicao()},
                                        '${livro.getStatusLivroEmprestado()}')
                                        RETURNING id_livro;`;

            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryInsertLivro);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Livro cadastrado com sucesso! ID do livro: ${respostaBD.rows[0].id_livro}`);
                // true significa que o cadastro foi feito
                return true;
            }
            // false significa que o cadastro NÃO foi feito.
            return false;

            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao cadastrar o livro. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }
}