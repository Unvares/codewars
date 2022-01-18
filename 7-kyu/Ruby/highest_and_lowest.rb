=begin

  In this little assignment you are given a string of space separated numbers,
  and have to return the highest and lowest number.

  Examples
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"

  https://www.codewars.com/users/Unvares/completed_solutions

=end

def high_and_low(numbers)
  numbers = numbers.split(' ')
  low, high = numbers[0].to_i, numbers[0].to_i
  numbers.each do |x|
    x = x.to_i
    low = x if x < low
    high = x if x > high
  end
  return "#{high} #{low}"
end
