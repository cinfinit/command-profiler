
## Command-Profiler 🚀 [![NPM version](https://img.shields.io/npm/v/command-profiler.svg?style=flat)](https://www.npmjs.com/package/command-profiler) [![NPM downloads](https://img.shields.io/npm/dm/command-profiler.svg?style=flat)](https://npmjs.org/package/command-profiler) 

> **Scoped command profiles for the lazy (and efficient) developer in all of us.**

---

## What is **Command-Profiler**?

Tired of juggling a million terminal commands across projects?
Wish you could magically summon the exact set of commands you need — whether you’re working on a project or just doing your global thing?

**Command-Profiler** has got your back.

It’s a CLI tool that helps you create, edit, delete, and run *profiles* — think of them as command playlists — scoped either **per project** or **globally** across your system.

---

## Why use Command-Profiler?

* 🚀 **Project or global scope:** Use project-specific command bundles or go global if you’re feeling adventurous.
* 🎯 **Keep your workflow clean:** No more hunting through your shell history or guessing commands.
* 🧙‍♂️ **Wizardry with a twist:** Profiles are collections of commands you run with a single keyword. Boom!
* ✂️ **Edit/Delete:** Change your mind? Edit or delete profiles without breaking a sweat.
* ⚡ **Run anytime:** Fire off your favorite command combos instantly.

---

## Installation

```bash
npm install -g command-profiler
```

---

## Quickstart

### 🧰 init — Initialize a config in your current project

Before using command-profiler inside a project, you can run:

```bash
npx cmdprofiler init
```


This will create a local configuration for your project:

your-project/
├── cmdprofiler/
│   └── config.json


The config.json will look like this:

{
  "profiles": {}
}


Once initialized, any profiles you create from this folder (and any subfolders) will be stored locally in that cmdprofiler/config.json file — not in your global config. 🎯

### Create a profile

```bash
npx cmdprofiler create dev
```

You’ll be prompted to enter commands one-by-one. Press enter on an empty line when done.

---

### List profiles

```bash
npx cmdprofiler list
```

---

### Run a profile

```bash
npx cmdprofiler run dev
```

---

### Edit a profile

```bash
npx cmdprofiler edit dev
```

---

### Delete a profile

```bash
npx cmdprofiler delete dev
```

---

## Quick usage 

### 📘 Full Usage Flow in a Project

Go into your project folder:
```bash
cd ~/Projects/my-awesome-app
```

Run the init command:

```bash
npx cmdprofiler init
```


Create your first profile:

```bash
npx cmdprofiler create dev
```


List and run it:
```bash
npx cmdprofiler list
npx cmdprofiler run dev
```



Now you're flying. 🛫

## Pro Tips 🧠

* Use `--global` flag to manage global profiles:

```bash
npx cmdprofiler list --global
npx cmdprofiler create deploy --global
```

* Profiles are stored in:

  * Project scope: `cmdprofiler/config.json` in your project root (or nearest ancestor folder)
  * Global scope: `~/cmdprofiler/config.json`

* You can add any shell commands you want — from `npm run build` to `docker-compose up`.

---


## Final Words

If you’re the type who likes to automate, simplify, and impress your future self — **command-profiler** is your new best friend.
Make your terminal less talk, more action.

---

## ABOUT THE AUTHOR

** [cinfinit](https://github.com/cinfinit)** — believes in clean code, minimal commands, and maximal productivity. When not coding, probably pondering the meaning of life… or the perfect CLI UX.

---
