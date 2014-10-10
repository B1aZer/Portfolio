My Portfolio
=========

Vim replacement for porduction:

%s/images\/\(\S*\)"/\{\{ static('images\/\1') \}\}"/cg
%s/styles\/\(\S*\)"/\{\{ static('styles\/\1') \}\}"/cg
%s/scripts\/\(\S*\)"/\{\{ static('scripts\/\1') \}\}"/cg
