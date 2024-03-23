
list = [1, 4, 2, 5, 6, 7, 3, 9, 8, 0]

def booble_sort(arr):
  executions = 0

  for i in range(len(arr)):
    for j in range(len(arr)):
      arr[i], arr[j] = arr[j], arr[i]
      executions += 1

def booble_sort_optmized(arr):
  executions = 0

  for i, item_i in enumerate(arr):
    for j, item_j in enumerate(arr):
      arr[i], arr[j] = item_j, item_i
      executions += 1


booble_sort(list)