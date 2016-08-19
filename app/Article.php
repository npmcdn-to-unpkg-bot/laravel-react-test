<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Article extends Model
 */
class Article extends Model
{
    /**
     * {@inheritDoc}
     */
    protected $table = 'articles';

    /**
     * {@inheritDoc}
     */
    protected $fillable = [
        'title',
        'story',
    ];

    protected $id;

    public function getId()
    {
        return $this->id;
    }
}