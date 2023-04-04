const Contato = require('../database/model/Contato');
const Telefone = require('../database/model/Telefone');
const criar_log = require('../utils/criar-log');

module.exports = {
    async create(req, res){
        const {nome, idade, numero} = req.body;
        let msg = "Contato salvo com sucesso."

        try{
            const contato = await Contato.create({
                nome: nome,
                idade: idade
            });
    
            const list_number = numero.split(';');
    
            for (let index = 0; index < list_number.length; index++) {
                const element = list_number[index];
    
                const telefone = await Telefone.create({
                    id_contato: contato.id,
                    numero: element    
                });
            }

            const log = {
                metodo: "post",
                funcao: "create",
                nome: contato.nome,
                idade: contato.idade,
                numero: numero,
                erro: false,
                msg: msg,
                icon: 'sucess',
                data: Date.now()
            }

            criar_log(log);            
            
            return res.json({
                icon: 'sucess',
                msg:msg
            });
        }catch(e) {
            const log = {
                metodo: "post",
                funcao: "create",
                erro: true,
                msg: e,
                data: Date.now()
            }
            criar_log(log); 
        }
    },


    async busca_contato_especifico(req, res){        

        const telefone = await Telefone.findAll({
            include:{ model : Contato, as : 'contato' }
        })

        // const contato = await Contato.findAll({
        //     include:{ model : Telefone, as : 'telefone' }
        // });

        return res.json(telefone);
    },

    async atualizar_contato(req, res){
        const { id } = req.params;
        const {nome, idade, numero, id_numero} = req.body;
        let msg = "Contato atualizado com sucesso"

        try{
            const contato = await Contato.update({
                where:{
                    id
                },
                nome: nome,
                idade: idade
            });

            const telefone = await Telefone.update({
                where:{
                    id: id,
                    id_contato: id_numero
                },
                numero: numero
            })

            return res.json({
                metodo: "post",
                funcao: "create",
                nome: contato.nome,
                idade: contato.idade,
                numero: numero,
                id_numero: id_numero,
                id_contato: id,
                erro: false,
                msg: msg,
                icon: 'sucess',
                data: Date.now()
            });

        }catch(e){
            const log = {
                metodo: "put",
                funcao: "atualizar_contato",
                id_contato: id ? id: undefined,
                erro: true,
                msg: e,
                data: Date.now()
            }
            criar_log(log); 
        }
    },

    async deletar_contato(req, res){
        const { id } = req.params;
        let msg = "Contato deletado com sucesso";

        try{
            const contato = await Contato.destroy({
                where: {
                    id
                }
            });

            return res.json({
                id_contato: id,
                msg:msg,
                erro: false,
                icon: 'sucess',
                data: Date.now()
            });

        }catch(e){
            console.log(e)
            const log = {
                metodo: "delete",
                funcao: "deletar_contato",
                id_contato: id ? id: undefined,
                erro: true,
                msg: e,
                data: Date.now()
            }
            criar_log(log); 
        }
    }
}
