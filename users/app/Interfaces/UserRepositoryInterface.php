<?php

namespace App\Interfaces;

use Illuminate\Support\Collection;

interface UserRepositoryInterface
{
    /**
     * @return Collection
     */
    public function index();
}