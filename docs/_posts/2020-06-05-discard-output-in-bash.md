---
layout: blog
title: Discard output in Bash
category: [bash]
tags: [bash,command,linux,unix,shell]
---

# Discard output in Bash

## Output Redirection `>`|`>>`

This is used to redirect the program output and append the output at the end of the file.

`>` redirects output to a file, overwriting the file.

`>>` redirects output to a file appending the redirected output at the end.

> The `>>` seems sort of superfluous, since `>>` means append while `>` means truncate and write, and either appending to or writing to `/dev/null` has the same net effect. I usually just use `>` for that reason.

## Special File `/dev/null`

This is a [Pseudo-devices special file](https://en.wikipedia.org/wiki/Device_file#Pseudo-devices).

Command `ls -l /dev/null` will give you details of this file:

```sh

crw-rw-rw-. 1 root root 1, 3 Mar 20 18:37 /dev/null

```

**Did you observe `crw`?**

Which means it is a pseudo-device file which is of [character-special-file](https://unix.stackexchange.com/questions/60034/what-are-character-special-and-block-special-files-in-a-unix-system) type that provides serial access.

> `/dev/null` accepts and discards all input; produces no output (always returns an end-of-file indication on a read). 

## File Descriptor `2>&1`

> `2>&1` redirects standard error (2) to standard output (1), which then discards it as well since standard output has already been redirected.

Whenever you execute a program, the operating system always opens three files, standard input, standard output, and standard error as we know whenever a file is opened, the operating system (from kernel) returns a non-negative integer called a file descriptor. The file descriptor for these files are 0, 1, and 2, respectively.

So `2>&1` simply says redirect standard error to standard output.

`&` means whatever follows is a file descriptor, not a filename.

In short, by using this command you are telling your program not to shout while executing.

**What is the importance of using `2>&1`?**

If you don't want to produce any output, even in case of some error produced in the terminal.

To explain more clearly, let's consider the following example:

```sh

$ ls -l > /dev/null

```

For the above command, no output was printed in the terminal, but what if this command produces an error:

```sh

$ ls -l file_doesnot_exists > /dev/null

ls: cannot access file_doesnot_exists: No such file or directory

```

Despite I'm redirecting output to `/dev/null`, it is printed in the terminal.

It is because we are not redirecting error output to `/dev/null`, so in order to redirect error output as well, it is required to add `2>&1`:

```sh

$ ls -l file_doesnot_exists > /dev/null 2>&1

```
