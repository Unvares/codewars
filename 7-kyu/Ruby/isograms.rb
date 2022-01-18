=begin

  An isogram is a word that has no repeating letters, consecutive or non-consecutive.
  Implement a function that determines whether a string that contains only letters is
  an isogram. Assume the empty string is an isogram. Ignore letter case.

  Example: (Input --> Output)
    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)

  https://www.codewars.com/kata/54ba84be607a92aa900000f1

=end

def is_isogram(string)
  array = string.downcase.split('')
  hash = {}
  
  array.each do |x|
    if hash[x]
      hash[x] += 1
    else hash[x] = 1
    end
  end
  
  hash.each do |k, v|
    return false if (v > 1)
  end
  return true
end
