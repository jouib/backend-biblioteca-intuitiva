import { DatabaseModel } from "../models/DatabaseModel";
// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um Emprestimo.
 */

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
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
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
        this.statusEmprestimo = statusEmprestimo;
    }

    
    /**
     * Busca e retorna uma lista de emprestimos do banco de dados.
     * @returns Um array de objetos do tipo `Emprestimo` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "Emprestimo".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Emprestimo`.
     * - Cada emprestimo é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemEmprestimos(): Promise<Array<Emprestimo> | null> {
        // objeto para armazenar a lista de emprestimos
        const listaDeEmprestimos: Array<Emprestimo> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectEmprestimo = `SELECT * FROM emprestimo;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectEmprestimo);

            console.log(respostaBD)

            // usando a resposta para instanciar um objeto do tipo Emprestimo
            respostaBD.rows.forEach((linha: any) => {
                // instancia (cria) objeto Empmrestimo
                const novoEmprestimo = new Emprestimo(
                    linha.id_aluno,
                    linha.id_livro,
                    linha.data_emprestimo,
                    linha.data_devolucao,
                    linha.status_emprestimo
                );

                // atribui o ID objeto
                novoEmprestimo.setIdEmprestimo(linha.id_emprestimo);

                // adiciona o objeto na lista
                listaDeEmprestimos.push(novoEmprestimo);
            });

            // retorna a lista de emprestimos
            return listaDeEmprestimos;
        } catch (error) {
            console.log('Erro ao buscar lista de emprestimos. Verifique os logs para mais detalhes.');
            console.log(error);
            return null;
        }
    }
    
}