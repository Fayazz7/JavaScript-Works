Synchronous and asynchronous programming refer to different approaches for handling tasks and operations in a program.

**Synchronous Programming:**
- In synchronous programming, tasks are executed one after the other, in a sequential manner.
- When a task is initiated, the program waits for it to complete before moving on to the next task.
- Synchronous operations block the execution of code until the operation completes, which means that if one operation takes a long time to finish, the entire program is held up.

**Asynchronous Programming:**
- In asynchronous programming, tasks are executed concurrently, allowing multiple operations to be performed simultaneously.
- Asynchronous operations do not block the execution of code. Instead, the program continues to run while waiting for the operations to complete.
- Asynchronous programming is commonly used in scenarios where tasks involve I/O operations or network requests, as it allows the program to continue executing other tasks while waiting for the I/O operations to finish.

**Short Note:**
Synchronous programming executes tasks sequentially, blocking the program's execution until each task completes, while asynchronous programming allows tasks to execute concurrently, enabling the program to continue running while waiting for long-running operations to finish. Asynchronous programming is particularly useful for improving performance and responsiveness in applications that involve I/O-bound or network-bound operations.

How the synchronous JS act like asynchronous?
--> it using webAPI
in WebAPI -->   -setTimeOut()
                -setIntreval()
                -DOMEvents
                -fetch
                -XMLHTTP

More info watch class --> 2024-02-14 js dom -- last 20 Min

? J S runtime Compiler --> is combination of JS Engine and WebAPI