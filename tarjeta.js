export class tarjeta{
    col = 0;
    nombre = '';
    url = '';
    constructor(c,n,u){
        this.col=c;
        this.nombre=n;
        this.url=u;
    }

   async mostrar(){
        const info = await getDetalle(this.url);
        let img = info[0];
        let id = info[1];
        let type = info[2];
        let ty='';
        type.forEach(t => {
           ty += t.type.name+' ';
        });
        let card = '<div class="col-md-'+this.col+' mb-3" style="width: 18rem">';
        card += '<div class="card">';
        card += ' <img src="'+img+'" class="card-img-top p-2" height="150">';
        card += '<div class="card-body">';
        card +='<h3 class="card-title text-center text-capitalize"><span class="badge text-bg-secondary">'+id+'</span> '+this.nombre+'</h3>';
        card += '<h4>Tipos: <b>'+ty+' </b> </h4>';
        card += '</div></div></div>';
        return card;
    }
}

const getDetalle = async(liga) =>{
    const peticion = await fetch(liga);
    let detalles = [];
    if(peticion.ok){
        const data = await peticion.json();
        detalles.push(data.sprites.other.dream_world.front_default);
        detalles.push(data.id);
        detalles.push(data.types);
        return detalles;
    }
}