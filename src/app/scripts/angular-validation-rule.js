(function() {
    angular
        .module('validation.rule', ['validation'])
        .config(config);

    function config($validationProvider) {
        var expression = {
            required: function(value) {
                return !!value;
            },
            url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
            email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
            password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
            number: /^\d+$/,
            minlength: function(value, scope, element, attrs, param) {
                return value.length >= param;
            },
            maxlength: function(value, scope, element, attrs, param) {
                return value.length <= param;
            }
        };

        var defaultMsg = {
            required: {
                error: 'Input required',
                success: 'It\'s Required'
            },
            url: {
                error: 'Please enter valid Url',
                success: 'It\'s Url'
            },
            email: {
                error: 'Please enter valid Email ',
                success: 'It\'s Email'
            },
            password: {
                error: 'Minimum 8 characters atleast 1 Alphabet, 1 Number and 1 Special Character ',
                success: 'It\'s Password'
            },
            number: {
                error: 'Please enter valid Number',
                success: 'It\'s Number'
            },
            minlength: {
                error: 'This should be longer',
                success: 'Long enough!'
            },
            maxlength: {
                error: 'This should be shorter',
                success: 'Short enough!'
            }
        };
        $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
    }
}).call(this);



// original file
// (function() {
//     angular
//         .module('validation.rule', ['validation'])
//         .config(['$validationProvider', function($validationProvider) {
//             var expression = {
//                 required: function(value) {
//                     return !!value;
//                 },
//                 url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
//                 email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
//                 password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
//                 number: /^\d+$/,
//                 minlength: function(value, scope, element, attrs, param) {
//                     return value.length >= param;
//                 },
//                 maxlength: function(value, scope, element, attrs, param) {
//                     return value.length <= param;
//                 }
//             };

//             var defaultMsg = {
//                 required: {
//                     error: 'Input required',
//                     success: 'It\'s Required'
//                 },
//                 url: {
//                     error: 'Please enter valid Url',
//                     success: 'It\'s Url'
//                 },
//                 email: {
//                     error: 'Please enter valid Email ',
//                     success: 'It\'s Email'
//                 },
//                 password: {
//                     error: 'Minimum 8 characters atleast 1 Alphabet, 1 Number and 1 Special Character ',
//                     success: 'It\'s Password'
//                 },
//                 number: {
//                     error: 'Please enter valid Number',
//                     success: 'It\'s Number'
//                 },
//                 minlength: {
//                     error: 'This should be longer',
//                     success: 'Long enough!'
//                 },
//                 maxlength: {
//                     error: 'This should be shorter',
//                     success: 'Short enough!'
//                 }
//             };
//             $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
//         }]);
// }).call(this);