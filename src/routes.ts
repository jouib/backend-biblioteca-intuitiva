import { Request, Response, Router } from 'express';
import { LivroController } from "./controller/LivroController";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";

// Cria um roteador :
const router = Router();

// Criando uma rota principal para a aplicação :
router.get("/", (req: Request, res: Response) => {
    res.json({mensagem: "Olá, mundo!"});
});

/* 
* ROTAS PARA LIVROS
*/ 
// Rota para listar os livros
router.get("/lista/livros", LivroController.todos);
// Rota para cadastrar um novo livro
router.post("/novo/livro", LivroController.novo);

/* 

* ROTAS PARA ALUNOS
*/ 
// Rota para listar os alunos
router.get("/lista/alunos", AlunoController.todos);
// Rota para cadastrar um novo aluno
router.post("/novo/aluno", AlunoController.novo);
/* 

/* 
* ROTAS PARA EMPRESTIMOS
*/ 
// Rota para listar os emprestimos
router.get("/lista/emprestimo", EmprestimoController.todos);


// Exportando as rotas :
export { router };


