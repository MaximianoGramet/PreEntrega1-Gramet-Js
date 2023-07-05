alert("Buenos días y bienvenidos");
let saludo= prompt("¿Cuantos Invitados nos visitaran? (1-8)");
while(saludo<1||saludo>8){
  alert("cantidad de Invitados no valida");
  saludo= prompt("¿Cuantos Invitados nos visitaran?(1-8)");
}
let bucle ="si";
let ubicacion=0;
while(bucle=="si"){
  //ubicación
  let ubicacion=0;
  let lugar ="default";
  while(ubicacion==0){
    ubicacion=prompt("¿Donde le gustaría pasar su estadía? \n 1° Ventana.  \n 2° Entrada. \n 3° Escenario. \n 4° Disponible. \n (Escriba un número)");
 
    switch(ubicacion){
      case "0":
        alert("no ha seleccionado una opción, intente nuevamente");
        break;
      case "1":
        alert("Usted reservo una mesa junto a la ventana para "+ saludo +" personas, esperamos que disfrute" );
        ubicacion=1;
        lugar ="junto a la ventana";
        break;
      case "2":
        alert("Usted reservo una mesa junto a la Entrada para "+ saludo +" personas, esperamos que disfrute" );
        ubicacion=1;
        lugar ="junto a la entrada";
        break;
      case "3":
        alert("Usted reservo una mesa junto al Escenario para "+ saludo +" personas, esperamos que disfrute" );
        ubicacion=1;
        lugar ="junto al escenario";
        break;
      case "4":
        alert("Usted reservo cualquier mesa que esté disponible para "+ saludo +" personas, esperamos que disfrute" );
        ubicacion=1;
        lugar ="donde haya lugar";
        break;
      default:
        alert("La opcion que usted selecciono no es valida, intente nuevamente")
        ubicacion=0;
        break;
    }
  }
  //fecha
  let mes=prompt("Ingrese el mes de su visita (1-12)");
  let dia=0;
  let alerta=0;
  while(mes<1 || mes>12){
    alert("mes no valido");
    mes=prompt("Ingrese el mes de su visita (1-12)");
  }
  if(mes==2){
    while (dia<1 || dia>28){
      if(alerta>0){
        alert("Día no valido, reintente");
      }
      dia=prompt("Ingrese el día de su visita (1-28)");
      alerta+=1;
    }
  }else if(mes==4||mes==6||mes==9||mes==11){
    while (dia<1||dia>30){
      if(alerta>0){
        alert("Día no valido, reintente");
      } else
      dia=prompt("Ingrese el día de su visita (1-30)");
      alerta+=1;
    }   
  }else{
    while (dia<1||dia>31){
      if(alerta>0){
        alert("Día no valido, reintente");
      }
      dia=prompt("Ingrese el día de su visita (1-31)");
      alerta+=1;
    }
  }
  //celiaquismo
  let celiaquismo="default"
  while(celiaquismo !="no" && celiaquismo!="si"){
    if(celiaquismo!="default"){
      alert("opción no valida");
    }
    celiaquismo=prompt("¿requiere de menu celiaco? (si-no)");
    celiaquismo=celiaquismo.toLowerCase();
   }
 //no importa la cantidad, porque en los restaurantes
 // lo que importa es tener la cocina para celicos lista, no la cantidad de platos
 celiaquismo=celiaquismo.toLowerCase();
 //Resumen
 alert("Pedido finalizado, a continuación los detalles de su pedido:");
 alert("Ubicación: "+lugar+"\n Fecha: "+dia+"/"+mes+"\n Require menu celiaco: "+celiaquismo);
 alert("Su reservacion fue registrada con exito");
 let chequeo=0;
 while(chequeo==0){
    let confirmacion=prompt("¿desea reservar otra mesa?\n (si-no)");
    confirmacion=confirmacion.toLocaleLowerCase();
    if(confirmacion=="no"){
      bucle="no";
      chequeo=1;
    }else if(confirmacion=="si"){
      bucle="si";
      chequeo=1;
    }else{
      alert("respuesta no valida, vuelva a intentar");
    }
  }
 
}
alert("Gracias por visitarnos");