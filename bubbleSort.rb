def bubble_sort(array)
   n = array.length
   swapped = true
   while swapped do
     swapped = false
     (n - 1).times do |i|
       if array[i] > array[i + 1]
         array[i], array[i + 1] = array[i + 1], array[i]
     swapped = true
       end
     end
   end
   array 
end

p bubble_sort([4,3,78,2,0,2,30,1])