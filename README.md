## SNSOFT test repo

Require node environment to test this repo 
(all answers are done with simple scripting to prevent any specific IDE and sdk required)

Intentionally using only basic node module without require any extra module

1. clone the repo of course

```
$ git clone <url>
```

### QUESTION 1 DEMO

1. check or alter sample strings array in /sample/stringArrays.json
2. find longest string using findLongestString.js script

```
$ node findLongestString.js
```

### QUESTION 2 DEMO

1. run script with argument <last integer>, expected result: 1+2+...+<last integer>

```
$ node sumAll.js <any_integer_number>
```

### QUESTION 3 DEMO

1. run script with argument <number of output array length, N>
  2 arrays of random length between (10 to 30 will be generated and sorted), edit setting if wish to have other length of sample data
  and then N number of smallest numbers will be searched from both array

```
$ node findXNumberOfSmallestNumber.js <N>
```

### QUESTION 4 DEMO

1. check or alter mimiced employee <database> in /sample/employees.js
2. run scripts to find all direct and indirect reportees using scripts with argument of employee.name found in <database>

```
$ node findAllReportees.js <employee_name>
```
