export class Aluno {

    private idAluno: number = 0;
    private ra: string = "";
    private nome: string;
    private sobrenome: string;
    private dataNascimento: Date;
    private endereco: string;
    private email: string;
    private celular: string;

    /**
     * Construtor da classe Aluno
     * 
     * @param nome 
     * @param sobrenome 
     * @param dataNascimento
     * @param endereco 
     * @param email 
     * @param celular 
     */
    constructor(
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;

    }

    /* Métodos get e set */
    /**
     * @returns 
     */
    public getidAluno(): number {
        return this.idAluno;
    }

    /**
     * @param idAluno 
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = this.idAluno;
    }

    /**
     *
     * @returns {string} 
     */
    public getRa(): string {
        return this.ra;
    }

    /**
     * 
     * @param ra - 
     */
    public setRa(ra: string): void {
        this.ra = ra;
    }

    /**
     *
     * @returns {string} 
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     *
     * @param nome 
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     *
     * @returns {string}
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * 
     * @param sobrenome 
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
     *
     * @returns {Date} 
     */
    public getCor(): Date {
        return this.dataNascimento;
    }

    /**
     * 
     * @param dataNascimento 
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

     /**
     *
     * @returns {string} 
     */
     public getEndereco(): string {
        return this.endereco;
    }

    /**
     * 
     * @param endereco 
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

     /**
     *
     * @returns {string} 
     */
     public getEmail(): string {
        return this.email;
    }

    /**
     * 
     * @param email 
     */
    public setEmail(email: string): void {
        this.email = email;
    }

     /**
     *
     * @returns {string} 
     */
     public getCelular(): string {
        return this.celular;
    }

    /**
     * 
     * @param celular 
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }
}