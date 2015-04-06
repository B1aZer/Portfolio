My Portfolio
=========

You can check it out at [yaltawest](http://yaltawest.com/ "yaltawest web studio")

Vim replacement for production:

%s/images\/\(\S*\)"/\{\{ static('images\/\1') \}\}"/cg
%s/styles\/\(\S*\)"/\{\{ static('styles\/\1') \}\}"/cg
%s/scripts\/\(\S*\)"/\{\{ static('scripts\/\1') \}\}"/cg
