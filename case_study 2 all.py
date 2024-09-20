# Task 1: Message Storage and Retrieval:
def simple_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap if the element found is greater
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr

# Task 2: Real-Time Updates:
def bubble_sort(arr):
    n = len(arr)
    # Outer loop runs n times
    for i in range(n):
        # Inner loop reduces the range each time (n-i-1)
        for j in range(0, n -i, -1):
            # Comparison: arr[j] > arr[j + 1]
            if arr[j] > arr[j + 1]:
                #Swap: arr[j] and arr[j +1]
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Task 3: Conversation List Management:
def optimized_bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False # Track if any elements were swapped
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True # Mark swapped as True if a swap occurs
        if not swapped:
            break # Stop if no swaps happened in the inner loop
    return arr


# Merge Sort (O(n log n)):
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2 # Find the middle of the array
        L = arr[:mid]   # Left half 
        R = arr[mid:]   # Right half

        # Recursively sort both halves
        merge_sort(L)
        merge_sort(R)

        i = j = k = 0 # Initial indexes for L, R, and arr

        # Merging the sorted halves
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        # Checking for remaining elements
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr

# Quick Sort (O(n log n) on average):
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else: 
        pivot = arr[len(arr) // 2] # Choose the pivot 
        left = [x for x in arr if x < pivot] # Elements less than pivot 
        middle = [x for x in arr if x == pivot] # Elements equal to pivot
        right = [x for x in arr if x > pivot] # Elements greater than pivot
        return quick_sort(left) + middle + quick_sort(right)
    
# How to use:
arr = [64, 34, 25, 12, 22, 11, 90]
print("Original array:", arr)
print("Bubble Sort:", bubble_sort(arr[:]))
print("Optimized Bubble Sort:", optimized_bubble_sort(arr[:]))
print("Merge sort:", merge_sort(arr[:]))
print("Quick Sort:", quick_sort(arr[:]))



