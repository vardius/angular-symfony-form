/**
 * This file is part of the angular-symfony-form package.
 *
 * (c) Rafał Lorenz <support@vardius.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

run.$inject = ['$templateCache'];

export function run($templateCache) {
    $templateCache.put('error_messages', require('./../views/messages.html'));
}