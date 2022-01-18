=begin

  Welcome. In this kata, you are asked to square every digit of 
  a number and concatenate them.

  For example, if we run 9119 through the function, 811181 will
  come out, because 92 is 81 and 12 is 1.

  Note: The function accepts an integer and returns an integer
  
  https://www.codewars.com/kata/546e2562b03326a88e000020

=end

def square_digits num
  res = ''
  num = num.to_s.split('')
  for i in (0..num.length-1) do
    num[i] = num[i].to_i
    num[i] *= num[i]
    res += num[i].to_s
  end
  res.to_i
end
