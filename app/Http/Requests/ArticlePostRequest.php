<?php

namespace App\Http\Requests;

class ArticlePostRequest extends ApiRequest
{
    /**
     * Get the validation roles that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'story' => 'required',
        ];
    }
}