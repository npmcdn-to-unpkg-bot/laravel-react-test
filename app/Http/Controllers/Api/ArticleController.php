<?php

namespace App\Http\Controllers\Api;

use App\Article;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApiRequest;
use App\Http\Requests\ArticlePostRequest;
use App\Http\Requests\ArticleGetRequest;

use Illuminate\Http\JsonResponse;

/**
 *
 * Class ArticleController
 */
class ArticleController extends Controller
{
    /**
     *
     * @return JsonResponse
     */
    public function index()
    {
        $articles = Article::query()
            ->get();

        return response()->json($articles);
    }

    /**
     *
     * @param Article $article
     * @return JsonResponse
     */
    public function find(Article $article)
    {
        return response()->json($article->toArray());
    }

    /**
     *
     * @param ArticlePostRequest $request
     * @return JsonResponse
     */
    public function store(ArticlePostRequest $request)
    {
        $title = $request->get('title');
        $story = $request->get('story');

        Article::create([
            'title' => $title,
            'story' => $story,
        ]);

        return response()->json([
           'result' => true,
        ]);
    }

    /**
     * @param Article $article
     * @param ArticlePostRequest $request
     * @return JsonResponse
     */
    public function update(Article $article, ArticlePostRequest $request)
    {
        $articleArray = $article->toArray();

        Article::query()
            ->find($articleArray['id'])
            ->update($request->toArray());

        return response()->json($article->toArray());
    }

    /**
     *
     * @param Article $article
     * @return JsonResponse
     */
    public function delete(Article $article)
    {
        $articleArray = $article->toArray();

        Article::query()
            ->find($articleArray['id'])
            ->delete();

        return response()->json([
            'result' => true,
        ]);
    }

}