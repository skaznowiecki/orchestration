<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testGetUsers()
    {
        $user = factory('App\Models\User')->create();
        $this->get('/users')->seeJson([
            'id' => $user->id
        ]);
        $this->assertEquals(200, $this->response->status());
    }
}
