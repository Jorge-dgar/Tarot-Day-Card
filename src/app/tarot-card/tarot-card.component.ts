import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface TarotCard{
  name: string;
  meaning: string;
  number: string ;
  imagePath: string;
  description: string;
}

@Component({
  selector: 'app-tarot-card',
  templateUrl: './tarot-card.component.html',
  styleUrls: ['./tarot-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class TarotCardComponent {
  // Definimos todas las cartas de los Arcanos Mayores
  tarotCards: TarotCard[] = [
    {
      name: 'El Loco',
      meaning: 'Comienzos, aventura, libertad.',
      number: '0',
      imagePath: 'assets/pics/elloco.jpg',
      description: 'El Loco simboliza nuevos comienzos y la libertad de explorar lo desconocido. Representa la energía de una nueva aventura, sin miedo a lo incierto y sin estar atado a lo que está detrás.',
    },
    {
      name: 'El Mago',
      meaning: 'Fuerza, poder, concentración.',
      number: '1',
      imagePath: 'assets/pics/elmago.jpg',
      description: 'El Mago nos invita a utilizar nuestras habilidades para manifestar nuestros deseos. Es la carta de la concentración y la acción, mostrando que tenemos todo lo necesario para lograr nuestros objetivos.',
    },
    {
      name: 'La Sacerdotisa',
      meaning: 'Intuición, misterio, sabiduría oculta.',
      number: '2',
      imagePath: 'assets/pics/lasacerdotisa.jpg',
      description: 'La Sacerdotisa representa la sabiduría espiritual y la conexión con el inconsciente. Invita a escuchar nuestra intuición y a descubrir los misterios que están ocultos detrás de las apariencias.',
    },
    {
      name: 'La Emperatriz',
      meaning: 'Fertilidad, creatividad, abundancia.',
      number: '3',
      imagePath: 'assets/pics/laemperatriz.jpg',
      description: 'La Emperatriz es la carta de la abundancia y la creatividad. Representa la conexión con la naturaleza y la capacidad de nutrir y crear algo nuevo. Es la energía femenina que da vida y sostiene el crecimiento.',
    },
    {
      name: 'El Emperador',
      meaning: 'Estabilidad, liderazgo, autoridad.',
      number: '4',
      imagePath: 'assets/pics/elemperador.jpg',
      description: 'El Emperador simboliza el orden, el control y la autoridad. Es el líder sabio y firme que establece reglas y estructuras. Nos invita a tomar el control de nuestras vidas con sabiduría y responsabilidad.',
    },
    {
      name: 'El Hierofante',
      meaning: 'Tradición, enseñanza, espiritualidad.',
      number: '5',
      imagePath: 'assets/pics/elhierofante.jpg',
      description: 'El Hierofante representa la conexión con las enseñanzas tradicionales y la espiritualidad. Es la carta de la sabiduría ancestral, de los valores establecidos y de la búsqueda de la verdad a través de la reflexión y el estudio.',
    },
    {
      name: 'Los Enamorados',
      meaning: 'Amor, elecciones, armonía.',
      number: '6',
      imagePath: 'assets/pics/losenamorados.jpg',
      description: 'Los Enamorados son la carta del amor y las relaciones, pero también de las elecciones importantes que debemos hacer en nuestras vidas. Nos invita a buscar la armonía en nuestras decisiones y a valorar lo que realmente es importante.',
    },
    {
      name: 'El Carro',
      meaning: 'Triunfo, determinación, control.',
      number: '7',
      imagePath: 'assets/pics/elcarro.jpg',
      description: 'El Carro representa el triunfo y la victoria, pero solo a través de la determinación y el control. Es una carta de movimiento, de avanzar con firmeza hacia nuestros objetivos, superando obstáculos con fuerza de voluntad.',
    },
    {
      name: 'La Justicia',
      meaning: 'Equilibrio, verdad, justicia.',
      number: '8',
      imagePath: 'assets/pics/lajusticia.jpg',
      description: 'La Justicia nos habla de la necesidad de tomar decisiones con imparcialidad y equidad. Es una carta de balance, donde se busca la verdad y el equilibrio en todas las áreas de la vida. Nos recuerda que nuestras acciones tendrán consecuencias.',
    },
    {
      name: 'El Ermitaño',
      meaning: 'Reflexión, búsqueda interna, soledad.',
      number: '9',
      imagePath: 'assets/pics/elermitaño.jpg',
      description: 'El Ermitaño es la carta de la introspección y la reflexión. Representa la búsqueda interna de respuestas y el retiro temporal para encontrar claridad. Nos invita a buscar en nuestro interior la sabiduría necesaria para avanzar.',
    },
    {
      name: 'La Rueda de la Fortuna',
      meaning: 'Cambio, destino, ciclos.',
      number: '10',
      imagePath: 'assets/pics/laruedadelafortuna.jpg',
      description: 'La Rueda de la Fortuna nos habla de los ciclos de la vida y del cambio constante. Representa el flujo del destino y la inevitabilidad de los altibajos. Es una carta de suerte, pero también de aceptación de lo que está fuera de nuestro control.',
    },
    {
      name: 'La Fuerza',
      meaning: 'Coraje, resistencia, autocontrol.',
      number: '11',
      imagePath: 'assets/pics/lafuerza.jpg',
      description: 'La Fuerza es la carta del coraje y la resistencia. Nos habla de la capacidad de controlar nuestras emociones y actuar con valentía, sin recurrir a la agresión. Es la fuerza interior que nos permite superar cualquier desafío.',
    },
    {
      name: 'El Colgado',
      meaning: 'Sacrificio, perspectiva, espera.',
      number: '12',
      imagePath: 'assets/pics/elcolgado.jpg',
      description: 'El Colgado representa la necesidad de cambiar de perspectiva. A menudo, significa que debemos sacrificarnos o tomar un descanso para ver las cosas desde otro ángulo. Es una carta de paciencia y de espera reflexiva.',
    },
    {
      name: 'La Muerte',
      meaning: 'Transformación, fin de una etapa.',
      number: '13',
      imagePath: 'assets/pics/lamuerte.jpg',
      description: 'La Muerte no siempre se refiere a un final literal, sino a la transformación profunda y el cierre de una etapa para dar paso a algo nuevo. Representa la eliminación de lo viejo para abrir espacio a lo nuevo.',
    },
    {
      name: 'La Templanza',
      meaning: 'Equilibrio, moderación, paciencia.',
      number: '14',
      imagePath: 'assets/pics/latemplanza.jpg',
      description: 'La Templanza es la carta del equilibrio y la moderación. Nos recuerda que debemos mantener la calma, ser pacientes y buscar el equilibrio en nuestras vidas. Es una carta que nos anima a no caer en los extremos y a ser pacientes.',
    },
    {
      name: 'El Diablo',
      meaning: 'Tentación, materialismo, ataduras.',
      number: '15',
      imagePath: 'assets/pics/eldiablo.jpg',
      description: 'El Diablo representa las tentaciones materiales, las ataduras y los miedos que nos limitan. Es una carta que nos desafía a liberarnos de las cadenas que nos atan, ya sea emocional o materialmente.',
    },
    {
      name: 'La Torre',
      meaning: 'Destrucción, caos, cambios inesperados.',
      number: '16',
      imagePath: 'assets/pics/latorre.jpg',
      description: 'La Torre simboliza una ruptura abrupta, el colapso de viejas estructuras y la destrucción de lo que ya no sirve. Aunque puede ser difícil, es una carta que nos libera para construir algo más fuerte y verdadero.',
    },
    {
      name: 'La Estrella',
      meaning: 'Esperanza, inspiración, claridad.',
      number: '17',
      imagePath: 'assets/pics/laestrella.jpg',
      description: 'La Estrella es la carta de la esperanza y la inspiración. Nos recuerda que, aunque pasemos por momentos difíciles, siempre hay luz al final del túnel. Es una carta de claridad y renovación.',
    },
    {
      name: 'La Luna',
      meaning: 'Confusión, intuición, ilusiones.',
      number: '18',
      imagePath: 'assets/pics/laluna.jpg',
      description: 'La Luna representa la confusión y las ilusiones. Es una carta que nos invita a confiar en nuestra intuición mientras navegamos a través de la niebla de la incertidumbre. Nos recuerda que las cosas no siempre son lo que parecen.',
    },
    {
      name: 'El Sol',
      meaning: 'Éxito, vitalidad, alegría.',
      number: '19',
      imagePath: 'assets/pics/elsol.jpg',
      description: 'El Sol es la carta del éxito, la vitalidad y la alegría. Representa la claridad, la energía positiva y la realización de nuestros sueños. Es una carta que nos llena de optimismo y energía renovada.',
    },
    {
      name: 'El Juicio',
      meaning: 'Revelación, transformación, renacimiento.',
      number: '20',
      imagePath: 'assets/pics/eljuicio.jpg',
      description: 'El Juicio es la carta del despertar y la revelación. Nos invita a examinar nuestra vida y a tomar decisiones importantes para nuestra transformación. Es la carta del renacimiento y de la evolución.',
    },
    {
      name: 'El Mundo',
      meaning: 'Plenitud, éxito, realización.',
      number: '21',
      imagePath: 'assets/pics/elmundo.jpg',
      description: 'El Mundo simboliza la realización y la plenitud. Es el final de un ciclo, donde todo ha llegado a su culminación. Representa el éxito, el logro y la integración de todas las experiencias vividas.',
    },
  ];

  // Carta seleccionada (inicialmente no hay carta seleccionada)
  selectedCard: TarotCard | null = null;

  // Función para tirar una carta aleatoria
  drawRandomCard() {
    const randomIndex = Math.floor(Math.random() * this.tarotCards.length);
    this.selectedCard = this.tarotCards[randomIndex];
  }
}

//   Interfaz TarotCard: Creamos una interfaz para definir cómo deben ser las cartas de tarot. 
// Esto nos ayuda a estructurar mejor la información de cada carta (nombre, significado e imagen).

// Array tarotCards: Creamos un array llamado tarotCards que contiene todas las cartas de los Arcanos Mayores. 
// Cada carta tiene un name, meaning y una ruta de la imagen imagePath.

// Método drawRandomCard(): Creamos una función para seleccionar una carta aleatoria del array de cartas. 
// Cuando se llame a esta función, se asignará una carta aleatoria a la variable selectedCard.
