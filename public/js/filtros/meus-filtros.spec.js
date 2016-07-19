describe('meusFiltros tests', function(){
    beforeEach(module('meusFiltros'));
    it('deve retornar uma string maiuscula', 
      inject(function(maiusculoFilter){
        expect(maiusculoFilter('texto')).toBe('TEXTO');    
    }));
});