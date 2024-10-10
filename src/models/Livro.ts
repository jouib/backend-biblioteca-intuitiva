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
    public setIdAluno(idLivro: number): void {
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
}