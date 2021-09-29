<?php

namespace App\Http\Controllers;

use App\Models\Quote;

class QuoteController extends Controller
{
    public function getQuote(){
        $quotesTotal = Quote::all()->count() - 1;
        $quoteRandom = rand(1, $quotesTotal);

        $quote = Quote::find($quoteRandom);

        return $quote;
    }
}
