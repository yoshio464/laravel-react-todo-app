<?php

namespace Tests\Feature;

use App\Models\Task;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_get_tasks_api()
    {
        $tasks = Task::factory()->count(20)->create();
        $response = $this->getJson('api/tasks');
        // dd($response->json());

        $response->assertJsonCount($tasks->count());
    }
}
