---
layout: blog
title: Clear and Reset Screen in Bash
category: [bash]
tags: [bash,command,linux,unix,shell]
---

# The easiest way to clear scrollback buffer of terminal + some deeper explanation?

Why bother?

Clearing scrollback buffer is handy in many ways, for example, when I wish to run some command with long output,
and want to quickly scroll to start of this output. When scrollback buffer is cleared, I can just scroll to top, and will be done.

Some considerations:

There is `clear` command, according to man,

> **clear** clears your screen if this is possible, including its scrollback buffer (if the extended "E3" capability is defined).

In gnome-terminal clear does not clear scrollback buffer. (What is "E3" capability, though?)

There is also `reset`, which clears, but it does a little bit more than that, and it is really slow (on my system it takes more than a second,
which is significant delay for humans to be noticed).

And there is `echo -ne '\ec'` or `echo -ne '\033c'`, which does the job. And indeed it is much faster than `reset`.

The question is, what is `\ec` sequence, how it differs from what `clear` and `reset` does, and why there is no separate command for it?

There is also readline's `C-l` key sequence, which by default bound to `clear-screen` command (I mean, readline command, not shell command). 
What is this command? Which escape sequence it emits? How does it actually work? Does it run shell command? Or what? Again, in gnome-terminal, 
it seems like it works just by spiting out blank lines until prompt appear in top line of terminal. Not sure about other terminal emulators. This is very cumbersome behavior. It pollutes scrollback with chunks of emptiness, so you must scroll up more, and more. It is like a hack, rather than clean solution.

Another question is, is there a readline command for mentioned `\ec` sequence? I want to bound it to `C-l` instead because I always want 
to clear scrollback buffer when I clear the screen.

And another question is how to just type such escape sequence into terminal, to perform desired action? Then do not have to think about binding
`C-l` to another readline command (if such command exists). I tried typing `Esc`, then `c` but this does not work.


