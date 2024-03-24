list = [1, 4, 9, 5, 7, 6, 3, 2, 8, 0]

def insertion_sort(arr):
  for i in range(len(arr)):
    for j in range(i):
      if arr[j] < arr[j-1]:
        arr[j], arr[j-1] = arr[j-1], arr[j]


insertion_sort(list)