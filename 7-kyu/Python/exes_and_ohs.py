"""
Check to see if a string has the same amount of 'x's and 'o's. The method must
return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


https://www.codewars.com/kata/55908aad6620c066bc00002a
"""


def xo(string):
    os = xs = 0
    for char in string.lower():
        os += 1 if char == 'o' else 0
        xs += 1 if char == 'x' else 0
    return os == xs
