module.exports = (repositoryPersona) => {
    async function execute(params, body){
        
        params.Item = body;
        await repositoryPersona.setPersona(params);
        return { registrado : 1 , id: body.id };
    }

    return { execute }
}