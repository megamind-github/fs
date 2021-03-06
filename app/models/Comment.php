<?php

class Comment extends Eloquent{

    public function message()
    {
        return $this->belongsTo('Message');
    }
    public function user()
    {
        return $this->belongsTo('User');
    }
    public static function validate($input) {

        $rules = array(
            'user_id' => 'required|integer|exists:users,id',
            'message_id' => 'required|integer|exists:messages,id',
            'content' => 'required'
        );
        return Validator::make($input, $rules);
    }
}