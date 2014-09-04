What is flat?
====

Flat is a hyper-simple flat data format.  I use JSON for data serialization but it's cumbersome for big listy things.
Flat is not designed for heirarchtical data, JSON is still recommended for that.  Flat is for when you have items with flat
data.  Flat is designed to be readable (and writable!) so it has minimal syntax and minimal rules, you should be able to
"just know" how it works.

Basically a .flat file is a list.  Each item is a bunch of key-value pairs.  There are only 3 syntax symbols:

* Comma : denotates a list of values
* line-break (\n) : denotates end of key value pair
* double line-break (\n\n) : denotates end of item

While values are strings they should be interpreted appropriately.  For example, 1/12/1991 should be a date, 123 should
be a number.  If it has spaces it's a string and beginning and ending whitespace should be trimmed on the value.

At present colons, commas and linebreaks cannot be present in keys (and likely will never be) or values (perhaps escaping
could be used).
