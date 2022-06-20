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

    public function test_post_tasks_api()
    {
        $data = ['title' => 'テスト投稿'];
        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertCreated()
            ->assertJsonFragment($data);
    }

    public function test_update_tasks_api()
    {
        $task = Task::factory()->create();
        $task->title = '編集';
        $response = $this->patchJson("api/tasks/{$task->id}", $task->toArray());

        $response
            ->assertOk()
            ->assertJsonFragment($task->toArray());
    }

    public function test_delete_tasks_api()
    {
        $task = Task::factory()->count(10)->create();
        $response = $this->deleteJson('api/tasks/1');
        $response->assertOk();
        $response = $this->getJson('api/tasks');
        $response->assertJsonCount($task->count() - 1);
    }
}
