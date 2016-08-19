<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;

/**
 * Class ApiRequest
 *
 */
class ApiRequest extends Request
{
    /**
     * {@inheritDoc}
     */
    public function authorize()
    {
        return true;
    }

    /**
     * {@inheritDoc}
     */
    protected function failedValidation(Validator $validator)
    {
        throw new ValidationException($validator);
    }
}