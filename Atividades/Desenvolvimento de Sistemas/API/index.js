const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); 
app.use(bodyParser.json());

let livros = [];

app.get('/livros', (req, res) => { 
    res.json(livros); 
    });

    app.get('/livros/:id', (req, res) => { 
        const { id } = req.params; 
        const livros = livros.find(v => v.placa === placa); 
        if (livros) { 
        res.json(livros); 
        } else { 
        res.status(404).json({ message: 'Livro não encontrado.' }); 
        } 
        });

        app.post('/livros', (req, res) => { 
            const { id, autor, tamanho, ano } = req.body; 
            const livro= { id, autor, tamanho, ano }; 
            livros.push(livro); 
            res.status(201).json({ message: 'Livro cadastrado com sucesso.' }); 
            });

            app.put('/livros/:id', (req, res) => { 
                const { id } = req.params; 
                const { autor, modelo, ano } = req.body; 
                const veiculo= veiculos.find(v => v.placa === placa); 
                if (veiculo) { 
                veiculo.marca = marca || veiculo.marca; 
                veiculo.modelo = modelo || veiculo.modelo; 
                veiculo.ano = ano || veiculo.ano; 
                res.json({ message: 'Informações do veículo atualizadas com sucesso.' });
                } else {
                res.status(404).json({ message: 'Veículo não encontrado.' }); 
                } 
                });

                app.delete('/veiculos/:placa', (req, res) => { 
                    const { placa } = req.params; 
                    const veiculoIndex = veiculos.findIndex(v => v.placa === placa); 
                    if (veiculoIndex !== -1) { 
                    veiculos.splice(veiculoIndex, 1); 
                    res.json({ message: 'Livro excluído com sucesso.' }); 
                    } else { 
                    res.status(404).json({ message: 'Livro não encontrado.' }); 
                    } 
                    });

const port = 3000; 
app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`); 
});

                    
                
            
        

