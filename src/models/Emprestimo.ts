export class Emprestimo {

    private idEmprestimo: number = 0;
    private idAluno: number = 0;
    private idLivro: number = 0;
    private dataEmprestimo: Date;
    private dataDevolucao: Date;
    private statusEmprestimo: string;

    /**
     * Construtor da classe Emprestimo
     * 
     * @param idAluno
     * @param idLivro
     * @param dataEmprestimo 
     * @param dataDevolucao 
     * @param statusEmprestimo 
     */
    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string,
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    /* Métodos get e set */
    /**
     * @returns 
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * @param idEmprestimo 
     */
    public setIdEmrpestimo(idEmprestimo: number): void {
        this.idEmprestimo = this.idEmprestimo;
    }

    /**
     *
     * @returns {number} 
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * 
     * @param idAluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     *
     * @returns {number} 
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     *
     * @param idLivro 
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     *
     * @returns {Date}
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     * 
     * @param dataEmprestimo 
     */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     *
     * @returns {Date} 
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     * 
     * @param dataDevolucao 
     */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

     /**
     *
     * @returns {string} 
     */
     public getstatusEmprestimo(): string {
        return this.statusEmprestimo;
    }

    /**
     * 
     * @param statusEmprestimo 
     */
    public setSatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = this.statusEmprestimo;
    }
}