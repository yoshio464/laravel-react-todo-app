<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user_id = $this->faker->numberBetween(1, 3);
        return [
            'title' => $user_id . ':' . $this->faker->realText(rand(15, 40)),
            'is_done' => $this->faker->boolean(50),
            'user_id' => $user_id,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
