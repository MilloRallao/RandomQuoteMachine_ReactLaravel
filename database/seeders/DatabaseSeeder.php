<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Quote;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $quotes = [
            ["El único modo de hacer un gran trabajo es amar lo que haces.", "Steve Jobs"],
            ["Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo.", "Michael Jordan"],
            ["El dinero no es la clave del éxito; la libertad para poder crear lo es.", "Nelson Mandela"],
            ["Cuanto más duramente trabajo, más suerte tengo.", "Gary Player"],
            ["La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica.", "Aristóteles"],
            ["El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu.", "Helena Rubinstein"],
            ["Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan.", "Elon Musk"],
            ["Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida.", "Confucio"],
            ["Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro.", "Colin Powell"],
            ["Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé.", "Benjamin Franklin"],
        ];

        foreach (range(0, count($quotes) - 1) as $iteration) {
            Quote::factory()->create([
                'quote' => $quotes[$iteration][0],
                'author' => $quotes[$iteration][1]
            ]);
        }
    }
}
